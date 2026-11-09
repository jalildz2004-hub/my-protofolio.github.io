# Portfolio — Abdel Djalil Aberkane

Personal portfolio of **Abdel Djalil Aberkane**, Full Stack Developer based in El Eulma, Sétif (Algeria).

Built from scratch as a static site with **HTML, CSS and vanilla JavaScript** — no framework, no build step, no dependencies to install.

- **Bilingual** French / English with a persisted language toggle (French by default)
- **Dark / light theme** with persisted preference
- Responsive from **320px** to large desktop screens
- Accessible: skip link, focus styles, ARIA labels, keyboard-friendly menu, reduced-motion support
- Downloadable CV, email button and copy-to-clipboard
- Custom favicon and 1200 × 630 social preview image

---

## Preview locally

The site is fully static. From the project folder, run any static server:

```bash
# Python (already installed on most machines)
python -m http.server 4173

# or Node.js
npx serve .
```

Then open **http://localhost:4173/**.

You can also open `index.html` directly in a browser. An internet connection is only needed for the Google Fonts; everything else is local.

---

## Project structure

```text
portfolio/
├─ index.html                         # All page markup
├─ css/
│  └─ style.css                       # Design system, layout, themes, responsive rules
├─ js/
│  └─ main.js                         # FR/EN translations and all interactions
├─ assets/
│  ├─ cv/
│  │  ├─ Abdel_Djalil_Aberkane_CV_FR.pdf
│  │  └─ cv-pdf-base64.js             # Generated fallback for local file:// downloads
│  ├─ favicon.svg
│  └─ og-image.png
├─ scripts/
│  └─ generate-cv-fallback.py         # Regenerates the CV fallback
└─ README.md
```

---

## Deployment

### GitHub Pages

1. Create a repository and push the contents of this folder to the default branch.
2. In the repository: **Settings → Pages**.
3. Under **Build and deployment**, choose **Deploy from a branch**, then the default branch and `/ (root)`.
4. Save. The site will be available at `https://<username>.github.io/<repository>/`.

No build command or environment variables are required.

### Netlify

- Drag the `portfolio` folder onto the Netlify dashboard (**Add new site → Deploy manually**), or
- Connect the Git repository with:
  - **Build command:** *(leave empty)*
  - **Publish directory:** `.` (or the folder containing `index.html`)

### Vercel / Cloudflare Pages

Import the repository as a static project, leave the build command empty and set the output directory to the project root.

### After deploying

Update the social preview URLs in `index.html` so scrapers receive absolute URLs:

```html
<meta property="og:image" content="https://your-domain.com/assets/og-image.png">
<meta name="twitter:image" content="https://your-domain.com/assets/og-image.png">
```

Optionally add a canonical link and a custom `robots.txt` / sitemap once the final domain is known.

---

## Customization

### Personal details

Search for these values in `index.html` and `js/main.js`:

| What | Where |
| --- | --- |
| Email `jailidz2004@gmail.com` | `index.html`, `js/main.js` (`emailAddress`) |
| Phone `+213 542 92 02 04` | `index.html` |
| GitHub `github.com/jalildz2004-hub` | `index.html` |
| Location `El Eulma, Sétif · Algérie` | `index.html`, `js/main.js` (translations) |
| CV file | `assets/cv/Abdel_Djalil_Aberkane_CV_FR.pdf` (replace the file, keep the path or update the three download links) |

After replacing the CV, regenerate the local-download fallback so direct-file previews stay in sync:

```bash
python scripts/generate-cv-fallback.py
```

### Text content and translations

- French text lives directly in `index.html`.
- English text lives in the `translations.en` object in `js/main.js`.
- Elements are linked to translations through `data-i18n`, `data-i18n-html` and `data-i18n-aria` attributes.
- To add a translatable element: add the French text in the HTML, give it a unique `data-i18n="your.key"`, then add `"your.key": "English text"` to `js/main.js`.

### Colors and typography

All design tokens are CSS custom properties at the top of `css/style.css`:

```css
:root {
  --bg: #080a0d;
  --accent: #c8f560;        /* lime accent */
  --text: #eef2f6;
  --font-display: "Sora", ...;
  --font-body: "Inter", ...;
  --font-mono: "JetBrains Mono", ...;
}
```

The light theme overrides the same tokens in `[data-theme="light"]`.

### Social preview image and favicon

- `assets/og-image.png` — 1200 × 630, referenced by the Open Graph and Twitter meta tags.
- `assets/favicon.svg` — monogram favicon.

Replace either file while keeping the same name and paths.

### Adding project links

The two project cards currently have no external links, as requested. When links become available, add a button to the corresponding `.project-content` in `index.html`, for example:

```html
<a class="btn btn-outline btn-sm" href="https://github.com/..." target="_blank" rel="noopener noreferrer">
  Voir le code
</a>
```

Add the translation key in `js/main.js` if the label should switch languages.

---

## Technical notes

- **Language preference:** stored in `localStorage` under `portfolio-lang` (`fr` or `en`).
- **Theme preference:** stored under `portfolio-theme` (`dark` or `light`).
- The initial theme/language is applied by a small inline script in `<head>` to avoid a flash of the wrong theme.
- If JavaScript is disabled, the French content remains visible and readable; scroll reveals are disabled via the `no-js` class.
- CV downloads use the native PDF file over HTTP/HTTPS. When the site is opened directly from disk (`file://`) or inside a local preview, browsers ignore the `download` attribute, so a lazily-loaded base64 copy (`assets/cv/cv-pdf-base64.js`) is used to trigger a real download instead.
- Animations respect `prefers-reduced-motion`.
- The page uses semantic landmarks, visible focus styles, a skip link, labeled controls and `aria-hidden` on purely decorative visuals.
- Fonts are loaded from Google Fonts (Inter, Sora, JetBrains Mono). For fully offline hosting, download the font files and self-host them.

---

## Credits

- Content based on the CV of Abdel Djalil Aberkane.
- Fonts: [Inter](https://fonts.google.com/specimen/Inter), [Sora](https://fonts.google.com/specimen/Sora), [JetBrains Mono](https://fonts.google.com/specimen/JetBrains+Mono) — SIL Open Font License.
- Design and code: original work for this portfolio.
