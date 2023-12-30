/** @type {import('next').NextConfig} */

const withNextIntl = require('next-intl/plugin')();

const nextConfig = {
  output: 'export',
  reactStrictMode: true,
  trailingSlash: true,
  experimental: {
    webpackBuildWorker: true 
  },
  compiler: {
    styledComponents: true,
  },
};

module.exports = withNextIntl(nextConfig);
