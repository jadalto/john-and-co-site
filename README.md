# John & Co. Heritage Farms & Landholdings LLC: website

Live: https://johnandcoheritage.com/ (GitHub Pages, custom domain via `site/CNAME`).

Static seven-page site (Home, Our Company, Proposed Areas of Work, Land Stewardship and Agriculture, Community and Veterans, Media, Contact) plus a 404 page. Source HTML/CSS/JS is in `site/`. Images are stored as a base64 tar.gz split into `assets/` parts (SHA-256 checked) because the publishing tool pushes text only. On every push to `main`, `.github/workflows/pages.yml` unpacks the images into `site/`, checks that `site/CNAME` is johnandcoheritage.com, and publishes `site/` to the `gh-pages` branch, which GitHub Pages serves.

Release 2026-10-21 (JCO-WEB-CIT-20261021-READY-HANDOFF-01). Rollback point: branch `pre-release-v4-20261021` (commit 6daf3c6, the one-page v4 site).
