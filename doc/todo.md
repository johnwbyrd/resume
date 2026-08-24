# Todo / Future Enhancements

Tracking possible next steps. Completed feature work has been removed once
merged; use `git log` for history.

## Content and features

1. **PDF export button.** Currently users produce a PDF via the browser's
   Print dialog (with the Print theme active or via `@media print`). A
   one-click "Download PDF" affordance could pre-render to `resume.pdf` as
   part of the build or generate on the fly.

2. **Analytics.** GA4 or a lightweight self-hosted alternative (Plausible).
   Track page views; track theme selection.

3. **`Person` schema.org markup** for richer SEO.

## Styling and structure

1. **Theme palette expansion.** Add shared variables like `--color-accent`,
   `--color-link-hover`, `--bg-secondary` in `_variables.scss` and let each
   theme override. Right now some themes reach for their own private tokens
   (retro's `--retro-primary`, c64's colour named ramp) rather than a shared
   semantic layer.

2. **Semantic class coverage audit.** Confirm every logical unit
   (sub-headings, meta rows, list wrappers) has a class name and a
   corresponding rule where applicable.

## Accessibility and testing

1. **Full a11y audit.** Contrast on every theme (retro's green-on-black and
   c64's palette are the risky ones), keyboard navigation for the theme
   picker, screen-reader landmarks. Automate with axe-core if possible.

2. **Cross-browser / device testing.** Manual smoke test on Chrome, Firefox,
   Safari, Edge at desktop and mobile widths. Verify theme switching
   consistency.

3. **Lighthouse baseline.** Record scores; watch for regressions when adding
   analytics or PDF work.
