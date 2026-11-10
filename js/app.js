(function () {
  'use strict';

  const D = window.ISSS_DATA;
  const app = document.getElementById('app');
  if (!D) {
    app.innerHTML = '<div class="empty"><div class="icon">⚠️</div><p>Chưa tải được dữ liệu (data/data.js).</p></div>';
    return;
  }

  // Tỷ giá tham khảo để quy đổi sang VNĐ (chỉ dùng để so sánh tương đối)
  const RATES = { USD: 26300, AUD: 17200, CAD: 18900, GBP: 35000, VND: 1 };
  const RATE_NOTE = 'Quy đổi VNĐ theo tỷ giá tham khảo (1 USD ≈ 26.300đ, 1 AUD ≈ 17.200đ, 1 CAD ≈ 18.900đ, 1 GBP ≈ 35.000đ), có thể chênh lệch.';

  const countryById = Object.fromEntries(D.countries.map(c => [c.id, c]));
  const schoolById = Object.fromEntries(D.schools.map(s => [s.id, s]));
  const majorById = Object.fromEntries(D.majors.map(m => [m.id, m]));
  const careerById = Object.fromEntries(D.careers.map(c => [c.id, c]));

  /* ---------- Helpers ---------- */
  const esc = s => String(s == null ? '' : s).replace(/[&<>"']/g, ch => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[ch]));
  const nf = new Intl.NumberFormat('vi-VN');
  const money = (v, cur) => v == null ? '—' : nf.format(v) + ' ' + cur;
  const toVND = (v, cur) => (v == null || !RATES[cur]) ? null : v * RATES[cur];
  function vndShort(x) {
    if (x == null) return '—';
    if (x >= 1e9) return (x / 1e9).toFixed(2).replace(/\.?0+$/, '').replace('.', ',') + ' tỷ';
    return nf.format(Math.round(x / 1e6)) + ' triệu';
  }
  const tuitionText = s => s.tuition ? money(s.tuition.min, s.tuition.currency) + (s.tuition.max && s.tuition.max !== s.tuition.min ? ' – ' + nf.format(s.tuition.max) + ' ' + s.tuition.currency : '') : '—';
  const tuitionVND = s => s.tuition ? '≈ ' + vndShort(toVND(s.tuition.min, s.tuition.currency)) + (s.tuition.max && s.tuition.max !== s.tuition.min ? ' – ' + vndShort(toVND(s.tuition.max, s.tuition.currency)) : '') + ' VNĐ/năm' : '';
  const flag = id => (countryById[id] || {}).flag || '';
  const cname = id => (countryById[id] || {}).name || id;
  // Windows không vẽ được cờ emoji (hiện thành "US", "AU") nên thay bằng ảnh SVG của Twemoji
  const flagify = html => html.replace(/[\u{1F1E6}-\u{1F1FF}]{2}/gu, f =>
    `<img class="flag-img" alt="${f}" src="https://cdn.jsdelivr.net/gh/jdecked/twemoji@15.1.0/assets/svg/${[...f].map(ch => ch.codePointAt(0).toString(16)).join('-')}.svg">`);
  const rankText = s => s.qsRankText || s.qsRank || '—';
  const theText = s => s.theRank || '—';
  // Ghi chú khi trường chỉ có chuyên ngành/minor thay vì bằng cử nhân riêng
  const majorNote = (s, mid) => (s.majorNotes || {})[mid] || '';
  const schoolsForMajor = mid => D.schools.filter(s => (s.majorIds || []).includes(mid));
  const careersForMajor = m => (m.careerIds || []).map(id => careerById[id]).filter(Boolean);
  const majorsForCareer = c => D.majors.filter(m => (m.careerIds || []).includes(c.id) || (c.majorIds || []).includes(m.id));

  const store = {
    get(key, def) {
      try { const v = localStorage.getItem('isss.' + key); return v ? JSON.parse(v) : def; } catch (e) { return def; }
    },
    set(key, val) {
      try { localStorage.setItem('isss.' + key, JSON.stringify(val)); } catch (e) { /* bỏ qua khi trình duyệt chặn lưu trữ */ }
    }
  };
  // Thông tin liên hệ (tên, SĐT, email) chỉ giữ trong phiên hiện tại để máy dùng chung không lộ cho người sau
  const session = {
    get(key, def) {
      try { const v = sessionStorage.getItem('isss.' + key); return v ? JSON.parse(v) : def; } catch (e) { return def; }
    },
    set(key, val) {
      try { sessionStorage.setItem('isss.' + key, JSON.stringify(val)); } catch (e) { /* bỏ qua */ }
    }
  };
  const CONTACT_FIELDS = ['role', 'name', 'phone', 'email', 'grade', 'year', 'ielts', 'gpa', 'budget'];
  // Bản lưu lâu dài của một đăng ký: chỉ những gì trang Hồ sơ cần hiển thị
  const leadSummary = l => ({ id: l.id, createdAt: l.createdAt, name: l.name, country: l.country, major: l.major, school: l.school, sync: l.sync });
  // Dọn dữ liệu cũ đã lưu đủ SĐT/email/ghi chú trước khi có quy tắc trên
  store.set('leads', store.get('leads', []).map(leadSummary));

  // Chỉ cho phép link http/https từ dữ liệu (chặn javascript:, data:…), trả về chuỗi đã escape để đặt vào href
  function safeUrl(u) {
    try {
      const url = new URL(String(u), location.href);
      return /^https?:$/.test(url.protocol) ? esc(url.href) : '#';
    } catch (e) { return '#'; }
  }
  // Dữ liệu là nguồn ngoài: cờ và icon được đặt thẳng vào HTML nên escape một lần khi tải
  D.countries.forEach(c => { c.flag = esc(c.flag || ''); });
  D.majors.forEach(m => { m.icon = esc(m.icon || ''); });

  function toast(msg) {
    const t = document.getElementById('toast');
    t.textContent = msg;
    t.hidden = false;
    clearTimeout(toast._t);
    toast._t = setTimeout(() => { t.hidden = true; }, 2600);
  }

  /* ---------- Danh sách trường đã lưu ---------- */
  const getShortlist = () => store.get('shortlist', []).filter(id => schoolById[id]);
  function toggleShortlist(id) {
    const list = getShortlist();
    const i = list.indexOf(id);
    if (i >= 0) list.splice(i, 1); else list.push(id);
    store.set('shortlist', list);
    updateBadge();
    toast(i >= 0 ? 'Đã bỏ khỏi danh sách nộp hồ sơ' : 'Đã thêm vào danh sách nộp hồ sơ');
    return i < 0;
  }
  function updateBadge() {
    const n = getShortlist().length;
    const b = document.getElementById('shortlist-count');
    b.textContent = n;
    b.hidden = n === 0;
  }
  const saveBtn = (id, cls = 'small') => {
    const saved = getShortlist().includes(id);
    return `<button class="btn ${cls} ${saved ? 'saved' : 'secondary'}" data-save="${esc(id)}">${saved ? '✓ Đã lưu' : '♡ Lưu trường'}</button>`;
  };
  document.addEventListener('click', e => {
    const b = e.target.closest('[data-save]');
    if (!b) return;
    const saved = toggleShortlist(b.dataset.save);
    b.classList.toggle('saved', saved);
    b.classList.toggle('secondary', !saved);
    b.textContent = saved ? '✓ Đã lưu' : '♡ Lưu trường';
    if (currentRoute === 'ho-so') render();
  });

  /* ---------- Danh sách so sánh (tối đa 3 trường) ---------- */
  const MAX_COMPARE = 3;
  const getCompare = () => store.get('compare', []).filter(id => schoolById[id]).slice(0, MAX_COMPARE);
  function toggleCompare(id) {
    const list = getCompare();
    const i = list.indexOf(id);
    if (i >= 0) list.splice(i, 1);
    else if (list.length >= MAX_COMPARE) { toast(`Chỉ so sánh tối đa ${MAX_COMPARE} trường. Bỏ bớt một trường trước.`); return null; }
    else list.push(id);
    store.set('compare', list);
    updateCompareTray();
    return i < 0;
  }
  const compareBtn = (id, cls = 'small') => {
    const on = getCompare().includes(id);
    return `<button class="btn ${cls} ${on ? 'saved' : 'secondary'}" data-compare="${esc(id)}">${on ? '✓ Đang so sánh' : '⇄ So sánh'}</button>`;
  };
  function updateCompareTray() {
    const tray = document.getElementById('compare-tray');
    const list = getCompare();
    tray.hidden = !list.length || currentRoute === 'so-sanh';
    tray.innerHTML = flagify(`<div class="container compare-tray-inner">
      <strong>So sánh (${list.length}/${MAX_COMPARE})</strong>
      <div class="chips">${list.map(id => `<span class="chip">${flag(schoolById[id].countryId)} ${esc(schoolById[id].name)} <button type="button" data-compare="${id}" aria-label="Bỏ ${esc(schoolById[id].name)}">✕</button></span>`).join('')}</div>
      ${list.length >= 2 ? `<a class="btn accent small" href="#/so-sanh">So sánh ngay ›</a>` : '<span class="muted small">Chọn thêm ít nhất 1 trường</span>'}
    </div>`);
  }
  document.addEventListener('click', e => {
    const b = e.target.closest('[data-compare]');
    if (!b) return;
    const on = toggleCompare(b.dataset.compare);
    if (on === null) return;
    if (currentRoute === 'so-sanh') { render(); return; }
    document.querySelectorAll(`.btn[data-compare="${CSS.escape(b.dataset.compare)}"]`).forEach(x => {
      x.classList.toggle('saved', on);
      x.classList.toggle('secondary', !on);
      x.textContent = on ? '✓ Đang so sánh' : '⇄ So sánh';
    });
  });

  /* ---------- Ước tính chi phí ---------- */
  const DEFAULT_YEARS = { my: 4, canada: 4, uc: 3, anh: 3 };
  const avg = (a, b) => b == null ? a : (a + b) / 2;
  function costDefaults(s) {
    const c = countryById[s.countryId] || {};
    const lc = c.livingCost || {};
    return {
      years: DEFAULT_YEARS[s.countryId] || 4,
      level: 'avg',
      increase: 3,
      living: Math.round(avg(lc.min || 0, lc.max)),
      scholarship: 0,
      scholarshipYears: DEFAULT_YEARS[s.countryId] || 4,
      rate: RATES[s.tuition?.currency] || 0,
      upfront: 80
    };
  }
  // Tính chi phí từng năm theo tiền tệ nước sở tại rồi quy đổi VNĐ
  function estimateCost(s, o) {
    const t = s.tuition || {};
    const base = o.level === 'min' ? t.min : o.level === 'max' ? (t.max ?? t.min) : avg(t.min, t.max);
    const rows = [];
    for (let y = 0; y < o.years; y++) {
      const tuition = base * Math.pow(1 + o.increase / 100, y);
      const living = o.living * Math.pow(1 + o.increase / 100, y);
      const scholarship = y < o.scholarshipYears ? Math.min(o.scholarship, tuition) : 0;
      rows.push({ year: y + 1, tuition, living, scholarship, total: tuition + living - scholarship });
    }
    const sum = k => rows.reduce((a, r) => a + r[k], 0);
    const totalLocal = sum('total');
    const upfrontVND = o.upfront * 1e6;
    return { rows, currency: t.currency, sum, totalLocal, totalVND: totalLocal * o.rate + upfrontVND, upfrontVND };
  }

  /* ---------- Router ---------- */
  let currentRoute = '';
  function parseHash() {
    const raw = location.hash.replace(/^#\/?/, '');
    const [path, qs] = raw.split('?');
    // URL gõ tay có thể chứa %xx không hợp lệ, decodeURIComponent sẽ ném URIError
    const decode = s => { try { return decodeURIComponent(s); } catch (e) { return s; } };
    const parts = path.split('/').filter(Boolean).map(decode);
    const query = Object.fromEntries(new URLSearchParams(qs || ''));
    return { parts, query };
  }

  function render() {
    const { parts, query } = parseHash();
    const [a, b] = parts;
    currentRoute = a || '';
    let html;
    if (!a) html = viewHome();
    else if (a === 'truong' && b) html = viewSchool(b);
    else if (a === 'truong') html = viewSchools(query);
    else if (a === 'nganh' && b) html = viewMajor(b, query);
    else if (a === 'nganh') html = viewMajors();
    else if (a === 'viec-lam' && b) html = viewCareer(b);
    else if (a === 'viec-lam') html = viewCareers(query);
    else if (a === 'quoc-gia' && b) html = viewCountry(b);
    else if (a === 'tu-van') html = viewConsult(query);
    else if (a === 'ho-so') html = viewApplication(query);
    else if (a === 'so-sanh') html = viewCompare(query);
    else if (a === 'chi-phi') html = viewCost(query);
    else if (a === 'hoc-bong') html = viewScholarships(query);
    else if (a === 'hoi-dap') html = viewFaq(query);
    else if (a === 'lo-trinh') html = viewRoadmap(query);
    else if (a === 'nguon') html = viewResources(query);
    else html = notFound();
    app.innerHTML = flagify(html);
    updateMeta(a, b);
    highlightNav(a || '');
    updateCompareTray();
    afterRender(a, b, query);
  }

  // Tiêu đề và mô tả riêng cho từng trang (tab trình duyệt, kết quả tìm kiếm, xem trước khi chia sẻ link)
  const SITE = 'ISSS – Định hướng du học';
  const DEFAULT_DESC = document.querySelector('meta[name="description"]').content;
  function updateMeta(a, b) {
    const h1 = app.querySelector('h1');
    const heading = h1 ? h1.textContent.replace(/\s+/g, ' ').trim() : '';
    document.title = a && heading ? `${heading} | ${SITE}` : SITE;
    const s = a === 'truong' && schoolById[b], m = a === 'nganh' && majorById[b], c = a === 'viec-lam' && careerById[b];
    const desc = s ? `${s.name} (${s.city}, ${cname(s.countryId)}): xếp hạng QS #${rankText(s)}${s.theRank ? `, THE #${theText(s)}` : ''}, học phí ${tuitionText(s)}/năm, IELTS ${s.ieltsMin ?? '—'}, học bổng và ngành đào tạo.`
      : m ? `Ngành ${m.name}: học gì, hợp với ai, nghề nghiệp và mức lương ở Mỹ, Úc, Canada, Anh; ${schoolsForMajor(m.id).length} trường đào tạo.`
      : c ? `${c.name}: mức lương ở Mỹ, Úc, Canada, Anh và Việt Nam, triển vọng nghề và ngành nên học.`
      : DEFAULT_DESC;
    document.querySelector('meta[name="description"]').content = desc;
    const og = document.querySelector('meta[property="og:title"]');
    if (og) og.content = document.title;
  }

  // Chuyển trang: đưa focus về nội dung mới và đọc tiêu đề cho người dùng trình đọc màn hình
  function announceRoute() {
    app.focus({ preventScroll: true });
    const live = document.getElementById('route-announcer');
    if (live) live.textContent = document.title;
  }

  function highlightNav(route) {
    document.querySelectorAll('[data-nav]').forEach(el => el.classList.toggle('active', el.dataset.nav === route));
    const order = ['truong', 'nganh', 'viec-lam', 'tu-van', 'ho-so'];
    const idx = order.indexOf(route);
    document.querySelectorAll('[data-step]').forEach(el => {
      const i = order.indexOf(el.dataset.step);
      el.classList.toggle('active', i === idx);
      el.classList.toggle('done', idx > -1 && i < idx);
    });
    document.querySelector('.main-nav').classList.remove('open');
  }

  window.addEventListener('hashchange', () => { render(); window.scrollTo(0, 0); announceRoute(); });

  const notFound = () => `<div class="empty"><div class="icon">🔍</div><h2>Không tìm thấy trang</h2><p><a href="#/">Về trang chủ</a></p></div>`;
  const crumb = items => `<nav class="breadcrumb"><a href="#/">Trang chủ</a>${items.map(([t, h]) => ' / ' + (h ? `<a href="${h}">${esc(t)}</a>` : esc(t))).join('')}</nav>`;

  /* ---------- Trang chủ ---------- */
  const BUDGETS = [
    { v: '', t: 'Mọi mức học phí' },
    { v: '600000000', t: 'Dưới 600 triệu/năm' },
    { v: '900000000', t: 'Dưới 900 triệu/năm' },
    { v: '1300000000', t: 'Dưới 1,3 tỷ/năm' }
  ];
  const countryOptions = (sel, all = 'Tất cả quốc gia') => `<option value="">${all}</option>` + D.countries.map(c => `<option value="${c.id}" ${sel === c.id ? 'selected' : ''}>${esc(c.name)}</option>`).join('');
  const majorOptions = (sel, all = 'Tất cả ngành') => `<option value="">${all}</option>` + D.majors.map(m => `<option value="${m.id}" ${sel === m.id ? 'selected' : ''}>${esc(m.name)}</option>`).join('');

  function viewHome() {
    const steps = [
      ['Chọn trường', 'Lọc theo quốc gia, học phí, IELTS và xếp hạng QS.', '#/truong'],
      ['Chọn ngành', 'Hiểu ngành học phù hợp với sở thích, môn học mạnh.', '#/nganh'],
      ['Cơ hội việc làm', 'So sánh mức lương, quyền ở lại làm việc từng nước.', '#/viec-lam'],
      ['Đăng ký tư vấn', 'Để lại thông tin và đặt lịch gặp tư vấn viên.', '#/tu-van'],
      ['Hoàn thành hồ sơ', 'Checklist giấy tờ theo từng nước, theo dõi tiến độ.', '#/ho-so']
    ];
    return `
      <section class="hero">
        <h1>Chọn đúng trường, đúng ngành,<br>đúng tương lai.</h1>
        <p>ISSS đồng hành cùng học sinh Việt Nam trên hành trình du học Mỹ, Úc, Canada và Anh: từ chọn trường, chọn ngành, hiểu cơ hội việc làm đến hoàn thành hồ sơ.</p>
        <form class="hero-search" id="hero-search">
          <select name="country" aria-label="Quốc gia">${countryOptions('')}</select>
          <select name="major" aria-label="Ngành học">${majorOptions('')}</select>
          <select name="budget" aria-label="Học phí">${BUDGETS.map(b => `<option value="${b.v}">${b.t}</option>`).join('')}</select>
          <button class="btn accent" type="submit">Tìm trường</button>
        </form>
        <div class="stats">
          <div class="stat"><b>${D.countries.length}</b><span>quốc gia du học</span></div>
          <div class="stat"><b>${D.schools.length}</b><span>trường đại học</span></div>
          <div class="stat"><b>${D.majors.length}</b><span>ngành học phổ biến</span></div>
          <div class="stat"><b>${D.careers.length}</b><span>nghề nghiệp có dữ liệu lương</span></div>
        </div>
      </section>

      <section class="section">
        <div class="section-head"><h2>Lộ trình 5 bước</h2></div>
        <div class="grid" style="grid-template-columns:repeat(auto-fit,minmax(200px,1fr))">
          ${steps.map((s, i) => `<a class="card step-card" href="${s[2]}"><span class="num">${i + 1}</span><h3>${s[0]}</h3><p class="muted small" style="margin:0">${s[1]}</p></a>`).join('')}
        </div>
      </section>

      <section class="section">
        <div class="section-head"><h2>Chọn quốc gia</h2></div>
        <div class="grid grid-2">
          ${D.countries.map(c => `
            <a class="card country-card" href="#/quoc-gia/${c.id}">
              <span class="flag">${c.flag}</span>
              <div>
                <h3>Du học ${esc(c.name)}</h3>
                <p class="muted small">${esc(c.intro)}</p>
                <div class="chips"><span class="chip primary">${D.schools.filter(s => s.countryId === c.id).length} trường</span><span class="chip ok">Ở lại làm việc: ${esc(shortWork(c))}</span></div>
              </div>
            </a>`).join('')}
        </div>
      </section>

      <section class="section">
        <div class="section-head"><h2>Ngành học được quan tâm</h2><a href="#/nganh">Xem tất cả ›</a></div>
        <div class="grid grid-4">${D.majors.slice(0, 8).map(majorCard).join('')}</div>
      </section>

      <section class="section grid grid-2">
        <div class="card">
          <h3>🤖 Chưa biết bắt đầu từ đâu?</h3>
          <p class="muted">Trả lời 4 câu hỏi ngắn, trợ lý ISSS sẽ gợi ý ngành và trường phù hợp với sở thích, ngân sách và điểm IELTS của bạn.</p>
          <button class="btn" data-open-chat>Hỏi trợ lý ngay</button>
        </div>
        <div class="card">
          <h3>📅 Tư vấn 1-1 miễn phí</h3>
          <p class="muted">Đăng ký để tư vấn viên liên hệ, hoặc chọn ngay giờ hẹn online/tại văn phòng phù hợp với bạn.</p>
          <a class="btn accent" href="#/tu-van">Đăng ký tư vấn</a>
        </div>
      </section>`;
  }

  // Nhãn ngắn cho thẻ quốc gia; chi tiết đầy đủ nằm ở countries[].postStudyWork
  const SHORT_WORK = { my: '12–36 tháng (OPT)', uc: '2 năm (visa 485)', canada: 'tới 3 năm (PGWP)', anh: '18 tháng từ 2027' };
  const shortWork = c => SHORT_WORK[c.id] || 'xem chi tiết';

  function majorCard(m) {
    return `<a class="card" href="#/nganh/${m.id}">
      <div style="font-size:1.8rem">${m.icon || '🎓'}</div>
      <h3 style="margin-top:6px">${esc(m.name)}</h3>
      <p class="muted small">${esc(m.nameEn || '')}</p>
      <div class="chips"><span class="chip">${schoolsForMajor(m.id).length} trường</span><span class="chip">${careersForMajor(m).length} nghề</span></div>
    </a>`;
  }

  /* ---------- Danh sách trường ---------- */
  function viewSchools(q) {
    return `
      ${crumb([['Trường']])}
      <h1>Tìm trường</h1>
      <p class="muted">Bước 1: Lọc trường theo quốc gia, ngành, học phí và điểm IELTS. Lưu trường bạn thích để đưa vào hồ sơ.</p>
      <div class="layout">
        <form class="card filters" id="school-filters">
          <h3>Bộ lọc</h3>
          <div class="field"><label for="f-q">Tên trường / thành phố</label><input id="f-q" name="q" value="${esc(q.q || '')}" placeholder="VD: Toronto"></div>
          <div class="field"><label for="f-country">Quốc gia</label><select id="f-country" name="country">${countryOptions(q.country)}</select></div>
          <div class="field"><label for="f-major">Ngành học</label><select id="f-major" name="major">${majorOptions(q.major)}</select></div>
          <div class="field"><label for="f-budget">Học phí tối đa</label><select id="f-budget" name="budget">${BUDGETS.map(b => `<option value="${b.v}" ${q.budget === b.v ? 'selected' : ''}>${b.t}</option>`).join('')}</select></div>
          <div class="field"><label for="f-ielts">IELTS của bạn</label><select id="f-ielts" name="ielts">
            <option value="">Không lọc</option>
            ${['6.0', '6.5', '7.0', '7.5'].map(v => `<option value="${v}" ${q.ielts === v ? 'selected' : ''}>${v}</option>`).join('')}
          </select></div>
          <button type="reset" class="btn secondary small" id="f-reset">Xoá bộ lọc</button>
        </form>
        <div>
          <div class="result-bar">
            <strong id="result-count"></strong>
            <select id="f-sort" aria-label="Sắp xếp">
              <option value="rank" ${q.sort !== 'tuition' ? 'selected' : ''}>Xếp hạng QS cao nhất</option>
              <option value="tuition" ${q.sort === 'tuition' ? 'selected' : ''}>Học phí thấp nhất</option>
            </select>
          </div>
          <div class="grid" id="school-results"></div>
          <p class="muted small" style="margin-top:12px">${RATE_NOTE}</p>
        </div>
      </div>`;
  }

  function filterSchools(f) {
    const text = (f.q || '').trim().toLowerCase();
    let list = D.schools.filter(s =>
      (!f.country || s.countryId === f.country) &&
      (!f.major || (s.majorIds || []).includes(f.major)) &&
      (!f.budget || (s.tuition && toVND(s.tuition.min, s.tuition.currency) <= Number(f.budget))) &&
      (!f.ielts || (s.ieltsMin || 0) <= Number(f.ielts)) &&
      (!text || (s.name + ' ' + s.city).toLowerCase().includes(text))
    );
    if (f.sort === 'tuition') list.sort((a, b) => (toVND(a.tuition?.min, a.tuition?.currency) || 0) - (toVND(b.tuition?.min, b.tuition?.currency) || 0));
    else list.sort((a, b) => (a.qsRank || 9999) - (b.qsRank || 9999));
    return list;
  }

  function schoolCard(s) {
    const majors = (s.majorIds || []).map(id => majorById[id]).filter(Boolean);
    return `<article class="card school-card">
      <div>
        <h3><a href="#/truong/${s.id}">${esc(s.name)}</a></h3>
        <div class="school-meta">
          <span>${flag(s.countryId)} ${esc(s.city)}, ${esc(cname(s.countryId))}</span>
          <span>Học phí: <b>${tuitionText(s)}</b> <span class="small">(${tuitionVND(s)})</span></span>
          <span>IELTS: <b>${s.ieltsMin ?? '—'}</b></span>
        </div>
        <div class="chips" style="margin-bottom:12px">${majors.slice(0, 5).map(m => `<span class="chip">${m.icon || ''} ${esc(m.name)}</span>`).join('')}${majors.length > 5 ? `<span class="chip">+${majors.length - 5} ngành</span>` : ''}</div>
        <div class="btn-row"><a class="btn small" href="#/truong/${s.id}">Xem chi tiết</a>${saveBtn(s.id)}${compareBtn(s.id)}</div>
      </div>
      <div class="rank"><small>${esc(s.qsEdition || 'QS')}</small><b>#${rankText(s)}</b>${s.theRank ? `<small class="rank-the">THE 2027 #${esc(theText(s))}</small>` : ''}</div>
    </article>`;
  }

  function bindSchoolFilters(q) {
    const form = document.getElementById('school-filters');
    const sort = document.getElementById('f-sort');
    const update = () => {
      const f = Object.fromEntries(new FormData(form));
      f.sort = sort.value;
      const list = filterSchools(f);
      document.getElementById('result-count').textContent = `${list.length} trường phù hợp`;
      document.getElementById('school-results').innerHTML = flagify(list.length ? list.map(schoolCard).join('') :
        `<div class="card empty"><div class="icon">🔎</div><p>Không có trường nào khớp bộ lọc. Hãy nới rộng học phí hoặc IELTS.</p></div>`);
      const qs = new URLSearchParams(Object.entries(f).filter(([k, v]) => v && !(k === 'sort' && v === 'rank'))).toString();
      history.replaceState(null, '', '#/truong' + (qs ? '?' + qs : ''));
    };
    form.addEventListener('input', update);
    form.addEventListener('change', update);
    sort.addEventListener('change', update);
    form.addEventListener('reset', () => setTimeout(update, 0));
    form.addEventListener('submit', e => e.preventDefault());
    update();
  }

  /* ---------- Chi tiết trường ---------- */
  function viewSchool(id) {
    const s = schoolById[id];
    if (!s) return notFound();
    const c = countryById[s.countryId] || {};
    const majors = (s.majorIds || []).map(mid => majorById[mid]).filter(Boolean);
    return `
      ${crumb([['Trường', '#/truong'], [s.name]])}
      <div class="detail-head">
        <div>
          <h1>${esc(s.name)}</h1>
          <div class="chips">
            <a class="chip" href="#/quoc-gia/${s.countryId}">${flag(s.countryId)} ${esc(s.city)}, ${esc(c.name)}</a>
            <span class="chip primary">${esc(s.qsEdition || 'QS')} #${rankText(s)}</span>
            ${s.theRank ? `<a class="chip primary" href="${safeUrl(s.theUrl)}" target="_blank" rel="noopener" title="${esc(s.theNote || 'Xem trên Times Higher Education')}">THE 2027 #${esc(theText(s))} ↗</a>` : ''}
            ${s.type ? `<span class="chip">${esc(s.type)}</span>` : ''}
            ${s.verified === false ? '<span class="chip accent">Số liệu ước tính</span>' : ''}
          </div>
        </div>
        <div class="btn-row">${saveBtn(s.id, '')}${compareBtn(s.id, '')}<a class="btn accent" href="#/tu-van?school=${s.id}">Tư vấn về trường này</a></div>
      </div>

      <div class="detail-grid">
        <div class="grid">
          <div class="card">
            <h2>Tổng quan</h2>
            <div class="kv">
              <div><span>Học phí cử nhân / năm${s.tuition?.year ? ` (nhập học ${esc(s.tuition.year)})` : ''}</span><b>${tuitionText(s)}</b><span>${tuitionVND(s)}</span>${s.tuition?.verified === false ? '<span>Số ước tính, nên kiểm tra lại với trường</span>' : ''}</div>
              <div><span>IELTS tối thiểu</span><b>${s.ieltsMin ?? '—'}</b>${s.ieltsNote ? `<span>${esc(s.ieltsNote)}</span>` : ''}${s.ieltsVerified === false ? '<span>Mức thường gặp, nên kiểm tra lại với trường</span>' : ''}</div>
              <div><span>Kỳ nhập học</span><b>${esc((s.intakes || []).join(', ') || '—')}</b></div>
              <div><span>Cách nộp hồ sơ</span><b>${esc(s.applyVia || '—')}</b></div>
            </div>
            ${s.tuition?.note ? `<p class="muted small" style="margin-top:10px">${esc(s.tuition.note)}</p>` : ''}
            ${(s.highlights || []).length ? `<h3 style="margin-top:18px">Điểm nổi bật</h3><ul class="ticks">${s.highlights.map(h => `<li>${esc(h)}</li>`).join('')}</ul>` : ''}
          </div>

          <div class="card">
            <div class="section-head" style="margin-bottom:10px"><h2>Bước 2: Ngành học tại trường</h2></div>
            <p class="muted small">Chọn một ngành để xem mô tả, kỹ năng cần có và cơ hội việc làm.</p>
            <div class="grid grid-2">
              ${majors.map(m => `<a class="card" href="#/nganh/${m.id}?country=${s.countryId}" style="padding:14px">
                <strong>${m.icon || ''} ${esc(m.name)}</strong>
                ${majorNote(s, m.id) ? `<div class="small" style="color:var(--warn)">ⓘ ${esc(majorNote(s, m.id))}</div>` : ''}
                <div class="muted small">${careersForMajor(m).slice(0, 3).map(x => esc(x.name)).join(' · ')}</div>
              </a>`).join('')}
            </div>
          </div>

          <div class="card">
            <h2>Học bổng cho sinh viên quốc tế</h2>
            ${(s.scholarships || []).length ? `<ul class="clean">${s.scholarships.map(sc => `<li><strong>${esc(sc.name)}</strong> — <span class="chip ok">${esc(sc.value)}</span>
              ${sc.note ? `<div class="muted small">${esc(sc.note)}</div>` : ''}
              ${sc.url ? `<a class="small" href="${safeUrl(sc.url)}" target="_blank" rel="noopener">Xem trang học bổng ↗</a>` : ''}</li>`).join('')}</ul>`
              : `<div class="notice">${esc(s.scholarshipNote || 'Chưa có thông tin học bổng cho sinh viên quốc tế.')}</div>`}
          </div>

          ${(() => {
            const rs = RES.items.filter(r => r.country === s.countryId && (r.lookup || r.search));
            return rs.length ? `<div class="card">
              <h2>Đối chiếu ở nguồn độc lập</h2>
              <p class="muted small">Số liệu của ISSS là bản tổng hợp. Kiểm tra lại trường này trên các công cụ chính thức của ${esc(c.name)}, nhất là trước khi đặt cọc hay nộp visa.</p>
              <div class="grid grid-2">${rs.map(r => resCard(r, s)).join('')}</div>
              <p class="small" style="margin-top:10px"><a href="#/nguon?country=${s.countryId}">Xem thêm nguồn tham khảo về du học ${esc(c.name)} ›</a></p>
            </div>` : '';
          })()}
        </div>

        <aside class="grid sticky">
          <div class="card">
            <h3>${c.flag || ''} Du học ${esc(c.name)}</h3>
            <ul class="clean small">
              <li><strong>Visa:</strong> ${esc(c.visa)}</li>
              <li><strong>Làm thêm khi học:</strong> ${esc(c.workDuringStudy)}</li>
              <li><strong>Ở lại làm việc sau tốt nghiệp:</strong> ${esc(c.postStudyWork)}</li>
              ${c.livingCost ? `<li><strong>Sinh hoạt phí:</strong> ${money(c.livingCost.min, c.currency)}${c.livingCost.max ? ' – ' + nf.format(c.livingCost.max) + ' ' + c.currency : ''}/năm</li>` : ''}
            </ul>
          </div>
          ${s.tuition ? (() => {
            const o = costDefaults(s);
            const est = estimateCost(s, o);
            return `<div class="card cost-mini">
              <h3>💰 Tổng chi phí cả khóa</h3>
              <div class="cost-big">≈ ${vndShort(est.totalVND)} VNĐ</div>
              <p class="muted small">${o.years} năm, học phí mức trung bình + sinh hoạt phí + 80 triệu chi phí ban đầu, chưa trừ học bổng.</p>
              <a class="btn small" href="#/chi-phi?school=${s.id}">Tính chi tiết theo gia đình bạn ›</a>
            </div>`;
          })() : ''}
          <div class="card">
            <h3>Tiếp theo</h3>
            <div class="grid" style="gap:8px">
              <a class="btn secondary" href="#/viec-lam">Xem cơ hội việc làm</a>
              <a class="btn" href="#/ho-so?country=${s.countryId}">Checklist hồ sơ ${esc(c.name)}</a>
            </div>
          </div>
          <p class="muted small">Website: <a href="${safeUrl(s.website)}" target="_blank" rel="noopener">${esc((s.website || '').replace(/^https?:\/\//, ''))}</a><br>${sourcesHtml(s.sources)}</p>
        </aside>
      </div>`;
  }

  const sourcesHtml = arr => (arr || []).length ? 'Nguồn: ' + arr.map((u, i) => `<a href="${safeUrl(u)}" target="_blank" rel="noopener">[${i + 1}]</a>`).join(' ') : '';

  /* ---------- Ngành học ---------- */
  function viewMajors() {
    const groups = {};
    D.majors.forEach(m => { (groups[m.group || 'Khác'] = groups[m.group || 'Khác'] || []).push(m); });
    return `
      ${crumb([['Ngành học']])}
      <h1>Chọn ngành học</h1>
      <p class="muted">Bước 2: Tìm hiểu ngành phù hợp với sở thích và môn học mạnh của bạn, kèm các nghề nghiệp đầu ra.</p>
      ${Object.entries(groups).map(([g, ms]) => `
        <section class="section" style="margin-top:24px">
          <h2>${esc(g)}</h2>
          <div class="grid grid-4">${ms.map(majorCard).join('')}</div>
        </section>`).join('')}`;
  }

  function salaryCell(c, cid) {
    const s = c.salary && c.salary[cid];
    if (!s || s.value == null) return '<td class="num muted">—</td>';
    return `<td class="num">${money(s.value, s.currency)}<div class="muted small">≈ ${vndShort(toVND(s.value, s.currency))}</div></td>`;
  }

  function salaryTable(careers) {
    return `<div class="table-wrap"><table class="data">
      <thead><tr><th>Nghề nghiệp</th>${D.countries.map(c => `<th class="num">${c.flag} ${esc(c.name)}</th>`).join('')}</tr></thead>
      <tbody>${careers.map(c => `<tr><td><a href="#/viec-lam/${c.id}"><strong>${esc(c.name)}</strong></a><div class="muted small">${esc(c.nameEn || '')}</div></td>${D.countries.map(k => salaryCell(c, k.id)).join('')}</tr>`).join('')}</tbody>
    </table></div><p class="muted small" style="margin-top:8px">Lương trung vị/năm (trước thuế) theo số liệu chính thức từng nước. ${RATE_NOTE}</p>`;
  }

  function viewMajor(id, q) {
    const m = majorById[id];
    if (!m) return notFound();
    const careers = careersForMajor(m);
    const schools = schoolsForMajor(id);
    const country = q.country && countryById[q.country] ? q.country : '';
    return `
      ${crumb([['Ngành học', '#/nganh'], [m.name]])}
      <div class="detail-head">
        <div>
          <h1>${m.icon || ''} ${esc(m.name)}</h1>
          <p class="muted">${esc(m.nameEn || '')} · ${esc(m.group || '')}${m.stemOPT ? ' · <span class="chip ok">STEM – được gia hạn OPT tại Mỹ</span>' : ''}</p>
        </div>
        <div class="btn-row"><a class="btn accent" href="#/tu-van?major=${m.id}">Tư vấn ngành này</a></div>
      </div>
      <div class="detail-grid">
        <div class="grid">
          <div class="card">
            <h2>Ngành này học gì?</h2>
            <p>${esc(m.description)}</p>
            <div class="grid grid-2">
              <div><h3>Phù hợp với bạn nếu</h3><ul class="ticks">${(m.suitableFor || []).map(x => `<li>${esc(x)}</li>`).join('')}</ul></div>
              <div>
                <h3>Môn học nên vững</h3><div class="chips" style="margin-bottom:14px">${(m.keySubjects || []).map(x => `<span class="chip primary">${esc(x)}</span>`).join('')}</div>
                <h3>Kỹ năng sẽ phát triển</h3><div class="chips">${(m.skills || []).map(x => `<span class="chip">${esc(x)}</span>`).join('')}</div>
              </div>
            </div>
          </div>
          <div class="card">
            <h2>Bước 3: Cơ hội việc làm</h2>
            ${careers.length ? salaryTable(careers) : '<p class="muted">Chưa có dữ liệu nghề nghiệp.</p>'}
          </div>
        </div>
        <aside class="card sticky">
          <h3>Trường đào tạo ngành này (${schools.length})</h3>
          <div class="tabs" id="major-country-tabs">
            <button data-c="" class="${country ? '' : 'active'}">Tất cả</button>
            ${D.countries.map(c => `<button data-c="${c.id}" class="${country === c.id ? 'active' : ''}">${c.flag} ${esc(c.name)}</button>`).join('')}
          </div>
          <ul class="clean" id="major-schools"></ul>
          <a class="btn secondary small" href="#/truong?major=${m.id}" style="margin-top:10px">Lọc thêm trong danh sách trường</a>
        </aside>
      </div>`;
  }

  function bindMajorTabs(id, q) {
    const tabs = document.getElementById('major-country-tabs');
    const list = document.getElementById('major-schools');
    const show = cid => {
      const ss = schoolsForMajor(id).filter(s => !cid || s.countryId === cid).sort((a, b) => (a.qsRank || 9999) - (b.qsRank || 9999));
      list.innerHTML = flagify(ss.length ? ss.map(s => `<li><a href="#/truong/${s.id}"><strong>${flag(s.countryId)} ${esc(s.name)}</strong></a><div class="muted small">QS #${rankText(s)} · ${tuitionVND(s)}</div>${majorNote(s, id) ? `<div class="small" style="color:var(--warn)">ⓘ ${esc(majorNote(s, id))}</div>` : ''}</li>`).join('') : '<li class="muted">Chưa có trường ở quốc gia này.</li>');
      tabs.querySelectorAll('button').forEach(b => b.classList.toggle('active', b.dataset.c === cid));
    };
    tabs.addEventListener('click', e => { const b = e.target.closest('button'); if (b) show(b.dataset.c); });
    show(q.country && countryById[q.country] ? q.country : '');
  }

  /* ---------- Việc làm ---------- */
  function viewCareers(q) {
    const major = q.major && majorById[q.major] ? q.major : '';
    return `
      ${crumb([['Việc làm']])}
      <h1>Cơ hội việc làm</h1>
      <p class="muted">Bước 3: So sánh mức lương của từng nghề tại Mỹ, Úc, Canada, Anh và quyền ở lại làm việc sau khi tốt nghiệp.</p>
      <div class="grid grid-4" style="margin:18px 0">
        ${D.countries.map(c => `<div class="card"><h3>${c.flag} ${esc(c.name)}</h3><p class="small muted" style="margin:0"><strong>Sau tốt nghiệp:</strong> ${esc(c.postStudyWork)}</p></div>`).join('')}
      </div>
      <div class="card">
        <div class="result-bar">
          <h2 style="margin:0">Bảng lương theo nghề</h2>
          <select id="career-major" aria-label="Lọc theo ngành">${majorOptions(major, 'Tất cả ngành')}</select>
        </div>
        <div id="career-table"></div>
      </div>`;
  }

  function bindCareers(q) {
    const sel = document.getElementById('career-major');
    const show = () => {
      const mid = sel.value;
      const list = mid ? D.careers.filter(c => majorsForCareer(c).some(m => m.id === mid)) : D.careers;
      document.getElementById('career-table').innerHTML = flagify(salaryTable(list));
      history.replaceState(null, '', '#/viec-lam' + (mid ? '?major=' + mid : ''));
    };
    sel.addEventListener('change', show);
    show();
  }

  function viewCareer(id) {
    const c = careerById[id];
    if (!c) return notFound();
    const majors = majorsForCareer(c);
    const rows = D.countries.map(k => ({ k, s: c.salary && c.salary[k.id] })).filter(r => r.s && r.s.value != null);
    const max = Math.max(...rows.map(r => toVND(r.s.value, r.s.currency)), 1);
    const schools = D.schools.filter(s => majors.some(m => (s.majorIds || []).includes(m.id))).sort((a, b) => (a.qsRank || 9999) - (b.qsRank || 9999));
    return `
      ${crumb([['Việc làm', '#/viec-lam'], [c.name]])}
      <div class="detail-head">
        <div><h1>${esc(c.name)}</h1><p class="muted">${esc(c.nameEn || '')}</p></div>
        <div class="btn-row"><a class="btn accent" href="#/tu-van?career=${c.id}">Tư vấn lộ trình nghề này</a></div>
      </div>
      <div class="detail-grid">
        <div class="grid">
          <div class="card">
            <p>${esc(c.description)}</p>
            ${c.outlook ? `<div class="notice info">📈 ${esc(c.outlook)}</div>` : ''}
            ${(c.shortage || []).length ? `<p style="margin-top:12px">🔥 <strong>Nằm trong danh sách ngành nghề thiếu hụt / ưu tiên tại:</strong> ${c.shortage.map(id => `<span class="chip ok">${flag(id)} ${esc(cname(id))}</span>`).join(' ')}</p>` : ''}
          </div>
          <div class="card">
            <h2>Mức lương trung vị / năm</h2>
            ${rows.map(({ k, s }) => `<div class="salary-row">
              <span>${k.flag} ${esc(k.name)}</span>
              <div class="bar"><i style="width:${Math.round(toVND(s.value, s.currency) / max * 100)}%"></i></div>
              <span class="val">${money(s.value, s.currency)}<small>≈ ${vndShort(toVND(s.value, s.currency))} VNĐ${s.year ? ' · ' + s.year : ''}${s.source ? ` · <a href="${safeUrl(s.source)}" target="_blank" rel="noopener">nguồn</a>` : ''}</small></span>
            </div>`).join('')}
            ${c.salary?.vn?.range ? `<div class="salary-row"><span>🇻🇳 Việt Nam</span><span class="muted small">${c.salary.vn.entry ? `Mới ra trường: ${esc(c.salary.vn.entry)}` : "Tham khảo"}</span><span class="val">${esc(c.salary.vn.range)}${c.salary.vn.source ? `<small>${/^https?:/.test(c.salary.vn.source) ? `<a href="${safeUrl(c.salary.vn.source)}" target="_blank" rel="noopener">nguồn</a>` : esc(c.salary.vn.source)}</small>` : ''}</span></div>` : ''}
            <p class="muted small">${RATE_NOTE}</p>
          </div>
          <div class="card">
            <h2>Quyền ở lại làm việc sau khi tốt nghiệp</h2>
            <ul class="clean">${D.countries.map(k => `<li><strong>${k.flag} ${esc(k.name)}:</strong> ${esc(k.postStudyWork)}</li>`).join('')}</ul>
          </div>
        </div>
        <aside class="grid sticky">
          <div class="card">
            <h3>Ngành nên học</h3>
            <div class="chips">${majors.map(m => `<a class="chip primary" href="#/nganh/${m.id}">${m.icon || ''} ${esc(m.name)}</a>`).join('')}</div>
          </div>
          <div class="card">
            <h3>Trường gợi ý</h3>
            <ul class="clean">${schools.slice(0, 6).map(s => `<li><a href="#/truong/${s.id}">${flag(s.countryId)} ${esc(s.name)}</a><div class="muted small">QS #${rankText(s)}</div></li>`).join('')}</ul>
          </div>
          <a class="btn" href="#/tu-van?career=${c.id}">Bước 4: Đăng ký tư vấn</a>
        </aside>
      </div>`;
  }

  /* ---------- Quốc gia ---------- */
  function viewCountry(id) {
    const c = countryById[id];
    if (!c) return notFound();
    const schools = D.schools.filter(s => s.countryId === id).sort((a, b) => (a.qsRank || 9999) - (b.qsRank || 9999));
    return `
      ${crumb([['Du học ' + c.name]])}
      <h1>${c.flag} Du học ${esc(c.name)}</h1>
      <p class="muted" style="max-width:760px">${esc(c.intro)}</p>
      <div class="kv" style="margin:18px 0">
        <div><span>Visa du học</span><b>${esc(c.visa)}</b></div>
        <div><span>Làm thêm khi học</span><b>${esc(c.workDuringStudy)}</b></div>
        <div><span>Ở lại làm việc</span><b>${esc(c.postStudyWork)}</b></div>
        <div><span>Sinh hoạt phí / năm</span><b>${c.livingCost ? money(c.livingCost.min, c.currency) + (c.livingCost.max ? ' – ' + nf.format(c.livingCost.max) : '') : '—'}</b>${c.livingCost?.note ? `<span>${esc(c.livingCost.note)}</span>` : ''}</div>
        <div><span>Hệ thống nộp hồ sơ</span><b>${esc(c.applySystem || '—')}</b></div>
        <div><span>Kỳ nhập học</span><b>${esc((c.intakes || []).join(', '))}</b></div>
      </div>
      <div class="section-head"><h2>Trường tại ${esc(c.name)}</h2><a href="#/truong?country=${id}">Lọc chi tiết ›</a></div>
      <div class="grid">${schools.map(schoolCard).join('')}</div>
      ${(() => {
        const rs = RES.items.filter(r => r.country === id);
        return rs.length ? `<div class="section-head" style="margin-top:24px"><h2>Nguồn chính thức nên theo dõi</h2><a href="#/nguon?country=${id}">Tất cả nguồn ›</a></div>
          <div class="grid grid-3">${rs.map(r => resCard(r)).join('')}</div>` : '';
      })()}
      <div class="btn-row" style="margin-top:20px"><a class="btn" href="#/ho-so?country=${id}">Xem checklist hồ sơ ${esc(c.name)}</a><a class="btn accent" href="#/tu-van?country=${id}">Tư vấn du học ${esc(c.name)}</a></div>
      <p class="muted small" style="margin-top:14px">${sourcesHtml(c.sources)}</p>`;
  }

  /* ---------- Tư vấn & đặt lịch ---------- */
  // URL Web app của Google Apps Script, cấu hình trong js/config.js (xem google-sheets/HUONG-DAN.md).
  // Để trống = chế độ demo: chỉ lưu trên trình duyệt, không ai nhận được.
  const LEAD_ENDPOINT = ((window.ISSS_CONFIG || {}).sheetsUrl || '').trim();
  const DEMO_NOTE = 'Bản demo: thông tin chỉ được lưu trên trình duyệt của bạn, chưa gửi tới tư vấn viên.';
  const MAX_TRIES = 5;
  const newId = () => Date.now().toString(36) + Math.random().toString(36).slice(2, 7);

  function postSheets(body) {
    // text/plain để trình duyệt không gửi preflight CORS – Apps Script không trả lời được preflight
    return fetch(LEAD_ENDPOINT, { method: 'POST', headers: { 'Content-Type': 'text/plain;charset=utf-8' }, body: JSON.stringify(body) })
      .then(r => r.ok ? r.json() : Promise.reject(new Error('HTTP ' + r.status)))
      .then(res => { if (!res || !res.ok) throw Object.assign(new Error((res && res.error) || 'Máy chủ không ghi nhận'), { server: true }); return res; });
  }

  // Gửi tên thay vì mã để đọc được ngay trên Sheets
  const sheetBody = (type, p) => ({ type, ...p,
    country: p.country ? cname(p.country) : '',
    major: (majorById[p.major] || {}).name || '',
    school: (schoolById[p.school] || {}).name || '' });

  // Đánh dấu trạng thái gửi của đăng ký/lịch hẹn đã lưu: 'sent' | 'queued' | 'conflict' | 'failed'
  function markSync(type, id, state) {
    const key = type === 'lead' ? 'leads' : 'bookings';
    const list = store.get(key, []);
    const item = list.find(x => x.id === id);
    if (item) { item.sync = state; store.set(key, list); }
  }

  // Mã lỗi Code.gs trả về → câu báo cho người dùng
  const SERVER_ERRORS = {
    slot_taken: 'Giờ này vừa có người đặt. Vui lòng chọn giờ khác.',
    too_many_bookings: 'Số điện thoại này đã có 2 lịch hẹn sắp tới. Huỷ bớt một lịch trong Hồ sơ của tôi trước khi đặt thêm.',
    rate_limited: 'Bạn đã gửi nhiều lần trong thời gian ngắn. Vui lòng thử lại sau ít phút.',
    invalid: 'Thông tin chưa hợp lệ. Vui lòng kiểm tra lại các ô đã nhập.'
  };
  const serverMessage = err => SERVER_ERRORS[err.message] || 'Hệ thống chưa nhận được thông tin. Vui lòng thử lại sau hoặc liên hệ trực tiếp tư vấn viên.';

  // Kết quả: 'sent' (Sheets đã nhận), 'queued' (mất mạng – sẽ tự gửi lại), 'demo' (chưa cấu hình URL).
  // Máy chủ từ chối hẳn (dữ liệu sai, trùng giờ, gửi quá nhiều…) thì báo lỗi ngay, không xếp hàng gửi lại.
  function sendLead(type, payload) {
    if (!LEAD_ENDPOINT) return Promise.resolve('demo');
    const body = type === 'cancel' ? { type, ...payload } : sheetBody(type, payload);
    return postSheets(body).then(() => 'sent').catch(err => {
      if (err.server) throw err;
      const outbox = store.get('outbox', []);
      outbox.push({ body, tries: 0 });
      store.set('outbox', outbox);
      return 'queued';
    });
  }

  // Gửi lại các mục trong hàng chờ (khi mở trang hoặc khi có mạng lại)
  let flushing = false;
  async function flushOutbox() {
    if (!LEAD_ENDPOINT || flushing || !navigator.onLine) return;
    flushing = true;
    try {
      for (const item of store.get('outbox', [])) {
        let done = false;
        try {
          await postSheets(item.body);
          done = true;
          if (item.body.type !== 'cancel') markSync(item.body.type, item.body.id, 'sent');
        } catch (err) {
          // Máy chủ từ chối (vd. giờ hẹn bị người khác đặt mất lúc chờ gửi) hoặc thử quá nhiều lần: dừng và báo trong Hồ sơ
          const giveUp = err.server || ++item.tries >= MAX_TRIES;
          if (giveUp) {
            done = true;
            if (item.body.type !== 'cancel') markSync(item.body.type, item.body.id, err.message === 'slot_taken' ? 'conflict' : 'failed');
          }
        }
        const rest = store.get('outbox', []).filter(x => x.body.id !== item.body.id || x.body.type !== item.body.type);
        store.set('outbox', done ? rest : [...rest, item]);
      }
    } finally {
      flushing = false;
    }
    if (currentRoute === 'ho-so') render();
  }
  window.addEventListener('online', flushOutbox);

  // Khung giờ đã có người đặt trên Sheets, dạng "2026-11-05|08:30|Online (Google Meet)"
  const fetchTakenSlots = () => !LEAD_ENDPOINT ? Promise.resolve(null)
    : fetch(LEAD_ENDPOINT + '?action=slots', { cache: 'no-store' }).then(r => r.json()).then(res => new Set(res.slots || [])).catch(() => null);

  const PHONE_RE = /^(0|\+84)(3|5|7|8|9)\d{8}$/;
  const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const SLOT_TIMES = ['08:30', '09:30', '10:30', '13:30', '14:30', '15:30', '16:30', '19:00', '20:00'];

  function viewConsult(q) {
    // Chỉ điền sẵn thông tin đã nhập trong phiên này (đóng trình duyệt là mất)
    const last = session.get('contact', {});
    const pre = {
      country: q.country || (schoolById[q.school] || {}).countryId || '',
      major: q.major || (careerById[q.career] ? (majorsForCareer(careerById[q.career])[0] || {}).id : '') || '',
      school: q.school || ''
    };
    const shortlist = getShortlist();
    return `
      ${crumb([['Tư vấn']])}
      <h1>Đăng ký tư vấn</h1>
      <p class="muted">Bước 4: Để lại thông tin để tư vấn viên liên hệ, hoặc đặt ngay lịch hẹn 1-1 miễn phí.</p>
      <div class="grid grid-2" style="align-items:start">
        <form class="card" id="lead-form" novalidate>
          <h2>📝 Thông tin tư vấn</h2>
          <div class="field">
            <label>Bạn là</label>
            <div class="radio-row">
              <label><input type="radio" name="role" value="Học sinh" ${last.role !== 'Phụ huynh' ? 'checked' : ''}> Học sinh</label>
              <label><input type="radio" name="role" value="Phụ huynh" ${last.role === 'Phụ huynh' ? 'checked' : ''}> Phụ huynh</label>
            </div>
          </div>
          <div class="form-grid">
            <div class="field full"><label for="l-name">Họ và tên học sinh *</label><input id="l-name" name="name" value="${esc(last.name || '')}" autocomplete="name"><div class="error" data-err="name"></div></div>
            <div class="field"><label for="l-phone">Số điện thoại *</label><input id="l-phone" name="phone" inputmode="tel" value="${esc(last.phone || '')}" placeholder="09xxxxxxxx" autocomplete="tel"><div class="error" data-err="phone"></div></div>
            <div class="field"><label for="l-email">Email *</label><input id="l-email" name="email" type="email" value="${esc(last.email || '')}" autocomplete="email"><div class="error" data-err="email"></div></div>
            <div class="field"><label for="l-grade">Đang học</label><select id="l-grade" name="grade">${['Lớp 9', 'Lớp 10', 'Lớp 11', 'Lớp 12', 'Đã tốt nghiệp THPT', 'Đang học đại học'].map(g => `<option ${last.grade === g ? 'selected' : ''}>${g}</option>`).join('')}</select></div>
            <div class="field"><label for="l-year">Năm dự định nhập học</label><select id="l-year" name="year">${['2027', '2028', '2029', 'Chưa xác định'].map(y => `<option ${last.year === y ? 'selected' : ''}>${y}</option>`).join('')}</select></div>
            <div class="field"><label for="l-country">Quốc gia quan tâm</label><select id="l-country" name="country">${countryOptions(pre.country, 'Chưa quyết định')}</select></div>
            <div class="field"><label for="l-major">Ngành quan tâm</label><select id="l-major" name="major">${majorOptions(pre.major, 'Chưa quyết định')}</select></div>
            <div class="field full"><label for="l-school">Trường quan tâm</label><select id="l-school" name="school"><option value="">Chưa chọn</option>${D.schools.map(s => `<option value="${s.id}" ${pre.school === s.id || (!pre.school && shortlist[0] === s.id) ? 'selected' : ''}>${esc(s.name)}</option>`).join('')}</select></div>
            <div class="field"><label for="l-ielts">IELTS / tương đương <span class="hint">(nếu có)</span></label><input id="l-ielts" name="ielts" value="${esc(last.ielts || '')}" placeholder="VD: 6.5"></div>
            <div class="field"><label for="l-gpa">Điểm TB học tập <span class="hint">(nếu có)</span></label><input id="l-gpa" name="gpa" value="${esc(last.gpa || '')}" placeholder="VD: 8.5"></div>
            <div class="field full"><label for="l-budget">Ngân sách dự kiến / năm (học phí + sinh hoạt)</label><select id="l-budget" name="budget">${['Dưới 700 triệu', '700 triệu – 1 tỷ', '1 – 1,5 tỷ', 'Trên 1,5 tỷ', 'Cần săn học bổng'].map(b => `<option ${last.budget === b ? 'selected' : ''}>${b}</option>`).join('')}</select></div>
            <div class="field full"><label for="l-note">Câu hỏi cho tư vấn viên</label><textarea id="l-note" name="note" rows="3" placeholder="VD: Em muốn học Khoa học máy tính ở Canada và ở lại làm việc..."></textarea></div>
          </div>
          <input type="text" name="website" tabindex="-1" autocomplete="off" aria-hidden="true" class="hp">
          <button class="btn accent" type="submit" style="width:100%">Gửi đăng ký tư vấn</button>
          ${LEAD_ENDPOINT ? '' : `<p class="muted small" style="margin-top:8px">${DEMO_NOTE}</p>`}
        </form>

        <div class="card" id="booking">
          <h2>📅 Đặt lịch hẹn 1-1</h2>
          <div class="field">
            <label>Hình thức</label>
            <div class="radio-row" id="b-mode">
              <label><input type="radio" name="mode" value="Online (Google Meet)" checked> Online</label>
              <label><input type="radio" name="mode" value="Văn phòng Hà Nội"> VP Hà Nội</label>
              <label><input type="radio" name="mode" value="Văn phòng TP.HCM"> VP TP.HCM</label>
            </div>
          </div>
          <label>Chọn ngày</label>
          <div class="days" id="b-days"></div>
          <label>Chọn giờ</label>
          <div class="slots" id="b-slots"></div>
          <div class="notice info" id="b-summary" style="margin-top:14px">Chọn ngày và giờ phù hợp.</div>
          <button class="btn" id="b-confirm" style="width:100%;margin-top:12px" disabled>Xác nhận lịch hẹn</button>
          <p class="muted small" style="margin-top:8px">Cần nhập họ tên và số điện thoại ở form bên cạnh trước khi xác nhận.${LEAD_ENDPOINT ? '' : ' ' + DEMO_NOTE}</p>
        </div>
      </div>`;
  }

  function validateLead(data, form) {
    const errs = {};
    if (!data.name.trim() || data.name.trim().length < 2) errs.name = 'Vui lòng nhập họ tên.';
    if (!PHONE_RE.test(data.phone.replace(/[\s.-]/g, ''))) errs.phone = 'Số điện thoại chưa đúng (VD: 0912345678).';
    if (!EMAIL_RE.test(data.email.trim())) errs.email = 'Email chưa đúng định dạng.';
    showErrors(form, errs);
    return Object.keys(errs).length === 0;
  }

  // Gắn lỗi vào đúng ô (aria-invalid + aria-describedby) để trình đọc màn hình đọc được
  function showErrors(form, errs) {
    form.querySelectorAll('[data-err]').forEach(el => {
      const input = form.elements[el.dataset.err];
      const msg = errs[el.dataset.err] || '';
      el.id = el.id || 'err-' + el.dataset.err;
      el.textContent = msg;
      el.setAttribute('role', msg ? 'alert' : '');
      if (input) {
        input.setAttribute('aria-invalid', msg ? 'true' : 'false');
        if (msg) input.setAttribute('aria-describedby', el.id); else input.removeAttribute('aria-describedby');
      }
    });
  }

  function bindConsult() {
    const form = document.getElementById('lead-form');
    form.addEventListener('submit', e => {
      e.preventDefault();
      const data = Object.fromEntries(new FormData(form));
      if (!validateLead(data, form)) { form.querySelector('.error:not(:empty)')?.previousElementSibling?.focus(); return; }
      data.phone = data.phone.replace(/[\s.-]/g, '');
      data.createdAt = new Date().toISOString();
      data.id = newId();
      const submitBtn = form.querySelector('[type="submit"]');
      submitBtn.disabled = true;
      submitBtn.textContent = 'Đang gửi…';
      sendLead('lead', data).then(state => {
        data.sync = state;
        const leads = store.get('leads', []);
        leads.push(leadSummary(data));
        store.set('leads', leads);
        session.set('contact', Object.fromEntries(CONTACT_FIELDS.map(k => [k, data[k]])));
        if (data.school && !getShortlist().includes(data.school)) toggleShortlist(data.school);
        const msg = {
          sent: 'Đăng ký đã được gửi tới tư vấn viên. Chúng tôi sẽ liên hệ trong 24 giờ làm việc.',
          queued: 'Chưa gửi được do mạng chập chờn. Đăng ký đã được lưu và sẽ tự gửi lại khi có mạng.',
          demo: 'Đăng ký đã được lưu trên trình duyệt này (bản demo, tư vấn viên chưa nhận được).'
        }[state];
        toast(msg);
        form.querySelector('.lead-done')?.remove();
        form.insertAdjacentHTML('afterbegin', `<div class="notice lead-done" role="status" style="background:var(--ok-soft);margin-bottom:14px">✅ Cảm ơn ${esc(data.name)}! ${msg} Bạn có thể đặt lịch hẹn ngay bên cạnh hoặc <a href="#/ho-so">bắt đầu checklist hồ sơ</a>.</div>`);
        updateConfirm();
      }).catch(err => {
        // Máy chủ từ chối: báo rõ để người dùng sửa hoặc liên hệ cách khác, không giả vờ đã lưu
        const msg = serverMessage(err);
        toast(msg);
        form.querySelector('.lead-done')?.remove();
        form.insertAdjacentHTML('afterbegin', `<div class="notice lead-done" role="alert" style="margin-bottom:14px">⚠ ${esc(msg)}</div>`);
      }).finally(() => { submitBtn.disabled = false; submitBtn.textContent = 'Gửi đăng ký tư vấn'; });
    });

    // Đặt lịch
    const daysEl = document.getElementById('b-days');
    const slotsEl = document.getElementById('b-slots');
    const summary = document.getElementById('b-summary');
    const confirmBtn = document.getElementById('b-confirm');
    const days = [];
    const d = new Date();
    while (days.length < 10) {
      d.setDate(d.getDate() + 1);
      if (d.getDay() !== 0) days.push(new Date(d));
    }
    const wd = ['CN', 'T2', 'T3', 'T4', 'T5', 'T6', 'T7'];
    const pad = n => String(n).padStart(2, '0');
    const key = x => `${x.getFullYear()}-${pad(x.getMonth() + 1)}-${pad(x.getDate())}`;
    let selDay = key(days[0]);
    let selTime = '';
    const mode = () => document.querySelector('#b-mode input:checked').value;
    // Có Sheets: khung giờ kín lấy từ Sheets. Bản demo: giả lập một số giờ đã kín (cố định theo ngày)
    let serverTaken = null;
    let loadingSlots = !!LEAD_ENDPOINT;
    const busy = (day, t) => {
      if (serverTaken) return serverTaken.has([day, t, mode()].join('|'));
      if (LEAD_ENDPOINT) return false;
      let h = 0;
      for (const ch of day + t) h = (h * 31 + ch.charCodeAt(0)) % 997;
      return h % 4 === 0;
    };
    const mine = () => store.get('bookings', []).map(b => b.day + ' ' + b.time);
    daysEl.innerHTML = days.map(x => `<button type="button" data-day="${key(x)}"><small>${wd[x.getDay()]}</small><b>${x.getDate()}/${x.getMonth() + 1}</b></button>`).join('');
    function drawSlots() {
      daysEl.querySelectorAll('button').forEach(b => b.classList.toggle('active', b.dataset.day === selDay));
      if (loadingSlots) { slotsEl.innerHTML = '<span class="muted small">Đang tải giờ trống…</span>'; updateConfirm(); return; }
      const taken = mine();
      slotsEl.innerHTML = SLOT_TIMES.map(t => {
        const off = busy(selDay, t) || taken.includes(selDay + ' ' + t);
        if (off && t === selTime) selTime = '';
        return `<button type="button" data-time="${t}" ${off ? 'disabled' : ''} class="${t === selTime ? 'active' : ''}">${t}</button>`;
      }).join('');
      updateConfirm();
    }
    const refreshTaken = () => fetchTakenSlots().then(set => { serverTaken = set; loadingSlots = false; drawSlots(); });
    if (LEAD_ENDPOINT) refreshTaken();
    function updateConfirm() {
      const mode = document.querySelector('#b-mode input:checked').value;
      const [y, m, dd] = selDay.split('-');
      summary.textContent = selTime ? `Lịch hẹn: ${selTime} ngày ${dd}/${m}/${y} · ${mode}` : 'Chọn ngày và giờ phù hợp.';
      confirmBtn.disabled = !selTime;
    }
    daysEl.addEventListener('click', e => { const b = e.target.closest('button'); if (!b) return; selDay = b.dataset.day; selTime = ''; drawSlots(); });
    slotsEl.addEventListener('click', e => { const b = e.target.closest('button'); if (!b || b.disabled) return; selTime = b.dataset.time; drawSlots(); });
    document.getElementById('b-mode').addEventListener('change', drawSlots);
    confirmBtn.addEventListener('click', () => {
      const data = Object.fromEntries(new FormData(form));
      const errs = {};
      if (!data.name.trim()) errs.name = 'Nhập họ tên để đặt lịch.';
      if (!PHONE_RE.test(data.phone.replace(/[\s.-]/g, ''))) errs.phone = 'Nhập số điện thoại để đặt lịch.';
      showErrors(form, errs);
      if (Object.keys(errs).length) { toast('Vui lòng điền họ tên và số điện thoại trước.'); document.getElementById(errs.name ? 'l-name' : 'l-phone').focus(); return; }
      const booking = { id: newId(), createdAt: new Date().toISOString(), day: selDay, time: selTime, mode: mode(), name: data.name.trim(), phone: data.phone.replace(/[\s.-]/g, ''), country: data.country, major: data.major };
      confirmBtn.disabled = true;
      confirmBtn.textContent = 'Đang đặt lịch…';
      sendLead('booking', booking).then(state => {
        // Lưu lại để hiện trong Hồ sơ; giữ SĐT vì Sheets cần nó để xác nhận khi huỷ, bỏ tên và nguyện vọng
        const bookings = store.get('bookings', []);
        bookings.push({ id: booking.id, createdAt: booking.createdAt, day: booking.day, time: booking.time, mode: booking.mode, phone: booking.phone, sync: state });
        store.set('bookings', bookings);
        const label = { sent: 'Đã đặt lịch', queued: 'Đã lưu lịch hẹn, sẽ tự gửi khi có mạng:', demo: 'Đã lưu lịch hẹn (bản demo)' }[state];
        toast(state === 'sent' ? 'Đã đặt lịch thành công!' : state === 'queued' ? 'Mạng chập chờn – lịch hẹn sẽ tự gửi lại khi có mạng.' : 'Đã lưu lịch hẹn trên trình duyệt này (bản demo, chưa gửi tới tư vấn viên).');
        const msg = `✅ ${label} ${esc(booking.time)} ngày ${booking.day.split('-').reverse().join('/')}. Xem trong <a href="#/ho-so">Hồ sơ của tôi</a>.`;
        selTime = '';
        drawSlots();
        summary.innerHTML = msg;
      }).catch(err => {
        const msg = serverMessage(err);
        toast(msg);
        summary.textContent = '⚠ ' + msg;
        if (err.message === 'slot_taken') {
          selTime = '';
          loadingSlots = true;
          drawSlots();
          refreshTaken();
          summary.textContent = '⚠ ' + msg;
        } else updateConfirm();
      }).finally(() => { confirmBtn.textContent = 'Xác nhận lịch hẹn'; });
    });
    drawSlots();
  }

  /* ---------- Hồ sơ của tôi ---------- */
  const STEP_ORDER = ['Chuẩn bị', 'Nộp hồ sơ trường', 'Sau khi có thư mời', 'Visa', 'Trước khi bay'];

  function checklistProgress(cid) {
    const items = (D.checklists && D.checklists[cid]) || [];
    const done = store.get('checklist', {});
    const n = items.filter(i => done[i.id]).length;
    return { n, total: items.length, pct: items.length ? Math.round(n / items.length * 100) : 0 };
  }

  function viewApplication(q) {
    const shortlist = getShortlist().map(id => schoolById[id]);
    const countries = [...new Set(shortlist.map(s => s.countryId))];
    const tabsCountries = countries.length ? countries : D.countries.map(c => c.id);
    const active = q.country && countryById[q.country] ? q.country : tabsCountries[0];
    const bookings = store.get('bookings', []);
    const leads = store.get('leads', []);
    const overall = tabsCountries.map(checklistProgress).reduce((a, p) => ({ n: a.n + p.n, total: a.total + p.total }), { n: 0, total: 0 });
    const pct = overall.total ? Math.round(overall.n / overall.total * 100) : 0;
    return `
      ${crumb([['Hồ sơ của tôi']])}
      <div class="detail-head">
        <div><h1>Hồ sơ của tôi</h1><p class="muted">Bước 5: Theo dõi trường đã chọn, checklist giấy tờ và lịch hẹn tư vấn.</p></div>
        <button class="btn secondary small" id="reset-data">Xoá dữ liệu trên máy này</button>
      </div>
      <div class="card" style="margin-top:12px">
        <div class="result-bar"><strong>Tiến độ hồ sơ${countries.length ? '' : ' (chưa lưu trường nào – hiển thị cả 4 nước)'}</strong><strong>${pct}%</strong></div>
        <div class="progress"><i style="width:${pct}%"></i></div>
        <p class="muted small" style="margin:8px 0 0">${overall.n}/${overall.total} việc đã hoàn thành · ${shortlist.length} trường trong danh sách · ${bookings.length} lịch hẹn</p>
      </div>

      <div class="detail-grid">
        <div class="card">
          <h2>✅ Checklist hồ sơ</h2>
          <div class="tabs" id="cl-tabs">${tabsCountries.map(id => `<button data-c="${id}" class="${id === active ? 'active' : ''}">${flag(id)} ${esc(cname(id))} · ${checklistProgress(id).pct}%</button>`).join('')}</div>
          <div id="checklist"></div>
        </div>

        <aside class="grid sticky">
          ${roadmapCard()}
          <div class="card">
            <h3>🎓 Trường sẽ nộp (${shortlist.length})</h3>
            ${shortlist.length ? `<ul class="clean">${shortlist.map(s => `<li style="display:flex;justify-content:space-between;gap:8px;align-items:center">
              <span><a href="#/truong/${s.id}">${flag(s.countryId)} ${esc(s.name)}</a><div class="muted small">${esc(s.applyVia || '')}</div></span>
              <button class="btn secondary small" data-save="${s.id}" title="Bỏ khỏi danh sách">✕</button></li>`).join('')}</ul>`
              : `<p class="muted small">Chưa có trường nào. <a href="#/truong">Tìm và lưu trường</a> để tạo checklist theo quốc gia.</p>`}
          </div>
          <div class="card">
            <h3>📅 Lịch hẹn tư vấn</h3>
            ${bookings.length ? `<ul class="clean">${bookings.map((b, i) => `<li style="display:flex;justify-content:space-between;gap:8px;align-items:center">
              <span><strong>${esc(b.time)} · ${esc(b.day.split('-').reverse().join('/'))}</strong><div class="muted small">${esc(b.mode)}</div>${syncBadge(b)}</span>
              <button class="btn secondary small" data-cancel="${i}">Huỷ</button></li>`).join('')}</ul>`
              : `<p class="muted small">Chưa có lịch hẹn. <a href="#/tu-van">Đặt lịch</a></p>`}
          </div>
          <div class="card">
            <h3>📝 Đăng ký tư vấn đã gửi</h3>
            ${leads.length ? `<ul class="clean small">${leads.slice().reverse().map(l => `<li><strong>${esc(l.name)}</strong> · ${esc(l.phone)}<div class="muted">${[l.country && cname(l.country), l.major && majorById[l.major]?.name, l.school && schoolById[l.school]?.name].filter(Boolean).map(esc).join(' · ') || 'Chưa chọn nguyện vọng'} · ${new Date(l.createdAt).toLocaleDateString('vi-VN')}</div>${syncBadge(l)}</li>`).join('')}</ul>`
              : `<p class="muted small">Chưa gửi đăng ký. <a href="#/tu-van">Đăng ký tư vấn</a></p>`}
          </div>
          <p class="muted small">${LEAD_ENDPOINT ? 'Trường đã lưu và checklist chỉ lưu trên trình duyệt này; đăng ký và lịch hẹn được gửi tới tư vấn viên.' : 'Bản demo: dữ liệu hồ sơ chỉ lưu trên trình duyệt này.'}</p>
        </aside>
      </div>`;
  }

  function bindApplication(q) {
    const box = document.getElementById('checklist');
    const tabs = document.getElementById('cl-tabs');
    let active = tabs.querySelector('.active')?.dataset.c;
    const draw = () => {
      const items = (D.checklists && D.checklists[active]) || [];
      const done = store.get('checklist', {});
      const p = checklistProgress(active);
      const steps = [...STEP_ORDER, ...new Set(items.map(i => i.step).filter(s => !STEP_ORDER.includes(s)))];
      box.innerHTML = `
        <div class="result-bar small"><span>${p.n}/${p.total} mục</span><span>${p.pct}%</span></div>
        <div class="progress" style="margin-bottom:6px"><i style="width:${p.pct}%"></i></div>
        ${steps.map(st => {
          const its = items.filter(i => i.step === st);
          if (!its.length) return '';
          return `<div class="check-group"><h4>${esc(st)}</h4>${its.map(i => `
            <label class="check-item ${done[i.id] ? 'done' : ''}">
              <input type="checkbox" data-check="${esc(i.id)}" ${done[i.id] ? 'checked' : ''}>
              <span><span class="t">${esc(i.title)}</span><div class="d">${esc(i.detail || '')}</div></span>
            </label>`).join('')}</div>`;
        }).join('')}`;
      tabs.querySelectorAll('button').forEach(b => {
        b.classList.toggle('active', b.dataset.c === active);
        b.innerHTML = flagify(`${flag(b.dataset.c)} ${esc(cname(b.dataset.c))} · ${checklistProgress(b.dataset.c).pct}%`);
      });
    };
    tabs.addEventListener('click', e => {
      const b = e.target.closest('button');
      if (!b) return;
      active = b.dataset.c;
      history.replaceState(null, '', '#/ho-so?country=' + active);
      draw();
    });
    box.addEventListener('change', e => {
      const cb = e.target.closest('[data-check]');
      if (!cb) return;
      const done = store.get('checklist', {});
      if (cb.checked) done[cb.dataset.check] = true; else delete done[cb.dataset.check];
      store.set('checklist', done);
      const scrollY = window.scrollY;
      render();
      window.scrollTo(0, scrollY);
    });
    app.addEventListener('click', onAppClick);
    draw();
  }

  const syncBadge = x => !LEAD_ENDPOINT ? '' : {
    sent: '<span class="chip ok small">✓ Tư vấn viên đã nhận</span>',
    queued: '<span class="chip accent small">⏳ Chờ gửi lại khi có mạng</span>',
    conflict: '<span class="chip accent small">⚠ Giờ này đã có người đặt – vui lòng đặt lại</span>',
    failed: '<span class="chip accent small">⚠ Chưa gửi được – vui lòng gửi lại hoặc liên hệ tư vấn viên</span>'
  }[x.sync] || '';

  function onAppClick(e) {
    const c = e.target.closest('[data-cancel]');
    if (c) {
      const bookings = store.get('bookings', []);
      const [b] = bookings.splice(Number(c.dataset.cancel), 1);
      store.set('bookings', bookings);
      if (b && b.id && LEAD_ENDPOINT) {
        const outbox = store.get('outbox', []);
        const pending = outbox.some(x => x.body.type === 'booking' && x.body.id === b.id);
        // Chưa gửi được thì chỉ cần rút khỏi hàng chờ; đã gửi thì báo huỷ lên Sheets
        if (pending) store.set('outbox', outbox.filter(x => !(x.body.type === 'booking' && x.body.id === b.id)));
        else if (b.sync === 'sent') sendLead('cancel', { id: b.id, phone: b.phone });
      }
      toast('Đã huỷ lịch hẹn');
      render();
    }
    if (e.target.closest('#reset-data') && confirm('Xoá toàn bộ trường đã lưu, checklist, lịch hẹn và đăng ký trên trình duyệt này?')) {
      ['shortlist', 'checklist', 'bookings', 'leads', 'compare', 'outbox'].forEach(k => store.set(k, k === 'checklist' ? {} : []));
      session.set('contact', {});
      updateBadge();
      render();
    }
  }

  /* ---------- So sánh trường ---------- */
  const schoolOptions = (sel, exclude = []) => D.countries.map(c => `<optgroup label="${esc(c.name)}">${D.schools.filter(s => s.countryId === c.id && !exclude.includes(s.id)).map(s => `<option value="${s.id}" ${sel === s.id ? 'selected' : ''}>${esc(s.name)}</option>`).join('')}</optgroup>`).join('');

  function viewCompare(q) {
    if (q.ids) {
      // Link chia sẻ ?ids=a,b,c ghi đè danh sách so sánh hiện tại
      store.set('compare', q.ids.split(',').filter(id => schoolById[id]).slice(0, MAX_COMPARE));
    }
    const list = getCompare().map(id => schoolById[id]);
    const major = q.major && majorById[q.major] ? q.major : '';
    const picker = list.length < MAX_COMPARE ? `<form class="compare-add" id="compare-add">
        <select name="school" aria-label="Thêm trường để so sánh"><option value="">+ Thêm trường để so sánh…</option>${schoolOptions('', list.map(s => s.id))}</select>
      </form>` : '';
    if (list.length < 2) {
      return `${crumb([['So sánh trường']])}
        <h1>So sánh trường</h1>
        <div class="card empty"><div class="icon">⇄</div>
          <p>Chọn ít nhất 2 trường (tối đa ${MAX_COMPARE}) để so sánh cạnh nhau.${list.length ? ` Đang chọn: <strong>${esc(list[0].name)}</strong>.` : ''}</p>
          <div style="max-width:420px;margin:0 auto 14px">${picker}</div>
          <a href="#/truong">Hoặc tìm trong danh sách trường ›</a>
        </div>`;
    }

    const est = list.map(s => { const o = costDefaults(s); return { o, e: estimateCost(s, o) }; });
    const perYearVND = list.map((s, i) => s.tuition ? (avg(s.tuition.min, s.tuition.max) + est[i].o.living) * est[i].o.rate : null);
    // Đánh dấu ô tốt nhất trong mỗi hàng số
    const best = (vals, dir) => {
      const nums = vals.filter(v => v != null && !isNaN(v));
      if (nums.length < 2 || new Set(nums).size === 1) return () => '';
      const target = dir === 'low' ? Math.min(...nums) : Math.max(...nums);
      return i => vals[i] === target ? ' best' : '';
    };
    const rankB = best(list.map(s => s.qsRank), 'low');
    const theB = best(list.map(s => s.theRankOrder), 'low');
    const feeB = best(list.map(s => s.tuition ? toVND(avg(s.tuition.min, s.tuition.max), s.tuition.currency) : null), 'low');
    const yearB = best(perYearVND, 'low');
    const totalB = best(est.map(x => x.e.totalVND), 'low');
    const ieltsB = best(list.map(s => s.ieltsMin), 'low');
    const majB = best(list.map(s => (s.majorIds || []).length), 'high');

    const row = (label, cell, hint) => `<tr><th scope="row">${label}${hint ? `<div class="muted small">${hint}</div>` : ''}</th>${list.map((s, i) => `<td${cell.cls ? ` class="${cell.cls(i).trim()}"` : ''}>${cell.html(s, i)}</td>`).join('')}</tr>`;
    const c = s => countryById[s.countryId] || {};

    return `
      ${crumb([['Trường', '#/truong'], ['So sánh']])}
      <div class="detail-head">
        <div><h1>So sánh ${list.length} trường</h1><p class="muted">Ô màu xanh là lựa chọn tốt nhất ở tiêu chí đó. ${RATE_NOTE}</p></div>
        <div class="btn-row">${picker}<button class="btn secondary small" id="compare-clear">Xoá tất cả</button></div>
      </div>
      <div class="card table-wrap" style="margin-top:12px;padding:0">
        <table class="data compare">
          <thead><tr><th></th>${list.map(s => `<th>
            <a href="#/truong/${s.id}"><strong>${esc(s.name)}</strong></a>
            <div class="muted small">${flag(s.countryId)} ${esc(s.city)}</div>
            <button class="link-btn small" data-compare="${s.id}">✕ Bỏ</button>
          </th>`).join('')}</tr></thead>
          <tbody>
            <tr class="group"><td colspan="${list.length + 1}">Chi phí</td></tr>
            ${row('Học phí / năm', { html: s => `${tuitionText(s)}<div class="muted small">${tuitionVND(s)}</div>`, cls: feeB })}
            ${row('Sinh hoạt phí / năm', { html: (s, i) => `${money(est[i].o.living, c(s).currency)}<div class="muted small">≈ ${vndShort(est[i].o.living * est[i].o.rate)} VNĐ</div>` }, 'mức chứng minh tài chính / ước tính')}
            ${row('Tổng mỗi năm', { html: (s, i) => perYearVND[i] == null ? '—' : `<strong>≈ ${vndShort(perYearVND[i])}</strong>`, cls: yearB }, 'học phí trung bình + sinh hoạt')}
            ${row('Tổng cả khóa', { html: (s, i) => `<strong>≈ ${vndShort(est[i].e.totalVND)}</strong><div class="muted small">${est[i].o.years} năm · <a href="#/chi-phi?school=${s.id}">tính chi tiết</a></div>`, cls: totalB }, 'đã gồm 80 triệu chi phí ban đầu, tăng 3%/năm')}
            ${row('Học bổng', { html: s => (s.scholarships || []).length ? s.scholarships.map(sc => `<div><strong>${esc(sc.value)}</strong><div class="muted small">${esc(sc.name)}</div></div>`).join('') : `<span class="muted small">${esc(s.scholarshipNote || 'Chưa có thông tin')}</span>` })}
            <tr class="group"><td colspan="${list.length + 1}">Đầu vào</td></tr>
            ${row('Xếp hạng QS', { html: s => `<strong>#${rankText(s)}</strong> <span class="muted small">${esc(s.qsEdition || '')}</span>`, cls: rankB })}
            ${row('Xếp hạng THE', { html: s => s.theRank ? `<strong>#${esc(theText(s))}</strong> <span class="muted small">THE 2027</span>` : '—', cls: theB }, 'Hai bảng đo khác nhau, xem <a href="#/nguon">giải thích</a>')}
            ${row('IELTS tối thiểu', { html: s => `${s.ieltsMin ?? '—'}${s.ieltsVerified === false ? ' <span class="muted small">(cần kiểm tra)</span>' : ''}`, cls: ieltsB })}
            ${row('Kỳ nhập học', { html: s => esc((s.intakes || []).join(', ') || '—') })}
            ${row('Cách nộp hồ sơ', { html: s => `<span class="small">${esc(s.applyVia || '—')}</span>` })}
            <tr class="group"><td colspan="${list.length + 1}">Ngành học</td></tr>
            ${row('Số ngành trên ISSS', { html: s => `${(s.majorIds || []).length} ngành`, cls: majB })}
            ${row(`<select id="compare-major" aria-label="Ngành bạn quan tâm">${majorOptions(major, 'Ngành bạn quan tâm…')}</select>`, { html: s => !major ? '<span class="muted small">Chọn ngành ở cột trái</span>' : (s.majorIds || []).includes(major) ? (majorNote(s, major) ? `<span class="chip accent">✓ Chuyên ngành</span><div class="muted small">${esc(majorNote(s, major))}</div>` : '<span class="chip ok">✓ Có đào tạo</span>') : '<span class="chip">✗ Không có</span>' })}
            <tr class="group"><td colspan="${list.length + 1}">Sau khi tốt nghiệp</td></tr>
            ${row('Ở lại làm việc', { html: s => `<strong>${esc(SHORT_WORK[s.countryId] || '')}</strong><div class="muted small">${esc(c(s).postStudyWork || '')}</div>` })}
            ${row('Làm thêm khi học', { html: s => `<span class="small">${esc(c(s).workDuringStudy || '')}</span>` })}
            <tr><th></th>${list.map(s => `<td><div class="btn-row">${saveBtn(s.id)}<a class="btn small" href="#/tu-van?school=${s.id}">Tư vấn</a></div></td>`).join('')}</tr>
          </tbody>
        </table>
      </div>
      <p class="muted small" style="margin-top:10px">Chia sẻ bảng này: <a href="#/so-sanh?ids=${list.map(s => s.id).join(',')}">link so sánh</a></p>`;
  }

  function bindCompare(q) {
    const add = document.getElementById('compare-add');
    if (add) add.addEventListener('change', e => { if (e.target.value) { toggleCompare(e.target.value); render(); } });
    document.getElementById('compare-clear')?.addEventListener('click', () => { store.set('compare', []); render(); });
    document.getElementById('compare-major')?.addEventListener('change', e => {
      history.replaceState(null, '', '#/so-sanh' + (e.target.value ? '?major=' + e.target.value : ''));
      render();
    });
  }

  /* ---------- Tính tổng chi phí ---------- */
  function viewCost(q) {
    const s = schoolById[q.school] || schoolById[getCompare()[0]] || schoolById[getShortlist()[0]] || D.schools[0];
    return `
      ${crumb([['Tính chi phí']])}
      <h1>Tính tổng chi phí du học</h1>
      <p class="muted">Ước tính học phí, sinh hoạt phí và học bổng cho cả khóa học, quy ra VNĐ. Mọi con số đều sửa được cho đúng với gia đình bạn.</p>
      <div class="detail-grid even">
        <form class="card" id="cost-form">
          <div class="field"><label for="c-school">Trường</label><select id="c-school" name="school">${schoolOptions(s.id)}</select></div>
          <div id="cost-fields"></div>
        </form>
        <div class="grid sticky" id="cost-result"></div>
      </div>`;
  }

  function costFieldsHtml(s) {
    const o = costDefaults(s);
    const cur = s.tuition?.currency || '';
    const t = s.tuition || {};
    const lc = (countryById[s.countryId] || {}).livingCost || {};
    return `
      <div class="form-grid">
        <div class="field"><label for="c-years">Số năm học</label><select id="c-years" name="years">${[1, 2, 3, 4, 5].map(n => `<option value="${n}" ${n === o.years ? 'selected' : ''}>${n} năm</option>`).join('')}</select></div>
        <div class="field"><label for="c-increase">Học phí tăng mỗi năm</label><input id="c-increase" name="increase" type="number" min="0" max="15" step="0.5" value="${o.increase}"><div class="hint">%/năm, áp dụng cả sinh hoạt phí</div></div>
      </div>
      <div class="field"><label>Mức học phí <span class="hint">(khác nhau theo ngành)</span></label>
        <div class="radio-row">
          <label><input type="radio" name="level" value="min"> Thấp nhất<br><small>${money(t.min, cur)}</small></label>
          <label><input type="radio" name="level" value="avg" checked> Trung bình<br><small>${money(Math.round(avg(t.min, t.max)), cur)}</small></label>
          <label><input type="radio" name="level" value="max"> Cao nhất<br><small>${money(t.max ?? t.min, cur)}</small></label>
        </div>
      </div>
      <div class="field"><label for="c-living">Sinh hoạt phí / năm (${esc(cur)})</label><input id="c-living" name="living" type="number" min="0" step="500" value="${o.living}">
        <div class="hint">${lc.note ? esc(lc.note) : ''}</div></div>
      <div class="form-grid">
        <div class="field"><label for="c-sch">Học bổng / năm (${esc(cur)})</label><input id="c-sch" name="scholarship" type="number" min="0" step="500" value="0"><div class="hint">${(s.scholarships || []).length ? 'VD: ' + esc(s.scholarships[0].name) + ' – ' + esc(s.scholarships[0].value) : esc(s.scholarshipNote || '')}</div></div>
        <div class="field"><label for="c-schy">Số năm nhận học bổng</label><select id="c-schy" name="scholarshipYears">${[1, 2, 3, 4, 5].map(n => `<option value="${n}" ${n === o.scholarshipYears ? 'selected' : ''}>${n} năm</option>`).join('')}</select></div>
        <div class="field"><label for="c-rate">Tỷ giá (VNĐ / 1 ${esc(cur)})</label><input id="c-rate" name="rate" type="number" min="1" step="10" value="${o.rate}"></div>
        <div class="field"><label for="c-up">Chi phí ban đầu (triệu VNĐ)</label><input id="c-up" name="upfront" type="number" min="0" step="5" value="${o.upfront}"><div class="hint">Phí visa, vé máy bay, khám sức khỏe, đặt cọc nhà…</div></div>
      </div>`;
  }

  function costResultHtml(s, o) {
    const e = estimateCost(s, o);
    const cur = e.currency;
    const vnd = x => vndShort(x * o.rate);
    const parts = [
      ['Học phí', e.sum('tuition') * o.rate, 'var(--primary-2)'],
      ['Sinh hoạt', e.sum('living') * o.rate, 'var(--accent)'],
      ['Chi phí ban đầu', e.upfrontVND, 'var(--warn)']
    ];
    const gross = parts.reduce((a, p) => a + p[1], 0) || 1;
    const sch = e.sum('scholarship') * o.rate;
    return `
      <div class="card">
        <div class="muted small">${flag(s.countryId)} ${esc(s.name)} · ${o.years} năm</div>
        <div class="cost-big">≈ ${vndShort(e.totalVND)} VNĐ</div>
        <p class="muted" style="margin:0">Trung bình ≈ <strong>${vndShort(e.totalVND / o.years)}</strong>/năm · <strong>${vndShort(e.totalVND / (o.years * 12))}</strong>/tháng${sch ? ` · đã trừ học bổng ≈ ${vndShort(sch)}` : ''}</p>
        <div class="stack-bar">${parts.map(p => `<i style="width:${p[1] / gross * 100}%;background:${p[2]}" title="${p[0]}"></i>`).join('')}</div>
        <div class="legend">${parts.map(p => `<span><b style="background:${p[2]}"></b>${p[0]}: ${vndShort(p[1])}</span>`).join('')}${sch ? `<span><b style="background:var(--ok)"></b>Học bổng: −${vndShort(sch)}</span>` : ''}</div>
      </div>
      <div class="card table-wrap">
        <h3>Chi tiết từng năm (${esc(cur)})</h3>
        <table class="data">
          <thead><tr><th>Năm</th><th class="num">Học phí</th><th class="num">Sinh hoạt</th><th class="num">Học bổng</th><th class="num">Tổng</th></tr></thead>
          <tbody>${e.rows.map(r => `<tr><td>Năm ${r.year}</td><td class="num">${nf.format(Math.round(r.tuition))}</td><td class="num">${nf.format(Math.round(r.living))}</td><td class="num">${r.scholarship ? '−' + nf.format(Math.round(r.scholarship)) : '—'}</td><td class="num"><strong>${nf.format(Math.round(r.total))}</strong><div class="muted small">≈ ${vnd(r.total)}</div></td></tr>`).join('')}</tbody>
        </table>
        <p class="muted small" style="margin-top:8px">Ước tính tham khảo, chưa gồm bảo hiểm y tế bắt buộc (OSHC, IHS…), phí sinh viên và chi tiêu cá nhân lớn. Học phí thực tế theo ngành và năm nhập học.</p>
      </div>
      <div class="btn-row">${saveBtn(s.id)}${compareBtn(s.id)}<a class="btn accent small" href="#/tu-van?school=${s.id}">Tư vấn tài chính & học bổng</a></div>`;
  }

  function bindCost(q) {
    const form = document.getElementById('cost-form');
    const fields = document.getElementById('cost-fields');
    const result = document.getElementById('cost-result');
    const num = (v, d) => { const n = parseFloat(v); return isNaN(n) || n < 0 ? d : n; };
    let s;
    const loadSchool = id => {
      s = schoolById[id];
      fields.innerHTML = costFieldsHtml(s);
      history.replaceState(null, '', '#/chi-phi?school=' + id);
      update();
    };
    function update() {
      const f = Object.fromEntries(new FormData(form));
      const d = costDefaults(s);
      const o = {
        years: num(f.years, d.years),
        level: f.level || 'avg',
        increase: Math.min(num(f.increase, d.increase), 50),
        living: num(f.living, d.living),
        scholarship: num(f.scholarship, 0),
        scholarshipYears: num(f.scholarshipYears, d.scholarshipYears),
        rate: num(f.rate, d.rate) || d.rate,
        upfront: num(f.upfront, d.upfront)
      };
      result.innerHTML = flagify(costResultHtml(s, o));
    }
    form.addEventListener('change', e => { if (e.target.name === 'school') loadSchool(e.target.value); else update(); });
    form.addEventListener('input', e => { if (e.target.name !== 'school') update(); });
    form.addEventListener('submit', e => e.preventDefault());
    loadSchool(form.school.value);
    // Đến từ trang Học bổng: điền sẵn giá trị học bổng mỗi năm
    if (q.sch > 0) {
      form.scholarship.value = Math.round(q.sch);
      update();
    }
  }

  /* ---------- Học bổng ---------- */
  // Giá trị ước tính mỗi năm (tiền tệ nước sở tại) để sắp xếp; null nếu không quy ra số được
  function scholarshipPerYear(s, sc) {
    const years = DEFAULT_YEARS[s.countryId] || 4;
    const a = sc.amount;
    if (a && (a.min != null || a.max != null)) {
      const v = avg(a.min ?? a.max, a.max ?? a.min);
      return a.per === 'total' || a.per === 'once' ? v / years : v;
    }
    if (sc.coverage === 'full' && s.tuition) return avg(s.tuition.min, s.tuition.max);
    return null;
  }
  const allScholarships = () => D.schools.flatMap(s => (s.scholarships || []).map((sc, i) => {
    const perYear = scholarshipPerYear(s, sc);
    return { s, sc, key: s.id + '-' + i, perYear, perYearVND: perYear == null ? null : toVND(perYear, s.tuition?.currency || (countryById[s.countryId] || {}).currency) };
  }));

  function viewScholarships(q) {
    const total = allScholarships().length;
    const none = D.schools.filter(s => !(s.scholarships || []).length);
    return `
      ${crumb([['Học bổng']])}
      <h1>Học bổng cho sinh viên quốc tế</h1>
      <p class="muted">${total} học bổng bậc cử nhân của ${D.schools.length - none.length} trường. Lọc theo quốc gia, cách xét và ngành; bấm "Tính chi phí" để xem tổng chi phí sau khi trừ học bổng.</p>
      <div class="layout">
        <form class="card filters" id="sch-filters">
          <h3>Bộ lọc</h3>
          <div class="field"><label for="s-country">Quốc gia</label><select id="s-country" name="country">${countryOptions(q.country)}</select></div>
          <div class="field"><label for="s-major">Trường có ngành</label><select id="s-major" name="major">${majorOptions(q.major)}</select></div>
          <div class="field"><label>Cách xét</label>
            <div class="radio-row">
              <label><input type="radio" name="auto" value="" ${!q.auto ? 'checked' : ''}> Tất cả</label>
              <label><input type="radio" name="auto" value="1" ${q.auto === '1' ? 'checked' : ''}> Xét tự động</label>
              <label><input type="radio" name="auto" value="0" ${q.auto === '0' ? 'checked' : ''}> Nộp đơn riêng</label>
            </div>
          </div>
          <div class="field"><label><input type="checkbox" name="full" value="1" ${q.full ? 'checked' : ''} style="width:auto"> Chỉ học bổng toàn phần</label></div>
          <button type="reset" class="btn secondary small">Xoá bộ lọc</button>
        </form>
        <div>
          <div class="result-bar">
            <strong id="sch-count"></strong>
            <select id="sch-sort" aria-label="Sắp xếp">
              <option value="value" ${q.sort !== 'rank' ? 'selected' : ''}>Giá trị cao nhất</option>
              <option value="rank" ${q.sort === 'rank' ? 'selected' : ''}>Trường xếp hạng cao nhất</option>
            </select>
          </div>
          <div class="grid" id="sch-results"></div>
          ${none.length ? `<div class="card" style="margin-top:16px">
            <h3>Trường gần như không có học bổng cử nhân cho sinh viên quốc tế</h3>
            <ul class="clean small">${none.map(s => `<li><a href="#/truong/${s.id}">${flag(s.countryId)} ${esc(s.name)}</a><div class="muted">${esc(s.scholarshipNote || '')}</div></li>`).join('')}</ul>
          </div>` : ''}
          <p class="muted small" style="margin-top:12px">Giá trị quy đổi mỗi năm là ước tính để so sánh. Điều kiện và hạn nộp thay đổi theo từng năm, hãy kiểm tra trang học bổng của trường. ${RATE_NOTE}</p>
        </div>
      </div>`;
  }

  function scholarshipCard({ s, sc, perYear, perYearVND }) {
    const cur = s.tuition?.currency || (countryById[s.countryId] || {}).currency;
    return `<article class="card">
      <div class="detail-head" style="gap:8px">
        <div>
          <h3 style="margin-bottom:4px">${esc(sc.name)}</h3>
          <a href="#/truong/${s.id}" class="small">${flag(s.countryId)} ${esc(s.name)}</a> <span class="muted small">· QS #${rankText(s)}</span>
        </div>
        <span class="chip ok">${esc(sc.value)}</span>
      </div>
      <div class="chips" style="margin:10px 0">
        ${sc.auto === true ? '<span class="chip primary">Xét tự động</span>' : sc.auto === false ? '<span class="chip accent">Nộp đơn riêng</span>' : ''}
        ${sc.coverage === 'full' ? '<span class="chip ok">Toàn phần</span>' : ''}
        ${sc.deadline ? `<span class="chip">⏰ ${esc(sc.deadline)}</span>` : ''}
        ${perYearVND ? `<span class="chip">≈ ${vndShort(perYearVND)}/năm</span>` : ''}
      </div>
      ${sc.note ? `<p class="muted small">${esc(sc.note)}</p>` : ''}
      <div class="btn-row">
        ${sc.url ? `<a class="btn small secondary" href="${safeUrl(sc.url)}" target="_blank" rel="noopener">Trang học bổng ↗</a>` : ''}
        <a class="btn small" href="#/chi-phi?school=${s.id}${perYear ? '&sch=' + Math.round(perYear) : ''}">Tính chi phí sau học bổng</a>
        ${saveBtn(s.id)}
      </div>
    </article>`;
  }

  function bindScholarships() {
    const form = document.getElementById('sch-filters');
    const sort = document.getElementById('sch-sort');
    const update = () => {
      const f = Object.fromEntries(new FormData(form));
      let list = allScholarships().filter(({ s, sc }) =>
        (!f.country || s.countryId === f.country) &&
        (!f.major || (s.majorIds || []).includes(f.major)) &&
        (!f.auto || sc.auto === (f.auto === '1')) &&
        (!f.full || sc.coverage === 'full'));
      if (sort.value === 'rank') list.sort((a, b) => (a.s.qsRank || 9999) - (b.s.qsRank || 9999));
      else list.sort((a, b) => (b.perYearVND ?? -1) - (a.perYearVND ?? -1));
      document.getElementById('sch-count').textContent = `${list.length} học bổng`;
      document.getElementById('sch-results').innerHTML = flagify(list.length ? list.map(scholarshipCard).join('')
        : '<div class="card empty"><div class="icon">🎓</div><p>Không có học bổng khớp bộ lọc.</p></div>');
      const qs = new URLSearchParams(Object.entries({ ...f, sort: sort.value === 'rank' ? 'rank' : '' }).filter(([, v]) => v)).toString();
      history.replaceState(null, '', '#/hoc-bong' + (qs ? '?' + qs : ''));
    };
    form.addEventListener('change', update);
    sort.addEventListener('change', update);
    form.addEventListener('reset', () => setTimeout(update, 0));
    update();
  }

  /* ---------- Lộ trình theo kỳ nhập học ---------- */
  const RM = () => window.ISSS_ROADMAP;
  const pad2 = n => String(n).padStart(2, '0');
  const dmy = d => `${pad2(d.getDate())}/${pad2(d.getMonth() + 1)}/${d.getFullYear()}`;
  const my = d => `tháng ${d.getMonth() + 1}/${d.getFullYear()}`;
  const dayStart = d => new Date(d.getFullYear(), d.getMonth(), d.getDate());
  function itemWhen(x) {
    if (!x.to) return dmy(x.from);
    return (x.to - x.from) / 864e5 >= 45 ? `${my(x.from)} – ${my(x.to)}` : `${dmy(x.from)} – ${dmy(x.to)}`;
  }
  function itemStatus(x, today) {
    const end = x.to || x.from;
    if (dayStart(end) < today) return 'past';
    if (dayStart(x.from) <= today) return 'now';
    return 'future';
  }
  // Đọc lựa chọn từ URL, hoặc lộ trình đã lưu, hoặc mặc định: nước của trường đầu tiên trong danh sách, kỳ gần nhất
  function roadmapParams(q) {
    const saved = store.get('roadmap', null) || {};
    const country = countryById[q.country] ? q.country : saved.country || (schoolById[getShortlist()[0]] || {}).countryId || 'my';
    const options = RM().upcoming(country);
    // Mặc định: kỳ gần nhất còn ít nhất 9 tháng để chuẩn bị
    const soonest = new Date(); soonest.setMonth(soonest.getMonth() + 9);
    const start = options.find(o => o.value === q.start) || options.find(o => o.value === saved.start && country === saved.country)
      || options.find(o => o.date >= soonest) || options[0];
    const flag = (k, def) => q[k] != null ? q[k] === '1' : (saved.country === country ? !!saved[k] : def);
    return { country, options, start, ielts: flag('ielts', false), ox: flag('ox', false) };
  }
  function roadmapItems(p) {
    const [date, key] = p.start.value.split('|');
    const [y, m, d] = date.split('-').map(Number);
    return RM().plan(p.country, new Date(y, m - 1, d), { intake: key, skipIelts: p.ielts, oxbridge: p.ox });
  }

  function viewRoadmap(q) {
    const p = roadmapParams(q);
    return `
      ${crumb([['Lộ trình']])}
      <h1>Lộ trình chuẩn bị du học</h1>
      <p class="muted">Chọn nước và kỳ nhập học, ISSS lập lịch ngược từ ngày nhập học: khi nào thi IELTS, khi nào nộp hồ sơ, chứng minh tài chính, xin visa và lên đường.</p>
      <div class="detail-grid rm-grid">
        <form class="card sticky" id="rm-form">
          <div class="field"><label for="rm-country">Quốc gia</label><select id="rm-country" name="country">${D.countries.map(c => `<option value="${c.id}" ${c.id === p.country ? 'selected' : ''}>${esc(c.name)}</option>`).join('')}</select></div>
          <div class="field"><label for="rm-start">Kỳ nhập học</label><select id="rm-start" name="start">${p.options.map(o => `<option value="${o.value}" ${o.value === p.start.value ? 'selected' : ''}>${esc(o.label)}</option>`).join('')}</select>
            <div class="hint">Ngày nhập học là ngày điển hình; mỗi trường có thể lệch vài tuần.</div></div>
          <div class="field"><label><input type="checkbox" name="ielts" value="1" ${p.ielts ? 'checked' : ''} style="width:auto"> Đã có IELTS đạt yêu cầu</label></div>
          ${p.country === 'anh' ? `<div class="field"><label><input type="checkbox" name="ox" value="1" ${p.ox ? 'checked' : ''} style="width:auto"> Nộp Oxford, Cambridge hoặc Y/Nha/Thú y</label></div>` : ''}
          <div class="grid" style="gap:8px">
            <button type="button" class="btn" id="rm-save">Lưu vào Hồ sơ của tôi</button>
            <button type="button" class="btn secondary" id="rm-ics">📅 Tải về lịch (.ics)</button>
            <button type="button" class="btn secondary" id="rm-print">🖨 In lộ trình</button>
          </div>
          <p class="muted small" style="margin-top:10px">Các mốc là khuyến nghị chung và hạn phổ biến; hạn chính xác của từng trường có thể khác, hãy kiểm tra trang tuyển sinh của trường.</p>
        </form>
        <div id="rm-result"></div>
      </div>`;
  }

  function roadmapResultHtml(p) {
    const items = roadmapItems(p);
    const today = dayStart(new Date());
    const startItem = items[items.length - 1];
    const days = Math.round((dayStart(startItem.from) - today) / 864e5);
    const missed = items.filter(x => x.kind === 'deadline' && x.id !== 'start' && itemStatus(x, today) === 'past');
    const next = items.find(x => itemStatus(x, today) !== 'past');
    const later = p.options[p.options.indexOf(p.start) + 1];
    const c = countryById[p.country];
    let lastStep = '';
    return `
      <div class="card">
        <div class="muted small">${c.flag} Du học ${esc(c.name)} · ${esc(p.start.label)}</div>
        <div class="cost-big">Còn ${days >= 60 ? Math.round(days / 30.4) + ' tháng' : days + ' ngày'}</div>
        <p class="muted" style="margin:0">đến ngày nhập học dự kiến <strong>${dmy(startItem.from)}</strong>${next ? ` · Việc tiếp theo: <strong>${esc(next.title)}</strong> (${itemWhen(next)})` : ''}</p>
        ${missed.length ? `<div class="notice" style="margin-top:12px">⚠ Đã qua ${missed.length} hạn quan trọng: ${missed.map(x => esc(x.title)).join('; ')}. Một số trường vẫn nhận hồ sơ muộn${later ? `, hoặc cân nhắc <button type="button" class="link-btn" data-rm-start="${later.value}" style="color:var(--primary-2);font-weight:600">${esc(later.label)}</button>` : ''}.</div>` : ''}
      </div>
      <ol class="timeline">
        ${items.map(x => {
          const st = itemStatus(x, today);
          const head = x.step !== lastStep ? `<li class="tl-step">${esc(x.step)}</li>` : '';
          lastStep = x.step;
          return head + `<li class="tl-item ${st} ${x.kind}">
            <div class="tl-when">${itemWhen(x)}</div>
            <div class="tl-body">
              <strong>${esc(x.title)}</strong>
              ${x.kind === 'deadline' && x.id !== 'start' ? '<span class="chip accent small">Hạn chót</span>' : ''}
              ${st === 'past' ? '<span class="chip small">Đã qua</span>' : st === 'now' ? '<span class="chip ok small">Đang diễn ra</span>' : ''}
              ${x.detail ? `<div class="muted small">${esc(x.detail)}</div>` : ''}
              ${x.link ? `<a class="small" href="${x.link}">Xem trường ›</a>` : ''}
            </div>
          </li>`;
        }).join('')}
      </ol>
      <div class="btn-row"><a class="btn" href="#/ho-so?country=${p.country}">Checklist giấy tờ ${esc(c.name)}</a><a class="btn accent" href="#/tu-van?country=${p.country}">Tư vấn lộ trình 1-1</a></div>`;
  }

  // Xuất lịch iCalendar để thêm vào Google Calendar / lịch điện thoại
  function roadmapIcs(p) {
    const ymd = d => `${d.getFullYear()}${pad2(d.getMonth() + 1)}${pad2(d.getDate())}`;
    const escIcs = s => String(s).replace(/[\\;,]/g, m => '\\' + m).replace(/\n/g, '\\n');
    const stamp = new Date().toISOString().replace(/[-:]/g, '').replace(/\.\d+Z$/, 'Z');
    const ev = roadmapItems(p).map((x, i) => [
      'BEGIN:VEVENT',
      `UID:isss-${p.country}-${p.start.value.split('|')[0]}-${i}@isss`,
      `DTSTAMP:${stamp}`,
      `DTSTART;VALUE=DATE:${ymd(x.from)}`,
      `DTEND;VALUE=DATE:${ymd(new Date(x.from.getTime() + 864e5))}`,
      `SUMMARY:${escIcs((x.kind === 'deadline' ? '⏰ ' : '') + x.title)}`,
      `DESCRIPTION:${escIcs((x.to ? 'Thời gian: ' + itemWhen(x) + '. ' : '') + (x.detail || ''))}`,
      'END:VEVENT'].join('\r\n'));
    return ['BEGIN:VCALENDAR', 'VERSION:2.0', 'PRODID:-//ISSS//Lo trinh du hoc//VI', 'CALSCALE:GREGORIAN', ...ev, 'END:VCALENDAR'].join('\r\n');
  }

  function bindRoadmap(q) {
    const form = document.getElementById('rm-form');
    const result = document.getElementById('rm-result');
    let p = roadmapParams(q);
    const draw = () => {
      result.innerHTML = flagify(roadmapResultHtml(p));
      const qs = new URLSearchParams({ country: p.country, start: p.start.value, ...(p.ielts ? { ielts: '1' } : {}), ...(p.ox ? { ox: '1' } : {}) });
      history.replaceState(null, '', '#/lo-trinh?' + qs);
    };
    form.addEventListener('change', e => {
      const f = Object.fromEntries(new FormData(form));
      // Đổi nước thì danh sách kỳ nhập học và tuỳ chọn Oxbridge thay đổi: vẽ lại cả trang
      if (e.target.name === 'country') {
        history.replaceState(null, '', '#/lo-trinh?country=' + f.country + (f.ielts ? '&ielts=1' : ''));
        render();
        return;
      }
      p = roadmapParams({ country: f.country, start: f.start, ielts: f.ielts ? '1' : '0', ox: f.ox ? '1' : '0' });
      draw();
    });
    result.addEventListener('click', e => {
      const b = e.target.closest('[data-rm-start]');
      if (!b) return;
      form.start.value = b.dataset.rmStart;
      form.start.dispatchEvent(new Event('change', { bubbles: true }));
    });
    document.getElementById('rm-save').addEventListener('click', () => {
      store.set('roadmap', { country: p.country, start: p.start.value, ielts: p.ielts, ox: p.ox });
      toast('Đã lưu lộ trình vào Hồ sơ của tôi');
    });
    document.getElementById('rm-ics').addEventListener('click', () => {
      const blob = new Blob([roadmapIcs(p)], { type: 'text/calendar;charset=utf-8' });
      const a = document.createElement('a');
      a.href = URL.createObjectURL(blob);
      a.download = `lo-trinh-du-hoc-${p.country}-${p.start.value.slice(0, 7)}.ics`;
      document.body.appendChild(a);
      a.click();
      setTimeout(() => { URL.revokeObjectURL(a.href); a.remove(); }, 1000);
      toast('Đã tải file lịch. Mở file để thêm vào Google Calendar hoặc lịch điện thoại.');
    });
    document.getElementById('rm-print').addEventListener('click', () => window.print());
    draw();
  }

  // Thẻ tóm tắt trong Hồ sơ của tôi: 3 việc sắp tới của lộ trình đã lưu
  function roadmapCard() {
    const saved = store.get('roadmap', null);
    if (!saved || !RM()) return `<div class="card"><h3>🗓 Lộ trình của tôi</h3><p class="muted small">Chưa có lộ trình. <a href="#/lo-trinh">Lập lộ trình theo kỳ nhập học</a></p></div>`;
    const p = roadmapParams({});
    const today = dayStart(new Date());
    const next = roadmapItems(p).filter(x => itemStatus(x, today) !== 'past').slice(0, 3);
    return `<div class="card"><h3>🗓 Lộ trình của tôi</h3>
      <p class="muted small" style="margin-bottom:6px">${flag(p.country)} ${esc(cname(p.country))} · ${esc(p.start.label)}</p>
      <ul class="clean small">${next.map(x => `<li><strong>${esc(x.title)}</strong><div class="muted">${itemWhen(x)}</div></li>`).join('')}</ul>
      <a class="small" href="#/lo-trinh">Xem toàn bộ lộ trình ›</a></div>`;
  }

  /* ---------- Câu hỏi thường gặp ---------- */
  const FAQ = () => window.ISSS_FAQ || [];
  const faqAnswer = item => { try { return typeof item.a === 'function' ? item.a(window.ISSS) : item.a; } catch (e) { return ''; } };
  const faqLinks = item => (item.links || []).map(([t, h]) => h === 'chat' ? `<button class="btn small secondary" data-open-chat>${esc(t)}</button>` : `<a class="btn small secondary" href="${h}">${esc(t)}</a>`).join('');

  /* ---------- Nguồn tham khảo ---------- */
  const RES = window.ISSS_RESOURCES || { types: {}, items: [] };
  const RES_GROUPS = [['my', 'Mỹ'], ['uc', 'Úc'], ['canada', 'Canada'], ['anh', 'Anh'], ['', 'Dùng chung mọi nước'], ['vn', 'Tại Việt Nam']];
  const resCard = (r, school) => {
    const direct = school && typeof r.search === 'function' ? r.search(school.name.replace(/\s*\(.*?\)\s*/g, ' ').trim()) : '';
    return `<div class="card res-card">
      <div class="chips"><span class="chip ${r.type === 'gov' ? 'ok' : r.type === 'rank' ? 'primary' : ''}">${esc(RES.types[r.type] || '')}</span><span class="muted small">${esc(r.org)}</span></div>
      <h3><a href="${safeUrl(direct || r.url)}" target="_blank" rel="noopener">${esc(r.name)} ↗</a></h3>
      <p class="small">${esc(r.use)}</p>
      ${school && r.lookup && !direct ? `<p class="small"><strong>Cách tra:</strong> ${esc(r.lookup)}: <q>${esc(school.name)}</q></p>` : ''}
      ${school && direct ? `<p class="small"><strong>Liên kết đã điền sẵn tên trường.</strong></p>` : ''}
      ${r.tip ? `<p class="muted small">💡 ${esc(r.tip)}</p>` : ''}
    </div>`;
  };

  function viewResources(q) {
    const types = Object.entries(RES.types);
    return `
      ${crumb([['Nguồn tham khảo']])}
      <h1>Nguồn tham khảo chính thức</h1>
      <p class="muted" style="max-width:780px">Số liệu trên ISSS được tổng hợp từ trang của trường và cơ quan nhà nước, nhưng học phí, chính sách visa và thứ hạng thay đổi mỗi năm. Đây là ${RES.items.length} nguồn giáo dục uy tín khác để bạn tự kiểm tra và tìm hiểu sâu hơn.</p>

      <div class="grid grid-3" style="margin:18px 0">
        <div class="card"><h3>1. Nguồn gốc trước, bản tổng hợp sau</h3><p class="small">Học phí, hạn nộp, điều kiện tiếng Anh: lấy từ trang của chính trường. Visa, làm thêm, ở lại làm việc: lấy từ trang chính phủ (.gov, .gov.au, canada.ca, gov.uk).</p></div>
        <div class="card"><h3>2. Kiểm tra tư cách pháp lý</h3><p class="small">Trước khi đặt cọc, xác nhận trường và khoá học có trong danh sách được nhận sinh viên quốc tế: SEVP (Mỹ), CRICOS (Úc), DLI (Canada), Register of student sponsors (Anh).</p></div>
        <div class="card"><h3>3. So sánh nhiều bảng xếp hạng</h3><p class="small">Mỗi bảng đo một thứ khác nhau. Xem thêm dữ liệu đầu ra theo ngành (lương, việc làm, mức hài lòng) từ College Scorecard, ComparED, Discover Uni.</p></div>
      </div>

      <div class="card" style="margin-bottom:18px">
        <h2>Các bảng xếp hạng khác nhau thế nào?</h2>
        <div class="table-wrap"><table class="data">
          <thead><tr><th>Bảng xếp hạng</th><th>Đo chủ yếu</th><th>Hữu ích khi</th></tr></thead>
          <tbody>
            <tr><td><strong>QS</strong> (hiện trên ISSS)</td><td>Khảo sát danh tiếng học thuật và nhà tuyển dụng, tỷ lệ giảng viên/sinh viên, trích dẫn, quốc tế hoá</td><td>Quan tâm danh tiếng trường với nhà tuyển dụng</td></tr>
            <tr><td><strong>THE</strong> (hiện trên ISSS)</td><td>Giảng dạy, môi trường và chất lượng nghiên cứu, quốc tế hoá, thu nhập từ doanh nghiệp</td><td>Muốn cái nhìn cân bằng giữa giảng dạy và nghiên cứu</td></tr>
            <tr><td><strong>ARWU</strong></td><td>Giải Nobel, Fields, bài báo Nature/Science, nhà khoa học được trích dẫn nhiều</td><td>Định theo hướng nghiên cứu, tiến sĩ</td></tr>
            <tr><td><strong>U.S. News Global</strong></td><td>Số liệu công bố khoa học và danh tiếng nghiên cứu, có bảng theo lĩnh vực</td><td>So sánh sức mạnh nghiên cứu theo ngành</td></tr>
          </tbody>
        </table></div>
        <p class="muted small">Chênh vài chục bậc giữa hai trường hầu như không có ý nghĩa. Hãy ưu tiên chất lượng ngành bạn học, chi phí và quyền ở lại làm việc.</p>
      </div>

      <div class="card" style="margin-bottom:12px">
        <div class="tabs" id="res-country" role="group" aria-label="Lọc theo quốc gia">
          <button data-v="" class="${!q.country ? 'active' : ''}">Tất cả</button>
          ${RES_GROUPS.map(([id, n]) => `<button data-v="${id || 'chung'}" class="${q.country === (id || 'chung') ? 'active' : ''}">${id && countryById[id] ? countryById[id].flag + ' ' : ''}${esc(n)}</button>`).join('')}
        </div>
        <label class="sr-only" for="res-type">Loại nguồn</label>
        <select id="res-type"><option value="">Mọi loại nguồn</option>${types.map(([k, v]) => `<option value="${k}" ${q.type === k ? 'selected' : ''}>${esc(v)}</option>`).join('')}</select>
      </div>
      <div id="res-list"></div>
      <p class="muted small" style="margin-top:14px">ISSS không có liên kết thương mại với các trang trên. Nếu thấy số liệu của ISSS khác với nguồn gốc, hãy tin nguồn gốc và <a href="#/tu-van">báo cho tư vấn viên</a>.</p>`;
  }

  function bindResources(q) {
    const tabs = document.getElementById('res-country');
    const type = document.getElementById('res-type');
    const list = document.getElementById('res-list');
    let country = q.country || '';
    const draw = () => {
      const key = country === 'chung' ? '' : country;
      const groups = RES_GROUPS.filter(([id]) => !country || id === key);
      const html = groups.map(([id, n]) => {
        const items = RES.items.filter(r => r.country === id && (!type.value || r.type === type.value));
        return items.length ? `<section class="section"><h2>${id && countryById[id] ? countryById[id].flag + ' ' : ''}${esc(n)}</h2><div class="grid grid-2">${items.map(r => resCard(r)).join('')}</div></section>` : '';
      }).join('');
      list.innerHTML = flagify(html || '<div class="empty"><p>Không có nguồn phù hợp bộ lọc.</p></div>');
      const qs = new URLSearchParams(Object.entries({ country, type: type.value }).filter(([, v]) => v)).toString();
      history.replaceState(null, '', '#/nguon' + (qs ? '?' + qs : ''));
    };
    tabs.addEventListener('click', e => {
      const b = e.target.closest('button');
      if (!b) return;
      country = b.dataset.v;
      tabs.querySelectorAll('button').forEach(x => x.classList.toggle('active', x === b));
      draw();
    });
    type.addEventListener('change', draw);
    draw();
  }

  function viewFaq(q) {
    const cats = [...new Set(FAQ().map(x => x.cat))];
    return `
      ${crumb([['Câu hỏi thường gặp']])}
      <h1>Câu hỏi thường gặp</h1>
      <p class="muted">Những điều học sinh và phụ huynh hay hỏi khi bắt đầu tìm hiểu du học. Chưa thấy câu trả lời? <a href="#/tu-van">Hỏi tư vấn viên</a> hoặc <button class="link-btn" data-open-chat style="color:var(--primary-2)">hỏi trợ lý</button>.</p>
      <div class="card" style="margin:16px 0">
        <input id="faq-search" type="search" placeholder="Tìm câu hỏi, ví dụ: chứng minh tài chính" value="${esc(q.q || '')}" aria-label="Tìm câu hỏi">
        <div class="tabs" id="faq-cats" style="margin:12px 0 0">
          <button data-c="" class="active">Tất cả</button>
          ${cats.map(c => `<button data-c="${esc(c)}">${esc(c)}</button>`).join('')}
        </div>
      </div>
      <div id="faq-list"></div>`;
  }

  function bindFaq(q) {
    const input = document.getElementById('faq-search');
    const tabs = document.getElementById('faq-cats');
    const list = document.getElementById('faq-list');
    let cat = '';
    // Bỏ dấu để gõ "chung minh" vẫn tìm được "chứng minh"
    const norm = s => String(s).toLowerCase().normalize('NFD').replace(/\p{M}/gu, '').replace(/đ/g, 'd');
    const draw = () => {
      const t = norm(input.value.trim());
      const items = FAQ().map((x, i) => ({ ...x, i })).filter(x => (!cat || x.cat === cat) &&
        (!t || norm(x.q).includes(t) || (x.kw || []).some(k => t.includes(norm(k)) || norm(k).includes(t))));
      list.innerHTML = flagify(items.length ? items.map(x => `
        <details class="card faq-item" id="faq-${x.i}" ${q.open == x.i ? 'open' : ''}>
          <summary><span class="chip">${esc(x.cat)}</span> ${esc(x.q)}</summary>
          <div class="faq-a">${faqAnswer(x)}<div class="btn-row">${faqLinks(x)}</div></div>
        </details>`).join('') : '<div class="card empty"><p>Không tìm thấy câu hỏi phù hợp. <a href="#/tu-van">Gửi câu hỏi cho tư vấn viên</a>.</p></div>');
      tabs.querySelectorAll('button').forEach(b => b.classList.toggle('active', b.dataset.c === cat));
    };
    input.addEventListener('input', draw);
    tabs.addEventListener('click', e => { const b = e.target.closest('button'); if (b) { cat = b.dataset.c; draw(); } });
    draw();
    if (q.open != null) document.getElementById('faq-' + q.open)?.scrollIntoView({ block: 'start' });
  }

  /* ---------- Sau khi render ---------- */
  function afterRender(a, b, q) {
    app.removeEventListener('click', onAppClick);
    if (!a) {
      document.getElementById('hero-search').addEventListener('submit', e => {
        e.preventDefault();
        const qs = new URLSearchParams([...new FormData(e.target)].filter(([, v]) => v)).toString();
        location.hash = '#/truong' + (qs ? '?' + qs : '');
      });
    }
    if (a === 'truong' && !b) bindSchoolFilters(q);
    if (a === 'nganh' && b && majorById[b]) bindMajorTabs(b, q);
    if (a === 'viec-lam' && !b) bindCareers(q);
    if (a === 'tu-van') bindConsult();
    if (a === 'ho-so') bindApplication(q);
    if (a === 'so-sanh') bindCompare(q);
    if (a === 'chi-phi') bindCost(q);
    if (a === 'hoc-bong') bindScholarships(q);
    if (a === 'hoi-dap') bindFaq(q);
    if (a === 'lo-trinh') bindRoadmap(q);
    if (a === 'nguon') bindResources(q);
  }

  /* ---------- Khởi động ---------- */
  document.querySelector('.nav-toggle').addEventListener('click', e => {
    const nav = document.querySelector('.main-nav');
    const open = nav.classList.toggle('open');
    e.currentTarget.setAttribute('aria-expanded', open);
  });
  document.getElementById('data-note').textContent = `Dữ liệu cập nhật ${D.updated || ''} từ website chính thức của các trường và cơ quan thống kê (BLS, Jobs and Skills Australia, Job Bank, ONS). Học phí, xếp hạng và chính sách visa có thể thay đổi – vui lòng kiểm tra lại trước khi nộp hồ sơ. ${RATE_NOTE}`;

  window.ISSS = { D, store, esc, rankText, theText, SHORT_WORK, DEFAULT_YEARS, flagify, toVND, vndShort, money, tuitionText, tuitionVND, flag, cname, countryById, schoolById, majorById, careerById, careersForMajor, schoolsForMajor, toggleShortlist, getShortlist };

  updateBadge();
  render();
  flushOutbox();
})();
