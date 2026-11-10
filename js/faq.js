// Câu hỏi thường gặp. Câu trả lời có số liệu là hàm (I = window.ISSS) để lấy thẳng từ data.js, tự cập nhật khi dữ liệu đổi.
window.ISSS_FAQ = [
  {
    cat: 'Bắt đầu',
    q: 'Nên bắt đầu chuẩn bị du học từ lớp mấy?',
    kw: ['lớp mấy', 'bắt đầu', 'chuẩn bị', 'khi nào', 'lộ trình', 'lớp 10', 'lớp 11', 'lớp 12'],
    a: () => `<p>Nên bắt đầu từ <strong>lớp 10</strong>, chậm nhất là đầu lớp 11. Gợi ý lộ trình:</p>
      <ul>
        <li><strong>Lớp 10:</strong> giữ điểm trung bình cao và đều các môn, tìm hiểu ngành và quốc gia, bắt đầu hoạt động ngoại khoá mình thật sự thích.</li>
        <li><strong>Lớp 11:</strong> thi IELTS (và SAT/ACT nếu nhắm Mỹ), chốt ngành và lập danh sách 6–10 trường, chuẩn bị ý tưởng bài luận.</li>
        <li><strong>Lớp 12:</strong> nộp hồ sơ. Mỹ có vòng sớm thường hạn 1/11 và vòng thường khoảng 1/1. Anh nộp qua UCAS, hạn chính vào tháng 1 (Oxford, Cambridge, Y khoa hạn 15/10 năm trước). Úc và Canada nên nộp trước kỳ nhập học 4–8 tháng.</li>
      </ul>
      <p>Hạn chính xác thay đổi theo từng trường và từng năm, hãy kiểm tra trang tuyển sinh của trường.</p>`,
    links: [['Lập lộ trình theo kỳ nhập học', '#/lo-trinh'], ['Checklist hồ sơ theo nước', '#/ho-so']]
  },
  {
    cat: 'Bắt đầu',
    q: 'Du học Mỹ, Úc, Canada hay Anh khác nhau thế nào?',
    kw: ['khác nhau', 'so sánh', 'nước nào', 'quốc gia nào', 'chọn nước'],
    a: I => `<div class="table-wrap"><table class="data">
        <thead><tr><th>Nước</th><th>Cử nhân</th><th class="num">Học phí / năm</th><th>Ở lại làm việc</th></tr></thead>
        <tbody>${I.D.countries.map(c => {
          const fees = I.D.schools.filter(s => s.countryId === c.id && s.tuition).map(s => I.toVND(s.tuition.min, s.tuition.currency));
          return `<tr><td>${c.flag} ${I.esc(c.name)}</td><td>${I.DEFAULT_YEARS[c.id] || 4} năm</td>
            <td class="num">${fees.length ? I.vndShort(Math.min(...fees)) + ' – ' + I.vndShort(Math.max(...fees)) : '—'}</td>
            <td>${I.esc(I.SHORT_WORK[c.id] || '')}</td></tr>`;
        }).join('')}</tbody></table></div>
      <p>Mỹ học 4 năm, linh hoạt đổi ngành nhưng chi phí cao nhất. Anh và Úc học 3 năm nên tổng chi phí thường thấp hơn. Canada có chính sách ở lại làm việc rộng rãi.</p>`,
    links: [['So sánh trường', '#/so-sanh'], ['Tính tổng chi phí', '#/chi-phi']]
  },
  {
    cat: 'Chi phí & tài chính',
    q: 'Du học một năm tốn khoảng bao nhiêu tiền?',
    kw: ['bao nhiêu tiền', 'chi phí', 'tốn', 'học phí', 'một năm', 'tổng'],
    a: I => `<p>Ước tính học phí cộng sinh hoạt phí mỗi năm, quy ra VNĐ, theo các trường trên ISSS:</p>
      <ul>${I.D.countries.map(c => {
        const lc = c.livingCost || {};
        const living = I.toVND(((lc.min || 0) + (lc.max || lc.min || 0)) / 2, c.currency);
        const totals = I.D.schools.filter(s => s.countryId === c.id && s.tuition).map(s => I.toVND(s.tuition.min, s.tuition.currency) + living);
        return `<li>${c.flag} <strong>${I.esc(c.name)}:</strong> khoảng ${I.vndShort(Math.min(...totals))} – ${I.vndShort(Math.max(...totals))}/năm</li>`;
      }).join('')}</ul>
      <p>Chưa gồm vé máy bay, bảo hiểm y tế bắt buộc và chi tiêu cá nhân. Dùng trang Tính chi phí để ước tính cho cả khoá theo trường cụ thể.</p>`,
    links: [['Tính tổng chi phí', '#/chi-phi']]
  },
  {
    cat: 'Chi phí & tài chính',
    q: 'Chứng minh tài chính khi xin visa cần bao nhiêu?',
    kw: ['chứng minh tài chính', 'sổ tiết kiệm', 'chứng minh'],
    a: I => `<ul>${I.D.countries.map(c => `<li>${c.flag} <strong>${I.esc(c.name)}:</strong> ${I.esc((c.livingCost || {}).note || '')}</li>`).join('')}</ul>
      <p>Ngoài sinh hoạt phí, thường phải chứng minh đủ học phí năm đầu (Mỹ ghi trên I-20, Anh trên CAS). Mức yêu cầu thay đổi hằng năm, nên kiểm tra trang di trú chính thức trước khi nộp.</p>`,
    links: [['Checklist hồ sơ', '#/ho-so']]
  },
  {
    cat: 'Chi phí & tài chính',
    q: 'Có những loại học bổng nào cho sinh viên Việt Nam?',
    kw: ['học bổng', 'scholarship', 'miễn học phí', 'toàn phần', 'bán phần'],
    a: I => {
      const all = I.D.schools.flatMap(s => s.scholarships || []);
      const auto = all.filter(x => x.auto === true).length;
      return `<p>Học bổng cử nhân cho sinh viên quốc tế thường có hai dạng:</p>
        <ul>
          <li><strong>Xét tự động:</strong> trường xét ngay khi bạn nộp hồ sơ, dựa trên điểm học tập. Thường giảm 10–30% học phí.</li>
          <li><strong>Phải nộp đơn riêng:</strong> cần bài luận, thư giới thiệu, có khi phỏng vấn. Giá trị cao hơn, có suất toàn phần nhưng cạnh tranh.</li>
        </ul>
        <p>ISSS đang tổng hợp ${all.length} học bổng của ${I.D.schools.length} trường${auto ? `, trong đó ${auto} học bổng xét tự động` : ''}. Lưu ý: một số trường công lập Mỹ gần như không có học bổng cử nhân cho sinh viên quốc tế.</p>`;
    },
    links: [['Xem tất cả học bổng', '#/hoc-bong']]
  },
  {
    cat: 'Chi phí & tài chính',
    q: 'Du học sinh có được đi làm thêm không?',
    kw: ['làm thêm', 'part-time', 'part time', 'đi làm', 'kiếm tiền'],
    a: I => `<ul>${I.D.countries.map(c => `<li>${c.flag} <strong>${I.esc(c.name)}:</strong> ${I.esc(c.workDuringStudy)}</li>`).join('')}</ul>
      <p>Tiền làm thêm giúp trang trải sinh hoạt, nhưng không nên tính vào kế hoạch đóng học phí.</p>`
  },
  {
    cat: 'Tiếng Anh & điểm số',
    q: 'Cần IELTS bao nhiêu? Chưa đủ điểm thì sao?',
    kw: ['ielts', 'tiếng anh', 'toefl', 'chưa đủ', 'điểm tiếng anh'],
    a: I => `<ul>${I.D.countries.map(c => {
        const v = I.D.schools.filter(s => s.countryId === c.id && s.ieltsMin).map(s => s.ieltsMin);
        return `<li>${c.flag} <strong>${I.esc(c.name)}:</strong> IELTS tối thiểu từ ${Math.min(...v)} đến ${Math.max(...v)} tuỳ trường</li>`;
      }).join('')}</ul>
      <p>Ngành cạnh tranh (Y, Luật, Điều dưỡng, Truyền thông) thường yêu cầu cao hơn, và nhiều trường đòi điểm tối thiểu cho từng kỹ năng. Chưa đủ điểm vẫn có thể vào chương trình <strong>Dự bị (Foundation)</strong>, <strong>Pathway</strong> hoặc khoá tiếng Anh của trường rồi học lên.</p>`,
    links: [['Lọc trường theo IELTS', '#/truong']]
  },
  {
    cat: 'Tiếng Anh & điểm số',
    q: 'Có bắt buộc thi SAT/ACT không?',
    kw: ['sat', 'act', 'test-optional', 'chuẩn hoá'],
    a: () => `<p><strong>Mỹ:</strong> nhiều trường cho phép không nộp SAT/ACT (test-optional). Tuy nhiên một số trường top như MIT đã bắt buộc lại, và với học sinh quốc tế, điểm SAT tốt vẫn giúp hồ sơ nổi bật hơn. Hãy kiểm tra từng trường.</p>
      <p><strong>Úc, Canada, Anh:</strong> thường xét học bạ THPT và IELTS, không cần SAT. Riêng Anh, bằng THPT Việt Nam thường phải học thêm năm Dự bị (Foundation), trừ khi có IB, A-level, AP hoặc điểm rất cao theo yêu cầu của trường.</p>`
  },
  {
    cat: 'Visa & sau tốt nghiệp',
    q: 'Xin visa du học cần những gì?',
    kw: ['visa', 'thị thực', 'xin visa', 'phỏng vấn visa'],
    a: I => `<ul>${I.D.countries.map(c => `<li>${c.flag} <strong>${I.esc(c.name)}:</strong> ${I.esc(c.visa)}</li>`).join('')}</ul>
      <p>Hồ sơ visa thường cần thư mời nhập học, chứng minh tài chính, hộ chiếu, bảo hiểm y tế và kết quả khám sức khoẻ (tuỳ nước). Danh sách chi tiết từng bước có trong Checklist hồ sơ.</p>`,
    links: [['Checklist hồ sơ theo nước', '#/ho-so']]
  },
  {
    cat: 'Visa & sau tốt nghiệp',
    q: 'Tốt nghiệp xong được ở lại làm việc bao lâu?',
    kw: ['ở lại', 'sau tốt nghiệp', 'opt', 'pgwp', 'graduate route', '485', 'định cư', 'làm việc sau'],
    a: I => `<ul>${I.D.countries.map(c => `<li>${c.flag} <strong>${I.esc(c.name)}:</strong> ${I.esc(c.postStudyWork)}</li>`).join('')}</ul>
      <p>Chính sách di trú thay đổi thường xuyên. Đây là quy định tại thời điểm cập nhật dữ liệu (${I.esc(I.D.updated || '')}).</p>`,
    links: [['Cơ hội việc làm theo nghề', '#/viec-lam']]
  },
  {
    cat: 'Visa & sau tốt nghiệp',
    q: 'Học xong về Việt Nam làm việc thì lương thế nào?',
    kw: ['về nước', 'về việt nam', 'lương việt nam', 'lương ở việt nam'],
    a: I => {
      const list = I.D.careers.filter(c => c.salary && c.salary.vn && c.salary.vn.range);
      return `<p>Mức lương tham khảo tại Việt Nam (người có kinh nghiệm):</p>
        <ul>${list.slice(0, 8).map(c => `<li><a href="#/viec-lam/${c.id}">${I.esc(c.name)}</a>: ${I.esc(c.salary.vn.range)}</li>`).join('')}</ul>
        <p>Bằng nước ngoài cùng kinh nghiệm thực tập ở nước ngoài thường giúp ứng viên vào các công ty đa quốc gia với mức lương cao hơn mặt bằng.</p>`;
    },
    links: [['Xem tất cả nghề', '#/viec-lam']]
  },
  {
    cat: 'Chọn trường & ngành',
    q: 'Chưa biết chọn ngành gì thì làm sao?',
    kw: ['chọn ngành', 'ngành gì', 'không biết học gì', 'ngành nào', 'hợp với'],
    a: () => `<p>Bắt đầu từ ba câu hỏi: mình thích làm gì, mình giỏi môn nào, và ngành đó có việc làm ở nơi mình muốn sống không. Trợ lý ISSS có bài hỏi đáp 4 câu để gợi ý ngành và trường hợp với sở thích, ngân sách và IELTS của bạn.</p>
      <p>Ở Mỹ có thể vào trường với trạng thái chưa chọn ngành (undecided) và chọn sau 1–2 năm. Ở Anh và Úc cần chọn ngành ngay khi nộp hồ sơ.</p>`,
    links: [['Hỏi trợ lý chọn ngành', 'chat'], ['Danh sách ngành', '#/nganh']]
  },
  {
    cat: 'Chọn trường & ngành',
    q: 'Xếp hạng QS có quan trọng không?',
    kw: ['xếp hạng', 'qs', 'ranking', 'top', 'trường tốt'],
    a: () => `<p>Xếp hạng QS đo danh tiếng và nghiên cứu ở cấp toàn trường, nên chỉ là một yếu tố tham khảo. Khi chọn trường nên xem thêm: chất lượng riêng của ngành bạn học, học phí và học bổng, vị trí (cơ hội thực tập, việc làm), tỷ lệ có việc sau tốt nghiệp, và môi trường sống.</p>
      <p>Trường hạng 100–300 có ngành mạnh, học phí hợp lý và ở thành phố nhiều việc làm thường là lựa chọn rất tốt.</p>`,
    links: [['So sánh trường', '#/so-sanh']]
  },
  {
    cat: 'Về ISSS',
    q: 'Dữ liệu trên ISSS lấy từ đâu, có chính xác không?',
    kw: ['nguồn', 'chính xác', 'dữ liệu', 'cập nhật'],
    a: I => `<p>Dữ liệu được tổng hợp (cập nhật ${I.esc(I.D.updated || '')}) từ:</p>
      <ul>
        <li>trang chính thức của các trường;</li>
        <li>bảng xếp hạng QS;</li>
        <li>cơ quan thống kê lương: BLS (Mỹ), Jobs and Skills Australia, Job Bank (Canada), ONS (Anh);</li>
        <li>trang di trú của từng nước.</li>
      </ul>
      <p>Mỗi trang đều có link nguồn. Số liệu chưa xác nhận được trên trang chính thức có nhãn "Số liệu ước tính". Học phí và chính sách visa thay đổi hằng năm, nên luôn kiểm tra lại trước khi nộp hồ sơ.</p>`,
    links: [['Nguồn tham khảo chính thức', '#/nguon']]
  },
  {
    cat: 'Chọn trường & ngành',
    q: 'Làm sao biết trường, khoá học có hợp lệ để xin visa?',
    kw: ['hợp lệ', 'lừa đảo', 'kiểm tra trường', 'cricos', 'dli', 'sevp', 'sponsor', 'được công nhận', 'kiểm định'],
    a: () => `<p>Mỗi nước có danh sách chính thức các trường được nhận sinh viên quốc tế. Kiểm tra trước khi đặt cọc:</p>
      <ul>
        <li>🇺🇸 <strong>Mỹ:</strong> trường phải được SEVP chứng nhận mới cấp được I-20 (tra trên Study in the States).</li>
        <li>🇦🇺 <strong>Úc:</strong> khoá học phải có mã CRICOS mới dùng được để xin visa 500.</li>
        <li>🇨🇦 <strong>Canada:</strong> trường phải có số DLI; muốn ở lại làm việc thì chương trình phải đủ điều kiện PGWP.</li>
        <li>🇬🇧 <strong>Anh:</strong> trường phải có tên trong Register of student sponsors mới cấp được CAS.</li>
      </ul>
      <p>Khi về nước, văn bằng được công nhận theo Thông tư 65/2026/TT-BGDĐT (hiệu lực 26/9/2026), làm trực tuyến trên Cổng Dịch vụ công quốc gia. Học trực tiếp tại nước trường đặt trụ sở chính thì điều kiện đơn giản hơn chương trình liên kết hay học trực tuyến.</p>`,
    links: [['Nguồn tham khảo chính thức', '#/nguon'], ['Checklist hồ sơ', '#/ho-so']]
  },
  {
    cat: 'Về ISSS',
    q: 'Thông tin tôi gửi cho ISSS được dùng thế nào?',
    kw: ['thông tin cá nhân', 'bảo mật', 'dữ liệu của tôi', 'riêng tư'],
    a: () => `<p>Đăng ký tư vấn và lịch hẹn được gửi tới tư vấn viên ISSS để liên hệ với bạn. Trường đã lưu, danh sách so sánh và checklist hồ sơ chỉ lưu trên trình duyệt của bạn. Bạn có thể xoá chúng trong trang Hồ sơ của tôi.</p>`,
    links: [['Hồ sơ của tôi', '#/ho-so']]
  }
];
