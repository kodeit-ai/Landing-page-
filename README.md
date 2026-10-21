# Kodeit static homepage

This is a standalone adaptation of Kodeit's existing landing page using the approved transparent, even-stroke K-and-blue-dot logo. Only the three sample transaction records are interactive; there are no sign-in, workspace, or app action buttons.

## Files

- `index.html` — full homepage, including the static product illustration.
- `styles.css` — self-contained responsive styles.
- `record-preview.js` — a small local interaction that selects a sample record and gently pops its details into the existing panel.
- `assets/kodeit-logo.png` — transparent company logo.
- `.nojekyll` — serves the files directly on GitHub Pages.

No installation, build, environment variables, backend, login, tracking, or external font service is required. Open `index.html` locally to preview. Keep all files and the `assets` folder together. In-page Product, Trust and Purpose links remain; sign-in, workspace, and app buttons have been removed. The optional browser-only JavaScript makes the example records selectable with mouse, touch, Enter, or Space. It makes no network calls and stores nothing. Without JavaScript, the original example remains visible. Reduced-motion preferences disable the pop animation but not selection.

The product illustration contains synthetic example transactions and is explicitly labeled as sample data. It is not a live account or a guarantee of implemented product capabilities. This is a public-facing homepage, not the accounting application.

## Publish on GitHub Pages

1. Extract the download and upload **the contents of this folder** to the root of a dedicated GitHub repository. Include `assets` and `.nojekyll`. Do not upload the accounting app or its `.env` files.
2. In the repository's **Settings → Pages**, choose **Deploy from a branch**, then the branch containing these files and **/(root)**.
3. Save and wait for GitHub to finish publishing. It will show the site's URL.

All asset URLs are relative, so the same files work at both a custom domain and a GitHub repository subpath. Nothing has been published or pushed for you.

Official setup reference: [GitHub Pages publishing source](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site).

## Editing

Edit the text in `index.html`, the appearance in `styles.css`, or replace `assets/kodeit-logo.png` with another transparent square image. This package does not require React or Next.js. The application's landing page and navigation are unchanged; only its shared logo was replaced.
