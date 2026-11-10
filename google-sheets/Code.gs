/**
 * ISSS – nhận đăng ký tư vấn và lịch hẹn từ website, ghi vào Google Sheets.
 * Hướng dẫn cài đặt từng bước: xem google-sheets/HUONG-DAN.md
 *
 * Tóm tắt:
 *  1. Tạo Google Sheet mới → Tiện ích mở rộng (Extensions) → Apps Script.
 *  2. Xoá mã mẫu, dán toàn bộ file này vào, bấm Lưu.
 *  3. Triển khai (Deploy) → Triển khai mới → loại "Ứng dụng web" (Web app):
 *       - Thực thi với tư cách (Execute as): Tôi (Me)
 *       - Người có quyền truy cập (Who has access): Bất kỳ ai (Anyone)
 *     Cấp quyền, rồi sao chép URL dạng https://script.google.com/macros/s/…/exec
 *  4. Dán URL đó vào js/config.js (sheetsUrl).
 * Sửa file này sau khi đã triển khai: Deploy → Manage deployments → Edit → Version: New version
 * (URL giữ nguyên).
 */

const STATUS_NEW = 'Mới';
const STATUS_CANCELLED = 'Đã huỷ';

const SHEETS = {
  lead: {
    name: 'Đăng ký tư vấn',
    columns: [['createdAt', 'Thời gian'], ['status', 'Trạng thái'], ['role', 'Bạn là'], ['name', 'Họ tên'], ['phone', 'Điện thoại'],
      ['email', 'Email'], ['grade', 'Đang học'], ['year', 'Năm nhập học'], ['country', 'Quốc gia'], ['major', 'Ngành'],
      ['school', 'Trường'], ['ielts', 'IELTS'], ['gpa', 'Điểm TB'], ['budget', 'Ngân sách'], ['note', 'Câu hỏi'], ['id', 'Mã']]
  },
  booking: {
    name: 'Lịch hẹn',
    columns: [['createdAt', 'Thời gian đặt'], ['status', 'Trạng thái'], ['day', 'Ngày hẹn'], ['time', 'Giờ'], ['mode', 'Hình thức'],
      ['name', 'Họ tên'], ['phone', 'Điện thoại'], ['country', 'Quốc gia'], ['major', 'Ngành'], ['id', 'Mã']]
  }
};

// GET ?action=slots → các khung giờ đã có người đặt (chỉ ngày/giờ/hình thức, không lộ thông tin cá nhân)
function doGet(e) {
  if (e.parameter.action !== 'slots') return json({ ok: true, service: 'ISSS' });
  return json({ ok: true, slots: takenSlots() });
}

// Phải khớp với website (js/app.js: SLOT_TIMES, hình thức trong #b-mode, 10 ngày làm việc tới)
const SLOT_TIMES = ['08:30', '09:30', '10:30', '13:30', '14:30', '15:30', '16:30', '19:00', '20:00'];
const MODES = ['Online (Google Meet)', 'Văn phòng Hà Nội', 'Văn phòng TP.HCM'];
const BOOKING_DAYS_AHEAD = 21;
const PHONE_RE = /^(0|\+84)(3|5|7|8|9)\d{8}$/;
const EMAIL_RE = /^[^\s@]{1,64}@[^\s@]{1,255}\.[^\s@]{2,}$/;
const ID_RE = /^[a-z0-9]{6,32}$/;
// Giới hạn chống spam: mỗi số điện thoại và toàn hệ thống trong một khoảng thời gian
const LIMITS = { perPhone: 5, perPhoneWindow: 3600, global: 120, globalWindow: 600, activeBookingsPerPhone: 2 };

function doPost(e) {
  const lock = LockService.getScriptLock();
  lock.waitLock(10000);
  try {
    const data = JSON.parse(e.postData.contents);
    // Ô ẩn "website" chỉ bot mới điền – bỏ qua nhưng vẫn báo thành công
    if (data.website) return json({ ok: true });
    const invalid = validate(data);
    if (invalid) return json({ ok: false, error: 'invalid', detail: invalid });
    if (data.type === 'cancel') return cancelBooking(data);
    const conf = SHEETS[data.type];
    const sheet = getSheet(data.type);
    // Gửi lại do mất mạng: đã có mã này rồi thì không ghi trùng
    if (findRow(sheet, data.type, 'id', data.id) > 0) return json({ ok: true, duplicate: true });
    if (!withinLimits(data.phone)) return json({ ok: false, error: 'rate_limited' });
    if (data.type === 'booking') {
      if (takenSlots().includes(slotKey(data.day, data.time, data.mode))) return json({ ok: false, error: 'slot_taken' });
      if (activeBookings(data.phone) >= LIMITS.activeBookingsPerPhone) return json({ ok: false, error: 'too_many_bookings' });
    }
    data.status = STATUS_NEW;
    sheet.appendRow(conf.columns.map(([key]) => clean(key === 'createdAt' ? (data.createdAt || new Date().toISOString()) : data[key])));
    return json({ ok: true });
  } catch (err) {
    return json({ ok: false, error: String(err) });
  } finally {
    lock.releaseLock();
  }
}

function cancelBooking(data) {
  const sheet = getSheet('booking');
  const row = findRow(sheet, 'booking', 'id', data.id);
  if (row < 0) return json({ ok: true, missing: true });
  // Chỉ người đặt (cùng số điện thoại) mới huỷ được
  if (cellValue(sheet, 'booking', row, 'phone') !== String(data.phone || '')) return json({ ok: false, error: 'Không khớp số điện thoại' });
  sheet.getRange(row, colIndex('booking', 'status')).setValue(STATUS_CANCELLED);
  return json({ ok: true });
}

function takenSlots() {
  const sheet = getSheet('booking');
  const n = sheet.getLastRow() - 1;
  if (n < 1) return [];
  const rows = sheet.getRange(2, 1, n, SHEETS.booking.columns.length).getDisplayValues();
  const i = key => colIndex('booking', key) - 1;
  const today = Utilities.formatDate(new Date(), 'Asia/Ho_Chi_Minh', 'yyyy-MM-dd');
  return rows.filter(r => r[i('status')] !== STATUS_CANCELLED && r[i('day')] >= today)
    .map(r => slotKey(r[i('day')], r[i('time')], r[i('mode')]));
}

const slotKey = (day, time, mode) => [day, time, mode].join('|');

// Trả về mô tả lỗi nếu dữ liệu không hợp lệ, '' nếu hợp lệ
function validate(d) {
  const str = (v, max) => typeof v === 'string' && v.trim().length > 0 && v.length <= max;
  const opt = (v, max) => v == null || v === '' || (typeof v === 'string' && v.length <= max);
  if (!d || !['lead', 'booking', 'cancel'].includes(d.type)) return 'type';
  if (!ID_RE.test(String(d.id || ''))) return 'id';
  if (!PHONE_RE.test(String(d.phone || ''))) return 'phone';
  if (d.type === 'cancel') return '';
  if (!str(d.name, 100) || d.name.trim().length < 2) return 'name';
  if (d.type === 'lead') {
    if (!EMAIL_RE.test(String(d.email || '')) || d.email.length > 254) return 'email';
    const short = ['role', 'grade', 'year', 'country', 'major', 'ielts', 'gpa', 'budget'];
    if (!short.every(k => opt(d[k], 100)) || !opt(d.school, 200) || !opt(d.note, 2000)) return 'field_length';
    return '';
  }
  // booking: ngày trong khoảng cho phép, không phải Chủ nhật; giờ và hình thức đúng danh sách
  if (!/^\d{4}-\d{2}-\d{2}$/.test(String(d.day))) return 'day';
  const tz = 'Asia/Ho_Chi_Minh';
  const today = Utilities.formatDate(new Date(), tz, 'yyyy-MM-dd');
  const last = Utilities.formatDate(new Date(Date.now() + BOOKING_DAYS_AHEAD * 864e5), tz, 'yyyy-MM-dd');
  if (d.day <= today || d.day > last) return 'day_range';
  if (new Date(d.day + 'T12:00:00Z').getUTCDay() === 0) return 'sunday';
  if (!SLOT_TIMES.includes(d.time)) return 'time';
  if (!MODES.includes(d.mode)) return 'mode';
  if (!opt(d.country, 100) || !opt(d.major, 100)) return 'field_length';
  return '';
}

// Đếm số lần ghi theo số điện thoại và toàn hệ thống bằng CacheService
function withinLimits(phone) {
  const cache = CacheService.getScriptCache();
  const bump = (key, max, ttl) => {
    const n = Number(cache.get(key) || 0) + 1;
    if (n > max) return false;
    cache.put(key, String(n), ttl);
    return true;
  };
  return bump('g', LIMITS.global, LIMITS.globalWindow) && bump('p:' + phone, LIMITS.perPhone, LIMITS.perPhoneWindow);
}

function activeBookings(phone) {
  const sheet = getSheet('booking');
  const n = sheet.getLastRow() - 1;
  if (n < 1) return 0;
  const rows = sheet.getRange(2, 1, n, SHEETS.booking.columns.length).getDisplayValues();
  const i = key => colIndex('booking', key) - 1;
  const today = Utilities.formatDate(new Date(), 'Asia/Ho_Chi_Minh', 'yyyy-MM-dd');
  return rows.filter(r => r[i('phone')] === phone && r[i('status')] !== STATUS_CANCELLED && r[i('day')] >= today).length;
}

function getSheet(type) {
  const conf = SHEETS[type];
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  let sheet = ss.getSheetByName(conf.name);
  if (!sheet) {
    sheet = ss.insertSheet(conf.name);
    sheet.appendRow(conf.columns.map(c => c[1]));
    sheet.setFrozenRows(1);
    sheet.getRange(1, 1, 1, conf.columns.length).setFontWeight('bold').setBackground('#e6ecfb');
    // Ô Trạng thái chọn từ danh sách để tư vấn viên cập nhật tiến độ
    const options = type === 'lead' ? [STATUS_NEW, 'Đã liên hệ', 'Đang tư vấn', 'Đã ký hợp đồng', 'Không phù hợp']
      : [STATUS_NEW, 'Đã xác nhận', 'Đã gặp', STATUS_CANCELLED];
    sheet.getRange(2, colIndex(type, 'status'), sheet.getMaxRows() - 1, 1)
      .setDataValidation(SpreadsheetApp.newDataValidation().requireValueInList(options, true).build());
  }
  return sheet;
}

const colIndex = (type, key) => SHEETS[type].columns.findIndex(c => c[0] === key) + 1;

function findRow(sheet, type, key, value) {
  const n = sheet.getLastRow() - 1;
  if (n < 1 || !value) return -1;
  const vals = sheet.getRange(2, colIndex(type, key), n, 1).getDisplayValues();
  const i = vals.findIndex(r => r[0] === String(value));
  return i < 0 ? -1 : i + 2;
}

const cellValue = (sheet, type, row, key) => sheet.getRange(row, colIndex(type, key)).getDisplayValue();

// Giới hạn độ dài; thêm dấu ' trước ô bắt đầu bằng = + - @ (chặn chèn công thức)
// và trước ô bắt đầu bằng chữ số, để Sheets giữ nguyên dạng chữ: không bỏ số 0 đầu số điện thoại,
// không tự đổi "2026-11-05" / "08:30" thành ngày giờ (takenSlots so sánh theo chuỗi)
function clean(v) {
  const s = v == null ? '' : String(v).slice(0, 2000);
  return /^[=+\-@\d]/.test(s) ? "'" + s : s;
}

function json(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj)).setMimeType(ContentService.MimeType.JSON);
}
