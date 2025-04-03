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
- **Automated Deployment**:
  - GitHub Actions workflow for continuous deployment
  - Automatic deployment to staging and production environments
  - Branch-based deployment strategy (develop → staging, main → production)
  - Secure handling of deployment credentials via GitHub Secrets

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

### Theme System
- **Explicit Theme Inheritance**:
  - Uses SCSS for clear theme relationships
  - Base theme → Retro theme → C64 theme inheritance chain
  - Each theme explicitly imports and extends its parent
- **CSS Custom Properties**:
  - Base theme defines core variables
  - Child themes inherit and override as needed
  - Enables runtime theme switching without JavaScript overhead
- **Hybrid Approach**:
  - Combines Tailwind's utility classes with SCSS theme inheritance
  - Tailwind for component-level styling
  - SCSS for theme organization and inheritance
  - CSS Custom Properties for dynamic theme switching

### Performance Optimization
- Static site generation eliminates client-side rendering overhead
- Minimal JavaScript footprint
- Optimized asset loading
- Perfect Core Web Vitals scores

### Deployment Strategy
- **Continuous Deployment**: Changes are automatically deployed when pushed to the appropriate branch
- **Environment Separation**: 
  - Staging environment for testing and preview
  - Production environment for the live site
- **Secure Credentials**: 
  - SSH keys stored as GitHub Secrets
  - No hardcoded credentials in the codebase
- **Simple Process**:
  - Push to `develop` branch → Deploy to staging
  - Push to `main` branch → Deploy to production

### GitHub Secrets Configuration
The deployment workflow requires the following secrets to be added to your GitHub repository:

1. **Staging Environment**:
   - `STAGING_HOST`: The hostname or IP address of the staging server
   - `STAGING_USER`: The SSH username for the staging server
   - `STAGING_SSH_KEY`: The private SSH key for authentication
   - `STAGING_PATH`: The target directory path on the staging server

2. **Production Environment**:
   - `PRODUCTION_HOST`: The hostname or IP address of the production server
   - `PRODUCTION_USER`: The SSH username for the production server
   - `PRODUCTION_SSH_KEY`: The private SSH key for authentication
   - `PRODUCTION_PATH`: The target directory path on the production server

To add these secrets:
1. Go to your GitHub repository
2. Navigate to Settings → Secrets and Variables → Actions
3. Click "New repository secret"
4. Add each secret with its corresponding value
5. Make sure to use the exact secret names as listed above

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
- `.github/workflows` - GitHub Actions deployment workflows

## Features
- Multiple theme support with semantic styling
- Responsive design
- Print-friendly layout
- TypeScript support
- ESLint and Prettier integration
- Automated deployment to staging and production