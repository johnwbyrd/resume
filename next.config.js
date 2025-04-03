/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  sassOptions: {
    includePaths: ['./src/styles'],
  },
};

module.exports = nextConfig; 