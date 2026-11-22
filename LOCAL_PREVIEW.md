# Local homepage preview

```sh
npm install
npm run dev
```

Open http://localhost:4000. Reload after editing a file. Use `PORT=4001 npm run dev` if port 4000 is in use.

The lightweight preview reads `_pages/about.md`, `_pages/publications.md`, the notebook Liquid layouts, `_data/cv.yml`, and `_bibliography/papers.bib` directly. It supports the homepage and publications page, and serves public assets including the resume. It does not emulate the rest of Jekyll or its plugins. The existing Jekyll workflow remains the production build; verify that build before deployment.

The original photo is preserved in `assets/img/wenbo-corgi.png`. Its visible crop is controlled by `.portrait` in `assets/css/notebook.css`.

## Recent News

Add confirmed paper acceptances and job announcements to `recent_news` in the front matter of `_pages/about.md`, newest first. Each entry has a quoted `date` and a `text` field. Use the known year or season when the exact month is unavailable. The callout renders these entries automatically inside a keyboard-accessible scrolling region; its header stays visible, and each page load starts at the newest entry. `recent_news: []` displays a neutral placeholder.

For paper announcements, replace `text` with `paper_title` (a short title or acronym), `paper_url`, and `venue`. Optionally set `paper_type: survey`; otherwise the sentence uses “paper”. Full titles remain in the bibliography.

Use `MM/YYYY` when the month is verified. Conference news uses the official decision notification month, and TMLR uses its official acceptance digest. Optional `date_source` values record the evidence without displaying it on the page. The user-provided LinkedIn profile confirms Alibaba started in July 2026 and the Amazon internship started in June 2025. It also confirms the Meta and IQVIA internship ranges.

Use a feature branch for homepage changes, and verify the production build before merging into `master`.
