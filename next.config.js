/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  optimizeFonts: false,
  publicRuntimeConfig: {
    react_app_api_url: process.env.REACT_APP_API_URL,
  },
  images: {
    domains: ['avatars.githubusercontent.com'],
  }
}

module.exports = nextConfig
