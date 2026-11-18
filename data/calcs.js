// CALCULATORS for Score phrases, and the Canadian CT Head Rule phrase they need.
// calc(dot, { name, items: [{ label, short, opts: [[points, label], ...] }], bands: [[maxTotal, result], ...], rule })
// rule: true = a yes/no decision rule (no points shown); bands are read in order, first band whose max ≥ total wins.

add("Trauma & MSK", [
  ["cchr", "Score", "Canadian CT Head Rule", "canadian ct head|canadian ct head rule|cchr|ct head rule|minor head injury|head injury|head ct decision", ["S09.90XA"],
`Canadian CT Head Rule (applies only to GCS 13–15 after witnessed LOC, amnesia or disorientation; age ≥16; not on anticoagulants; no seizure; otherwise the rule does not apply):
High risk: GCS <15 at 2 h ***; suspected open/depressed skull fracture ***; signs of basilar skull fracture ***; vomiting ≥2 episodes ***; age ≥65 ***.
Medium risk: amnesia before impact ≥30 min ***; dangerous mechanism ***.
Result: {no risk factors: CT not indicated by rule / CT indicated: ***}.`],
]);

const YN = [[0, 'No'], [1, 'Yes']];

calc('heart', {
  name: 'HEART score',
  items: [
    { label: 'History', short: 'H', opts: [[0, 'Slightly suspicious'], [1, 'Moderately suspicious'], [2, 'Highly suspicious']] },
    { label: 'ECG', short: 'E', opts: [[0, 'Normal'], [1, 'Nonspecific repolarization'], [2, 'Significant ST deviation']] },
    { label: 'Age', short: 'A', opts: [[0, '<45'], [1, '45–64'], [2, '≥65']] },
    { label: 'Risk factors (HTN, HLD, DM, obesity, smoking, family history)', short: 'R', opts: [[0, 'None'], [1, '1–2'], [2, '≥3 or known atherosclerotic disease']] },
    { label: 'Initial troponin', short: 'T', opts: [[0, '≤ normal limit'], [1, '1–3× normal limit'], [2, '>3× normal limit']] },
  ],
  bands: [[3, 'low risk (about 2% 6-week MACE)'], [6, 'moderate risk (about 12–17% 6-week MACE)'], [10, 'high risk (about 50–65% 6-week MACE)']],
});

calc('wellspe', {
  name: 'Wells PE score',
  items: [
    { label: 'Clinical signs of DVT', short: 'DVT signs', opts: [[0, 'No'], [3, 'Yes']] },
    { label: 'PE is the most likely diagnosis', short: 'PE most likely', opts: [[0, 'No'], [3, 'Yes']] },
    { label: 'Heart rate >100', short: 'HR >100', opts: [[0, 'No'], [1.5, 'Yes']] },
    { label: 'Immobilization ≥3 days or surgery in past 4 weeks', short: 'Immobilization/surgery', opts: [[0, 'No'], [1.5, 'Yes']] },
    { label: 'Previous DVT or PE', short: 'Prior DVT/PE', opts: [[0, 'No'], [1.5, 'Yes']] },
    { label: 'Hemoptysis', short: 'Hemoptysis', opts: [[0, 'No'], [1, 'Yes']] },
    { label: 'Malignancy (treatment within 6 months or palliative)', short: 'Malignancy', opts: [[0, 'No'], [1, 'Yes']] },
  ],
  bands: [[4, 'PE unlikely (two-tier); D-dimer (age-adjusted) to rule out'], [99, 'PE likely (two-tier); CT pulmonary angiography']],
});

calc('perc', {
  name: 'PERC rule', rule: true,
  items: [
    { label: 'Age ≥50', short: 'Age ≥50', opts: YN },
    { label: 'Heart rate ≥100', short: 'HR ≥100', opts: YN },
    { label: 'SpO₂ <95% on room air', short: 'SpO₂ <95%', opts: YN },
    { label: 'Hemoptysis', short: 'Hemoptysis', opts: YN },
    { label: 'Estrogen use', short: 'Estrogen', opts: YN },
    { label: 'Prior DVT or PE', short: 'Prior DVT/PE', opts: YN },
    { label: 'Unilateral leg swelling', short: 'Leg swelling', opts: YN },
    { label: 'Surgery or trauma requiring hospitalization in past 4 weeks', short: 'Recent surgery/trauma', opts: YN },
  ],
  bands: [[0, 'PERC negative; with low pretest probability, no further PE testing indicated'], [99, 'PERC positive; does not exclude PE, proceed with D-dimer or imaging']],
});

calc('curb65', {
  name: 'CURB-65',
  items: [
    { label: 'Confusion (new)', short: 'Confusion', opts: YN },
    { label: 'BUN >19 mg/dL (urea >7 mmol/L)', short: 'BUN >19', opts: YN },
    { label: 'Respiratory rate ≥30', short: 'RR ≥30', opts: YN },
    { label: 'SBP <90 or DBP ≤60', short: 'Low BP', opts: YN },
    { label: 'Age ≥65', short: 'Age ≥65', opts: YN },
  ],
  bands: [[1, 'low risk; outpatient treatment candidate'], [2, 'moderate risk; consider short admission or closely supervised outpatient care'], [5, 'severe; admit, consider ICU for 4–5']],
});

calc('ccspine', {
  name: 'NEXUS C-spine criteria', rule: true,
  items: [
    { label: 'Posterior midline cervical tenderness', short: 'Midline tenderness', opts: YN },
    { label: 'Focal neurologic deficit', short: 'Focal deficit', opts: YN },
    { label: 'Altered alertness', short: 'Altered alertness', opts: YN },
    { label: 'Evidence of intoxication', short: 'Intoxication', opts: YN },
    { label: 'Painful distracting injury', short: 'Distracting injury', opts: YN },
  ],
  bands: [[0, 'low risk; C-spine imaging not required'], [99, 'not low risk; image the cervical spine (NEXUS sensitivity is lower in older adults)']],
});

calc('cchr', {
  name: 'Canadian CT Head Rule', rule: true,
  items: [
    { label: 'GCS <15 at 2 hours after injury', short: 'GCS <15 at 2 h', opts: [[0, 'No'], [10, 'Yes']] },
    { label: 'Suspected open or depressed skull fracture', short: 'Open/depressed fracture', opts: [[0, 'No'], [10, 'Yes']] },
    { label: 'Any sign of basilar skull fracture', short: 'Basilar skull fracture signs', opts: [[0, 'No'], [10, 'Yes']] },
    { label: 'Vomiting ≥2 episodes', short: 'Vomiting ≥2', opts: [[0, 'No'], [10, 'Yes']] },
    { label: 'Age ≥65', short: 'Age ≥65', opts: [[0, 'No'], [10, 'Yes']] },
    { label: 'Amnesia before impact ≥30 minutes', short: 'Retrograde amnesia ≥30 min', opts: [[0, 'No'], [1, 'Yes']] },
    { label: 'Dangerous mechanism (pedestrian struck, ejected, fall >3 ft or 5 stairs)', short: 'Dangerous mechanism', opts: [[0, 'No'], [1, 'Yes']] },
  ],
  bands: [[0, 'no risk factors; CT not indicated by rule'], [9, 'medium risk factor present; CT indicated'], [99, 'high risk factor present; CT indicated (risk of neurosurgical intervention)']],
});
