# Modern Resume Website

A high-performance, themeable resume website built with Next.js, TypeScript, and Tailwind CSS. This project demonstrates modern web development practices with a focus on performance, maintainability, and semantic design.

## Key Features

- **Industry-Standard Data Format**: Uses the widely-adopted JSON Resume schema for data structure, making it easy to import/export resume data and integrate with other tools
- **Semantic Component Architecture**: 
  - Components are structured around semantic meaning rather than visual presentation
  - Clear separation between data structure and visual styling
  - Flexible assignment of Tailwind classes through component props
- **Static Site Generation**:
  - Fully static output for maximum performance
  - Zero JavaScript runtime overhead for core content
  - Exceptionally fast page loads and perfect Lighthouse scores
- **TypeScript Integration**:
  - Strong type safety throughout the application
  - Enhanced development experience with better IDE support
  - Runtime type checking for data validation

## Documentation

For more detailed information about this project, please refer to the following documents:

- [Technical Rationale](doc/rationale.md) - Detailed explanation of the technical decisions, architecture, and performance optimizations
- [Project Plan](doc/plan.md) - Overview of the project roadmap and development strategy
- [Todo List](doc/todo.md) - Current tasks and future enhancements

## Technical Highlights

### Data Structure
The resume data follows the [JSON Resume schema](https://jsonresume.org/), an industry standard that includes:
- Basic information
- Work experience
- Education
- Skills
- Projects
- Volunteer work

### Component Architecture
- Semantic component structure separates content meaning from presentation
- Tailwind classes are assigned through props, allowing for:
  - Theme customization without component modification
  - Consistent styling across themes
  - Easy maintenance and updates

### Performance Optimization
- Static site generation eliminates client-side rendering overhead
- Minimal JavaScript footprint
- Optimized asset loading
- Perfect Core Web Vitals scores

## Development

### Prerequisites
- Node.js (v18 or later)
- npm or yarn or pnpm or bun
- VSCode (recommended)

### Setup
1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

### Available Scripts
- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Project Structure
- `src/app` - Next.js app router pages
- `src/components` - React components
- `src/data` - JSON Resume data
- `src/themes` - Theme configuration
- `src/utils` - Utility functions

## Features
- Multiple theme support with semantic styling
- Responsive design
- Print-friendly layout
- TypeScript support
- ESLint and Prettier integration