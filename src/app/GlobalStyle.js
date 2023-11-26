// https://dev.to/rashidshamloo/using-styled-components-with-nextjs-v13-typescript-2l6m#5
import { createGlobalStyle } from 'styled-components';
import { darkGray, lightGray } from '@/app/colors';
import { roboto_mono } from '@/app/fonts';

const styled = { createGlobalStyle }

const GlobalStyles = styled.createGlobalStyle`
html,
body {
  background: ${darkGray};
  font-family: ${roboto_mono.style.fontFamily}, sans;
  font-size: 16px;
  font-weight: 400;
  color: ${lightGray};
  margin: 0;
}
`;

export default GlobalStyles;