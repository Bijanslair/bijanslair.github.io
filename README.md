# Bijan’s Lair

A static browser arcade. The full site is in `dist/` and needs no build step.

To preview it locally, run `python -m http.server 8000 --directory dist`
and open http://localhost:8000/.

The GitHub Pages workflow publishes `dist/` on each push to `main`.
In Settings → Pages, use GitHub Actions as the publishing source.
Game attribution and license links are in `dist/games/credits.html`.
