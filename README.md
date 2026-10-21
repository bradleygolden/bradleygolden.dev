# bradleygolden.dev

Bradley Golden's personal page: one static page, served by GitHub Pages from `site/` (merging to `main` deploys).

- `site/`: the website as served. `site/index.html` is built; don't edit it by hand.
- `source/`: the page's source. `src.html` (layout, styles, script) and `content.html` (the words and links) become
  `site/index.html` with `node source/tools/build.mjs`, run from the repo root. It inlines the logos from
  `source/logos/` and makes the thermal copy of the page. `source/tools/THERMAL.md` says how the thermal photo was made.
- `DESIGN.md`: the identity (colours, type, spacing and why), in Google's design.md format
  (`npx @google/design.md lint DESIGN.md`).

Preview: `node source/tools/build.mjs && python3 -m http.server -d site`.
