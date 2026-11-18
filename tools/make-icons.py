# Render app icons from an SVG note card (gold dot, ECG trace, text lines). Usage: python3 tools/make-icons.py src/icons
import sys
from playwright.sync_api import sync_playwright
def svg(scale):
    # scale: size of the artwork relative to the tile (1.0 = full, smaller for maskable safe zone)
    s = scale
    return f'''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="512" height="512">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#132A4C"/><stop offset="1" stop-color="#07111F"/></linearGradient>
    <filter id="sh" x="-20%" y="-20%" width="140%" height="140%"><feDropShadow dx="0" dy="10" stdDeviation="14" flood-color="#000" flood-opacity="0.45"/></filter>
  </defs>
  <rect width="512" height="512" fill="url(#bg)"/>
  <g transform="translate(256 256) scale({s}) translate(-256 -256)">
    <!-- note card -->
    <g filter="url(#sh)">
      <rect x="104" y="80" width="304" height="352" rx="38" fill="#F1EEE4"/>
    </g>
    <!-- the dot -->
    <circle cx="170" cy="160" r="36" fill="#F2C14E"/>
    <!-- first line: short text next to the dot -->
    <rect x="226" y="146" width="142" height="30" rx="15" fill="#0A1628"/>
    <!-- ECG line -->
    <polyline points="150,262 214,262 236,226 262,312 286,242 302,262 362,262" fill="none" stroke="#E2554A" stroke-width="20" stroke-linecap="round" stroke-linejoin="round"/>
    <!-- text lines -->
    <rect x="150" y="334" width="212" height="22" rx="11" fill="#8E9BB5"/>
    <rect x="150" y="372" width="144" height="22" rx="11" fill="#8E9BB5"/>
  </g>
</svg>'''
open('/tmp/icon/icon.svg','w').write(svg(1.0)); open('/tmp/icon/maskable.svg','w').write(svg(0.78))
out = sys.argv[1]
targets = [('icon-512.png','icon.svg',512),('icon-192.png','icon.svg',192),('apple-touch-icon.png','icon.svg',180),('favicon-32.png','icon.svg',32),('maskable-512.png','maskable.svg',512)]
with sync_playwright() as p:
    b = p.chromium.launch(executable_path='/usr/bin/google-chrome')
    for name, src, size in targets:
        pg = b.new_page(viewport={'width':size,'height':size})
        pg.set_content('<html><body style="margin:0">' + open("/tmp/icon/"+src).read().replace('width="512" height="512"', f'width="{size}" height="{size}" style="display:block"', 1) + '</body></html>')
        pg.wait_for_timeout(150)
        pg.screenshot(path=f'{out}/{name}')
        pg.close()
    b.close()
print('ok')
