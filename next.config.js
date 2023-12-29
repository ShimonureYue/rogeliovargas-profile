/** @type {import('next').NextConfig} */

const withNextIntl = require('next-intl/plugin')();

const nextConfig = {
  reactStrictMode: true,
  trailingSlash: true,
  compiler: {
    styledComponents: true,
  },
};

module.exports = withNextIntl(nextConfig);
