'use client'
import { Roboto_Mono } from 'next/font/google';
import GlobalStyle from "./GlobalStyle";

const roboto_mono = Roboto_Mono({ subsets: ['latin'] })

const Main = ({ children }) => {
    return (
      <>
        <GlobalStyle />
        <html lang="en">
            <body className={roboto_mono.className}>{children}</body>
        </html>
      </> 
    );
  };
  
  export default Main;