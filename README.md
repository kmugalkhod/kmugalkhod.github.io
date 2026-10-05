# kmugalkhod.github.io

Personal portfolio of **Kunal Mugalkhod**, Full-Stack GenAI Developer — live at **https://kmugalkhod.github.io/**.

Plain HTML, CSS, and JavaScript. No framework, build step, or package install; GitHub Pages serves the files from the `main` branch root.

## Files

| File | Purpose |
| --- | --- |
| `index.html` | Page content: intro, experience, skills, education, contact, SEO/social metadata |
| `app.js` | Project data and cards, project filters, project detail dialog, theme toggle, nav highlighting |
| `styles.css` | Layout, light/dark themes, responsive styles |
| `404.html` | Not-found page served by GitHub Pages |
| `Kunal-Mugalkhod-Resume.pdf` | Resume linked from the "Download resume" button |
| `og-image.png` | 1200×630 preview image used when the site is shared on LinkedIn, Slack, X, etc. |
| `robots.txt`, `sitemap.xml` | Search-engine hints |
| `fonts/` | Self-hosted Schibsted Grotesk (SIL OFL) |

## Common edits

- **Add or change a project:** edit the `projects` array at the top of `app.js`, then add a matching entry (colour + one-line summary) in the `overview` object further down. Set `repo` to show an "Open source" badge and a GitHub link. `filters` controls which filter buttons show the project (`agents`, `rag`, `tools`).
- **Link straight to a project:** every project dialog has a shareable URL, e.g. `https://kmugalkhod.github.io/#project-lightcode`.
- **Experience, skills, contact:** edit `index.html`.
- **Resume:** replace `Kunal-Mugalkhod-Resume.pdf` (keep the filename).

## Preview locally

```sh
python3 -m http.server 8000
# open http://localhost:8000
```
