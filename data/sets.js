// NOTE SETS: one copy builds the provider's note for an impression from several phrases, in order.
// set(dot, title, impressions, [phrase dot names]). Discharge instructions are left out: they go to the patient, not the note.

set('cpset', 'Chest pain: full note', 'chest pain|cp|chest pain note|chest pain workup|atypical chest pain', ['cpmdm', 'ecgread', 'heart', 'mdmdata', 'dispo']);
set('sobset', 'Shortness of breath: full note', 'shortness of breath|sob|dyspnea|sob note', ['sobmdm', 'ecgread', 'wellspe', 'mdmdata', 'dispo']);
set('afibset', 'AFib with RVR: full note', 'afib|afib rvr|atrial fibrillation|afib note', ['afibmdm', 'ecgread', 'mdmdata', 'dispo']);
set('syncset', 'Syncope: full note', 'syncope|passed out|syncope note', ['syncmdm', 'ecgread', 'mdmdata', 'dispo']);
set('sepsisset', 'Sepsis: full note', 'sepsis|septic shock|sepsis note|sep-1', ['sepsismdm', 'sepsisreassess', 'mdmdata', 'admit']);
set('strokeset', 'Stroke alert: full note', 'stroke|stroke alert|code stroke|stroke note', ['strokemdm', 'mdmdata', 'admit']);
set('headinjset', 'Minor head injury, adult: full note', 'head injury|head trauma|concussion|head injury note|adult head injury', ['headinj', 'ccspine', 'mdmdata', 'dispo']);
set('pedsheadset', 'Head injury, child: full note', 'pediatric head injury|peds head injury|child head injury|head injury child|toddler head injury|infant head injury|peds head injury note', ['pedshead', 'mdmdata', 'pedsdispo']);
set('abdset', 'Abdominal pain: full note', 'abdominal pain|abd pain|abdominal pain note', ['abdmdm', 'mdmdata', 'dispo']);
set('stoneset', 'Kidney stone: full note', 'kidney stone|renal colic|flank pain|kidney stone note', ['stonemdm', 'mdmdata', 'dispo']);
set('backset', 'Low back pain: full note', 'back pain|low back pain|back pain note', ['backmdm', 'mdmdata', 'dispo']);
set('lacset', 'Laceration: full note', 'laceration|lac|laceration note|cut', ['lacmdm', 'lacrepair', 'dispo']);
set('odset', 'Opioid overdose: full note', 'overdose|opioid overdose|od note', ['odmdm', 'mdmdata', 'dispo']);
set('pedsfeverset', 'Pediatric fever: full note', 'peds fever|pediatric fever|fever child|peds fever note', ['pedsfever', 'mdmdata', 'pedsdispo']);
set('pnaset', 'Pneumonia: full note', 'pneumonia|pna|cap|pneumonia note', ['pnamdm', 'curb65', 'mdmdata', 'dispo']);
