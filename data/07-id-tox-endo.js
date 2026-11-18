// INFECTION / SEPSIS, TOXICOLOGY AND ENVIRONMENTAL, ENDOCRINE AND HEMATOLOGY

add("ID & Sepsis", [
  ["*sepsismdm", "MDM", "Sepsis / septic shock", "sepsis|septic shock|a41.9|r65.21|r65.20|severe sepsis|sep-1|sirs|bacteremia|lactate", ["A41.9", "R65.20", "R65.21"],
`MDM: ***-year-old with suspected sepsis from {pulmonary/urinary/skin/intra-abdominal/unknown} source. Time zero ***.
Vitals: T ***, HR ***, BP ***, MAP ***, RR ***, SpO₂ ***. Lactate *** (repeat ***).
Blood cultures ×2 drawn at *** before antibiotics. Antibiotics *** started at ***.
{30 mL/kg crystalloid (*** mL, based on {actual/ideal} weight) given for hypotension or lactate ≥4 / reduced volume because ***}.
{Persistent hypotension: norepinephrine started at ***; septic shock.}
Source control: ***. Disposition: ***. Critical care time *** minutes.`],
  ["sepsisreassess", "Exam", "Sepsis reassessment (SEP-1)", "sepsis reassessment|sep-1|sep1|perfusion exam|septic shock reassessment|fluid reassessment", [],
`Sepsis reassessment at *** after initial fluid resuscitation: I reviewed vital signs and performed a focused exam. BP ***, HR ***, SpO₂ ***, capillary refill ***, peripheral pulses ***, skin ***, mental status ***, cardiopulmonary exam ***. {Repeat lactate ***.}`],
  ["*cellmdm", "MDM", "Cellulitis / abscess", "cellulitis|l03.90|l03.115|abscess|l02.91|skin infection|ssti|boil|mrsa", ["L03.90", "L02.91"],
`MDM: ***-year-old with *** of erythema, warmth and tenderness to *** {with/without} fluctuance.
Considered abscess, necrotizing soft tissue infection (no pain out of proportion, crepitus, bullae, rapid spread or systemic toxicity), septic arthritis, DVT, gout, contact dermatitis and venous stasis.
{Bedside US: ***.} {I&D performed (see procedure note).}
Margins marked. Treatment: *** (purulent: MRSA coverage; nonpurulent: streptococcal coverage).
Recheck in 48 hours; return for spreading redness, fever or worsening pain.`],
  ["*stimdm", "MDM", "STI / urethritis / vaginitis", "sti|std|sexually transmitted infection|z20.2|chlamydia|a56.09|gonorrhea|a54.9|urethritis|vaginal discharge|n89.8|trichomonas|bv|bacterial vaginosis", ["Z20.2", "A56.09", "A54.9", "N89.8"],
`MDM: ***-year-old with {vaginal discharge/dysuria/urethral discharge/exposure} for ***.
{hCG ***.} Considered PID, TOA, cervicitis, BV, candidiasis, trichomoniasis, HSV, syphilis, UTI and epididymitis.
Testing: GC/CT NAAT, trichomonas, {HIV, syphilis, hepatitis C} sent.
Treatment: {ceftriaxone 500 mg IM (1 g if ≥150 kg), doxycycline 100 mg BID ×7 days / metronidazole *** / ***}. Expedited partner therapy discussed; abstain for 7 days after treatment and until partners treated. Results callback confirmed: ***.`],
  ["phmdm", "MDM", "Pharyngitis", "pharyngitis|sore throat|j02.9|strep throat|j02.0|tonsillitis|j03.90|peritonsillar abscess|pta|mono", ["J02.9", "J02.0", "J03.90"],
`MDM: ***-year-old with sore throat for ***. Centor/McIsaac ***.
Considered peritonsillar/retropharyngeal abscess (no trismus, uvular deviation, muffled voice or neck stiffness), epiglottitis (no drooling, stridor or tripoding), Lemierre's, mononucleosis, acute HIV and gonococcal pharyngitis.
Rapid strep ***. Tolerating secretions and PO.
Assessment: {streptococcal pharyngitis: *** / viral pharyngitis: supportive care}. {Dexamethasone *** for symptom relief.}`],
]);

add("Tox & Environmental", [
  ["*odmdm", "MDM", "Opioid overdose", "opioid overdose|od|overdose|t40.2x1a|t40.411a|fentanyl overdose|heroin overdose|naloxone|narcan|t40.601a", ["T40.601A", "T40.411A", "T40.2X1A"],
`MDM: ***-year-old found {unresponsive/with decreased respirations} after suspected opioid use, ***. Naloxone *** given by {EMS/bystander/ED} with response ***.
Considered co-ingestants (acetaminophen ***, salicylate ***, ethanol ***), aspiration, hypoglycemia, head injury, hypothermia, rhabdomyolysis and noncardiogenic pulmonary edema. ECG ***.
Observed for *** hours after last naloxone; mental status and respiratory status at baseline, SpO₂ *** on room air.
Harm reduction: naloxone kit {dispensed/prescribed}, overdose risk counseling, {buprenorphine *** initiated / offered and declined}, treatment referral ***.`],
  ["ingestmdm", "MDM", "Intentional ingestion / poisoning", "ingestion|overdose|intentional ingestion|poisoning|t50.901a|t39.1x2a|acetaminophen overdose|tylenol overdose|t42.4x2a|suicide attempt ingestion|t14.91xa", ["T50.902A", "T39.1X2A"],
`MDM: ***-year-old with {intentional/unintentional} ingestion of *** (amount ***, time ***).
Toxidrome: ***. ECG: QRS ***, QTc ***.
Labs: acetaminophen ***, salicylate ***, ethanol ***, BMP/anion gap ***, {osmolal gap ***}, CK ***, {hCG ***}.
Poison Center (1-800-222-1222) contacted at ***; case # ***; recommendations: ***.
Treatment: ***. {NAC started at *** per Rumack-Matthew nomogram.}
Psychiatric evaluation {once medically clear / ***}. Safety: 1:1 sitter, belongings secured.`],
  ["etohmdm", "MDM", "Alcohol intoxication", "alcohol intoxication|etoh|intoxicated|drunk|f10.129|f10.920|ethanol|acute intoxication", ["F10.129", "F10.920"],
`MDM: ***-year-old with alcohol intoxication. Ethanol ***. Glucose ***.
Considered head injury, hypoglycemia, co-ingestion, toxic alcohols, withdrawal, Wernicke's, infection and hypothermia. Secondary survey for trauma: ***.
Observed and reassessed serially. At ***: clinically sober — ambulating with steady gait, speech clear, alert and oriented, tolerating PO, able to make an informed decision.
Discharged {with responsible adult / ***}. Substance use counseling and resources provided.`],
  ["withdrawal", "MDM", "Alcohol withdrawal", "alcohol withdrawal|f10.230|f10.239|ciwa|dts|delirium tremens|f10.231|withdrawal seizure|etoh withdrawal", ["F10.230", "F10.239", "F10.231"],
`MDM: ***-year-old with heavy daily alcohol use (last drink ***) presenting with ***. CIWA-Ar ***.
History of withdrawal seizures ***, DTs ***.
Considered sepsis, hypoglycemia, intracranial injury, hepatic encephalopathy, toxic ingestion and thyrotoxicosis.
Treatment: {phenobarbital *** / benzodiazepine ***}, thiamine *** mg before glucose, folate, multivitamin, electrolyte repletion.
Disposition: {admit for withdrawal management / discharge with outpatient withdrawal plan and resources: CIWA <10, no high-risk history, ***}.`],
  ["hypothermia", "MDM", "Hypothermia / cold exposure", "hypothermia|t68.xxxa|cold exposure|frostbite|t33.90xa|environmental exposure|found outside", ["T68.XXXA", "T33.90XA"],
`MDM: ***-year-old found {outdoors/***}; core temperature *** °C ({mild/moderate/severe} hypothermia).
ECG ***; glucose ***; K ***; ethanol ***; CK ***.
Rewarming: {passive / active external: forced-air warming, warmed IV fluids / active internal ***}. Handled gently to avoid arrhythmia.
Assessed for frostbite, trauma, intoxication, sepsis, hypothyroidism and adrenal insufficiency.
Disposition: ***.`],
  ["heatillness", "MDM", "Heat illness", "heat stroke|heat exhaustion|t67.01xa|t67.5xxa|hyperthermia|heat illness|t67.0", ["T67.01XA", "T67.5XXA"],
`MDM: ***-year-old with *** after exposure to heat {/ exertion}. Core temperature ***. Mental status ***.
{Heat stroke: CNS dysfunction with temperature >40 °C} / {heat exhaustion: normal mental status}.
Considered sepsis, meningitis, thyroid storm, serotonin syndrome, NMS, sympathomimetic toxicity and anticholinergic toxicity.
Cooling: {cold-water immersion / evaporative cooling / ice packs} started at ***, stopped at 38.5–39 °C. Labs: CK ***, BMP ***, LFTs ***, coags ***.
Disposition: ***.`],
  ["allergic", "MDM", "Allergic reaction / anaphylaxis", "allergic reaction|anaphylaxis|t78.2xxa|t78.40xa|urticaria|hives|l50.9|angioedema|t78.3xxa|epinephrine|food allergy|t78.00xa", ["T78.2XXA", "T78.40XA", "L50.9", "T78.3XXA"],
`MDM: ***-year-old with {urticaria/angioedema/***} after exposure to *** at ***.
Anaphylaxis criteria: {met: *** / not met: no respiratory compromise, hypotension or GI involvement}. Airway: no stridor, voice change or tongue/floor-of-mouth swelling.
{ACE-inhibitor angioedema considered: ***.}
Treatment: {epinephrine 0.5 mg IM at *** (repeat ***)}, H1/H2 blockers, {steroid ***}, ***.
Observed *** hours without recurrence. Discharged with {epinephrine auto-injector ×2 and teaching}, allergen avoidance, {allergy referral}.`],
]);

add("Endo & Heme", [
  ["*dkamdm", "MDM", "DKA / hyperglycemia", "dka|diabetic ketoacidosis|e10.10|e11.10|hyperglycemia|r73.9|e11.65|high blood sugar|hhs|e11.00|hyperosmolar", ["E10.10", "E11.10", "E11.65", "E11.00"],
`MDM: ***-year-old with {type 1/type 2} diabetes with glucose ***, pH ***, bicarbonate ***, anion gap ***, beta-hydroxybutyrate ***; consistent with {DKA (mild/moderate/severe) / HHS / hyperglycemia without DKA}.
Precipitant search: infection, missed insulin, MI, pancreatitis, pregnancy, SGLT2 inhibitor (euglycemic DKA), ***.
Potassium *** — {insulin held until K ≥3.3 / ***}.
Treatment: IV fluids ***, insulin infusion *** units/kg/h started at ***, potassium repletion ***, dextrose added when glucose <250.
Disposition: {ICU/stepdown}. Critical care time *** minutes.`],
  ["hypogly", "MDM", "Hypoglycemia", "hypoglycemia|e16.2|e11.649|low blood sugar|insulin reaction|sulfonylurea", ["E16.2", "E11.649"],
`MDM: ***-year-old with glucose *** {found by EMS/***}. Treated with {D50/D10/glucagon/oral glucose} with return to baseline.
Cause: {insulin dosing/missed meal / sulfonylurea / alcohol / sepsis / renal or liver failure / ***}.
{Sulfonylurea ingestion: observation required; octreotide ***.}
Ate a full meal and glucose remained >*** over *** hours of observation.
Disposition: discharge with responsible adult, medication adjustment ***, PCP/endocrine follow-up / admit ***.`],
  ["sicklemdm", "MDM", "Sickle cell pain crisis", "sickle cell|sickle cell crisis|vaso occlusive crisis|voc|d57.00|d57.219|acute chest|d57.01|sickle cell pain", ["D57.00", "D57.01"],
`MDM: ***-year-old with sickle cell disease ({HbSS/HbSC/***}) presenting with pain typical of prior vaso-occlusive crises, ***.
Considered acute chest syndrome (CXR ***, SpO₂ ***), stroke, splenic sequestration, aplastic crisis, osteomyelitis/septic joint, priapism, cholecystitis and infection (temp ***).
Hgb *** (baseline ***), reticulocytes ***.
Analgesia per individualized pain plan: *** at ***, reassessed at ***. IV fluids ***.
Disposition: ***.`],
  ["anemiamdm", "MDM", "Symptomatic anemia", "anemia|d64.9|low hemoglobin|d50.0|iron deficiency anemia|d62|transfusion|blood transfusion", ["D64.9", "D50.0", "D62"],
`MDM: ***-year-old with Hgb *** (baseline ***), symptoms ***.
Considered GI bleeding (rectal exam ***), menorrhagia, hemolysis, marrow failure, nutritional deficiency and CKD. MCV ***, retic ***, iron studies ***.
Hemodynamics: ***.
Plan: {transfuse *** units PRBC; consent obtained / no transfusion indicated, iron ***}. Disposition: ***.`],
  ["anticoagbleed", "MDM", "Bleeding on anticoagulation / reversal", "bleeding on anticoagulation|supratherapeutic inr|r79.1|elevated inr|warfarin|eliquis|apixaban|reversal|kcentra|d68.32|anticoagulant bleeding", ["R79.1", "D68.32"],
`MDM: ***-year-old on {warfarin/apixaban/rivaroxaban/dabigatran/***} (last dose ***) with ***. INR ***.
Bleeding: {major/life-threatening: *** / minor}.
Reversal: {4F-PCC *** units/kg + vitamin K 10 mg IV / andexanet *** / idarucizumab 5 g / vitamin K *** PO / held next dose only}.
Indication for anticoagulation (***) and thrombotic risk discussed. Disposition: ***.`],
]);
