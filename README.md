# bradleygolden.dev

Personal site built with Astro 5 and Tailwind 4, styled from the provided mockup (without case studies or Substack sections) and ready for GitHub Pages.

## Quick start

- Install dependencies: `npm install`
- Start the dev server: `npm run dev` (default: http://localhost:4321)
- Production build: `npm run build`

## Deployment

- GitHub Pages workflow lives at `.github/workflows/deploy.yml`. It builds the site and publishes the `dist/` artifact using the Pages deploy action.
- `astro.config.mjs` is configured for `https://bradleygolden.dev` with `base: '/'` and `public/CNAME` present. If you change domains, update `astro.config.mjs`, `public/CNAME`, and rerun `npm run build`.

## Notes

- Global styles are in `src/styles/global.css`; the main page lives in `src/pages/index.astro` with a shared layout in `src/layouts/BaseLayout.astro`.
- Contact CTA currently links to `bradley@recursivesystems.dev` and LinkedIn `https://www.linkedin.com/in/goldenbradley/`; adjust if needed.
- Footer includes © 2025 Recursive Systems LLC.

## License

MIT License — see `LICENSE`.
