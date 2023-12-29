/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  trailingSlash: true,
  i18n: {
    locales: ['en-US', 'es-MX'],
    defaultLocale: 'en-US',
    // localeDetection: false,
  },
  compiler: {
    styledComponents: true,
  },
};

module.exports = nextConfig
