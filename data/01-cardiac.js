// CARDIOVASCULAR. Original templates written for this app; edit freely.
// Row: [dot name ("*" = the main phrase for that impression), type, title, impressions "a|b|c", [ICD-10-CM], text]
// *** marks a blank to fill in (F2 jumps to it in Epic). {a/b} marks a choice to keep one of.

add("Cardiac", [
  ["*cpmdm", "MDM", "Chest pain", "chest pain|cp|atypical chest pain|chest pressure|chest tightness|r07.9|rule out acs|r/o mi|anginal equivalent", ["R07.9", "R07.89"],
`MDM: ***-year-old with chest pain. Presentation is {typical/atypical} for ACS.

Differential includes ACS, PE, aortic dissection, pneumothorax, pericarditis/tamponade, esophageal rupture, pneumonia, GERD/esophageal spasm, biliary disease and musculoskeletal pain.

- ECG: *** (independently interpreted; no STEMI/STEMI-equivalent).
- High-sensitivity troponin: initial ***, repeat ***; delta ***.
- HEART score: *** ({low/moderate/high} risk).
- PE: {PERC negative / Wells low and D-dimer negative / CTA negative / clinically not suspected because ***}.
- Dissection: {low suspicion: no tearing/radiating pain, pulse or BP differential, or new focal deficit / CTA negative}.
- CXR: *** (no pneumothorax, widened mediastinum or infiltrate).

Assessment: {low-risk chest pain, ACS ruled out by serial troponin / NSTEMI / unstable angina / ***}.
Plan: ***. Discussed results, risk and follow-up with patient, who agrees with plan.`],
  ["heart", "Score", "HEART score", "heart score|chest pain risk|chest pain|acs risk stratification|mace", [],
`HEART score:
- History: {0 slightly / 1 moderately / 2 highly} suspicious — ***
- ECG: {0 normal / 1 nonspecific repolarization / 2 significant ST deviation} — ***
- Age: {0 <45 / 1 45–64 / 2 ≥65}
- Risk factors (HTN, HLD, DM, obesity, smoking, family history, known atherosclerosis): {0 none / 1 one or two / 2 three or more or known atherosclerotic disease}
- Troponin: {0 ≤ normal limit / 1 1–3× / 2 >3× normal limit}
Total: *** — {0–3 low (about 2% 6-week MACE) / 4–6 moderate / 7–10 high}.`],
  ["cpdc", "Discharge", "Chest pain, discharge", "chest pain discharge|chest pain|low risk chest pain|noncardiac chest pain", ["R07.9"],
`Your heart tests today (ECG and blood tests) did not show a heart attack. That is reassuring, but chest pain can have many causes and some cannot be ruled out in one ED visit.

- Follow up with *** within {2–3 days / 1 week}. Ask about a stress test or other heart testing if recommended.
- Take your usual medicines. ***

Call 911 (do not drive yourself) for chest pain that is worse or lasts more than a few minutes, pain spreading to your arm, jaw or back, shortness of breath, sweating, fainting, or a racing or irregular heartbeat.`],
  ["*stemimdm", "MDM", "STEMI / cath lab activation", "stemi|st elevation mi|i21.3|acute mi|myocardial infarction|cath lab activation|heart attack|omi|occlusion mi", ["I21.3", "I21.4"],
`MDM: ***-year-old with *** and ECG showing ***-mm ST elevation in *** consistent with {anterior/inferior/lateral/posterior} STEMI (independently interpreted). Compared with prior ECG: ***.

Cath lab activated at ***. Interventional cardiology (Dr. ***) contacted at ***.
Given: aspirin *** mg chewed, heparin *** units IV, ***.
Considered and assessed for aortic dissection before anticoagulation: {no tearing pain, pulse deficit, mediastinal widening / ***}.
Door-to-ECG *** min. Patient to cath lab at ***.

Critical care time: *** minutes, excluding separately billable procedures.`],
  ["nstemimdm", "MDM", "NSTEMI / unstable angina", "nstemi|non st elevation mi|i21.4|unstable angina|i20.0|acs|acute coronary syndrome|elevated troponin|troponin leak", ["I21.4", "I20.0"],
`MDM: ***-year-old with *** and troponin *** → *** (rising). ECG: *** without STEMI criteria (independently interpreted).

Considered type 2 MI/demand ischemia, myocarditis, PE, dissection, sepsis and renal disease; *** favors type 1 ACS.
Treatment: aspirin *** mg, heparin {bolus/infusion}, ***. Pain {resolved/persistent}.
Cardiology (Dr. ***) consulted; recommends ***.
Disposition: admit to *** for ACS management and possible catheterization. High risk: acute illness posing threat to bodily function, drug therapy requiring intensive monitoring (heparin).`],
  ["*afibmdm", "MDM", "Atrial fibrillation with RVR", "atrial fibrillation|afib|a fib|af rvr|rvr|rapid ventricular response|i48.91|a flutter|atrial flutter|i48.92|irregular heartbeat|palpitations", ["I48.91", "I48.92"],
`MDM: ***-year-old with {new/known} atrial {fibrillation/flutter} with rapid ventricular response, rate ***. Hemodynamically {stable/unstable}.

Considered precipitants: infection/sepsis, hypovolemia, thyrotoxicosis, PE, ACS, alcohol, electrolyte derangement, medication nonadherence. Workup: ***.
Onset: {<48 h / >48 h / unknown}.
- Rate control: *** (diltiazem *** mg IV / metoprolol *** mg IV), rate now ***.
- {Cardioversion: *** J synchronized, converted to sinus / Not cardioverted because ***}.
- CHA₂DS₂-VASc ***; HAS-BLED ***. Anticoagulation: {continued / started *** / not indicated / discussed, declined}.
Disposition: ***.`],
  ["afibdc", "Discharge", "Atrial fibrillation, discharge", "atrial fibrillation discharge|afib discharge|afib|atrial fibrillation|palpitations", ["I48.91"],
`You were treated for atrial fibrillation, an irregular heart rhythm. Your heart rate is now controlled.

- Take *** as prescribed. {Your blood thinner, ***, lowers your stroke risk; do not skip doses.}
- Avoid alcohol, energy drinks and too much caffeine.
- See *** (cardiology or primary care) within *** days.

Return or call 911 for chest pain, fainting, trouble breathing, a heart rate that stays over 120, or signs of stroke: face drooping, arm or leg weakness, trouble speaking. On a blood thinner, also return for black stools, vomiting blood or any serious bleeding.`],
  ["*chfmdm", "MDM", "Heart failure exacerbation", "chf|heart failure|chf exacerbation|acute decompensated heart failure|adhf|i50.9|i50.23|i50.33|volume overload|fluid overload|pulmonary edema", ["I50.9", "I50.23", "I50.33"],
`MDM: ***-year-old with {HFrEF/HFpEF}, EF *** %, presenting with dyspnea, orthopnea and *** consistent with acute decompensated heart failure.

Considered precipitants: ACS, arrhythmia, hypertension, dietary/medication nonadherence, infection, renal failure, PE. ECG ***; troponin ***; BNP *** (baseline ***); CXR ***.
Treatment: furosemide *** mg IV, {nitroglycerin *** / BiPAP ***}. Response: ***.
Disposition: {admit for IV diuresis and monitoring / discharge after diuresis with increased home dose and follow-up in 48–72 h}.`],
  ["*syncmdm", "MDM", "Syncope", "syncope|passed out|fainting|loc|r55|near syncope|presyncope|vasovagal|collapse", ["R55"],
`MDM: ***-year-old with {syncope/near-syncope} while ***. Prodrome: ***. No seizure-like activity, incontinence or prolonged postictal state reported.

Considered arrhythmia, structural heart disease (AS, HOCM), PE, dissection, SAH, GI bleed, ectopic pregnancy, orthostasis, vasovagal and situational syncope.
- ECG: *** (no Brugada, WPW, long QT, high-grade block or HOCM pattern).
- Labs: ***. Orthostatics: ***.
- {Canadian Syncope Risk Score *** / San Francisco Syncope Rule: ***}.
Assessment: {likely vasovagal/situational syncope, low risk / ***}.
Plan: ***. Advised no driving until cleared by follow-up, as appropriate.`],
  ["*htnmdm", "MDM", "Elevated blood pressure / hypertensive urgency", "hypertension|htn|elevated blood pressure|hypertensive urgency|asymptomatic hypertension|i10|high blood pressure|i16.0", ["I10", "I16.0"],
`MDM: ***-year-old with blood pressure *** (repeat ***). Screened for acute end-organ injury: no chest pain, dyspnea, focal neurologic deficit, severe headache, vision change or confusion. ***
{No testing indicated / Labs: creatinine ***, UA ***; ECG ***}.
No evidence of hypertensive emergency. Rapid lowering in the ED is not indicated for asymptomatic elevated BP. {Restarted/adjusted home ***}.
Follow-up with PCP within 1 week for recheck.`],
  ["htnemmdm", "MDM", "Hypertensive emergency", "hypertensive emergency|i16.1|malignant hypertension|hypertensive encephalopathy|pres", ["I16.1"],
`MDM: ***-year-old with BP *** and evidence of acute end-organ injury: ***.
Considered dissection, ACS, pulmonary edema, stroke/ICH, PRES, preeclampsia (if applicable) and sympathomimetic toxicity.
Workup: ***.
Treatment: {nicardipine/clevidipine/labetalol} *** with target {≤25% reduction in the first hour / *** for dissection or stroke}.
Disposition: ICU. Critical care time *** minutes.`],
  ["*dvtmdm", "MDM", "DVT", "dvt|deep vein thrombosis|leg swelling|i82.40|calf pain|unilateral leg swelling|blood clot leg", ["I82.409", "M79.89"],
`MDM: ***-year-old with {right/left} leg swelling and pain for ***.
Considered DVT, cellulitis, Baker's cyst, muscle strain/hematoma, superficial thrombophlebitis, lymphedema and compartment syndrome.
Wells DVT score ***. {D-dimer ***} / Ultrasound: ***.
No signs of PE (no dyspnea, chest pain, tachycardia or hypoxia). ***
Plan: {anticoagulation with *** / no DVT found; repeat ultrasound in 1 week if symptoms persist}. Bleeding risk reviewed.`],
  ["*pemdm", "MDM", "Pulmonary embolism", "pe|pulmonary embolism|i26.99|i26.09|pleuritic chest pain|pulmonary embolus|saddle embolus", ["I26.99", "I26.09"],
`MDM: ***-year-old with *** and CTA showing {segmental/subsegmental/lobar/saddle} PE {with/without} right heart strain.
Vitals: HR ***, BP ***, SpO₂ ***. Troponin ***, BNP ***; CT RV/LV ratio ***.
Risk class: {low (sPESI 0) / intermediate-low / intermediate-high / high (massive)}.
Treatment: {heparin infusion / LMWH / DOAC ***}. {PERT/pulmonology contacted: ***}.
Disposition: {admit / discharge on *** with follow-up in 2–3 days (Hestia/sPESI low risk, reliable follow-up, no contraindication)}.`],
  ["perc", "Score", "PERC rule", "perc|pe rule out|pulmonary embolism|pe|wells pe|low risk pe", [],
`PERC rule (applies only when pretest probability is low by gestalt):
Age <50: ***; HR <100: ***; SpO₂ ≥95%: ***; no hemoptysis: ***; no estrogen use: ***; no prior DVT/PE: ***; no unilateral leg swelling: ***; no surgery/trauma requiring hospitalization in past 4 weeks: ***.
{All criteria met: PERC negative, no further PE testing indicated / PERC positive: ***}.`],
  ["wellspe", "Score", "Wells score for PE", "wells|wells pe|pulmonary embolism|pe|d dimer", [],
`Wells PE score:
Clinical signs of DVT (3) ***; PE most likely diagnosis (3) ***; HR >100 (1.5) ***; immobilization ≥3 days or surgery in past 4 weeks (1.5) ***; prior DVT/PE (1.5) ***; hemoptysis (1) ***; malignancy (1) ***.
Total ***: {≤4 PE unlikely → age-adjusted D-dimer *** / >4 PE likely → CTA}.`],
  ["dissmdm", "MDM", "Aortic dissection considered / ruled out", "aortic dissection|dissection|tearing chest pain|i71.00|back pain chest pain|aortic", ["I71.00"],
`Aortic dissection considered given ***. ADD-RS ***.
{Low risk (ADD-RS 0–1) with no tearing/ripping pain, pulse or BP differential, focal deficit, new murmur, hypotension or widened mediastinum; D-dimer *** / CTA chest: no dissection}.
{CTA shows type *** dissection: CT surgery/vascular (Dr. ***) consulted; started esmolol ***, target HR <60 and SBP <120.}`],
  ["ecgread", "Exam", "ECG interpretation", "ecg|ekg|ecg interpretation|ekg read|rhythm|electrocardiogram", [],
`ECG independently interpreted by me at ***: {sinus rhythm / ***}, rate ***, axis {normal/***}, PR *** ms, QRS *** ms, QTc *** ms. {No acute ST elevation or depression / ***}. {No significant change from prior dated *** / ***}.`],
]);
