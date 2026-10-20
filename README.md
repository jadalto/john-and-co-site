# John & Co. Heritage Farms & Landholdings LLC: website

Static one-page site. Source HTML/CSS/JS is in `site/`. Images are stored as a base64 tar.gz split into `assets/` parts (SHA-256 checked) because the publishing tool pushes text only. On every push to `main`, `.github/workflows/pages.yml` unpacks the images into `site/` and publishes it to the `gh-pages` branch, which GitHub Pages serves.

Live: https://jadalto.github.io/john-and-co-site/
