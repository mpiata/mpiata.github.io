# Maherukh Parwin Piata — Portfolio

## 1. Portfolio purpose

This is a static personal portfolio for internship and working-student applications in Germany. It presents verified CV information about operations coordination, KPI reporting, supply chain analytics, education, skills and selected work. It uses only HTML, CSS and JavaScript, with no build step or external dependency.

## 2. File structure

```text
maherukh-portfolio/
├── index.html               Main portfolio page
├── styles.css               Layout, colours and responsive styles
├── script.js                Menu, filters and accessible lightbox controls
├── README.md                This guide
├── 404.html                 GitHub Pages error page
├── robots.txt               Search crawler guidance
├── .nojekyll                Disables Jekyll processing
├── .gitignore               Ignores macOS metadata
└── assets/
    ├── cv/                  Downloadable CV
    └── images/              Nine portfolio visuals
```

## 3. Preview locally

Open the project folder and double-click `index.html`. It will open in the default browser. No server, installation or internet connection is required.

## 4. Replace images

Place a replacement PNG in `assets/images/` and keep the existing filename. To use a different filename, update the matching `src="assets/images/..."` path in `index.html`. Keep descriptive `alt` text and preserve the synthetic-data disclaimer.

## 5. Replace the CV

Replace `assets/cv/Maherukh_Parwin_Piata_CV.pdf` with the new PDF using the same filename. If the filename changes, update the Download CV link in `index.html`.

## 6. Edit text

Open `index.html` in a plain-text editor. Search for the visible sentence or heading, edit it, save, and refresh the browser. Confirm every factual change against the current CV. Never add private contact details or unsupported achievements.

## 7. Publish with GitHub Pages

1. Create a GitHub repository and upload the complete folder contents to its main branch.
2. In the repository, open **Settings → Pages**.
3. Under **Build and deployment**, choose **Deploy from a branch**.
4. Select the `main` branch and `/ (root)` folder, then save.
5. GitHub will show the public address after deployment finishes.

Portfolio asset links use relative paths for local preview and GitHub Pages. The `404.html` stylesheet and return link use root-relative paths because this portfolio is intended for a GitHub user site at `https://USERNAME.github.io`.

## 8. Update the live website

Edit the files locally, preview the changes, then commit and push them to the same published branch. GitHub Pages will update automatically after the new commit is deployed. A hard refresh may be needed to bypass an older browser cache.

## 9. Privacy warning

Before publishing, check the HTML, metadata, CV and images for private information. The website intentionally does not display a phone number, street address, postal code, date of birth, nationality or work-authorisation claims. **The CV PDF becomes publicly downloadable when the site is published.** Review the PDF separately before every update and publish it only when its contents are suitable for public access.

## 10. Synthetic-data disclaimer

Every project visual is labelled as illustrative and created with synthetic sample data. Numerical figures shown in the images are not confidential employer information or verified professional results unless the page explicitly says so. Keep these notices visible when updating cards.

## 11. Troubleshoot image paths

- Filenames and folder names are case-sensitive on GitHub Pages.
- Confirm the image is in `assets/images/` and the HTML path starts with `assets/images/`.
- Avoid spaces and capital letters in new filenames.
- Do not add a leading `/` to asset paths; relative paths keep local preview and GitHub Pages compatible.
