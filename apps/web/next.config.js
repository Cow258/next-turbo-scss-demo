/** @type {import('next').NextConfig} */
module.exports = {
  transpilePackages: ['client', 'shared'],
  reactStrictMode: false,
  experimental: {
    scrollRestoration: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    disableStaticImages: true,
    unoptimized: true,
  },
}
