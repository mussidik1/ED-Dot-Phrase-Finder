# ED Dot Phrase Finder

Type a clinical impression and get emergency medicine dot phrase templates: MDMs, discharge instructions, decision rules and procedure notes. Tap a card to copy the text, then paste it into the note. Works offline as a Home Screen app.

**Open it:** https://mussidik1.github.io/ED-Dot-Phrase-Finder/

## Add it to your Home Screen

- **iPhone:** open the link in Safari, tap Share, then **Add to Home Screen**.
- **Android:** open the link in Chrome, tap the menu, then **Install app** (or **Add to Home screen**).

## What it does

- Forgiving search: impressions as you'd say them ("chest pain", "AFib RVR", "kidney stone", "55 yo male with chest pain"), abbreviations (CP, SOB, AMS, GIB, N/V/D, I&D), typos, ICD-10 codes (`I48.91`) and dot names (`.cpmdm`).
- One impression returns every matching template. "Chest pain" gives the MDM, HEART score, PERC, ECG read and discharge instructions.
- Tap a card to copy its full text. "Show full text" previews it with blanks (`***`) and choices (`{a/b}`) highlighted. Star favorites; recently copied phrases show on the home screen.
- **Fill in and copy:** tap the options, type into the blanks, copy finished text. Nothing typed is saved.
- **Calculators** on HEART, Wells PE, PERC, CURB-65, NEXUS and Canadian CT Head; copy a one-line result.
- **Full-note sets** build the provider note for an impression from several phrases in one copy (`data/sets.js`).
- **My phrases:** edit any template or write your own, saved on the device; export/import files, including group "packs".
- **Shared library** (Supabase): optionally submit a phrase for review; approved ones appear under Community. Optional, off-by-default reporting of searches that find nothing.
- Spanish discharge instructions for common complaints (have a certified interpreter review them).
- Each card shows its clinical review status (`data/reviews.js`, named human reviewers only).
- Typical ICD-10-CM codes on each impression; tap one to copy it.
- Same look and settings as the CPT Look-Up Tool: navy, light or match-device colors, three text sizes.

## The phrase database

The database is the `data/` folder in this repo, one file per section, one row per phrase:

```js
["*cpmdm", "MDM", "Chest pain", "chest pain|cp|atypical chest pain|...", ["R07.9", "R07.89"], `MDM: ***-year-old with chest pain ...`],
```

| Field | Meaning |
|---|---|
| dot name | Lowercase letters/numbers. A leading `*` marks the main phrase for that impression (ranks a little higher). |
| type | `MDM`, `Discharge`, `Procedure`, `Score`, `Exam` or `Note` |
| title | Shown on the card |
| impressions | The words people will search, separated by `\|` |
| ICD-10-CM | Typical billable codes. After editing, run `python3 tools/icd-labels.py` (needs `pip install simple-icd-10-cm`); it rejects invalid or non-billable codes and writes `data/icd10.json`. |
| text | The template. `***` = blank to fill. `{this/that}` = pick one. |

To add your group's own phrases, add rows (or a new `data/10-*.js` file) and redeploy. A group's Epic SmartPhrases can be exported or shared from SmartPhrase Manager; paste the text into a row and keep their name as the dot name.

## Shared library (Supabase)

Project `ed-dot-phrase-finder`, tables `submissions` and `search_gaps`, with row-level security: the public key can only insert pending submissions, read approved ones, and insert empty-search words. To approve a phrase, open the Supabase dashboard → Table editor → `submissions`, and change `status` from `pending` to `approved`. The most-missed searches are in the `top_search_gaps` view (SQL editor: `select * from top_search_gaps;`).

## Build and publish

```bash
npm install                                   # fonts used by the app
npm test                                      # validates the database and runs ~300 search checks
npm run build                                 # writes the site to ./site
REPORT_EMAIL=you@example.org npm run deploy   # builds, tests and publishes ./site to the gh-pages branch
```

Then in the repo's GitHub settings, **Pages → Source: Deploy from a branch → gh-pages / root**. `REPORT_EMAIL` fills in the "Problems or suggestions?" links; leave it out to hide them.

## Important

These are original templates written for this app. They are not the official SmartPhrases of any hospital, health system or physician group. They are documentation aids, not clinical guidelines: confirm doses, decision rules and local protocols, and delete anything that wasn't done. Nothing typed into the app is stored or sent anywhere. Epic and SmartPhrase are trademarks of Epic Systems Corporation; this project is not affiliated with Epic.
