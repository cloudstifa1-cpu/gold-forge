#!/usr/bin/env python3
"""Builds Gold Forge: dist/ (GitHub Pages PWA) and artifact/gold-forge.html (preview)."""
import glob, json, os, shutil
from PIL import Image, ImageDraw, ImageFont

ROOT = os.path.dirname(os.path.abspath(__file__))
SRC = os.path.join(ROOT, 'src')
DIST = os.path.dirname(ROOT)  # repo root (served by GitHub Pages)
ART = os.path.join(ROOT, 'artifact')
VERSION = 'gf-v1'

def read(p):
    with open(p, encoding='utf-8') as f:
        return f.read()

css = read(os.path.join(SRC, 'app.css'))
js = read(os.path.join(SRC, 'core.js'))
for p in sorted(glob.glob(os.path.join(SRC, 'data', '*.js'))):
    js += '\n' + read(p)
js += '\n' + read(os.path.join(SRC, 'app.js'))
js = js.replace('</script', '<\\/script')

FONTS = ('<link rel="preconnect" href="https://fonts.googleapis.com">'
         '<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>'
         '<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Atkinson+Hyperlegible:wght@400;700'
         '&family=Big+Shoulders+Display:wght@800;900&family=IBM+Plex+Mono:wght@400;700&display=swap">')

BODY = '''<div class="bar"><div class="wrap">
<button class="back" id="back" aria-label="Back" hidden>‹</button>
<button class="brand" id="brand" aria-label="Home">Gold <span>Forge</span></button>
<div class="sz"><button id="aminus" aria-label="Smaller text">A−</button><button id="aplus" aria-label="Bigger text">A+</button></div>
</div></div>
<main id="app"></main>
<noscript><p style="padding:16px">Gold Forge needs JavaScript turned on.</p></noscript>
'''

HEAD_COMMON = ('<title>Gold Forge</title>\n'
               '<meta name="claude:viewport-fit-sides" content="cover">\n'
               '<meta name="description" content="Metallurgy study guide: assaying, extraction, smelting, refining, and metals.">\n')

# ---------- PWA (full document) ----------
os.makedirs(DIST, exist_ok=True)
pwa = ('<!doctype html>\n<html lang="en">\n<head>\n<meta charset="utf-8">\n'
       '<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">\n'
       + HEAD_COMMON +
       '<meta name="theme-color" content="#1E1B16">\n'
       '<meta name="apple-mobile-web-app-capable" content="yes">\n'
       '<meta name="mobile-web-app-capable" content="yes">\n'
       '<meta name="apple-mobile-web-app-title" content="Gold Forge">\n'
       '<meta name="apple-mobile-web-app-status-bar-style" content="black-translucent">\n'
       '<link rel="manifest" href="manifest.webmanifest">\n'
       '<link rel="icon" href="icon-192.png" type="image/png">\n'
       '<link rel="apple-touch-icon" href="apple-touch-icon.png">\n'
       + FONTS + '\n<style>\n:root{padding-top:env(safe-area-inset-top,0px);padding-bottom:env(safe-area-inset-bottom,0px)}\n'
       + css + '\n</style>\n</head>\n<body>\n' + BODY + '<script>\n' + js + '\n</script>\n</body>\n</html>\n')
with open(os.path.join(DIST, 'index.html'), 'w', encoding='utf-8') as f:
    f.write(pwa)

manifest = {
    "name": "Gold Forge", "short_name": "Gold Forge",
    "description": "Metallurgy study guide: assaying, extraction, smelting, refining, and metals.",
    "start_url": "./", "scope": "./", "display": "standalone", "orientation": "portrait",
    "background_color": "#14120E", "theme_color": "#1E1B16",
    "icons": [
        {"src": "icon-192.png", "sizes": "192x192", "type": "image/png", "purpose": "any"},
        {"src": "icon-512.png", "sizes": "512x512", "type": "image/png", "purpose": "any"},
        {"src": "icon-maskable-512.png", "sizes": "512x512", "type": "image/png", "purpose": "maskable"}
    ]
}
with open(os.path.join(DIST, 'manifest.webmanifest'), 'w') as f:
    json.dump(manifest, f, indent=2)

sw = '''const CACHE='%s';
const CORE=['./','index.html','manifest.webmanifest','icon-192.png','icon-512.png','icon-maskable-512.png','apple-touch-icon.png'];
self.addEventListener('install',e=>{e.waitUntil(caches.open(CACHE).then(c=>c.addAll(CORE)).then(()=>self.skipWaiting()));});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(ks=>Promise.all(ks.filter(k=>k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim()));});
self.addEventListener('fetch',e=>{
  const req=e.request; if(req.method!=='GET')return;
  const url=new URL(req.url);
  if(url.origin===location.origin){
    // App files: network first (so updates arrive), cache as backup for offline use.
    e.respondWith(fetch(req).then(r=>{const c=r.clone();caches.open(CACHE).then(x=>x.put(req,c));return r;}).catch(()=>caches.match(req).then(r=>r||caches.match('index.html'))));
  } else if(url.hostname.endsWith('fonts.googleapis.com')||url.hostname.endsWith('fonts.gstatic.com')){
    // Fonts: cache first.
    e.respondWith(caches.match(req).then(r=>r||fetch(req).then(n=>{const c=n.clone();caches.open(CACHE).then(x=>x.put(req,c));return n;})));
  }
});
''' % VERSION
with open(os.path.join(DIST, 'sw.js'), 'w') as f:
    f.write(sw)
open(os.path.join(DIST, '.nojekyll'), 'w').close()

# ---------- icons: a stamped gold bar ----------
def icon(size, pad_ratio, path):
    S = 1024
    im = Image.new('RGBA', (S, S), (20, 18, 14, 255))
    d = ImageDraw.Draw(im)
    p = int(S * pad_ratio)
    # trapezoid ingot
    top_w, bot_w, h = S - 2*p - 220, S - 2*p, int((S - 2*p) * 0.52)
    cx, cy = S // 2, S // 2 + 20
    pts = [(cx - top_w//2, cy - h//2), (cx + top_w//2, cy - h//2), (cx + bot_w//2, cy + h//2), (cx - bot_w//2, cy + h//2)]
    d.polygon(pts, fill=(227, 184, 71, 255))
    inset = 34
    pts2 = [(cx - top_w//2 + inset, cy - h//2 + inset), (cx + top_w//2 - inset, cy - h//2 + inset),
            (cx + bot_w//2 - inset - 20, cy + h//2 - inset), (cx - bot_w//2 + inset + 20, cy + h//2 - inset)]
    d.polygon(pts2, fill=(242, 205, 104, 255))
    # stamped "Au"
    font = None
    for fp in ['/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf', '/usr/share/fonts/dejavu/DejaVuSans-Bold.ttf']:
        if os.path.exists(fp):
            font = ImageFont.truetype(fp, int(h * 0.55)); break
    if font is None:
        font = ImageFont.load_default()
    tb = d.textbbox((0, 0), 'Au', font=font)
    tw, th = tb[2] - tb[0], tb[3] - tb[1]
    d.text((cx - tw/2 - tb[0], cy - th/2 - tb[1]), 'Au', fill=(122, 86, 10, 255), font=font)
    im.resize((size, size), Image.LANCZOS).convert('RGB').save(path)

icon(192, 0.12, os.path.join(DIST, 'icon-192.png'))
icon(512, 0.12, os.path.join(DIST, 'icon-512.png'))
icon(512, 0.22, os.path.join(DIST, 'icon-maskable-512.png'))
icon(180, 0.12, os.path.join(DIST, 'apple-touch-icon.png'))

readme = '''# Gold Forge

Metallurgy study app: assaying (fire assay), gold recovery from mine to 99.99% bar, extraction and smelting of every major metal, chemistry, alloys, heat treatment, forming, corrosion, safety, glossary, and quizzes.

Works on Android, iPhone, and desktop. Installs to the home screen and works offline after the first visit.

## Put it online (GitHub Pages)
1. Push everything in this folder to a GitHub repo (the files must be at the repo root).
2. Repo **Settings → Pages → Source: Deploy from a branch → main / root → Save**.
3. Open `https://<your-username>.github.io/<repo-name>/`.

## Install on a phone
- **Android (Chrome):** open the link → menu ⋮ → **Install app** (or "Add to Home screen").
- **iPhone (Safari only):** open the link → Share button → **Add to Home Screen**.

## Updating content
Edit the files in `source/src/data/`, run `python3 source/build.py`, then commit and push.
Bump `VERSION` in `build.py` so phones pick up the new copy.
'''
with open(os.path.join(DIST, 'README.md'), 'w') as f:
    f.write(readme)

# ---------- artifact preview (no document wrapper) ----------
os.makedirs(ART, exist_ok=True)
art = HEAD_COMMON + FONTS + '\n<style>\n' + css + '\n</style>\n' + BODY + '<script>\n' + js + '\n</script>\n'
with open(os.path.join(ART, 'gold-forge.html'), 'w', encoding='utf-8') as f:
    f.write(art)

print('built', len(pwa)//1024, 'KB')
