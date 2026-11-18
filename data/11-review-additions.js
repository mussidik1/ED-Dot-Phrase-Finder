// ADDED AFTER CLINICAL REVIEW (Nov 2026): documentation the reviewers expected, high-risk impressions, pediatric head rules.

add("General", [
  ["*lwbs", "Note", "Left without being seen / eloped", "lwbs|left without being seen|eloped|elopement|left before seen|z53.21|walked out|left before evaluation complete", ["Z53.21"],
`The patient {left without being seen by a provider / left after triage, before evaluation was complete / eloped during evaluation} at ***. Last seen at *** by ***.
Attempts to locate or contact the patient: {called *** at *** / overhead page / security notified / ***}.
{Pending results reviewed: *** / no results pending}. {Concerning findings: *** — follow-up attempted by ***.}
{Not under an emergency petition or hold / Under a hold: police notified at ***.}`],
  ["*refusal", "Note", "Informed refusal of a test or treatment", "informed refusal|refused test|refused treatment|declined ct|declined admission|refuses blood|declined lp|refusal", ["Z53.29"],
`Informed refusal: I recommended *** because ***. The patient declines ***.
Risks of declining discussed in plain language, including ***, up to and including permanent disability or death. Alternatives offered: ***.
Decision-making capacity: {present (see capacity assessment) / ***}. The patient {remains in the department for the rest of their care / is being discharged with the plan below}. They may change their mind at any time and are welcome to return.`],
  ["*capacity", "Note", "Decision-making capacity assessment", "capacity|decision making capacity|capacity assessment|competency|lacks capacity|has capacity", [],
`Decision-making capacity for the decision about ***:
- Understands the relevant information (states it back in own words): {yes / no — ***}
- Appreciates how it applies to their situation: {yes / no — ***}
- Reasons about the options and consequences: {yes / no — ***}
- Communicates a clear and consistent choice: {yes / no — ***}
Factors that could impair capacity (intoxication, delirium, hypoxia, hypoglycemia, psychosis): {none identified / ***}.
Conclusion: the patient {has / lacks} capacity for this decision. {Surrogate decision-maker: *** (relationship ***).}`],
  ["*signout", "Note", "Care assumed at sign-out / ED course", "sign out|signout|handoff|care assumed|ed course|reevaluation|reassessment|change of shift|oncoming", [],
`Care of this patient was assumed from Dr. *** at *** at change of shift. Pending at handoff: ***. Plan at handoff: ***.
ED course: At *** the patient was reevaluated: ***. Results since handoff: ***.
{Plan unchanged / Plan changed to *** because ***}. Disposition: ***.`],
  ["*emtala", "Note", "Transfer certification (EMTALA)", "transfer|emtala|interfacility transfer|transfer to higher level of care|transfer certification|accepting physician", [],
`Transfer: The patient requires a level of care not available here: ***.
Medical screening exam completed; stabilizing treatment within our capability provided: ***. Condition at transfer: {stable / not stable — benefits of transfer outweigh risks}.
Benefits of transfer: ***. Risks of transfer: ***.
Accepting facility *** confirmed space and capability; accepting physician Dr. *** at ***.
Consent: {patient / ***} {consented to transfer after discussion of risks and benefits / requested transfer}.
Mode: {ALS / BLS / critical care transport / air medical} with ***. Records, imaging and results sent: ***.`],
  ["*transfusion", "Note", "Massive transfusion / hemorrhagic shock", "hemorrhagic shock|r57.1|massive transfusion|mtp|whole blood|trauma activation|txa|tranexamic acid|hemorrhage|exsanguination|r57.8", ["R57.1"],
`MDM: ***-year-old with {traumatic/nontraumatic} hemorrhage from *** with signs of shock: HR ***, BP ***, shock index ***, mental status ***.
Trauma team activation at *** {level ***}. Hemorrhage control: {direct pressure / tourniquet at *** / pelvic binder / REBOA / ***}.
Massive transfusion protocol activated at ***. Products: {low-titer O whole blood *** units / PRBC:plasma:platelets *** balanced ratio}; calcium ***. TXA {1 g IV over 10 min at *** (within 3 h of injury), then 1 g over 8 h / not given: >3 h or ***}.
Reversal of anticoagulation: ***. Hypothermia prevention: ***.
Definitive control: {OR / IR} with Dr. *** at ***.`],
]);

add("Procedures", [
  ["*cardioversion", "Procedure", "Synchronized cardioversion", "cardioversion|synchronized cardioversion|dccv|electrical cardioversion|shock afib|svt cardioversion", [],
`Procedure: synchronized electrical cardioversion
Indication: {unstable / stable} {atrial fibrillation / atrial flutter / SVT / VT with pulse} — ***. Consent: {written / verbal / emergent}. Time-out performed.
Anticoagulation status/thromboembolic risk assessed: ***.
Sedation: see procedural sedation note. Pads: {anterior-posterior / anterolateral}.
Synchronized shock(s): *** J ×***, {biphasic}. Result: {converted to sinus rhythm / ***} at ***.
Post-procedure ECG: ***. Complications: {none / ***}.`],
  ["*arthrocentesis", "Procedure", "Arthrocentesis", "arthrocentesis|joint aspiration|joint tap|tap knee|knee aspiration|synovial fluid", [],
`Procedure: arthrocentesis, {right/left} ***
Indication: ***. Consent: {written/verbal}. Time-out performed. Overlying cellulitis: {none / ***}.
Approach: ***. Sterile prep with chlorhexidine; anesthesia *** mL 1% lidocaine. *** g needle; {ultrasound guidance used / landmark technique}.
Aspirated *** mL {clear / cloudy / purulent / bloody} fluid. Sent for cell count, Gram stain, culture and crystals.
Complications: {none / ***}. Dressing applied.`],
  ["*fiblock", "Procedure", "Fascia iliaca / femoral nerve block", "fascia iliaca block|nerve block|femoral nerve block|hip fracture block|regional anesthesia|ultrasound guided nerve block|hip fracture", ["S72.009A"],
`Procedure: ultrasound-guided {fascia iliaca / femoral nerve} block, {right/left}
Indication: analgesia for ***. Consent: {written/verbal}. Time-out performed. Weight *** kg.
Pre-block neurovascular exam: ***. Anticoagulation: ***.
Sterile prep. Real-time ultrasound guidance; needle tip visualized; negative aspiration before and during injection.
Injected *** mL of *** (total *** mg, below the maximum dose for weight of *** mg/kg). Spread below the fascia iliaca confirmed: {yes / ***}.
Monitoring for local anesthetic systemic toxicity (LAST) for *** min; lipid emulsion available. Complications: {none / ***}. Pain score before *** / after ***.`],
]);

add("Cardiac", [
  ["*pericarditis", "MDM", "Pericarditis / myocarditis", "pericarditis|i30.9|myocarditis|i40.9|pleuritic chest pain|positional chest pain|pericardial effusion|i31.39|friction rub", ["I30.9", "I40.9"],
`MDM: ***-year-old with {sharp, pleuritic, positional} chest pain for ***. Recent viral illness ***.
Diagnostic criteria (2 of 4): typical pain ***; friction rub ***; diffuse ST elevation/PR depression ***; new or worsening effusion ***.
Considered STEMI (reciprocal changes, regional ST elevation: ***), myocarditis (troponin ***), tamponade (bedside echo ***; pulsus ***), aortic dissection, PE and pneumonia.
High-risk features (fever >38 °C, subacute onset, large effusion, tamponade, no response to NSAIDs, elevated troponin, immunosuppression, anticoagulation, trauma): {none / ***}.
Treatment: {ibuprofen 600 mg TID or aspirin 750–1000 mg TID ×1–2 weeks with GI protection, plus colchicine 0.5 mg BID (0.5 mg daily if <70 kg) ×3 months / ***}. Avoid strenuous exercise.
Disposition: {discharge, cardiology/PCP follow-up in 1 week / admit for high-risk features}.`],
]);

add("ID & Sepsis", [
  ["*neutfever", "MDM", "Neutropenic fever", "neutropenic fever|febrile neutropenia|d70.9|r50.81|chemo fever|fever chemotherapy|neutropenia", ["D70.9", "R50.81"],
`MDM: ***-year-old receiving {chemotherapy for *** / ***}, last dose ***, with temperature *** (≥38.3 °C once or ≥38.0 °C for 1 h) and ANC *** (<500 or expected to fall below 500).
Source search: lines/ports ***, skin ***, mouth/perianal (no rectal exam) ***, lungs ***, urine ***. Blood cultures from {peripheral and each line lumen} at ***.
Antibiotics within 60 minutes of arrival: {cefepime 2 g IV / piperacillin-tazobactam *** / ***} at ***. {Vancomycin added for ***.}
MASCC score *** ({low risk ≥21 / high risk}). Oncology (Dr. ***) contacted.
Disposition: {admit / outpatient pathway per oncology for low-risk MASCC with reliable follow-up}.`],
]);

add("Trauma & MSK", [
  ["*caudaequina", "MDM", "Cauda equina / spinal epidural abscess considered", "cauda equina|g83.4|spinal epidural abscess|g06.1|saddle anesthesia|urinary retention back pain|back pain red flags|cord compression|g95.20", ["G83.4", "G06.1", "G95.20"],
`MDM: ***-year-old with back pain and red flags: {saddle anesthesia / new urinary retention or incontinence / bowel incontinence / progressive or bilateral leg weakness / fever / IV drug use / immunocompromise / cancer / recent spinal procedure} — ***.
Exam: strength ***, sensation including perineum ***, reflexes ***, rectal tone ***. Post-void residual *** mL.
Labs: WBC ***, ESR ***, CRP ***, {blood cultures ***}.
Emergent MRI {lumbar / whole spine} with and without contrast at ***: ***.
{Neurosurgery/spine (Dr. ***) consulted at ***. / Spinal epidural abscess: vancomycin plus *** started after cultures.} {Dexamethasone for malignant cord compression per oncology/neurosurgery.}
Disposition: ***.`],
]);

add("Peds", [
  ["pecarnu2", "Score", "PECARN head injury, age under 2", "pecarn|pecarn under 2|pediatric head injury|infant head injury|toddler head injury|head injury child", ["S09.90XA"],
`PECARN head injury rule, age <2 (Kuppermann 2009). Excludes trivial mechanism, VP shunt, bleeding disorder, known brain lesion, and injury >24 h ago.
High risk: GCS <15 or altered mental status ***; palpable skull fracture ***.
Intermediate risk: non-frontal scalp hematoma ***; LOC ≥5 s ***; severe mechanism ***; not acting normally per parent ***.
Result: {very low risk (ciTBI <0.02%): CT not recommended / intermediate risk (about 0.9%): observation vs CT by shared decision-making / high risk (about 4.4%): CT recommended}.`],
  ["pecarn2", "Score", "PECARN head injury, age 2 and over", "pecarn|pecarn over 2|pediatric head injury|child head injury|head injury child|peds head trauma", ["S09.90XA"],
`PECARN head injury rule, age 2–17 (Kuppermann 2009). Excludes trivial mechanism, VP shunt, bleeding disorder, known brain lesion, and injury >24 h ago.
High risk: GCS <15 or altered mental status ***; signs of basilar skull fracture ***.
Intermediate risk: any LOC ***; vomiting ***; severe mechanism ***; severe headache ***.
Result: {very low risk (ciTBI <0.05%): CT not recommended / intermediate risk (about 0.8%): observation vs CT by shared decision-making / high risk (about 4.3%): CT recommended}.`],
]);

const PYN = [[0, 'No'], [1, 'Yes']];
const PHI = [[0, 'No'], [10, 'Yes']];
calc('pecarnu2', {
  name: 'PECARN (age <2)', rule: true,
  items: [
    { label: 'GCS <15 or altered mental status', short: 'GCS <15/AMS', opts: PHI },
    { label: 'Palpable skull fracture', short: 'Palpable skull fracture', opts: PHI },
    { label: 'Non-frontal (occipital, parietal or temporal) scalp hematoma', short: 'Non-frontal hematoma', opts: PYN },
    { label: 'Loss of consciousness ≥5 seconds', short: 'LOC ≥5 s', opts: PYN },
    { label: 'Severe mechanism (MVC with ejection/death/rollover, pedestrian or unhelmeted cyclist struck by vehicle, fall >3 ft, struck by high-impact object)', short: 'Severe mechanism', opts: PYN },
    { label: 'Not acting normally per parent', short: 'Not acting normally', opts: PYN },
  ],
  bands: [[0, 'very low risk (ciTBI <0.02%); CT not recommended'], [9, 'intermediate risk (about 0.9%); observation vs CT by shared decision-making'], [99, 'high risk (about 4.4%); CT recommended']],
});
calc('pecarn2', {
  name: 'PECARN (age 2–17)', rule: true,
  items: [
    { label: 'GCS <15 or altered mental status', short: 'GCS <15/AMS', opts: PHI },
    { label: 'Signs of basilar skull fracture', short: 'Basilar skull fracture signs', opts: PHI },
    { label: 'Any loss of consciousness', short: 'LOC', opts: PYN },
    { label: 'Vomiting', short: 'Vomiting', opts: PYN },
    { label: 'Severe mechanism (MVC with ejection/death/rollover, pedestrian or unhelmeted cyclist struck by vehicle, fall >5 ft, struck by high-impact object)', short: 'Severe mechanism', opts: PYN },
    { label: 'Severe headache', short: 'Severe headache', opts: PYN },
  ],
  bands: [[0, 'very low risk (ciTBI <0.05%); CT not recommended'], [9, 'intermediate risk (about 0.8%); observation vs CT by shared decision-making'], [99, 'high risk (about 4.3%); CT recommended']],
});
