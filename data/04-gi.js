// GASTROINTESTINAL / ABDOMEN

add("GI", [
  ["*abdmdm", "MDM", "Abdominal pain", "abdominal pain|abd pain|r10.9|belly pain|stomach pain|r10.84|epigastric pain|r10.13|r10.31|rlq pain|ruq pain|r10.11|llq pain", ["R10.9", "R10.84"],
`MDM: ***-year-old with *** abdominal pain for ***.
Differential includes appendicitis, cholecystitis/biliary colic, pancreatitis, bowel obstruction, perforation, diverticulitis, mesenteric ischemia, AAA, nephrolithiasis, pyelonephritis, {ectopic pregnancy, ovarian torsion, PID, TOA}, testicular torsion, ACS/inferior MI, lower-lobe pneumonia, DKA and gastroenteritis.
- Exam: ***. Peritoneal signs: {absent/present}.
- Labs: CBC ***, CMP ***, lipase ***, UA ***, {hCG ***}.
- Imaging: ***.
Reassessment: abdomen ***, tolerating PO {yes/no}.
Assessment: ***. Disposition: ***.`],
  ["abddc", "Discharge", "Abdominal pain, discharge", "abdominal pain discharge|abdominal pain|abd pain|belly pain|nonspecific abdominal pain", ["R10.9"],
`We did not find a dangerous cause of your belly pain today. Some conditions, such as early appendicitis, can take time to show up, so watch closely.

- Eat bland foods and drink fluids. ***
- Follow up with *** in 1–2 days for a recheck.

Return now for pain that gets worse or moves to the lower right side, fever, repeated vomiting, blood in vomit or stool, black stools, a hard or swollen belly, fainting, or {pregnancy symptoms/vaginal bleeding}.`],
  ["*appymdm", "MDM", "Appendicitis", "appendicitis|appy|k35.80|k35.89|rlq pain|acute appendicitis|k35.30", ["K35.80", "K35.30", "K35.32"],
`MDM: ***-year-old with RLQ pain, ***, and {CT/US} showing acute appendicitis {without/with} perforation or abscess.
Alvarado/AIR score ***. WBC ***.
Treatment: IV fluids, analgesia (***), antibiotics *** at ***.
Surgery (Dr. ***) consulted at ***; plan for ***. NPO.`],
  ["*cholemdm", "MDM", "Biliary colic / cholecystitis", "cholecystitis|biliary colic|gallstones|cholelithiasis|k80.20|k81.0|k80.00|ruq pain|gallbladder|choledocholithiasis|cholangitis", ["K80.20", "K81.0", "K80.00"],
`MDM: ***-year-old with RUQ/epigastric pain ***.
Considered cholecystitis, choledocholithiasis, cholangitis, pancreatitis, hepatitis, peptic ulcer, ACS and right lower lobe pneumonia.
Labs: WBC ***, LFTs ***, lipase ***. RUQ ultrasound: ***.
Assessment: {symptomatic cholelithiasis without cholecystitis; pain controlled; outpatient surgery referral / acute cholecystitis: antibiotics ***, surgery consulted / concern for choledocholithiasis/cholangitis: GI consulted for ERCP}.`],
  ["*pancmdm", "MDM", "Acute pancreatitis", "pancreatitis|acute pancreatitis|k85.90|k85.20|alcoholic pancreatitis|gallstone pancreatitis|k85.10|elevated lipase", ["K85.90", "K85.20", "K85.10"],
`MDM: ***-year-old with epigastric pain radiating to the back and lipase ***, consistent with acute pancreatitis. Likely etiology: {gallstone/alcohol/hypertriglyceridemia/medication/***}.
Severity markers: BUN ***, Hct ***, SIRS ***, BISAP ***. RUQ US ***. {CT only if diagnosis uncertain or concern for complication: ***.}
Treatment: goal-directed lactated Ringer's ***, analgesia ***, antiemetic ***.
Disposition: {admit / discharge: mild, pain controlled, tolerating PO}.`],
  ["*sbomdm", "MDM", "Small bowel obstruction", "sbo|small bowel obstruction|k56.609|bowel obstruction|ileus|k56.7|k56.0", ["K56.609", "K56.7"],
`MDM: ***-year-old with {prior abdominal surgery}, abdominal distension, vomiting and obstipation; CT shows {partial/complete} small bowel obstruction with transition point at ***. {No signs of strangulation, closed loop or ischemia / ***}.
Lactate ***. Treatment: NPO, IV fluids, NG tube to low intermittent suction (output ***), analgesia, antiemetic.
Surgery (Dr. ***) consulted. Disposition: ***.`],
  ["*divmdm", "MDM", "Diverticulitis", "diverticulitis|k57.32|k57.92|llq pain|diverticular disease|k57.20", ["K57.32", "K57.92"],
`MDM: ***-year-old with LLQ pain and CT showing {uncomplicated/complicated} diverticulitis{: abscess ***, perforation ***}.
Afebrile: ***. Tolerating PO: ***. Immunocompromised: ***.
Plan: {uncomplicated, well-appearing, tolerating PO: outpatient management; antibiotics *** (not routinely required for uncomplicated disease); clear liquids advancing to regular diet; GI follow-up for colonoscopy if not recently done / admit for IV antibiotics ***, surgery consult}.`],
  ["*gibmdm", "MDM", "GI bleed", "gi bleed|gib|gastrointestinal bleeding|k92.2|upper gi bleed|lower gi bleed|melena|k92.1|hematemesis|k92.0|hematochezia|k92.1|brbpr|bloody stool|coffee ground emesis", ["K92.2", "K92.1", "K92.0"],
`MDM: ***-year-old with {melena/hematochezia/hematemesis} for ***. Anticoagulant/antiplatelet: ***. Liver disease: ***.
Hemodynamics: HR ***, BP ***. Rectal exam: ***.
Labs: Hgb *** (baseline ***), BUN ***, INR ***, type and screen.
Glasgow-Blatchford score ***.
Treatment: 2 large-bore IVs, {PRBC *** units for Hgb <7 (<8 if cardiac disease)}, {pantoprazole ***}, {octreotide and ceftriaxone for suspected variceal bleed}, {reversal ***}.
GI (Dr. ***) consulted. Disposition: ***.`],
  ["*gastromdm", "MDM", "Gastroenteritis / vomiting and diarrhea", "gastroenteritis|age|a09|nausea vomiting|n/v|vomiting|r11.2|diarrhea|r19.7|stomach bug|n v d|food poisoning|k52.9", ["A09", "R11.2", "R19.7"],
`MDM: ***-year-old with *** days of {nausea/vomiting/diarrhea}. No blood in stool, high fever or severe localized pain reported. ***
Considered appendicitis, obstruction, pancreatitis, biliary disease, DKA, pregnancy, inferior MI, C. difficile (antibiotics: ***), toxic ingestion and increased ICP.
Exam: abdomen soft, ***; mucous membranes ***.
{Labs: ***.}
Treatment: {ondansetron ***, IV fluids ***}. Tolerated PO challenge.
Assessment: likely viral gastroenteritis. Discharged with antiemetic, hydration guidance and return precautions.`],
  ["gastrodc", "Discharge", "Vomiting and diarrhea, discharge", "gastroenteritis discharge|vomiting discharge|diarrhea discharge|nausea|gastroenteritis|stomach bug", ["A09"],
`You likely have a stomach virus. It usually gets better in 2–3 days.

- Drink small sips often: water, oral rehydration solution or sports drinks. Start with 1–2 ounces every 10–15 minutes.
- Use *** for nausea as prescribed.
- Eat simple foods when you feel ready.
- Wash hands well; the virus spreads easily.

Return for vomiting that won't stop, no urine for 8 hours, blood in vomit or stool, black stools, severe belly pain, high fever, or feeling faint or confused.`],
  ["constipmdm", "MDM", "Constipation", "constipation|k59.00|obstipation|fecal impaction|k56.41|no bowel movement", ["K59.00", "K56.41"],
`MDM: ***-year-old with constipation, last bowel movement ***. Passing flatus: ***.
Considered obstruction, volvulus, impaction, hypothyroidism, hypercalcemia, opioid/anticholinergic effect and malignancy (age, weight loss, blood: ***).
Exam: abdomen soft, nondistended, ***. Rectal: ***.
Treatment: ***. Results: ***.
Discharge with bowel regimen (polyethylene glycol 17 g daily, ***), fluids and fiber; PCP follow-up.`],
]);
