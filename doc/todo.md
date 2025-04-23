# Todo / Future Enhancements

This document lists planned enhancements and areas for future work, reflecting the current architecture and goals.

## Feature Implementation

1.  **Implement Elegant Theme:**
    *   Design and implement styles for the `elegant` theme in `src/themes/elegant.scss`.
    *   Define appropriate CSS variables and apply styles using semantic classes and `@apply`.
    *   Consider typography, spacing, and subtle color accents.

2.  **Implement Print Theme:**
    *   Design and implement styles for the `print` theme in `src/themes/print.scss`.
    *   Focus on optimizing for physical paper output (page breaks, printer-friendly styles, remove unnecessary elements like theme switcher).

3.  **(Optional) PDF Generation:**
    *   Investigate and implement a mechanism to generate a PDF version of the resume.
    *   Options might include client-side libraries (e.g., `html2pdf.js`, `jsPDF`) or potentially a serverless function if static export limits client-side options.
    *   Ensure consistent formatting with the web version (perhaps based on the `print` theme).

4.  **(Optional) Google Analytics Integration:**
    *   Configure GA4 integration if desired.
    *   Track page views and potentially theme switching events.

## Theme System & Styling Refinements

5.  **Theme Palette Expansion:**
    *   Define additional shared CSS variables (e.g., `--color-accent`, `--color-link-hover`, `--bg-secondary`) in `base.scss` or theme files as appropriate.
    *   Update existing themes (`simple`, `retro`, `c64`) to utilize new variables where applicable.

6.  **Review Semantic Class Coverage:**
    *   Ensure all logical sections and elements within the resume components have appropriate semantic class names applied.
    *   Verify that corresponding styles are defined in the theme SCSS files.

7.  **Theme Switching Enhancement:**
    *   Consider implementing initial theme detection based on user's system preference (`prefers-color-scheme`) before falling back to localStorage or default.

## General Improvements

8.  **Accessibility Review:**
    *   Conduct a thorough accessibility audit (WCAG guidelines).
    *   Verify sufficient color contrast across all implemented themes.
    *   Ensure proper ARIA attributes are used where necessary (e.g., theme selector).
    *   Test keyboard navigation thoroughly.
    *   Check heading structure and semantic HTML usage.

9.  **Cross-Browser/Device Testing:**
    *   Test appearance and functionality across major browsers (Chrome, Firefox, Safari, Edge).
    *   Validate responsive behavior on various screen sizes (mobile, tablet, desktop).
    *   Test theme switching consistency across browsers.

10. **Performance Review:**
    *   Run Lighthouse audits periodically.
    *   Analyze CSS bundle size; consider potential optimizations if needed (though likely minimal impact for this project size).

11. **Advanced SEO:**
    *   Review and potentially implement `Person` schema.org markup for enhanced SEO.
    *   Ensure all metadata and OpenGraph tags are optimal.

12. **Code Organization:**
    *   Consider if splitting theme SCSS files further (e.g., by section) would improve maintainability as themes grow.

13. **Documentation Update (Ongoing):**
    *   Keep `README.md` and `doc/rationale.md` updated as the project evolves. (Consider this task complete for now after we rewrite them).
