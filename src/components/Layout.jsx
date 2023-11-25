'use client'
import { Roboto_Mono } from 'next/font/google';
import { Header } from '@/containers/Header';
import GlobalStyle from "./GlobalStyle";
import { Container, LineTop, LineLeft, LineRight, LineBottom } from './styled';

const roboto_mono = Roboto_Mono({ subsets: ['latin'] })

const Layout = ({ children }) => {
    return (
      <>
        <GlobalStyle />
        <html lang="en">
            <body className={roboto_mono.className}>
              <Container>
                <Header />
                <main>{children}</main>
              </Container>
              <LineTop />
              <LineLeft />
              <LineRight />
              <LineBottom />
            </body>
        </html>
      </> 
    );
  };
  
  export default Layout;