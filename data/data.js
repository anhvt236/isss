/*
 * ISSS – Dữ liệu tham khảo du học (bản demo)
 * Cập nhật: 11/2026. Tổng hợp từ nguồn chính thức/uy tín (xem trường `sources`/`source` của từng mục).
 * Quy ước:
 *  - Tiền tệ: theo nước sở tại (USD, AUD, CAD, GBP). Học phí/chi phí tính theo năm học.
 *  - `verified: false` = con số là ước tính/chưa đối chiếu được với trang chính thức tại thời điểm tổng hợp.
 *  - Xếp hạng: QS World University Rankings 2027 (công bố 6/2026); THE World University Rankings 2027 (công bố 30/9/2026,
 *    từ khoảng hạng 300 trở xuống THE xếp theo nhóm, ví dụ 351–375). Xếp hạng theo ngành: QS by Subject 2026.
 *  - Lương: Mỹ = BLS OOH (trung vị, 5/2025); Úc = Jobs and Skills Australia (trung vị tuần toàn thời gian × 52, ABS 5/2025);
 *    Canada = Job Bank (trung vị theo giờ 2023–2024 × 1.950 giờ/năm); Anh = ONS ASHE 2025 (tạm tính) Bảng 14, trung vị toàn thời gian.
 */
window.ISSS_DATA = {
  "updated": "2026-11",
  "countries": [
    {
      "id": "my",
      "name": "Mỹ",
      "nameEn": "United States",
      "flag": "🇺🇸",
      "currency": "USD",
      "intro": "Hệ thống đại học lớn và đa dạng nhất thế giới, chương trình cử nhân 4 năm linh hoạt (được đổi ngành, học thêm ngành phụ). Chi phí cao, học bổng cho sinh viên quốc tế chủ yếu đến từ trường tư và một số trường công có học bổng tự động theo GPA. Chính sách visa/OPT đang có nhiều đề xuất thay đổi trong năm 2026, cần theo dõi sát.",
      "visa": "Visa sinh viên F-1 (cần I-20 do trường cấp, đóng phí SEVIS I-901 và phỏng vấn tại Đại sứ quán/Tổng Lãnh sự quán Mỹ).",
      "workDuringStudy": "Chỉ được làm việc trong khuôn viên trường (on-campus), tối đa 20 giờ/tuần khi đang có lớp và toàn thời gian trong kỳ nghỉ. Làm ngoài trường chỉ qua CPT (thực tập gắn với chương trình học) hoặc OPT.",
      "postStudyWork": "OPT 12 tháng sau tốt nghiệp; ngành thuộc danh sách STEM được gia hạn thêm 24 tháng (STEM OPT), tổng tối đa 36 tháng. Lưu ý: ngày 8/10/2026 DHS/ICE đã công bố dự thảo quy định thu phí OPT (70.000 USD cho lần đề xuất OPT đầu tiên, 30.000 USD cho các lần sau, do trường nộp). Thời hạn góp ý đã kết thúc ngày 9/11/2026, DHS đang xem xét ý kiến; tính đến 10/11/2026 CHƯA có quy định chính thức. Nếu được ban hành, phí chỉ áp dụng cho các lần trường đề xuất OPT từ 60 ngày sau ngày công bố quy định cuối cùng; quy định OPT hiện hành vẫn áp dụng.",
      "livingCost": {
        "min": 18000,
        "max": 30000,
        "note": "Mỹ không có mức chứng minh tài chính cố định cho visa; trường ghi tổng chi phí (học phí + sinh hoạt) trên I-20. Ước tính sinh hoạt/năm (nhà ở, ăn uống, bảo hiểm, đi lại) dựa trên bảng chi phí của các trường, ví dụ ASU ước tính tổng chi phí 2026–27 khoảng 69.906 USD/năm gồm cả học phí.",
        "verified": false
      },
      "applySystem": "Common App (phổ biến nhất), Coalition/Scoir, hoặc cổng nộp riêng của trường (ví dụ MIT, ASU). Các vòng: Early Action/Early Decision (thường hạn 1/11) và Regular Decision (thường hạn 1/1–15/1).",
      "intakes": [
        "Tháng 8/9 (Fall – kỳ chính)",
        "Tháng 1 (Spring – một số trường)"
      ],
      "sources": [
        "https://www.ice.gov/sevis/i901",
        "https://studyinthestates.dhs.gov/students/work/working-in-the-united-states",
        "https://www.duanemorris.com/alerts/homeland_security_proposes_$70000_$30000_fees_f1_optional_practical_training_1026.html",
        "https://www.nafsa.org/optional-practical-training-fee-rule-portal",
        "https://www.federalregister.gov/documents/2026/10/08/2026-20660/optional-practical-training-fees",
        "https://studyinthestates.dhs.gov/2026/10/dhs-publishes-proposed-rule-establishing-fees-for-optional-practical-training",
        "https://admission.asu.edu/cost-aid/international"
      ]
    },
    {
      "id": "uc",
      "name": "Úc",
      "nameEn": "Australia",
      "flag": "🇦🇺",
      "currency": "AUD",
      "intro": "Cử nhân thường 3 năm (Honours thêm 1 năm), nhiều kỳ nhập học trong năm và cộng đồng sinh viên Việt Nam rất đông tại Melbourne, Sydney, Brisbane. Được làm thêm 48 giờ/2 tuần và có visa làm việc sau tốt nghiệp (485). Chính phủ đang kiểm soát số lượng du học sinh mới nên hồ sơ cần chứng minh rõ mục đích học tập (Genuine Student).",
      "visa": "Student visa (subclass 500). Cần CoE do trường cấp, bảo hiểm OSHC, đáp ứng yêu cầu Genuine Student và chứng minh tài chính.",
      "workDuringStudy": "Tối đa 48 giờ mỗi 2 tuần (fortnight) trong kỳ học; không giới hạn trong kỳ nghỉ chính thức.",
      "postStudyWork": "Temporary Graduate visa (subclass 485) – diện Post-Higher Education Work: cử nhân (kể cả Honours) và thạc sĩ học phần được ở lại 2 năm; giới hạn tuổi nộp đơn thường là dưới 35 (áp dụng từ 1/7/2024). Có thể được thêm thời gian nếu học và sống tại khu vực regional.",
      "livingCost": {
        "min": 29710,
        "max": 29710,
        "note": "Mức chứng minh chi phí sinh hoạt tối thiểu cho visa 500: 29.710 AUD/12 tháng cho người nộp đơn chính (chưa gồm học phí và vé máy bay). Chi phí thực tế ở Sydney/Melbourne thường cao hơn (khoảng 30.000–40.000 AUD/năm)."
      },
      "applySystem": "Nộp trực tiếp cho trường (online) hoặc qua đại diện tuyển sinh được trường ủy quyền tại Việt Nam. Học sinh tốt nghiệp THPT tại Úc nộp qua trung tâm tuyển sinh bang (VTAC, UAC, QTAC…).",
      "intakes": [
        "Tháng 2/3 (kỳ chính)",
        "Tháng 7",
        "Tháng 11 (một số trường học 3 kỳ/năm)"
      ],
      "sources": [
        "https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/student-500",
        "https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/temporary-graduate-485",
        "https://oneplanetmigrationlaw.com.au/immigration-blog/student-visa-500-financial-capacity-requirement-2026/"
      ]
    },
    {
      "id": "canada",
      "name": "Canada",
      "nameEn": "Canada",
      "flag": "🇨🇦",
      "currency": "CAD",
      "intro": "Chất lượng giáo dục cao, môi trường an toàn và con đường định cư (PR) rõ ràng sau khi có kinh nghiệm làm việc. Từ 2024 Canada áp dụng hạn mức giấy phép du học nên phần lớn hồ sơ cử nhân cần thư chứng thực của tỉnh bang (PAL/TAL). Cử nhân đại học được miễn yêu cầu ngành học khi xin PGWP.",
      "visa": "Study permit (giấy phép du học) kèm visa nhập cảnh tạm thời; cần thư mời nhập học (LOA) và thư chứng thực tỉnh bang PAL/TAL (với đa số chương trình cử nhân).",
      "workDuringStudy": "Tối đa 24 giờ/tuần làm ngoài trường trong kỳ học (áp dụng từ 8/11/2024); toàn thời gian trong kỳ nghỉ theo lịch của trường. Làm trong trường không giới hạn giờ nếu đủ điều kiện.",
      "postStudyWork": "Post-Graduation Work Permit (PGWP): chương trình cử nhân từ 2 năm trở lên có thể được PGWP tới 3 năm. Từ 1/11/2024: cần chứng chỉ ngoại ngữ (CLB 7 cho tốt nghiệp đại học); yêu cầu ngành học (field of study) chỉ áp dụng cho bậc cao đẳng/không phải cử nhân – sinh viên tốt nghiệp cử nhân, thạc sĩ, tiến sĩ được miễn. IRCC giữ nguyên danh sách ngành đủ điều kiện trong năm 2026.",
      "livingCost": {
        "min": 23448,
        "max": 23448,
        "note": "Mức chứng minh chi phí sinh hoạt cho 1 người (ngoài Quebec) với hồ sơ nộp từ 1/9/2026: 23.448 CAD/năm (trước đó 22.895 CAD), chưa gồm học phí năm đầu và vé máy bay. Quebec có mức riêng."
      },
      "applySystem": "Ontario: qua OUAC (mẫu 105 cho học sinh quốc tế). British Columbia và các tỉnh khác: nộp trực tiếp trên cổng của trường (ví dụ UBC, SFU qua EducationPlannerBC).",
      "intakes": [
        "Tháng 9 (kỳ chính)",
        "Tháng 1 (một số ngành)",
        "Tháng 5 (ít ngành)"
      ],
      "sources": [
        "https://www.canada.ca/en/immigration-refugees-citizenship/services/study-canada/study-permit/get-documents/financial-support.html",
        "https://www.canada.ca/en/immigration-refugees-citizenship/services/study-canada/work/after-graduation/eligibility.html",
        "https://www.canada.ca/en/immigration-refugees-citizenship/services/study-canada/work/work-off-campus.html",
        "https://www.cicnews.com/2026/08/canada-hikes-funds-needed-by-study-permit-applicants-0879805.html",
        "https://www.cicnews.com/2026/01/ircc-freezes-list-of-pgwp-eligible-fields-of-study-for-2026-0167305.html"
      ]
    },
    {
      "id": "anh",
      "name": "Anh",
      "nameEn": "United Kingdom",
      "flag": "🇬🇧",
      "currency": "GBP",
      "intro": "Cử nhân chỉ 3 năm (Scotland 4 năm) giúp tiết kiệm tổng chi phí, nhiều trường top thế giới và quy trình nộp hồ sơ tập trung qua UCAS. Học phí sinh viên quốc tế cố định trong suốt khóa ở nhiều trường. Thời gian ở lại làm việc sau tốt nghiệp (Graduate Route) giảm từ 2 năm xuống 18 tháng với hồ sơ nộp từ 1/1/2027.",
      "visa": "Student visa (thay cho Tier 4). Cần CAS do trường cấp, chứng minh tài chính 28 ngày, chứng chỉ tiếng Anh SELT (IELTS for UKVI) nếu trường yêu cầu, đóng phí visa và phụ phí y tế IHS.",
      "workDuringStudy": "Bậc đại học: tối đa 20 giờ/tuần trong kỳ học, toàn thời gian trong kỳ nghỉ chính thức của trường.",
      "postStudyWork": "Graduate Route: hồ sơ nộp đến hết 31/12/2026 được 2 năm; nộp từ 1/1/2027 trở đi chỉ được 18 tháng (cử nhân và thạc sĩ; tiến sĩ vẫn 3 năm) – theo Statement of Changes ngày 14/10/2025.",
      "livingCost": {
        "min": 10827,
        "max": 14130,
        "note": "Chứng minh tài chính sinh hoạt cho 9 tháng với hồ sơ nộp từ 30/11/2026: 1.203 GBP/tháng ngoài London (10.827 GBP) và 1.570 GBP/tháng tại London (14.130 GBP). Hồ sơ nộp trước 30/11/2026 áp dụng mức cũ 1.171/1.529 GBP/tháng (10.539/13.761 GBP)."
      },
      "applySystem": "UCAS – tối đa 5 lựa chọn ngành/trường mỗi năm; hạn chung thường cuối tháng 1 (Oxford, Cambridge, Y/Nha khoa: giữa tháng 10).",
      "intakes": [
        "Tháng 9 (kỳ chính)",
        "Tháng 1 (một số trường như Coventry)"
      ],
      "sources": [
        "https://www.gov.uk/student-visa",
        "https://www.gov.uk/graduate-visa",
        "https://thepienews.com/shorter-graduate-route-from-january-2027-uk-govt-confirms/",
        "https://www.otssolicitors.co.uk/news/student-visa-maintenance-funds-increase-from-30-november-2026/"
      ]
    }
  ],
  "schools": [
    {
      "id": "mit",
      "name": "Massachusetts Institute of Technology (MIT)",
      "countryId": "my",
      "city": "Cambridge, Massachusetts",
      "website": "https://www.mit.edu",
      "qsRank": 1,
      "qsEdition": "QS 2027",
      "theRank": "2",
      "theRankOrder": 20,
      "theUrl": "https://www.timeshighereducation.com/world-university-rankings/massachusetts-institute-technology",
      "type": "Tư thục",
      "tuition": {
        "min": 66720,
        "max": 66720,
        "currency": "USD",
        "note": "Học phí cử nhân năm 2026–27 là 66.720 USD, giống nhau cho mọi sinh viên (MIT chưa công bố mức 2027–28). Thêm phí đời sống sinh viên 420 USD/năm và bảo hiểm y tế MIT SHIP bắt buộc (trừ khi được miễn).",
        "year": "2026–27",
        "verified": true
      },
      "ieltsMin": 7,
      "ieltsNote": "Tối thiểu 7.0, khuyến nghị 7.5 (theo trang tuyển sinh MIT).",
      "intakes": [
        "Tháng 9"
      ],
      "applyVia": "MIT Application (cổng riêng, không dùng Common App) – Early Action hoặc Regular Action",
      "highlights": [
        "Hạng 1 thế giới QS 2027 (năm thứ 15 liên tiếp).",
        "Xét tuyển không phụ thuộc khả năng tài chính và đáp ứng 100% nhu cầu tài chính đã chứng minh – áp dụng cả cho sinh viên quốc tế, nên gia đình Việt Nam thu nhập trung bình vẫn có cơ hội học gần như miễn phí.",
        "Cực kỳ cạnh tranh: cần thành tích học thuật/olympic nổi bật."
      ],
      "majorIds": [
        "cs",
        "data",
        "business",
        "finance",
        "engineering",
        "economics",
        "media",
        "design",
        "ai",
        "electrical",
        "architecture"
      ],
      "scholarships": [
        {
          "name": "MIT Scholarship (hỗ trợ theo nhu cầu tài chính)",
          "value": "Tới toàn bộ chi phí theo nhu cầu đã chứng minh",
          "note": "Không có học bổng thành tích; xét theo nhu cầu tài chính, áp dụng cả sinh viên quốc tế. Nộp CSS Profile (mã 3514) và giấy tờ thu nhập qua IDOC là được xét, không cần đơn riêng. Mức trung vị năm 2025–26 là 73.666 USD. Gia đình thu nhập dưới 200.000 USD/năm (tài sản thông thường) được miễn học phí.",
          "url": "https://sfs.mit.edu/undergraduate-students/types-of-aid/mit-scholarship/",
          "deadline": "30/11/2026 (Early Action) | 15/2/2027 (Regular Action) – hạn nộp CSS Profile và hồ sơ tài chính",
          "auto": true,
          "amount": null,
          "coverage": "full"
        }
      ],
      "sources": [
        "https://sfs.mit.edu/billing-repayment/undergraduate-tuition-fees",
        "https://mitadmissions.org/apply/firstyear/tests-scores/",
        "https://mitadmissions.org/apply/firstyear/international/",
        "https://www.topuniversities.com/world-university-rankings",
        "https://sfs.mit.edu/undergraduate-students/types-of-aid/mit-scholarship/",
        "https://sfs.mit.edu/undergraduate-students/apply-for-aid/deadlines-requirements"
      ],
      "verified": true,
      "qsRankText": "1",
      "ieltsVerified": true
    },
    {
      "id": "nyu",
      "name": "New York University (NYU)",
      "countryId": "my",
      "city": "New York City, New York",
      "website": "https://www.nyu.edu",
      "qsRank": 58,
      "qsEdition": "QS 2027",
      "theRank": "=29",
      "theRankOrder": 290,
      "theUrl": "https://www.timeshighereducation.com/world-university-rankings/new-york-university-nyu",
      "type": "Tư thục",
      "tuition": {
        "min": 68576,
        "max": 75326,
        "currency": "USD",
        "note": "Học phí + phí 2026–27 (chưa có mức 2027–28): 68.576 USD mức chung; Tisch School of the Arts 75.326 USD. Mức của NYU chỉ được phê duyệt chính thức vào tháng 7 hằng năm. Chưa gồm ăn ở (khoảng 26.438 USD).",
        "year": "2026–27",
        "verified": true
      },
      "ieltsMin": 7.5,
      "ieltsNote": "NYU chấp nhận IELTS Academic nhưng không tìm thấy điểm tối thiểu trên trang chính thức; 7.5 là mức cạnh tranh thường được trích dẫn.",
      "ieltsVerified": false,
      "intakes": [
        "Tháng 9"
      ],
      "applyVia": "Common App (Early Decision I/II, Regular Decision)",
      "highlights": [
        "Học giữa Manhattan, mạng lưới cơ sở toàn cầu (Abu Dhabi, Thượng Hải) và nhiều điểm du học ngắn hạn.",
        "Mạnh về kinh doanh (Stern), truyền thông, nghệ thuật, quản trị khách sạn – du lịch (SPS).",
        "Sinh viên quốc tế được xét học bổng theo nhu cầu tài chính, nhưng chỉ khi nộp ở năm nhất (CSS Profile)."
      ],
      "majorIds": [
        "cs",
        "data",
        "business",
        "finance",
        "accounting",
        "marketing",
        "engineering",
        "nursing",
        "economics",
        "media",
        "design",
        "hospitality",
        "electrical"
      ],
      "scholarships": [
        {
          "name": "NYU need-based scholarships (học bổng theo nhu cầu tài chính)",
          "value": "Thay đổi theo hồ sơ tài chính",
          "note": "Sinh viên quốc tế chỉ được xét khi nộp hồ sơ năm nhất, bằng CSS Profile; không cần đơn học bổng riêng. Không áp dụng cho sinh viên chuyển tiếp.",
          "url": "https://www.nyu.edu/admissions/financial-aid-and-scholarships/applying-as-a-prospective-undergraduate-student.html",
          "deadline": "Theo hạn CSS Profile của từng vòng: ED I khoảng 15/11, ED II khoảng 15/1, RD khoảng 20/2 (theo bulletin NYU, cần xác nhận cho kỳ 2027)",
          "auto": true,
          "amount": null,
          "coverage": "partial"
        }
      ],
      "sources": [
        "https://www.nyu.edu/admissions/financial-aid-and-scholarships/cost-of-attendance.html",
        "https://bulletins.nyu.edu/undergraduate/arts/cost-attendance/",
        "https://www.nyu.edu/admissions/financial-aid-and-scholarships/frequently-asked-questions.html",
        "https://www.topuniversities.com/world-university-rankings",
        "https://bulletins.nyu.edu/undergraduate/business/cost-attendance/financial-aid/"
      ],
      "verified": false,
      "qsRankText": "58",
      "majorNotes": {
        "finance": "Không có bằng Tài chính riêng: là chuyên ngành (concentration) trong cử nhân Kinh doanh (BS in Business) của Stern",
        "accounting": "Là chuyên ngành (concentration) trong cử nhân Kinh doanh (BS in Business) của Stern",
        "marketing": "Là chuyên ngành (concentration) trong cử nhân Kinh doanh (BS in Business) của Stern"
      }
    },
    {
      "id": "uw",
      "name": "University of Washington (Seattle)",
      "countryId": "my",
      "city": "Seattle, Washington",
      "website": "https://www.washington.edu",
      "qsRank": 92,
      "qsEdition": "QS 2027",
      "theRank": "26",
      "theRankOrder": 260,
      "theUrl": "https://www.timeshighereducation.com/world-university-rankings/university-washington",
      "type": "Công lập",
      "tuition": {
        "min": 44580,
        "max": 45789,
        "currency": "USD",
        "note": "Cơ sở Seattle, mức nonresident (áp dụng cho sinh viên quốc tế) năm 2026–27: học phí 44.580 USD; gồm các phí bắt buộc 45.546 USD và U-PASS 45.789 USD. Chưa có biểu phí 2027–28.",
        "year": "2026–27",
        "verified": true
      },
      "ieltsMin": 6,
      "ieltsNote": "Tối thiểu 6.0 (mức tối thiểu của trường, hồ sơ trúng tuyển thường cao hơn). Bài thi phải dự trước hoặc trong ngày 31/12 của năm nộp hồ sơ.",
      "intakes": [
        "Tháng 9 (Autumn)"
      ],
      "applyVia": "Common App hoặc Coalition on Scoir (hạn 15/11)",
      "highlights": [
        "Trường công top 100 thế giới, mạnh về Khoa học máy tính (Paul G. Allen School), Y tế – Điều dưỡng và Kỹ thuật.",
        "Seattle là trung tâm công nghệ (Microsoft, Amazon) và có cộng đồng người Việt lâu đời.",
        "Lưu ý: UW không cấp học bổng hay hỗ trợ tài chính cho sinh viên quốc tế bậc cử nhân."
      ],
      "majorIds": [
        "cs",
        "data",
        "business",
        "finance",
        "accounting",
        "marketing",
        "engineering",
        "nursing",
        "economics",
        "media",
        "design",
        "electrical",
        "architecture",
        "logistics",
        "hr"
      ],
      "scholarships": [],
      "scholarshipNote": "UW không cấp học bổng hay hỗ trợ tài chính cho sinh viên quốc tế bậc cử nhân (theo trang tuyển sinh của trường).",
      "sources": [
        "https://finance.uw.edu/tuition-fees/files/docs/annual-tuition-and-fees/2026-2027tricampusannualtuitionandfees.pdf",
        "https://admit.washington.edu/apply/first-year/how-to-apply/english-proficiency/",
        "https://admit.washington.edu/costs/scholarships/",
        "https://www.washington.edu/news/2026/06/18/rankings-uw-recognized-as-one-of-the-best-universities-in-the-world/",
        "https://stat.uw.edu/academics/undergraduate"
      ],
      "verified": true,
      "qsRankText": "=92",
      "ieltsVerified": true,
      "majorNotes": {
        "data": "Không có bằng Khoa học dữ liệu riêng: học qua hướng (track/option) Data Science trong cử nhân Thống kê hoặc ACMS, hoặc minor Data Science",
        "finance": "Là hướng (option) trong cử nhân Quản trị kinh doanh (BA in Business Administration) của Foster",
        "accounting": "Là hướng (option) trong cử nhân Quản trị kinh doanh của Foster",
        "marketing": "Là hướng (option) trong cử nhân Quản trị kinh doanh của Foster",
        "logistics": "Không có bằng riêng: là hướng Operations & Supply Chain Management trong cử nhân Quản trị kinh doanh của Foster",
        "hr": "Không có bằng riêng: là hướng Human Resources Management trong cử nhân Quản trị kinh doanh của Foster"
      }
    },
    {
      "id": "psu",
      "name": "Pennsylvania State University (Penn State – University Park)",
      "countryId": "my",
      "city": "State College, Pennsylvania",
      "website": "https://www.psu.edu",
      "qsRank": 92,
      "qsEdition": "QS 2027",
      "theRank": "=101",
      "theRankOrder": 1010,
      "theUrl": "https://www.timeshighereducation.com/world-university-rankings/penn-state-main-campus",
      "type": "Công lập",
      "tuition": {
        "min": 46356,
        "max": 46356,
        "currency": "USD",
        "note": "Học phí out-of-state (áp dụng cho sinh viên quốc tế) tại University Park năm 2027–28 đã được Hội đồng quản trị phê duyệt ngày 17/7/2026: 23.178 USD/kỳ, tức 46.356 USD/năm (năm 2026–27 là 44.574 USD). Chưa gồm các phí bắt buộc; giai đoạn năm 3–4 của một số khối ngành (Kỹ thuật, Kinh doanh…) có thể cao hơn.",
        "year": "2027–28",
        "verified": true
      },
      "ieltsMin": 6.5,
      "intakes": [
        "Tháng 8 (Fall)",
        "Tháng 1 (Spring)"
      ],
      "applyVia": "Common App hoặc MyPennState",
      "highlights": [
        "Đồng hạng 92 thế giới QS 2027, trong top 100.",
        "Một trong số ít trường lớn có ngành Quản trị khách sạn (School of Hospitality Management) bên cạnh Kỹ thuật, Kinh doanh (Smeal), Điều dưỡng.",
        "Thị trấn đại học điển hình, chi phí sinh hoạt thấp hơn các thành phố lớn; gần như không có hỗ trợ tài chính cho sinh viên quốc tế bậc cử nhân."
      ],
      "majorIds": [
        "cs",
        "data",
        "business",
        "finance",
        "accounting",
        "marketing",
        "engineering",
        "nursing",
        "economics",
        "media",
        "design",
        "hospitality",
        "ai",
        "cybersecurity",
        "electrical",
        "architecture",
        "logistics",
        "hr"
      ],
      "scholarships": [],
      "scholarshipNote": "Theo Penn State Global, hiện gần như không có hỗ trợ tài chính cho sinh viên quốc tế bậc cử nhân; ngoại lệ duy nhất là các khoản tuition grant nhỏ (thường 100–2.000 USD). Nên tìm học bổng bên ngoài.",
      "sources": [
        "https://www.statecollege.com/articles/psu-news/penn-state-plans-tuition-rate-increases-for-2026-27/",
        "https://www.psu.edu/resources/international-students/admission-requirements",
        "https://www.psu.edu/news/academics/story/penn-state-ranks-24th-us-82nd-globally-2026-qs-world-university-rankings",
        "https://www.psu.edu/news/penn-state-global/story/penn-state-ranks-23rd-us-92nd-globally-2027-qs-world-university-rankings",
        "https://www.psu.edu/news/administration/story/board-trustees-approves-2027-28-budget-and-tuition-plan",
        "https://www.statecollege.com/articles/psu-news/penn-state-plans-tuition-increases-for-2027-28/",
        "https://global.psu.edu/page/financial-aid-information",
        "https://global.psu.edu/page/tuition-grant-information"
      ],
      "verified": true,
      "qsRankText": "=92",
      "ieltsVerified": true,
      "ieltsNote": "Tối thiểu IELTS Academic 6.5 (theo trang yêu cầu tuyển sinh quốc tế của Penn State)."
    },
    {
      "id": "asu",
      "name": "Arizona State University (ASU)",
      "countryId": "my",
      "city": "Tempe (Phoenix), Arizona",
      "website": "https://www.asu.edu",
      "qsRank": 172,
      "qsEdition": "QS 2027",
      "theRank": "200",
      "theRankOrder": 2000,
      "theUrl": "https://www.timeshighereducation.com/world-university-rankings/arizona-state-university-tempe",
      "type": "Công lập",
      "tuition": {
        "min": 40819,
        "max": 43009,
        "currency": "USD",
        "note": "Năm 2026–27 (chưa có mức 2027–28) tại các cơ sở vùng Phoenix: học phí cơ bản quốc tế 39.062 USD; cộng phụ thu 350 USD, phí công nghệ 200 USD, phí sinh viên 807 USD và phí sinh viên quốc tế 400 USD ≈ 40.819 USD; cộng phí khoa (tối đa 2.190 USD, tùy ngành) ≈ 43.009 USD. Chưa gồm ăn ở và bảo hiểm.",
        "year": "2026–27",
        "verified": true
      },
      "ieltsMin": 6,
      "ieltsNote": "IELTS Academic tổng tối thiểu 6.0 (không quy định điểm từng kỹ năng). Một số ngành cao hơn: Điều dưỡng và Kỹ thuật (Fulton) 6.5; Báo chí – Truyền thông (Cronkite) 7.0.",
      "ieltsVerified": true,
      "intakes": [
        "Tháng 8 (Fall)",
        "Tháng 1 (Spring)"
      ],
      "applyVia": "Cổng nộp riêng của ASU hoặc Common App",
      "highlights": [
        "Nhiều năm liền đứng đầu bảng 'Most Innovative' của U.S. News; tiêu chí đầu vào rõ ràng, tỷ lệ nhận cao.",
        "Học bổng New American University tự động theo GPA cho sinh viên quốc tế (10.000–17.500 USD/năm).",
        "Danh mục ngành rất rộng, có cả Quản trị du lịch, Thiết kế, Điều dưỡng và Khoa học dữ liệu."
      ],
      "majorIds": [
        "cs",
        "data",
        "business",
        "finance",
        "accounting",
        "marketing",
        "engineering",
        "nursing",
        "economics",
        "media",
        "design",
        "hospitality",
        "ai",
        "cybersecurity",
        "electrical",
        "architecture",
        "logistics",
        "intl-business",
        "hr"
      ],
      "scholarships": [
        {
          "name": "New American University Scholarship – International (President / Provost / Dean / University / Academic Achievement)",
          "value": "10.000–17.500 USD/năm tùy GPA (GPA 4.0+: 17.500 USD; 3.81–3.99: 15.500; 3.41–3.80: 13.500; 3.11–3.40: 12.000; 3.01–3.10: 10.000)",
          "note": "Bảng mức cho sinh viên năm nhất nhập học mùa thu 2027. Xét tự động theo GPA và điểm tiếng Anh khi trúng tuyển; gia hạn tối đa 8 học kỳ liên tiếp nếu đạt điều kiện. Phải học toàn thời gian tại cơ sở và tự túc/gia đình chi trả (bị hủy nếu nhận tài trợ toàn phần).",
          "url": "https://tuition.asu.edu/new-american-university/international",
          "deadline": "Xét tự động khi trúng tuyển, không có hạn nộp riêng (thông báo từ đầu tháng 10/2026 hoặc khoảng 10 ngày làm việc sau khi trúng tuyển)",
          "auto": true,
          "amount": {
            "min": 10000,
            "max": 17500,
            "currency": "USD",
            "per": "year"
          },
          "coverage": "partial"
        }
      ],
      "sources": [
        "https://admission.asu.edu/cost-aid/international",
        "https://tuition.asu.edu/new-american-university/international",
        "https://news.asu.edu/20250626-university-news-asu-moves-among-topranked-universities-world-2026",
        "https://news.asu.edu/20260619-university-news-asu-moves-among-topranked-universities-world-academic-employer-reputation",
        "https://admission.asu.edu/apply/international/undergrad/english-proficiency",
        "https://degrees.asu.edu/bachelors/major/ASU00/BABUSHRBA/business-human-resources"
      ],
      "verified": true,
      "qsRankText": "172",
      "majorNotes": {
        "hr": "Không có bằng Quản trị nhân sự riêng: là hướng (concentration) trong BA in Business – Human Resources của W. P. Carey",
        "intl-business": "Không có bằng Kinh doanh quốc tế mang tên riêng; gần nhất là Bachelor of Global Management (Thunderbird) hoặc chương trình International Business Studies dạng liên ngành/chứng chỉ"
      }
    },
    {
      "id": "unimelb",
      "name": "The University of Melbourne",
      "countryId": "uc",
      "city": "Melbourne",
      "website": "https://www.unimelb.edu.au",
      "qsRank": 22,
      "qsEdition": "QS 2027",
      "theRank": "=34",
      "theRankOrder": 340,
      "theUrl": "https://www.timeshighereducation.com/world-university-rankings/university-melbourne",
      "type": "Công lập",
      "tuition": {
        "min": 56451,
        "max": 62464,
        "currency": "AUD",
        "note": "Ước tính năm đầu cho kỳ nhập học 2027 với Bachelor of Commerce: khoảng 56.451–62.464 AUD tùy môn chọn (theo nguồn tổng hợp; trang học phí của trường chặn truy cập tự động nên chưa đối chiếu được). Năm 2026 Commerce là 52.360–59.052 AUD; khối Arts thấp hơn. Học phí tính theo môn và tăng hằng năm.",
        "year": "2027",
        "verified": false
      },
      "ieltsMin": 6.5,
      "ieltsNote": "IELTS Academic tổng tối thiểu 6.5, không kỹ năng nào dưới 6.0 (mức chuẩn bậc cử nhân); một số ngành yêu cầu mức cao hơn (7.0, không kỹ năng nào dưới 7.0).",
      "intakes": [
        "Tháng 2/3",
        "Tháng 7 (một số ngành)"
      ],
      "applyVia": "Nộp trực tiếp hoặc qua đại diện tuyển sinh (VTAC nếu học THPT tại Úc)",
      "highlights": [
        "Đồng hạng 22 thế giới QS 2027, trường số 1 tại bang Victoria.",
        "Mô hình 'Melbourne Model': cử nhân rộng 3 năm rồi học chuyên sâu ở bậc sau đại học (Kỹ thuật, Điều dưỡng chủ yếu đào tạo ở bậc thạc sĩ).",
        "Việt Nam thuộc nhóm nước đủ điều kiện xét Melbourne International Undergraduate Scholarship (GDP bình quân đầu người ≤ 10.000 USD)."
      ],
      "majorIds": [
        "cs",
        "data",
        "business",
        "finance",
        "accounting",
        "marketing",
        "engineering",
        "economics",
        "media",
        "design",
        "electrical",
        "architecture"
      ],
      "scholarships": [
        {
          "name": "Melbourne International Undergraduate Scholarship",
          "value": "Giảm 20% học phí cho sinh viên nhập học từ 2027 (người nhận trước 2027 giữ mức 25%), trong thời gian chuẩn của khóa",
          "note": "Dành cho sinh viên xuất sắc là công dân các nước mà cơ hội du học bị hạn chế bởi khó khăn tài chính (theo các nguồn tổng hợp: GDP bình quân đầu người ≤ 10.000 USD); cần kiểm tra Việt Nam trong danh sách nước đủ điều kiện trên trang trường. Xét tự động khi nộp hồ sơ cử nhân.",
          "url": "https://scholarships.unimelb.edu.au/awards/melbourne-international-undergraduate-scholarship",
          "deadline": "Xét tự động khi nộp hồ sơ cử nhân, không có đơn riêng",
          "auto": true,
          "amount": null,
          "coverage": "partial"
        },
        {
          "name": "Melbourne International Excellence Scholarship (Undergraduate)",
          "value": "Giảm 20% học phí trong suốt khóa học",
          "note": "Học bổng mới cho sinh viên quốc tế có thư mời cử nhân (Overseas Fee place) nhập học từ 2027; ít nhất 140 suất; xét tự động, không cần nộp đơn.",
          "url": "https://scholarships.unimelb.edu.au/awards/melbourne-international-excellence-scholarship-undergraduate",
          "deadline": "Xét tự động khi nhận thư mời nhập học 2027",
          "auto": true,
          "amount": null,
          "coverage": "partial"
        }
      ],
      "sources": [
        "https://study.unimelb.edu.au/find/courses/undergraduate/bachelor-of-commerce/fees/",
        "https://study.unimelb.edu.au/__data/assets/pdf_file/0034/462949/2026IntFeeMayUpdate.pdf",
        "https://scholarships.unimelb.edu.au/awards/melbourne-international-undergraduate-scholarship",
        "https://www.pickmyuni.com/student-resources/qs-australian-universities-rankings-2027-125",
        "https://study.unimelb.edu.au/how-to-apply/english-language-requirements/undergraduate-english-language-requirements",
        "https://scholarships.unimelb.edu.au/awards/melbourne-international-excellence-scholarship-undergraduate",
        "https://collegedunia.com/australia/college/609-university-of-melbourne-melbourne/bachelor-of-commerce-bcom-177668"
      ],
      "verified": false,
      "qsRankText": "=22",
      "ieltsVerified": true,
      "majorNotes": {
        "cs": "Không có bằng Khoa học máy tính riêng: là chuyên ngành (major) Computing and Software Systems trong Bachelor of Science",
        "data": "Là chuyên ngành (major) Data Science trong Bachelor of Science, không có bằng riêng",
        "finance": "Là chuyên ngành (major) trong Bachelor of Commerce",
        "accounting": "Là chuyên ngành (major) trong Bachelor of Commerce",
        "marketing": "Là chuyên ngành (major) trong Bachelor of Commerce",
        "economics": "Là chuyên ngành (major) trong Bachelor of Commerce",
        "engineering": "Không có cử nhân Kỹ thuật: học Bachelor of Science/Design (major kỹ thuật) rồi lên Master of Engineering mới đủ chuẩn kỹ sư",
        "electrical": "Không có cử nhân Kỹ thuật điện: học major Electrical Systems trong Bachelor of Science rồi lên Master of Engineering (Electrical)",
        "media": "Là chuyên ngành (major) Media and Communications trong Bachelor of Arts",
        "architecture": "Không có cử nhân Kiến trúc riêng: học major Architecture trong Bachelor of Design, sau đó cần Master of Architecture để hành nghề"
      }
    },
    {
      "id": "unsw",
      "name": "UNSW Sydney (The University of New South Wales)",
      "countryId": "uc",
      "city": "Sydney",
      "website": "https://www.unsw.edu.au",
      "qsRank": 19,
      "qsEdition": "QS 2027",
      "theRank": "=75",
      "theRankOrder": 760,
      "theUrl": "https://www.timeshighereducation.com/world-university-rankings/unsw-sydney",
      "type": "Công lập",
      "tuition": {
        "min": 49680,
        "max": 66000,
        "currency": "AUD",
        "note": "Biểu phí quốc tế 2027 tính theo UOC (48 UOC/năm toàn thời gian): Arts/Media 1.035 AUD/UOC (≈49.680 AUD/năm); Design 1.050 (≈50.400); Architecture 1.145 (≈54.960); Business/Commerce/Economics 1.240 (≈59.520); Engineering & Computer Science 1.330 (≈63.840); Science/Data Science 1.375 (≈66.000 AUD/năm). Chưa gồm phí SSAF; Y khoa cao hơn nhiều.",
        "year": "2027",
        "verified": true
      },
      "ieltsMin": 6.5,
      "ieltsNote": "IELTS Academic 6.5 tổng, mỗi kỹ năng tối thiểu 6.0 (Arts, Design & Architecture, Engineering, Science); khối Business và Law yêu cầu 7.0 tổng (mỗi kỹ năng 6.0). Không chấp nhận IELTS Online.",
      "intakes": [
        "Tháng 2 (Term 1)",
        "Tháng 5/6 (Term 2)",
        "Tháng 9 (Term 3)"
      ],
      "applyVia": "Nộp trực tiếp hoặc qua đại diện tuyển sinh (UAC nếu học THPT tại Úc)",
      "highlights": [
        "Hạng 19 thế giới QS 2027, dẫn đầu nước Úc.",
        "Mạnh về Kỹ thuật, Khoa học máy tính, Kinh doanh; lịch 3 kỳ/năm giúp linh hoạt thời gian nhập học.",
        "Sydney có cộng đồng người Việt lớn (Cabramatta, Bankstown)."
      ],
      "majorIds": [
        "cs",
        "data",
        "business",
        "finance",
        "accounting",
        "marketing",
        "engineering",
        "economics",
        "media",
        "design",
        "ai",
        "cybersecurity",
        "electrical",
        "architecture",
        "intl-business",
        "hr"
      ],
      "scholarships": [
        {
          "name": "International Scientia Coursework Scholarship",
          "value": "Toàn phần học phí hoặc 20.000 AUD/năm, trong thời gian tối thiểu của chương trình",
          "note": "Cho sinh viên quốc tế học toàn thời gian bậc cử nhân/thạc sĩ học phần; chỉ hỗ trợ học phí, không gồm sinh hoạt phí. Nộp qua đơn chung PUCA1029 (xét nhiều học bổng cùng lúc); rất cạnh tranh.",
          "url": "https://www.scholarships.unsw.edu.au/scholarships/id/1988",
          "deadline": "30/10/2026 (cho Term 1/2027) | Phải nộp đơn riêng",
          "auto": false,
          "amount": {
            "min": 20000,
            "max": 20000,
            "currency": "AUD",
            "per": "year"
          },
          "coverage": "full"
        }
      ],
      "sources": [
        "https://www.unsw.edu.au/student/managing-your-studies/fees/international",
        "https://unsw.edu.au/study/undergraduate/bachelor-of-commerce-computer-science?studentType=",
        "https://www.scholarships.unsw.edu.au/scholarships/id/1895",
        "https://www.timeout.com/australia/news/nine-australian-universities-rank-among-the-worlds-top-100-for-2027-as-a-new-no-1-emerges-062426",
        "https://www.unsw.edu.au/study/how-to-apply/english-language-requirements",
        "https://www.scholarships.unsw.edu.au/scholarships/id/1988",
        "https://www.unsw.edu.au/study/undergraduate/bachelor-of-cyber-security-sydney"
      ],
      "verified": true,
      "qsRankText": "19",
      "ieltsVerified": true,
      "majorNotes": {
        "ai": "Không có bằng AI riêng: là chuyên ngành (major) Artificial Intelligence trong Bachelor of Science (Computer Science)",
        "finance": "Là chuyên ngành (major) trong Bachelor of Commerce",
        "accounting": "Là chuyên ngành (major) trong Bachelor of Commerce",
        "marketing": "Là chuyên ngành (major) trong Bachelor of Commerce",
        "intl-business": "Không có bằng riêng: là chuyên ngành (major) International Business trong Bachelor of Commerce",
        "hr": "Không có bằng riêng: là chuyên ngành (major) Human Resource Management trong Bachelor of Commerce"
      }
    },
    {
      "id": "rmit",
      "name": "RMIT University",
      "countryId": "uc",
      "city": "Melbourne",
      "website": "https://www.rmit.edu.au",
      "qsRank": 119,
      "qsEdition": "QS 2027",
      "theRank": "=239",
      "theRankOrder": 2400,
      "theUrl": "https://www.timeshighereducation.com/world-university-rankings/rmit-university",
      "type": "Công lập",
      "tuition": {
        "min": 45120,
        "max": 47040,
        "currency": "AUD",
        "note": "Học phí quốc tế năm 2027 theo trang ngành: Bachelor of Computer Science 45.120 AUD/năm; Bachelor of Business 47.040 AUD/năm. Khối Kỹ thuật (Honours) có thể cao hơn (năm 2026 Electrical Engineering Honours là 47.040 AUD); Giáo dục/Nghệ thuật thấp hơn (2026 từ 36.480 AUD).",
        "year": "2027",
        "verified": true
      },
      "ieltsMin": 6.5,
      "ieltsNote": "IELTS Academic tổng tối thiểu 6.5, không kỹ năng nào dưới 6.0 (ví dụ Bachelor of Business); yêu cầu khác nhau theo từng chương trình, Điều dưỡng/Giáo dục thường cao hơn.",
      "ieltsVerified": true,
      "intakes": [
        "Tháng 2/3",
        "Tháng 7"
      ],
      "applyVia": "Nộp trực tiếp hoặc qua đại diện tuyển sinh; có lộ trình chuyển tiếp từ RMIT Việt Nam",
      "highlights": [
        "Có cơ sở tại Việt Nam (TP.HCM, Hà Nội, Đà Nẵng) – có thể học một phần tại Việt Nam rồi chuyển tiếp sang Melbourne.",
        "Thế mạnh ứng dụng: Thiết kế, Truyền thông, Kỹ thuật, CNTT; học ngay trung tâm thành phố Melbourne.",
        "Có học bổng 20% học phí dành riêng cho sinh viên Đông Nam Á."
      ],
      "majorIds": [
        "cs",
        "data",
        "business",
        "finance",
        "accounting",
        "marketing",
        "engineering",
        "nursing",
        "economics",
        "media",
        "design",
        "cybersecurity",
        "electrical",
        "architecture",
        "logistics",
        "intl-business",
        "hr"
      ],
      "scholarships": [
        {
          "name": "Academic Merit Scholarship for Southeast Asia",
          "value": "Giảm 20% học phí cho chương trình đủ điều kiện",
          "note": "Cho sinh viên Đông Nam Á (có Việt Nam); yêu cầu GPA tương đương Úc 2.5 / điểm trung bình 70% / ATAR 75. Theo IDP và ApplyBoard, xét tự động khi nộp hồ sơ khóa học (chưa thấy trang trường ghi rõ); chỉ trừ vào học phí; mở đến khi hết suất.",
          "url": "https://www.rmit.edu.au/scholarships/international-scholarships/academic-merit-scholarship-southeast-asia",
          "deadline": "Mở đến khi hết suất | Xét khi nộp hồ sơ khóa học",
          "auto": true,
          "amount": null,
          "coverage": "partial"
        },
        {
          "name": "COBL Academic Merit Scholarships for Vietnam",
          "value": "Giảm 25% học phí trong suốt chương trình ghi trên thư mời",
          "note": "Dành cho sinh viên Việt Nam xuất sắc vào các chương trình thuộc College of Business and Law (ví dụ School of Economics, Finance and Marketing; School of Management); chỉ trừ vào học phí, không cộng dồn với học bổng khác của RMIT; bị hủy nếu không còn visa du học.",
          "url": "https://www.rmit.edu.au/scholarships/international-scholarships/cobl-academic-merit-scholarships-for-vietnam",
          "deadline": "Chưa công bố hạn cho kỳ 2027 – kiểm tra trên trang học bổng",
          "auto": true,
          "amount": null,
          "coverage": "partial"
        }
      ],
      "sources": [
        "https://www.rmit.edu.au/study-with-us/international-students/study/cost-of-studying-in-australia",
        "https://www.rmit.edu.au/scholarships/international-scholarships",
        "https://www.pickmyuni.com/student-resources/qs-australian-universities-rankings-2027-125",
        "https://www.rmit.edu.au/study-with-us/levels-of-study/undergraduate-study/bachelor-degrees/bp343?international=true",
        "https://www.rmit.edu.au/study-with-us/levels-of-study/undergraduate-study/bachelor-degrees/bp094?international=true",
        "https://www.rmit.edu.au/scholarships/international-scholarships/cobl-academic-merit-scholarships-for-vietnam"
      ],
      "verified": true,
      "qsRankText": "=119",
      "majorNotes": {
        "finance": "Là chuyên ngành (major) Finance trong Bachelor of Business",
        "marketing": "Là chuyên ngành (major) Marketing trong Bachelor of Business",
        "economics": "Là chuyên ngành (major) Economics trong Bachelor of Business",
        "logistics": "Là chuyên ngành (major) Logistics and Supply Chain trong Bachelor of Business",
        "intl-business": "Không có bằng riêng: gần nhất là chuyên ngành (major) Global Business trong Bachelor of Business",
        "hr": "Là chuyên ngành (major) Human Resource Management trong Bachelor of Business"
      }
    },
    {
      "id": "deakin",
      "name": "Deakin University",
      "countryId": "uc",
      "city": "Melbourne (Burwood) / Geelong",
      "website": "https://www.deakin.edu.au",
      "qsRank": 227,
      "qsEdition": "QS 2027",
      "theRank": "218",
      "theRankOrder": 2180,
      "theUrl": "https://www.timeshighereducation.com/world-university-rankings/deakin-university",
      "type": "Công lập",
      "tuition": {
        "min": 45800,
        "max": 46800,
        "currency": "AUD",
        "note": "Ước tính 1 năm toàn thời gian: Bachelor of Commerce (chương trình thiết kế lại cho 2027) khoảng 46.800 AUD theo nguồn tổng hợp; năm 2026 Commerce/Nursing là 45.800 AUD. Trang học phí của Deakin chặn truy cập tự động nên chưa đối chiếu được; ngành Kỹ thuật/CNTT có thể cao hơn.",
        "year": "2027",
        "verified": false
      },
      "ieltsMin": 6,
      "ieltsNote": "Đa số cử nhân yêu cầu 6.0 tổng (theo nguồn tổng hợp, Commerce 2027 yêu cầu 6.0 mỗi kỹ năng); Điều dưỡng cao hơn (thường 7.0 mỗi kỹ năng theo chuẩn AHPRA). Chưa xác nhận được trên trang trường.",
      "ieltsVerified": false,
      "intakes": [
        "Tháng 3 (Trimester 1)",
        "Tháng 7 (Trimester 2)",
        "Tháng 11 (Trimester 3)"
      ],
      "applyVia": "Nộp trực tiếp hoặc qua đại diện tuyển sinh",
      "highlights": [
        "3 kỳ nhập học/năm, phù hợp học sinh muốn bắt đầu sớm sau khi tốt nghiệp THPT.",
        "Học bổng tự động 20% học phí và học bổng Vice-Chancellor 50%–100%.",
        "Nhiều ngành ứng dụng: Điều dưỡng, Kinh doanh, CNTT, Thiết kế; cơ sở Burwood ở ngoại ô Melbourne."
      ],
      "majorIds": [
        "cs",
        "data",
        "business",
        "finance",
        "accounting",
        "marketing",
        "engineering",
        "nursing",
        "economics",
        "media",
        "design",
        "ai",
        "cybersecurity",
        "electrical",
        "architecture",
        "logistics",
        "hr"
      ],
      "scholarships": [
        {
          "name": "Deakin Vice-Chancellor's International Scholarship",
          "value": "50% hoặc 100% học phí trong thời gian chuẩn của khóa",
          "note": "Phải nộp đơn riêng (mẫu đơn, bài luận, thư giới thiệu) cho Deakin International Admissions; hội đồng tuyển chọn, yêu cầu thành tích học tập rất cao và tham gia chương trình Vice-Chancellor's Professional Excellence. Hồ sơ không đạt được xét tiếp học bổng khác của Deakin.",
          "url": "https://www.deakin.edu.au/study/fees-and-scholarships/scholarships/find-a-scholarship/deakin-vice-chancellors-international-scholarship",
          "deadline": "Xét liên tục; nên nộp ít nhất 1 tháng trước khi khóa học bắt đầu (T1/2027 bắt đầu khoảng 1/3/2027) – chưa có hạn chính thức",
          "auto": false,
          "amount": null,
          "coverage": "full"
        },
        {
          "name": "Vietnam Scholarship (Deakin)",
          "value": "Giảm 20% học phí",
          "note": "Cho công dân Việt Nam đang cư trú tại Việt Nam có kết quả học tập tốt, bậc cử nhân và thạc sĩ học phần; xét tự động. Bậc cử nhân yêu cầu đã học tương đương ít nhất 1 học kỳ đại học tại Việt Nam với WAM ≥ 65% (hoặc điều kiện tương đương). Phần lớn khóa thuộc khoa Khoa học – Kỹ thuật – Môi trường xây dựng (SEBE) và khoa Sức khỏe bị loại trừ (có thể xét Deakin STEM Scholarship 20%). Thông tin theo IDP/Study Australia, chưa mở được trang trường.",
          "url": "https://search.studyaustralia.gov.au/scholarship/vietnam-scholarship/0caf1060a69c61d80038a98ceb6c12ff",
          "deadline": "Xét tự động cho sinh viên nhập học tới Trimester 3/2027",
          "auto": true,
          "amount": null,
          "coverage": "partial"
        }
      ],
      "sources": [
        "https://www.deakin.edu.au/course/bachelor-nursing-international",
        "https://www.deakin.edu.au/__data/assets/pdf_file/0034/274669/deakin-international-course-guide.pdf",
        "https://www.deakin.edu.au/study/fees-and-scholarships/scholarships",
        "https://www.pickmyuni.com/student-resources/qs-australian-universities-rankings-2027-125",
        "https://www.deakin.edu.au/course/bachelor-commerce-international",
        "https://unienrol.com/study-australia/deakin-university/bachelor-of-commerce-zz5dr5nxvk4rl4540vqem7k7",
        "https://www.deakin.edu.au/study/fees-and-scholarships/scholarships/find-a-scholarship/deakin-vice-chancellors-international-scholarship",
        "https://search.studyaustralia.gov.au/scholarship/vietnam-scholarship/0caf1060a69c61d80038a98ceb6c12ff"
      ],
      "verified": false,
      "qsRankText": "227",
      "scholarshipNote": "Học bổng 'Deakin International Scholarship 20%' trước đây ghi là xét tự động cho mọi khóa; trang trường hiện mô tả học bổng này chỉ cho một số khóa thạc sĩ ngành Sức khỏe, nên đã thay bằng Vietnam Scholarship.",
      "majorNotes": {
        "finance": "Là chuyên ngành (major) trong Bachelor of Commerce",
        "accounting": "Là chuyên ngành (major) trong Bachelor of Commerce",
        "marketing": "Là chuyên ngành (major) trong Bachelor of Commerce/Business",
        "economics": "Là chuyên ngành (major) trong Bachelor of Commerce",
        "logistics": "Là chuyên ngành (major) Supply Chain and Logistics Management trong Bachelor of Commerce/Business",
        "hr": "Là chuyên ngành (major) Human Resource Management trong Bachelor of Business/Commerce",
        "architecture": "Cử nhân là Bachelor of Design (Architecture); cần học tiếp Master of Architecture để hành nghề kiến trúc sư"
      }
    },
    {
      "id": "griffith",
      "name": "Griffith University",
      "countryId": "uc",
      "city": "Gold Coast / Brisbane",
      "website": "https://www.griffith.edu.au",
      "qsRank": 230,
      "qsEdition": "QS 2027",
      "theRank": "266",
      "theRankOrder": 2660,
      "theUrl": "https://www.timeshighereducation.com/world-university-rankings/griffith-university",
      "type": "Công lập",
      "tuition": {
        "min": 37000,
        "max": 44000,
        "currency": "AUD",
        "note": "Ước tính năm 2027 theo nguồn tổng hợp: Bachelor of Business khoảng 37.000–37.500 AUD/năm, Bachelor of Information Technology khoảng 40.000 AUD/năm, Bachelor of Nursing khoảng 44.000 AUD/năm. Trang học phí của Griffith chặn truy cập tự động nên chưa đối chiếu được.",
        "verified": false,
        "year": "2027"
      },
      "ieltsMin": 6.5,
      "ieltsNote": "Mức thường gặp 6.5 tổng (6.0 mỗi kỹ năng) theo IDP; một số ngành chấp nhận 6.0, Điều dưỡng cao hơn – kiểm tra theo ngành. Chưa xác nhận trên trang trường.",
      "ieltsVerified": false,
      "intakes": [
        "Tháng 2 (Trimester 1)",
        "Tháng 7 (Trimester 2)",
        "Tháng 11 (Trimester 3)"
      ],
      "applyVia": "Nộp trực tiếp hoặc qua đại diện tuyển sinh",
      "highlights": [
        "Một trong số ít trường Úc có cử nhân Quản trị Du lịch, Khách sạn và Sự kiện (Bachelor of Tourism, Hotel and Event Management).",
        "Học bổng 20% tự động và học bổng Vice Chancellor 50% học phí.",
        "Cơ sở Gold Coast/Brisbane – khí hậu ấm, chi phí sinh hoạt thấp hơn Sydney/Melbourne."
      ],
      "majorIds": [
        "cs",
        "data",
        "business",
        "finance",
        "accounting",
        "marketing",
        "engineering",
        "nursing",
        "economics",
        "media",
        "design",
        "hospitality",
        "ai",
        "cybersecurity",
        "electrical",
        "architecture",
        "logistics",
        "intl-business",
        "hr"
      ],
      "scholarships": [
        {
          "name": "Vice Chancellor's International Scholarship",
          "value": "Giảm 50% học phí, toàn khóa",
          "note": "Cho bậc cử nhân và thạc sĩ học phần nhập học 2026–2027; phải nộp đơn riêng sau khi có thư mời (bảng điểm, bài luận cá nhân); duy trì GPA ≥ 5.5/7.",
          "url": "https://www.griffith.edu.au/international/scholarships-finance/scholarships/vice-chancellors-international-scholarship",
          "deadline": "Khoảng 28/11/2026 cho Trimester 1/2027 (theo nguồn tổng hợp; trang trường chỉ hiển thị hạn 15/8/2026 cho Trimester 3/2026) | Phải nộp đơn riêng",
          "auto": false,
          "amount": null,
          "coverage": "partial"
        },
        {
          "name": "International Academic Merit Scholarship",
          "value": "Giảm 20% học phí",
          "note": "Áp dụng cho kỳ nhập học Trimester 1, 2 hoặc 3 năm 2026–2027; không cần nộp đơn, xét tự động theo kết quả học tập khi nộp hồ sơ.",
          "url": "https://www.griffith.edu.au/international/scholarships-finance/scholarships/international-academic-merit-scholarship",
          "deadline": "Xét tự động khi nộp hồ sơ, không có hạn nộp riêng",
          "auto": true,
          "amount": null,
          "coverage": "partial"
        }
      ],
      "sources": [
        "https://www.griffith.edu.au/study/degrees/bachelor-of-nursing-1162?location=intl",
        "https://www.griffith.edu.au/international/scholarships-finance",
        "https://www.pickmyuni.com/student-resources/qs-australian-universities-rankings-2027-125",
        "https://www.applyboard.com/study-in/australia/scholarships/international-academic-merit-scholarship",
        "https://collegedunia.com/australia/university/594-griffith-university-brisbane/programs",
        "https://griffith.edu.au/study/science-environment/data-science",
        "https://www148.griffith.edu.au/programs-courses/Program/1492/Overview/International"
      ],
      "verified": false,
      "qsRankText": "=230",
      "majorNotes": {
        "data": "Không có bằng riêng: là chuyên ngành (major) Data Science and Artificial Intelligence trong Bachelor of Computer Science",
        "ai": "Không có bằng AI riêng: là chuyên ngành (major) Data Science and Artificial Intelligence trong Bachelor of Computer Science/Advanced Computer Science",
        "finance": "Là chuyên ngành (major) trong Bachelor of Commerce/Business",
        "accounting": "Là chuyên ngành (major) trong Bachelor of Commerce",
        "marketing": "Là chuyên ngành (major) trong Bachelor of Business",
        "economics": "Là chuyên ngành (major) trong Bachelor of Commerce/Business",
        "logistics": "Là chuyên ngành (major) Logistics and Supply Chain Management trong Bachelor of Business",
        "intl-business": "Là chuyên ngành (major) International Business trong Bachelor of Business",
        "hr": "Là chuyên ngành (major) Human Resource Management trong Bachelor of Business",
        "architecture": "Cử nhân là Bachelor of Architectural Design (Gold Coast); cần học tiếp Master of Architecture để hành nghề kiến trúc sư"
      }
    },
    {
      "id": "uoft",
      "name": "University of Toronto",
      "countryId": "canada",
      "city": "Toronto, Ontario",
      "website": "https://www.utoronto.ca",
      "qsRank": 32,
      "qsEdition": "QS 2027",
      "theRank": "22",
      "theRankOrder": 220,
      "theUrl": "https://www.timeshighereducation.com/world-university-rankings/university-toronto",
      "type": "Công lập",
      "tuition": {
        "min": 66110,
        "max": 72860,
        "currency": "CAD",
        "note": "Học phí quốc tế năm nhất 2026–27 (đã duyệt): Arts & Science (cả Commerce năm nhất, Kiến trúc Daniels) 66.110 CAD; Applied Science & Engineering 72.860 CAD. Mức dự kiến cho khóa 2027–28 (chỉ mang tính tham khảo): Arts & Science ≈68.750, Kỹ thuật ≈75.770 CAD. Chưa gồm phí phụ và bảo hiểm UHIP.",
        "year": "2026-27",
        "verified": true
      },
      "ieltsMin": 6.5,
      "ieltsNote": "IELTS Academic 6.5 tổng, không kỹ năng nào dưới 6.0; mọi điểm phải từ cùng một lần thi; không chấp nhận IELTS Indicator và One Skill Retake.",
      "intakes": [
        "Tháng 9"
      ],
      "applyVia": "OUAC (mẫu 105 cho học sinh quốc tế)",
      "highlights": [
        "Hạng 32 thế giới QS 2027, thứ 2 Canada sau McGill; 3 cơ sở St. George, Mississauga, Scarborough.",
        "Toronto là thành phố đa văn hóa, cộng đồng người Việt đông, nhiều cơ hội việc làm tài chính – công nghệ.",
        "Học bổng Lester B. Pearson toàn phần (học phí, sách, sinh hoạt phí 4 năm) – cần trường THPT đề cử."
      ],
      "majorIds": [
        "cs",
        "data",
        "business",
        "finance",
        "accounting",
        "marketing",
        "engineering",
        "economics",
        "media",
        "design",
        "ai",
        "electrical",
        "architecture",
        "intl-business",
        "hr"
      ],
      "scholarships": [
        {
          "name": "Lester B. Pearson International Scholarship",
          "value": "Toàn phần: học phí, sách, phí phụ và chi phí ký túc xá trong 4 năm",
          "note": "Khoảng 37 suất/năm. Bắt buộc trường THPT đề cử (mỗi trường 1 học sinh), nộp hồ sơ OUAC vào U of T trước 16/10/2026, rồi nộp hồ sơ học bổng.",
          "url": "https://future.utoronto.ca/pearson/about/",
          "deadline": "Đề cử của trường THPT: 9/10/2026 | Nộp hồ sơ tuyển sinh: 16/10/2026 | Hồ sơ học bổng: 6/11/2026",
          "auto": false,
          "amount": null,
          "coverage": "full"
        }
      ],
      "sources": [
        "https://planningandbudget.utoronto.ca/wp-content/uploads/2026/04/2026-27-Tuition-Fee-Report_FINAL.pdf",
        "https://www.utm.utoronto.ca/future-students/finances/tuition-fees",
        "https://future.utoronto.ca/pearson/about/",
        "https://www.mtlblog.com/mcgill-university-canada-ranking-qs-2027",
        "https://academica.ca/top-ten/qs-world-university-rankings-2027-released/",
        "https://future.utoronto.ca/apply/english-language-requirements/"
      ],
      "verified": true,
      "qsRankText": "32",
      "ieltsVerified": true,
      "scholarshipNote": "Hạn kỳ nhập học 9/2027 đã qua (6/11/2026). Ngoài Pearson, các khoa có học bổng International Scholars xét theo hồ sơ.",
      "majorNotes": {
        "finance": "Không có cử nhân Tài chính riêng; là chuyên ngành (specialist) Finance & Economics trong BCom (Rotman Commerce) hoặc BBA (UTSC).",
        "accounting": "Không có cử nhân Kế toán riêng; là chuyên ngành (specialist) trong BCom (Rotman Commerce/UTM) hoặc BBA (UTSC).",
        "marketing": "Không có cử nhân Marketing riêng; là chuyên ngành trong BBA (UTSC) hoặc BCom (UTM).",
        "intl-business": "Không có cử nhân Kinh doanh quốc tế riêng; là chuyên ngành Management and International Business trong BBA (UTSC).",
        "hr": "Không có cử nhân Quản trị nhân sự riêng; là chuyên ngành Human Resources Management trong BBA (UTSC).",
        "ai": "Không có cử nhân AI riêng; có hướng Machine Intelligence trong Engineering Science, focus AI trong Khoa học máy tính và minor AI Engineering.",
        "design": "Không có cử nhân Thiết kế riêng; học qua Architectural Studies/Visual Studies tại Daniels.",
        "architecture": "Cử nhân Architectural Studies (Daniels) là bằng tiền chuyên nghiệp; muốn hành nghề kiến trúc sư cần học tiếp Master of Architecture."
      }
    },
    {
      "id": "ubc",
      "name": "The University of British Columbia (UBC)",
      "countryId": "canada",
      "city": "Vancouver, British Columbia",
      "website": "https://www.ubc.ca",
      "qsRank": 45,
      "qsEdition": "QS 2027",
      "theRank": "44",
      "theRankOrder": 440,
      "theUrl": "https://www.timeshighereducation.com/world-university-rankings/university-british-columbia",
      "type": "Công lập",
      "tuition": {
        "min": 51530,
        "max": 66678,
        "currency": "CAD",
        "note": "Ước tính năm nhất 2026/27 cho sinh viên quốc tế mới: Arts ≈51.530; Science ≈53.082; Applied Science ≈66.200; Commerce (Sauder) ≈66.678 CAD. Học phí tăng tối đa 3%/năm trong 4 năm tiếp theo. Trang biểu phí chính thức của UBC chặn truy cập tự động nên chưa đối chiếu được.",
        "year": "2026-27",
        "verified": false
      },
      "ieltsMin": 6.5,
      "ieltsNote": "IELTS Academic 6.5 tổng, không kỹ năng nào dưới 6.0, trong cùng một lần thi; không chấp nhận IELTS General, Indicator, One Skill Retake.",
      "intakes": [
        "Tháng 9"
      ],
      "applyVia": "Nộp trực tiếp qua cổng UBC (hạn thường 15/1)",
      "highlights": [
        "Hạng 45 thế giới QS 2027, khuôn viên ven biển Vancouver.",
        "Vancouver có cộng đồng châu Á và người Việt lớn, khí hậu ôn hòa nhất Canada.",
        "Học bổng đầu vào IMES và học bổng toàn phần Karen McKellin cho sinh viên quốc tế."
      ],
      "majorIds": [
        "cs",
        "data",
        "business",
        "finance",
        "accounting",
        "marketing",
        "engineering",
        "economics",
        "media",
        "design",
        "ai",
        "electrical",
        "architecture",
        "logistics",
        "intl-business",
        "hr"
      ],
      "scholarships": [
        {
          "name": "International Major Entrance Scholarship (IMES)",
          "value": "10.000–25.000 CAD/năm, gia hạn tối đa thêm 3 năm (kỳ 2027/28)",
          "note": "Xét tự động cho học sinh quốc tế năm nhất xuất sắc nếu nộp hồ sơ tuyển sinh đúng hạn; kết quả từ giữa tháng 2 đến cuối tháng 4.",
          "url": "https://you.ubc.ca/financial-planning/scholarships-awards-international-students/international-entrance-scholarships/",
          "deadline": "15/1/2027 (hạn nộp hồ sơ tuyển sinh) | Xét tự động khi nộp hồ sơ",
          "auto": true,
          "amount": {
            "min": 10000,
            "max": 25000,
            "currency": "CAD",
            "per": "year"
          },
          "coverage": "partial"
        },
        {
          "name": "Outstanding International Student (OIS) Award",
          "value": "10.000–25.000 CAD (một lần)",
          "note": "Xét tự động khi nộp hồ sơ tuyển sinh đúng hạn; không gia hạn.",
          "url": "https://you.ubc.ca/financial-planning/scholarships-awards-international-students/international-entrance-scholarships/",
          "deadline": "15/1/2027 (hạn nộp hồ sơ tuyển sinh) | Xét tự động khi nộp hồ sơ",
          "auto": true,
          "amount": {
            "min": 10000,
            "max": 25000,
            "currency": "CAD",
            "per": "once"
          },
          "coverage": "partial"
        },
        {
          "name": "Karen McKellin International Leader of Tomorrow Award",
          "value": "Theo nhu cầu tài chính – có thể chi trả học phí, phí và sinh hoạt phí",
          "note": "Dành cho học sinh có thành tích học tập và lãnh đạo nổi bật, cần chứng minh nhu cầu tài chính; cần đề cử/đăng ký riêng.",
          "url": "https://you.ubc.ca/financial-planning/scholarships-awards-international-students/",
          "deadline": "Hạn kỳ 2027 chưa xác nhận – thường phải nộp hồ sơ sớm (khoảng tháng 11–12) | Cần đăng ký/đề cử riêng",
          "auto": false,
          "amount": null,
          "coverage": "full"
        }
      ],
      "sources": [
        "https://students.ubc.ca/finances/tuition-fees/undergraduate-tuition-fees/",
        "https://vancouver.calendar.ubc.ca/fees/tuition-fees/undergraduate",
        "https://you.ubc.ca/financial-planning/scholarships-awards-international-students/",
        "https://academica.ca/top-ten/qs-world-university-rankings-2027-released/",
        "https://you.ubc.ca/applying-ubc/requirements/english-language-competency/",
        "https://you.ubc.ca/financial-planning/scholarships-awards-international-students/international-entrance-scholarships/"
      ],
      "verified": false,
      "qsRankText": "45",
      "ieltsVerified": true,
      "scholarshipNote": "IMES và OIS xét tự động; giá trị học bổng cụ thể do UBC quyết định theo hồ sơ.",
      "majorNotes": {
        "finance": "Không có cử nhân Tài chính riêng; là chuyên ngành (specialization) trong BCom (Sauder).",
        "accounting": "Không có cử nhân Kế toán riêng; là chuyên ngành trong BCom (Sauder).",
        "marketing": "Không có cử nhân Marketing riêng; là chuyên ngành trong BCom (Sauder).",
        "logistics": "Không có cử nhân riêng; là chuyên ngành Operations and Logistics / Global Supply Chain & Logistics Management trong BCom (Sauder).",
        "hr": "Không có cử nhân riêng; là chuyên ngành Organizational Behaviour & Human Resources trong BCom (Sauder).",
        "intl-business": "Không có cử nhân Kinh doanh quốc tế riêng; trong BCom chỉ có các lựa chọn liên quan (trao đổi quốc tế, Global Supply Chain) – cần kiểm tra danh sách chuyên ngành hiện hành.",
        "ai": "Không có cử nhân AI riêng; học các môn/hướng AI trong Khoa học máy tính.",
        "design": "Chỉ có Bachelor of Design (BDes) về Kiến trúc – Cảnh quan – Đô thị; không có thiết kế đồ họa/công nghiệp riêng.",
        "architecture": "Chỉ có BDes in Architecture, Landscape Architecture and Urbanism (tiền chuyên nghiệp); hành nghề cần Master of Architecture."
      }
    },
    {
      "id": "sfu",
      "name": "Simon Fraser University (SFU)",
      "countryId": "canada",
      "city": "Burnaby (Vancouver), British Columbia",
      "website": "https://www.sfu.ca",
      "qsRank": 312,
      "qsEdition": "QS 2027",
      "theRank": "351–375",
      "theRankOrder": 3620,
      "theUrl": "https://www.timeshighereducation.com/world-university-rankings/simon-fraser-university",
      "type": "Công lập",
      "tuition": {
        "min": 37886,
        "max": 44764,
        "currency": "CAD",
        "note": "2026/27: học phí cơ bản 1.262,88 CAD/tín chỉ → ≈37.886 CAD/năm (30 tín chỉ, 2 kỳ), chưa gồm phí bổ sung ≈1.055 CAD/năm. Môn năm 2 trở lên của Business 1.492,13 CAD/tín chỉ (≈44.764/năm), Computing Science 1.327,97, Engineering Science 1.348,19 CAD/tín chỉ. Sinh viên đang học có thể tăng tối đa 6%/năm.",
        "year": "2026-27",
        "verified": true
      },
      "ieltsMin": 6.5,
      "ieltsNote": "IELTS Academic 6.5 tổng, mỗi kỹ năng tối thiểu 6.0.",
      "ieltsVerified": true,
      "intakes": [
        "Tháng 9",
        "Tháng 1",
        "Tháng 5"
      ],
      "applyVia": "Nộp trực tiếp (EducationPlannerBC)",
      "highlights": [
        "Lựa chọn ngoài nhóm U15 với học phí thấp hơn UBC đáng kể, nằm ở vùng Vancouver.",
        "Mạnh về Kinh doanh (Beedie), Truyền thông, Tương tác – Thiết kế (SIAT), Khoa học máy tính; chương trình Co-op phổ biến.",
        "Nhập học 3 kỳ/năm."
      ],
      "majorIds": [
        "cs",
        "data",
        "business",
        "finance",
        "accounting",
        "marketing",
        "engineering",
        "economics",
        "media",
        "design",
        "ai",
        "electrical",
        "intl-business",
        "hr"
      ],
      "scholarships": [
        {
          "name": "Undergraduate Scholars Entrance Scholarship (USES) – International",
          "value": "Tổng 140.000 CAD cho bậc cử nhân; có thể kèm trợ cấp sinh hoạt nếu có nhu cầu tài chính",
          "note": "Cho học sinh THPT nhập học kỳ Fall, điểm trung bình ≥ 90% hoặc IB 31 (không tính điểm thưởng); phải nộp đơn riêng.",
          "url": "https://www.sfu.ca/students/admission/fees-scholarships/uses.html",
          "deadline": "Nộp đơn 1/10/2026 – 15/12/2026 (kỳ Fall 2027) | Cần nộp đơn riêng",
          "auto": false,
          "amount": {
            "min": 140000,
            "max": 140000,
            "currency": "CAD",
            "per": "total"
          },
          "coverage": "partial"
        }
      ],
      "sources": [
        "https://www.sfu.ca/students/admission/fees-scholarships.html",
        "https://www.sfu.ca/students/financial-aid/plan/typical-costs.html",
        "https://www.sfu.ca/students/admission/fees-scholarships/uses.html",
        "https://www.mtlblog.com/mcgill-university-canada-ranking-qs-2027",
        "https://www.sfu.ca/students/calendar/2027/spring/fees-and-regulations/tuition-fees/undergraduate.html",
        "https://www.sfu.ca/students/calendar/2027/spring/fees-and-regulations/admission/undergraduate-admission.html"
      ],
      "verified": true,
      "qsRankText": "312",
      "majorNotes": {
        "finance": "Không có cử nhân Tài chính riêng; là concentration trong BBA (Beedie).",
        "accounting": "Không có cử nhân Kế toán riêng; là concentration trong BBA (Beedie).",
        "marketing": "Không có cử nhân Marketing riêng; là concentration trong BBA (Beedie).",
        "intl-business": "Không có cử nhân riêng; là concentration International Business trong BBA (Beedie).",
        "hr": "Không có cử nhân riêng; là concentration Human Resource Management trong BBA (Beedie).",
        "ai": "Không có cử nhân AI riêng; là hướng chuyên sâu (concentration) AI trong Khoa học máy tính.",
        "design": "Không có cử nhân Thiết kế riêng; học thiết kế tương tác trong chương trình Interactive Arts & Technology (SIAT)."
      }
    },
    {
      "id": "tmu",
      "name": "Toronto Metropolitan University (TMU)",
      "countryId": "canada",
      "city": "Toronto, Ontario",
      "website": "https://www.torontomu.ca",
      "qsRank": 669,
      "qsRankText": "669",
      "qsEdition": "QS 2027",
      "theRank": "701–800",
      "theRankOrder": 7710,
      "theUrl": "https://www.timeshighereducation.com/world-university-rankings/toronto-metropolitan-university",
      "type": "Công lập",
      "tuition": {
        "min": 38693,
        "max": 44675,
        "currency": "CAD",
        "note": "Học phí cử nhân quốc tế 2026–27 (đã gồm phí phụ): Arts 38.706–38.731; Science (gồm Khoa học máy tính) 38.702–38.762; The Creative School 38.733–39.209; Ted Rogers (Kinh doanh) 44.476–44.532; Kỹ thuật & Architectural Science 44.375–44.675 CAD. Mức 2027–28 công bố vào tháng 7/2027.",
        "year": "2026-27",
        "verified": true
      },
      "ieltsMin": 6.5,
      "ieltsNote": "IELTS Academic 6.5 tổng cho mọi chương trình cử nhân; không yêu cầu điểm tối thiểu từng kỹ năng. Chấp nhận IELTS One Skill Retake và IELTS Online (Academic).",
      "ieltsVerified": true,
      "intakes": [
        "Tháng 9"
      ],
      "applyVia": "OUAC (mẫu 105)",
      "highlights": [
        "Trường định hướng nghề nghiệp ngay trung tâm Toronto (trước đây là Ryerson), không thuộc nhóm U15.",
        "Có đủ 12 nhóm ngành của ISSS, gồm Quản trị Khách sạn – Du lịch (Ted Rogers School of Hospitality and Tourism Management), Điều dưỡng, Truyền thông.",
        "Học phí thấp hơn đáng kể so với U of T trong cùng thành phố."
      ],
      "majorIds": [
        "cs",
        "data",
        "business",
        "finance",
        "accounting",
        "marketing",
        "engineering",
        "nursing",
        "economics",
        "media",
        "design",
        "hospitality",
        "cybersecurity",
        "electrical",
        "architecture",
        "intl-business",
        "hr"
      ],
      "scholarships": [
        {
          "name": "Guaranteed entrance scholarship (học bổng đầu vào bảo đảm)",
          "value": "750–3.000 CAD/năm theo điểm đầu vào, gia hạn theo CGPA (tổng 3.000–12.000 CAD)",
          "note": "Điểm trung bình đầu vào tối thiểu 86%; xét theo hồ sơ tuyển sinh đầy đủ.",
          "url": "https://www.torontomu.ca/international/admissions/paying-for-your-education/scholarships-awards/",
          "deadline": "Hoàn tất hồ sơ tuyển sinh trước 1/9/2027 | Xét tự động theo điểm đầu vào",
          "auto": true,
          "amount": {
            "min": 750,
            "max": 3000,
            "currency": "CAD",
            "per": "year"
          },
          "coverage": "partial"
        },
        {
          "name": "President's Entrance Scholarship",
          "value": "10.000 CAD/năm × 4 năm (tổng 40.000 CAD); 12 suất",
          "note": "Điểm đầu vào tối thiểu 90%; cần bài luận (≤ 500 từ), 2 thư giới thiệu và hoạt động lãnh đạo; nộp qua AwardSpring.",
          "url": "https://www.torontomu.ca/international/admissions/paying-for-your-education/scholarships-awards/",
          "deadline": "16/2/2027 | Cần nộp đơn riêng qua AwardSpring",
          "auto": false,
          "amount": {
            "min": 10000,
            "max": 10000,
            "currency": "CAD",
            "per": "year"
          },
          "coverage": "partial"
        },
        {
          "name": "International Student Leadership Award (ISLA) – Fall 2027",
          "value": "10.000 CAD (một lần, năm nhất); tối đa 53 suất",
          "note": "Cho sinh viên quốc tế năm nhất toàn thời gian, điểm đầu vào ≥ 86%; cần bài viết cá nhân.",
          "url": "https://www.torontomu.ca/international/admissions/paying-for-your-education/scholarships-awards/",
          "deadline": "16/2/2027 | Cần nộp đơn riêng",
          "auto": false,
          "amount": {
            "min": 10000,
            "max": 10000,
            "currency": "CAD",
            "per": "once"
          },
          "coverage": "partial"
        }
      ],
      "sources": [
        "https://www.torontomu.ca/international/admissions/paying-for-your-education/tuition-fees/",
        "https://www.torontomu.ca/admissions/tuition-fees/",
        "https://www.mtlblog.com/mcgill-university-canada-ranking-qs-2027",
        "https://www.torontomu.ca/admissions/undergraduate/requirements/english-language/",
        "https://www.torontomu.ca/international/admissions/paying-for-your-education/scholarships-awards/",
        "https://www.torontomu.ca/science/future-undergraduate-students/"
      ],
      "verified": true,
      "scholarshipNote": "Mục cũ gộp nhiều học bổng và mức 'tối đa 15.000 CAD/năm' không tìm thấy trên trang trường – đã tách thành từng học bổng cụ thể.",
      "majorNotes": {
        "data": "Không có cử nhân Khoa học dữ liệu riêng; có thể học Computer Science, Mathematics and Its Applications hoặc Business Technology Management (Ted Rogers).",
        "cybersecurity": "Không có cử nhân An ninh mạng thuần kỹ thuật; có BSc Cyber Science (mở từ 9/2026), mang tính liên ngành, chú trọng khía cạnh con người – xã hội.",
        "architecture": "Cử nhân Architectural Science (BArchSc) là bằng tiền chuyên nghiệp; hành nghề kiến trúc sư cần học tiếp Master of Architecture."
      }
    },
    {
      "id": "guelph",
      "name": "University of Guelph",
      "countryId": "canada",
      "city": "Guelph, Ontario",
      "website": "https://www.uoguelph.ca",
      "qsRank": 546,
      "qsEdition": "QS 2027",
      "theRank": "451–500",
      "theRankOrder": 4840,
      "theUrl": "https://www.timeshighereducation.com/world-university-rankings/university-guelph",
      "type": "Công lập",
      "tuition": {
        "min": 44729,
        "max": 66099,
        "currency": "CAD",
        "note": "Theo trang Registrar, Arts & Sciences cho sinh viên quốc tế mới 2026–27: 44.729 CAD (chỉ học phí, 2 học kỳ). Trang tuyển sinh quốc tế nêu mức (có thể là 2025–26, đã gồm phí): đa số ngành 46.780; Commerce ≈57.100; Computing 58.807; Engineering 66.099 CAD. Sinh viên đang học tăng tối đa 5%/năm. Trang trường không truy cập được để đối chiếu đầy đủ.",
        "year": "2026-27",
        "verified": false
      },
      "ieltsMin": 6.5,
      "ieltsNote": "IELTS Academic 6.5 tổng, không kỹ năng nào dưới 6.0; IELTS 5.5 có thể được nhận có điều kiện (học tiếng Anh). Thông tin từ trang trường qua kết quả tìm kiếm, chưa mở trực tiếp được.",
      "ieltsVerified": false,
      "intakes": [
        "Tháng 9",
        "Tháng 1 (một số ngành)"
      ],
      "applyVia": "OUAC (mẫu 105)",
      "highlights": [
        "Thành phố nhỏ, an toàn, cách Toronto khoảng 1 giờ; chi phí sinh hoạt thấp hơn Toronto.",
        "Ngành Quản trị Khách sạn – Du lịch (BComm Hospitality and Tourism Management) có tiếng tại Canada.",
        "Học bổng đầu vào cho sinh viên quốc tế xét tự động theo điểm trung bình."
      ],
      "majorIds": [
        "cs",
        "business",
        "finance",
        "accounting",
        "marketing",
        "engineering",
        "economics",
        "hospitality",
        "ai",
        "cybersecurity"
      ],
      "scholarships": [
        {
          "name": "President's International Entrance Scholarship (học bổng đầu vào tự động)",
          "value": "32.500–42.500 CAD tổng 4 năm: năm nhất 10.000–20.000 CAD theo điểm đầu vào, năm 2–4 mỗi năm 7.500 CAD",
          "note": "Gia hạn nếu học toàn thời gian và đạt trung bình ≥ 80% năm trước. Mức cụ thể có thể thay đổi theo kỳ nhập học – kiểm tra lại với trường.",
          "url": "https://www.uoguelph.ca/admission/undergraduate/international/funding",
          "deadline": "Xét tự động khi nộp hồ sơ, thông báo cùng thư mời nhập học",
          "auto": true,
          "amount": {
            "min": 32500,
            "max": 42500,
            "currency": "CAD",
            "per": "total"
          },
          "coverage": "partial"
        },
        {
          "name": "Dr. Franco J. Vaccarino President's Scholarship",
          "value": "42.500 CAD (2 suất, kèm bảo đảm chỗ ở ký túc xá)",
          "note": "Cần nộp đơn riêng.",
          "url": "https://www.uoguelph.ca/registrar/finances-fees/scholarships-bursaries",
          "deadline": "8/3/2027 | Cần nộp đơn riêng",
          "auto": false,
          "amount": {
            "min": 42500,
            "max": 42500,
            "currency": "CAD",
            "per": "total"
          },
          "coverage": "partial"
        }
      ],
      "sources": [
        "https://www.uoguelph.ca/registrar/finances-fees/tuition-fees/guelph-undergrad",
        "https://www.uoguelph.ca/admission/undergraduate/international/funding",
        "https://www.topuniversities.com/universities/university-guelph/undergrad",
        "https://www.mtlblog.com/mcgill-university-canada-ranking-qs-2027",
        "https://www.uoguelph.ca/registrar/studentfinance/fees/misc",
        "https://www.uoguelph.ca/admission/undergraduate/international/english-proficiency",
        "https://www.uoguelph.ca/programs/bachelor-of-computing"
      ],
      "verified": false,
      "qsRankText": "=546",
      "majorNotes": {
        "finance": "Không có cử nhân Tài chính riêng; là chuyên ngành Management, Economics and Finance trong BCom.",
        "marketing": "Không có cử nhân Marketing riêng; là chuyên ngành Marketing Management trong BCom.",
        "cybersecurity": "Không có cử nhân An ninh mạng riêng; chỉ là hướng nhấn mạnh (area of emphasis) Cybersecurity trong Bachelor of Computing."
      }
    },
    {
      "id": "ucl",
      "name": "UCL (University College London)",
      "countryId": "anh",
      "city": "London",
      "website": "https://www.ucl.ac.uk",
      "qsRank": 8,
      "qsEdition": "QS 2027",
      "theRank": "=17",
      "theRankOrder": 180,
      "theUrl": "https://www.timeshighereducation.com/world-university-rankings/ucl",
      "type": "Công lập",
      "tuition": {
        "min": 33300,
        "max": 48600,
        "currency": "GBP",
        "note": "Học phí quốc tế cho sinh viên nhập học 2027/28 (theo trang từng ngành): History BA 33.300; Economics BSc (Econ) 40.800; Data Science BSc và Economics and Statistics 44.400; Computer Science BSc 48.600 GBP/năm. Y khoa (MBBS) cao hơn. Có cohort guarantee – học phí quốc tế giữ nguyên suốt khóa (trừ MBBS).",
        "verified": true,
        "year": "2027"
      },
      "ieltsMin": 6.5,
      "ieltsNote": "Level 1: 6.5 tổng, mỗi kỹ năng 6.0; Level 2: 7.0 tổng, mỗi kỹ năng 6.5; Level 3: 7.0 (Đọc, Viết 6.5; Nghe, Nói 7.0); Level 4: 7.5/7.0; Level 5: 8.0/8.0 – mức cụ thể ghi trên trang từng ngành. Không chấp nhận IELTS One Skill Retake.",
      "ieltsVerified": true,
      "intakes": [
        "Tháng 9"
      ],
      "applyVia": "UCAS",
      "highlights": [
        "Đồng hạng 8 thế giới QS 2027, ngay trung tâm London.",
        "Mạnh về Kinh tế, Khoa học máy tính, Kỹ thuật, Kiến trúc (The Bartlett).",
        "Học bổng UCL Global Undergraduate Scholarship toàn phần học phí cho sinh viên có hoàn cảnh khó khăn."
      ],
      "majorIds": [
        "cs",
        "data",
        "business",
        "finance",
        "engineering",
        "economics",
        "ai",
        "electrical",
        "architecture"
      ],
      "scholarships": [
        {
          "name": "UCL Global Undergraduate Scholarship",
          "value": "Toàn phần học phí; một số suất kèm sinh hoạt phí và khoản trợ cấp cố định",
          "note": "Xét chủ yếu theo nhu cầu tài chính, cần có hồ sơ tuyển sinh UCL đang xét. Vòng 2026/27 có tối đa 33 suất (10 suất gồm học phí + sinh hoạt phí, 20 suất chỉ học phí, 3 suất dành cho Ấn Độ). Thông tin vòng 2027/28 chưa công bố.",
          "url": "https://www.ucl.ac.uk/scholarships/ucl-global-undergraduate-scholarship",
          "deadline": "Vòng 2027/28 chưa công bố (vòng trước hạn 27/4/2026) | Cần nộp đơn riêng",
          "auto": false,
          "amount": null,
          "coverage": "full"
        }
      ],
      "sources": [
        "https://www.ucl.ac.uk/study/prospective-students/undergraduate/funding-your-studies",
        "https://www.ucl.ac.uk/scholarships/ucl-global-undergraduate-scholarship",
        "https://www.uk-education-centre.com/news/qs-world-university-rankings-2027-officially-released-uk-universities-continue-to-shine-on-the-global-stage/",
        "https://www.ucl.ac.uk/study/prospective-students/undergraduate/courses/computer-science-bsc",
        "https://www.ucl.ac.uk/study/prospective-students/undergraduate/courses/history-ba",
        "https://www.ucl.ac.uk/study/prospective-students/undergraduate/courses/economics-bsc-econ",
        "https://www.ucl.ac.uk/study/prospective-students/undergraduate/courses/data-science-bsc",
        "https://www.ucl.ac.uk/study/prospective-students/undergraduate/how-apply/english-language-requirements"
      ],
      "verified": true,
      "qsRankText": "=8",
      "majorNotes": {
        "business": "Không có cử nhân Quản trị kinh doanh (BBA) truyền thống; có Management Science BSc và Statistics and Management for Business BSc.",
        "finance": "Không có cử nhân Tài chính riêng; gần nhất là Statistics, Economics and Finance BSc.",
        "ai": "Chỉ có MEng Robotics and AI, không có cử nhân AI riêng.",
        "architecture": "Architecture BSc (Bartlett) là bằng ARB/RIBA Part 1; hành nghề kiến trúc sư cần học tiếp Part 2 và Part 3."
      }
    },
    {
      "id": "manchester",
      "name": "The University of Manchester",
      "countryId": "anh",
      "city": "Manchester",
      "website": "https://www.manchester.ac.uk",
      "qsRank": 40,
      "qsEdition": "QS 2027",
      "theRank": "60",
      "theRankOrder": 600,
      "theUrl": "https://www.timeshighereducation.com/world-university-rankings/university-manchester",
      "type": "Công lập",
      "tuition": {
        "min": 29200,
        "max": 39700,
        "currency": "GBP",
        "note": "Học phí quốc tế năm nhất cho kỳ nhập học 9/2027 (theo trang từng ngành): BA History 29.200; LLB Law 29.800; BSc Computer Science 39.700 GBP/năm. Y khoa cao hơn nhiều. Trường có thể tăng tối đa 7%/năm cho các năm sau.",
        "year": "2027",
        "verified": true
      },
      "ieltsMin": 6.5,
      "ieltsNote": "Trường nêu mức thường từ 6.0 đến 7.0 tùy ngành; ví dụ BSc Mathematics 6.5 (không kỹ năng dưới 6.0), Khoa học máy tính 6.5 (mọi kỹ năng 6.5), BA English Language 7.0. Không chấp nhận IELTS Online và IELTS General.",
      "ieltsVerified": true,
      "intakes": [
        "Tháng 9"
      ],
      "applyVia": "UCAS",
      "highlights": [
        "Hạng 40 thế giới QS 2027, thành phố sinh viên lớn với chi phí thấp hơn London.",
        "Học bổng Global Futures dành cho sinh viên Đông Nam Á, có Việt Nam.",
        "Đào tạo mạnh Kinh doanh (Alliance MBS), Kỹ thuật, Khoa học máy tính, Điều dưỡng."
      ],
      "majorIds": [
        "cs",
        "business",
        "finance",
        "accounting",
        "marketing",
        "engineering",
        "nursing",
        "economics",
        "electrical",
        "architecture",
        "intl-business",
        "hr"
      ],
      "scholarships": [
        {
          "name": "Global Futures Scholarship (South East Asia – có Việt Nam)",
          "value": "Kỳ nhập học 2027: 12.000 GBP/năm × 3 năm (tổng tới 36.000 GBP), giảm trừ học phí",
          "note": "Xét theo thành tích học tập (điểm dự đoán/đạt được) và câu trả lời trong đơn; mẫu đơn gửi qua email cho ứng viên đủ điều kiện sau khi có offer (từ 12/2026). Duy trì điều kiện đạt 60% mỗi năm. Thông báo kết quả trước 1/6/2027.",
          "url": "https://www.manchester.ac.uk/study/international/country-specific-information/vietnam/scholarships/",
          "deadline": "23/4/2027 | Cần nộp đơn riêng sau khi có offer",
          "auto": false,
          "amount": {
            "min": 12000,
            "max": 12000,
            "currency": "GBP",
            "per": "year"
          },
          "coverage": "partial"
        }
      ],
      "sources": [
        "https://www.manchester.ac.uk/study/undergraduate/courses/2026/00524/bsc-biology/",
        "https://www.manchester.ac.uk/study/international/country-specific-information/vietnam/scholarships/",
        "https://www.manchester.ac.uk/about/news/university-of-manchester-in-top-40-in-qs-world-university-rankings-2027/",
        "https://www.manchester.ac.uk/study/undergraduate/courses/2027/00560/bsc-computer-science/fees-and-funding/",
        "https://www.manchester.ac.uk/study/undergraduate/courses/2027/00255/ba-history/course-details/",
        "https://www.manchester.ac.uk/study/undergraduate/courses/2027/12446/llb-law/",
        "https://www.manchester.ac.uk/study/international/admissions/language-requirements/"
      ],
      "verified": true,
      "qsRankText": "40",
      "majorNotes": {
        "marketing": "Không có cử nhân Marketing độc lập; học qua BSc Management (Marketing) / Fashion Marketing – kiểm tra tên chương trình 2027.",
        "hr": "Không có cử nhân Quản trị nhân sự độc lập; học qua BSc Management (Human Resource Management).",
        "architecture": "BA Architecture (Manchester School of Architecture, liên kết với Manchester Metropolitan) là RIBA Part 1; hành nghề cần học tiếp."
      }
    },
    {
      "id": "leeds",
      "name": "University of Leeds",
      "countryId": "anh",
      "city": "Leeds",
      "website": "https://www.leeds.ac.uk",
      "qsRank": 77,
      "qsEdition": "QS 2027",
      "theRank": "=113",
      "theRankOrder": 1140,
      "theUrl": "https://www.timeshighereducation.com/world-university-rankings/university-leeds",
      "type": "Công lập",
      "tuition": {
        "min": 27300,
        "max": 33800,
        "currency": "GBP",
        "note": "Học phí quốc tế cho kỳ nhập học 2027 (theo trang từng ngành): Economics and History BA 27.300; Business Management with Marketing BA 29.000; Economics and Mathematics BSc 30.400; Accounting and Finance BSc 31.300; Computer Science BSc 33.700; Biological Sciences 33.800 GBP/năm. Học phí giữ nguyên trong suốt khóa. Y, Nha khoa cao hơn.",
        "year": "2027",
        "verified": true
      },
      "ieltsMin": 6,
      "ieltsNote": "Tùy ngành 6.0–6.5 tổng; ví dụ Computer Science BSc 6.0 tổng, không kỹ năng nào dưới 5.5; nhiều ngành Kinh doanh, Khoa học xã hội 6.5.",
      "ieltsVerified": true,
      "intakes": [
        "Tháng 9"
      ],
      "applyVia": "UCAS",
      "highlights": [
        "Top 100 thế giới (hạng 77 QS 2027), thành viên nhóm Russell Group.",
        "Có cử nhân Khoa học dữ liệu, Thiết kế đồ họa – truyền thông, Điều dưỡng, Kế toán – Tài chính.",
        "Học phí quốc tế cố định trong suốt khóa học."
      ],
      "majorIds": [
        "cs",
        "data",
        "business",
        "finance",
        "accounting",
        "marketing",
        "engineering",
        "nursing",
        "economics",
        "media",
        "design",
        "ai",
        "electrical",
        "intl-business",
        "hr"
      ],
      "scholarships": [
        {
          "name": "Undergraduate International Excellence Scholarships",
          "value": "Giảm 3.000 / 6.000 / 16.000 GBP học phí năm nhất",
          "note": "Cho sinh viên quốc tế có offer (có điều kiện hoặc không điều kiện) một khóa cử nhân bắt đầu 9/2027; xét theo thành tích học tập và ngoại khóa; không áp dụng Y (MBChB) và Nha khoa (BChD). Cần nộp đơn.",
          "url": "https://www.leeds.ac.uk/ug-international-scholarships",
          "deadline": "11/4/2027 (theo nguồn thứ cấp – kiểm tra trang trường) | Cần nộp đơn riêng",
          "auto": false,
          "amount": {
            "min": 3000,
            "max": 16000,
            "currency": "GBP",
            "per": "once"
          },
          "coverage": "partial"
        }
      ],
      "sources": [
        "https://courses.leeds.ac.uk/f834/accounting-and-finance-bsc",
        "https://courses.leeds.ac.uk/3260/computer-science-bsc",
        "https://www.leeds.ac.uk/international-students",
        "https://www.uk-education-centre.com/news/qs-world-university-rankings-2027-officially-released-uk-universities-continue-to-shine-on-the-global-stage/",
        "https://courses.leeds.ac.uk/950/economics-and-history-ba",
        "https://courses.leeds.ac.uk/i476/business-management-with-marketing-ba",
        "https://www.leeds.ac.uk/undergraduate-fees/doc/fees-undergraduate-fees",
        "https://www.leeds.ac.uk/ug-international-scholarships"
      ],
      "verified": true,
      "qsRankText": "77"
    },
    {
      "id": "surrey",
      "name": "University of Surrey",
      "countryId": "anh",
      "city": "Guildford",
      "website": "https://www.surrey.ac.uk",
      "qsRank": 246,
      "qsEdition": "QS 2027",
      "theRank": "=237",
      "theRankOrder": 2380,
      "theUrl": "https://www.timeshighereducation.com/world-university-rankings/university-surrey",
      "type": "Công lập",
      "tuition": {
        "min": 19500,
        "max": 28100,
        "currency": "GBP",
        "note": "Học phí quốc tế năm nhất cho kỳ nhập học 2027 (bảng phí chính thức): Nursing (Adult) 19.500; Economics 22.700; Business Management 22.900–24.600; Accounting and Finance, International Business Management 24.600; Hospitality/Tourism, Media and Communication, International Relations 23.800; Computer Science, các ngành Kỹ thuật (BEng), Medicinal Chemistry 28.100 GBP/năm. Các năm sau tăng 4%/năm.",
        "year": "2027",
        "verified": true
      },
      "ieltsMin": 6,
      "ieltsNote": "Tùy ngành; ví dụ Computer Science (kể cả CS & AI, CS & Cyber Security) 6.0 tổng, mỗi kỹ năng 5.5; một số ngành (ví dụ Ngôn ngữ) 6.5 tổng.",
      "ieltsVerified": true,
      "intakes": [
        "Tháng 9"
      ],
      "applyVia": "UCAS",
      "highlights": [
        "Trường Hospitality & Tourism hàng đầu Vương quốc Anh; năm thực tập chuyên nghiệp (placement) phổ biến.",
        "Học bổng riêng cho Việt Nam: Vietnam Merit Scholarship 10.000 GBP.",
        "Cách London khoảng 35 phút tàu; chi phí sinh hoạt thấp hơn London."
      ],
      "majorIds": [
        "cs",
        "business",
        "finance",
        "accounting",
        "marketing",
        "engineering",
        "nursing",
        "economics",
        "media",
        "hospitality",
        "ai",
        "cybersecurity",
        "electrical",
        "intl-business",
        "hr"
      ],
      "scholarships": [
        {
          "name": "Vice-Chancellor's Future Leaders Award (undergraduate)",
          "value": "Miễn giảm 7.500 GBP học phí năm nhất",
          "note": "Việt Nam thuộc danh sách nước đủ điều kiện (kỳ 9/2027); cho sinh viên quốc tế tự túc có offer cử nhân toàn thời gian và chọn Surrey là firm choice; xét theo hội đồng hằng tháng, ai nộp trước xét trước.",
          "url": "https://www.surrey.ac.uk/fees-and-funding/scholarships-and-bursaries/vice-chancellors-future-leaders-award-undergraduate",
          "deadline": "24/8/2027 (phải nộp trước khi được cấp CAS) | Cần nộp đơn riêng",
          "auto": false,
          "amount": {
            "min": 7500,
            "max": 7500,
            "currency": "GBP",
            "per": "once"
          },
          "coverage": "partial"
        }
      ],
      "sources": [
        "https://surrey.ac.uk/undergraduate/international-relations/2026",
        "https://www.surrey.ac.uk/international/scholarships-and-fees",
        "https://www.surrey.ac.uk/fees-and-funding/scholarships-and-bursaries/international-excellence-award-undergraduate",
        "https://www.surrey.ac.uk/news/surreys-qs-ranking-progress-built-record-graduate-employability-scores",
        "https://www.surrey.ac.uk/fees-and-funding/tuition-fees/undergraduate-2027-entry",
        "https://www.surrey.ac.uk/undergraduate/computer-science-and-artificial-intelligence",
        "https://www.surrey.ac.uk/fees-and-funding/scholarships-and-bursaries/vice-chancellors-future-leaders-award-undergraduate",
        "https://surrey.ac.uk/fees-and-funding/scholarships-and-bursaries/vietnam-merit-scholarship"
      ],
      "verified": true,
      "qsRankText": "=246",
      "scholarshipNote": "Đã loại 'Vietnam Merit Scholarship' (10.000 GBP): theo trang trường, học bổng này chỉ dành cho bậc thạc sĩ (postgraduate), không áp dụng cử nhân.",
      "majorNotes": {
        "marketing": "Không có cử nhân Marketing độc lập; là chương trình Business Management with Marketing (chung năm nhất với Business Management).",
        "hr": "Không có cử nhân Quản trị nhân sự độc lập; là chương trình Business Management with Human Resource Management.",
        "ai": "Không có cử nhân AI riêng; có Computer Science and Artificial Intelligence BSc.",
        "cybersecurity": "Không có cử nhân An ninh mạng riêng; có Computer Science and Cyber Security BSc."
      }
    },
    {
      "id": "coventry",
      "name": "Coventry University",
      "countryId": "anh",
      "city": "Coventry",
      "website": "https://www.coventry.ac.uk",
      "qsRank": 581,
      "qsEdition": "QS 2027",
      "theRank": "601–650",
      "theRankOrder": 6040,
      "theUrl": "https://www.timeshighereducation.com/world-university-rankings/coventry-university",
      "type": "Công lập",
      "tuition": {
        "min": 15500,
        "max": 20800,
        "currency": "GBP",
        "note": "Theo trang ngành (năm áp dụng không ghi rõ, có thể là 2026/27; mức 2027/28 một số ngành còn 'TBC'): BA Business Management 17.600; MSci/BSc Computer Science 20.800 GBP/năm tại cơ sở chính Coventry; các cơ sở CU (ví dụ Business Management and Leadership, Computing Science) ≈15.500 GBP. Tăng tối đa 5% trên lạm phát mỗi năm.",
        "verified": false,
        "year": "2026-27"
      },
      "ieltsMin": 6,
      "ieltsNote": "Thường 6.0 tổng, không kỹ năng nào dưới 5.5 cho cử nhân (ví dụ BSc Computer Science); một số ngành (Điều dưỡng…) cao hơn.",
      "ieltsVerified": true,
      "intakes": [
        "Tháng 9",
        "Tháng 1",
        "Tháng 5 (một số ngành)"
      ],
      "applyVia": "UCAS hoặc nộp trực tiếp (sinh viên quốc tế)",
      "highlights": [
        "Học phí thuộc nhóm dễ tiếp cận ở Anh, nhiều kỳ nhập học trong năm.",
        "Định hướng thực hành, có năm thực tập; danh mục ngành rộng gồm cả Thiết kế, Điều dưỡng, Du lịch – Khách sạn.",
        "Học bổng Coventry University Group Scholarship 2.000 GBP/năm cho sinh viên quốc tế tự túc."
      ],
      "majorIds": [
        "cs",
        "data",
        "business",
        "finance",
        "accounting",
        "marketing",
        "engineering",
        "nursing",
        "economics",
        "media",
        "design",
        "hospitality",
        "ai",
        "cybersecurity",
        "electrical",
        "architecture",
        "intl-business",
        "hr"
      ],
      "scholarships": [
        {
          "name": "Coventry University Group Scholarship",
          "value": "2.000 GBP mỗi năm học, trừ vào học phí",
          "note": "Cho sinh viên quốc tế (ngoài Anh/EU) tự túc, nhập học 2026/27 hoặc 2027/28, cử nhân/thạc sĩ toàn thời gian tại các cơ sở ở Anh; không áp dụng sinh viên có tài trợ, học online, NITE, Wroclaw.",
          "url": "https://www.coventry.ac.uk/london/study/fees-and-finance/about-our-scholarships/coventry-university-group-scholarship/",
          "deadline": "Xét tự động – chỉ cần đóng đủ tiền cọc CAS trước hạn trong thư mời và nhập học",
          "auto": true,
          "amount": {
            "min": 2000,
            "max": 2000,
            "currency": "GBP",
            "per": "year"
          },
          "coverage": "partial"
        }
      ],
      "sources": [
        "https://www.coventry.ac.uk/course-structure/ug/eec/computer-science-mscibsc-hons/",
        "https://www.coventry.ac.uk/international-students-hub/apply-for-a-scholarship/",
        "https://www.coventry.ac.uk/news/2026/qs-world-university-rankings/",
        "https://leapscholar.com/blog/coventry-university-ranking/",
        "https://www.coventry.ac.uk/course-structure/ug/fbl/business-management-ba-hons/",
        "https://www.coventry.ac.uk/london/study/fees-and-finance/about-our-scholarships/coventry-university-group-scholarship/"
      ],
      "verified": false,
      "qsRankText": "=581"
    },
    {
      "id": "berkeley",
      "name": "University of California, Berkeley (UC Berkeley)",
      "countryId": "my",
      "city": "Berkeley, California",
      "website": "https://www.berkeley.edu",
      "qsRank": 20,
      "qsRankText": "=20",
      "qsEdition": "QS 2027",
      "theRank": "=9",
      "theRankOrder": 90,
      "theUrl": "https://www.timeshighereducation.com/world-university-rankings/university-california-berkeley",
      "type": "Công lập",
      "tuition": {
        "min": 57484,
        "max": 57484,
        "currency": "USD",
        "note": "Sinh viên mới ngoài bang/quốc tế năm 2026–27 (chưa có mức 2027–28): học phí và phí 18.214 USD + Nonresident Supplemental Tuition 39.270 USD = 57.484 USD/năm. Mức phí toàn hệ thống UC đã được duyệt nhưng có thể điều chỉnh. Chưa gồm ăn ở.",
        "year": "2026–27",
        "verified": true
      },
      "ieltsMin": 6.5,
      "ieltsNote": "IELTS tối thiểu 6.5 cho ứng viên năm nhất (theo trang yêu cầu quốc tế của Berkeley); TOEFL iBT tối thiểu 80.",
      "intakes": [
        "Tháng 8 (Fall)"
      ],
      "applyVia": "UC Application (cổng chung của hệ thống UC), nộp từ 1/10 đến 30/11; không có vòng Early",
      "highlights": [
        "Đồng hạng 20 thế giới QS 2027, trường công lập hàng đầu nước Mỹ.",
        "Rất mạnh về Khoa học máy tính, Kỹ thuật điện (EECS) và Khoa học dữ liệu, nằm cạnh Thung lũng Silicon nên dễ tìm thực tập ở các công ty công nghệ.",
        "Khu vực vịnh San Francisco có cộng đồng người Việt đông (San Jose, Oakland), nhưng trường gần như không có hỗ trợ tài chính theo nhu cầu cho sinh viên quốc tế."
      ],
      "majorIds": [
        "cs",
        "data",
        "business",
        "engineering",
        "electrical",
        "economics",
        "media",
        "architecture"
      ],
      "scholarships": [
        {
          "name": "Regents' and Chancellor's Scholarship",
          "value": "Tối thiểu 2.500 USD/năm (tới toàn bộ nhu cầu đã đánh giá nếu có nhu cầu tài chính), gia hạn tối đa 8 học kỳ",
          "note": "Mọi ứng viên, kể cả sinh viên quốc tế, được xét tự động khi nộp hồ sơ; Hội đồng học thuật xét toàn diện, ứng viên năm nhất được phỏng vấn với giảng viên đầu tháng 3, kết quả cuối tháng 3 cùng ngày có kết quả tuyển sinh. Rất cạnh tranh.",
          "url": "https://financialaid.berkeley.edu/types-of-aid-at-berkeley/scholarships/regents-and-chancellors-scholarship/",
          "deadline": "Xét tự động khi nộp UC Application (hạn 30/11/2026), không có đơn riêng",
          "auto": true,
          "amount": {
            "min": 2500,
            "max": 2500,
            "currency": "USD",
            "per": "year"
          },
          "coverage": "partial"
        }
      ],
      "sources": [
        "https://financialaid.berkeley.edu/cost-of-attendance/",
        "https://admissions.berkeley.edu/internationalrequirements",
        "https://admission.universityofcalifornia.edu/how-to-apply/applying-as-a-first-year/dates-and-deadlines.html",
        "https://www.hotcoursesabroad.com/study-abroad-info/destination-guides/qs-world-university-rankings-2026/",
        "https://www.topuniversities.com/world-university-rankings",
        "https://financialaid.berkeley.edu/types-of-aid-at-berkeley/scholarships/regents-and-chancellors-scholarship/"
      ],
      "verified": true,
      "ieltsVerified": true
    },
    {
      "id": "uiuc",
      "name": "University of Illinois Urbana-Champaign (UIUC)",
      "countryId": "my",
      "city": "Urbana-Champaign, Illinois",
      "website": "https://illinois.edu",
      "qsRank": 74,
      "qsRankText": "74",
      "qsEdition": "QS 2027",
      "theRank": "48",
      "theRankOrder": 480,
      "theUrl": "https://www.timeshighereducation.com/world-university-rankings/university-illinois-urbana-champaign",
      "type": "Công lập",
      "tuition": {
        "min": 42248,
        "max": 53078,
        "currency": "USD",
        "note": "Ước tính học phí và phí cho sinh viên quốc tế toàn thời gian năm 2026–27 (chưa có mức 2027–28): 42.248–53.078 USD tùy ngành (Kỹ thuật, Kinh doanh, Khoa học máy tính có phụ phí cao hơn). Tổng chi phí ước tính 62.146–72.976 USD/năm.",
        "year": "2026–27",
        "verified": true
      },
      "ieltsMin": 6.5,
      "ieltsNote": "Trang tuyển sinh của trường chấp nhận IELTS (điểm thi trong vòng 2 năm, không miễn) nhưng không ghi điểm tối thiểu; 6.5 là mức theo nguồn tổng hợp.",
      "ieltsVerified": false,
      "intakes": [
        "Tháng 8 (Fall)"
      ],
      "applyVia": "Common App hoặc myIllini – Early Action (đầu tháng 11) hoặc Regular Decision (đầu tháng 1)",
      "highlights": [
        "Hạng 74 thế giới QS 2027; Grainger College of Engineering và ngành Khoa học máy tính thuộc nhóm đầu nước Mỹ.",
        "Gies College of Business có nhiều chuyên ngành: Tài chính, Kế toán, Chuỗi cung ứng, Kinh doanh quốc tế.",
        "Thị trấn đại học, chi phí sinh hoạt thấp hơn các thành phố lớn, cách Chicago khoảng 2,5 giờ."
      ],
      "majorIds": [
        "cs",
        "data",
        "business",
        "finance",
        "accounting",
        "marketing",
        "engineering",
        "electrical",
        "economics",
        "media",
        "design",
        "architecture",
        "hospitality",
        "logistics",
        "intl-business"
      ],
      "scholarships": [],
      "scholarshipNote": "UIUC xét tự động học bổng thành tích (University Scholarships, học bổng của từng khoa) khi nộp hồ sơ, nhưng không công bố học bổng riêng cho sinh viên quốc tế bậc cử nhân và số suất cho sinh viên quốc tế rất hạn chế. Nên chuẩn bị đủ tài chính.",
      "sources": [
        "https://admissions.illinois.edu/tuition/",
        "https://admissions.illinois.edu/international-requirements/",
        "https://www.topuniversities.com/institution/university-illinois-urbana-champaign",
        "https://ielts.org/receiving-organisations/university-of-illinois-at-urbana-champaign",
        "https://www.topuniversities.com/universities/university-illinois-urbana-champaign",
        "https://admissions.illinois.edu/scholarships/",
        "https://aces.illinois.edu/academics/undergraduate-degrees/hospitality-management",
        "https://catalog.illinois.edu/undergraduate/bus/minors/international-business/"
      ],
      "verified": false,
      "majorNotes": {
        "hospitality": "Không có bằng riêng: là hướng (concentration) Hospitality Management trong cử nhân Khoa học thực phẩm và Dinh dưỡng (BS Food Science and Human Nutrition)",
        "intl-business": "Không có bằng Kinh doanh quốc tế riêng: chỉ có minor International Business cho sinh viên Gies (hoặc hướng IB trong ngành Management)"
      }
    },
    {
      "id": "purdue",
      "name": "Purdue University (West Lafayette)",
      "countryId": "my",
      "city": "West Lafayette, Indiana",
      "website": "https://www.purdue.edu",
      "qsRank": 100,
      "qsEdition": "QS 2027",
      "theRank": "84",
      "theRankOrder": 840,
      "theUrl": "https://www.timeshighereducation.com/world-university-rankings/purdue-university-west-lafayette",
      "type": "Công lập",
      "tuition": {
        "min": 32104,
        "max": 36104,
        "currency": "USD",
        "note": "Năm 2026–27 (chưa có mức 2027–28): học phí cơ bản và phí bắt buộc cho sinh viên quốc tế khoảng 32.104 USD (học phí cơ bản được giữ nguyên tới 2026–27). Sinh viên quốc tế/ngoài bang nhập học từ mùa thu 2026 vào Kỹ thuật, Khoa học máy tính/dữ liệu/AI và Kinh doanh (Daniels) chịu phụ phí riêng cao hơn (tăng thêm 1.000 USD); mức trần là ước tính. Không truy cập được trang bursar của Purdue để đối chiếu lại.",
        "year": "2026–27",
        "verified": false
      },
      "ieltsMin": 6.5,
      "ieltsNote": "Theo trang tuyển sinh Purdue (trích qua kết quả tìm kiếm, chưa mở được trang), ứng viên thường có IELTS 6.5 trở lên, mỗi kỹ năng tối thiểu 6.0; đạt mức này không bảo đảm trúng tuyển.",
      "ieltsVerified": false,
      "intakes": [
        "Tháng 8 (Fall)",
        "Tháng 1 (Spring – một số ngành)"
      ],
      "applyVia": "Common App – Early Action (1/11) hoặc Regular Decision (15/1)",
      "highlights": [
        "Đồng hạng 100 thế giới QS 2027; rất mạnh về Kỹ thuật và Hàng không vũ trụ.",
        "Một trong những trường top 100 thế giới có học phí thấp nhất cho sinh viên quốc tế nhờ chính sách giữ nguyên học phí nhiều năm.",
        "Có cử nhân riêng về Trí tuệ nhân tạo, An ninh mạng, Quản trị khách sạn – du lịch và Quản trị nhân sự."
      ],
      "majorIds": [
        "cs",
        "data",
        "ai",
        "cybersecurity",
        "business",
        "finance",
        "accounting",
        "marketing",
        "engineering",
        "electrical",
        "nursing",
        "economics",
        "media",
        "design",
        "hospitality",
        "logistics",
        "hr"
      ],
      "scholarships": [],
      "scholarshipNote": "Theo Purdue, sinh viên quốc tế bậc cử nhân nhìn chung không đủ điều kiện nhận hỗ trợ tài chính, kể cả học bổng của trường. Nên tìm học bổng bên ngoài.",
      "sources": [
        "https://www.purdue.edu/treasurer/finance/bursar-office/tuition/fee-rates-2026-2027/undergraduate-tuition-and-fees-2026-2027",
        "https://www.purdue.edu/newsroom/2025/Q2/trustees-approve-2026-budget-frozen-base-tuition-for-main-campus-and-no-increase-for-indiana-residents-at-purdue-northwest-and-purdue-fort-wayne-for-2025-26-2026-27/",
        "https://www.purdue.edu/newsroom/2025/Q2/purdue-remains-in-elite-company-ranking-among-top-global-100-universities-no-25-in-u-s-in-qs-world-university-rankings/",
        "https://admissions.purdue.edu/cost-financial-aid/scholarships/",
        "https://www.topuniversities.com/world-university-rankings",
        "https://www.purdue.edu/newsroom/2025/Q2/purdue-to-hold-public-hearing-for-tuition-and-fees-proposal",
        "https://admissions.purdue.edu/apply/engprof-tests.php"
      ],
      "verified": false,
      "qsRankText": "=100"
    },
    {
      "id": "msu",
      "name": "Michigan State University (MSU)",
      "countryId": "my",
      "city": "East Lansing, Michigan",
      "website": "https://msu.edu",
      "qsRank": 182,
      "qsEdition": "QS 2027",
      "theRank": "93",
      "theRankOrder": 930,
      "theUrl": "https://www.timeshighereducation.com/world-university-rankings/michigan-state-university",
      "type": "Công lập",
      "tuition": {
        "min": 45040,
        "max": 46994,
        "currency": "USD",
        "note": "Học phí trọn gói (12–18 tín chỉ/kỳ) cho sinh viên quốc tế, Fall 2026 – Spring 2027 (chưa có mức 2027–28): năm 1–2 là 22.520 USD/kỳ (45.040 USD/năm); năm 3–4 khối cơ bản 23.188 USD/kỳ, Kinh doanh (Broad)/Kỹ thuật 23.497 USD/kỳ (46.994 USD/năm). Chưa gồm phí sinh viên quốc tế và các khoản phí nhỏ khác.",
        "year": "2026–27",
        "verified": true
      },
      "ieltsMin": 6.5,
      "ieltsNote": "6.5 trở lên để nhập học chính thức; 6.0 được nhận có điều kiện (provisional). Không yêu cầu điểm từng kỹ năng.",
      "intakes": [
        "Tháng 8 (Fall)",
        "Tháng 1 (Spring)",
        "Tháng 5/6 (Summer)"
      ],
      "applyVia": "Common App hoặc cổng nộp của MSU – Early Action 1/11 (có kết quả trước 15/1)",
      "highlights": [
        "Ngành Quản trị chuỗi cung ứng (Broad College of Business) nhiều năm đứng đầu nước Mỹ; có trường Hospitality Business lâu đời.",
        "Sinh viên quốc tế được xét tự động học bổng 3.000–18.000 USD khi nộp hồ sơ.",
        "Nhập học được cả 3 kỳ, có diện nhận có điều kiện với IELTS 6.0."
      ],
      "majorIds": [
        "cs",
        "data",
        "business",
        "finance",
        "accounting",
        "marketing",
        "engineering",
        "electrical",
        "nursing",
        "economics",
        "media",
        "design",
        "hospitality",
        "logistics"
      ],
      "scholarships": [
        {
          "name": "MSU Non-resident Scholarship (President's / Provost's / Dean's / 1855 / Beaumont Tower / Global Community Scholars)",
          "value": "3.000–18.000 USD (President's 18.000; Provost's 15.000; Dean's 12.000; 1855: 9.000; Beaumont Tower 5.000; Global Community Scholars 3.000)",
          "note": "Mọi sinh viên quốc tế năm nhất đã trúng tuyển được xét tự động theo thành tích và độ khó chương trình học, không cần đơn riêng; số suất có hạn. Chi tiết thời hạn/gia hạn theo quy chế học bổng quốc tế của MSU.",
          "url": "https://admissions.msu.edu/cost-aid/scholarships/international",
          "deadline": "Xét tự động khi nộp hồ sơ; nộp trước 1/11/2026 (Early Action) để có kết quả tuyển sinh trước 15/1; kết quả học bổng trước giữa tháng 2/2027",
          "auto": true,
          "amount": {
            "min": 3000,
            "max": 18000,
            "currency": "USD",
            "per": "year"
          },
          "coverage": "partial"
        },
        {
          "name": "Honors College Excellence Scholarship",
          "value": "13.000 USD/năm trong 8 học kỳ",
          "note": "Dành cho một số sinh viên ngoài bang và quốc tế được mời vào Honors College; xét tự động, không cần đơn riêng; số suất hạn chế.",
          "url": "https://admissions.msu.edu/cost-aid/scholarships/international",
          "deadline": "Xét tự động khi nộp hồ sơ (theo lời mời vào Honors College)",
          "auto": true,
          "amount": {
            "min": 13000,
            "max": 13000,
            "currency": "USD",
            "per": "year"
          },
          "coverage": "partial"
        }
      ],
      "sources": [
        "https://controller.msu.edu/student-accounts/tuition-rates-by-semester/international-undergrad-fall-spring",
        "https://admissions.msu.edu/apply/international/language-requirements",
        "https://admissions.msu.edu/cost-aid/scholarships/international",
        "https://www.econ.muni.cz/do/econ/soubory/oddeleni/ozs/admissions/2026_QS_World_University_Rankings_1.2__For_qs.com__11.2025.pdf",
        "https://xuanxiao.org/en/universities/michigan-state-university"
      ],
      "verified": true,
      "qsRankText": "182",
      "ieltsVerified": true
    },
    {
      "id": "umass",
      "name": "University of Massachusetts Amherst (UMass Amherst)",
      "countryId": "my",
      "city": "Amherst, Massachusetts",
      "website": "https://www.umass.edu",
      "qsRank": 260,
      "qsRankText": "260",
      "qsEdition": "QS 2027",
      "theRank": "=143",
      "theRankOrder": 1460,
      "theUrl": "https://www.timeshighereducation.com/world-university-rankings/university-massachusetts",
      "theNote": "THE xếp chung dưới tên University of Massachusetts.",
      "type": "Công lập",
      "tuition": {
        "min": 43505,
        "max": 43505,
        "currency": "USD",
        "note": "Ước tính học phí và phí năm 2026–27 cho sinh viên quốc tế toàn thời gian khoảng 43.505 USD (out-of-state 42.985 USD) theo trang chi phí của trường; trường ghi rõ đây chỉ là ước tính cho tới khi Hội đồng quản trị UMass phê duyệt. Chưa gồm ăn ở và bảo hiểm.",
        "year": "2026–27",
        "verified": false
      },
      "ieltsMin": 6.5,
      "ieltsNote": "IELTS Academic tổng tối thiểu 6.5 theo trang English Language Proficiency của UMass (trích qua kết quả tìm kiếm; trang có hai mức điểm từng kỹ năng 6.0/6.5 mâu thuẫn, chưa mở được trang để xác nhận).",
      "ieltsVerified": false,
      "intakes": [
        "Tháng 9 (Fall)",
        "Tháng 1 (Spring)"
      ],
      "applyVia": "Common App – Early Action (đầu tháng 11) hoặc Regular Decision (giữa tháng 1)",
      "highlights": [
        "Trường công lập chủ lực của bang Massachusetts, cách Boston khoảng 2 giờ; học phí thấp hơn nhiều trường tư vùng Boston.",
        "Isenberg School of Management mạnh về Kinh doanh, Kế toán và Quản trị khách sạn – du lịch; có Manning College of Information & Computer Sciences.",
        "Thuộc liên minh Five College (Amherst, Smith, Mount Holyoke…), được đăng ký học chéo môn."
      ],
      "majorIds": [
        "cs",
        "data",
        "business",
        "finance",
        "accounting",
        "marketing",
        "engineering",
        "electrical",
        "nursing",
        "economics",
        "media",
        "design",
        "architecture",
        "hospitality"
      ],
      "scholarships": [
        {
          "name": "Chancellor's Award",
          "value": "Khoảng 10.000–18.000 USD/năm (theo nguồn tổng hợp, chưa xác minh trên trang trường)",
          "note": "Học bổng thành tích cho sinh viên năm nhất ngoài bang Massachusetts có thành tích nổi bật; nguồn tổng hợp cho biết sinh viên quốc tế cũng được xét và không cần đơn riêng (chưa xác nhận trên trang trường). Không cộng dồn với ưu đãi New England Regional Student Program.",
          "url": "https://www.umass.edu/financialaid/umass-admissions-scholarships-and-awards",
          "deadline": "Xét tự động khi nộp hồ sơ năm nhất (Early Action đầu tháng 11, Regular Decision giữa tháng 1)",
          "auto": true,
          "amount": null,
          "coverage": "partial"
        }
      ],
      "sources": [
        "https://www.umass.edu/admissions/cost-attend",
        "https://www.topuniversities.com/universities/university-massachusetts-amherst",
        "https://www.umass.edu/financialaid/umass-admissions-scholarships-and-awards",
        "https://www.umass.edu/global-affairs/international-students-scholars/exchange-students/apply",
        "https://www.umass.edu/admissions/undergraduate-admissions/connect/information-policies/english-language-proficiency",
        "https://www.umass.edu/news/article/statistics-and-data-science-now-offered-stand-alone-degree"
      ],
      "verified": false
    },
    {
      "id": "usyd",
      "name": "The University of Sydney",
      "countryId": "uc",
      "city": "Sydney",
      "website": "https://www.sydney.edu.au",
      "qsRank": 28,
      "qsEdition": "QS 2027",
      "theRank": "=51",
      "theRankOrder": 510,
      "theUrl": "https://www.timeshighereducation.com/world-university-rankings/university-sydney",
      "type": "Công lập",
      "tuition": {
        "min": 51700,
        "max": 63600,
        "currency": "AUD",
        "note": "Học phí cử nhân quốc tế năm 2027 (48 tín chỉ/năm, mức tham khảo): Nghệ thuật/Xã hội 51.700–59.100 AUD; Điều dưỡng 51.700; Kiến trúc – Thiết kế 55.100; Kinh tế 59.100; Kinh doanh 59.100–63.600; Kỹ thuật & Khoa học máy tính 63.600; Khoa học sức khỏe tới 69.200 AUD. Học phí được điều chỉnh đầu mỗi năm.",
        "year": "2027",
        "verified": true
      },
      "ieltsMin": 6.5,
      "ieltsNote": "Mức chuẩn bậc cử nhân: IELTS Academic 6.5 tổng, không kỹ năng nào dưới 6.0; một số ngành (Điều dưỡng, Giáo dục…) cao hơn – xem trang từng khóa.",
      "ieltsVerified": true,
      "intakes": [
        "Tháng 2 (Semester 1)",
        "Tháng 8 (Semester 2 – một số ngành)"
      ],
      "applyVia": "Nộp trực tiếp qua cổng của trường hoặc qua đại diện tuyển sinh (UAC nếu học THPT tại Úc)",
      "highlights": [
        "Hạng 28 thế giới QS 2027, đại học lâu đời nhất nước Úc, thuộc nhóm Go8.",
        "Danh mục ngành rộng: Kinh doanh (có chuyên ngành Kinh doanh quốc tế, Nhân sự, Logistics), Kỹ thuật, Kiến trúc, Điều dưỡng.",
        "Sydney có cộng đồng người Việt lớn; có học bổng toàn phần học phí cho sinh viên quốc tế bậc cử nhân."
      ],
      "majorIds": [
        "cs",
        "data",
        "cybersecurity",
        "business",
        "finance",
        "accounting",
        "marketing",
        "intl-business",
        "hr",
        "engineering",
        "electrical",
        "nursing",
        "economics",
        "media",
        "design",
        "architecture"
      ],
      "scholarships": [
        {
          "name": "Sydney International Undergraduate Academic Excellence Scholarship",
          "value": "100% học phí và phí SSAF trong thời gian chuẩn của khóa (tối đa 4 năm)",
          "note": "Khoảng 20 suất/năm trên toàn cầu (cả hai kỳ) cho sinh viên quốc tế học cử nhân đơn ngành, chưa từng học đại học; phải nộp đơn trực tuyến riêng; xét theo thành tích và đa dạng quốc tịch/ngành; phải duy trì điểm trung bình học kỳ từ 65. Không gồm sinh hoạt phí.",
          "url": "https://www.sydney.edu.au/scholarships/e/sydney-international-undergraduate-academic-excellence-scholarship.html",
          "deadline": "Kỳ 1/2027 đã đóng; kỳ 2/2027 đang mở (chưa công bố ngày đóng) | Phải nộp đơn riêng",
          "auto": false,
          "amount": null,
          "coverage": "full"
        },
        {
          "name": "Vice-Chancellor's International Scholarships Scheme",
          "value": "60.000 hoặc 40.000 AUD (trả trong 1 năm), hoặc 20.000 / 10.000 / 5.000 AUD (trả trong 1 học kỳ)",
          "note": "Cho sinh viên quốc tế vào cử nhân hoặc thạc sĩ học phần; mọi ứng viên có thư mời không điều kiện trước ngày chốt được xét tự động, không cần nộp đơn; phụ thuộc ngân sách.",
          "url": "https://www.sydney.edu.au/scholarships/e/vice-chancellor-international-scholarships-scheme.html",
          "deadline": "Kỳ 1/2027: 17/8/2026, 5/10/2026, 16/11/2026 | Kỳ 2/2027: 15/2/2027, 22/3/2027, 3/5/2027 (hạn có thư mời không điều kiện) | Xét tự động",
          "auto": true,
          "amount": {
            "min": 5000,
            "max": 60000,
            "currency": "AUD",
            "per": "once"
          },
          "coverage": "partial"
        }
      ],
      "sources": [
        "https://www.sydney.edu.au/study/fees-and-loans/international-student-tuition-fees.html",
        "https://www.sydney.edu.au/scholarships/e/sydney-international-undergraduate-academic-excellence-scholarship.html",
        "https://www.studyaustralia.gov.au/en/tools-and-resources/news/qs-world-university-rankings-2026",
        "https://www.pickmyuni.com/student-resources/qs-australian-universities-rankings-2027-125",
        "https://www.sydney.edu.au/study/applying/how-to-apply/international-students/english-language-requirements.html",
        "https://www.sydney.edu.au/scholarships/e/vice-chancellor-international-scholarships-scheme.html",
        "https://www.sydney.edu.au/courses/courses/uc/bachelor-of-commerce0.html"
      ],
      "verified": true,
      "qsRankText": "28",
      "majorNotes": {
        "data": "Không có bằng riêng: là chuyên ngành (major) Data Science/Computational Data Science trong Bachelor of Science hoặc Bachelor of Advanced Computing",
        "cybersecurity": "Không có bằng riêng: là chuyên ngành (major) Cybersecurity trong Bachelor of Advanced Computing",
        "finance": "Là chuyên ngành (major) trong Bachelor of Commerce",
        "accounting": "Là chuyên ngành (major) trong Bachelor of Commerce",
        "marketing": "Là chuyên ngành (major) trong Bachelor of Commerce",
        "intl-business": "Là chuyên ngành (major) International Business trong Bachelor of Commerce",
        "hr": "Là chuyên ngành (major) Human Resource Management trong Bachelor of Commerce",
        "media": "Là chuyên ngành (major) Media and Communications trong Bachelor of Arts",
        "architecture": "Cử nhân là Bachelor of Design in Architecture; cần học tiếp Master of Architecture để hành nghề kiến trúc sư"
      }
    },
    {
      "id": "monash",
      "name": "Monash University",
      "countryId": "uc",
      "city": "Melbourne (Clayton / Caulfield)",
      "website": "https://www.monash.edu",
      "qsRank": 31,
      "qsEdition": "QS 2027",
      "theRank": "61",
      "theRankOrder": 610,
      "theUrl": "https://www.timeshighereducation.com/world-university-rankings/monash-university",
      "type": "Công lập",
      "tuition": {
        "min": 47340,
        "max": 63040,
        "currency": "AUD",
        "note": "Học phí sinh viên quốc tế năm 2027 (48 tín chỉ/năm) theo trang khóa học đã ghi trước đây: Bachelor of Arts 47.340 AUD, Bachelor of Commerce 59.140 AUD (khớp với nguồn tổng hợp), Bachelor of Engineering (Honours) 63.040 AUD. Lần kiểm tra này trang Monash chặn truy cập tự động nên chưa đối chiếu lại được.",
        "year": "2027",
        "verified": false
      },
      "ieltsMin": 6.5,
      "ieltsNote": "6.5 tổng, mỗi kỹ năng tối thiểu 6.0 (Commerce, Arts, Engineering); Dược, Giáo dục, ngành sức khỏe lâm sàng từ 7.0. Lần này chưa mở lại được trang trường để xác nhận.",
      "intakes": [
        "Tháng 2",
        "Tháng 7",
        "Tháng 11 (một số ngành)"
      ],
      "applyVia": "Nộp trực tiếp qua cổng của trường hoặc qua đại diện tuyển sinh; có lộ trình dự bị qua Monash College",
      "highlights": [
        "Hạng 31 thế giới QS 2027, đại học lớn nhất nước Úc, thuộc nhóm Go8.",
        "Mọi sinh viên quốc tế có thư mời cử nhân được xét tự động học bổng Monash International Merit 15.000 AUD/năm.",
        "Mạnh về Kinh doanh (có Logistics & chuỗi cung ứng, Nhân sự, Kinh doanh quốc tế), CNTT – An ninh mạng, Dược, Kỹ thuật và Thiết kế – Kiến trúc."
      ],
      "majorIds": [
        "cs",
        "data",
        "cybersecurity",
        "business",
        "finance",
        "accounting",
        "marketing",
        "intl-business",
        "hr",
        "logistics",
        "engineering",
        "electrical",
        "nursing",
        "economics",
        "media",
        "design",
        "architecture"
      ],
      "scholarships": [
        {
          "name": "Monash International Merit Scholarship",
          "value": "15.000 AUD/năm trong suốt khóa học (học bổng cấp từ 2026; trước 2026 là 10.000 AUD/năm)",
          "note": "Sinh viên quốc tế mọi quốc gia có thư mời cử nhân được xét tự động theo thành tích, không cần nộp đơn; chi trả theo mỗi 48 tín chỉ và phải duy trì điều kiện học tập. Học sinh học Year 12 tại Úc được hướng sang học bổng Sir John Monash.",
          "url": "https://www.monash.edu/study/fees-scholarships/scholarships/find-a-scholarship/international-merit-5770",
          "deadline": "Xét tự động khi nhận thư mời cử nhân, không có đơn riêng",
          "auto": true,
          "amount": {
            "min": 15000,
            "max": 15000,
            "currency": "AUD",
            "per": "year"
          },
          "coverage": "partial"
        }
      ],
      "sources": [
        "https://www.monash.edu/study/courses/find-a-course/commerce-b2001?international=true",
        "https://www.monash.edu/study/courses/find-a-course/engineering-e3001?international=true",
        "https://www.monash.edu/study/courses/find-a-course/arts-a2000?international=true",
        "https://www.monash.edu/study/fees-scholarships/scholarships/find-a-scholarship/international-merit-5770",
        "https://www.pickmyuni.com/student-resources/qs-australian-universities-rankings-2027-125",
        "https://xuanxiao.org/en/programmes/01m5ehn1sgy2bx35bbw2916zhy"
      ],
      "verified": false,
      "qsRankText": "31",
      "ieltsVerified": false,
      "majorNotes": {
        "hr": "Là chuyên ngành (major) Human Resource Management trong Bachelor of Business/Commerce",
        "logistics": "Là chuyên ngành (major) Supply Chain and Logistics Management trong Bachelor of Business",
        "marketing": "Là chuyên ngành (major) Marketing trong Bachelor of Business/Commerce",
        "architecture": "Cử nhân là Bachelor of Architectural Design; cần học tiếp Master of Architecture để hành nghề kiến trúc sư"
      }
    },
    {
      "id": "uts",
      "name": "University of Technology Sydney (UTS)",
      "countryId": "uc",
      "city": "Sydney",
      "website": "https://www.uts.edu.au",
      "qsRank": 87,
      "qsEdition": "QS 2027",
      "theRank": "152",
      "theRankOrder": 1520,
      "theUrl": "https://www.timeshighereducation.com/world-university-rankings/university-technology-sydney",
      "type": "Công lập",
      "tuition": {
        "min": 51016,
        "max": 57240,
        "currency": "AUD",
        "note": "Ước tính theo mức thu mỗi kỳ năm 2026 (nguồn tổng hợp, tháng 6/2026): Bachelor of Business khoảng 25.508 AUD/kỳ (≈51.016 AUD/năm); Kỹ thuật (Honours) và CNTT khoảng 28.620 AUD/kỳ (≈57.240 AUD/năm). Chưa tìm thấy mức chính thức 2027; UTS thu theo kỳ, tăng hằng năm – cần tra trên công cụ tra học phí của trường.",
        "year": "2026",
        "verified": false
      },
      "ieltsMin": 6.5,
      "ieltsNote": "Đa số cử nhân (ví dụ Kỹ thuật Honours, Luật, Điều dưỡng): IELTS Academic 6.5, Viết tối thiểu 6.0; Bachelor of Communication (Honours) yêu cầu 7.0 (Viết 7.0). Yêu cầu khác nhau theo khóa; chưa xem được bảng đầy đủ trên trang trường.",
      "intakes": [
        "Tháng 2/3 (Autumn)",
        "Tháng 7/8 (Spring – một số ngành)"
      ],
      "applyVia": "Nộp trực tiếp qua cổng của trường hoặc qua đại diện tuyển sinh; có lộ trình dự bị/diploma qua UTS College",
      "highlights": [
        "Đồng hạng 87 thế giới QS 2027, trường đại học trẻ hàng đầu nước Úc, nằm ngay trung tâm Sydney.",
        "Sinh viên Việt Nam được xét tự động học bổng UTS Southeast Asia International giảm 20% học phí.",
        "Thế mạnh ứng dụng: CNTT, Kỹ thuật, Thiết kế – Kiến trúc, Truyền thông, Kinh doanh; nhiều cơ hội thực tập với doanh nghiệp."
      ],
      "majorIds": [
        "cs",
        "data",
        "cybersecurity",
        "business",
        "finance",
        "accounting",
        "marketing",
        "intl-business",
        "hr",
        "engineering",
        "electrical",
        "nursing",
        "economics",
        "media",
        "design",
        "architecture"
      ],
      "scholarships": [
        {
          "name": "UTS Southeast Asia International Scholarship",
          "value": "Giảm 20% học phí",
          "note": "Cho công dân các nước Đông Nam Á (có Việt Nam) học toàn thời gian tại Sydney bậc cử nhân hoặc thạc sĩ học phần. Đợt hiện tại mở từ 12/12/2025 đến 31/12/2028. Trước đây ghi là xét tự động – chưa xác nhận lại được trên trang trường.",
          "url": "https://www.uts.edu.au/for-students/admissions-entry/scholarships/scholarships-search/uts-southeast-asia-international-scholarship",
          "deadline": "31/12/2028 (đợt mở từ 12/12/2025)",
          "auto": true,
          "amount": null,
          "coverage": "partial"
        },
        {
          "name": "UTS Vice-Chancellor's International Undergraduate Scholarship",
          "value": "100% học phí trong thời gian chuẩn của khóa",
          "note": "Cho sinh viên quốc tế tốt nghiệp Year 12 (hoặc tương đương) trong vòng 3 năm, điểm trung bình từ 85%, học toàn thời gian tại Sydney; phải nộp đơn trực tuyến kèm câu hỏi viết; chỉ người xếp hạng cao nhất được trao.",
          "url": "https://www.uts.edu.au/for-students/admissions-entry/scholarships/scholarships-search/uts-vice-chancellors-international-undergraduate-scholarship",
          "deadline": "1/10/2026 – 2/11/2026 (kỳ Autumn 2027, đã đóng) | Phải nộp đơn riêng",
          "auto": false,
          "amount": null,
          "coverage": "full"
        }
      ],
      "sources": [
        "https://www.uts.edu.au/study/find-a-course/bachelor-communication-media-arts-and-production",
        "https://www.uts.edu.au/for-students/admissions-entry/scholarships/scholarships-search/uts-southeast-asia-international-scholarship",
        "https://college-council.com/en/universities/university-of-technology-sydney",
        "https://www.studyaustralia.gov.au/en/tools-and-resources/news/qs-world-university-rankings-2026",
        "https://www.pickmyuni.com/student-resources/qs-australian-universities-rankings-2027-125",
        "https://www.uts.edu.au/study/international/essential-information/english-language-requirements",
        "https://www.uts.edu.au/for-students/admissions-entry/scholarships/scholarships-search/uts-vice-chancellors-international-undergraduate-scholarship"
      ],
      "verified": false,
      "qsRankText": "=87",
      "ieltsVerified": false,
      "majorNotes": {
        "finance": "Là chuyên ngành (major) trong Bachelor of Business",
        "accounting": "Là chuyên ngành (major) trong Bachelor of Business",
        "marketing": "Là chuyên ngành (major) trong Bachelor of Business",
        "intl-business": "Là chuyên ngành (major) International Business trong Bachelor of Business",
        "hr": "Là chuyên ngành (major) Human Resource Management trong Bachelor of Business",
        "economics": "Là chuyên ngành (major) Economics trong Bachelor of Business",
        "architecture": "Cử nhân là Bachelor of Design in Architecture; cần học tiếp Master of Architecture để hành nghề kiến trúc sư"
      }
    },
    {
      "id": "macquarie",
      "name": "Macquarie University",
      "countryId": "uc",
      "city": "Sydney (Macquarie Park)",
      "website": "https://www.mq.edu.au",
      "qsRank": 126,
      "qsRankText": "=126",
      "qsEdition": "QS 2027",
      "theRank": "=161",
      "theRankOrder": 1610,
      "theUrl": "https://www.timeshighereducation.com/world-university-rankings/macquarie-university",
      "type": "Công lập",
      "tuition": {
        "min": 45400,
        "max": 49206,
        "currency": "AUD",
        "note": "Ước tính theo nguồn tổng hợp (mức 2026, áp dụng tham khảo cho kỳ nhập học 2027): Bachelor of Commerce khoảng 46.900–49.206 AUD/năm; Commerce + Information Technology khoảng 45.400–46.600 AUD/năm. Chưa tìm thấy mức chính thức 2027; cần kiểm tra bằng công cụ tính học phí của trường.",
        "year": "2026",
        "verified": false
      },
      "ieltsMin": 6.5,
      "ieltsNote": "Đa số cử nhân (ví dụ Commerce) yêu cầu 6.5 tổng, mỗi kỹ năng tối thiểu 6.0 (theo IDP và nguồn tổng hợp); một số ngành khác biệt. Chưa xác nhận trên trang trường.",
      "ieltsVerified": false,
      "intakes": [
        "Tháng 2 (Session 1)",
        "Tháng 7 (Session 2)"
      ],
      "applyVia": "Nộp trực tiếp qua cổng của trường hoặc qua đại diện tuyển sinh; có lộ trình dự bị qua Macquarie University College",
      "highlights": [
        "Đồng hạng 126 thế giới QS 2027, cao nhất từ trước tới nay (QS 2026: hạng 138).",
        "Khuôn viên nằm trong khu công nghệ Macquarie Park, gần trụ sở nhiều tập đoàn, thuận lợi cho thực tập.",
        "Mạnh về Kinh doanh – Tài chính, Kế toán, An ninh mạng; học phí mềm hơn các trường Go8 ở Sydney."
      ],
      "majorIds": [
        "cs",
        "data",
        "cybersecurity",
        "business",
        "finance",
        "accounting",
        "marketing",
        "intl-business",
        "hr",
        "engineering",
        "electrical",
        "economics",
        "media"
      ],
      "scholarships": [
        {
          "name": "Vice-Chancellor's International Scholarship",
          "value": "Tối đa 10.000 AUD (giảm học phí, cấp một lần)",
          "note": "Xét theo thành tích học tập cho sinh viên quốc tế bậc cử nhân và thạc sĩ; có hạn nộp theo từng kỳ. Trang trường chặn truy cập tự động nên chưa xác nhận lại được giá trị và hạn 2027.",
          "url": "https://www.mq.edu.au/study/admissions-and-entry/scholarships/international/vice-chancellor-s-international-scholarship",
          "deadline": "Theo từng kỳ nhập học (Session 1/2027, Session 2/2027) – chưa xác nhận ngày cụ thể | Phải nộp đơn riêng",
          "auto": false,
          "amount": {
            "min": 10000,
            "max": 10000,
            "currency": "AUD",
            "per": "once"
          },
          "coverage": "partial"
        }
      ],
      "sources": [
        "https://lighthouse.mq.edu.au/media-releases/2025/june-2025/macquaries-rising-reputation-as-a-global-leader-confirmed-in-latest-rankings",
        "https://www.mq.edu.au/study/admissions-and-entry/scholarships/international/vice-chancellor-s-international-scholarship",
        "https://www.bachelorsportal.com/studies/493212/commerce-and-information-technology.html",
        "https://www.pickmyuni.com/student-resources/qs-australian-universities-rankings-2027-125",
        "https://www.idp.com/universities-and-colleges/macquarie-university/bachelor-of-commerce-and-bachelor-of-information-technology-4-years/PRG-AU-00327220/",
        "https://www.hotcoursesabroad.com/study/course/australia/bachelor-of-commerce/55948814/program.html",
        "https://www.hotcoursesabroad.com/study/course/australia/bachelor-of-commerce-3-years-major-international-business/59073455/program.html"
      ],
      "verified": false,
      "majorNotes": {
        "marketing": "Là chuyên ngành (major) trong Bachelor of Commerce",
        "intl-business": "Là chuyên ngành (major) International Business trong Bachelor of Commerce",
        "hr": "Là chuyên ngành (major) Human Resource Management trong Bachelor of Commerce"
      }
    },
    {
      "id": "swinburne",
      "name": "Swinburne University of Technology",
      "countryId": "uc",
      "city": "Melbourne (Hawthorn)",
      "website": "https://www.swinburne.edu.au",
      "qsRank": 291,
      "qsEdition": "QS 2027",
      "theRank": "294",
      "theRankOrder": 2940,
      "theUrl": "https://www.timeshighereducation.com/world-university-rankings/swinburne-university-technology",
      "type": "Công lập",
      "tuition": {
        "min": 42500,
        "max": 48300,
        "currency": "AUD",
        "note": "Biểu phí quốc tế 2027 của Swinburne (mức tham khảo – indicative): Media and Communication 42.500 AUD/năm; Computer Science / ICT 44.300; Data Science, Cyber Security 46.300; Business, Accounting 46.700; Design (Architecture), Nursing 47.700; Engineering (Honours) 48.300 AUD/năm. Arts thấp hơn (37.800).",
        "year": "2027",
        "verified": true
      },
      "ieltsMin": 6,
      "ieltsNote": "Đa số cử nhân yêu cầu IELTS 6.0 tổng; các nguồn tổng hợp cho khối Business/Engineering ghi 6.0 mỗi kỹ năng (không phải 5.5 như ghi trước đây). Điều dưỡng cao hơn. Chưa xác nhận trên trang trường.",
      "ieltsVerified": false,
      "intakes": [
        "Tháng 2/3",
        "Tháng 7/8"
      ],
      "applyVia": "Nộp trực tiếp qua cổng của trường hoặc qua đại diện tuyển sinh; có thể học chương trình liên kết Swinburne Việt Nam rồi chuyển tiếp",
      "highlights": [
        "Top 300 thế giới (hạng 291 QS 2027); thế mạnh Thiết kế, Kỹ thuật, CNTT và học kết hợp thực tập.",
        "Có chương trình liên kết Swinburne Việt Nam (Hà Nội, TP.HCM, Đà Nẵng, Cần Thơ) để học trước tại Việt Nam.",
        "Học phí và điều kiện IELTS mềm hơn nhóm Go8; học bổng 20–30% học phí cho sinh viên quốc tế."
      ],
      "majorIds": [
        "cs",
        "data",
        "ai",
        "cybersecurity",
        "business",
        "finance",
        "accounting",
        "marketing",
        "intl-business",
        "hr",
        "logistics",
        "engineering",
        "electrical",
        "nursing",
        "media",
        "design"
      ],
      "scholarships": [
        {
          "name": "Swinburne International Scholarship",
          "value": "Giảm 20% học phí trong thời gian chuẩn của khóa",
          "note": "Sinh viên quốc tế nộp hồ sơ vào khóa đủ điều kiện tại cơ sở Hawthorn, bắt đầu học lần đầu năm 2027, được xét tự động theo kết quả học tập trước đó; kết quả ghi trong thư mời; chỉ áp dụng cho học phí; một số chương trình bị loại trừ.",
          "url": "https://www.swinburne.edu.au/study/international/scholarships/",
          "deadline": "Xét tự động khi nộp hồ sơ, không có hạn nộp riêng (theo hạn nhập học của từng kỳ)",
          "auto": true,
          "amount": null,
          "coverage": "partial"
        },
        {
          "name": "George Swinburne International Excellence Scholarship",
          "value": "Giảm 30% học phí",
          "note": "Theo trang chiến dịch của trường, học bổng dành cho sinh viên quốc tế là nữ (theo hộ chiếu) theo học các khóa Kỹ thuật hoặc Xây dựng đủ điều kiện, bắt đầu tại Hawthorn lần đầu năm 2027; một số trang tổng hợp ghi mở cho mọi sinh viên – cần xác nhận với trường. Không cộng dồn với học bổng 20%.",
          "url": "https://www.swinburne.edu.au/study/international/campaigns/george-swinburne-scholarship/",
          "deadline": "Xét tự động khi nộp hồ sơ năm 2027 (chưa có hạn riêng)",
          "auto": true,
          "amount": null,
          "coverage": "partial"
        }
      ],
      "sources": [
        "https://www.swinburne.edu.au/news/2025/06/2025-qs-world-university-ranking/",
        "https://www.swinburne.edu.au/international/scholarships/",
        "https://swinburne-vn.edu.vn/en/about-swinburne-viet-nam/",
        "https://gabble.ai/blog/swinburne-university-of-technology-business-acceptance-rate-fees",
        "https://www.pickmyuni.com/student-resources/qs-australian-universities-rankings-2027-125",
        "https://www.swinburne.edu.au/downloads/Undergraduate-Course-Fees-2027-International.pdf",
        "https://www.swinburne.edu.au/study/international/scholarships/",
        "https://www.swinburne.edu.au/study/international/campaigns/george-swinburne-scholarship/",
        "https://www.idp.com/scholarship/swinburne-university-of-technology/swinburne-international-scholarship/127612"
      ],
      "verified": false,
      "qsRankText": "291",
      "majorNotes": {
        "ai": "Không có cử nhân AI kỹ thuật riêng: có Bachelor of Artificial Intelligence in Business (định hướng kinh doanh); AI kỹ thuật học qua Bachelor of Computer Science",
        "finance": "Là chuyên ngành (major) Finance trong Bachelor of Business",
        "marketing": "Là chuyên ngành (major) Marketing trong Bachelor of Business",
        "intl-business": "Là chuyên ngành (major) International Business trong Bachelor of Business",
        "hr": "Là chuyên ngành (major) Human Resource Management trong Bachelor of Business",
        "logistics": "Là chuyên ngành (major) Supply Chain and Logistics Management trong Bachelor of Business"
      }
    },
    {
      "id": "mcgill",
      "name": "McGill University",
      "countryId": "canada",
      "city": "Montréal, Québec",
      "website": "https://www.mcgill.ca",
      "qsRank": 30,
      "qsEdition": "QS 2027",
      "theRank": "43",
      "theRankOrder": 430,
      "theUrl": "https://www.timeshighereducation.com/world-university-rankings/mcgill-university",
      "type": "Công lập",
      "tuition": {
        "min": 35561,
        "max": 71687,
        "currency": "CAD",
        "note": "Học phí cử nhân quốc tế 2026–27 (30 tín chỉ, chưa gồm phí khác): Nông nghiệp – Môi trường, Kiến trúc (BScArch), Điều dưỡng (BScN) ≈35.561; Arts 54.000 (tổng gồm phí ≈57.647); Science 64.786; Kỹ thuật 65.167,50; Thương mại (BCom) 71.687 CAD. Mô hình học phí bảo đảm: giữ cố định suốt khóa nếu học liên tục.",
        "year": "2026-27",
        "verified": true
      },
      "ieltsMin": 6.5,
      "ieltsNote": "IELTS Academic 6.5 tổng, mỗi kỹ năng tối thiểu 6.0; không chấp nhận IELTS One Skill Retake.",
      "ieltsVerified": true,
      "intakes": [
        "Tháng 9",
        "Tháng 1 (một số ngành)"
      ],
      "applyVia": "Nộp trực tiếp qua cổng McGill (hạn thường 15/1)",
      "highlights": [
        "Hạng 30 thế giới QS 2027 – cao nhất Canada; học bằng tiếng Anh tại Montréal, thành phố song ngữ có chi phí sống thấp hơn Toronto, Vancouver.",
        "Học phí quốc tế được cam kết giữ nguyên suốt chương trình; một số ngành (Kiến trúc, Điều dưỡng) có mức học phí thấp hơn hẳn.",
        "Desautels (BCom) có nhiều chuyên ngành: Kế toán, Tài chính, Marketing, Kinh doanh quốc tế, Quản trị nhân sự, Quản trị vận hành, Business Analytics."
      ],
      "majorIds": [
        "cs",
        "business",
        "finance",
        "accounting",
        "marketing",
        "engineering",
        "electrical",
        "nursing",
        "economics",
        "architecture",
        "intl-business",
        "hr"
      ],
      "scholarships": [
        {
          "name": "One-year Entrance Scholarship",
          "value": "3.000 CAD (một năm, không gia hạn)",
          "note": "Mọi ứng viên cử nhân được xét tự động nếu đạt mức học lực tối thiểu; không bảo đảm có suất.",
          "url": "https://www.mcgill.ca/studentaid/scholarships-aid/future-undergrads/entrance-scholarships",
          "deadline": "Xét tự động khi nộp hồ sơ (hạn tuyển sinh cho ứng viên ngoài Canada thường 15/1)",
          "auto": true,
          "amount": {
            "min": 3000,
            "max": 3000,
            "currency": "CAD",
            "per": "once"
          },
          "coverage": "partial"
        },
        {
          "name": "Major Entrance Scholarships",
          "value": "3.000 / 5.000 / 10.000 CAD/năm, gia hạn 3–4 năm (mức 12.000 CAD chỉ dành cho công dân/thường trú nhân Canada)",
          "note": "Xét học lực trước, sau đó hoạt động lãnh đạo; cần nộp đơn riêng trên Applicant Portal (mở từ 1/10) ngay sau khi nộp hồ sơ tuyển sinh. Không đạt sẽ được xét học bổng 1 năm.",
          "url": "https://www.mcgill.ca/studentaid/scholarships-aid/future-undergrads/entrance-scholarships",
          "deadline": "Mở từ 1/10/2026; hạn 2027 xem trên Applicant Portal (các năm trước khoảng cuối tháng 1) | Cần nộp đơn riêng",
          "auto": false,
          "amount": {
            "min": 3000,
            "max": 10000,
            "currency": "CAD",
            "per": "year"
          },
          "coverage": "partial"
        }
      ],
      "sources": [
        "https://www.mcgill.ca/student-accounts/files/student-accounts/new_intl_ugrad_degree_students_admitted_2026-27_0.pdf",
        "https://www.mcgill.ca/undergraduate-admissions/apply/english-proficiency",
        "https://www.mcgill.ca/studentaid/scholarships-aid/future-undergrads",
        "https://www.mcgill.ca/studentaid/scholarships-aid/future-undergrads/entrance-scholarships/application-instructions",
        "https://coursecatalogue.mcgill.ca/en/undergraduate/management/programs/",
        "https://www.cicnews.com/2025/06/these-are-the-top-universities-in-canada-according-to-the-2026-qs-world-university-rankings-0656783.html",
        "https://academica.ca/top-ten/qs-world-university-rankings-2027-released/",
        "https://www.mcgill.ca/student-accounts/bachelor-arts-ba-3",
        "https://www.mcgill.ca/student-accounts/bachelor-engineering-beng-2",
        "https://mcgill.ca/undergraduate-admissions/apply/english-proficiency",
        "https://www.mcgill.ca/studentaid/scholarships-aid/future-undergrads/entrance-scholarships"
      ],
      "verified": true,
      "qsRankText": "30",
      "scholarshipNote": "Đã sửa: mức trung bình ≈19.000 CAD là của học bổng hỗ trợ tài chính (entrance bursary, theo nhu cầu) cho sinh viên Mỹ/quốc tế, không phải học bổng khen thưởng.",
      "majorNotes": {
        "finance": "Không có cử nhân Tài chính riêng; là major/concentration Finance trong BCom (Desautels).",
        "accounting": "Không có cử nhân Kế toán riêng; là major Accounting trong BCom (Desautels).",
        "marketing": "Không có cử nhân Marketing riêng; là concentration trong BCom (Desautels).",
        "intl-business": "Không có cử nhân riêng; là major/concentration International Management trong BCom (Desautels).",
        "hr": "Không có cử nhân Quản trị nhân sự riêng; chỉ là concentration (Organizational Behaviour / Labour-Management Relations & Human Resources) trong BCom.",
        "architecture": "BSc (Architecture) là bằng tiền chuyên nghiệp; hành nghề kiến trúc sư cần học tiếp M.Arch."
      }
    },
    {
      "id": "waterloo",
      "name": "University of Waterloo",
      "countryId": "canada",
      "city": "Waterloo, Ontario",
      "website": "https://uwaterloo.ca",
      "qsRank": 113,
      "qsRankText": "=113",
      "qsEdition": "QS 2027",
      "theRank": "178",
      "theRankOrder": 1780,
      "theUrl": "https://www.timeshighereducation.com/world-university-rankings/university-waterloo",
      "type": "Công lập",
      "tuition": {
        "min": 51000,
        "max": 75000,
        "currency": "CAD",
        "note": "Ước tính năm nhất (2 kỳ, gồm học phí và phí bắt buộc) cho sinh viên quốc tế nhập học 9/2026: Environment 51.000; Science/Health 54.000; Arts và Accounting & Financial Management 58.000; Toán 62.000; Computing & Financial Management 64.000; Khoa học máy tính 73.000; Kỹ thuật/Software Engineering/Kiến trúc 75.000 CAD. Năm trên của AFM cao hơn đáng kể. Chưa có số liệu 2027.",
        "year": "2026-27",
        "verified": true
      },
      "ieltsMin": 6.5,
      "ieltsNote": "IELTS Academic 6.5 tổng, Viết và Nói tối thiểu 6.5, Đọc và Nghe 6.0 (hoặc 7.0 tổng, mỗi kỹ năng 6.0); chỉ nhận điểm thi từ 1/5/2025 trở đi; chấp nhận One Skill Retake.",
      "ieltsVerified": true,
      "intakes": [
        "Tháng 9"
      ],
      "applyVia": "OUAC (mẫu 105)",
      "highlights": [
        "Chương trình Co-op lớn nhất thế giới: xen kẽ học kỳ và kỳ thực tập có lương, rất có lợi cho xin việc và định cư.",
        "Thế mạnh hàng đầu Canada về Khoa học máy tính, Toán, Kỹ thuật (Software Engineering, Kỹ thuật điện – máy tính); CS có chuyên sâu Trí tuệ nhân tạo.",
        "Học bổng đầu vào 10.000 CAD xét tự động cho sinh viên quốc tế năm nhất."
      ],
      "majorIds": [
        "cs",
        "data",
        "ai",
        "business",
        "finance",
        "accounting",
        "engineering",
        "electrical",
        "architecture",
        "economics"
      ],
      "scholarships": [
        {
          "name": "International Student Entrance Scholarship",
          "value": "10.000 CAD (chỉ năm nhất, chia 2 đợt 5.000 CAD)",
          "note": "Xét tự động cho sinh viên quốc tế năm nhất toàn thời gian; hiển thị trên cổng ứng viên từ giữa tháng 4. Không áp dụng cho sinh viên chuyển tiếp có tín chỉ, sinh viên hoãn nhập học và một số ngành.",
          "url": "https://uwaterloo.ca/future-students/financing/international-scholarships",
          "deadline": "Xét tự động khi nộp hồ sơ (kết quả từ giữa tháng 4/2027)",
          "auto": true,
          "amount": {
            "min": 10000,
            "max": 10000,
            "currency": "CAD",
            "per": "once"
          },
          "coverage": "partial"
        },
        {
          "name": "President's Scholarship of Distinction / President's Scholarship / Merit Scholarship",
          "value": "2.000 CAD (điểm ≥ 95%, kèm quyền nhận thêm 1.500 CAD International Experience/Research Award ở năm trên); 2.000 CAD (90–94,9%); 1.000 CAD (85–89,9%)",
          "note": "Tự động theo điểm trung bình 6 môn lớp 12 (xét đầu tháng 5); trang trường không ghi giới hạn quốc tịch. Có thể cộng dồn với học bổng 10.000 CAD.",
          "url": "https://uwaterloo.ca/future-students/financing/scholarships",
          "deadline": "Xét tự động theo điểm đầu vào (đầu tháng 5/2027); phải nhận thư mời đúng hạn",
          "auto": true,
          "amount": {
            "min": 1000,
            "max": 2000,
            "currency": "CAD",
            "per": "once"
          },
          "coverage": "partial"
        }
      ],
      "sources": [
        "https://uwaterloo.ca/future-students/financing/tuition",
        "https://uwaterloo.ca/future-students/admissions/english-language-requirements",
        "https://uwaterloo.ca/future-students/financing/international-scholarships",
        "https://www.cicnews.com/2025/06/these-are-the-top-universities-in-canada-according-to-the-2026-qs-world-university-rankings-0656783.html",
        "https://uwaterloo.ca/news/waterloo-rises-2027-qs-world-university-rankings",
        "https://uwaterloo.ca/future-students/financing/scholarships"
      ],
      "verified": true,
      "majorNotes": {
        "business": "Không có cử nhân Quản trị kinh doanh riêng; chỉ có các chương trình liên quan như Accounting & Financial Management, Global Business and Digital Arts hoặc song bằng với Wilfrid Laurier.",
        "ai": "Không có cử nhân AI riêng; là hướng chuyên sâu AI trong Khoa học máy tính hoặc lựa chọn (option) AI cho sinh viên Kỹ thuật."
      }
    },
    {
      "id": "alberta",
      "name": "University of Alberta",
      "countryId": "canada",
      "city": "Edmonton, Alberta",
      "website": "https://www.ualberta.ca",
      "qsRank": 96,
      "qsRankText": "96",
      "qsEdition": "QS 2027",
      "theRank": "=118",
      "theRankOrder": 1180,
      "theUrl": "https://www.timeshighereducation.com/world-university-rankings/university-alberta",
      "type": "Công lập",
      "tuition": {
        "min": 41390,
        "max": 52699,
        "currency": "CAD",
        "note": "Học phí năm cho sinh viên quốc tế nhập học 9/2027 (tăng 5,5%, được Hội đồng quản trị thông qua 27/3/2026; cam kết cố định cả khóa – tuition guarantee): Arts/ALES/KSR 41.390; Science 41.980; Điều dưỡng 43.088; Kinh doanh 49.106; Kỹ thuật và Khoa học máy tính 52.699 CAD (Khoa học máy tính được đưa ngang mức Kỹ thuật). Education/Augustana thấp hơn (≈37.882). Mức khóa 9/2026: Arts 39.233, Science/CS 39.792, Kinh doanh 46.547, Kỹ thuật 49.952 CAD.",
        "verified": true,
        "year": "2027-28"
      },
      "ieltsMin": 6.5,
      "ieltsNote": "IELTS Academic 6.5 tổng, không kỹ năng nào dưới 6.0 (thi trực tiếp hoặc IELTS Online); không chấp nhận One Skill Retake.",
      "ieltsVerified": true,
      "intakes": [
        "Tháng 9",
        "Tháng 1 (một số ngành)"
      ],
      "applyVia": "Nộp trực tiếp qua cổng UAlberta",
      "highlights": [
        "Top 100 thế giới (hạng 96 QS 2027) nhưng học phí thấp hơn nhóm trường Toronto/Vancouver; chi phí sinh hoạt ở Edmonton dễ chịu.",
        "Cam kết học phí cố định cho toàn khóa (tuition guarantee) giúp dễ lập kế hoạch tài chính.",
        "BCom có chuyên ngành Kinh doanh quốc tế và Quản trị nhân sự; nổi tiếng về nghiên cứu AI (Amii)."
      ],
      "majorIds": [
        "cs",
        "business",
        "finance",
        "accounting",
        "marketing",
        "engineering",
        "electrical",
        "nursing",
        "economics",
        "design",
        "intl-business",
        "hr"
      ],
      "scholarships": [
        {
          "name": "President's International Distinction Scholarship",
          "value": "Tới 120.000 CAD trong 4 năm",
          "note": "Khoảng 25 suất/năm cho sinh viên quốc tế (study permit) năm nhất có học lực xuất sắc và hoạt động lãnh đạo/cộng đồng; xét qua General Application trên cổng học bổng; gia hạn khi GPA ≥ 2.0 trên tối thiểu 18 tín chỉ.",
          "url": "https://www.ualberta.ca/en/admissions/tuition-and-scholarships/international-entrance-scholarships/index.html",
          "deadline": "10/1/2027 | Cần nộp General Application trên cổng học bổng",
          "auto": false,
          "amount": {
            "min": 120000,
            "max": 120000,
            "currency": "CAD",
            "per": "total"
          },
          "coverage": "partial"
        },
        {
          "name": "International Admission Scholarship",
          "value": "Theo điểm đầu vào (các nguồn ghi tới 5.000–10.000 CAD, một lần)",
          "note": "Xét tự động theo điểm đầu vào khi nhận thư mời; mức cụ thể cho kỳ 2027 chưa xác nhận trên trang trường.",
          "url": "https://www.ualberta.ca/en/admissions/tuition-and-scholarships/entrance-scholarships/index.html",
          "deadline": "Xét tự động khi nộp hồ sơ tuyển sinh",
          "auto": true,
          "amount": null,
          "coverage": "partial"
        }
      ],
      "sources": [
        "https://www.ualberta.ca/en/registrar/costs-tuition-fees/tuition-increases.html",
        "https://www.ualberta.ca/en/admissions/tuition-and-scholarships/tuition-and-fees.html",
        "https://www.ualberta.ca/en/admissions/how-to-apply/admission-requirements/language-requirements/index.html",
        "https://www.ualberta.ca/en/admissions/tuition-and-scholarships/international-entrance-scholarships/index.html",
        "https://www.ualberta.ca/en/business/programs/bachelor-of-commerce/majors/index.html",
        "https://www.cicnews.com/2025/06/these-are-the-top-universities-in-canada-according-to-the-2026-qs-world-university-rankings-0656783.html",
        "https://academica.ca/top-ten/qs-world-university-rankings-2027-released/",
        "https://preview.ualberta.ca/en/registrar/media-library/presentations/2026-27_tuitionstudentconsultationpresentation.pdf",
        "https://alberta.academicworks.ca/opportunities/27268"
      ],
      "verified": true,
      "majorNotes": {
        "finance": "Không có cử nhân Tài chính riêng; là major Finance trong BCom (Alberta School of Business).",
        "accounting": "Không có cử nhân Kế toán riêng; là major Accounting trong BCom.",
        "marketing": "Không có cử nhân Marketing riêng; là major Marketing trong BCom.",
        "intl-business": "Không có cử nhân riêng; là major International Business trong BCom.",
        "hr": "Không có cử nhân riêng; là major Human Resource Management trong BCom."
      }
    },
    {
      "id": "york",
      "name": "York University",
      "countryId": "canada",
      "city": "Toronto, Ontario",
      "website": "https://www.yorku.ca",
      "qsRank": 322,
      "qsEdition": "QS 2027",
      "theRank": "451–500",
      "theRankOrder": 5000,
      "theUrl": "https://www.timeshighereducation.com/world-university-rankings/york-university",
      "type": "Công lập",
      "tuition": {
        "min": 38000,
        "max": 47000,
        "currency": "CAD",
        "note": "Ước tính học phí năm 2026–27 cho sinh viên quốc tế toàn thời gian (theo trang trường): Khoa học máy tính ≈38.000; đa số ngành Arts & Sciences ≈40.000; Thiết kế ≈40.000; Kinh doanh (gồm Schulich BBA/iBBA) 40.000–44.000; Kỹ thuật ≈47.000 CAD.",
        "year": "2026-27",
        "verified": true
      },
      "ieltsMin": 6.5,
      "ieltsNote": "IELTS Academic 6.5 tổng; Kỹ thuật Lassonde 6.5 (không kỹ năng dưới 6.0); Schulich và Điều dưỡng 7.0. Không chấp nhận IELTS General.",
      "ieltsVerified": true,
      "intakes": [
        "Tháng 9",
        "Tháng 1 (một số ngành)"
      ],
      "applyVia": "OUAC (mẫu 105)",
      "highlights": [
        "Trường lớn thứ 3 Canada ở Toronto, học phí mềm hơn U of T; cộng đồng sinh viên Việt Nam đông.",
        "Có ngành chuyên biệt hiếm: Quản trị nhân sự (BHRM), Kinh doanh quốc tế (iBBA – Schulich), An ninh mạng (Lassonde), Khoa học dữ liệu.",
        "Học bổng President's International Scholarship of Excellence 45.000 CAD/năm."
      ],
      "majorIds": [
        "cs",
        "data",
        "cybersecurity",
        "business",
        "finance",
        "accounting",
        "marketing",
        "engineering",
        "electrical",
        "nursing",
        "economics",
        "media",
        "design",
        "intl-business",
        "hr"
      ],
      "scholarships": [
        {
          "name": "President's International Scholarship of Excellence (PISE)",
          "value": "45.000 CAD/năm × 4 năm (tổng 180.000 CAD)",
          "note": "Cho học sinh THPT quốc tế nhập học Fall 2027, học lực xuất sắc kèm hoạt động tình nguyện, ngoại khóa, lãnh đạo; cần trường THPT đề cử và nộp đơn riêng; không cộng dồn với học bổng đầu vào khác. Số suất rất ít.",
          "url": "https://futurestudents.yorku.ca/presidents-international-scholarship-excellence",
          "deadline": "Hồ sơ học sinh ≈26–27/1/2027; đề cử của trường ≈4/2/2027 (theo nguồn thứ cấp – kiểm tra Guide to Apply) | Cần nộp đơn riêng",
          "auto": false,
          "amount": {
            "min": 45000,
            "max": 45000,
            "currency": "CAD",
            "per": "year"
          },
          "coverage": "partial"
        }
      ],
      "sources": [
        "https://futurestudents.yorku.ca/financing-your-degree/tuition-fees",
        "https://futurestudents.yorku.ca/requirements/language-tests",
        "https://futurestudents.yorku.ca/presidents-international-scholarship-excellence",
        "https://futurestudents.yorku.ca/program/computer-security",
        "https://www.yorku.ca/yfile/2025/06/20/york-u-continues-positive-trajectory-in-qs-world-university-rankings",
        "https://educationnewscanada.com/article/organization/24226/1207967/York-University-climbs-11-spots-in-QS-World-University-Rankings.htm",
        "https://futurestudents.yorku.ca/tuition",
        "https://futurestudents.yorku.ca/program/cybersecurity"
      ],
      "verified": true,
      "qsRankText": "=322"
    },
    {
      "id": "concordia",
      "name": "Concordia University",
      "countryId": "canada",
      "city": "Montréal, Québec",
      "website": "https://www.concordia.ca",
      "qsRank": 497,
      "qsRankText": "=497",
      "qsEdition": "QS 2027",
      "theRank": "651–700",
      "theRankOrder": 6630,
      "theUrl": "https://www.timeshighereducation.com/world-university-rankings/concordia-university",
      "type": "Công lập",
      "tuition": {
        "min": 30300,
        "max": 42000,
        "currency": "CAD",
        "note": "Học phí quốc tế theo tín chỉ Fall 2026/Winter 2027 × 30 tín chỉ/năm: Fine Arts 1.010 CAD/tín chỉ (≈30.300); Arts & Science 1.160 (≈34.800); Kỹ thuật & Khoa học máy tính 1.285 (≈38.550); John Molson (Kinh doanh) 1.400 (≈42.000 CAD). Chưa gồm phí bắt buộc và bảo hiểm (thư ước tính của trường: năm nhất Kỹ thuật ≈41.344 CAD, BComm ≈45.557 CAD gồm phí).",
        "year": "2026-27",
        "verified": true
      },
      "ieltsMin": 6,
      "ieltsNote": "IELTS Academic 6.0 tổng, không kỹ năng nào dưới 5.5; một số ngành (Viết sáng tạo, Văn học Anh, Giáo dục…) yêu cầu cao hơn, ví dụ 7.0.",
      "ieltsVerified": true,
      "intakes": [
        "Tháng 9",
        "Tháng 1 (nhiều ngành)"
      ],
      "applyVia": "Nộp trực tiếp qua cổng Concordia",
      "highlights": [
        "Học bằng tiếng Anh ở trung tâm Montréal với học phí thuộc nhóm thấp của các trường lớn Canada.",
        "John Molson School of Business có chuyên ngành Logistics – chuỗi cung ứng (Supply Chain Operations Management), Kinh doanh quốc tế, Quản trị nhân sự.",
        "Nhận hồ sơ cả kỳ tháng 1 và có Co-op cho nhiều ngành."
      ],
      "majorIds": [
        "cs",
        "data",
        "business",
        "finance",
        "accounting",
        "marketing",
        "engineering",
        "electrical",
        "economics",
        "media",
        "design",
        "intl-business",
        "hr",
        "logistics"
      ],
      "scholarships": [
        {
          "name": "Concordia University International Tuition Entrance Scholarship (Gina Cody School)",
          "value": "5.000 CAD/năm, gia hạn tối đa 4 năm",
          "note": "Dành cho sinh viên quốc tế ngành Kỹ thuật (BEng) hoặc Khoa học máy tính (BCompSc); xét tự động khi nộp hồ sơ, duy trì toàn thời gian và GPA ≥ 3.30.",
          "url": "https://www.concordia.ca/ginacody/students/future-students/entrance-awards.html",
          "deadline": "Xét tự động khi nộp hồ sơ tuyển sinh",
          "auto": true,
          "amount": {
            "min": 5000,
            "max": 5000,
            "currency": "CAD",
            "per": "year"
          },
          "coverage": "partial"
        }
      ],
      "sources": [
        "https://www.concordia.ca/students/financial/tuition-fees/rates/undergrad.html",
        "https://www.concordia.ca/admissions/undergraduate/requirements/english-language-proficiency.html",
        "https://www.concordia.ca/ginacody/students/future-students/entrance-awards.html",
        "https://www.concordia.ca/academics/undergraduate/supply-chain-operations-management.html",
        "https://www.cicnews.com/2025/06/these-are-the-top-universities-in-canada-according-to-the-2026-qs-world-university-rankings-0656783.html",
        "https://www.mtlblog.com/mcgill-university-canada-ranking-qs-2027",
        "https://www.concordia.ca/students/international/immigration/required-documents/estimating-your-costs.html"
      ],
      "verified": true,
      "majorNotes": {
        "finance": "Không có cử nhân Tài chính riêng; là major Finance trong BComm (John Molson).",
        "accounting": "Không có cử nhân Kế toán riêng; là major Accountancy trong BComm (John Molson).",
        "marketing": "Không có cử nhân Marketing riêng; là major Marketing trong BComm (John Molson).",
        "intl-business": "Không có cử nhân riêng; là major International Business trong BComm (John Molson).",
        "hr": "Không có cử nhân riêng; là major Human Resource Management trong BComm (John Molson).",
        "logistics": "Không có cử nhân riêng; là major Supply Chain Operations Management trong BComm (John Molson)."
      }
    },
    {
      "id": "imperial",
      "name": "Imperial College London",
      "countryId": "anh",
      "city": "London",
      "website": "https://www.imperial.ac.uk",
      "qsRank": 2,
      "qsEdition": "QS 2027",
      "theRank": "8",
      "theRankOrder": 80,
      "theUrl": "https://www.timeshighereducation.com/world-university-rankings/imperial-college-london",
      "type": "Công lập",
      "tuition": {
        "min": 44800,
        "max": 47800,
        "currency": "GBP",
        "note": "Học phí quốc tế (Overseas) kỳ nhập học 2027 theo trang từng ngành: Economics, Finance and Data Science 44.800; Mathematics and Computer Science for AI, Toán 44.850; Computing BEng 47.800 GBP/năm (khóa 2026 là 45.500). Y khoa cao hơn nhiều. Học phí các năm sau có thể tăng.",
        "year": "2027",
        "verified": true
      },
      "ieltsMin": 6.5,
      "ieltsNote": "Mức 'Standard': 6.5 tổng, mỗi kỹ năng 6.0; mức 'Higher' (ví dụ Business School, BSc Economics, Finance and Data Science): 7.0 tổng, mỗi kỹ năng 6.5. Phải đạt trong một lần thi, điểm có hiệu lực 2 năm.",
      "ieltsVerified": true,
      "intakes": [
        "Tháng 10"
      ],
      "applyVia": "UCAS",
      "highlights": [
        "Đồng hạng 2 thế giới QS 2027 – cao nhất nước Anh; chuyên sâu Kỹ thuật, Khoa học, Y và Kinh doanh.",
        "Có chương trình Computing chuyên ngành Trí tuệ nhân tạo – Học máy và An ninh – Độ tin cậy (MEng 4 năm).",
        "Học bổng Imperial Inspires tối thiểu 15.000 GBP/năm cho sinh viên quốc tế nhập học 2027."
      ],
      "majorIds": [
        "cs",
        "data",
        "ai",
        "cybersecurity",
        "finance",
        "economics",
        "engineering",
        "electrical"
      ],
      "scholarships": [
        {
          "name": "Imperial Inspires Scholarships (Undergraduate)",
          "value": "15.000 GBP/năm trong suốt khóa học; 150 suất",
          "note": "Cho sinh viên đóng học phí Overseas, nhập học 2027/28 các khoa Kỹ thuật, Khoa học tự nhiên, Y, Business School; chỉ cho tân sinh viên. Nộp UCAS trước (13/1/2027; MBBS 15/10/2026), đủ điều kiện sẽ được mời nộp đơn học bổng (có thư động lực 250 từ, không bắt buộc).",
          "url": "https://www.imperial.ac.uk/study/fees-and-funding/scholarships-search/imperial-inspires-scholarships-undergraduate-20272028.php",
          "deadline": "5/2/2027 (23:59 giờ Anh) | Cần nộp đơn riêng sau khi được mời",
          "auto": false,
          "amount": {
            "min": 15000,
            "max": 15000,
            "currency": "GBP",
            "per": "year"
          },
          "coverage": "partial"
        }
      ],
      "sources": [
        "https://www.imperial.ac.uk/study/courses/undergraduate/computing-beng/",
        "https://www.imperial.ac.uk/study/courses/undergraduate/economics-finance-data-science/",
        "https://www.imperial.ac.uk/study/apply/english-language/",
        "https://www.imperial.ac.uk/study/fees-and-funding/imperial-inspires-scholarships/",
        "https://www.imperial.ac.uk/study/courses/undergraduate/computing-security-reliability-meng/",
        "https://www.uk-education-centre.com/news/17-uk-universities-ranked-in-the-worlds-top-100-qs-world-university-rankings-2026/",
        "https://www.uk-education-centre.com/news/qs-world-university-rankings-2027-officially-released-uk-universities-continue-to-shine-on-the-global-stage/",
        "https://www.imperial.ac.uk/business-school/undergraduate/economics-finance-data-science/funding-scholarships/",
        "https://www.imperial.ac.uk/study/courses/undergraduate/mathematics-computer-science-ai-beng/",
        "https://www.imperial.ac.uk/study/fees-and-funding/scholarships-search/imperial-inspires-scholarships-undergraduate-20272028.php"
      ],
      "verified": true,
      "qsRankText": "=2",
      "majorNotes": {
        "data": "Không có cử nhân Khoa học dữ liệu riêng; chỉ có BSc Economics, Finance and Data Science.",
        "finance": "Không có cử nhân Tài chính riêng; học trong BSc Economics, Finance and Data Science.",
        "economics": "Không có cử nhân Kinh tế thuần; chỉ có BSc Economics, Finance and Data Science.",
        "ai": "Không có cử nhân AI thuần; có BEng Mathematics and Computer Science for AI và hướng AI & Machine Learning trong MEng Computing.",
        "cybersecurity": "Không có cử nhân An ninh mạng riêng; chỉ là hướng chuyên sâu (Security and Reliability) trong MEng Computing."
      }
    },
    {
      "id": "kcl",
      "name": "King's College London",
      "countryId": "anh",
      "city": "London",
      "website": "https://www.kcl.ac.uk",
      "qsRank": 37,
      "qsEdition": "QS 2027",
      "theRank": "40",
      "theRankOrder": 400,
      "theUrl": "https://www.timeshighereducation.com/world-university-rankings/kings-college-london",
      "type": "Công lập",
      "tuition": {
        "min": 30750,
        "max": 42900,
        "currency": "GBP",
        "note": "Mức cũ theo trang từng ngành kỳ 9/2027: Văn học Anh, Lịch sử 30.750; Luật, Điều dưỡng 35.900; Toán 38.100; Business Management, Kinh tế, Kế toán – Tài chính, Kỹ thuật điện tử 40.600; Khoa học máy tính, Trí tuệ nhân tạo 42.900 GBP/năm. Lần kiểm tra này không đọc được bảng phí (trang tải bằng JavaScript) nên chưa xác nhận lại. Y khoa, Nha khoa cao hơn.",
        "year": "2027",
        "verified": false
      },
      "ieltsMin": 6.5,
      "ieltsNote": "Band D: 6.5 tổng, mỗi kỹ năng 6.0; Band B: 7.0 tổng, mỗi kỹ năng 6.5 (ví dụ các ngành Văn học Anh, Ngôn ngữ học); Band A: 7.5 tổng, mỗi kỹ năng 7.0. Band của từng ngành ghi trên trang ngành; điểm phải từ một lần thi.",
      "ieltsVerified": true,
      "intakes": [
        "Tháng 9"
      ],
      "applyVia": "UCAS",
      "highlights": [
        "Hạng 37 thế giới QS 2027, nhiều cơ sở ngay trung tâm London.",
        "Khoa Điều dưỡng xếp hạng 1 Anh, hạng 2 thế giới (QS theo ngành 2026).",
        "Có cử nhân Trí tuệ nhân tạo riêng và International Management tại King's Business School."
      ],
      "majorIds": [
        "cs",
        "ai",
        "business",
        "finance",
        "accounting",
        "engineering",
        "electrical",
        "nursing",
        "economics",
        "intl-business"
      ],
      "scholarships": [],
      "scholarshipNote": "Không tìm thấy học bổng cử nhân cố định dành riêng cho sinh viên quốc tế trên trang chính thức của King's (các học bổng nổi bật chủ yếu cho bậc sau đại học); kiểm tra trang Funding opportunities theo từng năm.",
      "sources": [
        "https://www.kcl.ac.uk/study/undergraduate/courses/computer-science-bsc/fees",
        "https://www.kcl.ac.uk/study/undergraduate/courses/business-management-bsc/fees",
        "https://www.kcl.ac.uk/study/undergraduate/courses/english-ba/fees",
        "https://www.kcl.ac.uk/study/undergraduate/courses/nursing-with-registration-as-an-adult-nurse-bsc",
        "https://www.kcl.ac.uk/study/undergraduate/how-to-apply/english-language-requirements",
        "https://www.kcl.ac.uk/international-foundation/fees-funding",
        "https://www.uk-education-centre.com/news/17-uk-universities-ranked-in-the-worlds-top-100-qs-world-university-rankings-2026/",
        "https://roarnews.co.uk/2026/kings-ranks-sixth-in-uk-in-2027-qs-world-university-rankings/",
        "https://thetab.com/2026/06/18/kings-college-london-places-top-10-in-qs-world-university-rankings-2027",
        "https://www.kcl.ac.uk/study/undergraduate/fees-and-funding/tuition-fees"
      ],
      "verified": false,
      "qsRankText": "37"
    },
    {
      "id": "nottingham",
      "name": "University of Nottingham",
      "countryId": "anh",
      "city": "Nottingham",
      "website": "https://www.nottingham.ac.uk",
      "qsRank": 97,
      "qsEdition": "QS 2027",
      "theRank": "=157",
      "theRankOrder": 1600,
      "theUrl": "https://www.timeshighereducation.com/world-university-rankings/university-nottingham",
      "type": "Công lập",
      "tuition": {
        "min": 26200,
        "max": 34800,
        "currency": "GBP",
        "note": "Học phí quốc tế năm 2027/28 (bảng phí chính thức): Business and Management, Finance Accounting and Management, Industrial Economics, đa số ngành Nhân văn 26.200; Kinh tế, Kế toán (Accountancy), Luật 27.600; Địa lý 30.800; Khoa học máy tính, Kỹ thuật (gồm Điện – Điện tử), Kiến trúc, Điều dưỡng 33.500; Vật lý trị liệu 34.800 GBP/năm. Thú y 43.100, Y 48.900.",
        "year": "2027",
        "verified": true
      },
      "ieltsMin": 6.5,
      "ieltsNote": "Đa số ngành 6.5 tổng, không kỹ năng nào dưới 6.0; Y, Điều dưỡng – Hộ sinh, Vật lý trị liệu, Thú y 7.5 (không kỹ năng dưới 7.0); khóa dự bị tích hợp 6.0 (không dưới 5.5).",
      "ieltsVerified": true,
      "intakes": [
        "Tháng 9"
      ],
      "applyVia": "UCAS",
      "highlights": [
        "Top 100 thế giới (hạng 97 QS 2027) với học phí ngành Kinh doanh chỉ khoảng 26.200 GBP/năm – mềm so với nhóm Russell Group.",
        "Có cơ sở tại Malaysia và Trung Quốc; thương hiệu quen thuộc với sinh viên Việt Nam.",
        "Đào tạo Kiến trúc (BArch), Khoa học máy tính với Trí tuệ nhân tạo, Kỹ thuật điện – điện tử, Điều dưỡng."
      ],
      "majorIds": [
        "cs",
        "ai",
        "business",
        "finance",
        "accounting",
        "engineering",
        "electrical",
        "architecture",
        "nursing",
        "economics",
        "media",
        "design"
      ],
      "scholarships": [
        {
          "name": "International Undergraduate Excellence Scholarship",
          "value": "5.000 GBP trừ vào học phí năm nhất",
          "note": "Tự động cho sinh viên quốc tế tự túc nhập học năm nhất cử nhân toàn thời gian đạt AAA (hoặc tương đương) khi được nhận; không áp dụng Y, Thú y, Dược, năm dự bị, sinh viên Kaplan và người đã có học bổng/tài trợ khác.",
          "url": "https://www.nottingham.ac.uk/studywithus/international-applicants/scholarships-funding-finance/international-undergraduate-excellence-scholarship.aspx",
          "deadline": "Xét tự động khi được nhận (không cần nộp đơn)",
          "auto": true,
          "amount": {
            "min": 5000,
            "max": 5000,
            "currency": "GBP",
            "per": "once"
          },
          "coverage": "partial"
        }
      ],
      "sources": [
        "https://www.nottingham.ac.uk/fees/tuitionfees/202728/undergraduate.aspx",
        "https://www.nottingham.ac.uk/studywithus/ugstudy/courses/UG/Computer-Science-BSc-Hons.html",
        "https://www.nottingham.ac.uk/studywithus/ugstudy/courses/UG/Nursing-Adult-BSc-Hons.html",
        "https://www.nottingham.ac.uk/studywithus/international-applicants/scholarships-funding-finance/international-undergraduate-excellence-scholarship.aspx",
        "https://www.uk-education-centre.com/news/17-uk-universities-ranked-in-the-worlds-top-100-qs-world-university-rankings-2026/",
        "https://www.nottingham.ac.uk/news/university-of-nottingham-proud-to-be-ranked-as-a-world-top-100-university",
        "https://www.nottingham.ac.uk/qualitymanual/admissions/pol-min-english-entry-requirements.aspx"
      ],
      "verified": true,
      "qsRankText": "97",
      "majorNotes": {
        "finance": "Không có cử nhân Tài chính riêng; học qua Finance, Accounting and Management BSc.",
        "ai": "Không có cử nhân AI riêng; có Computer Science with Artificial Intelligence BSc.",
        "design": "Không có cử nhân Thiết kế mỹ thuật/đồ họa; gần nhất là Product Design and Manufacture (BEng) hoặc Kiến trúc."
      }
    },
    {
      "id": "sheffield",
      "name": "The University of Sheffield",
      "countryId": "anh",
      "city": "Sheffield",
      "website": "https://www.sheffield.ac.uk",
      "qsRank": 82,
      "qsEdition": "QS 2027",
      "theRank": "=104",
      "theRankOrder": 1050,
      "theUrl": "https://www.timeshighereducation.com/world-university-rankings/university-sheffield",
      "type": "Công lập",
      "tuition": {
        "min": 27650,
        "max": 34670,
        "currency": "GBP",
        "note": "Học phí cử nhân quốc tế toàn thời gian năm 2027/28 dao động 27.650–34.670 GBP/năm (không gồm Y, Nha khoa; 2026/27 là 25.000–32.100). Học phí giữ nguyên các năm sau nếu học cùng chương trình; năm thực tập trả 20%.",
        "year": "2027",
        "verified": true
      },
      "ieltsMin": 6.5,
      "ieltsNote": "Trang dành cho sinh viên quốc tế: 6.5 tổng, mỗi kỹ năng 6.0 (một số khoa cao hơn, ví dụ English Language and Literature 7.0/6.5, Báo chí 7.5/7.0). Một số trang chung của trường ghi mức thấp hơn 6.0 (mỗi kỹ năng 5.5) – kiểm tra theo trang ngành.",
      "ieltsVerified": true,
      "intakes": [
        "Tháng 9"
      ],
      "applyVia": "UCAS",
      "highlights": [
        "Top 100 thế giới (hạng 82 QS 2027), thành phố sinh viên có chi phí sống thấp hơn London nhiều.",
        "Học bổng 2.500 GBP/năm tự động cho sinh viên quốc tế khi chọn Sheffield là lựa chọn firm/insurance.",
        "Có Khoa học dữ liệu, Khoa học máy tính với Trí tuệ nhân tạo, Kiến trúc, Kỹ thuật điện – điện tử, Báo chí."
      ],
      "majorIds": [
        "cs",
        "data",
        "ai",
        "business",
        "finance",
        "accounting",
        "engineering",
        "electrical",
        "architecture",
        "nursing",
        "economics",
        "media"
      ],
      "scholarships": [
        {
          "name": "International Undergraduate Scholarship 2027",
          "value": "2.500 GBP/năm (tối đa 10.000 GBP cho chương trình 4 năm), trừ vào học phí",
          "note": "Tự động cho sinh viên quốc tế tự túc, toàn thời gian, nhập học 9/2027 nếu chọn Sheffield là firm hoặc insurance; các năm sau cần điểm trung bình ≥ 60% và ≥ 120 tín chỉ. Không áp dụng Y, Nha khoa, sinh viên có tài trợ; không hoãn được.",
          "url": "https://sheffield.ac.uk/international/fees-and-funding/scholarships/undergraduate/international-undergraduate-scholarship-2027",
          "deadline": "Chọn Sheffield là firm/insurance trước 16h (giờ Anh) ngày 2/6/2027 | Xét tự động, không cần nộp đơn",
          "auto": true,
          "amount": {
            "min": 2500,
            "max": 2500,
            "currency": "GBP",
            "per": "year"
          },
          "coverage": "partial"
        }
      ],
      "sources": [
        "https://sheffield.ac.uk/new-students/tuition-fees/undergraduate-overseas",
        "https://sheffield.ac.uk/undergraduate/courses/2027/computer-science-bsc",
        "https://sheffield.ac.uk/undergraduate/courses/2027",
        "https://sheffield.ac.uk/international/fees-and-funding/scholarships/undergraduate/international-undergraduate-scholarship-2027",
        "https://www.uk-education-centre.com/news/17-uk-universities-ranked-in-the-worlds-top-100-qs-world-university-rankings-2026/",
        "https://www.uk-education-centre.com/news/qs-world-university-rankings-2027-officially-released-uk-universities-continue-to-shine-on-the-global-stage/",
        "https://sheffield.ac.uk/undergraduate/tuition-fees-2027",
        "https://sheffield.ac.uk/international/entry-requirements/english-language-requirements"
      ],
      "verified": true,
      "qsRankText": "82"
    },
    {
      "id": "greenwich",
      "name": "University of Greenwich",
      "countryId": "anh",
      "city": "London",
      "website": "https://www.gre.ac.uk",
      "qsRank": 791,
      "qsRankText": "791-800",
      "qsEdition": "QS 2027",
      "theRank": "601–650",
      "theRankOrder": 6380,
      "theUrl": "https://www.timeshighereducation.com/world-university-rankings/university-greenwich",
      "type": "Công lập",
      "tuition": {
        "min": 17975,
        "max": 19400,
        "currency": "GBP",
        "note": "Học phí quốc tế chính thức năm 2026/27: đa số ngành 17.975 GBP/năm; Điều dưỡng (ví dụ Adult Nursing) 19.400 GBP/năm. Mức 2027/28 chưa công bố; trường cho biết học phí tăng hằng năm không quá RPI + 3%. Cần đặt cọc 3.000 GBP.",
        "year": "2026-27",
        "verified": false
      },
      "ieltsMin": 6,
      "ieltsNote": "Thường 6.0 tổng, mỗi kỹ năng 5.5; một số ngành (ví dụ Điều dưỡng) cao hơn – lần kiểm tra này chưa mở được trang yêu cầu tiếng Anh của trường.",
      "ieltsVerified": false,
      "intakes": [
        "Tháng 9",
        "Tháng 1 (một số ngành)"
      ],
      "applyVia": "UCAS hoặc nộp trực tiếp (sinh viên quốc tế)",
      "highlights": [
        "Học ở London với học phí chỉ khoảng 18.000 GBP/năm – thuộc nhóm thấp nhất thủ đô; khuôn viên di sản UNESCO tại Greenwich.",
        "Rất nhiều ngành ứng dụng: Logistics – chuỗi cung ứng, Quản trị khách sạn – du lịch quốc tế, Kinh doanh quốc tế, Quản trị nhân sự, An ninh mạng.",
        "Có liên kết đào tạo tại Việt Nam (Greenwich Việt Nam), quen thuộc với phụ huynh, học sinh Việt."
      ],
      "majorIds": [
        "cs",
        "data",
        "cybersecurity",
        "business",
        "finance",
        "accounting",
        "marketing",
        "engineering",
        "electrical",
        "nursing",
        "economics",
        "media",
        "design",
        "hospitality",
        "architecture",
        "logistics",
        "intl-business",
        "hr"
      ],
      "scholarships": [
        {
          "name": "Early Applicant Undergraduate Scholarship",
          "value": "7.000 GBP tổng: 3.500 năm 1, 2.000 năm 2, 1.500 năm 3",
          "note": "Theo trang của trường: tự động cho sinh viên quốc tế cử nhân mới; không áp dụng khóa liên kết (kể cả UGIC). Điều kiện 'nộp sớm' và áp dụng cho kỳ 2027 chưa xác nhận (trang trường không truy cập được lúc kiểm tra).",
          "url": "https://www.gre.ac.uk/bursaries/early-applicant-undergraduate-scholarship",
          "deadline": "Xét tự động khi nộp hồ sơ sớm – mốc thời gian kỳ 2027 chưa công bố",
          "auto": true,
          "amount": {
            "min": 7000,
            "max": 7000,
            "currency": "GBP",
            "per": "total"
          },
          "coverage": "partial"
        }
      ],
      "sources": [
        "https://www.gre.ac.uk/finance/fees/course-fees",
        "https://www.gre.ac.uk/bursaries/early-applicant-undergraduate-scholarship",
        "https://www.gre.ac.uk/undergraduate-courses/business-school/international-tourism-and-hospitality-management-ba-hons",
        "https://yocket.com/universities/university-of-greenwich-3779/rankings",
        "https://leapscholar.com/blog/?p=80258",
        "https://www.gre.ac.uk/finance/fees"
      ],
      "verified": false
    }
  ],
  "majors": [
    {
      "id": "cs",
      "name": "Khoa học máy tính",
      "nameEn": "Computer Science",
      "group": "STEM",
      "icon": "💻",
      "description": "Nghiên cứu thuật toán, lập trình, hệ thống máy tính và trí tuệ nhân tạo. Đây là ngành có nhu cầu tuyển dụng toàn cầu cao, mức lương khởi điểm tốt và được hưởng STEM OPT tại Mỹ.",
      "suitableFor": [
        "Thích toán, tư duy logic",
        "Kiên nhẫn giải quyết vấn đề",
        "Tò mò về công nghệ, thích tự học"
      ],
      "keySubjects": [
        "Toán",
        "Tin học",
        "Vật lý"
      ],
      "skills": [
        "Lập trình (Python, Java, C++)",
        "Cấu trúc dữ liệu & giải thuật",
        "Tư duy hệ thống",
        "Làm việc nhóm theo Agile"
      ],
      "careerIds": [
        "software-dev",
        "cyber-security",
        "data-scientist",
        "web-designer",
        "ai-engineer",
        "network-admin"
      ],
      "stemOPT": true
    },
    {
      "id": "data",
      "name": "Khoa học dữ liệu",
      "nameEn": "Data Science",
      "group": "STEM",
      "icon": "📊",
      "description": "Kết hợp thống kê, lập trình và kiến thức chuyên ngành để khai thác dữ liệu, xây dựng mô hình dự báo và học máy. Ngành mới nhưng tăng trưởng rất nhanh (BLS dự báo +35% giai đoạn 2025–2035).",
      "suitableFor": [
        "Giỏi toán, thống kê",
        "Thích tìm quy luật trong số liệu",
        "Muốn làm việc ở nhiều lĩnh vực (tài chính, y tế, thương mại)"
      ],
      "keySubjects": [
        "Toán",
        "Tin học",
        "Tiếng Anh"
      ],
      "skills": [
        "Python/R, SQL",
        "Thống kê & xác suất",
        "Học máy",
        "Trực quan hóa dữ liệu",
        "Kể chuyện bằng dữ liệu"
      ],
      "careerIds": [
        "data-scientist",
        "software-dev",
        "market-research-analyst",
        "ai-engineer"
      ],
      "stemOPT": true
    },
    {
      "id": "business",
      "name": "Quản trị kinh doanh",
      "nameEn": "Business Administration / Management",
      "group": "Kinh doanh",
      "icon": "💼",
      "description": "Trang bị kiến thức nền tảng về quản trị, chiến lược, nhân sự, vận hành và khởi nghiệp. Ngành linh hoạt, dễ chuyển hướng sang nhiều vị trí trong doanh nghiệp.",
      "suitableFor": [
        "Năng động, thích giao tiếp",
        "Có tố chất lãnh đạo, tổ chức",
        "Quan tâm đến kinh doanh, khởi nghiệp"
      ],
      "keySubjects": [
        "Toán",
        "Tiếng Anh",
        "Ngữ văn"
      ],
      "skills": [
        "Lãnh đạo & làm việc nhóm",
        "Phân tích kinh doanh",
        "Thuyết trình, đàm phán",
        "Quản lý dự án"
      ],
      "careerIds": [
        "management-analyst",
        "marketing-manager",
        "hr-specialist",
        "logistician",
        "lodging-manager",
        "hr-manager",
        "purchasing-agent",
        "sales-manager"
      ],
      "stemOPT": false
    },
    {
      "id": "finance",
      "name": "Tài chính",
      "nameEn": "Finance",
      "group": "Kinh doanh",
      "icon": "📈",
      "description": "Học về đầu tư, thị trường vốn, tài chính doanh nghiệp và quản trị rủi ro. Phù hợp với người muốn làm ngân hàng, quỹ đầu tư, tư vấn tài chính.",
      "suitableFor": [
        "Nhạy bén với con số",
        "Quan tâm thị trường chứng khoán, kinh tế",
        "Chịu được áp lực cao"
      ],
      "keySubjects": [
        "Toán",
        "Tiếng Anh",
        "Kinh tế (nếu có)"
      ],
      "skills": [
        "Mô hình tài chính (Excel)",
        "Phân tích báo cáo tài chính",
        "Định giá doanh nghiệp",
        "Quản trị rủi ro"
      ],
      "careerIds": [
        "financial-analyst",
        "accountant",
        "economist"
      ],
      "stemOPT": false,
      "stemOPTNote": "Một số chương trình Tài chính định lượng/Business Analytics được xếp mã STEM – kiểm tra mã CIP trên I-20."
    },
    {
      "id": "accounting",
      "name": "Kế toán",
      "nameEn": "Accounting",
      "group": "Kinh doanh",
      "icon": "🧾",
      "description": "Ghi chép, phân tích và kiểm tra thông tin tài chính của doanh nghiệp; là nền tảng để thi các chứng chỉ nghề nghiệp như CPA, ACCA, CA. Nhu cầu ổn định ở mọi quốc gia.",
      "suitableFor": [
        "Cẩn thận, tỉ mỉ",
        "Thích công việc có quy trình rõ ràng",
        "Muốn nghề ổn định, dễ xin việc"
      ],
      "keySubjects": [
        "Toán",
        "Tiếng Anh"
      ],
      "skills": [
        "Lập báo cáo tài chính",
        "Thuế & kiểm toán",
        "Phần mềm kế toán, Excel",
        "Tuân thủ chuẩn mực (IFRS/GAAP)"
      ],
      "careerIds": [
        "accountant",
        "financial-analyst"
      ],
      "stemOPT": false
    },
    {
      "id": "marketing",
      "name": "Marketing",
      "nameEn": "Marketing",
      "group": "Kinh doanh",
      "icon": "📣",
      "description": "Nghiên cứu khách hàng, xây dựng thương hiệu, truyền thông và bán hàng trên nền tảng số. Ngành sáng tạo nhưng ngày càng dựa nhiều vào dữ liệu.",
      "suitableFor": [
        "Sáng tạo, thích ý tưởng mới",
        "Hiểu tâm lý người tiêu dùng",
        "Thích mạng xã hội, nội dung số"
      ],
      "keySubjects": [
        "Ngữ văn",
        "Tiếng Anh",
        "Toán"
      ],
      "skills": [
        "Nghiên cứu thị trường",
        "Digital marketing (SEO, quảng cáo)",
        "Xây dựng thương hiệu",
        "Phân tích số liệu chiến dịch"
      ],
      "careerIds": [
        "marketing-manager",
        "market-research-analyst",
        "pr-specialist",
        "event-planner",
        "sales-manager"
      ],
      "stemOPT": false,
      "stemOPTNote": "Một số chương trình Marketing Analytics được xếp mã STEM tại Mỹ."
    },
    {
      "id": "engineering",
      "name": "Kỹ thuật (Cơ khí / Điện / Xây dựng)",
      "nameEn": "Engineering (Mechanical / Electrical / Civil)",
      "group": "STEM",
      "icon": "⚙️",
      "description": "Thiết kế, chế tạo và vận hành máy móc, hệ thống điện – điện tử, công trình hạ tầng. Bằng kỹ sư được công nhận quốc tế (ABET, Engineers Australia, Engineers Canada, Engineering Council).",
      "suitableFor": [
        "Giỏi Toán, Vật lý",
        "Thích chế tạo, sửa chữa, tìm hiểu cách máy móc hoạt động",
        "Chịu khó, kỷ luật"
      ],
      "keySubjects": [
        "Toán",
        "Vật lý",
        "Hóa học"
      ],
      "skills": [
        "Thiết kế CAD",
        "Tính toán kỹ thuật",
        "Quản lý dự án",
        "An toàn & tiêu chuẩn kỹ thuật"
      ],
      "careerIds": [
        "mechanical-engineer",
        "electrical-engineer",
        "civil-engineer",
        "logistician"
      ],
      "stemOPT": true
    },
    {
      "id": "nursing",
      "name": "Điều dưỡng",
      "nameEn": "Nursing",
      "group": "Sức khỏe",
      "icon": "🩺",
      "description": "Chăm sóc, theo dõi và hỗ trợ điều trị người bệnh. Thiếu hụt nhân lực ở Úc, Canada, Anh, Mỹ nên cơ hội việc làm và định cư tốt, nhưng yêu cầu tiếng Anh và đăng ký hành nghề rất chặt.",
      "suitableFor": [
        "Kiên nhẫn, giàu lòng trắc ẩn",
        "Sức khỏe tốt, chịu được ca trực",
        "Thích Sinh học, muốn làm trong ngành y"
      ],
      "keySubjects": [
        "Sinh học",
        "Hóa học",
        "Tiếng Anh"
      ],
      "skills": [
        "Chăm sóc lâm sàng",
        "Giao tiếp với bệnh nhân",
        "Xử lý tình huống khẩn cấp",
        "Làm việc theo ca, theo nhóm"
      ],
      "careerIds": [
        "registered-nurse"
      ],
      "stemOPT": false
    },
    {
      "id": "economics",
      "name": "Kinh tế",
      "nameEn": "Economics",
      "group": "Khoa học xã hội",
      "icon": "🌐",
      "description": "Phân tích cách cá nhân, doanh nghiệp và chính phủ ra quyết định, từ vi mô đến vĩ mô. Nền tảng tốt cho tài chính, chính sách công, tư vấn và phân tích dữ liệu.",
      "suitableFor": [
        "Giỏi Toán, thích phân tích",
        "Quan tâm thời sự, chính sách",
        "Muốn mở rộng lựa chọn nghề nghiệp"
      ],
      "keySubjects": [
        "Toán",
        "Tiếng Anh",
        "Lịch sử/Địa lý"
      ],
      "skills": [
        "Kinh tế lượng",
        "Phân tích dữ liệu (Stata/R/Python)",
        "Viết báo cáo nghiên cứu",
        "Tư duy phản biện"
      ],
      "careerIds": [
        "economist",
        "financial-analyst",
        "market-research-analyst",
        "management-analyst",
        "data-scientist"
      ],
      "stemOPT": false,
      "stemOPTNote": "Chương trình Kinh tế lượng/Kinh tế định lượng (CIP 45.0603) được hưởng STEM OPT; ngành Kinh tế thông thường thì không."
    },
    {
      "id": "media",
      "name": "Truyền thông",
      "nameEn": "Media & Communication",
      "group": "Khoa học xã hội",
      "icon": "🎙️",
      "description": "Báo chí, quan hệ công chúng (PR), sản xuất nội dung đa phương tiện và truyền thông số. Phù hợp người thích viết, nói và kể chuyện.",
      "suitableFor": [
        "Giao tiếp tốt, tự tin",
        "Thích viết, quay dựng, mạng xã hội",
        "Theo dõi xu hướng xã hội"
      ],
      "keySubjects": [
        "Ngữ văn",
        "Tiếng Anh",
        "Lịch sử"
      ],
      "skills": [
        "Viết & biên tập",
        "Sản xuất nội dung số",
        "Quan hệ công chúng",
        "Quản lý khủng hoảng truyền thông"
      ],
      "careerIds": [
        "pr-specialist",
        "marketing-manager",
        "graphic-designer",
        "event-planner"
      ],
      "stemOPT": false
    },
    {
      "id": "design",
      "name": "Thiết kế",
      "nameEn": "Design (Graphic / UX / Digital)",
      "group": "Nghệ thuật & Thiết kế",
      "icon": "🎨",
      "description": "Thiết kế đồ họa, giao diện – trải nghiệm người dùng (UX/UI), sản phẩm số và truyền thông thị giác. Thường cần portfolio khi nộp hồ sơ.",
      "suitableFor": [
        "Có năng khiếu thẩm mỹ, thích vẽ",
        "Sáng tạo, quan sát tốt",
        "Thích công nghệ và hành vi người dùng"
      ],
      "keySubjects": [
        "Mỹ thuật",
        "Tin học",
        "Ngữ văn"
      ],
      "skills": [
        "Adobe Creative Suite, Figma",
        "Tư duy thiết kế (Design Thinking)",
        "Nghiên cứu người dùng",
        "Xây dựng portfolio"
      ],
      "careerIds": [
        "graphic-designer",
        "web-designer"
      ],
      "stemOPT": false
    },
    {
      "id": "hospitality",
      "name": "Quản trị khách sạn – du lịch",
      "nameEn": "Hospitality & Tourism Management",
      "group": "Kinh doanh",
      "icon": "🏨",
      "description": "Quản lý khách sạn, nhà hàng, du lịch và sự kiện; thường có kỳ thực tập bắt buộc tại doanh nghiệp. Phù hợp với ngành du lịch đang phục hồi mạnh tại Việt Nam.",
      "suitableFor": [
        "Hướng ngoại, thích phục vụ",
        "Thích đi lại, trải nghiệm văn hóa",
        "Chịu được lịch làm việc linh hoạt"
      ],
      "keySubjects": [
        "Tiếng Anh",
        "Ngữ văn",
        "Địa lý"
      ],
      "skills": [
        "Dịch vụ khách hàng",
        "Quản lý vận hành",
        "Tổ chức sự kiện",
        "Ngoại ngữ"
      ],
      "careerIds": [
        "lodging-manager",
        "event-planner"
      ],
      "stemOPT": false
    },
    {
      "id": "ai",
      "name": "Trí tuệ nhân tạo",
      "nameEn": "Artificial Intelligence",
      "group": "STEM",
      "icon": "🤖",
      "description": "Nghiên cứu và xây dựng hệ thống máy có khả năng học, suy luận, nhận diện hình ảnh, xử lý ngôn ngữ và ra quyết định. Ngành mới tách ra từ Khoa học máy tính, nhu cầu tăng mạnh; tại Mỹ mã CIP 11.0102 (Artificial Intelligence) nằm trong danh sách STEM nên được hưởng STEM OPT.",
      "suitableFor": [
        "Rất giỏi Toán (đại số tuyến tính, xác suất)",
        "Thích lập trình và thử nghiệm mô hình",
        "Tò mò về cách máy 'học' và các vấn đề đạo đức công nghệ"
      ],
      "keySubjects": [
        "Toán",
        "Tin học",
        "Vật lý"
      ],
      "skills": [
        "Python, PyTorch/TensorFlow",
        "Học máy & học sâu",
        "Xác suất – thống kê, đại số tuyến tính",
        "Xử lý dữ liệu lớn",
        "Đạo đức và an toàn AI"
      ],
      "careerIds": [
        "ai-engineer",
        "data-scientist",
        "software-dev"
      ],
      "stemOPT": true
    },
    {
      "id": "cybersecurity",
      "name": "An ninh mạng",
      "nameEn": "Cybersecurity",
      "group": "STEM",
      "icon": "🛡️",
      "description": "Bảo vệ hệ thống máy tính, mạng và dữ liệu khỏi tấn công: kiểm thử xâm nhập, mật mã, điều tra số, quản trị rủi ro. Nhu cầu nhân lực cao ở mọi quốc gia; tại Mỹ mã CIP 11.1003 nằm trong danh sách STEM.",
      "suitableFor": [
        "Thích máy tính, mạng, tìm lỗ hổng",
        "Cẩn thận, tư duy như 'hacker mũ trắng'",
        "Chịu được áp lực xử lý sự cố"
      ],
      "keySubjects": [
        "Toán",
        "Tin học",
        "Tiếng Anh"
      ],
      "skills": [
        "Mạng máy tính & hệ điều hành (Linux)",
        "Kiểm thử xâm nhập, phân tích mã độc",
        "Mật mã học",
        "Giám sát an ninh (SIEM), ứng phó sự cố",
        "Chứng chỉ Security+/CEH/CISSP"
      ],
      "careerIds": [
        "cyber-security",
        "network-admin",
        "software-dev"
      ],
      "stemOPT": true
    },
    {
      "id": "electrical",
      "name": "Kỹ thuật điện – điện tử",
      "nameEn": "Electrical & Electronic Engineering",
      "group": "STEM",
      "icon": "⚡",
      "description": "Thiết kế hệ thống điện, mạch điện tử, vi mạch – bán dẫn, viễn thông, tự động hóa và năng lượng tái tạo. Bằng kỹ sư được công nhận quốc tế; tại Mỹ mã CIP 14.1001 nằm trong danh sách STEM.",
      "suitableFor": [
        "Giỏi Toán và Vật lý (điện học)",
        "Thích lắp ráp mạch, robot, thiết bị",
        "Quan tâm năng lượng sạch, chip bán dẫn"
      ],
      "keySubjects": [
        "Toán",
        "Vật lý",
        "Tin học"
      ],
      "skills": [
        "Phân tích & thiết kế mạch",
        "Lập trình nhúng (C, vi điều khiển)",
        "MATLAB/Simulink",
        "Hệ thống điện & điều khiển",
        "An toàn và tiêu chuẩn kỹ thuật"
      ],
      "careerIds": [
        "electrical-engineer",
        "network-admin"
      ],
      "stemOPT": true
    },
    {
      "id": "architecture",
      "name": "Kiến trúc",
      "nameEn": "Architecture",
      "group": "Nghệ thuật & Thiết kế",
      "icon": "🏛️",
      "description": "Thiết kế công trình và không gian sống, kết hợp nghệ thuật, kỹ thuật xây dựng và quy hoạch. Muốn hành nghề kiến trúc sư thường phải học tiếp thạc sĩ (M.Arch/RIBA Part 2) và đăng ký hành nghề; nên chuẩn bị portfolio khi nộp hồ sơ.",
      "suitableFor": [
        "Có năng khiếu vẽ, cảm nhận không gian",
        "Vừa thích sáng tạo vừa giỏi Toán",
        "Kiên trì với các đồ án dài"
      ],
      "keySubjects": [
        "Toán",
        "Mỹ thuật (vẽ)",
        "Vật lý"
      ],
      "skills": [
        "Vẽ tay & dựng hình (AutoCAD, Revit, Rhino)",
        "Thiết kế bền vững",
        "Kết cấu & vật liệu cơ bản",
        "Thuyết trình đồ án, làm mô hình"
      ],
      "careerIds": [
        "architect"
      ],
      "stemOPT": false,
      "stemOPTNote": "Ngành Kiến trúc thông thường (CIP 04.0201) không thuộc danh sách STEM; chỉ một số chương trình Architectural and Building Sciences/Technology (CIP 04.0902) được hưởng STEM OPT – kiểm tra mã CIP trên I-20."
    },
    {
      "id": "logistics",
      "name": "Logistics & chuỗi cung ứng",
      "nameEn": "Logistics & Supply Chain Management",
      "group": "Kinh doanh",
      "icon": "🚚",
      "description": "Quản lý dòng chảy hàng hóa từ mua nguyên liệu, sản xuất, kho bãi đến vận tải và phân phối. Nhu cầu cao nhờ thương mại điện tử và xuất nhập khẩu; Việt Nam là trung tâm sản xuất nên cơ hội việc làm khi về nước tốt.",
      "suitableFor": [
        "Tư duy tổ chức, thích tối ưu quy trình",
        "Giỏi tính toán, làm việc với số liệu",
        "Quan tâm xuất nhập khẩu, thương mại quốc tế"
      ],
      "keySubjects": [
        "Toán",
        "Tiếng Anh",
        "Địa lý"
      ],
      "skills": [
        "Lập kế hoạch nhu cầu & tồn kho",
        "Mua hàng, đàm phán nhà cung cấp",
        "Vận tải quốc tế, Incoterms, hải quan",
        "ERP/SAP, Excel, phân tích dữ liệu"
      ],
      "careerIds": [
        "logistician",
        "purchasing-agent",
        "management-analyst"
      ],
      "stemOPT": false,
      "stemOPTNote": "Mã CIP Logistics (52.0203) không thuộc danh sách STEM; một số chương trình Supply Chain được trường xếp mã Management Science (52.1301) hoặc 52.1399 nên được STEM OPT – kiểm tra mã CIP trên I-20."
    },
    {
      "id": "intl-business",
      "name": "Kinh doanh quốc tế",
      "nameEn": "International Business",
      "group": "Kinh doanh",
      "icon": "🌏",
      "description": "Quản trị doanh nghiệp hoạt động xuyên biên giới: thương mại quốc tế, đầu tư nước ngoài, marketing toàn cầu, quản lý đa văn hóa. Thường có học kỳ trao đổi hoặc thực tập ở nước ngoài.",
      "suitableFor": [
        "Giỏi ngoại ngữ, thích giao lưu văn hóa",
        "Quan tâm thời sự kinh tế thế giới",
        "Năng động, muốn làm cho công ty đa quốc gia"
      ],
      "keySubjects": [
        "Tiếng Anh",
        "Toán",
        "Địa lý"
      ],
      "skills": [
        "Thương mại & luật kinh doanh quốc tế",
        "Marketing toàn cầu",
        "Đàm phán, giao tiếp liên văn hóa",
        "Phân tích thị trường nước ngoài"
      ],
      "careerIds": [
        "sales-manager",
        "purchasing-agent",
        "logistician",
        "marketing-manager",
        "market-research-analyst",
        "management-analyst"
      ],
      "stemOPT": false
    },
    {
      "id": "hr",
      "name": "Quản trị nhân sự",
      "nameEn": "Human Resource Management",
      "group": "Kinh doanh",
      "icon": "🤝",
      "description": "Tuyển dụng, đào tạo, phát triển, lương thưởng và quan hệ lao động trong tổ chức. Nhiều chương trình được CIPD (Anh), AHRI (Úc) hoặc CPHR (Canada) công nhận.",
      "suitableFor": [
        "Thích làm việc với con người, biết lắng nghe",
        "Khéo léo, giữ bí mật tốt",
        "Quan tâm tâm lý học và văn hóa doanh nghiệp"
      ],
      "keySubjects": [
        "Ngữ văn",
        "Tiếng Anh",
        "Toán"
      ],
      "skills": [
        "Tuyển dụng & phỏng vấn",
        "Luật lao động",
        "Thiết kế lương thưởng, phúc lợi",
        "Đào tạo & phát triển",
        "Phân tích dữ liệu nhân sự (HR analytics)"
      ],
      "careerIds": [
        "hr-specialist",
        "hr-manager",
        "management-analyst"
      ],
      "stemOPT": false
    }
  ],
  "careers": [
    {
      "id": "software-dev",
      "name": "Kỹ sư phần mềm",
      "nameEn": "Software Developer",
      "description": "Thiết kế, viết và bảo trì phần mềm, ứng dụng web/di động và hệ thống.",
      "majorIds": [
        "cs",
        "data",
        "ai",
        "cybersecurity"
      ],
      "salary": {
        "my": {
          "value": 134040,
          "currency": "USD",
          "source": "https://www.bls.gov/ooh/computer-and-information-technology/software-developers.htm",
          "year": 2025
        },
        "uc": {
          "value": 131924,
          "weekly": 2537,
          "currency": "AUD",
          "source": "https://www.jobsandskills.gov.au/data/occupation-and-industry-profiles/occupations-anzsco/2613-software-and-applications-programmers",
          "year": 2025,
          "note": "ANZSCO 2613"
        },
        "canada": {
          "value": 93756,
          "hourly": 48.08,
          "currency": "CAD",
          "source": "https://www.jobbank.gc.ca/marketreport/summary-occupation/22548/ca",
          "year": 2024,
          "note": "NOC 21232"
        },
        "anh": {
          "value": 56914,
          "currency": "GBP",
          "source": "https://payprecision.co.uk/salaries/by-occupation/",
          "year": 2025,
          "note": "ONS ASHE 2025 tạm tính, SOC 2134"
        },
        "vn": {
          "range": "18–30 triệu VNĐ/tháng (trung bình ~24 triệu)",
          "source": "https://www.topcv.vn/tra-cuu-muc-luong-tai-viet-nam/lap-trinh-vien"
        }
      },
      "outlook": "Triển vọng: BLS dự báo +10% giai đoạn 2025–2035 (nhanh hơn nhiều so với trung bình).",
      "shortage": []
    },
    {
      "id": "data-scientist",
      "name": "Nhà khoa học dữ liệu",
      "nameEn": "Data Scientist",
      "description": "Thu thập, xử lý và phân tích dữ liệu, xây dựng mô hình thống kê/học máy để hỗ trợ ra quyết định.",
      "majorIds": [
        "data",
        "cs",
        "economics",
        "ai"
      ],
      "salary": {
        "my": {
          "value": 120230,
          "currency": "USD",
          "source": "https://www.bls.gov/ooh/math/data-scientists.htm",
          "year": 2025
        },
        "uc": {
          "value": 107744,
          "weekly": 2072,
          "currency": "AUD",
          "source": "https://www.jobsandskills.gov.au/data/occupation-and-industry-profiles/occupations-anzsco/2241-actuaries-mathematicians-and-statisticians",
          "year": 2025,
          "note": "Ước theo nhóm gần nhất ANZSCO 2241 (Actuaries, Mathematicians and Statisticians)"
        },
        "canada": {
          "value": 89993,
          "hourly": 46.15,
          "currency": "CAD",
          "source": "https://www.jobbank.gc.ca/marketreport/summary-occupation/227147/ca",
          "year": 2024,
          "note": "NOC 21211"
        },
        "anh": {
          "value": 53342,
          "currency": "GBP",
          "source": "https://payprecision.co.uk/salaries/by-occupation/",
          "year": 2025,
          "note": "Ước theo nhóm SOC 2433 (Actuaries, economists and statisticians)"
        },
        "vn": {
          "range": "25–35 triệu VNĐ/tháng (3–5 năm kinh nghiệm, trung bình ~30 triệu)",
          "entry": "~20 triệu VNĐ/tháng (nhóm 1–3 năm kinh nghiệm)",
          "source": "https://www.topcv.vn/tra-cuu-muc-luong-tai-viet-nam/data-scientist",
          "year": 2026,
          "note": "Theo báo cáo lương TopCV 2026 (tổng hợp từ tin tuyển dụng trên TopCV). Mẫu nhỏ (khoảng 14 tin có lương); TopCV chưa có số liệu cho nhóm dưới 1 năm nên mức khởi điểm lấy theo nhóm 1–3 năm."
        }
      },
      "outlook": "Triển vọng: BLS dự báo +35% giai đoạn 2025–2035 – thuộc nhóm tăng nhanh nhất.",
      "shortage": []
    },
    {
      "id": "cyber-security",
      "name": "Chuyên viên an ninh mạng",
      "nameEn": "Information Security Analyst",
      "description": "Bảo vệ hệ thống, mạng và dữ liệu của tổ chức trước tấn công mạng; giám sát, điều tra sự cố.",
      "majorIds": [
        "cs",
        "cybersecurity"
      ],
      "salary": {
        "my": {
          "value": 129180,
          "currency": "USD",
          "source": "https://www.bls.gov/ooh/computer-and-information-technology/information-security-analysts.htm",
          "year": 2025
        },
        "uc": {
          "value": 127972,
          "weekly": 2461,
          "currency": "AUD",
          "source": "https://www.jobsandskills.gov.au/data/labour-market-insights/occupations/2621-database-and-systems-administrators-and-ict-security-specialists",
          "year": 2025,
          "note": "ANZSCO 2621"
        },
        "canada": {
          "value": 96564,
          "hourly": 49.52,
          "currency": "CAD",
          "source": "https://www.jobbank.gc.ca/marketreport/summary-occupation/297999/ca",
          "year": 2024,
          "note": "NOC 21220"
        },
        "anh": {
          "value": 54647,
          "currency": "GBP",
          "source": "https://payprecision.co.uk/salaries/by-occupation/",
          "year": 2025,
          "note": "SOC 2135"
        },
        "vn": {
          "range": "25–35 triệu VNĐ/tháng (3–5 năm kinh nghiệm, trung bình ~30 triệu)",
          "entry": "16–30 triệu VNĐ/tháng (dưới 1 năm, trung bình ~23 triệu; mẫu rất nhỏ)",
          "source": "https://www.topcv.vn/tra-cuu-muc-luong-tai-viet-nam/chuyen-vien-cyber-security",
          "year": 2026,
          "note": "Theo báo cáo lương TopCV 2026 (tổng hợp từ tin tuyển dụng trên TopCV). Vị trí 'Chuyên viên Cyber Security'; mức chung mọi kinh nghiệm 20–31,7 triệu (TB ~25,8 triệu). Vị trí gần 'Chuyên viên IT Security' trên TopCV có mức chung thấp hơn: 15,5–22,5 triệu (TB ~19 triệu)."
        }
      },
      "outlook": "Triển vọng: BLS dự báo +21% giai đoạn 2025–2035.",
      "shortage": []
    },
    {
      "id": "financial-analyst",
      "name": "Chuyên viên phân tích tài chính",
      "nameEn": "Financial Analyst",
      "description": "Phân tích báo cáo tài chính, thị trường và cơ hội đầu tư để tư vấn cho doanh nghiệp hoặc nhà đầu tư.",
      "majorIds": [
        "finance",
        "accounting",
        "economics"
      ],
      "salary": {
        "my": {
          "value": 103570,
          "currency": "USD",
          "source": "https://www.bls.gov/ooh/business-and-financial/financial-analysts.htm",
          "year": 2025
        },
        "uc": {
          "value": 134264,
          "weekly": 2582,
          "currency": "AUD",
          "source": "https://www.jobsandskills.gov.au/data/occupation-and-industry-profiles/occupations-anzsco/2223-financial-investment-advisers-and-managers",
          "year": 2025,
          "note": "ANZSCO 2223 (Financial Investment Advisers and Managers)"
        },
        "canada": {
          "value": 84377,
          "hourly": 43.27,
          "currency": "CAD",
          "source": "https://www.jobbank.gc.ca/wagereport/occupation/12417",
          "year": 2024,
          "note": "NOC 11101"
        },
        "anh": {
          "value": 50330,
          "currency": "GBP",
          "source": "https://payprecision.co.uk/salaries/by-occupation/",
          "year": 2025,
          "note": "SOC 2422"
        },
        "vn": {
          "range": "12,6–18,1 triệu VNĐ/tháng (khoảng lương phổ biến, trung vị ~15,3 triệu)",
          "entry": "~15,4 triệu VNĐ/tháng (nhóm 1–4 năm kinh nghiệm); nhóm 5–9 năm ~17,4 triệu",
          "source": "https://vietnamsalary.careerviet.vn/detail/Chuy%C3%AAn-vi%C3%AAn-ph%C3%A2n-t%C3%ADch-t%C3%A0i-ch%C3%ADnh-kw-en",
          "year": 2026,
          "note": "Theo VietnamSalary của CareerViet (CareerBuilder Việt Nam, phương pháp do Amco Vietnam hỗ trợ), tổng hợp từ 45 tin tuyển dụng 'Chuyên viên phân tích tài chính', cập nhật hằng tháng (truy cập 11/2026). TopCV không có báo cáo lương cho vị trí này. Nguồn không tách riêng nhóm 3–5 năm hay dưới 1 năm. Hà Nội TB ~13,5 triệu, TP.HCM ~16,2 triệu; vị trí tại công ty chứng khoán/đa quốc gia thường cao hơn."
        }
      },
      "outlook": "Triển vọng: BLS dự báo +7% giai đoạn 2025–2035.",
      "shortage": []
    },
    {
      "id": "accountant",
      "name": "Kế toán – Kiểm toán viên",
      "nameEn": "Accountant / Auditor",
      "description": "Lập và kiểm tra báo cáo tài chính, tư vấn thuế, đảm bảo doanh nghiệp tuân thủ quy định.",
      "majorIds": [
        "accounting",
        "finance"
      ],
      "salary": {
        "my": {
          "value": 83680,
          "currency": "USD",
          "source": "https://www.bls.gov/ooh/business-and-financial/accountants-and-auditors.htm",
          "year": 2025
        },
        "uc": {
          "value": 104156,
          "weekly": 2003,
          "currency": "AUD",
          "source": "https://www.jobsandskills.gov.au/data/occupation-and-industry-profiles/occupations-anzsco/2211-accountants",
          "year": 2025,
          "note": "ANZSCO 2211"
        },
        "canada": {
          "value": 78702,
          "hourly": 40.36,
          "currency": "CAD",
          "source": "https://www.jobbank.gc.ca/marketreport/summary-occupation/113/ca",
          "year": 2024,
          "note": "NOC 11100"
        },
        "anh": {
          "value": 50062,
          "currency": "GBP",
          "source": "https://payprecision.co.uk/salaries/by-occupation/",
          "year": 2025,
          "note": "SOC 2421 (Chartered and certified accountants)"
        },
        "vn": {
          "range": "10–15 triệu VNĐ/tháng (nhân viên kế toán, trung bình ~12,5 triệu)",
          "source": "https://www.topcv.vn/luong-ke-toan"
        }
      },
      "outlook": "Triển vọng: BLS dự báo +5% giai đoạn 2025–2035; nhu cầu ổn định ở mọi ngành.",
      "shortage": []
    },
    {
      "id": "management-analyst",
      "name": "Chuyên viên tư vấn quản lý",
      "nameEn": "Management Analyst / Consultant",
      "description": "Phân tích hoạt động doanh nghiệp và đề xuất giải pháp nâng cao hiệu quả, cắt giảm chi phí.",
      "majorIds": [
        "business",
        "economics",
        "logistics",
        "intl-business",
        "hr"
      ],
      "salary": {
        "my": {
          "value": 101860,
          "currency": "USD",
          "source": "https://www.bls.gov/ooh/business-and-financial/management-analysts.htm",
          "year": 2025
        },
        "uc": {
          "value": 127088,
          "weekly": 2444,
          "currency": "AUD",
          "source": "https://www.jobsandskills.gov.au/data/occupation-and-industry-profiles/occupations/2247-management-and-organisation-analysts",
          "year": 2025,
          "note": "ANZSCO 2247"
        },
        "canada": {
          "value": 85995,
          "hourly": 44.1,
          "currency": "CAD",
          "source": "https://www.jobbank.gc.ca/marketreport/summary-occupation/297/ca",
          "year": 2024,
          "note": "NOC 11201"
        },
        "anh": {
          "value": 53295,
          "currency": "GBP",
          "source": "https://payprecision.co.uk/salaries/by-occupation/",
          "year": 2025,
          "note": "SOC 2431 (Management consultants and business analysts)"
        },
        "vn": {
          "range": "20–30 triệu VNĐ/tháng (3–5 năm kinh nghiệm, trung bình ~25 triệu)",
          "entry": "8–15 triệu VNĐ/tháng (dưới 1 năm, trung bình ~11,5 triệu)",
          "source": "https://www.topcv.vn/tra-cuu-muc-luong-tai-viet-nam/business-analyst",
          "year": 2026,
          "note": "Theo báo cáo lương TopCV 2026 (tổng hợp từ tin tuyển dụng trên TopCV). TopCV không có báo cáo riêng cho 'chuyên viên tư vấn quản lý'; dùng vị trí gần nhất Business Analyst (chuyên viên phân tích nghiệp vụ). Lương tại các hãng tư vấn chiến lược quốc tế thường cao hơn."
        }
      },
      "outlook": "Triển vọng: BLS dự báo +10% giai đoạn 2025–2035.",
      "shortage": []
    },
    {
      "id": "marketing-manager",
      "name": "Quản lý marketing",
      "nameEn": "Marketing Manager",
      "description": "Lập kế hoạch và điều phối chiến lược marketing, thương hiệu và quảng cáo cho sản phẩm/dịch vụ.",
      "majorIds": [
        "marketing",
        "business",
        "media",
        "intl-business"
      ],
      "salary": {
        "my": {
          "value": 166790,
          "currency": "USD",
          "source": "https://www.bls.gov/ooh/management/advertising-promotions-and-marketing-managers.htm",
          "year": 2025
        },
        "uc": {
          "value": 121212,
          "weekly": 2331,
          "currency": "AUD",
          "source": "https://www.jobsandskills.gov.au/data/occupation-and-industry-profiles/occupations/1311-advertising-public-relations-and-sales-manager",
          "year": 2023,
          "note": "ANZSCO 1311; số liệu ABS 5/2023"
        },
        "canada": {
          "value": 107816,
          "hourly": 55.29,
          "currency": "CAD",
          "source": "https://www.jobbank.gc.ca/marketreport/summary-occupation/12331/ca",
          "year": 2024,
          "note": "NOC 10022"
        },
        "anh": {
          "value": 53703,
          "currency": "GBP",
          "source": "https://payprecision.co.uk/salaries/by-occupation/",
          "year": 2025,
          "note": "SOC 2432 (Marketing and commercial managers)"
        },
        "vn": {
          "range": "20–30 triệu VNĐ/tháng (3–5 năm kinh nghiệm, trung bình ~25 triệu)",
          "entry": "~23,5 triệu VNĐ/tháng (nhóm 1–3 năm kinh nghiệm ở vị trí quản lý)",
          "source": "https://www.topcv.vn/tra-cuu-muc-luong-tai-viet-nam/marketing-manager",
          "year": 2026,
          "note": "Theo báo cáo lương TopCV 2026 (tổng hợp từ tin tuyển dụng trên TopCV). Vị trí Marketing Manager; nhóm từ 5 năm kinh nghiệm trung bình ~30 triệu. Đây là vị trí quản lý nên không có số liệu mới ra trường; nhân viên marketing mới ra trường có lương thấp hơn nhiều."
        }
      },
      "outlook": "Triển vọng: BLS dự báo +7% giai đoạn 2025–2035; đây là vị trí quản lý, thường cần nhiều năm kinh nghiệm.",
      "shortage": []
    },
    {
      "id": "market-research-analyst",
      "name": "Chuyên viên nghiên cứu thị trường",
      "nameEn": "Market Research Analyst",
      "description": "Thu thập và phân tích dữ liệu về khách hàng, đối thủ và xu hướng để hỗ trợ quyết định kinh doanh.",
      "majorIds": [
        "marketing",
        "economics",
        "data",
        "intl-business"
      ],
      "salary": {
        "my": {
          "value": 78760,
          "currency": "USD",
          "source": "https://www.bls.gov/ooh/business-and-financial/market-research-analysts.htm",
          "year": 2025
        },
        "uc": {
          "value": 101764,
          "weekly": 1957,
          "currency": "AUD",
          "source": "https://www.jobsandskills.gov.au/data/occupation-and-industry-profiles/occupations/2251-advertising-and-marketing-professionals",
          "year": 2025,
          "note": "ANZSCO 2251 (Advertising and Marketing Professionals)"
        },
        "canada": {
          "value": 69381,
          "hourly": 35.58,
          "currency": "CAD",
          "source": "https://www.jobbank.gc.ca/marketreport/wages-occupation/3877/ca",
          "year": 2024,
          "note": "NOC 11202"
        },
        "anh": {
          "value": 33412,
          "currency": "GBP",
          "source": "https://payprecision.co.uk/salaries/by-occupation/",
          "year": 2025,
          "note": "Ước theo SOC 3554 (Advertising and marketing associate professionals)"
        },
        "vn": {
          "range": "15–25 triệu VNĐ/tháng (3–5 năm kinh nghiệm, trung bình ~20 triệu)",
          "entry": "8–12 triệu VNĐ/tháng (dưới 1 năm, trung bình ~10 triệu)",
          "source": "https://www.topcv.vn/tra-cuu-muc-luong-tai-viet-nam/market-research",
          "year": 2026,
          "note": "Theo báo cáo lương TopCV 2026 (tổng hợp từ tin tuyển dụng trên TopCV). Vị trí Market Research; mẫu nhóm 3–5 năm nhỏ (khoảng 9 tin)."
        }
      },
      "outlook": "Triển vọng: BLS dự báo +7% giai đoạn 2025–2035.",
      "shortage": []
    },
    {
      "id": "hr-specialist",
      "name": "Chuyên viên nhân sự",
      "nameEn": "Human Resources Specialist",
      "description": "Tuyển dụng, đào tạo, quản lý chế độ lương thưởng và quan hệ lao động trong tổ chức.",
      "majorIds": [
        "business",
        "hr"
      ],
      "salary": {
        "my": {
          "value": 75940,
          "currency": "USD",
          "source": "https://www.bls.gov/ooh/business-and-financial/human-resources-specialists.htm",
          "year": 2025
        },
        "uc": {
          "value": 102440,
          "weekly": 1970,
          "currency": "AUD",
          "source": "https://www.jobsandskills.gov.au/data/occupation-and-industry-profiles/occupations-anzsco/2231-human-resource-professionals",
          "year": 2025,
          "note": "ANZSCO 2231"
        },
        "canada": {
          "value": 79697,
          "hourly": 40.87,
          "currency": "CAD",
          "source": "https://www.jobbank.gc.ca/wagereport/occupation/274",
          "year": 2024,
          "note": "NOC 11200"
        },
        "anh": {
          "value": 35194,
          "currency": "GBP",
          "source": "https://payprecision.co.uk/salaries/by-occupation/",
          "year": 2025,
          "note": "SOC 3571"
        },
        "vn": {
          "range": "12,5–17,5 triệu VNĐ/tháng (3–5 năm kinh nghiệm, trung bình ~15 triệu)",
          "entry": "10–13,5 triệu VNĐ/tháng (dưới 1 năm, trung bình ~11,8 triệu)",
          "source": "https://www.topcv.vn/tra-cuu-muc-luong-tai-viet-nam/chuyen-vien-nhan-su-tong-hop",
          "year": 2026,
          "note": "Theo báo cáo lương TopCV 2026 (tổng hợp từ tin tuyển dụng trên TopCV). Vị trí 'Chuyên viên nhân sự tổng hợp'."
        }
      },
      "outlook": "Triển vọng: BLS dự báo +6% giai đoạn 2025–2035.",
      "shortage": []
    },
    {
      "id": "mechanical-engineer",
      "name": "Kỹ sư cơ khí",
      "nameEn": "Mechanical Engineer",
      "description": "Thiết kế, phát triển và kiểm thử máy móc, thiết bị, hệ thống nhiệt và cơ điện.",
      "majorIds": [
        "engineering"
      ],
      "salary": {
        "my": {
          "value": 104110,
          "currency": "USD",
          "source": "https://www.bls.gov/ooh/architecture-and-engineering/mechanical-engineers.htm",
          "year": 2025
        },
        "uc": {
          "value": 135928,
          "weekly": 2614,
          "currency": "AUD",
          "source": "https://www.jobsandskills.gov.au/data/occupation-and-industry-profiles/occupations-anzsco/2335-industrial-mechanical-and-production-engineers",
          "year": 2025,
          "note": "ANZSCO 2335"
        },
        "canada": {
          "value": 89057,
          "hourly": 45.67,
          "currency": "CAD",
          "source": "https://www.jobbank.gc.ca/marketreport/summary-occupation/2757/ca",
          "year": 2024,
          "note": "NOC 21301"
        },
        "anh": {
          "value": 51110,
          "currency": "GBP",
          "source": "https://payprecision.co.uk/salaries/by-occupation/",
          "year": 2025,
          "note": "SOC 2122"
        },
        "vn": {
          "range": "15–20 triệu VNĐ/tháng (3–5 năm kinh nghiệm, trung bình ~17,5 triệu)",
          "entry": "10–15 triệu VNĐ/tháng (dưới 1 năm, trung bình ~12,5 triệu)",
          "source": "https://www.topcv.vn/tra-cuu-muc-luong-tai-viet-nam/ky-su-co-khi",
          "year": 2026,
          "note": "Theo báo cáo lương TopCV 2026 (tổng hợp từ tin tuyển dụng trên TopCV). Vị trí Kỹ sư cơ khí."
        }
      },
      "outlook": "Triển vọng: BLS dự báo +11% giai đoạn 2025–2035.",
      "shortage": []
    },
    {
      "id": "electrical-engineer",
      "name": "Kỹ sư điện – điện tử",
      "nameEn": "Electrical & Electronics Engineer",
      "description": "Thiết kế và giám sát hệ thống điện, thiết bị điện tử, năng lượng và tự động hóa.",
      "majorIds": [
        "engineering",
        "electrical"
      ],
      "salary": {
        "my": {
          "value": 125040,
          "currency": "USD",
          "source": "https://www.bls.gov/ooh/architecture-and-engineering/electrical-and-electronics-engineers.htm",
          "year": 2025
        },
        "uc": {
          "value": 132756,
          "weekly": 2553,
          "currency": "AUD",
          "source": "https://www.jobsandskills.gov.au/data/occupation-and-industry-profiles/occupations-anzsco/2333-electrical-engineers",
          "year": 2025,
          "note": "ANZSCO 2333"
        },
        "canada": {
          "value": 98807,
          "hourly": 50.67,
          "currency": "CAD",
          "source": "https://www.jobbank.gc.ca/marketreport/summary-occupation/17815/ca",
          "year": 2024,
          "note": "NOC 21310"
        },
        "anh": {
          "value": 60303,
          "currency": "GBP",
          "source": "https://payprecision.co.uk/salaries/by-occupation/",
          "year": 2025,
          "note": "SOC 2123"
        },
        "vn": {
          "range": "15–23 triệu VNĐ/tháng (3–5 năm kinh nghiệm, trung bình ~19 triệu)",
          "entry": "10–15 triệu VNĐ/tháng (dưới 1 năm, trung bình ~12,5 triệu)",
          "source": "https://www.topcv.vn/tra-cuu-muc-luong-tai-viet-nam/ky-su-dien",
          "year": 2026,
          "note": "Theo báo cáo lương TopCV 2026 (tổng hợp từ tin tuyển dụng trên TopCV). Vị trí Kỹ sư điện; TopCV không có báo cáo riêng cho kỹ sư điện tử. Nhóm từ 5 năm trung bình ~23,5 triệu."
        }
      },
      "outlook": "Triển vọng: BLS dự báo +8% giai đoạn 2025–2035; nhu cầu cao trong năng lượng tái tạo, bán dẫn.",
      "shortage": []
    },
    {
      "id": "civil-engineer",
      "name": "Kỹ sư xây dựng",
      "nameEn": "Civil Engineer",
      "description": "Thiết kế, xây dựng và bảo trì công trình hạ tầng: cầu đường, tòa nhà, hệ thống cấp thoát nước.",
      "majorIds": [
        "engineering"
      ],
      "salary": {
        "my": {
          "value": 100840,
          "currency": "USD",
          "source": "https://www.bls.gov/ooh/architecture-and-engineering/civil-engineers.htm",
          "year": 2025
        },
        "uc": {
          "value": 115284,
          "weekly": 2217,
          "currency": "AUD",
          "source": "https://www.jobsandskills.gov.au/data/occupation-and-industry-profiles/occupations-anzsco/2332-civil-engineering-professionals",
          "year": 2025,
          "note": "ANZSCO 2332"
        },
        "canada": {
          "value": 94692,
          "hourly": 48.56,
          "currency": "CAD",
          "source": "https://www.jobbank.gc.ca/marketreport/summary-occupation/22376/ca",
          "year": 2024,
          "note": "NOC 21300"
        },
        "anh": {
          "value": 51366,
          "currency": "GBP",
          "source": "https://payprecision.co.uk/salaries/by-occupation/",
          "year": 2025,
          "note": "SOC 2121"
        },
        "vn": {
          "range": "16–25 triệu VNĐ/tháng (3–5 năm kinh nghiệm, trung bình ~20,5 triệu)",
          "entry": "11–20 triệu VNĐ/tháng (dưới 1 năm, trung bình ~15,5 triệu)",
          "source": "https://www.topcv.vn/tra-cuu-muc-luong-tai-viet-nam/ky-su-xay-dung",
          "year": 2026,
          "note": "Theo báo cáo lương TopCV 2026 (tổng hợp từ tin tuyển dụng trên TopCV). Vị trí Kỹ sư xây dựng; nhóm từ 5 năm trung bình ~22,5 triệu."
        }
      },
      "outlook": "Triển vọng: BLS dự báo +6% giai đoạn 2025–2035.",
      "shortage": []
    },
    {
      "id": "registered-nurse",
      "name": "Điều dưỡng viên",
      "nameEn": "Registered Nurse",
      "description": "Chăm sóc, theo dõi và hỗ trợ điều trị người bệnh tại bệnh viện, phòng khám và cộng đồng. Phải đăng ký hành nghề tại từng nước (NCLEX, AHPRA, NMC…).",
      "majorIds": [
        "nursing"
      ],
      "salary": {
        "my": {
          "value": 97550,
          "currency": "USD",
          "source": "https://www.bls.gov/ooh/healthcare/registered-nurses.htm",
          "year": 2025
        },
        "uc": {
          "value": 113984,
          "weekly": 2192,
          "currency": "AUD",
          "source": "https://www.jobsandskills.gov.au/data/occupation-and-industry-profiles/occupations-anzsco/2544-registered-nurses",
          "year": 2025,
          "note": "ANZSCO 2544"
        },
        "canada": {
          "value": 84377,
          "hourly": 43.27,
          "currency": "CAD",
          "source": "https://www.jobbank.gc.ca/marketreport/summary-occupation/993/ca",
          "year": 2024,
          "note": "NOC 31301"
        },
        "anh": {
          "value": 42300,
          "currency": "GBP",
          "source": "https://payprecision.co.uk/salaries/by-occupation/",
          "year": 2025,
          "note": "SOC 2237 (Other registered nursing professionals)"
        },
        "vn": {
          "range": "10–15 triệu VNĐ/tháng (3–5 năm kinh nghiệm, trung bình ~12,5 triệu)",
          "entry": "9–15 triệu VNĐ/tháng (dưới 1 năm, trung bình ~12 triệu)",
          "source": "https://www.topcv.vn/tra-cuu-muc-luong-tai-viet-nam/nhan-vien-dieu-duong",
          "year": 2026,
          "note": "Theo báo cáo lương TopCV 2026 (tổng hợp từ tin tuyển dụng trên TopCV). Vị trí 'Nhân viên điều dưỡng', chủ yếu tin tuyển dụng của bệnh viện/phòng khám tư; điều dưỡng ở bệnh viện công hưởng lương theo thang bảng lương nhà nước. Mẫu nhóm 3–5 năm nhỏ (khoảng 17 tin)."
        }
      },
      "outlook": "Triển vọng: BLS dự báo +6% giai đoạn 2025–2035; thiếu hụt kéo dài ở Úc và Canada.",
      "shortage": [
        "uc",
        "canada"
      ],
      "shortageNote": "Úc: điều dưỡng nằm trong Occupation Shortage List của Jobs and Skills Australia. Canada: nhóm nghề y tế (gồm điều dưỡng) là nhóm ưu tiên trong Express Entry. Nên kiểm tra lại danh sách năm hiện hành."
    },
    {
      "id": "economist",
      "name": "Nhà kinh tế học",
      "nameEn": "Economist",
      "description": "Nghiên cứu, phân tích dữ liệu kinh tế và dự báo xu hướng cho chính phủ, ngân hàng, tổ chức quốc tế hoặc doanh nghiệp.",
      "majorIds": [
        "economics",
        "finance"
      ],
      "salary": {
        "my": {
          "value": 124720,
          "currency": "USD",
          "source": "https://www.bls.gov/ooh/life-physical-and-social-science/economists.htm",
          "year": 2025
        },
        "uc": {
          "value": 148824,
          "weekly": 2862,
          "currency": "AUD",
          "source": "https://www.jobsandskills.gov.au/data/occupation-and-industry-profiles/occupations-anzsco/2243-economists",
          "year": 2025,
          "note": "ANZSCO 2243"
        },
        "canada": {
          "value": 93756,
          "hourly": 48.08,
          "currency": "CAD",
          "source": "https://www.jobbank.gc.ca/marketreport/summary-occupation/15992/ca",
          "year": 2024,
          "note": "NOC 41401"
        },
        "anh": {
          "value": 53342,
          "currency": "GBP",
          "source": "https://payprecision.co.uk/salaries/by-occupation/",
          "year": 2025,
          "note": "SOC 2433 (Actuaries, economists and statisticians)"
        },
        "vn": {
          "range": "9,6–17,3 triệu VNĐ/tháng (khoảng lương phổ biến, trung vị ~13,4 triệu)",
          "source": "https://vietnamsalary.careerviet.vn/detail/Research-Analyst-kw-en",
          "year": 2026,
          "note": "Không tìm thấy nguồn lương uy tín riêng cho 'nhà kinh tế học' tại Việt Nam (TopCV, CareerViet đều không có báo cáo). Dùng vị trí gần nhất 'Research Analyst' (chuyên viên phân tích – nghiên cứu, chủ yếu tại công ty chứng khoán, tài chính) trên VietnamSalary của CareerViet, tổng hợp từ tin tuyển dụng, cập nhật hằng tháng (truy cập 11/2026); mức cao nhất ghi nhận ~46 triệu. Nguồn không có số liệu theo năm kinh nghiệm."
        }
      },
      "outlook": "Triển vọng: BLS dự báo +5% giai đoạn 2025–2035; nhiều vị trí yêu cầu bằng thạc sĩ trở lên.",
      "shortage": []
    },
    {
      "id": "pr-specialist",
      "name": "Chuyên viên quan hệ công chúng (PR)",
      "nameEn": "Public Relations Specialist",
      "description": "Xây dựng và bảo vệ hình ảnh của tổ chức qua báo chí, mạng xã hội, sự kiện và truyền thông nội bộ.",
      "majorIds": [
        "media",
        "marketing"
      ],
      "salary": {
        "my": {
          "value": 74750,
          "currency": "USD",
          "source": "https://www.bls.gov/ooh/media-and-communication/public-relations-specialists.htm",
          "year": 2025
        },
        "uc": {
          "value": 106392,
          "weekly": 2046,
          "currency": "AUD",
          "source": "https://www.jobsandskills.gov.au/data/occupation-and-industry-profiles/occupations/2253-public-relations-professionals",
          "year": 2025,
          "note": "ANZSCO 2253"
        },
        "canada": {
          "value": 69381,
          "hourly": 35.58,
          "currency": "CAD",
          "source": "https://www.jobbank.gc.ca/marketreport/summary-occupation/20976/ca",
          "year": 2024,
          "note": "NOC 11202"
        },
        "anh": {
          "value": 37563,
          "currency": "GBP",
          "source": "https://payprecision.co.uk/salaries/by-occupation/",
          "year": 2025,
          "note": "SOC 2493"
        },
        "vn": {
          "range": "15–18,5 triệu VNĐ/tháng (3–5 năm kinh nghiệm, trung bình ~16,8 triệu)",
          "entry": "9–14 triệu VNĐ/tháng (dưới 1 năm, trung bình ~11,5 triệu)",
          "source": "https://www.topcv.vn/tra-cuu-muc-luong-tai-viet-nam/nhan-vien-pr-quan-he-cong-chung",
          "year": 2026,
          "note": "Theo báo cáo lương TopCV 2026 (tổng hợp từ tin tuyển dụng trên TopCV). Vị trí 'Nhân viên PR (Quan hệ công chúng)'; mẫu nhóm 3–5 năm rất nhỏ (khoảng 6 tin)."
        }
      },
      "outlook": "Triển vọng: BLS dự báo +2% giai đoạn 2025–2035 (chậm hơn trung bình).",
      "shortage": []
    },
    {
      "id": "graphic-designer",
      "name": "Nhà thiết kế đồ họa",
      "nameEn": "Graphic Designer",
      "description": "Tạo thiết kế thị giác cho thương hiệu, quảng cáo, ấn phẩm và nền tảng số.",
      "majorIds": [
        "design",
        "media"
      ],
      "salary": {
        "my": {
          "value": 62960,
          "currency": "USD",
          "source": "https://www.bls.gov/ooh/arts-and-design/graphic-designers.htm",
          "year": 2025
        },
        "uc": {
          "value": 96200,
          "weekly": 1850,
          "currency": "AUD",
          "source": "https://www.jobsandskills.gov.au/data/occupation-and-industry-profiles/occupations-anzsco/2324-graphic-and-web-designers-and-illustrators",
          "year": 2025,
          "note": "ANZSCO 2324"
        },
        "canada": {
          "value": 60938,
          "hourly": 31.25,
          "currency": "CAD",
          "source": "https://www.jobbank.gc.ca/marketreport/summary-occupation/5703/ca",
          "year": 2024,
          "note": "NOC 52120"
        },
        "anh": {
          "value": 32510,
          "currency": "GBP",
          "source": "https://payprecision.co.uk/salaries/by-occupation/",
          "year": 2025,
          "note": "SOC 2142 (Graphic and multimedia designers)"
        },
        "vn": {
          "range": "15–20 triệu VNĐ/tháng (3–5 năm kinh nghiệm, trung bình ~17,5 triệu)",
          "entry": "8,8–13 triệu VNĐ/tháng (dưới 1 năm, trung bình ~10,9 triệu)",
          "source": "https://www.topcv.vn/tra-cuu-muc-luong-tai-viet-nam/thiet-ke-do-hoa",
          "year": 2026,
          "note": "Theo báo cáo lương TopCV 2026 (tổng hợp từ tin tuyển dụng trên TopCV). Vị trí Thiết kế đồ họa; nhóm từ 5 năm trung bình ~23,8 triệu."
        }
      },
      "outlook": "Triển vọng: BLS dự báo −2% giai đoạn 2025–2035; nên kết hợp kỹ năng UX/UI, chuyển động, công cụ AI để tăng cạnh tranh.",
      "shortage": []
    },
    {
      "id": "web-designer",
      "name": "Nhà thiết kế web / UX-UI",
      "nameEn": "Web & Digital Interface Designer",
      "description": "Thiết kế giao diện và trải nghiệm người dùng cho website, ứng dụng và sản phẩm số.",
      "majorIds": [
        "design",
        "cs"
      ],
      "salary": {
        "my": {
          "value": 104000,
          "currency": "USD",
          "source": "https://www.bls.gov/ooh/computer-and-information-technology/web-developers.htm",
          "year": 2025,
          "note": "Web and digital interface designers"
        },
        "uc": {
          "value": 128752,
          "weekly": 2476,
          "currency": "AUD",
          "source": "https://www.jobsandskills.gov.au/data/occupation-and-industry-profiles/occupations/2612-multimedia-specialists-and-web-developers",
          "year": 2025,
          "note": "ANZSCO 2612 (Multimedia Specialists and Web Developers)"
        },
        "canada": {
          "value": 65618,
          "hourly": 33.65,
          "currency": "CAD",
          "source": "https://www.jobbank.gc.ca/marketreport/summary-occupation/17898/ca",
          "year": 2024,
          "note": "NOC 21233"
        },
        "anh": {
          "value": 48629,
          "currency": "GBP",
          "source": "https://payprecision.co.uk/salaries/by-occupation/",
          "year": 2025,
          "note": "SOC 2141 (Web design professionals)"
        },
        "vn": {
          "range": "20–30 triệu VNĐ/tháng (3–5 năm kinh nghiệm, trung bình ~25 triệu)",
          "entry": "7–18 triệu VNĐ/tháng (dưới 1 năm, trung bình ~12,5 triệu)",
          "source": "https://www.topcv.vn/tra-cuu-muc-luong-tai-viet-nam/ui-ux-design",
          "year": 2026,
          "note": "Theo báo cáo lương TopCV 2026 (tổng hợp từ tin tuyển dụng trên TopCV). Vị trí 'UI UX Design'; nhóm từ 5 năm trung bình ~36,5 triệu."
        }
      },
      "outlook": "Triển vọng: BLS dự báo +5% giai đoạn 2025–2035 (nhóm Web developers and digital designers).",
      "shortage": []
    },
    {
      "id": "lodging-manager",
      "name": "Quản lý khách sạn",
      "nameEn": "Lodging / Hotel Manager",
      "description": "Điều hành hoạt động khách sạn, resort: lễ tân, buồng phòng, doanh thu, chất lượng dịch vụ.",
      "majorIds": [
        "hospitality",
        "business"
      ],
      "salary": {
        "my": {
          "value": 69250,
          "currency": "USD",
          "source": "https://www.bls.gov/ooh/management/lodging-managers.htm",
          "year": 2025
        },
        "uc": {
          "value": 95004,
          "weekly": 1827,
          "currency": "AUD",
          "source": "https://www.jobsandskills.gov.au/data/occupation-and-industry-profiles/occupations/1413-hotel-and-motel-managers",
          "year": 2025,
          "note": "ANZSCO 1413"
        },
        "canada": {
          "value": 74100,
          "hourly": 38,
          "currency": "CAD",
          "source": "https://www.jobbank.gc.ca/marketreport/summary-occupation/12393/ca",
          "year": 2024,
          "note": "NOC 60031"
        },
        "anh": {
          "value": 36419,
          "currency": "GBP",
          "source": "https://payprecision.co.uk/salaries/by-occupation/",
          "year": 2025,
          "note": "SOC 1221 (Hotel and accommodation managers and proprietors)"
        },
        "vn": {
          "range": "24–31 triệu VNĐ/tháng (3–5 năm kinh nghiệm, trung bình ~27,5 triệu)",
          "entry": "~17,5 triệu VNĐ/tháng (nhóm 1–3 năm kinh nghiệm ở vị trí quản lý)",
          "source": "https://www.topcv.vn/tra-cuu-muc-luong-tai-viet-nam/quan-ly-khach-san",
          "year": 2026,
          "note": "Theo báo cáo lương TopCV 2026 (tổng hợp từ tin tuyển dụng trên TopCV). Vị trí Quản lý khách sạn; mẫu nhỏ (khoảng 21 tin). Là vị trí quản lý nên không có số liệu mới ra trường."
        }
      },
      "outlook": "Triển vọng: BLS dự báo +4% giai đoạn 2025–2035; thường bắt đầu từ vị trí giám sát rồi thăng tiến.",
      "shortage": []
    },
    {
      "id": "event-planner",
      "name": "Chuyên viên tổ chức sự kiện",
      "nameEn": "Meeting, Convention & Event Planner",
      "description": "Lên kế hoạch, điều phối hội nghị, triển lãm, lễ hội và sự kiện doanh nghiệp.",
      "majorIds": [
        "hospitality",
        "marketing",
        "media"
      ],
      "salary": {
        "my": {
          "value": 61160,
          "currency": "USD",
          "source": "https://www.bls.gov/ooh/business-and-financial/meeting-convention-and-event-planners.htm",
          "year": 2025
        },
        "uc": {
          "value": 84968,
          "weekly": 1634,
          "currency": "AUD",
          "source": "https://www.jobsandskills.gov.au/data/occupation-and-industry-profiles/occupations/1493-conference-and-event-organisers",
          "year": 2025,
          "note": "ANZSCO 1493"
        },
        "canada": {
          "value": 55322,
          "hourly": 28.37,
          "currency": "CAD",
          "source": "https://www.jobbank.gc.ca/marketreport/wages-occupation/12542/ca",
          "year": 2024,
          "note": "NOC 12103"
        },
        "anh": {
          "value": 32163,
          "currency": "GBP",
          "source": "https://payprecision.co.uk/salaries/by-occupation/",
          "year": 2025,
          "note": "SOC 3557 (Events managers and organisers)"
        },
        "vn": {
          "range": "15–20 triệu VNĐ/tháng (3–5 năm kinh nghiệm, trung bình ~17,5 triệu)",
          "entry": "7–9 triệu VNĐ/tháng (dưới 1 năm, trung bình ~8 triệu)",
          "source": "https://www.topcv.vn/tra-cuu-muc-luong-tai-viet-nam/nhan-vien-to-chuc-su-kien",
          "year": 2026,
          "note": "Theo báo cáo lương TopCV 2026 (tổng hợp từ tin tuyển dụng trên TopCV). Vị trí 'Nhân viên tổ chức sự kiện'."
        }
      },
      "outlook": "Triển vọng: BLS dự báo +6% giai đoạn 2025–2035.",
      "shortage": []
    },
    {
      "id": "logistician",
      "name": "Chuyên viên logistics – chuỗi cung ứng",
      "nameEn": "Logistician / Supply Chain",
      "description": "Điều phối chuỗi cung ứng: mua hàng, kho bãi, vận chuyển và phân phối sản phẩm.",
      "majorIds": [
        "business",
        "engineering",
        "logistics",
        "intl-business"
      ],
      "salary": {
        "my": {
          "value": 82320,
          "currency": "USD",
          "source": "https://www.bls.gov/ooh/business-and-financial/logisticians.htm",
          "year": 2025
        },
        "uc": {
          "value": 147368,
          "weekly": 2834,
          "currency": "AUD",
          "source": "https://www.jobsandskills.gov.au/data/occupation-and-industry-profiles/occupations/1336-supply-distribution-and-procurement-managers",
          "year": 2025,
          "note": "ANZSCO 1336 – nhóm quản lý (Supply, Distribution and Procurement Managers), cao hơn mức chuyên viên"
        },
        "canada": {
          "value": 57506,
          "hourly": 29.49,
          "currency": "CAD",
          "source": "https://www.jobbank.gc.ca/marketreport/summary-occupation/296538/ca",
          "year": 2024,
          "note": "NOC 13201 (Production and transportation logistics coordinators)"
        },
        "anh": {
          "value": 46143,
          "currency": "GBP",
          "source": "https://payprecision.co.uk/salaries/by-occupation/",
          "year": 2025,
          "note": "SOC 1243 (Managers in logistics)"
        },
        "vn": {
          "range": "13–18 triệu VNĐ/tháng (3–5 năm kinh nghiệm, trung bình ~15,5 triệu)",
          "entry": "10–15 triệu VNĐ/tháng (dưới 1 năm, trung bình ~12,5 triệu)",
          "source": "https://www.topcv.vn/tra-cuu-muc-luong-tai-viet-nam/chuyen-vien-logistics",
          "year": 2026,
          "note": "Theo báo cáo lương TopCV 2026 (tổng hợp từ tin tuyển dụng trên TopCV). Vị trí 'Chuyên viên Logistics'."
        }
      },
      "outlook": "Triển vọng: BLS dự báo +18% giai đoạn 2025–2035 – tăng nhanh nhờ thương mại điện tử.",
      "shortage": []
    },
    {
      "id": "ai-engineer",
      "name": "Kỹ sư / nhà nghiên cứu AI",
      "nameEn": "AI Engineer / Computer & Information Research Scientist",
      "description": "Nghiên cứu, xây dựng và triển khai mô hình học máy, học sâu, mô hình ngôn ngữ lớn vào sản phẩm; nhiều vị trí nghiên cứu yêu cầu thạc sĩ/tiến sĩ.",
      "majorIds": [
        "ai",
        "cs",
        "data"
      ],
      "salary": {
        "my": {
          "value": 140300,
          "currency": "USD",
          "source": "https://www.bls.gov/ooh/computer-and-information-technology/computer-and-information-research-scientists.htm",
          "year": 2025,
          "note": "BLS: Computer and Information Research Scientists (thường yêu cầu thạc sĩ)"
        },
        "uc": {
          "value": 131924,
          "weekly": 2537,
          "currency": "AUD",
          "source": "https://www.jobsandskills.gov.au/data/occupation-and-industry-profiles/occupations-anzsco/2613-software-and-applications-programmers",
          "year": 2025,
          "note": "Chưa có mã ANZSCO riêng cho AI; ước theo nhóm gần nhất ANZSCO 2613 (Software and Applications Programmers)"
        },
        "canada": {
          "value": 89993,
          "hourly": 46.15,
          "currency": "CAD",
          "source": "https://www.jobbank.gc.ca/marketreport/summary-occupation/296364/ca",
          "year": 2024,
          "note": "Job Bank xếp 'Machine Learning Engineer' vào NOC 21211 (Data scientists)"
        },
        "anh": {
          "value": 56914,
          "currency": "GBP",
          "source": "https://payprecision.co.uk/salaries/by-occupation/",
          "year": 2025,
          "note": "ONS ASHE 2025 tạm tính; chưa có mã SOC riêng cho AI, ước theo SOC 2134 (Programmers and software development professionals)"
        },
        "vn": {
          "range": "20–35 triệu VNĐ/tháng (3–5 năm kinh nghiệm, trung bình ~27,5 triệu)",
          "entry": "9–15 triệu VNĐ/tháng (dưới 1 năm, trung bình ~12 triệu)",
          "source": "https://www.topcv.vn/tra-cuu-muc-luong-tai-viet-nam/ai-engineer",
          "year": 2026,
          "note": "Theo báo cáo lương TopCV 2026 (tổng hợp từ tin tuyển dụng trên TopCV). Vị trí AI Engineer; nhóm từ 5 năm trung bình ~40 triệu."
        }
      },
      "outlook": "Triển vọng: BLS dự báo +22% giai đoạn 2025–2035 (nhóm Computer and Information Research Scientists) – nhanh hơn nhiều so với trung bình.",
      "shortage": []
    },
    {
      "id": "network-admin",
      "name": "Quản trị mạng và hệ thống",
      "nameEn": "Network & Computer Systems Administrator",
      "description": "Cài đặt, vận hành và bảo trì mạng LAN/WAN, máy chủ, hạ tầng đám mây; đảm bảo hệ thống hoạt động ổn định và an toàn.",
      "majorIds": [
        "cybersecurity",
        "cs",
        "electrical"
      ],
      "salary": {
        "my": {
          "value": 99130,
          "currency": "USD",
          "source": "https://www.bls.gov/ooh/computer-and-information-technology/network-and-computer-systems-administrators.htm",
          "year": 2025
        },
        "uc": {
          "value": 120068,
          "weekly": 2309,
          "currency": "AUD",
          "source": "https://www.jobsandskills.gov.au/data/occupation-and-industry-profiles/occupations-anzsco/2631-computer-network-professionals",
          "year": 2025,
          "note": "ANZSCO 2631 (Computer Network Professionals)"
        },
        "canada": {
          "value": 70200,
          "hourly": 36,
          "currency": "CAD",
          "source": "https://www.jobbank.gc.ca/marketreport/wages-occupation/24514/ca",
          "year": 2024,
          "note": "NOC 22220 (Computer network and web technicians)"
        },
        "anh": {
          "value": 48907,
          "currency": "GBP",
          "source": "https://payprecision.co.uk/salaries/by-occupation/",
          "year": 2025,
          "note": "ONS ASHE 2025 tạm tính, SOC 2137 (IT network professionals)"
        },
        "vn": {
          "range": "20–32 triệu VNĐ/tháng (3–5 năm kinh nghiệm, trung bình ~26 triệu)",
          "entry": "10–15 triệu VNĐ/tháng (dưới 1 năm, trung bình ~12,5 triệu)",
          "source": "https://www.topcv.vn/tra-cuu-muc-luong-tai-viet-nam/network-engineer",
          "year": 2026,
          "note": "Theo báo cáo lương TopCV 2026 (tổng hợp từ tin tuyển dụng trên TopCV). TopCV không có báo cáo riêng cho 'quản trị mạng'; dùng vị trí gần nhất Network Engineer (kỹ sư mạng). Vị trí System Engineer trên TopCV thấp hơn: 15,5–24 triệu ở nhóm 3–5 năm."
        }
      },
      "outlook": "Triển vọng: BLS dự báo −4% giai đoạn 2025–2035 do điện toán đám mây và tự động hóa; nên bổ sung kỹ năng cloud, an ninh mạng.",
      "shortage": []
    },
    {
      "id": "architect",
      "name": "Kiến trúc sư",
      "nameEn": "Architect",
      "description": "Thiết kế nhà ở, công trình công cộng và không gian đô thị; phối hợp với kỹ sư, chủ đầu tư và giám sát thi công. Phải đăng ký hành nghề tại từng nước (NCARB, AACA, RAIC/OAA, ARB).",
      "majorIds": [
        "architecture"
      ],
      "salary": {
        "my": {
          "value": 99280,
          "currency": "USD",
          "source": "https://www.bls.gov/ooh/architecture-and-engineering/architects.htm",
          "year": 2025
        },
        "uc": {
          "value": 120016,
          "weekly": 2308,
          "currency": "AUD",
          "source": "https://www.jobsandskills.gov.au/data/occupation-and-industry-profiles/occupations-anzsco/2321-architects-and-landscape-architects",
          "year": 2025,
          "note": "ANZSCO 2321 (Architects and Landscape Architects)"
        },
        "canada": {
          "value": 75933,
          "hourly": 38.94,
          "currency": "CAD",
          "source": "https://www.jobbank.gc.ca/marketreport/wages-occupation/17867/ca",
          "year": 2024,
          "note": "NOC 21200"
        },
        "anh": {
          "value": 47143,
          "currency": "GBP",
          "source": "https://payprecision.co.uk/salaries/by-occupation/",
          "year": 2025,
          "note": "ONS ASHE 2025 tạm tính, SOC 2451 (Architects)"
        },
        "vn": {
          "range": "15–22,5 triệu VNĐ/tháng (3–5 năm kinh nghiệm, trung bình ~18,8 triệu)",
          "entry": "10–16,4 triệu VNĐ/tháng (dưới 1 năm, trung bình ~13,2 triệu)",
          "source": "https://www.topcv.vn/tra-cuu-muc-luong-tai-viet-nam/kien-truc-su",
          "year": 2026,
          "note": "Theo báo cáo lương TopCV 2026 (tổng hợp từ tin tuyển dụng trên TopCV). Vị trí Kiến trúc sư; nhóm từ 5 năm trung bình ~23,5 triệu."
        }
      },
      "outlook": "Triển vọng: BLS dự báo +4% giai đoạn 2025–2035 (ngang mức trung bình); cần bằng chuyên nghiệp và giấy phép hành nghề.",
      "shortage": []
    },
    {
      "id": "hr-manager",
      "name": "Quản lý nhân sự",
      "nameEn": "Human Resources Manager",
      "description": "Hoạch định chiến lược nhân sự, quản lý tuyển dụng, lương thưởng, đào tạo và quan hệ lao động; thường cần nhiều năm kinh nghiệm ở vị trí chuyên viên.",
      "majorIds": [
        "hr",
        "business"
      ],
      "salary": {
        "my": {
          "value": 149280,
          "currency": "USD",
          "source": "https://www.bls.gov/ooh/management/human-resources-managers.htm",
          "year": 2025
        },
        "uc": {
          "value": 143936,
          "weekly": 2768,
          "currency": "AUD",
          "source": "https://www.jobsandskills.gov.au/data/occupation-and-industry-profiles/occupations-anzsco/1323-human-resource-managers",
          "year": 2025,
          "note": "ANZSCO 1323"
        },
        "canada": {
          "value": 112496,
          "hourly": 57.69,
          "currency": "CAD",
          "source": "https://www.jobbank.gc.ca/marketreport/wages-occupation/17400/ca",
          "year": 2024,
          "note": "NOC 10011"
        },
        "anh": {
          "value": 57529,
          "currency": "GBP",
          "source": "https://payprecision.co.uk/salaries/by-occupation/",
          "year": 2025,
          "note": "ONS ASHE 2025 tạm tính, SOC 1136 (Human resource managers and directors)"
        },
        "vn": {
          "range": "khoảng 18,6–31 triệu VNĐ/tháng (trưởng phòng nhân sự, trung vị theo báo cáo TopCV 2025–2026)",
          "source": "https://www.topcv.vn/muc-luong-nganh-nhan-su"
        }
      },
      "outlook": "Triển vọng: BLS dự báo +6% giai đoạn 2025–2035; đây là vị trí quản lý, thường cần nhiều năm kinh nghiệm.",
      "shortage": []
    },
    {
      "id": "purchasing-agent",
      "name": "Chuyên viên mua hàng – thu mua",
      "nameEn": "Buyer / Purchasing Agent",
      "description": "Tìm kiếm, đánh giá nhà cung cấp trong và ngoài nước, đàm phán giá và hợp đồng, theo dõi đơn hàng nhập khẩu – xuất khẩu.",
      "majorIds": [
        "logistics",
        "intl-business",
        "business"
      ],
      "salary": {
        "my": {
          "value": 77710,
          "currency": "USD",
          "source": "https://www.bls.gov/ooh/business-and-financial/purchasing-managers-buyers-and-purchasing-agents.htm",
          "year": 2025,
          "note": "Buyers and purchasing agents (trung vị cả nhóm gồm quản lý mua hàng: 81.670 USD)"
        },
        "uc": {
          "value": 80756,
          "weekly": 1553,
          "currency": "AUD",
          "source": "https://www.jobsandskills.gov.au/data/occupation-and-industry-profiles/occupations-anzsco/5911-purchasing-and-supply-logistics-clerks",
          "year": 2025,
          "note": "ANZSCO 5911 (Purchasing and Supply Logistics Clerks, gồm Purchasing Officer)"
        },
        "canada": {
          "value": 70317,
          "hourly": 36.06,
          "currency": "CAD",
          "source": "https://www.jobbank.gc.ca/marketreport/wages-occupation/553/ca",
          "year": 2024,
          "note": "NOC 12102 (Procurement and purchasing agents and officers)"
        },
        "anh": {
          "value": 37306,
          "currency": "GBP",
          "source": "https://payprecision.co.uk/salaries/by-occupation/",
          "year": 2025,
          "note": "ONS ASHE 2025 tạm tính, SOC 3551 (Buyers and procurement officers)"
        },
        "vn": {
          "range": "10–15 triệu VNĐ/tháng (nhân viên thu mua, trung bình ~12,5 triệu)",
          "source": "https://www.topcv.vn/tra-cuu-muc-luong-tai-viet-nam/nhan-vien-thu-mua-mua-hang"
        }
      },
      "outlook": "Triển vọng: BLS dự báo +6% giai đoạn 2025–2035 (nhóm Purchasing managers, buyers and purchasing agents).",
      "shortage": []
    },
    {
      "id": "sales-manager",
      "name": "Quản lý kinh doanh",
      "nameEn": "Sales Manager",
      "description": "Xây dựng chiến lược bán hàng, quản lý đội ngũ kinh doanh, phát triển khách hàng và thị trường mới trong và ngoài nước.",
      "majorIds": [
        "intl-business",
        "marketing",
        "business"
      ],
      "salary": {
        "my": {
          "value": 148270,
          "currency": "USD",
          "source": "https://www.bls.gov/ooh/management/sales-managers.htm",
          "year": 2025
        },
        "uc": {
          "value": 139204,
          "weekly": 2677,
          "currency": "AUD",
          "source": "https://www.jobsandskills.gov.au/data/occupation-and-industry-profiles/occupations-anzsco/1311-advertising-public-relations-and-sales-manager",
          "year": 2025,
          "note": "ANZSCO 1311 (Advertising, Public Relations and Sales Managers) – nhóm rộng; JSA không công bố riêng 131112 Sales and Marketing Managers"
        },
        "canada": {
          "value": 117195,
          "hourly": 60.1,
          "currency": "CAD",
          "source": "https://www.jobbank.gc.ca/marketreport/wages-occupation/26635/ca",
          "year": 2024,
          "note": "NOC 60010 (Corporate sales managers)"
        },
        "anh": {
          "value": 57625,
          "currency": "GBP",
          "source": "https://payprecision.co.uk/salaries/by-occupation/",
          "year": 2025,
          "note": "ONS ASHE 2025 tạm tính, SOC 3556 (Sales accounts and business development managers)"
        },
        "vn": {
          "range": "trung bình ~25 triệu VNĐ/tháng (trưởng phòng kinh doanh, có thể tới 90 triệu)",
          "source": "https://www.topcv.vn/truong-phong-kinh-doanh-la-gi"
        }
      },
      "outlook": "Triển vọng: BLS dự báo +4% giai đoạn 2025–2035; đây là vị trí quản lý, thường thăng tiến từ nhân viên kinh doanh.",
      "shortage": []
    }
  ],
  "checklists": {
    "my": [
      {
        "id": "my-passport",
        "step": "Chuẩn bị",
        "title": "Hộ chiếu còn hạn",
        "detail": "Hộ chiếu phổ thông còn hạn ít nhất 6 tháng sau ngày dự kiến nhập cảnh Mỹ. Làm sớm tại Cục Quản lý Xuất nhập cảnh hoặc qua Cổng Dịch vụ công."
      },
      {
        "id": "my-transcript",
        "step": "Chuẩn bị",
        "title": "Học bạ THPT và bản dịch",
        "detail": "Học bạ đủ 4 năm lớp 9–12: trường Mỹ tính bậc trung học là 4 năm nên cần cả học bạ lớp 9 (dù ở Việt Nam lớp 9 thuộc THCS), thiếu lớp 9 hồ sơ dễ bị coi là chưa đủ. Kèm bằng/giấy chứng nhận tốt nghiệp tạm thời; dịch thuật công chứng sang tiếng Anh. Nhiều trường yêu cầu trường THPT gửi trực tiếp (qua Common App)."
      },
      {
        "id": "my-english",
        "step": "Chuẩn bị",
        "title": "Chứng chỉ tiếng Anh",
        "detail": "IELTS Academic, TOEFL iBT hoặc Duolingo English Test. Mức tối thiểu tùy trường (ví dụ UW 6.0, Penn State 6.5, MIT 7.0). Lưu ý: TOEFL thi từ 21/1/2026 dùng thang điểm 1–6 mới."
      },
      {
        "id": "my-tests",
        "step": "Chuẩn bị",
        "title": "SAT/ACT (nếu trường yêu cầu)",
        "detail": "Nhiều trường top đã yêu cầu nộp lại SAT/ACT (ví dụ MIT). Kiểm tra chính sách test-required/test-optional của từng trường."
      },
      {
        "id": "my-essay",
        "step": "Nộp hồ sơ trường",
        "title": "Bài luận và hoạt động ngoại khóa",
        "detail": "Bài luận chính Common App (tối đa 650 từ) và các bài luận phụ của trường; danh sách tối đa 10 hoạt động, giải thưởng."
      },
      {
        "id": "my-recs",
        "step": "Nộp hồ sơ trường",
        "title": "Thư giới thiệu",
        "detail": "Thường 1 thư của cố vấn/giáo viên chủ nhiệm (counselor) và 2 thư của giáo viên bộ môn, kèm School Report."
      },
      {
        "id": "my-apply",
        "step": "Nộp hồ sơ trường",
        "title": "Nộp đơn và lệ phí",
        "detail": "Nộp qua Common App hoặc cổng riêng của trường; hạn Early thường 1/11, Regular 1/1–15/1. Xin miễn lệ phí nếu đủ điều kiện."
      },
      {
        "id": "my-finaid",
        "step": "Nộp hồ sơ trường",
        "title": "Hồ sơ tài chính / học bổng",
        "detail": "Nếu xin hỗ trợ tài chính: CSS Profile (và/hoặc mẫu riêng như ISFAA) cùng thời hạn nộp hồ sơ. Chuẩn bị sao kê/xác nhận số dư, giấy tờ thu nhập của phụ huynh."
      },
      {
        "id": "my-i20",
        "step": "Sau khi có thư mời",
        "title": "Xác nhận nhập học và nhận I-20",
        "detail": "Đặt cọc giữ chỗ (enrollment deposit), gửi chứng minh tài chính để trường cấp Form I-20 (ghi tổng chi phí 1 năm)."
      },
      {
        "id": "my-sevis",
        "step": "Visa",
        "title": "Đóng phí SEVIS I-901",
        "detail": "Đóng phí SEVIS I-901 (350 USD cho F-1) tại fmjfee.com trước khi phỏng vấn; lưu biên nhận."
      },
      {
        "id": "my-ds160",
        "step": "Visa",
        "title": "Khai DS-160 và đặt lịch phỏng vấn",
        "detail": "Khai DS-160 trực tuyến, đóng phí xin visa (MRV, 185 USD), đặt lịch phỏng vấn tại Hà Nội hoặc TP.HCM. Từ 2025, người xin visa F/M/J được yêu cầu để chế độ công khai các tài khoản mạng xã hội."
      },
      {
        "id": "my-interview",
        "step": "Visa",
        "title": "Phỏng vấn visa F-1",
        "detail": "Mang hộ chiếu, I-20 đã ký, xác nhận DS-160, biên nhận SEVIS, chứng minh tài chính, học bạ, chứng chỉ. Chuẩn bị giải thích rõ kế hoạch học tập và ràng buộc với Việt Nam."
      },
      {
        "id": "my-health",
        "step": "Trước khi bay",
        "title": "Tiêm chủng và bảo hiểm",
        "detail": "Hoàn tất mẫu sức khỏe/tiêm chủng theo yêu cầu của trường (MMR, viêm màng não…); đăng ký bảo hiểm y tế của trường hoặc bảo hiểm tương đương được chấp nhận."
      },
      {
        "id": "my-arrival",
        "step": "Trước khi bay",
        "title": "Nhà ở, vé máy bay và nhập cảnh",
        "detail": "Đăng ký ký túc xá, mua vé đến không sớm hơn 30 ngày trước ngày bắt đầu ghi trên I-20, mang giấy tờ gốc trong hành lý xách tay; tham dự định hướng sinh viên quốc tế."
      }
    ],
    "uc": [
      {
        "id": "uc-passport",
        "step": "Chuẩn bị",
        "title": "Hộ chiếu còn hạn",
        "detail": "Hộ chiếu còn hạn suốt thời gian dự kiến học tập càng tốt; cần cho cả hồ sơ trường và visa."
      },
      {
        "id": "uc-transcript",
        "step": "Chuẩn bị",
        "title": "Học bạ, bằng tốt nghiệp và bản dịch",
        "detail": "Học bạ THPT, bằng/giấy chứng nhận tốt nghiệp, kết quả thi tốt nghiệp; dịch thuật công chứng. Học sinh vừa hết lớp 11/12 có thể cần học Foundation tùy trường."
      },
      {
        "id": "uc-english",
        "step": "Chuẩn bị",
        "title": "Chứng chỉ tiếng Anh",
        "detail": "IELTS Academic/PTE/TOEFL theo yêu cầu của trường (thường 6.0–6.5, Điều dưỡng 7.0 mỗi kỹ năng). Bộ Nội vụ Úc cũng có mức tiếng Anh tối thiểu cho visa 500."
      },
      {
        "id": "uc-apply",
        "step": "Nộp hồ sơ trường",
        "title": "Nộp hồ sơ trực tiếp hoặc qua đại diện",
        "detail": "Nộp online trên cổng của trường hoặc qua đại diện tuyển sinh được ủy quyền; kèm CV/bài luận nếu ngành yêu cầu (ví dụ portfolio cho Thiết kế)."
      },
      {
        "id": "uc-gs",
        "step": "Nộp hồ sơ trường",
        "title": "Đánh giá Genuine Student của trường",
        "detail": "Nhiều trường kiểm tra mục đích du học, khả năng tài chính và lịch sử học tập trước khi cấp thư mời chính thức."
      },
      {
        "id": "uc-offer",
        "step": "Sau khi có thư mời",
        "title": "Chấp nhận thư mời và đóng cọc",
        "detail": "Ký chấp nhận offer, đóng học phí đặt cọc (ví dụ Melbourne yêu cầu 17.000 AUD với cử nhân quốc tế) để nhận CoE."
      },
      {
        "id": "uc-oshc",
        "step": "Sau khi có thư mời",
        "title": "Mua bảo hiểm OSHC",
        "detail": "Bảo hiểm y tế sinh viên quốc tế (OSHC) bắt buộc cho toàn bộ thời gian visa; thường mua qua trường."
      },
      {
        "id": "uc-coe",
        "step": "Sau khi có thư mời",
        "title": "Nhận Confirmation of Enrolment (CoE)",
        "detail": "CoE là giấy tờ bắt buộc để nộp visa 500."
      },
      {
        "id": "uc-finance",
        "step": "Visa",
        "title": "Chứng minh tài chính",
        "detail": "Tối thiểu 29.710 AUD sinh hoạt phí/12 tháng + học phí 1 năm + chi phí đi lại (hoặc chứng minh thu nhập cha mẹ theo quy định). Chuẩn bị sổ tiết kiệm, xác nhận thu nhập."
      },
      {
        "id": "uc-visa",
        "step": "Visa",
        "title": "Nộp visa 500 qua ImmiAccount",
        "detail": "Nộp online, đóng phí visa (từ 1/7/2025 là 2.000 AUD; kiểm tra mức hiện hành), trả lời các câu hỏi Genuine Student, nộp hồ sơ tài chính, tiếng Anh, CoE, OSHC."
      },
      {
        "id": "uc-bio",
        "step": "Visa",
        "title": "Sinh trắc học và khám sức khỏe",
        "detail": "Lấy sinh trắc học tại trung tâm VFS và khám sức khỏe tại phòng khám được Bộ Nội vụ Úc chỉ định khi được yêu cầu."
      },
      {
        "id": "uc-arrival",
        "step": "Trước khi bay",
        "title": "Chỗ ở, vé máy bay, định hướng",
        "detail": "Đặt chỗ ở (ký túc xá/homestay), mua vé, mang bản gốc giấy tờ; tham dự tuần định hướng (O-Week) và học về quyền lợi làm thêm 48 giờ/2 tuần."
      }
    ],
    "canada": [
      {
        "id": "ca-passport",
        "step": "Chuẩn bị",
        "title": "Hộ chiếu còn hạn",
        "detail": "Thời hạn study permit không vượt quá thời hạn hộ chiếu – nên có hộ chiếu còn hạn dài."
      },
      {
        "id": "ca-transcript",
        "step": "Chuẩn bị",
        "title": "Học bạ THPT và bản dịch",
        "detail": "Học bạ lớp 10–12 (một số trường cần cả lớp 9), kết quả học kỳ gần nhất; dịch thuật công chứng. Một số trường yêu cầu bảng điểm gửi trực tiếp."
      },
      {
        "id": "ca-english",
        "step": "Chuẩn bị",
        "title": "Chứng chỉ tiếng Anh",
        "detail": "IELTS Academic (thường 6.5, không kỹ năng nào dưới 6.0), TOEFL hoặc Duolingo theo yêu cầu từng trường."
      },
      {
        "id": "ca-apply",
        "step": "Nộp hồ sơ trường",
        "title": "Nộp đơn qua OUAC hoặc cổng của trường",
        "detail": "Ontario: OUAC mẫu 105 (U of T, TMU, Guelph); British Columbia: cổng UBC hoặc EducationPlannerBC (SFU). Hạn thường từ tháng 1 đến tháng 2."
      },
      {
        "id": "ca-supp",
        "step": "Nộp hồ sơ trường",
        "title": "Hồ sơ bổ sung",
        "detail": "Personal Profile (UBC), bài luận/video (một số ngành U of T), portfolio cho Thiết kế, thư giới thiệu nếu được yêu cầu."
      },
      {
        "id": "ca-scholar",
        "step": "Nộp hồ sơ trường",
        "title": "Đơn học bổng",
        "detail": "Nộp riêng nếu cần (ví dụ Lester B. Pearson cần trường THPT đề cử; SFU USES hạn 15/12; Karen McKellin của UBC)."
      },
      {
        "id": "ca-loa",
        "step": "Sau khi có thư mời",
        "title": "Nhận LOA và đóng cọc",
        "detail": "Chấp nhận offer, đóng cọc học phí để nhận Letter of Acceptance (LOA)."
      },
      {
        "id": "ca-pal",
        "step": "Sau khi có thư mời",
        "title": "Thư chứng thực tỉnh bang (PAL/TAL)",
        "detail": "Đa số sinh viên cử nhân cần PAL/TAL do tỉnh bang cấp (trường thường tự xin và gửi cùng LOA) – bắt buộc để nộp study permit."
      },
      {
        "id": "ca-funds",
        "step": "Visa",
        "title": "Chứng minh tài chính",
        "detail": "Học phí năm đầu + 23.448 CAD sinh hoạt phí (hồ sơ từ 1/9/2026, ngoài Quebec) + chi phí đi lại. Có thể dùng GIC, sổ tiết kiệm, khoản vay, học bổng."
      },
      {
        "id": "ca-permit",
        "step": "Visa",
        "title": "Nộp study permit online",
        "detail": "Nộp qua tài khoản IRCC: LOA, PAL/TAL, chứng minh tài chính, kế hoạch học tập (study plan), hộ chiếu; đóng phí study permit và sinh trắc học."
      },
      {
        "id": "ca-bio",
        "step": "Visa",
        "title": "Sinh trắc học và khám sức khỏe",
        "detail": "Lấy vân tay, ảnh tại VFS (Hà Nội/TP.HCM); khám sức khỏe tại phòng khám chỉ định (panel physician) theo yêu cầu."
      },
      {
        "id": "ca-arrival",
        "step": "Trước khi bay",
        "title": "Chỗ ở, bảo hiểm, nhập cảnh",
        "detail": "Đặt ký túc xá, đăng ký bảo hiểm (Ontario: UHIP; BC: bảo hiểm tạm thời rồi MSP), mang Port of Entry Letter, LOA và bằng chứng tài chính khi nhập cảnh để nhận study permit."
      }
    ],
    "anh": [
      {
        "id": "uk-passport",
        "step": "Chuẩn bị",
        "title": "Hộ chiếu còn hạn",
        "detail": "Hộ chiếu còn hạn; số hộ chiếu trên CAS phải khớp với hộ chiếu dùng xin visa."
      },
      {
        "id": "uk-transcript",
        "step": "Chuẩn bị",
        "title": "Học bạ, bằng tốt nghiệp và dự đoán điểm",
        "detail": "Học bạ THPT và bản dịch. Bằng THPT Việt Nam thường cần thêm Foundation Year hoặc A-Level/IB với trường top; trường cần điểm dự đoán (predicted grades) từ giáo viên."
      },
      {
        "id": "uk-english",
        "step": "Chuẩn bị",
        "title": "Chứng chỉ tiếng Anh (IELTS for UKVI nếu cần)",
        "detail": "IELTS Academic thường 6.0–6.5 tùy ngành; nếu học khóa dự bị/tiếng Anh tại trường cần thi IELTS for UKVI."
      },
      {
        "id": "uk-ps",
        "step": "Nộp hồ sơ trường",
        "title": "Personal Statement",
        "detail": "Từ chu kỳ nhập học 2026, UCAS dùng mẫu 3 câu hỏi có hướng dẫn (tổng tối đa 4.000 ký tự) thay cho bài luận tự do."
      },
      {
        "id": "uk-ref",
        "step": "Nộp hồ sơ trường",
        "title": "Thư giới thiệu (reference)",
        "detail": "1 thư giới thiệu học thuật của giáo viên/trường, nộp trực tiếp trong hệ thống UCAS."
      },
      {
        "id": "uk-ucas",
        "step": "Nộp hồ sơ trường",
        "title": "Nộp hồ sơ UCAS",
        "detail": "Chọn tối đa 5 ngành/trường, đóng lệ phí UCAS; hạn chung thường cuối tháng 1 (Oxbridge, Y khoa: giữa tháng 10)."
      },
      {
        "id": "uk-offer",
        "step": "Sau khi có thư mời",
        "title": "Chọn Firm/Insurance và đáp ứng điều kiện",
        "detail": "Chọn trường chính (firm) và dự phòng (insurance); hoàn thành điều kiện của offer có điều kiện (điểm, IELTS)."
      },
      {
        "id": "uk-cas",
        "step": "Sau khi có thư mời",
        "title": "Đóng cọc và nhận CAS",
        "detail": "Đóng cọc học phí, nộp giấy tờ để trường cấp CAS (Confirmation of Acceptance for Studies)."
      },
      {
        "id": "uk-funds",
        "step": "Visa",
        "title": "Chứng minh tài chính 28 ngày",
        "detail": "Học phí năm đầu còn phải trả + sinh hoạt phí 9 tháng (hồ sơ từ 30/11/2026: 1.570 GBP/tháng tại London, 1.203 GBP/tháng nơi khác). Tiền phải nằm trong tài khoản đủ 28 ngày liên tục."
      },
      {
        "id": "uk-tb",
        "step": "Visa",
        "title": "Xét nghiệm lao (TB test)",
        "detail": "Người Việt Nam xin visa trên 6 tháng phải xét nghiệm lao tại phòng khám được Home Office chỉ định."
      },
      {
        "id": "uk-visa",
        "step": "Visa",
        "title": "Nộp Student visa và phí IHS",
        "detail": "Nộp online trên GOV.UK, đóng phí visa và phụ phí y tế IHS, lấy sinh trắc học tại VFS; nhận eVisa (tài khoản UKVI)."
      },
      {
        "id": "uk-arrival",
        "step": "Trước khi bay",
        "title": "Chỗ ở, vé máy bay, đăng ký GP",
        "detail": "Đặt ký túc xá, mua vé (có thể vào Anh tối đa 1 tuần trước khóa học nếu khóa dưới 6 tháng, 1 tháng nếu khóa dài hơn), đăng ký bác sĩ gia đình (GP) sau khi nhập học."
      }
    ]
  }
};
