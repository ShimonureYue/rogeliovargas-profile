'use client'
import { useLocale } from 'next-intl';
import { useTransition } from 'react';
import { useRouter, usePathname } from '@/navigation';
import { Head, Content } from './styled';


const Header = () => {
  const router = useRouter();
  const pathname = usePathname();
  const locale = useLocale();
  const [, startTransition] = useTransition();
  return (
    <Head>
      <Content>
      <select
        defaultValue={locale}
        onChange={e => {
          console.log('e', e.target.value)
          const nextLocale = e.target.value;
          startTransition(() => {
            router.push(pathname, {locale: nextLocale});
          });
        }}
      >
        <option value="en">English</option>
        <option value="es">Español</option>
      </select>
      </Content>
    </Head> 
  );
};
  
export default Header;