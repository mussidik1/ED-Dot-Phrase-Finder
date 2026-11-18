// SECOND BATCH OF DECISION TOOLS (Nov 2026). Each Score phrase has an interactive calculator below it.

const N = [[0, 'No'], [1, 'Yes']];

add("Cardiac", [
  ["wellsdvt", "Score", "Wells score for DVT", "wells dvt|dvt score|dvt|deep vein thrombosis|leg swelling|d dimer dvt", [],
`Wells DVT score ***: {DVT unlikely (≤1): D-dimer *** / DVT likely (≥2): ultrasound ***}. Items: ***.`],
  ["addrs", "Score", "Aortic Dissection Detection Risk Score (ADD-RS)", "add-rs|addrs|aortic dissection risk|dissection score|aortic dissection|advised", [],
`ADD-RS ***: high-risk conditions ***; high-risk pain features ***; high-risk exam findings ***.
{ADD-RS ≤1 with D-dimer <500 ng/mL: dissection effectively excluded (ADvISED) / ADD-RS ≥2 or D-dimer elevated: CTA ***}.`],
  ["spesi", "Score", "sPESI (PE severity)", "spesi|pesi|pe severity|pulmonary embolism severity|pe outpatient|pe risk", [],
`sPESI ***: {0 = low risk (about 1% 30-day mortality), outpatient treatment may be considered with Hestia/clinical judgment / ≥1 = higher risk (about 10%)}. Items: ***.`],
  ["csrs", "Score", "Canadian Syncope Risk Score", "canadian syncope risk score|csrs|syncope score|syncope risk|syncope", [],
`Canadian Syncope Risk Score *** ({very low / low / medium / high / very high} risk of serious adverse event within 30 days). Items: ***.`],
  ["hstrop", "Score", "High-sensitivity troponin pathway (0/1–2 h)", "hs troponin|high sensitivity troponin|troponin pathway|0 1 hour|0/1|0/2|delta troponin|rapid rule out|esc 0 1|hstnt|hstni", [],
`High-sensitivity troponin {I / T} (assay ***), using our lab's validated 0/1–2 h cutoffs:
0 h *** ng/L at ***; {1 h / 2 h} *** ng/L at ***; delta *** ng/L. Chest pain onset ***.
Result: {rule-out (0 h very low with symptoms >3 h, or 0 h low with small delta) / observe (between cutoffs): repeat at 3 h *** / rule-in (0 h high or large delta)}.
Interpreted with ECG and clinical picture; not applied when ***.`],
]);

add("Trauma & MSK", [
  ["ccsr", "Score", "Canadian C-Spine Rule", "canadian c spine rule|canadian c-spine|ccsr|c spine rule|cervical spine imaging|neck injury", [],
`Canadian C-Spine Rule (alert, GCS 15, stable trauma patient ≥16 y): high-risk factor ***; low-risk factor allowing range-of-motion assessment ***; active rotation 45° left and right ***.
Result: {no imaging needed / imaging indicated: ***}.`],
  ["ottawa", "Score", "Ottawa ankle and foot rules", "ottawa|ottawa ankle|ottawa foot|ankle x ray|foot x ray|ankle sprain|ankle injury", [],
`Ottawa rules: {no X-ray needed / X-ray indicated: ***}. Findings: ***.`],
  ["kocher", "Score", "Kocher criteria (pediatric septic hip)", "kocher|kocher criteria|septic hip|septic arthritis child|transient synovitis|limp fever", [],
`Kocher criteria ***/4 (non-weight-bearing ***; fever >38.5 °C ***; ESR >40 mm/h ***; WBC >12,000 ***). Predicted probability of septic arthritis: ***.
{CRP >2.0 mg/dL also considered (Caird): ***.} Plan: ***.`],
]);

add("GI", [
  ["gbs", "Score", "Glasgow-Blatchford score (upper GI bleed)", "glasgow blatchford|gbs|blatchford|upper gi bleed score|gi bleed|melena|outpatient gi bleed", [],
`Glasgow-Blatchford score ***: {0–1: very low risk, outpatient management may be considered with endoscopy follow-up (ACG 2021) / ≥2: admission and inpatient endoscopy}. Items: ***.`],
]);

add("Tox & Environmental", [
  ["ciwa", "Score", "CIWA-Ar (alcohol withdrawal)", "ciwa|ciwa-ar|alcohol withdrawal score|withdrawal score|alcohol withdrawal|etoh withdrawal", [],
`CIWA-Ar *** at ***: {minimal (<8–10) / moderate (10–15) / severe (>15)} withdrawal. Items: ***. Treatment per protocol: ***. Reassess at ***.`],
]);

add("Peds", [
  ["pecarnfi", "Score", "PECARN febrile infant rule (≤60 days)", "pecarn febrile infant|febrile infant rule|febrile infant|fever infant|procalcitonin infant|sbi infant", [],
`PECARN febrile infant rule (Kuppermann 2019; well-appearing infants ≤60 days, T ≥38.0 °C): urinalysis ***; ANC *** /µL; procalcitonin *** ng/mL.
Result: {low risk for serious bacterial infection (UA negative, ANC ≤4090, procalcitonin ≤0.5) / not low risk: ***}. Used with the AAP 2021 febrile infant guideline: ***.`],
  ["westley", "Score", "Westley croup score", "westley|westley croup score|croup score|croup severity|croup|stridor", [],
`Westley croup score *** ({mild ≤2 / moderate 3–5 / severe 6–11 / impending respiratory failure ≥12}). Items: ***.`],
  ["cds", "Score", "Clinical Dehydration Scale (children)", "clinical dehydration scale|cds|dehydration score|dehydration child|dehydration|gastroenteritis child", [],
`Clinical Dehydration Scale *** ({0 no dehydration / 1–4 some (<5%) / 5–8 moderate to severe (≥6%)}). Items: ***. Plan: ***.`],
]);

calc('wellsdvt', {
  name: 'Wells DVT score',
  items: [
    { label: 'Active cancer (treatment within 6 months or palliative)', short: 'Cancer', opts: N },
    { label: 'Paralysis, paresis or recent leg cast', short: 'Paralysis/cast', opts: N },
    { label: 'Bedridden ≥3 days or major surgery within 12 weeks', short: 'Bedridden/surgery', opts: N },
    { label: 'Localized tenderness along the deep veins', short: 'Deep vein tenderness', opts: N },
    { label: 'Entire leg swollen', short: 'Whole leg swollen', opts: N },
    { label: 'Calf swelling ≥3 cm compared with the other leg', short: 'Calf ≥3 cm', opts: N },
    { label: 'Pitting edema in the symptomatic leg only', short: 'Pitting edema', opts: N },
    { label: 'Collateral superficial (non-varicose) veins', short: 'Collateral veins', opts: N },
    { label: 'Previous DVT', short: 'Prior DVT', opts: N },
    { label: 'Alternative diagnosis at least as likely as DVT', short: 'Alternative dx', opts: [[0, 'No'], [-2, 'Yes']] },
  ],
  bands: [[1, 'DVT unlikely (two-tier); D-dimer to rule out'], [99, 'DVT likely (two-tier); compression ultrasound']],
});

calc('addrs', {
  name: 'ADD-RS',
  items: [
    { label: 'High-risk condition (Marfan or connective tissue disease, family history of aortic disease, known aortic valve disease, recent aortic manipulation, known thoracic aortic aneurysm)', short: 'High-risk condition', opts: N },
    { label: 'High-risk pain (abrupt onset, severe intensity, or ripping/tearing)', short: 'High-risk pain', opts: N },
    { label: 'High-risk exam (pulse deficit, SBP difference, focal neuro deficit with pain, new aortic regurgitation murmur with pain, hypotension or shock)', short: 'High-risk exam', opts: N },
  ],
  bands: [[0, 'low risk; with D-dimer <500 ng/mL, dissection effectively excluded'], [1, 'intermediate risk; D-dimer <500 ng/mL makes dissection unlikely (ADvISED), otherwise CTA'], [3, 'high risk; CT angiography']],
});

calc('spesi', {
  name: 'sPESI',
  items: [
    { label: 'Age >80', short: 'Age >80', opts: N },
    { label: 'History of cancer', short: 'Cancer', opts: N },
    { label: 'Chronic cardiopulmonary disease (heart failure or chronic lung disease)', short: 'Cardiopulmonary disease', opts: N },
    { label: 'Heart rate ≥110', short: 'HR ≥110', opts: N },
    { label: 'Systolic BP <100', short: 'SBP <100', opts: N },
    { label: 'SpO₂ <90%', short: 'SpO₂ <90%', opts: N },
  ],
  bands: [[0, 'low risk (about 1% 30-day mortality); outpatient treatment may be considered'], [6, 'not low risk (about 10% 30-day mortality)']],
});

calc('csrs', {
  name: 'Canadian Syncope Risk Score',
  items: [
    { label: 'Predisposition to vasovagal symptoms (warm crowded place, prolonged standing, fear, emotion, pain)', short: 'Vasovagal predisposition', opts: [[0, 'No'], [-1, 'Yes']] },
    { label: 'History of heart disease', short: 'Heart disease', opts: [[0, 'No'], [1, 'Yes']] },
    { label: 'Any ED systolic BP <90 or >180', short: 'SBP <90 or >180', opts: [[0, 'No'], [2, 'Yes']] },
    { label: 'Troponin above the 99th percentile', short: 'Troponin elevated', opts: [[0, 'No'], [2, 'Yes']] },
    { label: 'Abnormal QRS axis (<−30° or >100°)', short: 'Abnormal axis', opts: [[0, 'No'], [1, 'Yes']] },
    { label: 'QRS duration >130 ms', short: 'QRS >130', opts: [[0, 'No'], [1, 'Yes']] },
    { label: 'Corrected QT >480 ms', short: 'QTc >480', opts: [[0, 'No'], [2, 'Yes']] },
    { label: 'ED diagnosis', short: 'ED diagnosis', opts: [[-2, 'Vasovagal syncope'], [0, 'Neither'], [2, 'Cardiac syncope']] },
  ],
  bands: [[-2, 'very low risk'], [0, 'low risk'], [3, 'medium risk'], [5, 'high risk'], [99, 'very high risk']],
});

calc('ccsr', {
  name: 'Canadian C-Spine Rule', rule: true,
  items: [
    { label: 'Any high-risk factor: age ≥65, dangerous mechanism, or paresthesias in the extremities', short: 'High-risk factor', opts: [[0, 'No'], [10, 'Yes']] },
    { label: 'Any low-risk factor that allows safe range-of-motion testing: simple rear-end MVC, sitting position in ED, ambulatory at any time, delayed onset of neck pain, no midline tenderness', short: 'Low-risk factor present', opts: [[5, 'No'], [0, 'Yes']] },
    { label: 'Able to actively rotate the neck 45° left and right', short: 'Rotates 45°', opts: [[5, 'No / not assessed'], [0, 'Yes']] },
  ],
  bands: [[0, 'no imaging needed'], [99, 'imaging indicated']],
});

calc('ottawa', {
  name: 'Ottawa ankle and foot rules', rule: true,
  items: [
    { label: 'Bone tenderness at the posterior edge or tip of the lateral malleolus (distal 6 cm)', short: 'Lateral malleolus', opts: N },
    { label: 'Bone tenderness at the posterior edge or tip of the medial malleolus (distal 6 cm)', short: 'Medial malleolus', opts: N },
    { label: 'Bone tenderness at the base of the 5th metatarsal', short: 'Base of 5th MT', opts: N },
    { label: 'Bone tenderness at the navicular', short: 'Navicular', opts: N },
    { label: 'Unable to bear weight 4 steps both right after the injury and in the ED', short: 'Unable to bear weight', opts: N },
  ],
  bands: [[0, 'no X-ray needed'], [99, 'X-ray indicated (ankle series for malleolar findings, foot series for midfoot findings)']],
});

calc('kocher', {
  name: 'Kocher criteria',
  items: [
    { label: 'Non-weight-bearing', short: 'Non-weight-bearing', opts: N },
    { label: 'Fever >38.5 °C', short: 'Fever >38.5', opts: N },
    { label: 'ESR >40 mm/h', short: 'ESR >40', opts: N },
    { label: 'WBC >12,000/mm³', short: 'WBC >12,000', opts: N },
  ],
  bands: [[0, 'septic arthritis probability <0.2%'], [1, 'about 3%'], [2, 'about 40%'], [3, 'about 93%'], [4, 'about 99.6%']],
});

calc('gbs', {
  name: 'Glasgow-Blatchford score',
  items: [
    { label: 'BUN (mg/dL)', short: 'BUN', opts: [[0, '<18.2'], [2, '18.2–22.3'], [3, '22.4–27.9'], [4, '28–69.9'], [6, '≥70']] },
    { label: 'Hemoglobin (g/dL)', short: 'Hgb', opts: [[0, 'Men ≥13 / women ≥12'], [1, 'Men 12–12.9 / women 10–11.9'], [3, 'Men 10–11.9'], [6, '<10 (men or women)']] },
    { label: 'Systolic BP', short: 'SBP', opts: [[0, '≥110'], [1, '100–109'], [2, '90–99'], [3, '<90']] },
    { label: 'Heart rate ≥100', short: 'HR ≥100', opts: N },
    { label: 'Melena', short: 'Melena', opts: N },
    { label: 'Presented with syncope', short: 'Syncope', opts: [[0, 'No'], [2, 'Yes']] },
    { label: 'Hepatic disease', short: 'Liver disease', opts: [[0, 'No'], [2, 'Yes']] },
    { label: 'Cardiac failure', short: 'Heart failure', opts: [[0, 'No'], [2, 'Yes']] },
  ],
  bands: [[1, 'very low risk (0–1); outpatient management may be considered'], [99, 'not low risk; admission and endoscopy']],
});

const C7 = [[0, '0'], [1, '1'], [2, '2'], [3, '3'], [4, '4'], [5, '5'], [6, '6'], [7, '7']];
calc('ciwa', {
  name: 'CIWA-Ar',
  items: [
    { label: 'Nausea/vomiting (0 none – 7 constant nausea, frequent dry heaves and vomiting)', short: 'N/V', opts: C7 },
    { label: 'Tremor (0 none – 7 severe, even with arms not extended)', short: 'Tremor', opts: C7 },
    { label: 'Paroxysmal sweats (0 none – 7 drenching)', short: 'Sweats', opts: C7 },
    { label: 'Anxiety (0 at ease – 7 acute panic)', short: 'Anxiety', opts: C7 },
    { label: 'Agitation (0 normal – 7 paces or thrashes constantly)', short: 'Agitation', opts: C7 },
    { label: 'Tactile disturbances (0 none – 7 continuous hallucinations)', short: 'Tactile', opts: C7 },
    { label: 'Auditory disturbances (0 none – 7 continuous hallucinations)', short: 'Auditory', opts: C7 },
    { label: 'Visual disturbances (0 none – 7 continuous hallucinations)', short: 'Visual', opts: C7 },
    { label: 'Headache, fullness in head (0 none – 7 extremely severe)', short: 'Headache', opts: C7 },
    { label: 'Orientation (0 oriented – 4 disoriented to place and/or person)', short: 'Orientation', opts: [[0, '0'], [1, '1'], [2, '2'], [3, '3'], [4, '4']] },
  ],
  bands: [[9, 'minimal withdrawal'], [15, 'moderate withdrawal'], [67, 'severe withdrawal']],
});

calc('pecarnfi', {
  name: 'PECARN febrile infant rule', rule: true,
  items: [
    { label: 'Urinalysis positive (leukocyte esterase, nitrite, or >5 WBC/hpf)', short: 'UA positive', opts: N },
    { label: 'Absolute neutrophil count >4,090/µL', short: 'ANC >4090', opts: N },
    { label: 'Procalcitonin >0.5 ng/mL', short: 'PCT >0.5', opts: N },
  ],
  bands: [[0, 'low risk for serious bacterial infection'], [99, 'not low risk']],
});

calc('westley', {
  name: 'Westley croup score',
  items: [
    { label: 'Level of consciousness', short: 'LOC', opts: [[0, 'Normal'], [5, 'Disoriented']] },
    { label: 'Cyanosis', short: 'Cyanosis', opts: [[0, 'None'], [4, 'With agitation'], [5, 'At rest']] },
    { label: 'Stridor', short: 'Stridor', opts: [[0, 'None'], [1, 'With agitation'], [2, 'At rest']] },
    { label: 'Air entry', short: 'Air entry', opts: [[0, 'Normal'], [1, 'Decreased'], [2, 'Markedly decreased']] },
    { label: 'Retractions', short: 'Retractions', opts: [[0, 'None'], [1, 'Mild'], [2, 'Moderate'], [3, 'Severe']] },
  ],
  bands: [[2, 'mild croup'], [5, 'moderate croup'], [11, 'severe croup'], [17, 'impending respiratory failure']],
});

calc('cds', {
  name: 'Clinical Dehydration Scale',
  items: [
    { label: 'General appearance', short: 'Appearance', opts: [[0, 'Normal'], [1, 'Thirsty, restless or lethargic but irritable when touched'], [2, 'Drowsy, limp, cold, sweaty, comatose']] },
    { label: 'Eyes', short: 'Eyes', opts: [[0, 'Normal'], [1, 'Slightly sunken'], [2, 'Very sunken']] },
    { label: 'Mucous membranes (tongue)', short: 'Mucous membranes', opts: [[0, 'Moist'], [1, 'Sticky'], [2, 'Dry']] },
    { label: 'Tears', short: 'Tears', opts: [[0, 'Present'], [1, 'Decreased'], [2, 'Absent']] },
  ],
  bands: [[0, 'no dehydration'], [4, 'some dehydration (<5%)'], [8, 'moderate to severe dehydration (≥6%)']],
});
