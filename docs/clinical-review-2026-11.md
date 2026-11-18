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

## Second release (Nov 18, 2026): open items completed

- **Verified against current sources:** andexanet withdrawn from the US market (Dec 2025), so 4F-PCC is the factor Xa inhibitor reversal; ACOG 2024 Rh(D) immune globulin guidance for pregnancy loss under 12 weeks; the 2026 AHA/ASA acute ischemic stroke guideline (tenecteplase or alteplase, BP targets); SEP-1 documentation of a lower fluid volume with a reason; Maryland PDMP query requirement.
- **12 new calculators:** Wells DVT, ADD-RS, sPESI, Canadian Syncope Risk Score, Canadian C-Spine Rule, PECARN febrile infant, Ottawa ankle/foot, Glasgow-Blatchford, CIWA-Ar, Kocher, Westley, Clinical Dehydration Scale; plus an hs-troponin 0/1–2 h pathway template (assay-specific cutoffs left to the local lab).
- **31 new templates:** salicylate, TCA, beta-blocker/CCB, digoxin, serotonin syndrome/NMS, carbon monoxide; hyponatremia, hypercalcemia, adrenal crisis, thyroid storm; ruptured AAA, mesenteric ischemia, necrotizing soft tissue infection; precipitous delivery, postpartum hemorrhage, trauma in pregnancy; pediatric DKA, BRUE, intussusception, pediatric asthma, pediatric dehydration, button battery/magnet ingestion; hip fracture, sexual assault (CDC 2021 prophylaxis, HIV nPEP); chest tube, paracentesis, transcutaneous pacing, nail trephination; trauma activation, scribe attestation, PDMP; doxy-PEP counseling (CDC 2024).
- **12 pediatric discharge instructions** in English and Spanish: bronchiolitis, croup, ear infection, nursemaid's elbow, pediatric head injury, vomiting/diarrhea with oral rehydration volumes.
- **Pediatric dosing helper:** weight in kg or lb with the conversion always shown and a warning for implausible weights; acetaminophen, ibuprofen (infant vs children's strength), dexamethasone, prednisolone, high-dose amoxicillin, ondansetron weight bands; maximum doses applied; copyable dose line.
- **"Not pursued because" option** added after the differential in 58 MDM templates.
- **Phone use:** sticky Copy filled text / Next blank bar, Enter jumps to the next empty blank, 44 px tap targets.
- **Shared library:** global insert caps (30 submissions and 300 search reports per hour); owner review screen at /review.html (passphrase checked server-side by a Supabase Edge Function; approve, reject, edit, and see top missed searches).

## Still open

1. **Named human review** by an ED attending, a pediatric EM physician for pediatric phrases, and a certified medical interpreter for Spanish text. Record each in `data/reviews.js`.
2. Re-run an independent review of the 60+ templates added in these two releases before wide use.
