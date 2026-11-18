# Clinical review, November 2026

Three AI reviewers each read the full phrase database, calculators and app privacy design from a different angle. **They are AI models asked to review from these perspectives, not licensed physicians.** Their findings were checked and applied below, but no phrase is marked "reviewed" until a named human clinician signs off in `data/reviews.js`.

| Reviewer | Perspective |
|---|---|
| A | Community ED attending and EMS medical director on a group documentation and coding committee: 2023 E/M MDM, critical care, SEP-1, medicolegal risk |
| B | Academic EM attending with EMS fellowship, residency core faculty: clinical accuracy, current guidelines, doses, calculators |
| C | Pediatric EM physician, EMS oversight, patient safety and QI lead: peds content, discharge readability and Spanish, privacy, phone usability |

## Fixed in this release

**Documentation and compliance (A)**
- Negative findings no longer hard-coded. Back pain red flags and strength, laceration exploration, syncope, UTI, kidney stone, gastroenteritis, head injury GCS, C-spine clearance, MVC, splint, ultrasound IV and central line "no complications" are now `{none / ***}` choices or blanks.
- Critical care: removed bare "Critical care time *** minutes" lines from STEMI, hypertensive emergency, stroke, ICH, sepsis and DKA. Critical care is now only in `.critcare`, which adds non-overlap with other providers and the CMS condition for counting family discussion. Removed `.critcare` from the sepsis and stroke full-note sets.
- Sepsis (SEP-1): organ dysfunction line, cultures `{before / after antibiotics because ***}`, repeat lactate required when initial >2, septic shock trigger and fluid completion time.
- Chest pain: "acute MI excluded by serial hs-troponin; unstable angina not fully excluded" replaces "ACS ruled out".
- AMA: removed Z53.21 and "eloped" (LWBS code). Added hold check, people present, interpreter. New `.lwbs` template.
- Attestation split: `.attest` (teaching physician/resident) and `.attestapp` (CMS 2024 split/shared: more than half of time or substantive MDM; modifier FS).
- `.interpreter` wording fixed. `.mdmdata` adds a problems line and the high-risk management items; ECG line notes "not separately billed". `.dispo` stability is a choice; patient or caregiver.
- New: informed refusal, capacity assessment, sign-out/ED course, EMTALA transfer certification, synchronized cardioversion, arthrocentesis, fascia iliaca block, massive transfusion/hemorrhagic shock.

**Clinical accuracy (B)**
- DKA: insulin held until K ≥3.5 and 2024 consensus definition (ADA/EASD/JBDS/AACE/DTS).
- ICH: SBP target 140 (avoid <130) per 2022 AHA/ASA; no prophylactic antiseizure medication for spontaneous ICH, separate option for traumatic hemorrhage.
- Anticoagulant reversal tied to the drug (warfarin PCC + vitamin K; factor Xa inhibitors PCC 50 units/kg or andexanet if available; dabigatran idarucizumab).
- AOM: AAP 2013 observation criteria by age, durations by age, amoxicillin-clavulanate option.
- HINTS, Ottawa SAH and Canadian CT Head now state their validated populations; head injury has a "rules not applicable (anticoagulated, <16, seizure)" branch.
- Rabies PEP spelled out (HRIG 20 IU/kg, vaccine days 0, 3, 7, 14 ± 28; 10-day observation for dogs, cats, ferrets only). Tetanus includes TIG for tetanus-prone wounds with <3 or unknown doses.
- PERC removed from the default chest-pain set (valid only with low gestalt pretest probability).
- Stroke tenecteplase 0.25 mg/kg (max 25 mg) and BP limits; TIA dual antiplatelet option; hyperkalemia doses; AFib pre-excitation and HFrEF cautions; CAP regimens (ATS/IDSA 2019); asthma discharge with ICS controller (GINA); chest pain discharge softened on stress testing (2021 AHA/ACC); thiamine before dextrose; "excited delirium" removed from search terms; restraint 1-hour face-to-face (CMS); exact Ottawa ankle sites; STEMI P2Y12 and posterior/right-sided leads; NEXUS band wording.
- New: pericarditis/myocarditis, neutropenic fever, cauda equina/spinal epidural abscess.

**Pediatrics, safety and privacy (C)**
- PECARN rebuilt: separate interactive calculators for age <2 and ≥2 with high vs intermediate tiers and correct very-low-risk figures (<0.02% and <0.05%); exclusions listed. The summary phrase uses blanks per predictor instead of one tap attesting to five negatives.
- New pediatric head-injury full note and pediatric disposition (`.pedsdispo`); pediatric fever note uses it.
- Antipyretic discharge instructions state mg, mL and concentration (infant vs children's ibuprofen), syringe use, and "under 2 months with 100.4°F, come back now".
- Spanish fixes: "se corre o se extiende al brazo", "su hijo o hija está muy enfermo", Pedialyte, "popó". Every Spanish card now shows an interpreter-review warning.
- Croup low-dose dexamethasone option and observation per local policy; nursemaid's elbow no longer lists "fall" as routine; SCFE adds Lyme arthritis, hip exam for knee pain and maltreatment; maltreatment note adds verbatim history, skeletal survey, labs, siblings and "reasonable suspicion"; febrile infant adds AAP entry criteria and a 0–7 day / ill-appearing branch.
- Privacy: missed-search reporting is now a manual button that shows the exact words before sending (no automatic sending). Typed blanks clear when the app goes to the background; keyboard autocorrect is off in blanks. Shared submissions are blocked if they look like they contain dates, long numbers, MRN/DOB or names. Clipboard warning added.

## Still open (recommended next)

1. **Named human review.** Have at least one ED attending (and a pediatric EM physician for pediatric phrases) review and sign off; record each in `data/reviews.js`. A certified medical interpreter should review the Spanish text.
2. **More calculators:** Wells DVT, ADD-RS, sPESI, Canadian Syncope Risk Score, Canadian C-Spine, PECARN febrile infant, Ottawa ankle, Glasgow-Blatchford, CIWA-Ar, Kocher, Westley, hs-troponin 0/1–2 h pathway.
3. **More impressions:** trauma in pregnancy, ruptured AAA, mesenteric ischemia, necrotizing fasciitis, hyponatremia/hypercalcemia, adrenal crisis, thyroid storm, CO poisoning, salicylate/TCA/beta-blocker/CCB/digoxin toxicity, serotonin syndrome, precipitous delivery and postpartum hemorrhage, sexual assault (with HIV PEP), pediatric DKA, BRUE, intussusception, pediatric asthma, dehydration, button battery/magnet ingestion, hip fracture in older adults, doxy-PEP counseling, chest tube, paracentesis, transcutaneous pacing, nail trephination, trauma activation note, scribe attestation.
4. **Pediatric discharge instructions** (English and Spanish) for bronchiolitis, croup, AOM, nursemaid's elbow, pediatric head injury, pediatric vomiting with ORS volumes; a weight-based dosing helper with lb/kg guard.
5. **"Considered …" lists:** consider a "Considered ***; not pursued because ***" pattern and trimming default differentials to reduce exposure when an item isn't worked up.
6. **Shared library:** rate-limit anonymous inserts (Supabase), and add a simple owner review screen.
7. **Phone use:** sticky Copy/Clear bar, 44 px tap targets throughout, "next blank" button.
8. Verify locally: andexanet availability; ACOG 2024 RhIG guidance for early pregnancy loss and ectopic; current SEP-1 specifications for reduced fluid volume; whether a newer AHA/ASA acute ischemic stroke guideline supersedes 2019; state PDMP rules.
