// GENITOURINARY, RENAL, OB/GYN

add("GU & Renal", [
  ["*stonemdm", "MDM", "Renal colic / kidney stone", "kidney stone|renal colic|nephrolithiasis|n20.0|ureterolithiasis|n20.1|flank pain|r10.9|ureteral stone|n23", ["N20.0", "N20.1", "N23"],
`MDM: ***-year-old with {right/left} flank pain radiating to the groin ***.
Considered ureterolithiasis, pyelonephritis/infected stone, AAA (age ***), renal infarct, appendicitis/diverticulitis, biliary disease, {ectopic pregnancy, ovarian torsion} and testicular torsion. {Not pursued further: *** because ***.}
UA ***; creatinine ***; {hCG ***}. Imaging: {CT: *** mm stone at *** with *** hydronephrosis / bedside US: ***}.
Infection or AKI: {no signs / ***}. Treatment: ***. Reassessment: pain {controlled / ***}, tolerating PO {yes / no}.
Plan: {tamsulosin for distal stone 5–10 mm}, analgesia, strainer, urology follow-up. Return for fever, uncontrolled pain or vomiting.`],
  ["stonedc", "Discharge", "Kidney stone, discharge", "kidney stone discharge|renal colic|kidney stone|nephrolithiasis|flank pain", ["N20.1"],
`You have a kidney stone. Most stones this size pass on their own within a few weeks.

- Take *** for pain. {Take tamsulosin daily to help the stone pass; it can make you lightheaded when you stand.}
- Drink plenty of water. Strain your urine and save any stone for your urologist.
- Call urology (***) for an appointment within 1 week.

Return now for fever or chills, pain not controlled by your medicine, vomiting that keeps you from taking fluids or medicine, or very little urine.`],
  ["*utimdm", "MDM", "Urinary tract infection / cystitis", "uti|urinary tract infection|cystitis|n39.0|n30.00|dysuria|r30.0|burning urination|bladder infection", ["N39.0", "N30.00"],
`MDM: ***-year-old with dysuria, frequency and urgency for ***. Fever, flank pain or CVA tenderness: {none / ***}. {Not pregnant (hCG negative).} Vaginal discharge: {none reported / ***}; {STI risk ***}.
Considered pyelonephritis, STI/urethritis, vaginitis, nephrolithiasis and prostatitis. {Not pursued further: *** because ***.}
UA ***; {culture sent}.
Assessment: uncomplicated cystitis. Treatment: *** (per allergies, prior cultures and local resistance). Return for fever, flank pain or vomiting.`],
  ["*pyelomdm", "MDM", "Pyelonephritis", "pyelonephritis|pyelo|n10|kidney infection|complicated uti|febrile uti|flank pain fever", ["N10"],
`MDM: ***-year-old with fever, flank pain and UA *** consistent with pyelonephritis.
Considered infected obstructing stone, perinephric abscess and sepsis. Lactate ***; creatinine ***; {hCG ***}; {imaging *** to exclude obstruction}. {Not pursued further: *** because ***.}
Treatment: {ceftriaxone 1 g IV}, fluids, antipyretic, antiemetic. Urine culture sent.
Disposition: {discharge on ***, tolerating PO, nontoxic, reliable follow-up; culture callback / admit for ***}.`],
  ["*aki", "MDM", "Acute kidney injury", "aki|acute kidney injury|n17.9|renal failure|elevated creatinine|arf|acute renal failure", ["N17.9"],
`MDM: ***-year-old with creatinine *** (baseline ***), consistent with AKI.
Considered prerenal (volume loss, poor intake, heart failure), intrinsic (ATN, nephrotoxins: NSAIDs/contrast/***), and postrenal (obstruction, retention: bladder scan ***). {Not pursued further: *** because ***.}
Potassium ***, bicarbonate ***; no emergent dialysis indication (AEIOU: acidosis, electrolytes, ingestion, overload, uremia).
Treatment: ***; held nephrotoxic medications (***).
Disposition: ***.`],
  ["hyperk", "MDM", "Hyperkalemia", "hyperkalemia|e87.5|high potassium|elevated potassium|k high", ["E87.5"],
`MDM: potassium *** (hemolysis {not} reported). ECG: {no peaked T waves, QRS widening or arrhythmia / ***}.
Cause: {AKI/CKD, ACE-I/ARB/spironolactone, missed dialysis, ***}.
Treatment: {calcium gluconate 1–3 g IV (or calcium chloride 1 g via large or central line) for ECG changes}, regular insulin {10 / 5 (ESRD or low glucose)} units IV with dextrose 25 g if glucose <250, albuterol 10–20 mg nebulized, {sodium zirconium cyclosilicate/patiromer ***}, {furosemide *** if making urine}, {bicarbonate only for metabolic acidosis}, {dialysis: nephrology contacted}.
Repeat K ***; glucose checks q1h ×4–6 h. Disposition: ***.`],
  ["*torsionmdm", "MDM", "Testicular pain / torsion", "testicular torsion|testicular pain|n44.00|scrotal pain|n50.81|epididymitis|n45.1|orchitis|scrotal swelling", ["N44.00", "N50.811", "N45.1"],
`MDM: ***-year-old with {right/left} scrotal pain, onset ***.
Considered testicular torsion, torsion of appendix testis, epididymitis/orchitis, incarcerated hernia, Fournier's gangrene, trauma and referred pain from ureterolithiasis. {Not pursued further: *** because ***.}
Exam: cremasteric reflex ***, lie ***, ***. TWIST score ***.
Doppler US: ***.
{Torsion: urology (Dr. ***) contacted at ***, manual detorsion ***, to OR / Epididymitis: treated with ***; STI testing sent / ***}.`],
  ["retention", "MDM", "Urinary retention", "urinary retention|r33.9|retention|cant urinate|unable to void|bph|n40.1|foley", ["R33.9", "N40.1"],
`MDM: ***-year-old with inability to void for ***. Bladder scan *** mL.
Considered BPH, medication effect (anticholinergic, opioid, ***), UTI, constipation, stricture, and cord compression (no back pain, saddle anesthesia, leg weakness or bowel incontinence: ***). {Not pursued further: *** because ***.}
Foley placed with *** mL return. UA ***; creatinine ***.
Plan: discharge with catheter and leg bag, {tamsulosin}, urology follow-up for voiding trial in ***.`],
]);

add("OB/GYN", [
  ["*vbpregmdm", "MDM", "First-trimester vaginal bleeding / ectopic rule-out", "vaginal bleeding in pregnancy|first trimester bleeding|threatened abortion|o20.0|ectopic|ectopic pregnancy|o00.90|pregnancy of unknown location|pul|miscarriage|o03.9|spontaneous abortion", ["O20.0", "O00.90", "O03.9"],
`MDM: ***-year-old G***P*** at *** weeks by LMP with vaginal bleeding {and pelvic pain}.
Ectopic pregnancy considered. Hemodynamics ***. Quantitative hCG ***. Rh type ***. Hgb ***.
Pelvic ultrasound: {IUP with cardiac activity / no definitive IUP, pregnancy of unknown location / ectopic ***}. {Bedside FAST: no free fluid.}
Rh(D) immune globulin: {not indicated (Rh positive) / <12 weeks with pregnancy loss: routine RhIG not recommended (ACOG 2024); shared decision-making: *** / ectopic or ≥12 weeks or trauma: RhIG *** given}.
Assessment: {threatened abortion / PUL / ***}. OB/GYN (Dr. ***) {consulted / follow-up arranged}. Repeat hCG in 48 hours. Ectopic return precautions reviewed.`],
  ["ectopicdc", "Discharge", "Early pregnancy bleeding, discharge", "pregnancy of unknown location discharge|threatened abortion|vaginal bleeding pregnancy|ectopic precautions|first trimester bleeding", ["O20.0"],
`You had bleeding early in pregnancy. We could not yet tell for sure where the pregnancy is or how it will turn out. This is common in early pregnancy.

- Get a repeat blood pregnancy test (hCG) in 48 hours: ***.
- Follow up with *** (OB/GYN).
- Avoid heavy lifting. ***

Return right away or call 911 for severe belly or pelvic pain, pain in your shoulder, dizziness or fainting, or soaking more than 2 pads an hour for 2 hours.`],
  ["pidmdm", "MDM", "Pelvic pain / PID", "pid|pelvic inflammatory disease|n73.9|pelvic pain|r10.20|pelvic pain|cervicitis|toa|tubo ovarian abscess|ovarian torsion|n83.5|ovarian cyst", ["N73.9", "R10.20"],
`MDM: ***-year-old with lower abdominal/pelvic pain for ***. hCG ***.
Considered ectopic pregnancy, ovarian torsion, ruptured/hemorrhagic cyst, TOA, PID, appendicitis, nephrolithiasis, UTI and endometriosis. {Not pursued further: *** because ***.}
Pelvic exam: {cervical motion tenderness ***, adnexal tenderness ***, discharge ***}. GC/CT and trichomonas sent. {Pelvic US with Doppler: ***}.
Assessment: ***. Treatment: {PID: ceftriaxone 500 mg IM, doxycycline 100 mg BID ×14 days, metronidazole 500 mg BID ×14 days / ***}. Partner treatment and abstinence counseling given.`],
  ["preeclampsia", "MDM", "Hypertension in pregnancy / preeclampsia", "preeclampsia|o14.90|eclampsia|o15.9|gestational hypertension|o13|postpartum hypertension|hellp|pregnancy blood pressure", ["O14.90", "O15.9", "O13.9"],
`MDM: ***-year-old G***P*** at *** weeks {/ *** days postpartum} with BP *** (repeat ***).
Severe features screened: headache ***, visual changes ***, RUQ/epigastric pain ***, dyspnea ***.
Labs: platelets ***, creatinine ***, AST/ALT ***, urine protein/creatinine ***.
Treatment: {labetalol/hydralazine/nifedipine *** for severe-range BP (≥160/110)}, {magnesium sulfate 4–6 g IV load then 1–2 g/h}.
OB (Dr. ***) consulted at ***. Disposition: ***.`],
  ["hyperem", "MDM", "Nausea and vomiting of pregnancy", "hyperemesis|hyperemesis gravidarum|o21.0|o21.1|nausea in pregnancy|morning sickness|vomiting pregnancy", ["O21.0", "O21.1"],
`MDM: ***-year-old at *** weeks with nausea and vomiting of pregnancy. {Intrauterine pregnancy confirmed on ***.}
Considered molar pregnancy, UTI/pyelonephritis, appendicitis, biliary disease, pancreatitis, hyperthyroidism and DKA. {Not pursued further: *** because ***.}
Labs: ***; urine ketones ***.
Treatment: IV fluids; {thiamine *** before any dextrose-containing fluid}; {ondansetron/metoclopramide/promethazine ***}. Tolerated PO.
Discharge with {doxylamine-pyridoxine and ***}, small frequent meals, OB follow-up.`],
]);
