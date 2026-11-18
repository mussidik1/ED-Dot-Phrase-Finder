// Prints every ICD-10-CM code used in data/*.js as JSON (used by tools/icd-labels.py).
import { loadRows } from './build.mjs';
console.log(JSON.stringify([...new Set(loadRows().flatMap((r) => r.icd))]));
