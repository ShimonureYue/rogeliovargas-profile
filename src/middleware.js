import createMiddleware from 'next-intl/middleware';
import {locales, localePrefix} from './navigation';
 
export default createMiddleware({
  // Used when no locale matches
  defaultLocale: 'en',
  // A list of all locales that are supported
  locales,
  localePrefix,
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
});
 
export const config = {
  // Match only internationalized pathnames
  matcher: ['/', '/(es|en)/:path*']
};