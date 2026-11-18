// PEDIATRIC WEIGHT-BASED DOSING HELPER (Clinical tools card ".pedsdose").
// drug({ name, use, mgPerKg, maxMg, conc: [[label, mgPerMl], ...], freq, note, bands? })
// bands (optional): fixed doses by weight, [[minKg, maxKg, mg], ...] — used instead of mgPerKg.
// Verify against your pharmacy, the product label and local protocols; doses here are common ED doses, not orders.

add("Peds", [
  ["*pedsdose", "Score", "Pediatric weight-based dosing helper", "pediatric dosing|peds dosing|weight based dose|dose calculator|tylenol dose|acetaminophen dose|ibuprofen dose|motrin dose|dexamethasone dose|amoxicillin dose|zofran dose|ondansetron dose|prednisolone dose|mg/kg", [],
`Weight *** kg (measured {today / ***}). Dose: *** = *** mg = *** mL of *** mg/mL ***, {PO / ODT}, ***. Checked against maximum dose: ***.`],
]);

drug({ name: 'Acetaminophen (Tylenol)', use: 'Fever or pain', mgPerKg: 15, maxMg: 1000,
  conc: [['160 mg/5 mL liquid', 32]], freq: 'every 4–6 h as needed (no more than 5 doses in 24 h)',
  note: 'Max 75 mg/kg/day, not over 4 g/day. Under 3 months: per physician.' });
drug({ name: 'Ibuprofen (Motrin/Advil)', use: 'Fever or pain, age 6 months and older', mgPerKg: 10, maxMg: 400,
  conc: [["100 mg/5 mL children's liquid", 20], ['50 mg/1.25 mL infant drops', 40]], freq: 'every 6–8 h as needed',
  note: 'Max 40 mg/kg/day. Infant drops and children’s liquid are different strengths.' });
drug({ name: 'Dexamethasone', use: 'Croup or asthma', mgPerKg: 0.6, maxMg: 16,
  conc: [['1 mg/mL oral solution', 1], ['10 mg/mL injectable, given PO', 10]], freq: 'once',
  note: 'Croup: 0.15–0.3 mg/kg is also effective. Asthma: a second dose may be given the next day.' });
drug({ name: 'Prednisolone', use: 'Asthma (alternative to dexamethasone)', mgPerKg: 2, maxMg: 60,
  conc: [['15 mg/5 mL liquid', 3]], freq: 'once daily for 3–5 days', note: '1–2 mg/kg/day, max 60 mg.' });
drug({ name: 'Amoxicillin, high dose', use: 'Acute otitis media, pneumonia', mgPerKg: 45, maxMg: 2000,
  conc: [['400 mg/5 mL suspension', 80], ['250 mg/5 mL suspension', 50]], freq: 'twice daily (90 mg/kg/day)',
  note: 'AOM: 10 days if under 2 y, 7 days at 2–5 y, 5–7 days at 6 y and older.' });
drug({ name: 'Ondansetron (Zofran)', use: 'Vomiting with gastroenteritis, age 6 months and older', bands: [[8, 15, 2], [15, 30, 4], [30, 999, 8]],
  conc: [['ODT tablet (whole or half tablet)', 0], ['4 mg/5 mL oral solution', 0.8]], freq: 'once in the ED; may prescribe every 8 h as needed',
  note: 'Weight bands: 8–15 kg 2 mg, 15–30 kg 4 mg, over 30 kg 8 mg. Under 8 kg: per physician.' });
