/** @type {import('next').NextConfig} */
// eslint-disable-next-line @typescript-eslint/no-require-imports
const withPWA = require('next-pwa')({
  dest: 'public',
  register: true,
  skipWaiting: true,
  disable: process.env.NODE_ENV === 'development',
});

const nextConfig = {
  images: {
    domains: ['lh3.googleusercontent.com','media.licdn.com'],
  },
  experimental: {
    serverComponentsExternalPackages: ['mongodb'],
  },
  // Any other Next.js config options
};

module.exports = withPWA(nextConfig);