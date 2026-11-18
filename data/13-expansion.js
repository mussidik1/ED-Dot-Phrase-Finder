// EXPANSION (Nov 2026): toxicology, endocrine, vascular, OB, pediatrics, trauma, procedures and documentation.

add("Tox & Environmental", [
  ["*salicylate", "MDM", "Salicylate toxicity", "salicylate|aspirin overdose|asa overdose|t39.012a|t39.011a|salicylism|tinnitus overdose", ["T39.012A", "T39.011A"],
`MDM: ***-year-old with {acute / chronic} salicylate ingestion (*** at ***). Tinnitus ***, vomiting ***, mental status ***.
Salicylate level *** mg/dL at *** (repeat every 2 h until peaked and falling). VBG pH ***, pCO₂ ***; bicarbonate ***; anion gap ***; potassium ***; glucose ***; acetaminophen ***.
Treatment: sodium bicarbonate {150 mEq in 1 L D5W at 1.5–2× maintenance / ***} targeting urine pH 7.5–8.0; potassium kept ≥4.0; dextrose for altered mental status. {Intubation avoided if possible; if required, ventilation matched to prior minute ventilation.}
Hemodialysis criteria (EXTRIP): level >100 mg/dL, >90 mg/dL with impaired kidney function, altered mental status, new hypoxemia requiring oxygen, or pH ≤7.20 despite treatment — {none met / met: nephrology contacted at ***}.
Poison Center (1-800-222-1222) case # ***. Disposition: ***.`],
  ["*tca", "MDM", "Tricyclic / sodium channel blocker toxicity", "tca overdose|tricyclic|amitriptyline overdose|t43.012a|t43.011a|sodium channel blocker|wide qrs overdose|qrs widening", ["T43.012A", "T43.011A"],
`MDM: ***-year-old with ingestion of *** at ***. Mental status ***; anticholinergic signs ***; seizures ***.
ECG: QRS *** ms, terminal R in aVR *** mm, QTc ***; rhythm ***.
Treatment: {sodium bicarbonate 1–2 mEq/kg IV boluses for QRS >100 ms, repeated to QRS narrowing, then infusion; serum pH kept 7.45–7.55 / ***}. Seizures: benzodiazepines. Hypotension: fluids then norepinephrine. Avoided: physostigmine, flumazenil, class IA/IC antiarrhythmics.
Poison Center case # ***. Disposition: ICU / observation for at least 6 h with serial ECGs if asymptomatic.`],
  ["*bbccb", "MDM", "Beta-blocker / calcium channel blocker toxicity", "beta blocker overdose|calcium channel blocker overdose|ccb overdose|bb overdose|t44.7x2a|t46.1x2a|amlodipine overdose|metoprolol overdose|bradycardia overdose|hyperinsulinemia euglycemia", ["T44.7X2A", "T46.1X2A"],
`MDM: ***-year-old with ingestion of {*** (beta-blocker) / *** (calcium channel blocker)}, {immediate / extended-release}, at ***. HR ***, BP ***, glucose ***, mental status ***.
Treatment: IV fluids ***; atropine ***; {calcium gluconate 3 g IV (or calcium chloride 1 g), repeated *** / glucagon 5 mg IV for beta-blocker, then infusion ***}; high-dose insulin euglycemia therapy (regular insulin 1 unit/kg IV bolus then 1 unit/kg/h, titrated, with dextrose and potassium monitoring every 30–60 min) started at ***; vasopressors ***; {lipid emulsion / pacing / ECMO consulted: ***}.
{Whole bowel irrigation for extended-release ingestion: ***.} Poison Center case # ***. Disposition: ICU.`],
  ["*digoxin", "MDM", "Digoxin toxicity", "digoxin|digoxin toxicity|t46.0x1a|t46.0x4a|digifab|dig toxicity|digoxin level", ["T46.0X1A", "T46.0X4A"],
`MDM: ***-year-old with {acute ingestion / chronic} digoxin toxicity. Symptoms: {nausea, vomiting / visual changes / confusion / ***}.
Digoxin level *** ng/mL at *** (≥6 h after last dose is most reliable); potassium ***; creatinine ***; ECG: ***.
Digoxin immune Fab indications: life-threatening dysrhythmia, potassium >5.0 mEq/L in acute toxicity, level ≥10 ng/mL ≥6 h after acute ingestion or ≥15 ng/mL at any time, or chronic toxicity with significant symptoms — {met: Fab *** vials given at *** / not met}.
Hyperkalemia managed with insulin/dextrose and Fab; {calcium not withheld for life-threatening hyperkalemia}. Disposition: ***.`],
  ["*serotonin", "MDM", "Serotonin syndrome / NMS", "serotonin syndrome|g25.79|t43.212a|neuroleptic malignant syndrome|nms|g21.0|clonus|hyperthermia drug", ["G25.79", "G21.0"],
`MDM: ***-year-old on *** with {agitation / tremor / diaphoresis / hyperthermia} after ***.
Hunter criteria: {spontaneous clonus / inducible clonus with agitation or diaphoresis / ocular clonus with agitation or diaphoresis / tremor and hyperreflexia / hypertonia, T >38 °C and ocular or inducible clonus} — ***.
Considered NMS (slower onset, bradyreflexia, lead-pipe rigidity, dopamine antagonist), anticholinergic toxicity, malignant hyperthermia, sympathomimetic toxicity, sepsis, thyroid storm and withdrawal. {Not pursued further: *** because ***.}
Temp ***, CK ***, creatinine ***. Treatment: stopped serotonergic agents; benzodiazepines; cyproheptadine 12 mg PO then 2 mg every 2 h as needed; active cooling. {Severe hyperthermia: sedation, paralysis with a non-depolarizing agent and intubation; antipyretics are not effective.}
Disposition: ***.`],
  ["*comdm", "MDM", "Carbon monoxide poisoning", "carbon monoxide|co poisoning|t58.91xa|t58.01xa|cohb|carboxyhemoglobin|smoke inhalation|hyperbaric|hbo", ["T58.91XA", "T58.01XA"],
`MDM: ***-year-old exposed to carbon monoxide from *** for ***. Others affected ***. Symptoms: {headache / nausea / dizziness / syncope / confusion / chest pain}.
COHb *** % at *** (on {room air / O₂ since ***}); SpO₂ is unreliable. ECG ***; troponin ***; lactate ***; {hCG ***}.
{Fire/smoke: cyanide considered (lactate ≥8, hypotension, altered mental status): hydroxocobalamin 5 g IV ***.}
Treatment: 100% oxygen by non-rebreather started at ***.
Hyperbaric oxygen considered for loss of consciousness, neurologic deficits or confusion, COHb >25% (>15–20% in pregnancy), cardiac ischemia or severe acidosis: {criteria met; hyperbaric center (***) contacted at *** / not met}.
Disposition: ***. Exposure source reported to fire department/utility: ***.`],
]);

add("Endo & Heme", [
  ["*hypona", "MDM", "Hyponatremia", "hyponatremia|e87.1|low sodium|siadh|beer potomania|hypotonic hyponatremia", ["E87.1"],
`MDM: ***-year-old with sodium *** (prior ***). Onset {acute <48 h / chronic or unknown}. Symptoms: {severe: seizure, obtundation, vomiting / moderate: confusion, nausea / mild / none}.
Volume status ***. Serum osmolality ***, urine osmolality ***, urine sodium ***; glucose ***. Likely cause: ***.
{Severe symptoms: 3% saline 100–150 mL IV over 10–20 min, repeated up to 3 times to raise sodium 4–6 mEq/L / no hypertonic saline needed}.
Correction limit: ≤8 mEq/L in 24 h (high-risk for osmotic demyelination: alcohol use disorder, malnutrition, hypokalemia, liver disease, sodium ≤105). Sodium rechecked every *** h.
Disposition: ***.`],
  ["*hyperca", "MDM", "Hypercalcemia", "hypercalcemia|e83.52|high calcium|hypercalcemia of malignancy|hyperparathyroidism", ["E83.52"],
`MDM: ***-year-old with calcium *** (corrected/ionized ***). Symptoms: ***. Known malignancy ***; calcium or vitamin D supplements ***; thiazide/lithium ***.
ECG ***; creatinine ***; PTH and PTHrP sent ***.
Treatment: IV normal saline *** (to urine output ~100–150 mL/h, as tolerated); {calcitonin 4 units/kg SC/IM / zoledronic acid 4 mg IV over 15 min (renal dosing as needed)}; loop diuretic only after volume repletion; {dialysis for severe hypercalcemia with kidney failure}.
Disposition: ***.`],
  ["*adrenal", "MDM", "Adrenal crisis", "adrenal crisis|e27.2|adrenal insufficiency|addisonian crisis|steroid dependent hypotension|stress dose steroids", ["E27.2"],
`MDM: ***-year-old with {known adrenal insufficiency / chronic steroid use / ***} and {hypotension / vomiting / abdominal pain / altered mental status}. Precipitant ***.
Sodium ***, potassium ***, glucose ***. {Random cortisol drawn before steroids if it does not delay treatment.}
Treatment: hydrocortisone 100 mg IV at ***, then 200 mg/24 h (infusion or 50 mg every 6 h); IV crystalloid with dextrose as needed ***.
Disposition: ***.`],
  ["*thyroidstorm", "MDM", "Thyroid storm", "thyroid storm|e05.91|thyrotoxicosis|thyrotoxic crisis|hyperthyroidism|burch wartofsky", ["E05.91"],
`MDM: ***-year-old with {known / suspected} hyperthyroidism, temp ***, HR ***, mental status ***, precipitant ***.
Burch-Wartofsky score *** ({≥45 suggests storm / 25–44 impending}). TSH ***, free T4 ***.
Treatment, in order: {propranolol 60–80 mg PO every 4 h or esmolol infusion} (caution in decompensated heart failure); {PTU 200 mg every 4 h / methimazole 20 mg every 4–6 h}; iodine (SSKI) at least 1 h after the thionamide; hydrocortisone 100 mg IV every 8 h; cooling with acetaminophen (avoid aspirin).
Endocrinology (Dr. ***) contacted. Disposition: ICU.`],
]);

add("Cardiac", [
  ["*aaa", "MDM", "Ruptured / symptomatic AAA", "aaa|abdominal aortic aneurysm|ruptured aaa|i71.3|i71.4|i71.30|aortic aneurysm rupture|pulsatile mass", ["I71.30", "I71.40"],
`MDM: ***-year-old with {abdominal / back / flank} pain and {hypotension / syncope / pulsatile mass}. Known aneurysm ***.
Bedside ultrasound: aorta *** cm (>3 cm is aneurysmal); free fluid ***. {CTA: ***.}
Ruptured AAA {suspected / confirmed}: vascular surgery (Dr. ***) called at ***. Permissive hypotension (SBP ~70–90 if mentating); type and cross; massive transfusion protocol ***; two large-bore IVs; no delay to OR for imaging if unstable.
Disposition: OR / transfer to vascular center at ***.`],
]);

add("GI", [
  ["*mesenteric", "MDM", "Mesenteric ischemia", "mesenteric ischemia|k55.069|k55.0|bowel ischemia|ischemic bowel|pain out of proportion|acute mesenteric ischemia", ["K55.069"],
`MDM: ***-year-old with {sudden / gradual} severe abdominal pain out of proportion to exam. Risk factors: {atrial fibrillation / recent MI / vascular disease / hypercoagulable state / low-flow state / ***}.
Lactate *** (a normal lactate does not exclude ischemia). CTA abdomen/pelvis: ***.
Treatment: IV fluids, broad-spectrum antibiotics ***, heparin infusion ***, NPO. Surgery (Dr. ***) and {IR / vascular} consulted at ***.
Disposition: ***.`],
]);

add("ID & Sepsis", [
  ["*necfasc", "MDM", "Necrotizing soft tissue infection", "necrotizing fasciitis|nsti|m72.6|fournier|n49.3|flesh eating|gas gangrene|lrinec", ["M72.6", "N49.3"],
`MDM: ***-year-old with *** infection and {pain out of proportion / rapid spread / bullae / crepitus / skin necrosis / systemic toxicity / anesthesia of skin}.
Labs: WBC ***, sodium ***, glucose ***, creatinine ***, CRP ***, lactate ***. (LRINEC is not used to exclude necrotizing infection.) Imaging: {gas on CT *** / imaging not allowed to delay surgery}.
Treatment: vancomycin ***, piperacillin-tazobactam ***, clindamycin *** (toxin suppression); fluids; source control.
Surgery (Dr. ***) consulted emergently at ***. Disposition: OR.`],
  ["*doxypep", "Note", "Doxycycline PEP counseling (STI prevention)", "doxy pep|doxypep|doxycycline pep|sti prevention|bacterial sti prophylaxis|z20.2", ["Z20.2"],
`STI prevention: discussed doxycycline post-exposure prophylaxis (CDC 2024) — doxycycline 200 mg once, within 72 h (ideally 24 h) after condomless oral, anal or vaginal sex, maximum one dose per 24 h. Recommended for MSM and transgender women with a bacterial STI in the past 12 months; other patients by shared decision-making.
Counseled on photosensitivity, GI upset, taking with water and upright, and continued STI/HIV testing every 3–6 months. {Prescribed *** tablets / declined.} HIV PrEP: ***.`],
]);

add("OB/GYN", [
  ["*delivery", "Procedure", "Precipitous delivery", "precipitous delivery|ed delivery|emergency delivery|o80|z37.0|vaginal delivery ed|birth in ed|imminent delivery", ["O80", "Z37.0"],
`Procedure: precipitous vaginal delivery in the ED
G***P*** at *** weeks {by dates / unknown}. Prenatal care ***. Membranes ruptured at ***; fluid {clear / meconium-stained}. OB and NICU/pediatrics called at ***.
Delivered a live {male/female} infant at *** in {vertex / ***} presentation. {Nuchal cord reduced.} {Shoulder dystocia: McRoberts and suprapubic pressure, *** s.} Cord clamped {after *** s delayed clamping} and cut.
Infant: APGAR *** at 1 min and *** at 5 min; dried, warmed, {skin-to-skin / to warmer}; {resuscitation ***}.
Placenta delivered {intact / ***} at ***. Oxytocin *** units {IM / IV} given. Estimated blood loss *** mL. Perineal laceration {none / degree ***}. Fundus firm.
Mother and infant to *** in stable condition.`],
  ["*pph", "MDM", "Postpartum hemorrhage", "postpartum hemorrhage|pph|o72.1|o72.0|uterine atony|bleeding after delivery|postpartum bleeding", ["O72.1", "O72.0"],
`MDM: ***-day postpartum {vaginal / cesarean} delivery with bleeding, estimated *** mL. HR ***, BP ***, shock index ***.
Causes (4 T's): tone ***, trauma ***, tissue ***, thrombin ***.
Treatment: bimanual uterine massage; oxytocin *** units {IV infusion / IM}; tranexamic acid 1 g IV over 10 min at *** (within 3 h of birth; may repeat once); {methylergonovine 0.2 mg IM (avoid with hypertension) / carboprost 250 mcg IM (avoid with asthma) / misoprostol 800–1000 mcg PR}; two large-bore IVs; type and cross; {massive transfusion protocol activated at ***}.
OB (Dr. ***) at bedside at ***. Disposition: ***.`],
  ["*traumapreg", "MDM", "Trauma in pregnancy", "trauma in pregnancy|pregnant trauma|o9a.212|pregnant mvc|pregnant fall|abdominal trauma pregnancy|o9a.219", ["O9A.212", "O9A.213", "O9A.219"],
`MDM: ***-year-old G***P*** at *** weeks with {MVC / fall / assault / ***} at ***. Abdominal pain ***, vaginal bleeding ***, fluid leak ***, contractions ***, fetal movement ***.
Maternal resuscitation first. Left uterine displacement (fundus at or above umbilicus, ≥20 weeks). Fetal heart rate ***.
Imaging not withheld when indicated: ***. Labs: CBC, type and screen, {Kleihauer-Betke ***}, coags ***.
Rh(D) immune globulin {300 mcg IM given (Rh negative) / not indicated (Rh positive)}.
{≥20–24 weeks: continuous fetal and contraction monitoring on L&D for at least 4–6 h; OB (Dr. ***) consulted.} Intimate partner violence screened ***.
Disposition: ***.`],
]);

add("Peds", [
  ["*pedsdka", "MDM", "Pediatric DKA", "pediatric dka|peds dka|dka child|e10.10 child|diabetic ketoacidosis child|new onset diabetes child", ["E10.10"],
`MDM: ***-year-old ({new-onset / known} type 1 diabetes), weight *** kg, with glucose ***, pH ***, bicarbonate ***, beta-hydroxybutyrate ***; {mild / moderate / severe} DKA.
Mental status / GCS ***; cerebral edema warning signs (headache, bradycardia, rising BP, declining mental status, incontinence): {none / ***}.
Treatment: {10–20 mL/kg isotonic fluid bolus} then replacement per protocol; regular insulin 0.05–0.1 units/kg/h IV, no bolus, started after initial fluids at ***; potassium added once K <5.5 and urinating; dextrose added at glucose ~250–300. Hourly glucose and neuro checks.
{Cerebral edema: mannitol 0.5–1 g/kg or 3% saline 2.5–5 mL/kg, HOB 30°.} Pediatric endocrinology/PICU contacted ***. Disposition: ***.`],
  ["*brue", "MDM", "BRUE (brief resolved unexplained event)", "brue|alte|brief resolved unexplained event|r68.13|infant stopped breathing|turned blue infant|apparent life threatening event", ["R68.13"],
`MDM: ***-day/month-old with a brief (<1 min), resolved event of {cyanosis or pallor / absent, decreased or irregular breathing / marked tone change / altered responsiveness}, now well-appearing with normal vitals and exam.
Explained causes considered and not found: GER/choking with feeds, infection, seizure, cardiac arrhythmia, nonaccidental trauma (no bruising, normal fontanelle), ingestion. ***
AAP 2016 lower-risk criteria: age >60 days ***; born ≥32 weeks and corrected age ≥45 weeks ***; first event ***; duration <1 min ***; no CPR by trained provider ***; no concerning history or exam ***.
{Lower risk: caregiver education, CPR training resources, brief observation with pulse oximetry, ECG ***, pertussis testing ***, pediatrician follow-up in 24 h / Higher risk: ***}.
Disposition: ***.`],
  ["*intuss", "MDM", "Intussusception", "intussusception|k56.1|currant jelly stool|colicky abdominal pain child|target sign|episodic crying abdominal", ["K56.1"],
`MDM: ***-month-old with episodic abdominal pain/crying ***, vomiting ***, lethargy ***, bloody stool ***.
Exam: ***. Signs of perforation or peritonitis: {none / ***}.
Ultrasound: {target sign in *** / negative}. Labs as indicated ***.
{Air or contrast enema reduction by radiology at ***: *** (successful or unsuccessful); pediatric surgery (Dr. ***) aware before reduction. / Perforation, peritonitis or shock: surgery.}
Post-reduction observation for recurrence; disposition ***.`],
  ["*pedsasthma", "MDM", "Pediatric asthma exacerbation", "pediatric asthma|peds asthma|asthma child|wheezing child|j45.901 child|pram|status asthmaticus child", ["J45.901"],
`MDM: ***-year-old with asthma (prior ICU ***, intubation ***), weight *** kg, with {mild / moderate / severe} exacerbation. Trigger ***.
SpO₂ ***, RR ***, work of breathing ***, speech ***; {PRAM / PASS} score *** → *** after treatment.
Considered foreign body, pneumonia, anaphylaxis, bronchiolitis (age), and croup. {Not pursued further: *** because ***.}
Treatment: albuterol {*** mg nebulized / *** puffs MDI with spacer} {with ipratropium} ×***; dexamethasone 0.6 mg/kg (max 16 mg) PO {×1 / second dose tomorrow}; {magnesium sulfate 50 mg/kg IV (max 2 g) for severe / ***}.
Disposition: {discharge with spacer teaching, asthma action plan, controller review and PCP follow-up / admit ***}.`],
  ["*pedsdehyd", "MDM", "Pediatric dehydration / vomiting", "pediatric dehydration|dehydration child|e86.0|vomiting child|peds vomiting|oral rehydration|ors|pedialyte", ["E86.0", "R11.10"],
`MDM: ***-year-old, weight *** kg, with *** days of {vomiting / diarrhea}. Urine output ***. Clinical Dehydration Scale *** ({none / some / moderate to severe}).
Considered appendicitis, intussusception, obstruction/volvulus (bilious emesis ***), DKA (glucose ***), UTI, increased ICP, and toxic ingestion. {Not pursued further: *** because ***.}
Treatment: ondansetron *** mg (weight-based) PO/ODT; oral rehydration challenge {50 mL/kg over 4 h for some dehydration / ***} — {tolerated / failed: IV fluids 20 mL/kg ***}.
Disposition: ***. Caregiver taught small frequent ORS volumes and return precautions.`],
  ["*batterymagnet", "MDM", "Button battery / magnet ingestion", "button battery|battery ingestion|magnet ingestion|t18.9xxa|foreign body ingestion|swallowed battery|swallowed magnet|coin ingestion|t18.108a", ["T18.9XXA", "T18.108A"],
`MDM: ***-year-old with {witnessed / suspected} ingestion of {button battery (*** mm) / *** magnet(s) / coin} at ***.
Symptoms: {drooling / dysphagia / chest pain / vomiting / hematemesis / respiratory symptoms / none}.
X-ray neck/chest/abdomen (AP and lateral): ***. {Double-ring/halo or step-off on lateral suggests battery.}
{Esophageal battery: emergent endoscopic removal (goal <2 h); GI/surgery (Dr. ***) contacted at ***. Honey 10 mL every 10 min up to 6 doses given (age ≥1 y, ingestion <12 h, no perforation signs), not delaying removal.} {Multiple magnets or magnet + metal: GI consulted for removal.} {Single small coin past the esophagus, asymptomatic: outpatient follow-up.}
National Battery Ingestion Hotline (800-498-8666) / Poison Center: ***. Disposition: ***.`],
]);

add("Trauma & MSK", [
  ["*hipfx", "MDM", "Hip fracture in an older adult", "hip fracture|s72.009a|s72.001a|femoral neck fracture|intertrochanteric fracture|s72.143a|fall hip pain|geriatric hip fracture", ["S72.009A", "S72.143A"],
`MDM: ***-year-old with {right/left} hip pain and inability to bear weight after {ground-level fall / ***}. Why they fell: {mechanical / syncope / weakness / unknown} — evaluated: ***.
X-ray: ***. {CT/MRI for occult fracture: ***.}
Associated injuries screened (head, C-spine, wrist, ribs): ***. Anticoagulants ***.
Labs: CBC, BMP, type and screen, coags; ECG ***; CK if prolonged downtime ***.
Analgesia: {fascia iliaca block (see procedure note) / ***}, opioid-sparing; delirium prevention (glasses/hearing aids, family, avoid benzodiazepines/anticholinergics).
Orthopedics (Dr. ***) consulted; surgery goal within 24–48 h. Disposition: ***.`],
  ["*saexam", "MDM", "Sexual assault evaluation", "sexual assault|rape|t74.21xa|t76.21xa|sane|forensic exam|sexual assault exam|nonconsensual|hiv pep|npep", ["T74.21XA", "T76.21XA"],
`MDM: ***-year-old presenting after sexual assault at ***. Patient-centered, trauma-informed care; patient chose who is present.
Medical screening exam and injuries: ***. Strangulation screened ***.
Forensic exam: {SANE/FNE (***) contacted at *** / patient declined}; evidence collection {within 120 h of assault / declined}; law enforcement reporting {patient's choice: *** / mandatory: ***}.
Prophylaxis offered (CDC 2021): ceftriaxone 500 mg IM, doxycycline 100 mg BID ×7 days, {metronidazole 500 mg BID ×7 days}; {emergency contraception: ulipristal 30 mg (≤120 h) / levonorgestrel 1.5 mg (≤72 h) / declined}; HIV nPEP {started within 72 h: *** ×28 days, baseline HIV/creatinine/hepatitis tests / not indicated / declined}; hepatitis B vaccine ***; tetanus ***.
Safety planning and advocacy (rape crisis center ***) provided. Follow-up: ***.`],
]);

add("Procedures", [
  ["*chesttube", "Procedure", "Tube thoracostomy (chest tube)", "chest tube|tube thoracostomy|thoracostomy|pigtail|hemothorax|pneumothorax drainage|finger thoracostomy", [],
`Procedure: tube thoracostomy, {right/left}
Indication: {pneumothorax / hemothorax / effusion / ***}. Consent: {written / emergent}. Time-out performed.
Site: {4th–5th intercostal space, anterior to mid-axillary line (safe triangle) / ***}. Sterile prep and drape; anesthesia *** mL 1% lidocaine.
{Blunt dissection over the rib, pleura entered, finger sweep confirmed pleural space / Seldinger technique}; *** Fr tube placed to *** cm, secured and connected to {water seal / −20 cm H₂O suction}.
Return: *** mL {air / blood / fluid}. {Hemothorax: initial >1500 mL or >200 mL/h — surgery notified.}
Post-procedure CXR: ***. Complications: {none / ***}.`],
  ["*paracentesis", "Procedure", "Paracentesis", "paracentesis|abdominal tap|ascites tap|sbp tap|diagnostic paracentesis|therapeutic paracentesis|ascites", ["R18.8"],
`Procedure: {diagnostic / therapeutic} paracentesis
Indication: ***. Consent: {written/verbal}. Time-out performed. INR/platelets reviewed (routine correction not needed).
Ultrasound-guided site: {left / right} lower quadrant, lateral to the rectus sheath, avoiding vessels. Sterile prep; anesthesia *** mL 1% lidocaine; Z-track technique.
Removed *** mL {clear / cloudy / bloody} fluid; sent for cell count, albumin, total protein, Gram stain and culture (bedside blood culture bottles).
{Albumin 6–8 g per liter removed for large-volume (>5 L) paracentesis.} Complications: {none / ***}.`],
  ["*pacing", "Procedure", "Transcutaneous pacing", "transcutaneous pacing|tcp|external pacing|pacing|symptomatic bradycardia|complete heart block|high grade av block", [],
`Procedure: transcutaneous pacing
Indication: {unstable bradycardia / high-grade AV block / ***} not responsive to {atropine *** / ***}.
Pads {anterior-posterior}. Mode {demand}, rate *** bpm. Electrical capture at *** mA; mechanical capture confirmed by {femoral pulse / pulse oximetry waveform / bedside ultrasound} at *** mA; set at *** mA.
Analgesia/sedation: ***. {Transvenous pacing: cardiology (Dr. ***) contacted at ***.} Complications: {none / ***}.`],
  ["*trephination", "Procedure", "Subungual hematoma trephination", "subungual hematoma|nail trephination|trephination|s60.4|smashed finger|blood under nail|nail bed injury", ["S60.459A"],
`Procedure: nail trephination, {right/left} *** digit
Indication: painful subungual hematoma involving *** % of the nail. Nail plate and folds intact; {X-ray: ***}.
{Digital block with *** mL 1% lidocaine / no anesthesia needed.} Prep with ***. Trephination with {electrocautery / heated paperclip / 18 g needle}, *** hole(s); hematoma drained with immediate pain relief.
Dressing applied. Wound care and return precautions reviewed. Complications: {none / ***}.`],
]);

add("General", [
  ["*traumaact", "Note", "Trauma activation note", "trauma activation|trauma alert|level 1 trauma|trauma team|atls|primary survey|major trauma", [],
`Trauma activation: {level ***} at ***, criteria ***. Arrived by *** at ***. Pre-hospital: ***.
Primary survey — A: ***; B: ***; C: *** (HR ***, BP ***); D: GCS ***, pupils ***, moves extremities ***; E: ***.
Adjuncts: eFAST ***; CXR ***; pelvis X-ray ***; labs ***; {TXA *** / blood products ***}.
Secondary survey: ***. Imaging: ***.
Trauma surgery (Dr. ***) at bedside at ***. Disposition: ***.`],
  ["*scribe", "Note", "Scribe attestation", "scribe|scribe attestation|scribed|documentation assistant|medical scribe", [],
`Scribe statement: I, ***, am scribing for and in the presence of Dr. *** on ***.
Provider attestation: I, Dr. ***, personally performed the services described in this documentation, as scribed in my presence, and it is accurate and complete. I have reviewed and edited it as needed.`],
  ["*pdmp", "Note", "Controlled substance prescribing (PDMP)", "pdmp|crisp|prescription monitoring|controlled substance|opioid prescription|benzodiazepine prescription|narcotic prescription", [],
`Controlled substance: *** for *** days, quantity ***. PDMP reviewed via CRISP at *** (Maryland requires a query before initially prescribing an opioid or benzodiazepine, with listed exceptions): {no concerning findings / ***}.
Risks, safe storage and disposal, and no driving or alcohol discussed. {Naloxone prescribed / co-prescribed per risk}. Non-opioid alternatives: ***.`],
]);
