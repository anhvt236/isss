# Nối website ISSS với Google Sheets

Sau khi cài, mỗi đăng ký tư vấn và lịch hẹn trên website sẽ thành một dòng trong Google Sheet của bạn. Tư vấn viên mở Sheet là thấy ngay. Mất khoảng 10 phút, làm một lần.

## Bước 1 – Tạo Google Sheet

1. Vào https://sheets.google.com, tạo bảng tính trống, đặt tên ví dụ **ISSS – Đăng ký**.
2. Không cần tạo cột. Script tự tạo 2 trang **Đăng ký tư vấn** và **Lịch hẹn** khi có dữ liệu đầu tiên.

## Bước 2 – Dán script

1. Trong Sheet: **Tiện ích mở rộng (Extensions) → Apps Script**.
2. Xoá đoạn mã mẫu `function myFunction() {}`.
3. Mở file `google-sheets/Code.gs` trong thư mục ISSS, sao chép **toàn bộ** và dán vào.
4. Bấm biểu tượng 💾 **Lưu**.

## Bước 3 – Triển khai thành Web app

1. Bấm **Triển khai (Deploy) → Triển khai mới (New deployment)**.
2. Bấm ⚙ cạnh "Chọn loại", chọn **Ứng dụng web (Web app)**.
3. Điền:
   - **Thực thi với tư cách (Execute as):** Tôi (Me)
   - **Người có quyền truy cập (Who has access):** Bất kỳ ai (Anyone)
4. Bấm **Triển khai**. Google sẽ hỏi cấp quyền:
   - Bấm **Cấp quyền truy cập**, rồi chọn tài khoản của bạn.
   - Nếu thấy "Google chưa xác minh ứng dụng này": bấm **Nâng cao**, rồi **Đi tới … (không an toàn)**. Đây là script của chính bạn nên không sao.
   - Bấm **Cho phép**.
5. Sao chép **URL ứng dụng web**, dạng `https://script.google.com/macros/s/XXXX/exec`.

## Bước 4 – Dán URL vào website

Mở file `js/config.js` và dán URL vào giữa hai dấu nháy:

```js
sheetsUrl: 'https://script.google.com/macros/s/XXXX/exec'
```

Lưu file, mở lại website và nhấn **Ctrl + F5**.

## Bước 5 – Thử

1. Vào trang **Tư vấn**, gửi một đăng ký thử và đặt một lịch hẹn thử.
2. Mở Google Sheet: phải thấy 2 trang mới, mỗi trang 1 dòng.
3. Vào **Hồ sơ của tôi** trên website: mục vừa gửi có nhãn "✓ Tư vấn viên đã nhận".
4. Bấm **Huỷ** lịch hẹn: cột **Trạng thái** trong Sheet đổi thành "Đã huỷ".
5. Xoá các dòng thử trong Sheet.

## Website làm gì với Sheet

| Chức năng | Cách hoạt động |
|---|---|
| Đăng ký tư vấn | Thêm 1 dòng vào trang **Đăng ký tư vấn**, trạng thái "Mới" |
| Đặt lịch hẹn | Thêm 1 dòng vào trang **Lịch hẹn**. Nếu giờ đó (cùng hình thức) đã có người đặt, website báo chọn giờ khác |
| Giờ trống | Khi mở trang Tư vấn, website lấy các giờ đã đặt từ Sheet và khoá lại. Chỉ lấy ngày/giờ/hình thức, không lấy tên hay số điện thoại |
| Huỷ lịch | Học sinh bấm Huỷ: dòng đó chuyển "Đã huỷ" và giờ đó mở lại cho người khác |
| Mất mạng | Đăng ký được giữ trên máy học sinh và tự gửi lại khi có mạng (thử tối đa 5 lần) |
| Chống spam | Có ô ẩn để chặn bot tự điền form |

## Tư vấn viên dùng Sheet thế nào

- Cột **Trạng thái** có danh sách chọn:
  - Đăng ký tư vấn: Mới / Đã liên hệ / Đang tư vấn / Đã ký hợp đồng / Không phù hợp.
  - Lịch hẹn: Mới / Đã xác nhận / Đã gặp / Đã huỷ.
- Muốn khoá một giờ không cho đặt (ví dụ tư vấn viên nghỉ): thêm tay một dòng vào trang **Lịch hẹn** với ngày dạng `2026-11-20`, giờ dạng `09:30` và hình thức ghi đúng như trên website, ví dụ `Online (Google Meet)`.
- Nhận email khi có đăng ký mới: trong Sheet chọn **Công cụ (Tools) → Cài đặt thông báo (Notification settings)**, bật thông báo khi có thay đổi.

## Sửa script sau này

Sửa `Code.gs` trong Apps Script, rồi chọn **Triển khai → Quản lý triển khai → ✏ Chỉnh sửa → Phiên bản: Phiên bản mới → Triển khai**. URL giữ nguyên, không cần sửa `config.js`.

## Lưu ý

- Dữ liệu học sinh (tên, số điện thoại, email) nằm trong Google Drive của tài khoản đã tạo Sheet. Chỉ chia sẻ Sheet cho người cần xem.
- Chỉ đăng ký tư vấn và lịch hẹn được gửi lên Sheet. Trường đã lưu, danh sách so sánh và checklist hồ sơ vẫn chỉ nằm trên trình duyệt của học sinh.
