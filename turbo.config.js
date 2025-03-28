module.exports = {
  // Configure Turbopack optimization rules
  rules: [
    {
      // Match all JavaScript/TypeScript files
      test: /\.(js|jsx|ts|tsx)$/,
      // Apply minification
      use: {
        name: 'minify',
        options: {
          // Disable console.log statements in production
          dropConsole: true,
          // Keep error logs for debugging
          keepErrors: true,
          // Additional minification options
          mangle: true,
          compress: {
            dead_code: true,
            drop_debugger: true,
            conditionals: true,
            evaluate: true,
            unused: true,
          },
        },
      },
    },
    {
      // Match all CSS files
      test: /\.css$/,
      // Optimize CSS
      use: [
        'optimize-css',
        {
          name: 'postcss',
          options: {
            // Minify CSS
            minimize: true,
            // Add vendor prefixes
            autoprefixer: true,
          },
        }
      ],
    }
  ],
  resolve: {
    alias: {
      // Use smaller packages where possible
      'lodash': 'lodash-es',
    },
  },
  // Optimize output
  output: {
    // Generate deterministic IDs for faster builds
    deterministic: true,
  },
}; 