/** @type {import('next').NextConfig} */
const nextConfig = {
  extends: 'galex',
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
};

module.exports = nextConfig;
