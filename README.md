# Resume template

## Bundle Optimization

This project uses Turbopack for minimal bundle size:

### Key Optimizations

- **Static Generation**: Uses Next.js static export for optimal performance
- **CSS Optimization**: Enabled with `optimizeCss` and `critters` for CSS inlining
- **JavaScript Minification**: Configured via Turbopack rules
- **No-JS Fallback**: Static HTML version available at `/nojs.html`
- **Bundle Analysis**: Run `ANALYZE=true npm run build` to generate reports

### Bundler Configuration

This project uses Next.js 15's default bundler:

- **Turbopack**: Optimized via `turbo.config.js` with custom rules for minification and CSS optimization

### Development

```bash
# Development server with hot reloading
npm run dev

# Production build with bundle analysis
ANALYZE=true npm run build

# Serve the static build
npx serve out
```

### Architecture

- Server components are used where possible to reduce client JS
- Only essential interactivity is included in client components
- CSS is optimized and inlined in the HTML
- Polyfills are only included when necessary
