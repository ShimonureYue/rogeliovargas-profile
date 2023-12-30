import { NextIntlClientProvider } from 'next-intl';
import { notFound } from 'next/navigation'
import {getTranslations, unstable_setRequestLocale} from 'next-intl/server';
import { locales } from '@/config';

export async function generateMetadata({ params: {locale} }) {
  const t = await getTranslations({locale, namespace: 'LocaleLayout'});

  return {
    title: t('title'),
    description: t('description')
  };
}

export function generateStaticParams() {
  return locales.map((locale) => ({locale}));
};

async function getMessages(locale) {
  try {
    return (await import(`../../../messages/${locale}.json`)).default
  } catch (error) {
    notFound()
  }
}


export default async function LocaleLayout  ({ children, params: { locale } }) {
  
  unstable_setRequestLocale(locale);
  const messages = await getMessages(locale);
 
  return (
    <html lang={locale}>
      <body>
        <NextIntlClientProvider locale={locale} messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
};

