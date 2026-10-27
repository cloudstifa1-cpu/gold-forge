#!/usr/bin/env python3
"""Builds Ore to Alloy: dist/ (GitHub Pages PWA) and artifact/gold-forge.html (preview)."""
import glob, json, os, shutil
from PIL import Image, ImageDraw, ImageFont

ROOT = os.path.dirname(os.path.abspath(__file__))
SRC = os.path.join(ROOT, 'src')
DIST = os.path.dirname(ROOT)  # repo root (served by GitHub Pages)
ART = os.path.join(ROOT, 'artifact')
VERSION = 'oa-v6'

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
<button class="brand" id="brand" aria-label="Home">Ore to <span>Alloy</span></button>
<div class="sz"><button id="aminus" aria-label="Smaller text">A−</button><button id="aplus" aria-label="Bigger text">A+</button></div>
</div></div>
<main id="app"></main>
<noscript><p style="padding:16px">Ore to Alloy needs JavaScript turned on.</p></noscript>
'''

SITE = 'https://cloudstifa1-cpu.github.io/gold-forge/'
DESC = 'Free metallurgy study app: fire assaying, gold recovery from mine to 99.99% bar, smelting and refining of 34 metals, chemistry, alloys, heat treatment, corrosion, and a glossary.'
HEAD_COMMON = ('<title>Ore to Alloy</title>\n'
               '<meta name="claude:viewport-fit-sides" content="cover">\n'
               '<meta name="description" content="' + DESC + '">\n')

# ---------- photos ----------
IMGSRC = os.path.join(ROOT, 'img')
IMGDST = os.path.join(DIST, 'img')
IMGLIST = []
if os.path.isdir(IMGSRC):
    if os.path.isdir(IMGDST): shutil.rmtree(IMGDST)
    shutil.copytree(IMGSRC, IMGDST)
    IMGLIST = sorted('img/' + f for f in os.listdir(IMGDST))

# ---------- PWA (full document) ----------
os.makedirs(DIST, exist_ok=True)
pwa = ('<!doctype html>\n<html lang="en">\n<head>\n<meta charset="utf-8">\n'
       '<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">\n'
       + HEAD_COMMON +
       '<meta name="theme-color" content="#1E1B16">\n'
       '<meta name="apple-mobile-web-app-capable" content="yes">\n'
       '<meta name="mobile-web-app-capable" content="yes">\n'
       '<meta name="apple-mobile-web-app-title" content="Ore to Alloy">\n'
       '<meta name="apple-mobile-web-app-status-bar-style" content="black-translucent">\n'
       '<link rel="canonical" href="' + SITE + '">\n'
       '<meta property="og:type" content="website">\n'
       '<meta property="og:title" content="Ore to Alloy — Metallurgy Study App">\n'
       '<meta property="og:description" content="' + DESC + '">\n'
       '<meta property="og:url" content="' + SITE + '">\n'
       '<meta property="og:image" content="' + SITE + 'icon-512.png">\n'
       '<meta name="twitter:card" content="summary">\n'
       '<script type="application/ld+json">' + json.dumps({"@context":"https://schema.org","@type":"WebApplication","name":"Ore to Alloy","url":SITE,"description":DESC,"applicationCategory":"EducationalApplication","operatingSystem":"Android, iOS, Windows, macOS","isAccessibleForFree":True,"offers":{"@type":"Offer","price":"0","priceCurrency":"USD"},"keywords":"metallurgy, fire assay, gold assay, smelting, refining, extractive metallurgy, heat treatment, study guide"}) + '</script>\n'
       '<link rel="manifest" href="manifest.webmanifest">\n'
       '<link rel="icon" href="icon-192.png" type="image/png">\n'
       '<link rel="apple-touch-icon" href="apple-touch-icon.png">\n'
       + FONTS + '\n<style>\n:root{padding-top:env(safe-area-inset-top,0px);padding-bottom:env(safe-area-inset-bottom,0px)}\n'
       + css + '\n</style>\n</head>\n<body>\n' + BODY + '<script>\n' + js + '\n</script>\n</body>\n</html>\n')
with open(os.path.join(DIST, 'index.html'), 'w', encoding='utf-8') as f:
    f.write(pwa)

manifest = {
    "name": "Ore to Alloy", "short_name": "Ore to Alloy",
    "id": "./", "lang": "en", "dir": "ltr", "description": DESC,
    "categories": ["education", "books", "reference"],
    "screenshots": [{"src": "screenshots/%d.png" % i, "sizes": "1080x1920", "type": "image/png", "form_factor": "narrow"} for i in range(1, 5)],
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
const CORE=['./','index.html','privacy.html','manifest.webmanifest','icon-192.png','icon-512.png','icon-maskable-512.png','apple-touch-icon.png'];
self.addEventListener('install',e=>{e.waitUntil(caches.open(CACHE).then(c=>c.addAll(CORE)).then(()=>self.skipWaiting()));});
const IMGS=%s;
self.addEventListener('activate',e=>{
  // Save every photo for offline use in the background (doesn't block startup).
  caches.open(CACHE).then(c=>IMGS.reduce((p,u)=>p.then(()=>c.match(u).then(r=>r||c.add(u).catch(()=>{}))),Promise.resolve()));
  e.waitUntil(caches.keys().then(ks=>Promise.all(ks.filter(k=>k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim()));});
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
''' % (VERSION, json.dumps(IMGLIST))
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
    tb = d.textbbox((0, 0), 'OA', font=font)
    tw, th = tb[2] - tb[0], tb[3] - tb[1]
    d.text((cx - tw/2 - tb[0], cy - th/2 - tb[1]), 'OA', fill=(122, 86, 10, 255), font=font)
    im.resize((size, size), Image.LANCZOS).convert('RGB').save(path)

icon(192, 0.12, os.path.join(DIST, 'icon-192.png'))
icon(512, 0.12, os.path.join(DIST, 'icon-512.png'))
icon(512, 0.22, os.path.join(DIST, 'icon-maskable-512.png'))
icon(180, 0.12, os.path.join(DIST, 'apple-touch-icon.png'))

readme = '''# Ore to Alloy

Metallurgy study app: assaying (fire assay), gold recovery from mine to 99.99% bar, extraction and smelting of every major metal, chemistry, alloys, heat treatment, forming, corrosion, safety, and a glossary.

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

# ---------- search & store extras ----------
with open(os.path.join(DIST, 'robots.txt'), 'w') as f:
    f.write('User-agent: *\nAllow: /\nSitemap: ' + SITE + 'sitemap.xml\n')
with open(os.path.join(DIST, 'sitemap.xml'), 'w') as f:
    f.write('<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n'
            '<url><loc>' + SITE + '</loc><changefreq>monthly</changefreq><priority>1.0</priority></url>\n'
            '<url><loc>' + SITE + 'privacy.html</loc><changefreq>yearly</changefreq><priority>0.3</priority></url>\n</urlset>\n')
privacy = '''<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1">
<title>Ore to Alloy Privacy Policy</title><style>body{font:18px/1.6 system-ui,sans-serif;max-width:40rem;margin:0 auto;padding:24px 16px;background:#14120E;color:#F7F2E7}a{color:#E3B847}h1{color:#E3B847}</style></head><body>
<h1>Ore to Alloy Privacy Policy</h1><p>Last updated: October 2026</p>
<p>Ore to Alloy is a free study app. It does not collect, store, sell, or share any personal information.</p>
<ul><li>No accounts, sign-ups, or logins.</li><li>No ads, analytics, or tracking.</li>
<li>Settings like text size, saved topics, and your last search are stored only on your own device (browser local storage). They never leave your device, and clearing your browser data deletes them.</li>
<li>The app loads its fonts from Google Fonts, which receives a normal web request (such as your IP address) when fonts download.</li></ul>
<p>The app is free for anyone and is suitable for all ages.</p>
<p>Questions: open an issue at <a href="https://github.com/cloudstifa1-cpu/gold-forge/issues">github.com/cloudstifa1-cpu/gold-forge/issues</a>.</p>
<p><a href="./">Back to Ore to Alloy</a></p></body></html>'''
with open(os.path.join(DIST, 'privacy.html'), 'w') as f:
    f.write(privacy)

# ---------- artifact preview (no document wrapper) ----------
os.makedirs(ART, exist_ok=True)
art = HEAD_COMMON + FONTS + '\n<style>\n' + css + '\n</style>\n' + BODY + '<script>\n' + js + '\n</script>\n'
with open(os.path.join(ART, 'gold-forge.html'), 'w', encoding='utf-8') as f:
    f.write(art)

print('built', len(pwa)//1024, 'KB')
