/** @type {import('next').NextConfig} */
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

const nextConfig = {
  output: 'export',
  sassOptions: {
    includePaths: ['./src/styles'],
  },
  experimental: {
    optimizeCss: true,
    optimizePackageImports: ['lodash-es'],
  },
  // Explicitly set React runtime to ensure no Preact dependencies
  compiler: {
    emotion: false,
  },
};

module.exports = withBundleAnalyzer(nextConfig); 