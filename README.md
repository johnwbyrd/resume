# Modern Resume: Semantic HTML Meets Tailwind Efficiency

Ever feel torn between writing clean, semantic HTML and the speed of utility-first CSS like Tailwind? Yeah, us too. This project tackles that head-on, offering a way to build themeable, high-performance websites that are a joy to maintain.

**The gist:** Keep your components clutter-free with meaningful HTML, while still using Tailwind's awesome utilities – just do it neatly inside your SCSS.

## The Challenge: Clean Markup vs. Fast Styling

I love semantic HTML. It's accessible and understandable -- the Way The Web Was Designed(TM).

But Tailwind-style utility classes are just so darned fast to develop with!  
Shoving dozens of utility classes directly into components, however, can lead to:

*   Markup that's hard to read and understand.
*   Difficulty maintaining consistent styling across a large application.
*   Themes becoming a tangled mess of conditional classes or complex JavaScript.

You end up paying for the free lunch, however, when you are trying to figure out what the heck you meant when you wrote `<div class="p-4 bg-blue-500 text-white font-bold">...`.

So, how do we have our cake and eat it too?

## Our Approach: Centralized Styling with `@apply`

I decided to combine tried-and-true CSS structure with modern tooling:

1.  **Write Semantic HTML (and *only* semantic HTML) in Components:** Your TSX looks clean, focusing on structure and meaning: `<article className="work-item">` or `<h2 className="section-title">`.
2.  **Organize Styles with SCSS:** Use SCSS for its strengths – importing files (`base.scss`, `simple-theme.scss`, etc.) and defining styles against those semantic selectors (`.work-item { ... }`).
3.  **Use Tailwind Utilities via `@apply` (Inside SCSS!):** This is the key! Instead of putting utilities in the HTML, apply them within your SCSS rules:
    ```scss
    // In your theme's SCSS file...
    .work-item {
      @apply mb-8 pt-4 border-t; // Use Tailwind utilities here!
      border-color: var(--border-color); // Use theme variables
    }
    ```
4.  **Theme with CSS Variables:** Define theme-specific looks (colors, fonts) using CSS Custom Properties scoped with `[data-theme="..."]`. A tiny bit of JavaScript swaps the `data-theme` attribute, and *poof* – instant theme change, no style recalculation needed.

**Why does this rock?**

*   **For Developers:** Your components stay squeaky clean. Styling logic lives where it belongs – in the stylesheets. Debugging is simpler. You still get to use the Tailwind utilities you know and love.
*   **For Managers:** This pattern encourages maintainable code. Consistency is baked in. It's easier for new devs to understand the structure vs. deciphering a million utility classes inline. Plus, it inherently promotes accessible markup.

## Key Benefits & Features

This approach leads to:

*   ✅ **Truly Semantic Markup:** Readable, accessible, and meaningful HTML.
*   ✅ **Maintainable Styling:** Centralized styles in SCSS, easy to update and scale.
*   ✅ **Efficient Theming:** CSS Variables + simple JS = instant theme swaps.
*   ✅ **Absurdly Fast Performance:** Built with Next.js static export for near-instant loads.
*   ✅ **Developer Velocity:** Get the speed of Tailwind without trashing your HTML.
*   ✅ **Standard Data:** Uses the common JSON Resume schema.

## See it in Action!

*(Placeholder: Consider adding a GIF or link to a live demo showing theme switching here!)*

## Learn More & Dive Deeper

Want the nitty-gritty technical details?

*   **[Technical Rationale](doc/rationale.md):** Explains *why* I chose this specific `@apply` strategy, how the build process works, and the full theme system details.
*   **[Todo List](doc/todo.md):** See what's next for the project.
*   **[Deployment Guide](doc/deployment.md):** Information on the automated deployment workflow and required configuration.

## Getting Started

### Prerequisites

*   Node.js (v18 or later)
*   npm / yarn / pnpm / bun

### Setup

1.  Clone the repository
2.  Install dependencies:
    ```bash
    npm install
    ```

### Available Scripts

*   `npm run dev` - Start development server
*   `npm run build` - Build for production (static export)
*   `npm run start` - Serve the built static site (requires `serve` package or similar)
*   `npm run lint` - Run ESLint

## Technical Stack Overview

*   **Framework:** Next.js (App Router, Static Export)
*   **Language:** TypeScript
*   **Styling:** SCSS, Tailwind CSS, CSS Custom Properties
*   **Data:** JSON Resume schema