// Fill-in mode: turns a template into tappable choices and typeable blanks, then composes the finished text.
// Nothing typed here is stored; it lives only in the open card until the page changes.
import { escapeHtml } from './search.js';

// Split "{a/b/c}" into options. Spaced " / " wins, so "mL/kg" inside an option survives.
export function options(inner) {
  return (inner.includes(' / ') ? inner.split(' / ') : inner.split('/')).map((s) => s.trim());
}

// Template -> tokens: text, blank (***), choice ({…}).
export function parse(text) {
  const out = [];
  const re = /\{([^{}]*)\}|\*\*\*/g;
  let last = 0, m;
  while ((m = re.exec(text))) {
    if (m.index > last) out.push({ t: 'text', v: text.slice(last, m.index) });
    out.push(m[0] === '***' ? { t: 'blank' } : { t: 'choice', opts: options(m[1]) });
    last = re.lastIndex;
  }
  if (last < text.length) out.push({ t: 'text', v: text.slice(last) });
  return out;
}

const blankRe = /\*\*\*/g;

function blankInput(key) {
  return `<input class="fill-in" type="text" data-key="${key}" placeholder="***" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false" enterkeyhint="next" aria-label="Blank">`;
}

// Option text with its own blanks turned into inputs (keys nest under the choice's key).
function optionWithBlanks(opt, key) {
  let i = 0;
  return escapeHtml(opt).replace(blankRe, () => blankInput(`${key}.${i++}`));
}

export function render(text) {
  const toks = parse(text);
  return toks.map((tk, n) => {
    if (tk.t === 'text') return escapeHtml(tk.v);
    if (tk.t === 'blank') return blankInput(String(n));
    const single = tk.opts.length === 1;
    const chips = tk.opts.map((o, k) => `<button type="button" class="opt" data-choice="${n}" data-opt="${k}" aria-pressed="false">${single ? '+ ' : ''}${escapeHtml(o.replace(blankRe, '…'))}</button>`).join('');
    return `<span class="choice" data-choice-wrap="${n}"><span class="opts" role="group" aria-label="${single ? 'Optional text' : 'Pick one'}">${chips}</span><span class="picked" data-picked="${n}"></span></span>`;
  }).join('');
}

// Called when an option chip is tapped: show the chosen text (with its blanks), or toggle it off.
export function pick(root, btn, text) {
  const n = btn.dataset.choice;
  const wrap = root.querySelector(`[data-choice-wrap="${n}"]`);
  const already = btn.getAttribute('aria-pressed') === 'true';
  wrap.querySelectorAll('.opt').forEach((b) => b.setAttribute('aria-pressed', 'false'));
  const picked = wrap.querySelector('.picked');
  if (already) { picked.innerHTML = ''; wrap.classList.remove('done'); return; }
  btn.setAttribute('aria-pressed', 'true');
  wrap.classList.add('done');
  const tk = parse(text)[Number(n)];
  picked.innerHTML = optionWithBlanks(tk.opts[Number(btn.dataset.opt)], n);
}

// Build the text to copy. Unfilled blanks stay "***"; unpicked choices stay as "{a/b}" so nothing is silently dropped.
export function compose(root, text) {
  const val = (key) => {
    const el = root.querySelector(`.fill-in[data-key="${key}"]`);
    const v = el ? el.value.trim() : '';
    return v || '***';
  };
  return parse(text).map((tk, n) => {
    if (tk.t === 'text') return tk.v;
    if (tk.t === 'blank') return val(String(n));
    const on = root.querySelector(`.opt[data-choice="${n}"][aria-pressed="true"]`);
    if (!on) return tk.opts.length === 1 ? '' : `{${tk.opts.join(' / ')}}`;
    let i = 0;
    return tk.opts[Number(on.dataset.opt)].replace(blankRe, () => val(`${n}.${i++}`));
  }).join('')
    // tidy spaces left behind by an optional piece that was skipped
    .replace(/[ \t]+\n/g, '\n').replace(/\n{3,}/g, '\n\n').replace(/ {2,}/g, ' ');
}

export function progress(root, text) {
  const toks = parse(text);
  const total = toks.filter((t) => t.t !== 'text' && !(t.t === 'choice' && t.opts.length === 1)).length;
  let done = 0;
  toks.forEach((tk, n) => {
    if (tk.t === 'blank') { const el = root.querySelector(`.fill-in[data-key="${n}"]`); if (el && el.value.trim()) done++; }
    else if (tk.t === 'choice' && tk.opts.length > 1 && root.querySelector(`.opt[data-choice="${n}"][aria-pressed="true"]`)) done++;
  });
  return { done, total };
}

// ---------- calculators ----------
// spec: { items: [{ label, opts: [[points, label], ...] }], bands: [[maxTotal, text], ...], name, rule? }
export function calcHTML(dot, spec) {
  return `<div class="calc" data-calc="${dot}">
    ${spec.items.map((it, i) => `<fieldset class="calc-item"><legend>${escapeHtml(it.label)}</legend><div class="calc-opts">${
      it.opts.map(([p, l], k) => `<button type="button" class="opt" data-ci="${i}" data-ck="${k}" aria-pressed="false">${escapeHtml(l)}${spec.rule ? '' : ` <span class="pts">${p > 0 ? '+' : ''}${p}</span>`}</button>`).join('')
    }</div></fieldset>`).join('')}
    <p class="calc-out" aria-live="polite">Answer each item to see the ${spec.rule ? 'result' : 'score'}.</p>
    <div class="actions"><button class="act primary" type="button" data-calc-copy="${dot}" disabled>Copy result</button></div>
  </div>`;
}

export function calcState(root, spec) {
  const picks = spec.items.map((_, i) => root.querySelector(`.opt[data-ci="${i}"][aria-pressed="true"]`));
  const complete = picks.every(Boolean);
  const total = picks.reduce((s, b, i) => s + (b ? spec.items[i].opts[Number(b.dataset.ck)][0] : 0), 0);
  const band = spec.bands.find(([max]) => total <= max) || spec.bands[spec.bands.length - 1];
  const detail = spec.items.map((it, i) => (picks[i] ? `${it.short || it.label}: ${it.opts[Number(picks[i].dataset.ck)][1]}` : null)).filter(Boolean);
  const line = spec.rule
    ? `${spec.name}: ${band[1]}. ${detail.join('; ')}.`
    : `${spec.name} ${total}: ${band[1]}. (${detail.join('; ')})`;
  return { complete, total, band: band[1], line };
}
