// PSYCHIATRY, PEDIATRICS, SKIN / HEENT / EYE

add("Psych", [
  ["*medclear", "MDM", "Medical clearance for psychiatry", "medical clearance|medically cleared|medically clear for psych|psych clearance|psychiatric evaluation|si|suicidal ideation|r45.851|depression|f32.a|psychosis|f29|agitation|r45.1", ["R45.851", "F32.A", "F29"],
`MDM: ***-year-old presenting with *** ({suicidal ideation / psychosis / agitation / ***}).
Evaluated for medical causes of psychiatric symptoms: vital signs ***, exam ***, glucose ***. Considered intoxication/withdrawal, infection, metabolic derangement, thyroid disease, intracranial process, delirium and medication toxicity.
Testing: {*** / no routine labs indicated; history, exam and vitals do not suggest a medical cause}.
Ingestion screened: {denies; acetaminophen/salicylate ***}.
The patient is medically stable for psychiatric evaluation and disposition. {This does not exclude conditions that may develop later; reevaluate for any change.}
Safety: {1:1 observation / belongings secured / ***}. Psychiatry consulted at ***.`],
  ["simdm", "MDM", "Suicide risk assessment", "suicide risk|suicidal ideation|si|r45.851|columbia|c-ssrs|safety plan|self harm|suicide attempt|t14.91xa", ["R45.851", "T14.91XA"],
`Suicide risk assessment:
- Ideation: ***; plan: ***; intent: ***; prior attempts: ***.
- C-SSRS screen: ***.
- Risk factors: ***. Protective factors: ***.
- Access to lethal means (firearms, medications): ***; means counseling ***.
- Collateral from ***: ***.
Assessed risk: {low / moderate / high}. Plan: {psychiatry evaluation / involuntary petition ***/ safety plan completed with patient, 988 crisis line provided, outpatient follow-up ***}.`],
  ["agitation", "MDM", "Acute agitation / restraint", "agitation|r45.1|combative|violent|restraints|chemical sedation|behavioral emergency|excited delirium|hyperactive delirium", ["R45.1", "R41.0"],
`MDM: ***-year-old with acute agitation posing imminent danger to self/staff: ***. Verbal de-escalation attempted: ***.
{Medication: *** at *** (route ***). / Physical restraint: *** ordered at *** for *** — least restrictive option after de-escalation failed.}
Monitoring: continuous SpO₂ and cardiac monitoring after sedation; airway ***, vitals ***. Restraint reassessed per policy; removed at ***.
Medical causes considered: hypoglycemia, hypoxia, intoxication/withdrawal, head injury, infection, thyroid storm, hyperthermia.`],
  ["panic", "MDM", "Anxiety / panic attack", "anxiety|panic attack|f41.0|f41.9|panic disorder|anxious|hyperventilation", ["F41.0", "F41.9"],
`MDM: ***-year-old with episode of {palpitations/chest tightness/dyspnea/paresthesias} with anxiety, onset ***.
Considered ACS, arrhythmia, PE, thyrotoxicosis, hypoglycemia, substance use/withdrawal and asthma; ECG ***, ***.
Symptoms resolved with ***. Assessment: panic attack. Denies SI/HI.
Discharged with PCP/behavioral health follow-up, coping strategies and resources.`],
]);

add("Peds", [
  ["*pedsfever", "MDM", "Pediatric fever", "pediatric fever|peds fever|fever child|r50.9|febrile infant|fever without source|fussy|r50.9 child|fever in child", ["R50.9"],
`MDM: ***-{month/year}-old {fully/partially/not} immunized presenting with fever T max *** for ***.
Appearance: {well-appearing, interactive, consolable / ***}. Hydration ***.
Considered serious bacterial infection (UTI, pneumonia, bacteremia, meningitis), otitis media, pharyngitis, viral illness, {Kawasaki (fever ≥5 days: ***)}, and osteomyelitis/septic joint.
{Febrile infant 8–60 days: risk-stratified per AAP 2021 guideline: UA ***, procalcitonin ***, ANC ***, CRP ***, LP ***.}
Testing: ***. Source: ***.
Disposition: ***. Antipyretic dosing by weight (*** kg) and return precautions reviewed with caregiver.`],
  ["pedsfeverdc", "Discharge", "Pediatric fever, discharge", "fever discharge|pediatric fever|peds fever|child fever|viral illness child", ["R50.9"],
`Your child has a fever, most likely from a virus. Fever itself is not harmful; it is how the body fights infection.

- Acetaminophen: *** mL of *** every 4–6 hours as needed (max 5 doses in 24 hours).
- {Ibuprofen (6 months and older): *** mL of *** every 6–8 hours as needed.}
- Offer fluids often. Count wet diapers; expect at least one every 6–8 hours.
- See your pediatrician in *** days, or sooner if fever lasts more than 3 days.

Return now for trouble breathing, a stiff neck, a rash that does not fade when pressed, fewer wet diapers, unusual sleepiness or hard to wake, a seizure, or if your child seems very sick to you.`],
  ["bronchio", "MDM", "Bronchiolitis", "bronchiolitis|j21.9|j21.0|rsv|wheezing infant|viral bronchiolitis", ["J21.9", "J21.0"],
`MDM: ***-month-old with *** days of rhinorrhea, cough and increased work of breathing, consistent with viral bronchiolitis.
Risk factors (prematurity, age <12 weeks, chronic lung/heart disease, immunodeficiency): ***.
After nasal suctioning: RR ***, retractions ***, SpO₂ *** on room air, feeding ***.
Considered pneumonia, foreign body, heart failure and pertussis. Testing not routinely indicated.
Treatment: supportive (suctioning, hydration). Albuterol, steroids and antibiotics not indicated.
Disposition: {discharge; feeding well, SpO₂ ≥90–92% on room air, reliable caregiver / admit for ***}.`],
  ["croup", "MDM", "Croup", "croup|j05.0|barky cough|stridor|laryngotracheobronchitis|westley", ["J05.0"],
`MDM: ***-year-old with barky cough {and stridor} for ***. Westley score *** ({mild/moderate/severe}).
Considered epiglottitis, bacterial tracheitis, retropharyngeal abscess, foreign body and anaphylaxis: no drooling, toxicity or tripoding.
Treatment: dexamethasone 0.6 mg/kg (max 16 mg) PO, {racemic epinephrine *** at ***, observed 3–4 hours without recurrent stridor at rest}.
Disposition: ***.`],
  ["pedshead", "Score", "PECARN head injury", "pecarn|pediatric head injury|peds head trauma|child head injury|head injury child|s09.90xa", ["S09.90XA"],
`PECARN pediatric head injury (age {<2 / ≥2}):
- GCS 15 and normal mental status: ***
- {<2 y: no palpable skull fracture, non-frontal scalp hematoma, LOC ≥5 s, severe mechanism, or acting abnormally per parent / ≥2 y: no signs of basilar skull fracture, LOC, vomiting, severe mechanism, or severe headache}
Risk: {very low (<0.05% ciTBI): CT not indicated / intermediate: observation vs CT by shared decision-making / high: CT}.
Discussed with caregiver; {observed *** h}.`],
  ["aommdm", "MDM", "Acute otitis media", "otitis media|aom|h66.90|h66.91|ear infection|ear pain|h92.09|otalgia|otitis externa|h60.90", ["H66.90", "H92.09", "H60.90"],
`MDM: ***-year-old with ear pain {and fever} for ***. TM: {bulging, erythematous, decreased mobility / ***}.
Considered otitis externa, mastoiditis (no postauricular swelling or protrusion), foreign body, TMJ and referred pain.
Assessment: acute otitis media {right/left/bilateral}.
Plan: {amoxicillin 80–90 mg/kg/day divided BID ×*** days / watchful waiting with safety-net prescription (age ≥2, nonsevere, unilateral)} and analgesia. Follow up if not improving in 48–72 h.`],
  ["nat", "MDM", "Child maltreatment considered", "child abuse|nat|non accidental trauma|t74.12xa|t76.12xa|maltreatment|sentinel injury|t74.92xa", ["T76.12XA", "T74.12XA"],
`Child maltreatment considered given ***. History {consistent / inconsistent} with injury and developmental stage.
Screened for sentinel injuries (bruising in non-mobile infant, TEN-4-FACESp), oral injury, burns and fractures. ***
{Skeletal survey/labs ***.} Child protection team/social work contacted at ***. {Report filed with Child Protective Services at ***, ref # ***.}
Child's safety plan at discharge: ***.`],
]);

add("Skin, HEENT & Eye", [
  ["eyemdm", "MDM", "Red eye / eye pain", "red eye|eye pain|h57.10|conjunctivitis|h10.9|corneal abrasion|s05.00xa|pink eye|foreign body eye|t15.90xa|h57.13", ["H57.10", "H10.9", "S05.00XA"],
`MDM: ***-year-old with {right/left} eye {pain/redness/foreign body sensation} for ***. Contact lens use ***.
Visual acuity: OD ***, OS ***. Pupils ***. IOP ***. Fluorescein: ***. Lids everted: ***.
Considered acute angle-closure glaucoma, keratitis (including contact-lens related), iritis, scleritis, globe rupture, endophthalmitis, orbital cellulitis and HSV/zoster.
Assessment: {corneal abrasion / conjunctivitis / ***}. Treatment: ***. {Pseudomonas coverage for contact lens wearer.} Ophthalmology follow-up {in 24 h / ***}.`],
  ["epistaxis", "MDM", "Epistaxis", "epistaxis|nosebleed|nose bleed|r04.0|anterior epistaxis|posterior epistaxis|rhino rocket", ["R04.0"],
`MDM: ***-year-old with {right/left} epistaxis for ***. Anticoagulant/antiplatelet ***. BP ***.
Source: {anterior (Kiesselbach) / posterior / not identified}.
Treatment: {direct pressure 15 min, oxymetazoline / silver nitrate cautery / TXA-soaked pledget / *** cm anterior nasal tamponade / ***}. Hemostasis achieved; observed *** min with no rebleeding; oropharynx clear.
{Hgb ***.} ENT follow-up {in 48–72 h for packing removal}. {Antibiotics not routinely needed for anterior packing.}`],
  ["dentalmdm", "MDM", "Dental pain / abscess", "dental pain|toothache|k08.89|dental abscess|k04.7|tooth pain|dental caries|k02.9|ludwigs", ["K08.89", "K04.7"],
`MDM: ***-year-old with tooth pain at #*** for ***.
Considered Ludwig's angina, deep space neck infection, peritonsillar abscess and referred cardiac pain: no trismus, floor-of-mouth swelling, voice change, drooling or systemic toxicity.
Exam: ***.
Treatment: {dental block (see procedure note)}, analgesia (NSAID + acetaminophen), {antibiotic *** for facial swelling or abscess}. Dental referral within 48 h: ***.`],
  ["rashmdm", "MDM", "Rash", "rash|r21|dermatitis|l30.9|contact dermatitis|l25.9|shingles|herpes zoster|b02.9|hives|scabies|b86|poison ivy", ["R21", "L30.9", "B02.9"],
`MDM: ***-year-old with *** rash for ***. Distribution ***; morphology ***. Mucosal involvement ***. Fever ***.
Dangerous rashes considered: SJS/TEN (no mucosal involvement, skin pain or Nikolsky sign), meningococcemia, RMSF, TSS, DRESS, necrotizing infection and erythema multiforme major.
Assessment: ***. Treatment: ***. Return for blistering, mucosal sores, fever or spreading rash.`],
  ["vertigodc", "Discharge", "Dizziness / vertigo, discharge", "vertigo discharge|dizziness discharge|bppv|dizzy|vertigo", ["R42"],
`Your dizziness is most likely from the inner ear. It usually improves over days to weeks.

- Get up slowly. Sit on the edge of the bed before you stand.
- {Take *** as needed for spinning; it can make you sleepy.}
- {Do the home Epley exercises you were shown.}
- Do not drive while dizzy. See *** in 1 week.

Call 911 for new trouble speaking, face drooping, weakness or numbness, double vision, trouble walking, a severe headache, or fainting.`],
]);
