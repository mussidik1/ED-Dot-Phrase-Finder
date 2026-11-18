// ADDED COVERAGE: joints, bites, foreign bodies, pediatric ortho, refills, psychiatric petitions.

add("Trauma & MSK", [
  ["*goutmdm", "MDM", "Acute monoarthritis / gout", "gout|m10.9|m10.071|joint pain|m25.50|swollen joint|monoarthritis|septic joint|septic arthritis|m00.9|podagra|joint swelling|hot joint", ["M10.9", "M25.50", "M00.9"],
`MDM: ***-year-old with acute {right/left} *** pain, swelling and redness for ***. {Prior gout: ***.}
Considered septic arthritis, gout/pseudogout, cellulitis, trauma/fracture, reactive arthritis, disseminated gonococcal infection and Lyme arthritis.
Fever ***. Range of motion: {painful but present / severely limited}. Skin: ***.
{Arthrocentesis (see procedure note): WBC ***, crystals ***, Gram stain ***, culture sent.} {Labs: WBC ***, ESR/CRP ***, uric acid ***.} {X-ray: ***.}
Assessment: {acute gout flare / septic arthritis not excluded: ***}.
Treatment: {NSAID *** / colchicine *** / prednisone ***} (chosen per renal function, GI risk and comorbidities). Continue home urate-lowering therapy if already taking. PCP/rheumatology follow-up; return for fever or worsening swelling.`],
  ["*bitemdm", "MDM", "Animal bite", "dog bite|w54.0xxa|cat bite|w55.01xa|animal bite|bite wound|t14.8xxa|rabies|human bite|w50.3xxa", ["W54.0XXA", "W55.01XA", "T14.8XXA"],
`MDM: ***-year-old bitten by {own/known/unknown/stray} {dog/cat/***} on the *** at ***.
Wound: *** cm {puncture/laceration/avulsion}. Explored: no tendon, joint, bone or neurovascular involvement; no foreign body (tooth). {X-ray ***.}
Considered closed-space hand infection, septic arthritis/tenosynovitis, fracture and crush injury.
Irrigated with *** mL normal saline. Closure: {left open / loosely approximated / primary closure of facial wound}.
Antibiotic prophylaxis: {amoxicillin-clavulanate ×3–5 days for cat bite, hand/face, deep puncture, crush, or immunocompromise / not indicated because ***}.
Tetanus: {up to date / Tdap given}.
Rabies: {animal available for 10-day observation; reported to animal control / post-exposure prophylaxis started: RIG *** IU and vaccine dose 1 / not indicated: ***}. Wound check in 48 h.`],
  ["*scfe", "MDM", "Pediatric limp / SCFE", "scfe|slipped capital femoral epiphysis|m93.003|limp|r26.89|hip pain child|knee pain child|transient synovitis|m67.351|septic hip|perthes", ["M93.003", "R26.89", "M67.351"],
`MDM: ***-year-old with *** of {limp/hip pain/thigh or knee pain}. Trauma: ***. Fever: ***. Able to bear weight: ***.
Considered SCFE (hip or knee pain in adolescent; obligate external rotation with hip flexion: ***), septic arthritis (Kocher criteria ***), transient synovitis, Legg-Calvé-Perthes, osteomyelitis, fracture (including toddler's fracture), and malignancy.
X-ray AP and frog-leg lateral of both hips: ***. {Labs: WBC ***, ESR ***, CRP ***.} {Hip US: effusion ***.}
Assessment: ***.
{SCFE: non-weight-bearing, orthopedics (Dr. ***) consulted for urgent fixation / Transient synovitis: NSAIDs, return precautions, recheck in 24–48 h}.`],
  ["nursemaid", "Procedure", "Radial head subluxation (nursemaid's elbow) reduction", "nursemaids elbow|nursemaid elbow|radial head subluxation|s53.031a|pulled elbow|elbow child not using arm", ["S53.031A", "S53.032A"],
`Procedure: reduction of radial head subluxation, {right/left}
History of {pull/lift/fall} at ***, child holding arm pronated and refusing to use it. No swelling, deformity, bruising or point tenderness to suggest fracture.
Technique: {hyperpronation / supination-flexion} with thumb over the radial head; palpable click felt: {yes/no}.
Result: child using arm normally at *** min after reduction. {X-ray not indicated / X-ray *** because not using arm after 2 attempts.}
Caregiver taught to avoid lifting or pulling by the hands and wrists; recurrence is common before age 5.`],
]);

add("Skin, HEENT & Eye", [
  ["*fbent", "MDM", "Ear / nose foreign body", "foreign body ear|t16.9xxa|foreign body nose|t17.1xxa|object in ear|object in nose|bead in nose|insect in ear|button battery nose", ["T16.9XXA", "T17.1XXA"],
`MDM: ***-year-old with {nasal/ear} foreign body ({***}) placed or noted at ***.
Button battery or magnets excluded by history and exam: {yes / *** — button battery is an emergency: immediate removal}. {Live insect in ear: immobilized with lidocaine/mineral oil before removal.}
Airway intact, no stridor or respiratory distress. TM {intact/***}.
Removal: {positive pressure ("parent's kiss") / suction / alligator forceps / curette / irrigation (not for vegetable matter or perforated TM)} on attempt ***. Object removed intact; re-examined: no residual foreign body or second object, minimal mucosal or canal trauma.
{Unable to remove: ENT follow-up ***.} Return precautions given.`],
  ["*dentaltrauma", "MDM", "Dental trauma / avulsed tooth", "dental trauma|avulsed tooth|s03.2xxa|knocked out tooth|tooth fracture|s02.5xxa|broken tooth|dental injury", ["S03.2XXA", "S02.5XXA"],
`MDM: ***-year-old with dental injury to tooth #*** at ***.
{Primary/permanent} tooth. Injury: {Ellis I enamel / Ellis II dentin / Ellis III pulp exposed / avulsion / luxation}.
Considered aspiration of tooth fragment (CXR if missing ***), alveolar or mandible fracture, and intraoral laceration.
{Avulsed permanent tooth: extraoral time ***; stored in ***; rinsed and reimplanted at ***, splinted to adjacent teeth. Primary teeth are not reimplanted.}
{Exposed dentin/pulp: covered with ***.} Analgesia ***. Tetanus ***. {Antibiotic for reimplanted tooth: ***.}
Dentist follow-up within {24 h / ***}; soft diet.`],
]);

add("General", [
  ["*refill", "Note", "Medication refill", "medication refill|med refill|z76.0|refill|out of medication|ran out of meds|prescription refill|bridge prescription", ["Z76.0"],
`MDM: ***-year-old presenting for refill of *** after {running out / losing access to PCP / ***} on ***.
No acute complaints; vital signs reviewed: ***. Screened for complications of untreated condition: ***.
{PDMP checked for controlled substance: ***.} {Controlled substances not prescribed from the ED.}
Bridge prescription: *** for {7 / 14 / 30} days. PCP or clinic follow-up arranged: ***. Patient instructed this is a one-time bridge.`],
  ["*petition", "Note", "Emergency petition / involuntary hold", "emergency petition|involuntary hold|petition|5150|psych hold|involuntary commitment|emergency evaluation|ep|certificate", [],
`Involuntary evaluation: The patient was {brought in on an emergency petition by *** / evaluated by me for an emergency petition}.
Based on my examination, the patient appears to have a mental disorder and presents a danger to {self/others} because ***.
The patient {is unwilling / is unable} to be admitted voluntarily. Less restrictive alternatives considered: ***.
{Certificate/petition completed per state law at ***.} Medical stability: ***. Safety: {1:1 observation / belongings secured}. Psychiatry/crisis team notified at ***.
Patient informed of the hold and their rights.`],
]);

// Spanish discharge instructions. Have a certified medical interpreter or translator review before routine use.
add("General", [
  ["cpdces", "Discharge", "Chest pain, discharge (Spanish)", "spanish|español|espanol|dolor de pecho|chest pain spanish|discharge spanish|chest pain", ["R07.9"],
`Sus pruebas del corazón de hoy (electrocardiograma y análisis de sangre) no mostraron un ataque al corazón. Esto es tranquilizador, pero el dolor de pecho puede tener muchas causas y no todas se pueden descartar en una sola visita.

- Haga una cita con *** en {2 a 3 días / 1 semana}.
- Siga tomando sus medicinas de siempre. ***

Llame al 911 (no maneje usted mismo) si el dolor de pecho empeora o dura más de unos minutos, si el dolor se pasa al brazo, la mandíbula o la espalda, si le falta el aire, suda, se desmaya, o siente el corazón muy rápido o irregular.`],
  ["abddces", "Discharge", "Abdominal pain, discharge (Spanish)", "spanish|español|espanol|dolor de estómago|dolor abdominal|abdominal pain spanish|discharge spanish|abdominal pain", ["R10.9"],
`Hoy no encontramos una causa peligrosa de su dolor de estómago. Algunas enfermedades, como la apendicitis temprana, pueden tardar en aparecer, así que vigílese con cuidado.

- Coma comidas suaves y tome líquidos. ***
- Vuelva a ver a *** en 1 a 2 días.

Regrese de inmediato si el dolor empeora o se mueve al lado derecho de abajo, si tiene fiebre, vómitos que no paran, sangre en el vómito o en las heces, heces negras, el estómago duro o hinchado, o si se desmaya.`],
  ["pedsfeverdces", "Discharge", "Pediatric fever, discharge (Spanish)", "spanish|español|espanol|fiebre|fiebre niño|pediatric fever spanish|discharge spanish|peds fever", ["R50.9"],
`Su niño tiene fiebre, probablemente por un virus. La fiebre en sí no hace daño; es la manera en que el cuerpo combate la infección.

- Acetaminofén (Tylenol): *** mL de *** cada 4 a 6 horas si lo necesita (no más de 5 dosis en 24 horas).
- {Ibuprofeno (Motrin/Advil, desde los 6 meses): *** mL de *** cada 6 a 8 horas si lo necesita.}
- Dele líquidos seguido. Cuente los pañales mojados; debe tener al menos uno cada 6 a 8 horas.
- Lleve a su niño al pediatra en *** días, o antes si la fiebre dura más de 3 días.

Regrese de inmediato si su niño tiene dificultad para respirar, el cuello rígido, un sarpullido que no se quita al apretarlo, menos pañales mojados, mucho sueño o le cuesta despertar, una convulsión, o si usted siente que está muy enfermo.`],
  ["gastrodces", "Discharge", "Vomiting and diarrhea, discharge (Spanish)", "spanish|español|espanol|vómito|vomito|diarrea|gastroenteritis spanish|discharge spanish|gastroenteritis", ["A09"],
`Lo más probable es que tenga un virus del estómago. Por lo general mejora en 2 a 3 días.

- Tome traguitos pequeños seguido: agua, suero oral o bebidas deportivas. Empiece con 1 a 2 onzas cada 10 a 15 minutos.
- Use *** para las náuseas como se le recetó.
- Coma comidas sencillas cuando se sienta listo.
- Lávese bien las manos; el virus se contagia fácilmente.

Regrese si los vómitos no paran, no ha orinado en 8 horas, tiene sangre en el vómito o en las heces, heces negras, dolor fuerte de estómago, fiebre alta, o se siente débil, mareado o confundido.`],
  ["backdces", "Discharge", "Back pain, discharge (Spanish)", "spanish|español|espanol|dolor de espalda|back pain spanish|discharge spanish|back pain", ["M54.50"],
`Lo más probable es que su dolor de espalda venga de un músculo o una articulación lastimada. La mayoría mejora en 2 a 6 semanas.

- Manténgase activo; caminar ayuda. No se quede en cama.
- Use calor y *** para el dolor como se le indicó.
- Vea a *** en 1 a 2 semanas si no mejora.

Regrese de inmediato si siente adormecida la zona de la ingle o la parte de adentro de los muslos, no puede controlar la orina o las heces, tiene debilidad nueva en las piernas, fiebre, o dolor después de una caída o golpe fuerte.`],
  ["concussdces", "Discharge", "Head injury, discharge (Spanish)", "spanish|español|espanol|golpe en la cabeza|conmoción|concussion spanish|head injury spanish|discharge spanish|head injury", ["S06.0X0A"],
`Usted tuvo un golpe en la cabeza. Su examen {y la tomografía} no mostraron sangrado ni fractura del cráneo.

- Descanse el cerebro 24 a 48 horas: use poco el teléfono, la computadora y la lectura, y vuelva poco a poco a sus actividades según se sienta.
- No haga deportes ni actividades donde se pueda volver a golpear la cabeza hasta que un médico lo autorice.
- Use acetaminofén (Tylenol) para el dolor de cabeza. ***
- Pida que alguien se quede con usted esta noche.

Regrese de inmediato si el dolor de cabeza empeora, vomita varias veces, está confundido, tiene mucho sueño o le cuesta despertar, tiene una convulsión, debilidad o adormecimiento, dificultad para hablar o caminar, o le sale líquido claro de la nariz o los oídos.`],
  ["stonedces", "Discharge", "Kidney stone, discharge (Spanish)", "spanish|español|espanol|piedra en el riñón|cálculo renal|kidney stone spanish|discharge spanish|kidney stone", ["N20.1"],
`Usted tiene una piedra en el riñón. La mayoría de las piedras de este tamaño salen solas en unas semanas.

- Tome *** para el dolor. {Tome tamsulosina todos los días para ayudar a que salga la piedra; puede marearse al ponerse de pie.}
- Tome mucha agua. Cuele la orina y guarde la piedra para su urólogo.
- Llame a urología (***) para una cita en 1 semana.

Regrese de inmediato si tiene fiebre o escalofríos, dolor que no se controla con su medicina, vómitos que no le dejan tomar líquidos ni medicinas, u orina muy poco.`],
]);
