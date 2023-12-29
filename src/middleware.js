import createMiddleware from 'next-intl/middleware';
import {pathnames, locales, localePrefix} from './config';
 
export default createMiddleware({
  // Used when no locale matches
  defaultLocale: 'en',
  // A list of all locales that are supported
  locales,
  localePrefix,
  pathnames,
  /*
  domains: [
    {
      domain: 'rogeliovargas.com',
      defaultLocale: 'en',
      // Optionally restrict the locales managed by this domain. If this
      // domain receives requests for another locale (e.g. us.example.com/fr),
      // then the middleware will redirect to a domain that supports it.
      locales
    },
  ]
  */
});
 
export const config = {
  matcher: [
    // Enable a redirect to a matching locale at the root
    '/',

    // Set a cookie to remember the previous locale for
    // all requests that have a locale prefix
    '/(es|en)/:path*',

    // Enable redirects that add missing locales
    // (e.g. `/pathnames` -> `/en/pathnames`)
    '/((?!_next|_vercel|.*\\..*).*)'
  ]
};