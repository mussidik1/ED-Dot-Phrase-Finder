// TRAUMA AND MUSCULOSKELETAL

add("Trauma & MSK", [
  ["*headinj", "MDM", "Minor head injury", "head injury|head trauma|minor head injury|s09.90xa|concussion|s06.0x0a|fall hit head|closed head injury|chi|canadian ct head", ["S09.90XA", "S06.0X0A"],
`MDM: ***-year-old with head injury from *** at ***. LOC ***; amnesia ***; vomiting ***; anticoagulant/antiplatelet ***.
GCS 15, neurologically intact, ***.
{Canadian CT Head Rule: *** / New Orleans criteria: ***}.
{CT head not indicated by decision rule / CT head: no acute intracranial abnormality}. {C-spine cleared clinically by NEXUS/Canadian C-Spine Rule / CT C-spine negative}.
Assessment: {minor head injury / concussion}. Concussion precautions and graduated return-to-activity guidance given; responsible adult present.`],
  ["concussdc", "Discharge", "Concussion / head injury, discharge", "concussion discharge|head injury discharge|head injury|concussion|head trauma", ["S06.0X0A"],
`You had a head injury. Your exam {and CT scan} did not show bleeding or a skull fracture.

- Rest your brain for 24–48 hours: limit screens, reading and work, then slowly return to activity as symptoms allow.
- No sports or activity that could cause another head injury until cleared by a doctor.
- Use acetaminophen for headache. ***
- Have someone stay with you tonight.

Return right away for a headache that gets worse, repeated vomiting, confusion, unusual sleepiness or trouble waking, a seizure, weakness or numbness, trouble talking or walking, or clear fluid from the nose or ears.`],
  ["ccspine", "Score", "C-spine clearance (NEXUS / Canadian C-Spine)", "nexus|canadian c spine|c spine|cervical spine|neck injury|c collar|c-spine clearance|neck pain trauma", ["S13.4XXA"],
`C-spine: {NEXUS criteria met: no posterior midline tenderness, no focal neurologic deficit, normal alertness, no intoxication, no painful distracting injury / Canadian C-Spine Rule: no high-risk factor (age ≥65, dangerous mechanism, paresthesias), low-risk factor present (***), able to actively rotate neck 45° left and right}.
C-spine cleared clinically; collar removed. {Imaging: ***.}`],
  ["mvcmdm", "MDM", "Motor vehicle collision", "mvc|motor vehicle collision|mva|car accident|v43|v49.9xxa|rollover|restrained driver|trauma evaluation", ["V43.52XA", "V49.9XXA"],
`MDM: ***-year-old {restrained/unrestrained} {driver/passenger} in *** collision at *** mph. Airbag deployment ***. Ambulatory at scene ***.
Primary survey intact. Secondary survey: ***.
Considered intracranial injury, C-spine injury, pneumothorax, hemothorax, intra-abdominal/solid-organ injury, pelvic fracture and extremity fractures. Seatbelt sign ***.
Imaging: ***. {FAST ***}.
Assessment: ***. No evidence of serious traumatic injury on exam and imaging. Expect soreness for several days; return precautions for delayed symptoms reviewed.`],
  ["*backmdm", "MDM", "Low back pain", "back pain|low back pain|lbp|m54.50|sciatica|m54.30|lumbago|lumbar strain|s39.012a|radiculopathy|m54.16", ["M54.50", "M54.30", "S39.012A"],
`MDM: ***-year-old with low back pain for ***, {with/without} radiation to ***.
Red flags screened and absent: no saddle anesthesia, bowel/bladder dysfunction, progressive or bilateral leg weakness, fever, IV drug use, immunocompromise, history of cancer, unexplained weight loss, significant trauma or anticoagulation. ***
Considered cauda equina, spinal epidural abscess, vertebral osteomyelitis, fracture, malignancy, AAA, dissection, pyelonephritis and nephrolithiasis.
Exam: strength 5/5, sensation and reflexes intact, ***. {Post-void residual ***.}
Imaging not indicated. Assessment: {mechanical low back pain / radiculopathy}. Treatment: ***. Stay active; PCP/PT follow-up.`],
  ["backdc", "Discharge", "Back pain, discharge", "back pain discharge|low back pain|back strain|sciatica", ["M54.50"],
`Your back pain is most likely from a muscle or joint strain. Most back pain improves within 2–6 weeks.

- Stay active; walking helps. Avoid bed rest.
- Use heat and *** for pain as directed.
- Follow up with *** in 1–2 weeks if not improving.

Return right away for numbness in your groin or inner thighs, trouble controlling your bladder or bowels, new leg weakness, fever, or pain after a serious fall or injury.`],
  ["anklemdm", "MDM", "Ankle / foot injury (Ottawa)", "ankle sprain|ankle injury|s93.401a|ankle pain|ottawa ankle|foot injury|s93.601a|rolled ankle|inversion injury|s99.911a", ["S93.401A", "S93.601A"],
`MDM: ***-year-old with {inversion/***} injury to the {right/left} ankle at ***.
Ottawa ankle/foot rules: {negative: able to bear weight 4 steps, no malleolar or midfoot bony tenderness / positive: ***}.
Neurovascularly intact distally. No proximal fibula tenderness (Maisonneuve), Achilles intact (Thompson negative), no Lisfranc tenderness.
{X-ray: ***}.
Assessment: {lateral ankle sprain / ***}. Treatment: {RICE, ankle brace, weight-bearing as tolerated, NSAIDs / ***}. Ortho/PCP follow-up if not improving in 1–2 weeks.`],
  ["fxmdm", "MDM", "Closed fracture", "fracture|fx|closed fracture|broken bone|distal radius fracture|s52.501a|wrist fracture|s62.90xa|clavicle fracture|s42.009a|splint", ["S52.501A", "S62.90XA", "S42.009A"],
`MDM: ***-year-old with *** after ***. X-ray: ***.
Skin intact, no tenting (closed fracture). Neurovascularly intact before and after splinting: ***. Compartments soft.
Considered associated injuries: ***.
Treatment: analgesia ***, {reduction (see procedure note) / no reduction needed}, *** splint applied (see procedure note).
Orthopedics (Dr. ***) {consulted / follow-up in *** days}. Splint care and compartment syndrome precautions reviewed.`],
  ["lacmdm", "MDM", "Laceration", "laceration|lac|cut|s01.81xa|s61.411a|wound|skin tear|t14.8xxa|repair|sutures", ["S01.81XA", "S61.419A", "T14.8XXA"],
`MDM: ***-year-old with *** cm laceration to *** from *** at ***.
Explored in a bloodless field: no foreign body, tendon, nerve, vessel or joint involvement. Distal motor, sensory and vascular function intact.
{X-ray for foreign body: ***.} Tetanus: {up to date / Tdap given}.
Repaired primarily (see procedure note). Wound care and suture removal in *** days reviewed; return for signs of infection.`],
  ["elderfall", "MDM", "Fall in older adult", "fall|elderly fall|w19.xxxa|w18.30xa|ground level fall|glf|mechanical fall|geriatric fall|found down", ["W19.XXXA", "W18.30XA"],
`MDM: ***-year-old with fall at *** from {standing/***}. Mechanism: {mechanical trip / unclear / preceded by ***}. Head strike ***; LOC ***; anticoagulant/antiplatelet ***. Time down ***.
Considered syncope/arrhythmia, stroke, infection, medication effect, dehydration, hypoglycemia, and injuries including ICH, C-spine, hip/pelvic, rib and wrist fractures; rhabdomyolysis if prolonged downtime (CK ***).
Exam: ***. Workup: ***.
Assessment: ***. Ambulated safely with {assistance/***} before discharge; {PT/home safety referral}. Medication list reviewed for fall-risk drugs.`],
  ["burnmdm", "MDM", "Burn", "burn|burns|t30.0|thermal burn|scald|t24.011a|t23.201a|sunburn|partial thickness burn", ["T30.0", "T23.201A"],
`MDM: ***-year-old with {thermal/scald/chemical/electrical} burn to *** at ***.
Depth: {superficial / superficial partial / deep partial / full thickness}. TBSA (excluding superficial) *** %.
Airway: no singed nasal hair, carbonaceous sputum, voice change or stridor. Circumferential: ***.
Burn center referral criteria reviewed (ABA): {not met / met: ***}.
Treatment: cool water irrigation, analgesia ***, {blisters ***}, dressing ***. Tetanus ***. Follow-up ***.`],
]);
