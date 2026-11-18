// NEUROLOGY

add("Neuro", [
  ["*strokemdm", "MDM", "Acute stroke / stroke alert", "stroke|cva|stroke alert|code stroke|i63.9|acute ischemic stroke|facial droop|weakness|aphasia|tpa|tnk|thrombolysis|lvo|thrombectomy", ["I63.9"],
`MDM: ***-year-old with acute {right/left} *** deficit. Last known well ***. Stroke alert activated at ***.
NIHSS ***. Point-of-care glucose ***.
Considered hypoglycemia, seizure/Todd's paralysis, ICH, complex migraine, conversion, mass lesion and infection.
CT head: ***. CTA head/neck: {LVO at *** / no LVO}. {CT perfusion ***}.
Thrombolysis: {tenecteplase *** mg given at *** (door-to-needle *** min) after reviewing contraindications and discussing risks/benefits / not given because ***}.
Neurology (Dr. ***) and {neurointerventional team ***} consulted. BP goal ***.
Disposition: ***. Critical care time *** minutes.`],
  ["tiamdm", "MDM", "TIA", "tia|transient ischemic attack|g45.9|resolved stroke symptoms|transient weakness|transient numbness", ["G45.9"],
`MDM: ***-year-old with transient *** lasting ***, now resolved. NIHSS 0.
Considered stroke, hypoglycemia, seizure, migraine aura, syncope and peripheral nerve lesion.
ABCD² ***. CT head ***; CTA head/neck ***; ECG ***; glucose ***.
Plan: {admit/observation for expedited workup / ED-based TIA pathway with MRI, echo and monitoring}. Antiplatelet: ***.`],
  ["*hamdm", "MDM", "Headache", "headache|ha|r51.9|migraine|g43.909|tension headache|cephalgia|head pain", ["R51.9", "G43.909"],
`MDM: ***-year-old with headache, onset ***, similar to prior headaches: {yes/no}.
Red flags screened: {no thunderclap onset, fever/meningismus, focal deficit, papilledema, immunocompromise, pregnancy/postpartum, anticoagulation, age >50 new onset, trauma, or exertional/positional component / ***}.
Considered SAH, meningitis, ICH, venous sinus thrombosis, dissection, CO poisoning, temporal arteritis, hypertensive emergency, preeclampsia and acute angle-closure glaucoma.
{No imaging indicated per exam and history / CT head ***}.
Assessment: {primary headache, likely migraine/tension type / ***}.
Treatment: ***. Reassessment: ***. Discharge with follow-up and return precautions.`],
  ["sahmdm", "MDM", "Subarachnoid hemorrhage rule-out", "sah|subarachnoid hemorrhage|thunderclap headache|worst headache of life|i60.9|sudden headache|ottawa sah", ["I60.9", "R51.9"],
`MDM: SAH considered given {sudden-onset / maximal at onset} headache.
Ottawa SAH Rule: ***.
Non-contrast CT head obtained {within 6 hours of onset on a modern scanner, read negative by radiology / at *** hours}.
{CT within 6 h negative in neurologically intact patient: SAH effectively excluded / CTA ***/ LP: opening pressure ***, tube 1 RBC ***, tube 4 RBC ***, xanthochromia ***}.
Shared decision-making documented: ***.`],
  ["*seizmdm", "MDM", "Seizure", "seizure|sz|r56.9|g40.909|epilepsy|convulsion|first time seizure|breakthrough seizure|new onset seizure", ["R56.9", "G40.909"],
`MDM: ***-year-old with {first-time/known epilepsy, breakthrough} seizure. Witnessed description: ***. Duration ***. Now at neurologic baseline: {yes/***}.
Considered syncope, hypoglycemia, electrolyte abnormality, toxic ingestion or withdrawal, intracranial lesion/ICH, infection, eclampsia and nonadherence.
Glucose ***; labs ***; {AED level ***}; {CT head ***}; {pregnancy test ***}.
Plan: {load/resume ***; neurology follow-up / admit ***}.
Counseled on state driving restrictions and seizure safety (no driving, swimming alone, heights or bathing alone) until cleared by neurology.`],
  ["*vertmdm", "MDM", "Dizziness / vertigo", "dizziness|vertigo|r42|bppv|h81.10|vestibular neuritis|lightheaded|dizzy|hints exam|posterior circulation", ["R42", "H81.10"],
`MDM: ***-year-old with {episodic triggered / continuous acute / spontaneous episodic} dizziness for ***.
Considered posterior circulation stroke, vertebral dissection, BPPV, vestibular neuritis, Ménière's, arrhythmia, orthostasis, anemia, hypoglycemia and medication effect.
Exam: nystagmus ***; HINTS {benign: unidirectional horizontal nystagmus, negative test of skew, abnormal head impulse / concerning: ***}; Dix-Hallpike ***; gait ***; no dysarthria, dysmetria or other focal deficit.
{MRI/CTA ***}.
Assessment: ***. Treatment: {Epley maneuver / meclizine / ***}. Return precautions for new neurologic symptoms.`],
  ["ichmdm", "MDM", "Intracranial hemorrhage", "ich|intracranial hemorrhage|i61.9|intraparenchymal hemorrhage|brain bleed|hemorrhagic stroke|subdural|s06.5", ["I61.9", "S06.5X0A"],
`MDM: ***-year-old with *** and CT showing ***.
GCS ***. Anticoagulant/antiplatelet: ***. Coags ***.
Reversal: {*** given at *** / not indicated}. BP goal SBP {<160 / ***}; treated with ***.
Neurosurgery (Dr. ***) consulted; recommends ***. HOB 30°, seizure prophylaxis per neurosurgery.
Disposition: neuro ICU. Critical care time *** minutes.`],
  ["menmdm", "MDM", "Meningitis considered", "meningitis|g03.9|neck stiffness|fever headache|encephalitis|lumbar puncture|lp", ["G03.9"],
`Meningitis/encephalitis considered given ***.
{Low suspicion: no meningismus, altered mental status, rash or focal deficit; afebrile; well-appearing / LP performed (see procedure note): opening pressure ***, WBC ***, RBC ***, glucose ***, protein ***, Gram stain ***}.
{Empiric antibiotics given before LP/imaging at ***: ceftriaxone, vancomycin, dexamethasone, plus *** (ampicillin if age >50 or immunocompromised; acyclovir if encephalitis suspected).}`],
  ["ams", "MDM", "Altered mental status", "altered mental status|ams|r41.82|confusion|delirium|encephalopathy|r41.0|unresponsive|lethargy", ["R41.82", "R41.0"],
`MDM: ***-year-old with altered mental status, baseline per *** is ***.
Differential (AEIOU TIPS): alcohol/toxins, electrolytes/endocrine (glucose, Na, Ca, thyroid), infection (UTI, pneumonia, meningitis, sepsis), opioids/overdose, uremia/hepatic encephalopathy, trauma/ICH, insulin, psychiatric, stroke/seizure, hypoxia/hypercarbia.
Workup: glucose ***, CBC ***, BMP ***, LFTs/ammonia ***, UA ***, {VBG ***}, {tox ***}, {CT head ***}, {CXR ***}.
Assessment: ***. Plan: ***.`],
  ["bellmdm", "MDM", "Bell's palsy", "bells palsy|bell palsy|facial palsy|g51.0|facial nerve palsy|facial droop", ["G51.0"],
`MDM: ***-year-old with acute {right/left} facial weakness involving the forehead, onset ***, consistent with peripheral (Bell's) palsy.
Stroke considered and felt unlikely: forehead involved, no limb weakness, dysarthria, ataxia or other cranial nerve findings. Considered Lyme disease, Ramsay Hunt (no vesicles in ear/mouth), otitis media, parotid mass and trauma.
Plan: prednisone 60 mg daily ×5 days then taper ×5 days (or 50 mg ×10 days), {valacyclovir for severe palsy}, eye protection (artificial tears by day, lubricant ointment and taping at night). Follow-up with PCP/neurology; return for new weakness.`],
]);
