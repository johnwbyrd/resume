import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx,css}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx,css}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx,css}',
  ],
  darkMode: 'class', // Enable dark mode with class strategy
  theme: {
    extend: {
      // We'll add theme-specific extensions here
    },
  },
  plugins: [],
}

export default config 