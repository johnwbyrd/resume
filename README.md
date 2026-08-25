# Resume

Static resume site built with Next.js. Content lives in a single JSON Resume
document; layout and typography are swappable via a data-attribute-scoped
theme system with a client-side picker. Ships as pre-rendered HTML + CSS +
minimal JS (about 100 kB shared bundle).

## Approach

Components render clean, semantic HTML (`<article class="work-item">`,
`<h2>Experience</h2>`, `<ul class="basics-contact">`) with no styling
concerns in the markup. Styles live in SCSS files that target those semantic
class names, using Tailwind utilities via `@apply` for spacing and layout
primitives:

```scss
.work-item {
  @apply mb-6;
  border-bottom: 1px solid var(--border-color);
}
```

Theme-specific colors, fonts, and structure hang off CSS custom properties
scoped to `[data-theme="…"]` attribute selectors on `<html>`. Switching
themes just changes the attribute — no restyle recalculation, no re-render,
no runtime JS beyond the picker and the Matrix theme's background canvas.

## Themes

| Theme          | Notes                                                          |
| -------------- | -------------------------------------------------------------- |
| `simple-light` | Default; clean sans-serif on white                             |
| `simple-dark`  | Same layout, dark palette                                      |
| `elegant`      | Editorial serif on cream                                       |
| `matrix`       | Green terminal + fullscreen katakana rain behind the content   |
| `c64`          | Commodore 64 boot screen — Pepto PAL palette, chunky border    |
| `print`        | Compact 2-page paper layout; also `@media print`               |

The Print theme doubles as a preview for the actual print output. Print
styles are defined once in a mixin and applied both under `[data-theme="print"]`
and inside `@media print`, so the browser Print dialog produces the same
2-page layout regardless of the on-screen theme.

## Scripts

* `npm run dev`   — dev server
* `npm run build` — static export to `out/`
* `npm run lint`  — eslint

## Docs

* [Technical rationale](doc/rationale.md)
* [Deployment guide](doc/deployment.md)
* [Todo](doc/todo.md)
