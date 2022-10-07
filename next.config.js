/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  env: {
    base_url: 'http://localhost:3001',
  },
  swcMinify: true,
}

module.exports = nextConfig
