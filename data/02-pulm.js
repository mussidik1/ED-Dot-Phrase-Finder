// PULMONARY

add("Pulmonary", [
  ["*sobmdm", "MDM", "Shortness of breath", "shortness of breath|sob|dyspnea|r06.02|difficulty breathing|dyspnea on exertion|doe|trouble breathing", ["R06.02", "R06.00"],
`MDM: ***-year-old with shortness of breath for ***.
Differential includes PE, ACS, CHF, pneumonia, COPD/asthma exacerbation, pneumothorax, pleural effusion, anemia, metabolic acidosis, anxiety and ***.
- SpO₂ ***, work of breathing ***.
- ECG ***; troponin ***; BNP ***; CBC ***; CXR ***.
- PE: {PERC negative / Wells *** with D-dimer *** / CTA ***}.
Assessment: ***. Treatment and response: ***.
Disposition: ***.`],
  ["*copdmdm", "MDM", "COPD exacerbation", "copd|copd exacerbation|aecopd|j44.1|emphysema|chronic bronchitis|j44.0", ["J44.1", "J44.0"],
`MDM: ***-year-old with COPD (home O₂ {none/*** L}) with increased dyspnea, cough and {increased/purulent} sputum consistent with acute exacerbation.
Considered pneumonia, pneumothorax, PE, CHF, ACS and viral infection. CXR ***; ECG ***; {VBG pH *** / pCO₂ ***}; respiratory viral panel ***.
Treatment: DuoNeb ×***, methylprednisolone/prednisone *** mg, {azithromycin/doxycycline *** for increased sputum purulence}, {BiPAP ***}.
Reassessment: ***, ambulatory SpO₂ ***.
Disposition: {discharge on prednisone 40 mg daily ×5 days, antibiotic and inhaler review / admit for ***}.`],
  ["*asthmamdm", "MDM", "Asthma exacerbation", "asthma|asthma exacerbation|j45.901|j45.41|wheezing|reactive airway|status asthmaticus|j45.902", ["J45.901", "J45.902"],
`MDM: ***-year-old with asthma (prior intubations: ***, ICU: ***) with {mild/moderate/severe} exacerbation, trigger ***.
Peak flow *** ({***}% predicted). SpO₂ ***. Speaking {full sentences/phrases/words}.
Considered pneumothorax, pneumonia, foreign body, anaphylaxis, CHF and vocal cord dysfunction.
Treatment: albuterol/ipratropium ×***, dexamethasone *** mg / prednisone *** mg, {magnesium 2 g IV / ***}.
Reassessment: ***; peak flow after treatment ***.
Disposition: {discharged with steroid course, albuterol, controller review, PCP follow-up / admit ***}.`],
  ["asthmadc", "Discharge", "Asthma, discharge", "asthma discharge|asthma|wheezing|reactive airway", ["J45.901"],
`You were treated for an asthma flare.

- Take *** (steroid) daily for *** days, even if you feel better.
- Use albuterol, 2–4 puffs with a spacer every 4 hours as needed. If you need it more than every 4 hours, return.
- Keep using your daily controller inhaler: ***.
- Avoid smoke and other triggers.
- See *** within 1 week.

Return or call 911 for trouble talking in full sentences, lips or fingertips turning blue, albuterol that is not helping, or feeling very sleepy or confused.`],
  ["*pnamdm", "MDM", "Community-acquired pneumonia", "pneumonia|cap|community acquired pneumonia|j18.9|lobar pneumonia|j18.1|lrti|lower respiratory infection", ["J18.9"],
`MDM: ***-year-old with fever, cough and *** with CXR showing ***, consistent with community-acquired pneumonia.
Considered viral pneumonia, PE, CHF, aspiration, TB and malignancy. Sepsis screen: ***. Lactate ***.
CURB-65 *** / PSI class ***.
Treatment: *** (antibiotics per local guidance and allergies/comorbidities).
Disposition: {discharge with ***, follow-up in 48–72 h, return precautions / admit to *** for ***}.`],
  ["curb65", "Score", "CURB-65", "curb65|curb 65|pneumonia severity|pneumonia|psi", [],
`CURB-65: confusion *** / BUN >19 mg/dL *** / RR ≥30 *** / SBP <90 or DBP ≤60 *** / age ≥65 ***.
Total ***: {0–1 low risk, outpatient candidate / 2 consider admission / 3–5 severe, consider ICU}.`],
  ["urimdm", "MDM", "Viral URI / bronchitis", "uri|upper respiratory infection|viral uri|j06.9|cold|cough|bronchitis|j20.9|r05.9|covid|influenza|flu|viral syndrome", ["J06.9", "J20.9", "R05.9"],
`MDM: ***-year-old with *** days of {cough/congestion/sore throat/body aches}. Well-appearing, normal work of breathing, SpO₂ ***.
Considered pneumonia, sinusitis, streptococcal pharyngitis, influenza/COVID-19, pertussis, PE and CHF; exam and vitals do not suggest these. {Testing: ***.}
Assessment: likely viral upper respiratory infection. Antibiotics not indicated. {Antiviral: ***.}
Supportive care, return precautions given.`],
  ["*ptxmdm", "MDM", "Pneumothorax", "pneumothorax|ptx|j93.9|j93.11|collapsed lung|spontaneous pneumothorax|j93.83", ["J93.9", "J93.11"],
`MDM: ***-year-old with {primary/secondary} spontaneous pneumothorax, *** cm apex-to-cupola on CXR. Hemodynamically stable, SpO₂ ***.
No evidence of tension physiology.
Plan: {observation with repeat CXR at *** h / needle aspiration / pigtail catheter placement (see procedure note) / thoracic surgery consult}.
Disposition: ***.`],
  ["hemoptmdm", "MDM", "Hemoptysis", "hemoptysis|coughing blood|r04.2|blood in sputum", ["R04.2"],
`MDM: ***-year-old with hemoptysis, estimated volume ***. Airway stable, SpO₂ ***.
Considered bronchitis, pneumonia, malignancy, PE, TB, bronchiectasis, anticoagulation effect and an upper airway/GI source. CXR ***; CBC ***; coags ***; {CTA ***}.
Assessment: {non-massive hemoptysis / ***}.
Plan: ***.`],
]);
