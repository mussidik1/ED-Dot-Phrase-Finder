// PROCEDURE NOTES AND GENERAL DOCUMENTATION (critical care, AMA, attestation, disposition)

add("Procedures", [
  ["*lacrepair", "Procedure", "Laceration repair", "laceration repair|lac repair|sutures|suture|stitches|wound closure|simple repair|layered closure|staples|dermabond", [],
`Procedure: laceration repair
Consent: {verbal/written} after discussing risks (infection, scarring, dehiscence, retained foreign body) and benefits.
Location: ***. Length: *** cm. Complexity: {simple / intermediate (layered) / complex}.
Anesthesia: *** mL of {1% lidocaine {with/without} epinephrine / ***} by {local infiltration / digital block}.
Prep: irrigated with *** mL normal saline; explored in bloodless field; no foreign body or deep structure involvement.
Closure: {*** × ***-0 {nylon/Prolene/Vicryl Rapide} simple interrupted / deep layer *** × ***-0 Vicryl / staples ×*** / tissue adhesive}.
Estimated blood loss minimal. Patient tolerated well; no complications. Distal neurovascular status intact after repair.`],
  ["*indprocedure", "Procedure", "Incision and drainage", "incision and drainage|i&d|i and d|abscess drainage|abscess|boil drainage", [],
`Procedure: incision and drainage of abscess
Consent: {verbal/written}. Time-out performed.
Location: ***. Size: *** cm.
Anesthesia: *** mL 1% lidocaine local infiltration.
Prep: ***. Incision: *** cm linear incision. Expressed *** mL purulent material. Loculations broken with hemostat. Irrigated with normal saline.
{Packed with *** / loop drain placed / left open}. {Culture sent.} Dressing applied.
Tolerated well; no complications.`],
  ["splintproc", "Procedure", "Splint application", "splint|splinting|sugar tong|volar splint|posterior splint|ulnar gutter|thumb spica|posterior ankle splint|stirrup", [],
`Procedure: splint application
Indication: ***. Splint: {volar / sugar-tong / ulnar gutter / thumb spica / posterior long-arm / posterior short-leg with stirrup / ***}, applied by {me / *** under my supervision}, checked by me.
Materials: {fiberglass/plaster} with adequate padding.
Neurovascular status before and after: capillary refill <2 s, sensation and motor function intact distally.
Splint care, elevation and compartment syndrome precautions reviewed.`],
  ["reduction", "Procedure", "Closed reduction (fracture / dislocation)", "reduction|closed reduction|shoulder dislocation|s43.006a|dislocation|reduce|fracture reduction|patella dislocation|finger dislocation", ["S43.006A"],
`Procedure: closed reduction of ***
Consent: {verbal/written}; risks (failed reduction, fracture, neurovascular injury, need for sedation or surgery) discussed. Time-out performed.
Pre-reduction X-ray: ***. Pre-procedure neurovascular exam: ***.
Analgesia/anesthesia: {procedural sedation (see separate note) / intra-articular lidocaine *** mL / hematoma block *** mL / ***}.
Technique: ***. Successful reduction on attempt ***.
Post-reduction: neurovascular status intact; X-ray ***. Immobilized in ***.
Tolerated well; no complications.`],
  ["sedation", "Procedure", "Procedural sedation", "procedural sedation|sedation|conscious sedation|ketamine sedation|propofol sedation|moderate sedation|psa", [],
`Procedure: procedural sedation for ***
Pre-sedation: ASA class ***; airway assessment ***; last oral intake ***. Consent obtained after discussing risks (respiratory depression, aspiration, hypotension, emergence reaction) and alternatives.
Monitoring: continuous cardiac, pulse oximetry and capnography; suction, BVM and airway equipment at bedside. Independent trained observer: ***.
Medications: *** (total), first dose at ***.
Sedation start ***, end ***; my face-to-face time *** minutes.
Lowest SpO₂ ***; interventions ***. Complications: {none / ***}.
Returned to baseline mental status at ***; meets discharge criteria.`],
  ["intubation", "Procedure", "Endotracheal intubation", "intubation|rsi|rapid sequence intubation|ett|endotracheal intubation|airway|intubated|respiratory failure|j96.00", ["J96.00"],
`Procedure: endotracheal intubation (RSI)
Indication: ***. Emergent; consent implied.
Pre-oxygenation: ***. Apneic oxygenation ***.
Medications: induction *** mg {etomidate/ketamine}, paralytic *** mg {rocuronium/succinylcholine}.
Device: {video laryngoscope *** / direct laryngoscope Mac/Miller ***}. View: Grade ***. *** mm ETT placed on attempt *** at *** cm at the teeth. {Bougie used.}
Confirmation: color change/waveform capnography, bilateral breath sounds, chest rise, {CXR ***}.
Lowest SpO₂ ***. Post-intubation sedation ***. Complications: {none / ***}.`],
  ["centralline", "Procedure", "Central venous catheter", "central line|cvc|central venous catheter|ij line|femoral line|subclavian line|triple lumen|cordis", [],
`Procedure: central venous catheter placement
Indication: ***. Consent: {written / emergent}. Time-out performed.
Site: {right/left} {internal jugular / subclavian / femoral}. Full sterile barrier precautions: cap, mask, sterile gown and gloves, chlorhexidine prep, full-body drape. Hand hygiene performed.
Ultrasound guidance used with real-time visualization of needle entry; vessel patent and compressible; image saved.
Anesthesia *** mL 1% lidocaine. Seldinger technique; *** Fr *** -lumen catheter secured at *** cm. All ports aspirated and flushed. Guidewire removed and confirmed intact.
{CXR: tip at cavoatrial junction, no pneumothorax.} EBL minimal. No complications.`],
  ["lpproc", "Procedure", "Lumbar puncture", "lumbar puncture|lp|spinal tap|csf", [],
`Procedure: lumbar puncture
Indication: ***. Consent: {written/verbal}. Time-out performed. {CT before LP: *** / not indicated.}
Position: {lateral decubitus / seated}. Sterile prep and drape. Anesthesia *** mL 1% lidocaine.
*** g spinal needle at L***-L***, attempt ***. Opening pressure *** cm H₂O (lateral decubitus). *** mL {clear/xanthochromic/bloody} CSF collected in 4 tubes.
Tolerated well; no complications.`],
  ["usivproc", "Procedure", "Ultrasound-guided peripheral IV", "ultrasound iv|us iv|usgiv|ultrasound guided iv|difficult iv access|peripheral iv", [],
`Procedure: ultrasound-guided peripheral IV
Indication: difficult access after *** failed attempts. Site: {right/left} ***. Real-time ultrasound guidance with dynamic needle visualization; vessel patent and compressible.
*** g, *** -inch catheter placed on attempt ***; good blood return, flushed easily without infiltration. Secured. No complications.`],
  ["pocus", "Exam", "Point-of-care ultrasound (FAST / cardiac)", "pocus|bedside ultrasound|fast|efast|fast exam|cardiac ultrasound|echo|bedside echo|rush exam", [],
`Point-of-care ultrasound performed and interpreted by me for ***.
{FAST/eFAST: no free fluid in RUQ, LUQ, pelvis or pericardium; lung sliding present bilaterally / ***.}
{Cardiac: pericardial effusion ***; LV function {normal/decreased}; RV {not dilated/dilated}; IVC ***.}
Images saved to ***.`],
  ["cprnote", "Procedure", "Cardiac arrest / CPR", "cardiac arrest|cpr|code|i46.9|resuscitation|rosc|cardiopulmonary resuscitation|pea|asystole|vf arrest", ["I46.9"],
`Cardiac arrest resuscitation
Arrest: {witnessed/unwitnessed} at ***; bystander CPR ***; initial rhythm ***. EMS interventions: ***.
ED course: high-quality CPR with pulse/rhythm checks every 2 minutes. Rhythms: ***. Defibrillation ×*** at *** J. Epinephrine ×***. Airway: ***. Access: ***.
Reversible causes considered (H's and T's): ***. Bedside US: ***.
Outcome: {ROSC at ***; post-arrest care *** / resuscitation terminated at *** after *** minutes; family (***) notified}.
Critical care time *** minutes, excluding separately billable procedures.`],
]);

add("General", [
  ["*critcare", "Note", "Critical care time", "critical care|critical care time|cc time|critical care attestation|99291|critically ill", [],
`Critical care: This patient was critically ill with a high probability of imminent or life-threatening deterioration due to ***.
I personally spent *** minutes of critical care time, excluding separately billable procedures and teaching time, in direct care including: evaluation and management, interpretation of labs/imaging/ECG, ***, review of records, discussion with consultants (***) and family, and frequent reassessment.`],
  ["*ama", "Note", "Leaving against medical advice", "ama|against medical advice|z53.21|left ama|refusal of care|z53.29|refused treatment|eloped", ["Z53.21", "Z53.29"],
`Against medical advice: The patient wishes to leave before completion of evaluation/treatment. I recommended ***.
Decision-making capacity: the patient is alert, not clinically intoxicated, and able to understand the information, appreciate how it applies to them, reason about options and communicate a consistent choice.
Risks discussed in plain language, including ***, up to and including permanent disability and death. Alternatives discussed: ***.
The patient verbalized understanding and still declines. {AMA form signed / declined to sign.} Treatments and prescriptions offered: ***. Encouraged to return at any time; return precautions and follow-up given. {Family/***: present.}`],
  ["attest", "Note", "Attending attestation (resident / APP)", "attestation|attending attestation|resident attestation|teaching physician|app attestation|cosign|shared visit|split shared", [],
`Attending attestation: I saw and evaluated the patient, discussed the case with {resident Dr. *** / APP ***}, and agree with the findings and plan as documented in their note, with the following additions/exceptions: ***.
I personally performed {the history/exam/MDM / ***}. I was present for the key portions of ***.`],
  ["mdmdata", "Note", "Data reviewed and risk (2023 E/M MDM)", "mdm|data reviewed|medical decision making|e/m level|99285|99284|level 5|independent interpretation|external records|risk of management|social determinants", [],
`Data reviewed:
- Labs ordered/reviewed: ***.
- Imaging: ***; {independently interpreted by me: *** / reviewed radiology report}.
- ECG independently interpreted by me: ***.
- External records reviewed: ***.
- History from independent historian (***): ***.
- Discussed management with {consultant/PCP/***}: ***.
Risk: {prescription drug management / decision regarding hospitalization / parenteral controlled substances / decision not to resuscitate or de-escalate care / social determinants of health affecting diagnosis or treatment: ***}.`],
  ["dispo", "Note", "Discharge disposition and return precautions", "discharge|dispo|disposition|return precautions|discharged home|follow up|shared decision making|sdm", [],
`Disposition: The patient is well-appearing, hemodynamically stable and appropriate for outpatient management. Results and diagnosis discussed; questions answered.
Follow-up: *** within *** days.
Strict return precautions given, including ***. The patient {and ***} verbalized understanding and agree with the plan. Discharge instructions provided {in ***; interpreter ID ***}.`],
  ["admit", "Note", "Admission / handoff", "admission|admit|admitted|hospitalist|handoff|sign out|observation|obs", [],
`Disposition: admit to {*** service / observation} under Dr. *** for ***. Discussed with admitting provider at ***; accepted.
Pending at time of admission: ***. Code status: ***. Condition: ***.`],
  ["interpreter", "Note", "Interpreter use", "interpreter|language line|limited english proficiency|lep|spanish|translator|interpreter used", [],
`A certified medical interpreter was used for this encounter: {in person / video / phone}, language ***, interpreter ID ***. The patient declined to use a family member as interpreter, or a family member was not used.`],
  ["goc", "Note", "Goals of care conversation", "goals of care|goc|code status|dnr|dni|polst|molst|palliative|hospice|comfort care|z66", ["Z66"],
`Goals of care: Discussed with {patient / surrogate *** (relationship ***)} for *** minutes. Discussed diagnosis, prognosis and treatment options, including ***.
Patient values and goals: ***.
Code status: {Full code / DNR / DNI / DNR-DNI / comfort-focused care}. {MOLST/POLST reviewed/completed.}
Plan: ***. {Palliative care consulted.}`],
  ["sdoh", "Note", "Social determinants of health", "social determinants|sdoh|homeless|homelessness|z59.00|z59.01|food insecurity|z59.41|transportation|uninsured|z59.7|housing", ["Z59.00", "Z59.41"],
`Social determinants of health affecting diagnosis and treatment: {housing instability / food insecurity / transportation barrier / no insurance / ***}. Impact on plan: ***.
Addressed by: {social work/case management consult, ***, resources provided}.`],
]);
