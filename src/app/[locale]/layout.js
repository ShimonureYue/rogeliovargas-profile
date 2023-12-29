import { NextIntlClientProvider, useMessages } from 'next-intl';
import {unstable_setRequestLocale} from 'next-intl/server';
import { locales } from '@/navigation';
import LayoutClient from './LayoutClient';

export const metadata = {
  title: 'Rogelio Vargas',
  description: 'Rogelio Vargas - Profile',
};

const LocaleLayout = ({ children, params: { locale } }) => {
  unstable_setRequestLocale(locale);
  const messages = useMessages();
  return (
    <html lang={locale}>
      <body>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <LayoutClient>{children}</LayoutClient>
        </NextIntlClientProvider>
      </body>
    </html>
  );
};

export function generateStaticParams() {
  return locales.map((locale) => ({locale}));
};

export default LocaleLayout;
