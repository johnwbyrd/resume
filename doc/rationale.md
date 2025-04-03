# Technical Rationale

## Data Structure and Schema

The project uses the [JSON Resume schema](https://jsonresume.org/) as its data foundation. This decision was made for several reasons:

1. **Industry Standard**: The JSON Resume schema is widely adopted and well-documented, making it easy to:
   - Import data from other resume tools
   - Export data to other formats
   - Integrate with other services
   - Share and validate resume data

2. **Structured Data**: The schema provides a clear, hierarchical structure that:
   - Separates content from presentation
   - Makes data validation straightforward
   - Enables easy data transformation
   - Supports internationalization

## Semantic Component Architecture

The component architecture emphasizes semantic meaning over visual presentation:

1. **Component Structure**:
   - Components are named and organized by their semantic purpose (e.g., `Work`, `Education`, `Skills`)
   - Each component represents a logical section of the resume
   - Components are independent and self-contained

2. **Styling Approach**:
   - Tailwind classes are assigned through props rather than hardcoded
   - This enables:
     - Theme customization without component modification
     - Consistent styling across different themes
     - Easy maintenance and updates
     - Clear separation of concerns

3. **Type Safety**:
   - TypeScript interfaces define the expected data structure
   - Props are strongly typed
   - Runtime type checking validates data

## Performance Optimization

The project achieves exceptional performance through several key strategies:

1. **Static Site Generation**:
   - Next.js's static export feature generates pure HTML/CSS/JS
   - No server-side rendering at runtime
   - No client-side hydration needed for core content
   - Perfect Core Web Vitals scores

2. **Minimal JavaScript**:
   - Core content is pure HTML and CSS
   - JavaScript is only used for theme switching
   - No unnecessary client-side computation
   - No framework overhead for static content

3. **Optimized Assets**:
   - CSS is minified and optimized
   - Images are optimized at build time
   - No unnecessary dependencies
   - Small bundle size

4. **Modern Browser Features**:
   - Uses modern CSS features for layout
   - Leverages browser-native capabilities
   - No polyfills needed
   - Progressive enhancement

## Development Experience

While the output is simple and performant, the development experience leverages modern tools:

1. **TypeScript**:
   - Provides strong type safety
   - Enhances IDE support
   - Catches errors at compile time
   - Improves code maintainability

2. **Next.js**:
   - Provides excellent development tools
   - Enables fast refresh
   - Offers built-in optimizations
   - Supports modern React features

3. **Tailwind CSS**:
   - Enables rapid styling
   - Maintains consistency
   - Reduces CSS bundle size
   - Supports theme customization

## Theme Architecture

The project implements a sophisticated theme inheritance system using SCSS:

1. **Explicit Theme Inheritance**:
   - Base theme defines core variables and styles
   - Retro theme inherits from and extends base theme
   - C64 theme inherits from and extends retro theme
   - Each theme explicitly imports its parent using SCSS `@import`

2. **CSS Custom Properties for Inheritance**:
   - Base theme establishes root variables
   - Child themes inherit and override variables as needed
   - Enables cascading of styles while maintaining explicit relationships
   - Provides clear documentation of theme dependencies

3. **Integration with Tailwind**:
   - While Tailwind provides utility classes for rapid development
   - Theme system provides semantic variables and inheritance
   - This hybrid approach combines:
     - Tailwind's utility-first workflow for components
     - SCSS's powerful inheritance for theme organization
     - CSS Custom Properties for runtime theme switching

4. **Benefits Over Pure Tailwind**:
   - More maintainable theme hierarchy
   - Clearer relationships between themes
   - Better separation of concerns:
     - Tailwind for component-level styling
     - SCSS for theme-level organization
     - CSS Custom Properties for theme switching

## Conclusion

This project demonstrates that modern web development tools can be used to create exceptionally performant websites. By focusing on:

1. Semantic structure
2. Static generation
3. Minimal JavaScript
4. Type safety

We achieve a website that:
- Loads instantly
- Works without JavaScript
- Is easy to maintain
- Provides a great development experience

The end result is a resume website that combines the best of modern development practices with the simplicity and performance of traditional web technologies. 