import { createGlobalStyle } from 'styled-components';
import { darkGray, lightGray } from '@/app/colors'
 
const GlobalStyle = createGlobalStyle`
  html,
  body {
    background: ${darkGray};
    font-family: 'Roboto Mono', sans;
    font-size: 16px;
    color: ${lightGray};
    height: 100%;
    margin: 0;
  }
  
  
`;
 
export default GlobalStyle;