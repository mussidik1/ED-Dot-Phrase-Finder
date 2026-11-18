"""Check every ICD-10-CM code in data/*.js and write their descriptions to data/icd10.json.
Usage: python3 tools/icd-labels.py   (needs: pip install simple-icd-10-cm)
Fails on any invalid or non-billable code.
"""
import json, os, subprocess, sys
import simple_icd_10_cm as cm

ROOT = os.path.join(os.path.dirname(os.path.abspath(__file__)), '..')
codes = json.loads(subprocess.check_output(['node', os.path.join(ROOT, 'tools', 'list-icd.mjs')]))
bad, out = [], {}
for c in sorted(set(codes)):
    if not cm.is_valid_item(c):
        bad.append(f'{c}: not a valid ICD-10-CM code')
    elif not cm.is_leaf(c):
        bad.append(f'{c}: valid but not billable (needs more characters)')
    else:
        out[c] = cm.get_description(c)
if bad:
    print('\n'.join(bad)); sys.exit(1)
with open(os.path.join(ROOT, 'data', 'icd10.json'), 'w') as f:
    json.dump(out, f, indent=1, sort_keys=True)
print(f'{len(out)} ICD-10-CM codes checked and written to data/icd10.json')
