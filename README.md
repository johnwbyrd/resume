# Resume Website

A modern, themeable resume website built with Next.js and React.

## Prerequisites

- Node.js (v18 or later)
- npm or yarn or pnpm or bun
- VSCode (recommended)

## Setup

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   # or
   bun install
   ```

## Development

### Running the Development Server

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

The site will be available at [http://localhost:3000](http://localhost:3000).

### VSCode Setup

1. Install recommended extensions:
   - ESLint
   - Prettier
   - TypeScript and JavaScript Language Features

2. Debug Configuration:
   Create or update `.vscode/launch.json`:
   ```json
   {
     "version": "0.2.0",
     "configurations": [
       {
         "name": "Next.js: debug",
         "type": "node-terminal",
         "request": "launch",
         "command": "npm run dev",
         "serverReadyAction": {
           "pattern": "started server on .+, url: (https?://.+)",
           "uriFormat": "%s",
           "action": "debugWithChrome"
         }
       }
     ]
   }
   ```

3. To debug:
   - Set breakpoints in your code
   - Press F5 or select "Run and Debug" from the sidebar
   - Choose "Next.js: debug" configuration
   - The browser will open automatically when the server is ready

### Available Scripts

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Project Structure

- `src/app` - Next.js app router pages
- `src/components` - React components
- `src/data` - JSON data files
- `src/themes` - Theme configuration
- `src/utils` - Utility functions

## Features

- Multiple theme support
- Responsive design
- Print-friendly layout
- TypeScript support
- ESLint and Prettier integration