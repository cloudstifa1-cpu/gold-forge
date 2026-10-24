# Ore to Alloy

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
