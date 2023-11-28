// https://dev.to/rashidshamloo/using-styled-components-with-nextjs-v13-typescript-2l6m#5
import { createGlobalStyle } from 'styled-components';
import { blueDark, whiteDark } from '@/app/colors';
import { roboto_mono } from '@/app/fonts';

const styled = { createGlobalStyle }

const GlobalStyles = styled.createGlobalStyle`
html,
body {
  background: ${blueDark};
  font-family: ${roboto_mono.style.fontFamily}, sans;
  font-size: 16px;
  font-weight: 400;
  color: ${whiteDark};
  margin: 0;
}
`;

export default GlobalStyles;