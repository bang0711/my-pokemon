/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ["raw.githubusercontent.com", "nexus.traction.one"],
  },
};

module.exports = nextConfig;
