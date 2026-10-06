# kmugalkhod.github.io

Personal portfolio of **Kunal Mugalkhod**, Full-Stack GenAI Developer — live at **https://kmugalkhod.github.io/**.

Plain HTML, CSS, and JavaScript. No framework, build step, or package install; GitHub Pages serves the files from the `main` branch root.

## Files

| File | Purpose |
| --- | --- |
| `index.html` | Page content: intro, experience, stack, contact, SEO/social metadata |
| `app.js` | Project data, Work list, project detail dialog, appearance panel (theme, font, colour) |
| `styles.css` | Layout, light/dark themes, responsive styles |
| `404.html` | Not-found page served by GitHub Pages |
| `Kunal-Mugalkhod-Resume.pdf` | Resume linked from the "Download resume" button |
| `og-image.png` | 1200×630 preview image used when the site is shared on LinkedIn, Slack, X, etc. |
| `robots.txt`, `sitemap.xml` | Search-engine hints |
| `fonts/` | Self-hosted Schibsted Grotesk (SIL OFL) |

## Common edits

- **Add or change a project:** edit the `projects` array at the top of `app.js`, then add a matching one-line entry in the `summary` object below it (shown in the Work list). Set `repo` to show an "Open source" badge and a GitHub link.
- **Link straight to a project:** every project dialog has a shareable URL, e.g. `https://kmugalkhod.github.io/#project-lightcode`.
- **Experience, stack, contact:** edit `index.html`.
- **Appearance panel:** the gear button lets visitors pick light/dark, a font (Schibsted, Inter, Geist), and a colour tint. Tint palettes live at the top of `styles.css`; choices are saved in the visitor's browser.
- **Resume:** replace `Kunal-Mugalkhod-Resume.pdf` (keep the filename).

## Preview locally

```sh
python3 -m http.server 8000
# open http://localhost:8000
```
