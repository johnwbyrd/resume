# Technical Rationale

This document explains the key architectural decisions behind this resume website project, particularly focusing on the styling and theming strategy.

## Core Goals

The primary objectives driving the technical choices were:

1.  **Semantic HTML:** Ensure the underlying HTML structure is meaningful, accessible, and independent of specific visual presentation.
2.  **Themeability:** Allow easy switching between distinct visual themes (color palettes, typography, spacing) without altering the core content or structure.
3.  **Performance:** Deliver a fast-loading experience through static site generation and optimized assets.
4.  **Maintainability:** Create a codebase that is easy to understand, modify, and extend.

## Styling Philosophy: Semantic HTML with SCSS and Tailwind (@apply)

A central decision was to prioritize **semantic HTML** structure within the React (TSX) components. Instead of embedding styling logic directly into the markup using utility classes (like `className="text-lg font-bold mb-4"`), components use semantic class names that describe the *content's purpose* (e.g., `className="job-title"`, `className="work-item"`).

This approach offers several advantages:

*   **Readability:** The TSX markup remains clean and focused on structure.
*   **Accessibility:** Semantic HTML is inherently more accessible to assistive technologies.
*   **Maintainability:** Changes to styling are centralized in the CSS/SCSS files, not scattered across components.
*   **Separation of Concerns:** Structure (HTML/TSX) is clearly separated from presentation (CSS/SCSS).

However, we still wanted to leverage the power and consistency of a utility-class system like Tailwind CSS for defining visual styles (spacing, typography, layout). To achieve this *without* sacrificing semantic HTML, we adopted a hybrid approach using SCSS:

1.  **SCSS for Structure and Theming:**
    *   **Organization:** SCSS (`@import`) is used to structure the stylesheets, importing a `base.scss` file and then theme-specific files (`simple.scss`, `retro.scss`, etc.) via `main.scss`.
    *   **Theme Scoping:** Each theme's styles are defined within SCSS, primarily using **CSS Custom Properties (Variables)** scoped to a `[data-theme="theme-name"]` attribute selector (e.g., `[data-theme="simple-light"] { --bg-primary: #fff; }`). This is the core mechanism enabling theme switching.
    *   **Semantic Selectors:** SCSS rules target the semantic class names defined in the TSX components (e.g., `.job-title { ... }`, `.work-item { ... }`).

2.  **Tailwind via `@apply` for Implementation:**
    *   Within the SCSS rules for semantic selectors, Tailwind's `@apply` directive is used to apply the desired utility classes. For example:
        ```scss
        // src/themes/simple.scss
        .job-company {
          @apply text-lg font-semibold; // Apply Tailwind utilities
        }

        .work-item {
          @apply mb-8; // Apply Tailwind spacing
          border-bottom: 1px solid var(--border-color); // Use theme variable
        }
        ```
    *   This allows us to use Tailwind's design system (spacing scale, font sizes, etc.) for consistency while keeping the styling logic encapsulated within the SCSS files, tied to semantic selectors.

3.  **Separation of `@tailwind` Directives:**
    *   The core `@tailwind base;`, `@tailwind components;`, and `@tailwind utilities;` directives are placed in a separate, standalone `src/styles/globals.css` file.
    *   This file is imported *before* `src/themes/main.scss` in the Next.js layout (`src/app/layout.tsx`).
    *   **Reasoning:** This separation is crucial due to the CSS build process. Placing `@apply` within SCSS requires the Tailwind utilities to be processed *after* the SCSS rules are defined. If `@tailwind utilities` were in the same SCSS file or imported *after* the rules using `@apply`, the build might fail or produce incorrect CSS because the utilities wouldn't be available when `@apply` needs them. Separating them ensures Tailwind's base styles and utilities are generated first, making them available for `@apply` within the theme SCSS files.

4.  **CSS Variables for Dynamic Switching:**
    *   The themes define their specific look primarily through CSS Custom Properties (e.g., `--bg-primary`, `--text-primary`, `--border-color`).
    *   SCSS rules consume these variables (`background-color: var(--bg-primary);`).
    *   A simple client-side script (`ThemeSwitcher` component, likely in `Layout.tsx` or similar) changes the `data-theme` attribute on the `<html>` or `<body>` element. This instantly activates the corresponding CSS variable scope, changing the site's appearance without needing to reload styles or apply new classes via JavaScript.

## Performance Considerations

*   **Static Export:** The site uses Next.js's static export feature (`output: 'export'`). This generates plain HTML, CSS, and minimal JavaScript files, resulting in extremely fast load times and eliminating server-side rendering overhead.
*   **Minimal JavaScript:** The core resume content requires zero JavaScript to render. JS is only used for the non-essential theme-switching enhancement.

## Development Experience

*   **TypeScript:** Provides type safety for component props and resume data.
*   **SCSS:** Offers features like nesting and imports for better CSS organization.
*   **Tailwind:** Speeds up the definition of styles via `@apply`.
*   **IDE Configuration:** A known trade-off of using `@apply` within SCSS is that some IDE linters or language servers might show warnings for the `@apply` directive as an "unknown at-rule". This can usually be resolved by configuring the IDE or linter (e.g., setting `scss.lint.unknownAtRules: "ignore"` in VS Code's settings or using Stylelint with appropriate configuration). This should be noted in the project's README.

## Conclusion

This architecture prioritizes clean, semantic HTML while leveraging the strengths of both SCSS (organization, theming variables) and Tailwind CSS (utility classes via `@apply`). By carefully managing the build process and using CSS Custom Properties, it achieves efficient theme switching for a performant, maintainable, and accessible static website. 