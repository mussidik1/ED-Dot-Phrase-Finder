import DATA, { CATEGORIES as BASE_CATS, COUNTS, TEXT as BASE_TEXT, DX, ICD, CALCS, SETS, REVIEWS } from './data.js';
import { createIndex, search, highlight, escapeHtml } from './search.js';
import { render as fillRender, pick, compose, progress, calcHTML, calcState } from './fill.js';
import { SUPABASE_URL, SUPABASE_KEY } from './config.js';

// ---------- storage (best effort; private mode can throw) ----------
const store = {
  get(key, fallback) {
    try { const v = localStorage.getItem(`eddot.${key}`); return v == null ? fallback : JSON.parse(v); } catch { return fallback; }
  },
  set(key, value) {
    try { localStorage.setItem(`eddot.${key}`, JSON.stringify(value)); } catch { /* ignore */ }
  },
};

// ---------- phrase library: built-in + approved community phrases + the user's own (this device only) ----------
const CATEGORIES = [...BASE_CATS, 'Community', 'My phrases'];
const CAT_COMMUNITY = BASE_CATS.length;
const CAT_MINE = BASE_CATS.length + 1;
const TYPE_NAMES = ['MDM', 'Discharge', 'Procedure', 'Score', 'Exam', 'Note'];
const BUILTIN = new Set(DATA.map((r) => r[0]));
const DOT_RE = /^[a-z][a-z0-9]{1,24}$/;
let TEXT = { ...BASE_TEXT };
let SOURCE = {}; // dot -> { kind: 'mine' | 'community', pack?, by? }
let mine = cleanPhrases(store.get('mine', []));
let community = cleanPhrases(store.get('community', []));
let index, byCode;

function cleanPhrases(list) {
  if (!Array.isArray(list)) return [];
  return list.filter((p) => p && DOT_RE.test(p.dot) && p.title && p.text && TYPE_NAMES.includes(p.type))
    .map((p) => ({ dot: p.dot, title: String(p.title).slice(0, 80), type: p.type, imp: String(p.imp || '').slice(0, 400), text: String(p.text).slice(0, 6000), pack: p.pack ? String(p.pack).slice(0, 40) : '', by: p.by ? String(p.by).slice(0, 120) : '' }));
}
function rebuild() {
  TEXT = { ...BASE_TEXT };
  SOURCE = {};
  const extra = [];
  const add = (p, cat, kind) => {
    if (TEXT[p.dot] !== undefined) return;
    TEXT[p.dot] = p.text;
    SOURCE[p.dot] = { kind, pack: p.pack, by: p.by };
    extra.push([p.dot, p.title, p.imp, '', cat, p.type, 0, p.type]);
  };
  for (const p of mine) add(p, CAT_MINE, 'mine');
  for (const p of community) add(p, CAT_COMMUNITY, 'community');
  index = createIndex([...DATA, ...extra], CATEGORIES);
  byCode = new Map(index.entries.map((e) => [e.code, e]));
}
rebuild();

const $ = (s) => document.querySelector(s);
// Attach a listener only when the element exists, so one missing element can never stop the whole app.
const on = (target, type, fn) => {
  const el = typeof target === 'string' ? $(target) : target;
  if (el) el.addEventListener(type, fn);
};
const root = document.documentElement;
const qEl = $('#q');
const resultsEl = $('#results');
const statusEl = $('#status');
const tabsEl = $('#tabs');
const clearBtn = $('#clear');
const toastEl = $('#toast');
const aboutEl = $('#about');
const installPage = $('#install-page');

const SLUG = CATEGORIES.map((c) => c.toLowerCase().replace(/[^a-z]+/g, '-').replace(/^-|-$/g, ''));
const STAR = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3.6l2.6 5.3 5.8.8-4.2 4.1 1 5.8L12 16.9l-5.2 2.7 1-5.8-4.2-4.1 5.8-.8z" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linejoin="round"/></svg>';

const QUICK = [
  'Chest pain', 'AFib RVR', 'Sepsis', 'Syncope', 'Headache', 'Abdominal pain', 'Kidney stone', 'SOB',
  'COPD', 'Stroke', 'Head injury', 'Back pain', 'Overdose', 'Peds fever', 'Laceration repair',
  'Critical care', 'AMA',
];

const ua = navigator.userAgent;
const isIOS = /iphone|ipad|ipod/i.test(ua) || (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);
const isIPhone = /iphone|ipod/i.test(ua);
const isAndroid = /android/i.test(ua);
const inOtherApp = /FBAN|FBAV|Instagram|LinkedInApp|Line\/|Snapchat|GSA\//i.test(ua);
const device = isIOS ? 'ios' : isAndroid ? 'android' : 'desktop';
const isApp = root.classList.contains('is-app');

let starred = new Set(store.get('starred', []).filter((c) => byCode.has(c)));
let recent = store.get('recent', []).filter((c) => byCode.has(c));
let category = -1;
let installOpen = false;

// ---------- rendering ----------
// Let long compounds such as "nausea/vomiting" wrap after each slash (closing tags are left alone).
const breakSlashes = (html) => html.replace(/([^<])\//g, '$1/<wbr>');

// One- or two-line preview: the template minus its "MDM:" style label, with blanks shown as "…".
function previewText(text) {
  return text.replace(/^[A-Z][A-Za-z /()-]{0,30}:\s*/, '').replace(/^\*\*\*-year-old (with )?/, '').replace(/\s*\n+\s*/g, ' ').replace(/\*\*\*/g, '…').slice(0, 220);
}

function reviewHTML(code) {
  const src = SOURCE[code];
  if (src && src.kind === 'mine') return `<p class="review">Your phrase${src.pack ? ` from the ${escapeHtml(src.pack)} pack` : ''}, saved on this device only.</p>`;
  if (src && src.kind === 'community') return `<p class="review">Shared by ${escapeHtml(src.by || 'a clinician')} and approved for the library. Not independently reviewed.</p>`;
  const r = REVIEWS[code];
  return r ? `<p class="review ok">Reviewed by ${escapeHtml(r[0])} · ${escapeHtml(r[1])}</p>` : '<p class="review">Not yet clinically reviewed. Check it before you sign.</p>';
}

// The open card: calculator (score phrases), fill-in panel with copy buttons, review status, then diagnosis codes.
// The fill-in panel is drawn only when opened, so long result lists stay light.
function extrasHTML(e) {
  const parts = [];
  if (CALCS[e.code]) parts.push(`<details class="tpl calc-wrap" data-calc-open="${e.code}"><summary>Calculate</summary><div class="calc-slot"></div></details>`);
  const members = SETS[e.code];
  parts.push(`<details class="tpl" data-fill-open="${e.code}"><summary>${members ? 'Fill in the full note' : 'Fill in and copy'}</summary>
    ${members ? `<p class="set-list">Includes ${members.map((m) => `<span class="mono">.${escapeHtml(m)}</span>`).join(', ')}, in that order.</p>` : ''}
    <div class="fill" data-fill="${e.code}"></div>
    <p class="fill-progress" aria-live="polite"></p>
    <div class="actions">
      <button class="act primary" type="button" data-copy-filled="${e.code}">Copy filled text</button>
      <button class="act" type="button" data-copy="${e.code}">Copy blank template</button>
      <button class="act" type="button" data-fill-reset="${e.code}">Clear</button>
      <button class="act" type="button" data-copyname="${e.code}">Copy .${escapeHtml(e.code)}</button>
      <button class="act" type="button" data-edit="${e.code}">${SOURCE[e.code]?.kind === 'mine' ? 'Edit' : 'Make my version'}</button>
      ${SOURCE[e.code]?.kind === 'mine' ? `<button class="act danger" type="button" data-delete="${e.code}">Delete</button>` : ''}
    </div>
    ${reviewHTML(e.code)}
  </details>`);
  const dx = DX[e.code];
  if (dx && dx.length) {
    parts.push(`<details class="dx"><summary>Diagnosis codes <span class="count">${dx.length}</span></summary><ul>${dx.map((d) => {
      const name = escapeHtml(ICD[d] || '');
      return `<li><button class="icd" type="button" data-icd="${d}" aria-label="Copy ${d}: ${name}"><span class="icd-code">${d}</span><span class="icd-name">${name}</span></button></li>`;
    }).join('')}</ul></details>`);
  }
  return `\n  <div class="extra">${parts.join('')}</div>`;
}

function hitHTML(e, q, showSub = true) {
  const isStar = starred.has(e.code);
  const label = `Copy the .${e.code} template: ${e.name}`;
  return `<li class="hit" data-code="${e.code}" style="--tab: var(--cat-${SLUG[e.cat]})">
  <button class="copy" type="button" data-copy="${e.code}" aria-label="${escapeHtml(label)}">
    <span class="code"><span class="dot">.</span>${escapeHtml(e.code)}</span>
    <span class="name">${breakSlashes(q ? highlight(e.name, q) : escapeHtml(e.name))}</span>
    <span class="meta">${showSub ? `<span class="sub">${escapeHtml(CATEGORIES[e.cat])}</span>` : ''}<span class="tag${e.sub === 'Set' ? ' set' : ''}">${e.sub === 'Set' ? 'Full note' : escapeHtml(e.sub)}</span>${CALCS[e.code] ? '<span class="tag">Calculator</span>' : ''}${SOURCE[e.code]?.pack ? `<span class="tag">${escapeHtml(SOURCE[e.code].pack)}</span>` : ''}${/\(Spanish\)$/.test(e.name) ? '<span class="tag">Español</span>' : ''}</span>
  </button>
  <p class="preview">${escapeHtml(previewText(TEXT[e.code] || ''))}</p>${extrasHTML(e)}
  <button class="star" type="button" data-star="${e.code}" aria-pressed="${isStar}" aria-label="${isStar ? 'Unstar' : 'Star'} .${e.code}">${STAR}</button>
</li>`;
}

const list = (entries, q, showSub = true) => `<ul class="hits">${entries.map((e) => hitHTML(e, q, showSub)).join('')}</ul>`;

function renderTabs() {
  const used = new Set(index.entries.map((e) => e.cat));
  if (category >= 0 && !used.has(category)) category = -1;
  const tabs = [{ i: -1, name: 'All' }, ...CATEGORIES.map((name, i) => ({ i, name })).filter((t) => used.has(t.i))];
  tabsEl.innerHTML = `<div class="tabs-inner">${tabs.map((t) => `<button class="tab" type="button" data-cat="${t.i}" aria-pressed="${t.i === category}"${t.i >= 0 ? ` style="--tab-color: var(--cat-${SLUG[t.i]})"` : ''}>${escapeHtml(t.name)}</button>`).join('')}</div>`;
}

function renderHome() {
  const parts = [];
  parts.push('<div class="home">');
  if (!isApp && !store.get('installCardHidden', false)) {
    parts.push(`<div class="install-card web-only">
      <img src="icons/icon-192.png" alt="" width="52" height="52">
      <p class="ic-title">Use it like an app</p>
      <p class="ic-text">Add it to your Home Screen for one-tap access that works offline.</p>
      <div class="ic-actions">
        <button class="btn primary" type="button" data-open-install>Show me how</button>
        <button class="btn quiet" type="button" data-hide-card>Not now</button>
      </div>
    </div>`);
  }
  parts.push(`<p class="lede">Type a clinical impression. Get the dot phrases.</p>
    <p class="lede-sub">Tap a card to copy its template. Open “Fill in and copy” to pick the options and type the blanks first, so it pastes ready to sign.</p>
    <p class="legend"><code>***</code> is a blank (F2 in Epic jumps to the next one). <code>{ / }</code> is a choice. “Full note” cards build the whole note for one impression.</p>
    <h2>Common searches</h2>
    <div class="chips">${QUICK.map((s) => `<button class="chip" type="button" data-q="${escapeHtml(s)}">${escapeHtml(s)}</button>`).join('')}</div>`);
  const stars = [...starred].map((c) => byCode.get(c)).filter(Boolean);
  if (stars.length) parts.push(`<h2 class="group-title">Starred</h2>${list(stars)}`);
  const rec = recent.map((c) => byCode.get(c)).filter(Boolean).filter((e) => !starred.has(e.code));
  if (rec.length) parts.push(`<h2 class="group-title">Recently copied</h2>${list(rec)}`);
  parts.push('</div>');
  statusEl.textContent = '';
  resultsEl.innerHTML = parts.join('');
}

function renderBrowse() {
  const entries = index.entries.filter((e) => e.cat === category);
  const groups = new Map();
  for (const e of entries) {
    if (!groups.has(e.sub)) groups.set(e.sub, []);
    groups.get(e.sub).push(e);
  }
  statusEl.textContent = `${entries.length} phrases in ${CATEGORIES[category]}`;
  const order = ['Set', ...TYPE_NAMES];
  const label = { Set: 'Full notes', MDM: 'MDM', Discharge: 'Discharge instructions', Procedure: 'Procedure notes', Score: 'Scores and decision rules', Exam: 'Exam and interpretation', Note: 'Other notes' };
  resultsEl.innerHTML = [...groups].sort((a, b) => order.indexOf(a[0]) - order.indexOf(b[0]))
    .map(([sub, es]) => `<h2 class="group-title">${escapeHtml(label[sub] || sub)}</h2>${list(es, '', false)}`).join('');
}

function renderResults(q) {
  const hits = search(index, q, { category });
  const where = category >= 0 ? ` in ${CATEGORIES[category]}` : '';
  if (!hits.length) {
    statusEl.textContent = '';
    resultsEl.innerHTML = `<div class="empty">
      <h2>No match for “${escapeHtml(q)}”${escapeHtml(where)}</h2>
      <p>Try a shorter word, an abbreviation (CP, SOB, AFib) or an ICD-10 code.</p>
      ${category >= 0 ? '<p><button class="linkish" type="button" data-all="1">Search all sections</button></p>' : ''}
      <p><button class="linkish" type="button" data-new="1">Write your own phrase for this</button></p>
    </div>`;
    reportGap(q);
    return;
  }
  statusEl.textContent = hits.length >= 60 ? `Top 60 matches${where}` : `${hits.length} match${hits.length === 1 ? '' : 'es'}${where}`;
  resultsEl.innerHTML = list(hits, q);
}

function render() {
  const q = qEl.value.trim();
  if (clearBtn) clearBtn.hidden = !q;
  if (q) renderResults(q);
  else if (category >= 0) renderBrowse();
  else renderHome();
  syncUrl(q);
}

let frame = 0;
const schedule = () => { cancelAnimationFrame(frame); frame = requestAnimationFrame(render); };

// ---------- URL state (#q=...&s=...) ----------
function syncUrl(q) {
  if (installOpen) return;
  const params = new URLSearchParams();
  if (q) params.set('q', q);
  if (category >= 0) params.set('s', SLUG[category]);
  const hash = params.toString();
  const url = location.pathname + location.search + (hash ? `#${hash}` : '');
  if (url !== location.pathname + location.search + location.hash) history.replaceState(null, '', url);
}
function readUrl() {
  const params = new URLSearchParams(location.hash.slice(1) || location.search.slice(1));
  const s = params.get('s');
  const i = s ? SLUG.indexOf(s) : -1;
  category = i;
  qEl.value = params.get('q') || '';
}

// ---------- copy ----------
let toastTimer = 0;
function toast(html) {
  if (!toastEl) return;
  toastEl.innerHTML = html;
  toastEl.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toastEl.classList.remove('show'), 1600);
}
async function copyText(text) {
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch {
    const ta = document.createElement('textarea');
    ta.value = text;
    ta.setAttribute('readonly', '');
    ta.style.cssText = 'position:fixed;top:-100px;opacity:0';
    document.body.appendChild(ta);
    ta.select();
    let ok = false;
    try { ok = document.execCommand('copy'); } catch { ok = false; }
    ta.remove();
    return ok;
  }
}
function flash(el, ms = 450) {
  if (!el) return;
  el.classList.add('copied');
  setTimeout(() => el.classList.remove('copied'), ms);
}
async function copyTemplate(code, li) {
  const ok = await copyText(TEXT[code] || '');
  toast(ok ? `Copied <span class="t-code">.${escapeHtml(code)}</span> text` : 'Couldn’t copy. Open “Fill in and copy” and try again.');
  if (ok && navigator.vibrate) navigator.vibrate(12);
  flash(li);
  recent = [code, ...recent.filter((c) => c !== code)].slice(0, 12);
  store.set('recent', recent);
}
async function copyName(code, btn) {
  const ok = await copyText(`.${code}`);
  toast(`${ok ? 'Copied' : 'Name'} <span class="t-code">.${escapeHtml(code)}</span>`);
  flash(btn);
}
async function copyIcd(code, btn) {
  const ok = await copyText(code);
  toast(`${ok ? 'Copied' : 'Diagnosis code'} <span class="t-code">${escapeHtml(code)}</span>`);
  if (ok && navigator.vibrate) navigator.vibrate(12);
  flash(btn);
}

function toggleStar(code, btn) {
  if (starred.has(code)) starred.delete(code); else starred.add(code);
  store.set('starred', [...starred]);
  const isOn = starred.has(code);
  document.querySelectorAll(`.star[data-star="${code}"]`).forEach((b) => {
    b.setAttribute('aria-pressed', String(isOn));
    b.setAttribute('aria-label', `${isOn ? 'Unstar' : 'Star'} ${code}`);
  });
  if (!qEl.value.trim() && category < 0) {
    // keep focus stable on the home screen re-render
    renderHome();
    const again = document.querySelector(`.star[data-star="${code}"]`);
    if (again) again.focus(); else btn.blur();
  }
}

// ---------- events ----------
on(qEl, 'input', schedule);
on('#search-form', 'submit', (ev) => { ev.preventDefault(); qEl.blur(); });
on(clearBtn, 'click', () => { qEl.value = ''; render(); qEl.focus(); });

on(tabsEl, 'click', (ev) => {
  const btn = ev.target.closest('.tab');
  if (!btn) return;
  category = Number(btn.dataset.cat);
  tabsEl.querySelectorAll('.tab').forEach((b) => b.setAttribute('aria-pressed', String(b === btn)));
  btn.scrollIntoView({ block: 'nearest', inline: 'nearest', behavior: 'smooth' });
  render();
  window.scrollTo({ top: 0 });
});

on(resultsEl, 'click', (ev) => {
  const t = ev.target;
  const star = t.closest('.star');
  if (star) { toggleStar(star.dataset.star, star); return; }
  const copy = t.closest('[data-copy]');
  if (copy) { copyTemplate(copy.dataset.copy, copy.closest('.hit')); return; }
  const nameBtn = t.closest('[data-copyname]');
  if (nameBtn) { copyName(nameBtn.dataset.copyname, nameBtn); return; }
  const icd = t.closest('.icd');
  if (icd) { copyIcd(icd.dataset.icd, icd); return; }
  // fill-in panel: choices, copy filled text, clear
  const opt = t.closest('.fill .opt');
  if (opt) { const box = opt.closest('.fill'); pick(box, opt, TEXT[box.dataset.fill]); updateProgress(box); return; }
  const filled = t.closest('[data-copy-filled]');
  if (filled) { copyFilled(filled.dataset.copyFilled, filled); return; }
  const reset = t.closest('[data-fill-reset]');
  if (reset) { const box = resultsEl.querySelector(`.fill[data-fill="${reset.dataset.fillReset}"]`); drawFill(box, true); return; }
  // calculators
  const copt = t.closest('.calc .opt');
  if (copt) { calcPick(copt); return; }
  const ccopy = t.closest('[data-calc-copy]');
  if (ccopy) { copyCalc(ccopy.dataset.calcCopy, ccopy); return; }
  // my phrases
  const edit = t.closest('[data-edit]');
  if (edit) { openEditor(edit.dataset.edit); return; }
  const del = t.closest('[data-delete]');
  if (del) { deleteMine(del.dataset.delete); return; }
  if (t.closest('[data-new]')) { openEditor(null, qEl.value.trim()); return; }
  const chip = t.closest('.chip');
  if (chip) { qEl.value = chip.dataset.q; render(); return; }
  if (t.closest('[data-hide-card]')) { store.set('installCardHidden', true); renderHome(); return; }
  if (t.closest('[data-all]')) { category = -1; renderTabs(); render(); }
});

// Draw panels the first time they open (keeps big result lists fast).
resultsEl.addEventListener('toggle', (ev) => {
  const d = ev.target;
  if (!d.open) return;
  if (d.dataset.fillOpen) { const box = d.querySelector('.fill'); if (!box.dataset.drawn) drawFill(box); }
  if (d.dataset.calcOpen) { const slot = d.querySelector('.calc-slot'); if (!slot.firstChild) slot.innerHTML = calcHTML(d.dataset.calcOpen, CALCS[d.dataset.calcOpen]); }
}, true);
on(resultsEl, 'input', (ev) => { const box = ev.target.closest('.fill'); if (box) updateProgress(box); });

// ---------- fill-in ----------
function drawFill(box, cleared = false) {
  if (!box) return;
  box.innerHTML = fillRender(TEXT[box.dataset.fill] || '');
  box.dataset.drawn = '1';
  updateProgress(box);
  if (cleared) toast('Cleared');
}
function updateProgress(box) {
  const { done, total } = progress(box, TEXT[box.dataset.fill] || '');
  const el = box.parentElement.querySelector('.fill-progress');
  if (el) el.textContent = total ? `${done} of ${total} filled. Anything left blank copies as *** or {a / b} so you can finish it in the chart.` : '';
}
async function copyFilled(code, btn) {
  const box = resultsEl.querySelector(`.fill[data-fill="${code}"]`);
  const text = box && box.dataset.drawn ? compose(box, TEXT[code]) : TEXT[code];
  const ok = await copyText(text);
  toast(ok ? `Copied filled <span class="t-code">.${escapeHtml(code)}</span>` : 'Couldn’t copy on this device.');
  if (ok && navigator.vibrate) navigator.vibrate(12);
  flash(btn);
  recent = [code, ...recent.filter((c) => c !== code)].slice(0, 12);
  store.set('recent', recent);
}

// ---------- calculators ----------
function calcPick(btn) {
  const box = btn.closest('.calc');
  const spec = CALCS[box.dataset.calc];
  box.querySelectorAll(`.opt[data-ci="${btn.dataset.ci}"]`).forEach((b) => b.setAttribute('aria-pressed', String(b === btn)));
  const st = calcState(box, spec);
  const out = box.querySelector('.calc-out');
  out.textContent = st.complete ? (spec.rule ? `Result: ${st.band}.` : `Score ${st.total}: ${st.band}.`) : `${spec.rule ? 'Result so far' : `Score so far ${st.total}`}. Answer every item to finish.`;
  out.classList.toggle('done', st.complete);
  box.querySelector('[data-calc-copy]').disabled = !st.complete;
}
async function copyCalc(code, btn) {
  const box = btn.closest('.calc');
  const st = calcState(box, CALCS[code]);
  if (!st.complete) return;
  const ok = await copyText(st.line);
  toast(ok ? 'Copied result' : 'Couldn’t copy on this device.');
  flash(btn);
}

document.addEventListener('keydown', (ev) => {
  const aboutOpen = aboutEl && !aboutEl.hidden;
  const editorOpen = editorEl && !editorEl.hidden;
  const typing = /^(INPUT|TEXTAREA|SELECT)$/.test(document.activeElement && document.activeElement.tagName);
  if (ev.key === '/' && !installOpen && !aboutOpen && !editorOpen && !typing) {
    ev.preventDefault(); qEl.focus(); qEl.select();
  } else if (ev.key === 'Escape') {
    if (editorOpen) closeSheet(editorEl);
    else if (aboutOpen) closeAbout();
    else if (installOpen) closeInstall();
    else if (document.activeElement === qEl && qEl.value) { qEl.value = ''; render(); }
  }
});

window.addEventListener('hashchange', () => {
  if (location.hash === '#install') {
    if (isApp) history.replaceState(null, '', location.pathname + location.search);
    else openInstall(false);
    return;
  }
  if (installOpen) closeInstall(true);
  readUrl(); renderTabs(); render();
});

// ---------- my phrases (this device only), packs, export and import ----------
const editorEl = $('#editor');
let editing = null; // dot being edited (mine), or null for a new phrase
function refreshLibrary() {
  rebuild();
  starred = new Set([...starred].filter((c) => byCode.has(c)));
  recent = recent.filter((c) => byCode.has(c));
  renderTabs(); render(); syncLibraryInfo();
}
function saveMine() { store.set('mine', mine); }
function suggestDot(base) {
  let d = (base || 'my').toLowerCase().replace(/[^a-z0-9]/g, '').replace(/^[^a-z]+/, '') || 'my';
  d = d.slice(0, 22);
  if (!byCode.has(d) && DOT_RE.test(d)) return d;
  for (let i = 2; i < 100; i++) { const c = `${d.slice(0, 22)}${i}`; if (!byCode.has(c)) return c; }
  return `my${Date.now() % 100000}`;
}
function openEditor(code, prefill = '') {
  if (!editorEl) return;
  const own = code && SOURCE[code]?.kind === 'mine' ? mine.find((p) => p.dot === code) : null;
  const base = code ? byCode.get(code) : null;
  editing = own ? own.dot : null;
  const f = editorEl.querySelector('form');
  f.reset();
  f.elements.dot.value = own ? own.dot : suggestDot(code ? `my${code}` : prefill.split(/\s+/).map((w) => w.slice(0, 4)).join(''));
  f.elements.title.value = own ? own.title : base ? `${base.name} (my version)` : prefill.replace(/^./, (c) => c.toUpperCase());
  f.elements.type.value = own ? own.type : base && TYPE_NAMES.includes(base.sub) ? base.sub : 'MDM';
  f.elements.imp.value = own ? own.imp : base ? base.syn.split('|').filter((s) => !/^[a-z]\d/.test(s)).join('|') : prefill.toLowerCase();
  f.elements.text.value = own ? own.text : code ? TEXT[code] : 'MDM: ***-year-old with ***.\n\nDifferential includes ***.\n\nPlan: ***.';
  editorEl.querySelector('#editor-title').textContent = own ? 'Edit my phrase' : code ? 'Make my version' : 'New phrase';
  editorEl.querySelector('.form-error').textContent = '';
  openSheet(editorEl);
}
function readEditor() {
  const f = editorEl.querySelector('form');
  const p = {
    dot: f.elements.dot.value.trim().replace(/^\./, '').toLowerCase(), title: f.elements.title.value.trim(), type: f.elements.type.value,
    imp: f.elements.imp.value.trim().replace(/\s*[,;]\s*/g, '|'), text: f.elements.text.value.replace(/\r/g, '').trim(), pack: '', by: '',
  };
  if (!DOT_RE.test(p.dot)) return [null, 'Dot name: lowercase letters and numbers, starting with a letter (2–25 characters).'];
  if (p.dot !== editing && byCode.has(p.dot)) return [null, `.${p.dot} is already taken. Pick another name.`];
  if (p.title.length < 3) return [null, 'Add a title.'];
  if (p.imp.length < 2) return [null, 'Add at least one impression people will search for.'];
  if (p.text.length < 40) return [null, 'The template text is too short.'];
  const open = (p.text.match(/{/g) || []).length, close = (p.text.match(/}/g) || []).length;
  if (open !== close || /\{[^}]*\{/.test(p.text)) return [null, 'Check the { } choices: each { needs a matching } and they can’t be nested.'];
  return [p, ''];
}
async function saveEditor(ev) {
  ev.preventDefault();
  const [p, err] = readEditor();
  const errEl = editorEl.querySelector('.form-error');
  if (!p) { errEl.textContent = err; return; }
  const f = editorEl.querySelector('form');
  if (editing) mine = mine.map((x) => (x.dot === editing ? { ...p, pack: x.pack } : x)); else mine.push(p);
  saveMine();
  if (f.elements.share.checked) {
    if (!f.elements.agree.checked) { errEl.textContent = 'To share, confirm the phrase has no patient information.'; return; }
    const ok = await submitPhrase(p, f.elements.by.value.trim());
    toast(ok ? 'Saved, and sent for review' : 'Saved on this device. Sending failed (offline?); try Share again later.');
  } else toast(`Saved <span class="t-code">.${escapeHtml(p.dot)}</span> to My phrases`);
  closeSheet(editorEl);
  qEl.value = ''; category = CAT_MINE;
  refreshLibrary();
}
function deleteMine(code) {
  const p = mine.find((x) => x.dot === code);
  if (!p) return;
  const btn = resultsEl.querySelector(`[data-delete="${code}"]`);
  if (btn && btn.dataset.armed !== '1') { btn.dataset.armed = '1'; btn.textContent = 'Tap again to delete'; setTimeout(() => { if (btn.isConnected) { btn.dataset.armed = ''; btn.textContent = 'Delete'; } }, 3000); return; }
  mine = mine.filter((x) => x.dot !== code);
  saveMine();
  toast(`Deleted <span class="t-code">.${escapeHtml(code)}</span>`);
  refreshLibrary();
}
on(editorEl && editorEl.querySelector('form'), 'submit', saveEditor);
on('#editor-cancel', 'click', () => closeSheet(editorEl));
on(editorEl, 'click', (ev) => { if (ev.target === editorEl) closeSheet(editorEl); });
on(editorEl && editorEl.querySelector('[name="share"]'), 'change', (ev) => { editorEl.querySelector('.share-fields').hidden = !ev.target.checked; });

function exportMine() {
  const data = { app: 'ed-dot-phrase-finder', version: 1, exported: new Date().toISOString().slice(0, 10), phrases: mine.map(({ dot, title, type, imp, text, pack }) => ({ dot, title, type, impressions: imp, text, ...(pack ? { pack } : {}) })) };
  const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
  const a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = `my-dot-phrases-${data.exported}.json`;
  document.body.appendChild(a); a.click(); a.remove();
  setTimeout(() => URL.revokeObjectURL(a.href), 4000);
}
// Accepts this app's export, or a group "pack": { "pack": "Group name", "phrases": [ { dot, title, type, impressions, text } ] }.
async function importFile(file) {
  let json;
  try { json = JSON.parse(await file.text()); } catch { toast('That file isn’t a phrase file (JSON).'); return; }
  const packName = typeof json.pack === 'string' ? json.pack.trim().slice(0, 40) : '';
  const list = Array.isArray(json) ? json : Array.isArray(json.phrases) ? json.phrases : [];
  let added = 0, renamed = 0, skipped = 0;
  for (const raw of list) {
    const p = cleanPhrases([{ dot: String(raw.dot || '').replace(/^\./, '').toLowerCase(), title: raw.title, type: TYPE_NAMES.includes(raw.type) ? raw.type : 'Note', imp: raw.impressions || raw.imp || raw.title, text: raw.text || raw.body, pack: raw.pack || packName }])[0];
    if (!p) { skipped++; continue; }
    if (mine.some((x) => x.dot === p.dot && x.text === p.text)) { skipped++; continue; }
    if (byCode.has(p.dot) || mine.some((x) => x.dot === p.dot)) { p.dot = suggestDot(p.dot); renamed++; }
    mine.push(p); byCode.set(p.dot, true); added++;
  }
  saveMine();
  toast(`Imported ${added}${renamed ? ` (${renamed} renamed to avoid clashes)` : ''}${skipped ? `, skipped ${skipped}` : ''}`);
  refreshLibrary();
}
on('#export-mine', 'click', exportMine);
on('#import-mine', 'change', (ev) => { const f = ev.target.files && ev.target.files[0]; if (f) importFile(f); ev.target.value = ''; });
on('#delete-mine', 'click', (ev) => {
  const b = ev.currentTarget;
  if (!mine.length) return;
  if (b.dataset.armed !== '1') { b.dataset.armed = '1'; b.textContent = `Tap again to delete all ${mine.length}`; return; }
  b.dataset.armed = ''; b.textContent = 'Delete all my phrases';
  mine = []; saveMine(); refreshLibrary(); toast('Deleted all my phrases');
});
on('#new-phrase', 'click', () => { closeAbout(); openEditor(null); });
function syncLibraryInfo() {
  const el = $('#mine-count');
  if (el) el.textContent = mine.length ? `${mine.length} phrase${mine.length === 1 ? '' : 's'} saved on this device.` : 'None yet. Open any card and tap “Make my version”, or import a file.';
  const c = $('#community-count');
  if (c) c.textContent = community.length ? `${community.length} approved shared phrase${community.length === 1 ? '' : 's'} loaded.` : 'No shared phrases loaded yet.';
  const g = $('#share-gaps');
  if (g) g.checked = !!store.get('shareGaps', false);
}

// ---------- shared library (Supabase): approved phrases, submissions, empty-search reports ----------
const api = (pathAndQuery, init = {}) => fetch(`${SUPABASE_URL}/rest/v1/${pathAndQuery}`, {
  ...init, headers: { apikey: SUPABASE_KEY, 'Content-Type': 'application/json', ...(init.headers || {}) },
});
async function loadCommunity() {
  if (!navigator.onLine) return;
  try {
    const res = await api('submissions?select=dot,type,section,title,impressions,body,submitter&status=eq.approved&order=created_at.asc&limit=500');
    if (!res.ok) return;
    const rows = await res.json();
    const next = cleanPhrases(rows.map((r) => ({ dot: r.dot, title: r.title, type: r.type, imp: r.impressions, text: r.body, by: r.submitter })));
    if (JSON.stringify(next) === JSON.stringify(community)) return;
    community = next;
    store.set('community', community);
    refreshLibrary();
  } catch { /* offline: keep the saved copy */ }
}
async function submitPhrase(p, by) {
  try {
    const res = await api('submissions', {
      method: 'POST', headers: { Prefer: 'return=minimal' },
      body: JSON.stringify({ dot: p.dot, type: p.type, section: 'Community', title: p.title, impressions: p.imp || p.title, body: p.text, submitter: by || null }),
    });
    return res.ok;
  } catch { return false; }
}
// Opt-in only. Sends just the search words (numbers stripped, max 60 characters), once per search per visit.
const gapSent = new Set();
let gapTimer = 0;
function reportGap(q) {
  clearTimeout(gapTimer);
  if (!store.get('shareGaps', false)) return;
  const clean = q.toLowerCase().replace(/[0-9]/g, '').replace(/[^a-z\s/&'-]/g, ' ').replace(/\s+/g, ' ').trim().slice(0, 60);
  if (clean.length < 3 || gapSent.has(clean)) return;
  gapTimer = setTimeout(() => {
    if (qEl.value.trim().toLowerCase().replace(/[0-9]/g, '').replace(/[^a-z\s/&'-]/g, ' ').replace(/\s+/g, ' ').trim().slice(0, 60) !== clean) return;
    gapSent.add(clean);
    api('search_gaps', { method: 'POST', headers: { Prefer: 'return=minimal' }, body: JSON.stringify({ query: clean }) }).catch(() => {});
  }, 2500);
}

// ---------- display settings (colors and text size) ----------
const schemeMeta = document.querySelector('meta[name="color-scheme"]');
const lightQuery = window.matchMedia ? window.matchMedia('(prefers-color-scheme: light)') : null;
let theme = store.get('theme', 'dark');
if (!['dark', 'light', 'auto'].includes(theme)) theme = 'dark';
let textSize = store.get('textSize', 1);
if (![1, 2, 3].includes(textSize)) textSize = 1;

function applyTheme() {
  const light = theme === 'light' || (theme === 'auto' && !!lightQuery && lightQuery.matches);
  root.classList.toggle('theme-light', light);
  if (schemeMeta) schemeMeta.setAttribute('content', light ? 'light' : 'dark');
}
function applyTextSize() {
  root.classList.toggle('text-2', textSize === 2);
  root.classList.toggle('text-3', textSize === 3);
}
function syncSettings() {
  document.querySelectorAll('input[name="theme"]').forEach((i) => { i.checked = i.value === theme; });
  document.querySelectorAll('input[name="textSize"]').forEach((i) => { i.checked = Number(i.value) === textSize; });
}
on(aboutEl, 'change', (ev) => {
  const t = ev.target;
  if (t.name === 'theme') { theme = t.value; store.set('theme', theme); applyTheme(); }
  if (t.name === 'textSize') { textSize = Number(t.value); store.set('textSize', textSize); applyTextSize(); }
  if (t.id === 'share-gaps') store.set('shareGaps', t.checked);
});
if (lightQuery) {
  const follow = () => { if (theme === 'auto') applyTheme(); };
  if (lightQuery.addEventListener) lightQuery.addEventListener('change', follow);
  else if (lightQuery.addListener) lightQuery.addListener(follow);
}
applyTheme();
applyTextSize();
syncSettings();

// ---------- settings and info sheet ----------
let lastFocus = null;
function openSheet(el) {
  if (!el) return;
  lastFocus = document.activeElement;
  el.hidden = false;
  document.body.style.overflow = 'hidden';
  const sheet = el.querySelector('.sheet');
  if (sheet) { sheet.scrollTop = 0; sheet.focus(); }
}
function closeSheet(el) {
  if (!el || el.hidden) return;
  el.hidden = true;
  document.body.style.overflow = '';
  if (lastFocus && lastFocus.focus) lastFocus.focus();
}
function openAbout() { syncSettings(); syncLibraryInfo(); openSheet(aboutEl); }
function closeAbout() { closeSheet(aboutEl); }
on('#about-open', 'click', openAbout);
on('#about-open-2', 'click', openAbout);
on('#about-close', 'click', closeAbout);
on(aboutEl, 'click', (ev) => { if (ev.target === aboutEl) closeAbout(); });

const fmt = (n) => n.toLocaleString('en-US');
const aboutCount = $('#about-count');
if (aboutCount) aboutCount.textContent = `${fmt(COUNTS.total)} templates: ${fmt(COUNTS.Set)} full-note sets, ${fmt(COUNTS.MDM)} MDMs, ${fmt(COUNTS.Discharge)} discharge instructions, ${fmt(COUNTS.Procedure)} procedure notes, ${fmt(COUNTS.Score)} decision rules and ${fmt(COUNTS.Exam + COUNTS.Note)} other notes.`;
const footCount = $('#foot-count');
if (footCount) footCount.textContent = `${fmt(COUNTS.total)} emergency medicine templates.`;

// ---------- problem reports (top banner and footer): the email is prefilled with the build and the current search ----------
// The address comes from the link itself (set at build time from REPORT_EMAIL); with none set, the links stay hidden.
document.querySelectorAll('[data-report]').forEach((a) => { if (!/^mailto:[^?]+@/.test(a.getAttribute('href') || '')) a.closest('.hivis, p')?.setAttribute('hidden', ''); });
document.addEventListener('click', (ev) => {
  const link = ev.target.closest('[data-report]');
  if (!link) return;
  const addr = (link.getAttribute('href') || '').replace(/^mailto:/, '').split('?')[0];
  const q = qEl.value.trim();
  const where = isApp ? 'Home Screen app' : 'browser';
  const deviceName = isIOS ? (isIPhone ? 'iPhone' : 'iPad') : isAndroid ? 'Android' : 'computer';
  const body = ['What happened?', '', '', '--', ...(q ? [`Search: ${q}`] : []), `Build: ${root.dataset.build || '?'} (${deviceName}, ${where})`].join('\r\n');
  link.href = `mailto:${addr}?subject=${encodeURIComponent('Dot Phrase Finder problem report')}&body=${encodeURIComponent(body)}`;
});

// ---------- install (browser only; never shown inside the installed app) ----------
const installBtn = $('#install');
const installNowBtns = [$('#install-now'), $('#install-now-desktop')].filter(Boolean);
let deferredPrompt = null;
const setInstallButtons = (show) => {
  if (installBtn) installBtn.hidden = !show;
  installNowBtns.forEach((b) => { b.hidden = !show; });
};
window.addEventListener('beforeinstallprompt', (ev) => {
  ev.preventDefault();
  if (isApp) return;
  deferredPrompt = ev;
  setInstallButtons(true);
});
async function promptInstall() {
  if (!deferredPrompt) { openInstall(); return; }
  deferredPrompt.prompt();
  try { await deferredPrompt.userChoice; } catch { /* ignore */ }
  deferredPrompt = null;
  setInstallButtons(false);
}
on(installBtn, 'click', promptInstall);
installNowBtns.forEach((b) => on(b, 'click', promptInstall));
window.addEventListener('appinstalled', () => setInstallButtons(false));

let installPushed = false;
let focusBeforeInstall = null;

function showDevice(d) {
  if (!installPage) return;
  installPage.querySelectorAll('.device').forEach((b) => b.setAttribute('aria-pressed', String(b.dataset.device === d)));
  installPage.querySelectorAll('.howto').forEach((sec) => { sec.hidden = sec.dataset.panel !== d; });
}
function detectedText() {
  const name = isIOS ? (isIPhone ? 'an iPhone' : 'an iPad') : isAndroid ? 'an Android phone' : 'a computer';
  let text = `Showing the steps for ${name}. Pick another device above if that's wrong.`;
  if (inOtherApp) text += ' This page looks like it is open inside another app, so open it in your browser first.';
  return text;
}
function openInstall(push = true) {
  if (isApp || installOpen || !installPage) return;
  focusBeforeInstall = document.activeElement;
  installOpen = true;
  showDevice(device);
  const detected = $('#detected');
  if (detected) detected.textContent = detectedText();
  installPage.hidden = false;
  document.body.style.overflow = 'hidden';
  if (push && location.hash !== '#install') { history.pushState({ install: true }, '', '#install'); installPushed = true; }
  installPage.scrollTop = 0;
  const title = $('#install-title');
  if (title) title.focus({ preventScroll: true });
}
function closeInstall(fromHistory = false) {
  if (!installOpen) return;
  installOpen = false;
  installPage.hidden = true;
  document.body.style.overflow = '';
  if (!fromHistory) {
    if (installPushed) history.back();
    else { history.replaceState(null, '', location.pathname + location.search); render(); }
  }
  installPushed = false;
  if (focusBeforeInstall && focusBeforeInstall.focus) focusBeforeInstall.focus({ preventScroll: true });
}
on('#install-back', 'click', () => closeInstall());
on(installPage && installPage.querySelector('.device-pick'), 'click', (ev) => {
  const b = ev.target.closest('.device');
  if (b) showDevice(b.dataset.device);
});
on('#copy-install-link', 'click', async () => {
  const link = `${location.origin}${location.pathname}#install`;
  const ok = await copyText(link);
  toast(ok ? 'Link copied' : escapeHtml(link));
});
document.addEventListener('click', (ev) => {
  if (!ev.target.closest('[data-open-install]')) return;
  if (aboutEl && !aboutEl.hidden) closeAbout();
  openInstall();
});

// ---------- offline ----------
// Script and style names change with every release and the page is always fetched fresh when online,
// so there is nothing to reload when a new version installs; it is simply ready for the next visit.
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('./sw.js').then((reg) => {
      document.addEventListener('visibilitychange', () => {
        if (document.visibilityState === 'visible') reg.update().catch(() => { /* offline */ });
      });
    }).catch(() => { /* offline support unavailable */ });
  });
}

// ---------- start ----------
readUrl();
renderTabs();
if (location.hash === '#install') {
  if (isApp) history.replaceState(null, '', location.pathname + location.search);
  else openInstall(false);
}
render();
syncLibraryInfo();
loadCommunity();
window.addEventListener('online', loadCommunity);
if (!qEl.value && !isIOS && window.matchMedia('(hover: hover)').matches) qEl.focus();
