// Lộ trình chuẩn bị du học tính ngược từ ngày nhập học.
// Mốc tương đối tính bằng tháng/ngày trước ngày nhập học; hạn cố định (UCAS, Early/Regular Decision…) tính theo năm nhập học.
// Nguồn đã kiểm tra 11/2026: travel.state.gov (F-1 cấp sớm 365 ngày, nhập cảnh sớm nhất 30 ngày), UCAS (15/10 và 13/1/2027),
// GOV.UK (nộp visa Student sớm nhất 6 tháng, xét nghiệm lao cho người ở Việt Nam), Home Affairs (visa 500 nộp sớm nhất 124 ngày,
// sang sớm nhất 90 ngày), IRCC (PAL cho bậc cử nhân).
window.ISSS_ROADMAP = (function () {
  'use strict';

  // Kỳ nhập học chính của mỗi nước: tháng (0–11) và ngày bắt đầu điển hình
  const INTAKES = {
    my: [{ m: 7, d: 25, label: 'Kỳ mùa thu (tháng 8–9)', key: 'fall' }, { m: 0, d: 15, label: 'Kỳ mùa xuân (tháng 1)', key: 'spring' }],
    uc: [{ m: 1, d: 23, label: 'Kỳ 1 (cuối tháng 2)', key: 's1' }, { m: 6, d: 20, label: 'Kỳ 2 (tháng 7)', key: 's2' }],
    canada: [{ m: 8, d: 3, label: 'Kỳ mùa thu (tháng 9)', key: 'fall' }, { m: 0, d: 6, label: 'Kỳ mùa đông (tháng 1)', key: 'winter' }],
    anh: [{ m: 8, d: 21, label: 'Kỳ chính (cuối tháng 9)', key: 'sep' }]
  };

  const addMonths = (date, n) => { const d = new Date(date); d.setMonth(d.getMonth() + n); return d; };
  const addDays = (date, n) => { const d = new Date(date); d.setDate(d.getDate() + n); return d; };
  const at = (y, m, d) => new Date(y, m, d);

  // Mỗi mốc: { title, detail, from, to?, kind: 'task' | 'deadline', step, link? }
  function plan(country, start, o = {}) {
    const Y = start.getFullYear();
    const M = n => addMonths(start, -n);
    const D = n => addDays(start, -n);
    const items = [];
    const add = x => items.push(x);
    const ielts = {
      title: 'Ôn và thi IELTS',
      detail: 'Thi sớm để còn thời gian thi lại nếu chưa đạt. Kết quả IELTS có hạn 2 năm.',
      step: 'Chuẩn bị', kind: 'task', id: 'ielts'
    };

    if (country === 'my' && o.intake === 'fall') {
      add({ ...ielts, from: at(Y - 1, 2, 1), to: at(Y - 1, 7, 31) });
      add({ title: 'Thi SAT/ACT (nếu cần)', detail: 'Nhiều trường cho phép không nộp (test-optional), nhưng một số trường top như MIT đã bắt buộc lại. Điểm tốt giúp hồ sơ nổi bật và xét học bổng.', from: at(Y - 1, 2, 1), to: at(Y - 1, 9, 31), step: 'Chuẩn bị', kind: 'task' });
      add({ title: 'Chốt danh sách 6–10 trường', detail: 'Chia nhóm trường mơ ước / vừa sức / an toàn; ghi lại hạn nộp, học bổng và yêu cầu riêng của từng trường.', from: at(Y - 1, 4, 1), to: at(Y - 1, 7, 31), step: 'Chuẩn bị', kind: 'task', link: '#/truong?country=my' });
      add({ title: 'Viết bài luận Common App', detail: 'Common App mở hồ sơ năm mới từ 1/8. Bài luận chính tối đa 650 từ, cộng các bài luận phụ của từng trường.', from: at(Y - 1, 7, 1), to: at(Y - 1, 9, 25), step: 'Nộp hồ sơ trường', kind: 'task' });
      add({ title: 'Xin thư giới thiệu và học bạ lớp 9–12', detail: 'Nhờ 2 giáo viên và giáo viên chủ nhiệm/tư vấn; chuẩn bị bản dịch học bạ đủ 4 năm lớp 9–12.', from: at(Y - 1, 8, 1), to: at(Y - 1, 9, 15), step: 'Nộp hồ sơ trường', kind: 'task' });
      add({ title: 'Hạn nộp sớm (Early Action / Early Decision)', detail: 'Thường là 1/11, một số trường 15/11. Early Decision là cam kết theo học nếu đậu.', from: at(Y - 1, 10, 1), step: 'Nộp hồ sơ trường', kind: 'deadline' });
      add({ title: 'Hạn nộp thường (Regular Decision)', detail: 'Phần lớn trường hạn 1/1 đến 15/1. Kiểm tra hạn học bổng, có trường hạn sớm hơn.', from: at(Y, 0, 1), step: 'Nộp hồ sơ trường', kind: 'deadline' });
      add({ title: 'Nhận kết quả', detail: 'Vòng sớm có kết quả khoảng giữa tháng 12; vòng thường đến cuối tháng 3.', from: at(Y - 1, 11, 10), to: at(Y, 2, 31), step: 'Sau khi có thư mời', kind: 'task' });
      add({ title: 'Chọn trường và đặt cọc', detail: 'Hạn chung để xác nhận nhập học (National Candidates Reply Date) là 1/5.', from: at(Y, 4, 1), step: 'Sau khi có thư mời', kind: 'deadline' });
    } else if (country === 'my') {
      add({ ...ielts, from: M(14), to: M(10) });
      add({ title: 'Chốt danh sách trường nhận kỳ mùa xuân', detail: 'Không phải trường nào cũng nhận sinh viên năm nhất vào kỳ tháng 1; kiểm tra trước.', from: M(12), to: M(10), step: 'Chuẩn bị', kind: 'task', link: '#/truong?country=my' });
      add({ title: 'Nộp hồ sơ kỳ mùa xuân', detail: 'Hạn thường từ tháng 8 đến tháng 11 năm trước, tuỳ trường.', from: M(9), to: M(5), step: 'Nộp hồ sơ trường', kind: 'task' });
      add({ title: 'Nhận kết quả, đặt cọc', from: M(5), to: M(3), detail: 'Đặt cọc sớm để trường cấp I-20 kịp xin visa.', step: 'Sau khi có thư mời', kind: 'task' });
    }
    if (country === 'my') {
      add({ title: 'Chuẩn bị chứng minh tài chính', detail: 'Đủ tổng chi phí năm đầu ghi trên I-20 (học phí + sinh hoạt): sổ tiết kiệm, xác nhận thu nhập của bố mẹ.', from: M(5), to: M(3), step: 'Sau khi có thư mời', kind: 'task' });
      // Kỳ mùa thu: trường cấp I-20 sau khi bạn đặt cọc (hạn 1/5)
      const fall = o.intake === 'fall';
      add({ title: 'Nhận I-20, đóng phí SEVIS I-901', from: fall ? at(Y, 4, 2) : M(4), to: fall ? at(Y, 5, 15) : M(3), detail: 'Kiểm tra kỹ thông tin trên I-20 trước khi đặt lịch phỏng vấn.', step: 'Visa', kind: 'task' });
      add({ title: 'Khai DS-160 và phỏng vấn visa F-1', detail: 'Visa có thể được cấp sớm nhất 365 ngày trước ngày nhập học, nên đặt lịch ngay khi có I-20. Từ 6/2025 phải để công khai các tài khoản mạng xã hội.', from: M(3), to: M(1), step: 'Visa', kind: 'task' });
      add({ title: 'Bay sang Mỹ', detail: 'Chỉ được nhập cảnh sớm nhất 30 ngày trước ngày bắt đầu ghi trên I-20.', from: D(30), to: D(5), step: 'Trước khi bay', kind: 'task' });
    }

    if (country === 'anh') {
      add({ ...ielts, detail: ielts.detail + ' Nếu học Dự bị (Foundation) hoặc trường yêu cầu, cần thi IELTS for UKVI.', from: at(Y - 1, 2, 1), to: at(Y - 1, 7, 31) });
      add({ title: 'Chọn ngành và 5 lựa chọn UCAS', detail: 'Mỗi người được chọn tối đa 5 khoá học. Kiểm tra trường có nhận bằng THPT Việt Nam không hay cần học Foundation/A-Level trước.', from: at(Y - 1, 4, 1), to: at(Y - 1, 7, 31), step: 'Chuẩn bị', kind: 'task', link: '#/truong?country=anh' });
      add({ title: 'Viết Personal Statement và xin thư giới thiệu', detail: 'Một bài viết chung cho cả 5 lựa chọn; giáo viên viết thư giới thiệu và điểm dự đoán (predicted grades).', from: at(Y - 1, 6, 1), to: at(Y - 1, 8, 30), step: 'Nộp hồ sơ trường', kind: 'task' });
      add({ title: 'Hạn UCAS cho Oxford, Cambridge, Y khoa, Nha khoa, Thú y', detail: '18:00 giờ Anh ngày 15/10.', from: at(Y - 1, 9, 15), step: 'Nộp hồ sơ trường', kind: 'deadline', only: 'oxbridge' });
      add({ title: 'Hạn UCAS chung (equal consideration)', detail: Y === 2027 ? '18:00 giờ Anh ngày 13/1/2027. Nộp sau hạn này trường vẫn có thể xét nhưng không đảm bảo còn chỗ.' : 'Thường giữa tháng 1 (năm 2027 là 13/1). Kiểm tra ngày chính xác trên UCAS.', from: Y === 2027 ? at(Y, 0, 13) : at(Y, 0, 14), step: 'Nộp hồ sơ trường', kind: 'deadline' });
      add({ title: 'Nhận thư mời và chọn Firm/Insurance', detail: 'Trường trả lời dần đến khoảng giữa tháng 5; sau khi có đủ kết quả, chọn 1 trường chính (Firm) và 1 trường dự phòng (Insurance).', from: at(Y, 1, 1), to: at(Y, 5, 10), step: 'Sau khi có thư mời', kind: 'task' });
      add({ title: 'Đạt điều kiện thư mời, đóng cọc và nhận CAS', detail: 'Nộp kết quả thi tốt nghiệp/IELTS còn thiếu; trường cấp CAS để xin visa.', from: M(3), to: M(2), step: 'Sau khi có thư mời', kind: 'task' });
      add({ title: 'Xét nghiệm lao (TB)', detail: 'Bắt buộc với người sống ở Việt Nam xin visa trên 6 tháng; làm tại phòng khám được Bộ Nội vụ Anh chỉ định. Kiểm tra thời hạn giấy chứng nhận trước khi đặt lịch.', from: M(4), to: M(3), step: 'Visa', kind: 'task' });
      add({ title: 'Giữ tiền chứng minh tài chính đủ 28 ngày', detail: 'Số tiền (học phí năm đầu còn nợ + sinh hoạt phí 9 tháng) phải nằm trong tài khoản liên tục 28 ngày trước khi nộp visa.', from: M(4), to: M(3), step: 'Visa', kind: 'task' });
      add({ title: 'Nộp visa Student', detail: 'Nộp sớm nhất 6 tháng trước ngày nhập học, sau khi có CAS; thường có kết quả trong khoảng 3 tuần.', from: M(3), to: M(1), step: 'Visa', kind: 'task' });
      add({ title: 'Bay sang Anh', detail: 'Khoá học trên 6 tháng được nhập cảnh sớm nhất 1 tháng trước ngày bắt đầu.', from: D(30), to: D(5), step: 'Trước khi bay', kind: 'task' });
    }

    if (country === 'uc') {
      add({ ...ielts, from: M(12), to: M(9) });
      add({ title: 'Chọn trường và nộp hồ sơ', detail: 'Úc xét hồ sơ liên tục; nộp sớm để có thư mời trong 2–6 tuần và kịp xét học bổng. Học sinh vừa xong lớp 11/12 có thể cần Foundation tuỳ trường.', from: M(9), to: M(6), step: 'Nộp hồ sơ trường', kind: 'task', link: '#/truong?country=uc' });
      add({ title: 'Chấp nhận thư mời, đóng cọc và bảo hiểm OSHC, nhận CoE', detail: 'CoE (xác nhận nhập học) là giấy bắt buộc để nộp visa.', from: M(6), to: M(4), step: 'Sau khi có thư mời', kind: 'task' });
      add({ title: 'Chuẩn bị chứng minh tài chính', detail: 'Sinh hoạt phí theo mức của Bộ Nội vụ Úc (hiện 29.710 AUD/năm) + học phí năm đầu + vé máy bay.', from: M(5), to: M(4), step: 'Visa', kind: 'task' });
      add({ title: 'Nộp visa du học (subclass 500)', detail: 'Nộp sớm nhất 124 ngày trước ngày nhập học ghi trên CoE; nên nộp trước ít nhất 6–12 tuần. Có thể được yêu cầu khám sức khoẻ.', from: D(124), to: D(56), step: 'Visa', kind: 'task' });
      add({ title: 'Bay sang Úc', detail: 'Được nhập cảnh sớm nhất 90 ngày trước ngày nhập học; nên sang trước 1–2 tuần để dự tuần định hướng.', from: D(21), to: D(7), step: 'Trước khi bay', kind: 'task' });
    }

    if (country === 'canada') {
      const fall = o.intake === 'fall';
      add({ ...ielts, from: fall ? at(Y - 1, 2, 1) : M(14), to: fall ? at(Y - 1, 8, 30) : M(10) });
      add({ title: 'Chốt danh sách trường', detail: 'Ở Ontario nộp qua OUAC, các tỉnh khác nộp trực tiếp cho trường.', from: fall ? at(Y - 1, 5, 1) : M(12), to: fall ? at(Y - 1, 8, 30) : M(10), step: 'Chuẩn bị', kind: 'task', link: '#/truong?country=canada' });
      if (fall) {
        add({ title: 'Mở cổng nộp hồ sơ, nộp càng sớm càng tốt', detail: 'Nhiều trường xét học bổng theo thứ tự nộp.', from: at(Y - 1, 9, 1), to: at(Y - 1, 11, 15), step: 'Nộp hồ sơ trường', kind: 'task' });
        add({ title: 'Hạn nộp phổ biến của trường top', detail: 'UBC, McGill và nhiều trường hạn khoảng 15/1; một số trường đến tháng 2–3. Kiểm tra từng trường.', from: at(Y, 0, 15), step: 'Nộp hồ sơ trường', kind: 'deadline' });
        add({ title: 'Nhận thư mời', from: at(Y, 1, 1), to: at(Y, 4, 31), detail: 'Trường trả lời dần từ tháng 2 đến tháng 5.', step: 'Sau khi có thư mời', kind: 'task' });
      } else {
        add({ title: 'Nộp hồ sơ kỳ tháng 1', detail: 'Hạn thường từ tháng 6 đến tháng 9 năm trước.', from: M(9), to: M(5), step: 'Nộp hồ sơ trường', kind: 'task' });
      }
      add({ title: 'Chấp nhận thư mời, đặt cọc, nhận PAL', detail: 'Bậc cử nhân cần thư xác nhận của tỉnh bang (PAL), trường sẽ cấp sau khi bạn đặt cọc.', from: M(5), to: M(4), step: 'Sau khi có thư mời', kind: 'task' });
      add({ title: 'Chứng minh tài chính và khám sức khoẻ (nếu được yêu cầu)', detail: 'Mức sinh hoạt phí theo IRCC (hiện 23.448 CAD/năm ngoài Quebec) + học phí năm đầu.', from: M(5), to: M(4), step: 'Visa', kind: 'task' });
      add({ title: 'Nộp hồ sơ giấy phép du học (study permit)', detail: 'Nộp ngay khi có thư mời và PAL, sau đó lăn tay (sinh trắc học). Thời gian xử lý thay đổi, nên nộp ít nhất 3 tháng trước khi nhập học.', from: M(4), to: M(3), step: 'Visa', kind: 'task' });
      add({ title: 'Bay sang Canada', detail: 'Mang theo thư giới thiệu cấp study permit (POE letter), thư mời và giấy tờ tài chính.', from: D(21), to: D(7), step: 'Trước khi bay', kind: 'task' });
    }

    add({ title: 'Nhập học', detail: 'Chúc bạn khởi đầu thuận lợi!', from: start, step: 'Trước khi bay', kind: 'deadline', id: 'start' });
    return items.filter(x => !(o.skipIelts && x.id === 'ielts') && !(x.only === 'oxbridge' && !o.oxbridge))
      .sort((a, b) => a.from - b.from);
  }

  // Các kỳ nhập học sắp tới (3 năm) để chọn
  function upcoming(country, now = new Date()) {
    const out = [];
    for (let y = now.getFullYear(); y <= now.getFullYear() + 3; y++) {
      (INTAKES[country] || []).forEach(k => {
        const d = at(y, k.m, k.d);
        if (d > addMonths(now, 2)) out.push({ value: `${y}-${String(k.m + 1).padStart(2, '0')}-${String(k.d).padStart(2, '0')}|${k.key}`, label: `${k.label} năm ${y}`, date: d, key: k.key });
      });
    }
    return out.sort((a, b) => a.date - b.date);
  }

  return { plan, upcoming, INTAKES };
})();
