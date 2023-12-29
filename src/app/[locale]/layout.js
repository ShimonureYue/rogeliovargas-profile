import { NextIntlClientProvider, useMessages } from 'next-intl';
import LayoutClient from './LayoutClient';

export const metadata = {
  title: 'Rogelio Vargas',
  description: 'Rogelio Vargas - Profile',
};

const RootLayout = ({ children, params: { locale } }) => {
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

export default RootLayout;
