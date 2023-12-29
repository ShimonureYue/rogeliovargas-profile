import styled from 'styled-components';
import { blueDark, white } from '@/app/colors';

export const Head = styled.header`
  height: 87px;
  position: fixed;
  top: 30px;
  left: 0;
  color: ${white};
  width: 100%;
  background: ${blueDark};
  opacity: 1;
  visibility: visible;
  z-index: 1;
`;

export const Content = styled.div`
  padding: 30px 65px 15px 65px;
`;