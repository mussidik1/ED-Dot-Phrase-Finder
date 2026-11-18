// Build: validate the phrase database, then assemble the static site into ./site
// Usage: node tools/build.mjs
//
// Every asset except index.html and sw.js gets a content hash in its file name (app.3f9c1a2b.js),
// so a page can never load a mix of new HTML and old cached files.
import fs from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';
import crypto from 'node:crypto';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const DATA_DIR = path.join(ROOT, 'data');
const SRC = path.join(ROOT, 'src');
const OUT = path.join(ROOT, 'site');

export const CATEGORIES = [
  'Cardiac', 'Pulmonary', 'Neuro', 'GI', 'GU & Renal', 'OB/GYN', 'Trauma & MSK',
  'ID & Sepsis', 'Tox & Environmental', 'Endo & Heme', 'Psych', 'Peds', 'Skin, HEENT & Eye',
  'Procedures', 'General',
];
export const TYPES = ['MDM', 'Discharge', 'Procedure', 'Score', 'Exam', 'Note'];

function loadData() {
  const rows = [];
  let current = '';
  const add = (cat, items) => {
    for (const it of items) {
      let [dot, type, title, imp = '', icd = [], text = ''] = it;
      let p = 0;
      if (dot.startsWith('*')) { p = 1; dot = dot.slice(1); }
      rows.push({ dot, type, title, imp, icd, text: text.trim(), cat, p, file: current });
    }
  };
  const files = fs.readdirSync(DATA_DIR).filter((f) => f.endsWith('.js')).sort();
  for (const f of files) {
    current = f;
    vm.runInNewContext(fs.readFileSync(path.join(DATA_DIR, f), 'utf8'), { add }, { filename: f });
  }
  const icdFile = path.join(DATA_DIR, 'icd10.json');
  const icd = fs.existsSync(icdFile) ? JSON.parse(fs.readFileSync(icdFile, 'utf8')) : {};
  return { rows, icd };
}

export function loadRows() { return loadData().rows; }

// Rows in the shape the search index expects: [code, name, synonyms, note, catIndex, sub, priority, system]
export function compactRows(rows) {
  return rows.map((r) => [r.dot, r.title, [r.imp, ...r.icd.map((c) => c.toLowerCase())].filter(Boolean).join('|'), '', CATEGORIES.indexOf(r.cat), r.type, r.p, r.type]);
}

export function validate(rows, icd = null) {
  const errors = [];
  const seen = new Map();
  for (const r of rows) {
    const id = `${r.file}: .${r.dot}`;
    if (!CATEGORIES.includes(r.cat)) errors.push(`${r.file}: unknown section "${r.cat}"`);
    if (!TYPES.includes(r.type)) errors.push(`${id}: unknown type "${r.type}"`);
    if (!/^[a-z][a-z0-9]{1,24}$/.test(r.dot)) errors.push(`${id}: dot name must be lowercase letters/numbers, 2–25 long`);
    if (seen.has(r.dot)) errors.push(`duplicate dot name .${r.dot} (${seen.get(r.dot)} and ${r.file})`);
    seen.set(r.dot, r.file);
    if (!r.title || r.title.length < 3) errors.push(`${id}: missing title`);
    if (!r.imp) errors.push(`${id}: no clinical impressions listed`);
    if (/\|\|/.test(r.imp) || /^\||\|$/.test(r.imp)) errors.push(`${id}: empty impression`);
    if (r.text.length < 60) errors.push(`${id}: template text missing or too short`);
    if (!Array.isArray(r.icd)) errors.push(`${id}: ICD list must be an array`);
    // {a/b} choices must be balanced so Epic users can see where to pick.
    const open = (r.text.match(/{/g) || []).length, close = (r.text.match(/}/g) || []).length;
    if (open !== close) errors.push(`${id}: unbalanced { } in text`);
    if (icd) for (const c of r.icd) if (!icd[c]) errors.push(`${id}: ${c} missing from data/icd10.json (run python3 tools/icd-labels.py)`);
  }
  return errors;
}

const shortHash = (buf) => crypto.createHash('sha256').update(buf).digest('hex').slice(0, 8);

function rewrite(text, renames) {
  let out = text;
  for (const [from, to] of renames) {
    const esc = from.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    out = out.replace(new RegExp(`(["'(])(\\./)?${esc}(["')])`, 'g'), (m, a, dot, b) => `${a}${dot || ''}${to}${b}`);
  }
  return out;
}

function fingerprint(relPath) {
  const abs = path.join(OUT, relPath);
  const ext = path.extname(relPath);
  const hashed = `${relPath.slice(0, -ext.length)}.${shortHash(fs.readFileSync(abs))}${ext}`;
  fs.renameSync(abs, path.join(OUT, hashed));
  return hashed;
}

function listFiles(dir) {
  const out = [];
  const walk = (d) => {
    for (const name of fs.readdirSync(d).sort()) {
      const p = path.join(d, name);
      if (fs.statSync(p).isDirectory()) walk(p);
      else out.push(path.relative(dir, p).split(path.sep).join('/'));
    }
  };
  walk(dir);
  return out;
}

function build() {
  const data = loadData();
  const errors = validate(data.rows, data.icd);
  if (errors.length) {
    console.error(`Data validation failed (${errors.length}):\n  ` + errors.join('\n  '));
    process.exit(1);
  }
  const { rows } = data;

  fs.rmSync(OUT, { recursive: true, force: true });
  fs.mkdirSync(path.join(OUT, 'icons'), { recursive: true });
  fs.mkdirSync(path.join(OUT, 'fonts'), { recursive: true });
  for (const f of ['index.html', 'app.css', 'app.js', 'search.js', 'manifest.webmanifest']) {
    fs.copyFileSync(path.join(SRC, f), path.join(OUT, f));
  }
  for (const f of fs.readdirSync(path.join(SRC, 'icons'))) {
    fs.copyFileSync(path.join(SRC, 'icons', f), path.join(OUT, 'icons', f));
  }
  const fonts = {
    'cardo-400.woff2': '@fontsource/cardo/files/cardo-latin-400-normal.woff2',
    'cardo-400-italic.woff2': '@fontsource/cardo/files/cardo-latin-400-italic.woff2',
    'cardo-700.woff2': '@fontsource/cardo/files/cardo-latin-700-normal.woff2',
  };
  for (const [dest, src] of Object.entries(fonts)) {
    fs.copyFileSync(path.join(ROOT, 'node_modules', src), path.join(OUT, 'fonts', dest));
  }
  fs.writeFileSync(path.join(OUT, '.nojekyll'), '');

  // Data module: search rows, template texts and ICD-10 labels.
  const usedIcd = {};
  for (const r of rows) for (const c of r.icd) usedIcd[c] = data.icd[c];
  const counts = { total: rows.length };
  for (const t of TYPES) counts[t] = rows.filter((r) => r.type === t).length;
  fs.writeFileSync(path.join(OUT, 'data.js'),
    `// Generated by tools/build.mjs from data/*.js — do not edit.\n` +
    `export const CATEGORIES = ${JSON.stringify(CATEGORIES)};\n` +
    `export const COUNTS = ${JSON.stringify(counts)};\n` +
    `export const TEXT = ${JSON.stringify(Object.fromEntries(rows.map((r) => [r.dot, r.text])))};\n` +
    `export const DX = ${JSON.stringify(Object.fromEntries(rows.filter((r) => r.icd.length).map((r) => [r.dot, r.icd])))};\n` +
    `export const ICD = ${JSON.stringify(usedIcd)};\n` +
    `export default ${JSON.stringify(compactRows(rows))};\n`);

  const renames = [];
  for (const f of ['data.js', 'search.js']) renames.push([f, fingerprint(f)]);
  const appPath = path.join(OUT, 'app.js');
  fs.writeFileSync(appPath, rewrite(fs.readFileSync(appPath, 'utf8'), renames));
  for (const f of ['app.js', 'app.css']) renames.push([f, fingerprint(f)]);
  const indexPath = path.join(OUT, 'index.html');
  const html0 = rewrite(fs.readFileSync(indexPath, 'utf8'), renames);

  const all = listFiles(OUT).filter((f) => f !== '.nojekyll');
  const version = shortHash(Buffer.from(all.map((f) => f + shortHash(fs.readFileSync(path.join(OUT, f)))).join('|')));
  // Problem-report address: set REPORT_EMAIL when building (REPORT_EMAIL=you@example.org npm run deploy).
  // Without it the report links are hidden.
  const report = (process.env.REPORT_EMAIL || '').trim();
  fs.writeFileSync(indexPath, html0.replaceAll('__VERSION__', version).replaceAll('__REPORT_EMAIL__', report));
  const precache = ['./', ...all.filter((f) => f !== 'index.html')];
  fs.writeFileSync(path.join(OUT, 'sw.js'), fs.readFileSync(path.join(SRC, 'sw.js'), 'utf8')
    .replace('__VERSION__', version)
    .replace('__PRECACHE__', JSON.stringify(precache, null, 2)));

  console.log(`Built ${rows.length} phrases (${TYPES.map((t) => `${t} ${counts[t]}`).join(', ')}); ` +
    `${Object.keys(usedIcd).length} ICD-10-CM codes -> site/  version ${version}`);
}

if (process.argv[1] === fileURLToPath(import.meta.url)) build();
