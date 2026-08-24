# Technical Rationale

This document explains the key architectural decisions behind the resume
site: styling strategy, theme system, and how print output is handled.

## Goals

1. **Semantic HTML.** Markup describes content, not presentation. Assistive
   tech, search engines, and readers see the same meaningful structure.
2. **Themeability.** Distinct palettes, typography, and even layouts (e.g.
   the compact print layout) should swap without touching component code.
3. **Performance.** Static export, minimal JS, no runtime style
   recalculation for theme swaps.
4. **Maintainability.** Cohesive files that each do one thing; shared
   patterns extracted into mixins or components.

## Styling: semantic HTML + SCSS with Tailwind `@apply`

Components emit clean, semantic class names — `<article class="work-item">`,
`<h2>Experience</h2>`, `<ul class="basics-contact">` — with no styling
concerns in the TSX. Styles live in SCSS files that target those class
names, using Tailwind utilities via `@apply` for spacing and layout
primitives:

```scss
.work-item {
  @apply mb-6;
  border-bottom: 1px solid var(--border-color);
}
```

This keeps components easy to read, centralises styling decisions in one
place, and still lets us lean on Tailwind's design system for consistency.

### Build ordering

`src/styles/globals.css` contains only the three `@tailwind` directives, and
is imported in `src/app/layout.tsx` **before** `src/themes/main.scss`. This
matters because `@apply` inside SCSS requires Tailwind's utilities to
already be generated. Keeping the directives in a separate CSS file, loaded
first, avoids ordering bugs.

## Theme system: CSS custom properties + data attributes

Each theme defines its look primarily through CSS custom properties scoped
to a `[data-theme="…"]` attribute selector on `<html>`:

```scss
[data-theme="simple-dark"] {
  --bg-primary: #1a1a1a;
  --text-primary: #fff;
}
```

The rest of the CSS consumes those variables (`background: var(--bg-primary)`).
Switching the `data-theme` attribute instantly re-scopes the variables and
re-renders the page with zero JS beyond the attribute swap.

### Themes shipped

* `simple-light`, `simple-dark` — default sans-serif on white/dark
* `elegant` — editorial serif on cream
* `retro`, `c64` — period-terminal aesthetics
* `print` — compact 2-page paper layout; doubles as `@media print`

### FOUC prevention

The theme picker persists the user's choice to `localStorage`. To avoid a
theme flash on first paint, an inline `<script>` in the document head reads
`localStorage` (falling back to `prefers-color-scheme`) and sets
`document.documentElement.data-theme` before hydration. That script does
nothing else — all interactive behavior lives in the React `ThemePicker`
client component.

## Print output

Print styles are defined once, as a SCSS mixin (`@mixin print-layout` in
`src/themes/print.scss`), and applied in two places:

1. `html[data-theme="print"]` — the on-screen "Print" theme, which
   previews what will be printed while still letting the user interact.
2. `@media print` — always applies at real print time, regardless of the
   on-screen theme. Also hides the theme picker and footer.

The mixin re-scales typography to 10pt with tight leading, collapses the
sidebar into a single-line contact row, and renders projects inline
(`name — description`). Verified at ~2 pages via
`google-chrome --headless --print-to-pdf` + `pdfinfo`.

## File organisation

```text
src/themes/
  base.scss              Coordinator; @use's the partials below
  _variables.scss        Design tokens (spacing, container)
  _typography.scss       h1-h6, p, ul/ol/li, a
  _theme-picker.scss     Picker widget styles
  _resume-layout.scss    Grid, sidebar, work/project item tweaks
  _mixins.scss           Shared mixins (e.g. flat-monospace-text)
  simple.scss, elegant.scss, retro.scss, c64.scss, print.scss
  main.scss              Imports base + all themes
```

Theme files stay focused on their theme's identity (colors, fonts,
distinctive layout tweaks). Shared behaviors live in `_mixins.scss`; for
example, `retro` and `c64` both include `flat-monospace-text` to collapse
type hierarchy the way a period terminal would.

## Component boundaries

Most rendering is server-side. Two components carry the `'use client'`
directive because they need runtime state:

* `ThemePicker` — owns menu open/close state, outside-click and Escape
  handlers, and writes the selected theme to `localStorage`.
* `EmailLink` — renders an obfuscated placeholder on the server, then
  reassembles a real `mailto:` address in `useEffect` so the plain email
  never appears in the static HTML.

A small `MaybeLink` helper wraps the "if there's a URL, make it an anchor;
otherwise emit plain text" pattern that recurred across every section.

## Development trade-offs

* **`@apply` inside SCSS** — some IDE linters flag `@apply` as an unknown
  at-rule. Configure your linter accordingly (VS Code:
  `scss.lint.unknownAtRules: "ignore"`; Stylelint: allow the directive).
* **Inline theme-init script** — `dangerouslySetInnerHTML` is used
  intentionally for the pre-hydration theme setter. It's the minimum viable
  way to avoid a flash on load. All other picker logic is regular React.
