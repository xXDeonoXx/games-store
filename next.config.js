/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  sassOptions: {
    additionalData: `@import "src/styles/common.scss"; @import "src/styles/mixins.scss";`,
  },
  images: {
    domains: ['m.media-amazon.com'],
  },
};

module.exports = nextConfig;
