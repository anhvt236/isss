// Trợ lý tư vấn theo kịch bản: hỏi sở thích, ngân sách, IELTS, quốc gia → gợi ý ngành và trường từ dữ liệu ISSS
(function () {
  'use strict';
  const I = window.ISSS;
  if (!I) return;
  const { D, esc } = I;

  const fab = document.getElementById('chat-fab');
  const panel = document.getElementById('chat');
  const body = document.getElementById('chat-body');
  const form = document.getElementById('chat-form');
  const input = document.getElementById('chat-text');

  const INTERESTS = [
    { id: 'tech', label: '💻 Máy tính & công nghệ', kw: ['máy tính', 'phần mềm', 'dữ liệu', 'công nghệ thông tin', 'computer', 'data', 'software', 'information', 'trí tuệ nhân tạo', 'artificial', 'an ninh mạng', 'cyber'] },
    { id: 'biz', label: '💼 Kinh doanh & tài chính', kw: ['kinh doanh', 'tài chính', 'kế toán', 'marketing', 'kinh tế', 'business', 'finance', 'account', 'econom', 'logistics', 'chuỗi cung ứng', 'supply chain', 'nhân sự', 'human resource'] },
    { id: 'health', label: '🩺 Sức khỏe & con người', kw: ['điều dưỡng', 'y tế', 'y khoa', 'sức khỏe', 'nursing', 'health', 'medic'] },
    { id: 'eng', label: '⚙️ Kỹ thuật & chế tạo', kw: ['kỹ thuật', 'engineering', 'kiến trúc', 'architecture'] },
    { id: 'creative', label: '🎨 Sáng tạo & truyền thông', kw: ['thiết kế', 'truyền thông', 'design', 'media', 'communication', 'kiến trúc', 'architecture'] },
    { id: 'service', label: '🏨 Dịch vụ & du lịch', kw: ['khách sạn', 'du lịch', 'hospitality', 'tourism'] }
  ];
  const BUDGETS = [
    { label: 'Dưới 600 triệu', max: 6e8 },
    { label: '600 triệu – 1 tỷ', max: 1e9 },
    { label: 'Trên 1 tỷ', max: Infinity },
    { label: 'Chưa rõ', max: Infinity }
  ];
  const IELTS = [
    { label: 'Chưa thi / dưới 6.0', v: 5.5 },
    { label: '6.0 – 6.5', v: 6.5 },
    { label: '7.0 trở lên', v: 7.5 }
  ];

  let state = {};
  let started = false;

  let opener = null;   // nút đã mở khung chat, để trả focus về khi đóng
  function open(from) {
    opener = from instanceof HTMLElement ? from : fab;
    panel.hidden = false;
    fab.hidden = true;
    if (!started) { started = true; greet(); }
    input.focus();
  }
  function close() {
    panel.hidden = true;
    fab.hidden = false;
    (opener && document.contains(opener) && !opener.hidden ? opener : fab).focus();
  }
  fab.addEventListener('click', () => open(fab));
  document.getElementById('chat-close').addEventListener('click', close);
  document.addEventListener('click', e => { const b = e.target.closest('[data-open-chat]'); if (b) open(b); });
  // Esc để đóng; Tab/Shift+Tab chỉ đi vòng trong khung chat
  panel.addEventListener('keydown', e => {
    if (e.key === 'Escape') { e.preventDefault(); close(); return; }
    if (e.key !== 'Tab') return;
    const items = [...panel.querySelectorAll('button, input, a[href]')].filter(el => !el.disabled && el.offsetParent !== null);
    if (!items.length) return;
    const first = items[0], last = items[items.length - 1];
    if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
    else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
  });

  function say(html, who = 'bot') {
    const d = document.createElement('div');
    d.className = 'msg ' + who;
    d.innerHTML = I.flagify(html);
    body.appendChild(d);
    body.scrollTop = body.scrollHeight;
    return d;
  }
  function quick(options) {
    const d = document.createElement('div');
    d.className = 'quick';
    options.forEach(([label, fn]) => {
      const b = document.createElement('button');
      b.type = 'button';
      b.innerHTML = I.flagify(esc(label));
      b.addEventListener('click', () => {
        d.remove();
        say(esc(label), 'user');
        setTimeout(fn, 250);
      });
      d.appendChild(b);
    });
    body.appendChild(d);
    body.scrollTop = body.scrollHeight;
  }
  const clearQuick = () => body.querySelectorAll('.quick').forEach(q => q.remove());

  function mainMenu() {
    quick([
      ['🎯 Gợi ý ngành & trường cho tôi', startQuiz],
      ['🌏 So sánh 4 nước', compareCountries],
      ['📄 Hồ sơ cần những gì?', docsInfo],
      ['🔎 Kiểm tra ở nguồn chính thức', () => { say('Mình mở trang Nguồn tham khảo: các cổng thông tin chính phủ, công cụ so sánh trường và bảng xếp hạng để bạn tự đối chiếu số liệu. <a href="#/nguon">Đến trang ›</a>'); location.hash = '#/nguon'; mainMenu(); }],
      ['❓ Câu hỏi thường gặp',() => { say('Mình mở trang Câu hỏi thường gặp cho bạn. <a href="#/hoi-dap">Đến trang ›</a>'); location.hash = '#/hoi-dap'; mainMenu(); }],
      ['📅 Đặt lịch tư vấn', () => { say('Mình mở trang đặt lịch cho bạn nhé. <a href="#/tu-van">Đến trang Tư vấn ›</a>'); location.hash = '#/tu-van'; }]
    ]);
  }

  function greet() {
    say('Xin chào! 👋 Mình là trợ lý ISSS. Mình có thể gợi ý ngành và trường phù hợp với bạn, hoặc trả lời các câu hỏi về học phí, visa, IELTS, học bổng, việc làm.');
    mainMenu();
  }

  /* ----- Luồng gợi ý ----- */
  function startQuiz() {
    state = {};
    say('Câu 1/4: Bạn thích lĩnh vực nào nhất?');
    quick(INTERESTS.map(x => [x.label, () => { state.interest = x; askBudget(); }]));
  }
  function askBudget() {
    say('Câu 2/4: Ngân sách học phí mỗi năm của gia đình khoảng bao nhiêu? (chưa gồm sinh hoạt phí)');
    quick(BUDGETS.map(x => [x.label, () => { state.budget = x; askIelts(); }]));
  }
  function askIelts() {
    say('Câu 3/4: Điểm IELTS hiện tại (hoặc dự kiến) của bạn?');
    quick(IELTS.map(x => [x.label, () => { state.ielts = x; askCountry(); }]));
  }
  function askCountry() {
    say('Câu 4/4: Bạn ưu tiên quốc gia nào?');
    quick([...D.countries.map(c => [`${c.flag} ${c.name}`, () => { state.country = c.id; recommend(); }]), ['🤷 Chưa chọn', () => { state.country = ''; recommend(); }]]);
  }

  function matchMajors(interest) {
    return D.majors.filter(m => {
      const t = (m.name + ' ' + (m.nameEn || '') + ' ' + (m.group || '')).toLowerCase();
      return interest.kw.some(k => t.includes(k));
    });
  }

  function recommend() {
    const majors = matchMajors(state.interest);
    const majorIds = majors.map(m => m.id);
    const scored = D.schools
      .filter(s => (!state.country || s.countryId === state.country) && (!majorIds.length || (s.majorIds || []).some(id => majorIds.includes(id))))
      .map(s => {
        const fee = s.tuition ? I.toVND(s.tuition.min, s.tuition.currency) : Infinity;
        const okFee = fee <= state.budget.max;
        const okIelts = (s.ieltsMin || 0) <= state.ielts.v;
        return { s, fee, okFee, okIelts, score: (okFee ? 2 : 0) + (okIelts ? 1 : 0) - (s.qsRank || 999) / 2000 };
      })
      .sort((a, b) => b.score - a.score);
    const top = scored.slice(0, 3);
    state.top = top.map(x => x.s.id);

    let html = `<strong>Ngành gợi ý cho bạn:</strong>`;
    html += majors.slice(0, 3).map(m => {
      const c = I.careersForMajor(m)[0];
      const sal = c && c.salary && (c.salary[state.country] || c.salary.my);
      return `<div class="rec"><a href="#/nganh/${m.id}${state.country ? '?country=' + state.country : ''}">${m.icon || ''} ${esc(m.name)}</a>${c ? `<br><span class="small">→ ${esc(c.name)}${sal && sal.value ? `: ~${I.money(sal.value, sal.currency)}/năm` : ''}</span>` : ''}</div>`;
    }).join('') || '<div class="rec">Chưa có ngành khớp, bạn xem thêm <a href="#/nganh">danh sách ngành</a>.</div>';
    say(html);

    if (top.length) {
      let h2 = `<strong>Trường phù hợp${state.country ? ' tại ' + esc(I.cname(state.country)) : ''}:</strong>`;
      h2 += top.map(({ s, okFee, okIelts }) => `<div class="rec"><a href="#/truong/${s.id}">${I.flag(s.countryId)} ${esc(s.name)}</a><br><span class="small">QS #${I.rankText(s)} · ${esc(I.tuitionVND(s))} · IELTS ${s.ieltsMin ?? '—'}${!okFee ? ' · ⚠️ vượt ngân sách' : ''}${!okIelts ? ' · ⚠️ cần nâng IELTS' : ''}</span></div>`).join('');
      say(h2);
    } else {
      say('Chưa tìm được trường khớp tất cả tiêu chí. Bạn thử chọn "Chưa chọn" quốc gia hoặc xem <a href="#/truong">danh sách trường</a>.');
    }
    if (state.ielts.v < 6) say('💡 IELTS dưới 6.0: bạn có thể vào chương trình Dự bị (Foundation) hoặc Pathway của trường, hoặc ôn thêm 3–6 tháng trước khi nộp hồ sơ.');
    if (state.budget.max <= 6e8) say('💡 Với ngân sách này, hãy ưu tiên trường có học bổng và cân nhắc Canada/Úc với các trường học phí vừa phải. Tư vấn viên có thể giúp săn học bổng.');

    quick([
      ...(top.length ? [['♡ Lưu các trường này vào hồ sơ', saveTop]] : []),
      ['📅 Đặt lịch tư vấn', () => { location.hash = '#/tu-van?' + new URLSearchParams({ country: state.country || '', major: majorIds[0] || '' }); say('Đã mở trang tư vấn với nguyện vọng của bạn điền sẵn.'); mainMenu(); }],
      ['🔁 Làm lại', startQuiz]
    ]);
  }

  function saveTop() {
    const list = I.getShortlist();
    let n = 0;
    state.top.forEach(id => { if (!list.includes(id)) { I.toggleShortlist(id); n++; } });
    say(`Đã lưu ${n || 'các'} trường vào <a href="#/ho-so">Hồ sơ của tôi</a>. Ở đó có checklist giấy tờ theo từng nước để bạn chuẩn bị.`);
    mainMenu();
  }

  function compareCountries() {
    say(D.countries.map(c => {
      const fees = D.schools.filter(s => s.countryId === c.id && s.tuition).map(s => I.toVND(s.tuition.min, s.tuition.currency));
      const range = fees.length ? `${I.vndShort(Math.min(...fees))} – ${I.vndShort(Math.max(...fees))}` : '—';
      return `<div class="rec"><strong>${c.flag} ${esc(c.name)}</strong><br><span class="small">Học phí từ: ${range}/năm<br>Ở lại làm việc: ${esc(c.postStudyWork)}</span><br><a class="small" href="#/quoc-gia/${c.id}">Chi tiết ›</a></div>`;
    }).join(''));
    mainMenu();
  }

  function docsInfo() {
    say('Mỗi nước yêu cầu giấy tờ hơi khác nhau. Nhìn chung bạn cần: hộ chiếu, học bạ & bằng THPT (dịch thuật), IELTS, bài luận/thư giới thiệu, chứng minh tài chính, rồi hồ sơ visa sau khi có thư mời.\n\nChecklist chi tiết từng nước, có đánh dấu tiến độ: <a href="#/ho-so">Hồ sơ của tôi ›</a>');
    mainMenu();
  }

  /* ----- Trả lời câu hỏi tự do theo từ khoá ----- */
  // Chữ thường, bỏ dấu, bỏ ký tự đặc biệt: "Học phí Úc?" và "hoc phi uc" đều thành "hoc phi uc"
  const norm = s => String(s).toLowerCase().normalize('NFD').replace(/\p{M}/gu, '').replace(/đ/g, 'd').replace(/[^\p{L}\p{N}]+/gu, ' ').trim();
  // Khớp nguyên từ/cụm từ để "anh" không khớp trong "thanh", "opt" không khớp trong "option"
  const hasWord = (t, w) => (' ' + t + ' ').includes(' ' + norm(w) + ' ');

  const COUNTRY_ALIAS = { my: ['mỹ', 'usa', 'hoa kỳ', 'america'], uc: ['úc', 'australia'], canada: ['canada'], anh: ['anh', 'uk', 'england', 'britain'] };
  function findCountry(t) {
    const s = (' ' + t + ' ').replace(/ tieng anh /g, ' ');
    return D.countries.find(c => (COUNTRY_ALIAS[c.id] || [c.name]).some(a => hasWord(s, a)));
  }

  // Cụm nhận diện trường: mã trường, tên đầy đủ và các cụm 1–3 từ chỉ có ở đúng một trường.
  // Cụm dùng chung ("london", "sydney", "state", "york"…) bị bỏ để "du học new york" không ra York University (Canada).
  const STOP = ['university', 'college', 'institute', 'technology', 'the', 'of', 'and', 'city', 'park'];
  const grams = (str, out) => {
    const w = norm(str).split(' ');
    for (let n = 1; n <= 3; n++) for (let i = 0; i + n <= w.length; i++) {
      const g = w.slice(i, i + n);
      if (g.every(x => STOP.includes(x)) || (n === 1 && g[0].length < 4)) continue;
      out.add(g.join(' '));
    }
    return out;
  };
  const owners = {};   // cụm trong tên trường → các trường có cụm đó
  const places = {};   // cụm trong tên trường + thành phố → các trường có cụm đó
  D.schools.forEach(s => {
    grams(s.name, new Set([s.id])).forEach(g => (owners[g] = owners[g] || new Set()).add(s));
    grams(s.city, grams(s.name, new Set())).forEach(g => (places[g] = places[g] || new Set()).add(s));
  });
  const SCHOOL_KEYS = D.schools.map(s => ({ s, keys: [norm(s.name), ...Object.keys(owners).filter(g => owners[g].size === 1 && owners[g].has(s))] }));
  // Cụm có ở nhiều trường nhưng cùng một nước ("london", "sydney", "toronto") → suy ra quốc gia
  const PLACE_COUNTRY = Object.fromEntries(Object.entries(places)
    .map(([g, ss]) => [g, new Set([...ss].map(s => s.countryId))])
    .filter(([g, cs]) => places[g].size > 1 && cs.size === 1)
    .map(([g, cs]) => [g, [...cs][0]]));
  const findPlaceCountry = t => { const g = Object.keys(PLACE_COUNTRY).find(k => hasWord(t, k)); return g && I.countryById[PLACE_COUNTRY[g]]; };
  function findSchool(t) {
    let best = null, len = 0;
    SCHOOL_KEYS.forEach(({ s, keys }) => keys.forEach(k => { if (k.length > len && hasWord(t, k)) { best = s; len = k.length; } }));
    return best;
  }
  const schoolInfo = s => `<strong>${I.flag(s.countryId)} ${esc(s.name)}</strong><br>QS #${I.rankText(s)}${s.theRank ? ` · THE #${esc(s.theRank)}` : ''} · ${esc(s.city)}<br>Học phí: ${esc(I.tuitionText(s))} (${esc(I.tuitionVND(s))})<br>IELTS tối thiểu: ${s.ieltsMin ?? '—'}<br><a href="#/truong/${s.id}">Xem chi tiết ›</a>`;

  /* ----- Nguồn tham khảo chính thức (js/resources.js) ----- */
  const RES = window.ISSS_RESOURCES || { items: [] };
  const resById = Object.fromEntries(RES.items.map(r => [r.id, r]));
  // Tên gọi người dùng hay gõ cho từng nguồn (đã bỏ dấu khi so khớp)
  const RES_ALIAS = {
    educationusa: ['educationusa', 'education usa'], scorecard: ['college scorecard', 'scorecard'], navigator: ['college navigator', 'nces'],
    sevp: ['sevp', 'study in the states'], commonapp: ['common app', 'commonapp'], bigfuture: ['bigfuture', 'big future', 'college board'],
    fulbright: ['fulbright'], studyaus: ['study australia'], cricos: ['cricos'], compared: ['compared', 'qilt'], teqsa: ['teqsa'],
    ausawards: ['australia awards'], educanada: ['educanada', 'edu canada'], dli: ['dli'], unicanada: ['universities canada'],
    ouac: ['ouac'], jobbank: ['job bank', 'jobbank'], ucas: ['ucas'], discoveruni: ['discover uni', 'discoveruni'], studyuk: ['study uk'],
    sponsors: ['register of student sponsors', 'student sponsor', 'sponsor'], chevening: ['chevening'],
    the: ['times higher education', 'xep hang the', 'bang the'], arwu: ['arwu', 'shanghai ranking', 'xep hang thuong hai'],
    usnews: ['us news', 'u s news'], ielts: ['ielts org'], khan: ['khan academy', 'khan'], mooc: ['edx', 'coursera', 'mooc'],
    onet: ['onet', 'o net'], bls: ['bls', 'occupational outlook'], congnhan: ['cong nhan van bang', 'thong tu 65']
  };
  // Danh sách "trường hợp lệ để xin visa" của từng nước
  const LEGAL = { my: 'sevp', uc: 'cricos', canada: 'dli', anh: 'sponsors' };
  const resLine = r => `<div class="rec"><a href="${esc(r.url)}" target="_blank" rel="noopener">${esc(r.name)} ↗</a> <span class="small">(${esc(r.org)})</span><br><span class="small">${esc(r.use)}</span>${r.tip ? `<br><span class="small">💡 ${esc(r.tip)}</span>` : ''}</div>`;

  function answerResources(t, has, c, school) {
    if (!RES.items.length) return false;
    const named = RES.items.filter(r => (RES_ALIAS[r.id] || []).some(a => hasWord(t, a)));
    if (named.length) {
      say(named.slice(0, 3).map(resLine).join('') + `<a class="small" href="#/nguon">Xem tất cả nguồn tham khảo ›</a>`);
      return true;
    }
    if (has('công nhận văn bằng', 'công nhận bằng', 'về nước', 'bằng có được công nhận')) {
      say(resLine(resById.congnhan));
      return true;
    }
    if (has('hợp lệ', 'lừa đảo', 'uy tín không', 'kiểm định', 'được công nhận', 'trường thật', 'trường ma')) {
      const ids = school ? [school.countryId] : c ? [c.id] : Object.keys(LEGAL);
      say(`Kiểm tra trường có trong danh sách chính thức được nhận sinh viên quốc tế trước khi đặt cọc:` +
        ids.map(id => resById[LEGAL[id]] && `<div class="rec">${I.flag(id)} <strong>${esc(I.cname(id))}:</strong> <a href="${esc(resById[LEGAL[id]].url)}" target="_blank" rel="noopener">${esc(resById[LEGAL[id]].name)} ↗</a><br><span class="small">${esc(resById[LEGAL[id]].tip)}</span></div>`).filter(Boolean).join('') +
        (school ? `<a class="small" href="#/truong/${school.id}">Cách tra ${esc(school.name)} trên nguồn chính thức ›</a>` : `<a class="small" href="#/nguon${c ? '?country=' + c.id : ''}">Xem nguồn tham khảo ›</a>`));
      return true;
    }
    if (has('nguồn', 'nguồn tham khảo', 'đối chiếu', 'kiểm tra lại', 'tin cậy', 'xếp hạng khác', 'bảng xếp hạng')) {
      const list = RES.items.filter(r => c ? r.country === c.id : r.type === 'gov' || r.type === 'rank').slice(0, 4);
      say(`Số liệu ISSS lấy từ trang của trường và cơ quan nhà nước. Bạn có thể tự đối chiếu${c ? ' cho du học ' + esc(c.name) : ''} ở:` +
        list.map(resLine).join('') + `<a class="small" href="#/nguon${c ? '?country=' + c.id : ''}">Xem tất cả nguồn tham khảo ›</a>`);
      return true;
    }
    return false;
  }

  function answer(text) {
    const t = norm(text);
    const school = findSchool(t);
    // Hỏi "visa ở London" hay "làm thêm ở Melbourne" thì lấy quốc gia của trường được nhắc tới
    const c = findCountry(t) || (school && I.countryById[school.countryId]) || findPlaceCountry(t);
    const major = D.majors.find(m => hasWord(t, m.name) || (m.nameEn && hasWord(t, m.nameEn)));
    const career = D.careers.find(x => hasWord(t, x.name) || (x.nameEn && hasWord(t, x.nameEn)));
    const has = (...k) => k.some(w => hasWord(t, w));

    if (has('gợi ý', 'nên học', 'chọn ngành', 'không biết học')) return startQuiz();
    if (has('lộ trình', 'timeline', 'hạn nộp', 'khi nào nộp', 'deadline', 'kỳ nhập học')) {
      say(`Trang Lộ trình lập lịch ngược từ kỳ nhập học bạn chọn: khi nào thi IELTS, nộp hồ sơ, chứng minh tài chính, xin visa. <a href="#/lo-trinh${c ? '?country=' + c.id : ''}">Lập lộ trình${c ? ' du học ' + esc(c.name) : ''} ›</a>`);
      return;
    }
    if (has('đặt lịch', 'hẹn', 'gặp tư vấn')) { say('Bạn có thể chọn ngày giờ ngay tại <a href="#/tu-van">trang Tư vấn ›</a>'); return; }
    if (answerResources(t, has, c, school)) return;
    if (has('hồ sơ', 'giấy tờ', 'checklist')) return docsInfo();

    if (career && has('lương', 'thu nhập', 'salary')) {
      say(`<strong>${esc(career.name)}</strong> – lương trung vị/năm:` + D.countries.map(k => {
        const s = career.salary && career.salary[k.id];
        return s && s.value ? `<br>${k.flag} ${esc(k.name)}: ${I.money(s.value, s.currency)} (≈ ${I.vndShort(I.toVND(s.value, s.currency))})` : '';
      }).join('') + `<br><a href="#/viec-lam/${career.id}">Xem chi tiết ›</a>`);
      return;
    }
    // Ý định (học phí, visa…) được xét trước; tên trường chỉ thu hẹp phạm vi câu trả lời
    if (has('học phí', 'chi phí', 'bao nhiêu tiền', 'tuition')) {
      if (school) { say(schoolInfo(school)); return; }
      const list = D.schools.filter(s => !c || s.countryId === c.id).filter(s => s.tuition);
      say(`Học phí cử nhân/năm${c ? ' tại ' + esc(c.name) : ''}:` + list.slice(0, 6).map(s => `<br>• <a href="#/truong/${s.id}">${esc(s.name)}</a>: ${esc(I.tuitionVND(s))}`).join('') + (c && c.livingCost ? `<br><br>Sinh hoạt phí: ${I.money(c.livingCost.min, c.currency)}${c.livingCost.max ? ' – ' + I.money(c.livingCost.max, c.currency) : ''}/năm.` : ''));
      return;
    }
    if (has('visa', 'thị thực')) {
      say((c ? [c] : D.countries).map(k => `${k.flag} <strong>${esc(k.name)}:</strong> ${esc(k.visa)}`).join('<br>'));
      return;
    }
    if (has('làm thêm', 'part-time', 'part time')) {
      say((c ? [c] : D.countries).map(k => `${k.flag} <strong>${esc(k.name)}:</strong> ${esc(k.workDuringStudy)}`).join('<br>'));
      return;
    }
    if (has('ở lại', 'định cư', 'sau khi tốt nghiệp', 'sau tốt nghiệp', 'opt', 'pgwp', 'graduate', '485')) {
      say((c ? [c] : D.countries).map(k => `${k.flag} <strong>${esc(k.name)}:</strong> ${esc(k.postStudyWork)}`).join('<br>'));
      return;
    }
    if (has('ielts', 'tiếng anh', 'toefl')) {
      if (school) { say(schoolInfo(school)); return; }
      const list = D.schools.filter(s => !c || s.countryId === c.id);
      const vals = list.map(s => s.ieltsMin).filter(Boolean);
      say(`IELTS tối thiểu bậc cử nhân${c ? ' tại ' + esc(c.name) : ''}: từ ${Math.min(...vals)} đến ${Math.max(...vals)}. Trường yêu cầu thấp nhất:` +
        list.slice().sort((a, b) => (a.ieltsMin || 0) - (b.ieltsMin || 0)).slice(0, 3).map(s => `<br>• <a href="#/truong/${s.id}">${esc(s.name)}</a>: ${s.ieltsMin}`).join('') +
        '<br>Chưa đủ điểm? Bạn có thể học chương trình Dự bị/Pathway.');
      return;
    }
    if (has('học bổng', 'scholarship')) {
      if (school) {
        const sc = school.scholarships || [];
        say(sc.length ? `Học bổng tại <strong>${esc(school.name)}</strong>:` + sc.map(x => `<br>• ${esc(x.name)} (${esc(x.value)})`).join('') + `<br><a href="#/truong/${school.id}">Xem chi tiết ›</a>`
          : esc(school.scholarshipNote || `Chưa có thông tin học bổng cho sinh viên quốc tế tại ${school.name}.`));
        return;
      }
      const list = D.schools.filter(s => (!c || s.countryId === c.id) && (s.scholarships || []).length);
      say('Một số học bổng cho sinh viên quốc tế:' + list.slice(0, 5).map(s => `<br>• <a href="#/truong/${s.id}">${esc(s.name)}</a>: ${esc(s.scholarships[0].name)} (${esc(s.scholarships[0].value)})`).join(''));
      return;
    }
    if (school) { say(schoolInfo(school)); return; }
    // Câu hỏi thường gặp: chọn câu có nhiều từ khoá khớp nhất
    const faq = (window.ISSS_FAQ || []).map((x, i) => ({ x, i, score: (x.kw || []).filter(k => hasWord(t, k)).length }))
      .filter(o => o.score).sort((a, b) => b.score - a.score)[0];
    if (faq) {
      let html = '';
      try { html = typeof faq.x.a === 'function' ? faq.x.a(I) : faq.x.a; } catch (e) { html = ''; }
      say(`<strong>${esc(faq.x.q)}</strong>${html.replace(/\n\s*/g, ' ')}<a href="#/hoi-dap?open=${faq.i}">Xem trong Câu hỏi thường gặp ›</a>`);
      return;
    }
    if (major) {
      const cs = I.careersForMajor(major);
      say(`<strong>${major.icon || ''} ${esc(major.name)}</strong><br>${esc(major.description)}<br>Nghề đầu ra: ${cs.map(x => esc(x.name)).join(', ') || '—'}<br>${I.schoolsForMajor(major.id).length} trường có đào tạo. <a href="#/nganh/${major.id}">Xem chi tiết ›</a>`);
      return;
    }
    if (c) {
      say(`${c.flag} <strong>Du học ${esc(c.name)}</strong><br>${esc(c.intro)}<br><a href="#/quoc-gia/${c.id}">Xem chi tiết ›</a>`);
      return;
    }
    say('Mình chưa hiểu rõ câu hỏi. Bạn có thể hỏi về <b>học phí</b>, <b>visa</b>, <b>IELTS</b>, <b>học bổng</b>, <b>làm thêm</b>, <b>ở lại làm việc</b>, tên trường, tên ngành hoặc "lương kỹ sư phần mềm". Hoặc chọn:');
    mainMenu();
  }

  form.addEventListener('submit', e => {
    e.preventDefault();
    const text = input.value.trim();
    if (!text) return;
    clearQuick();
    say(esc(text), 'user');
    input.value = '';
    setTimeout(() => answer(text), 250);
  });
})();
