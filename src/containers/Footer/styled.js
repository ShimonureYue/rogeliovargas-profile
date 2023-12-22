import styled from 'styled-components';
import { blueDark, white, whiteDark } from '@/app/colors';

export const Wrapp = styled.footer`
  min-height: 64px;
  position: fixed;
  bottom: 30px;
  left: 0;
  color: ${white};
  width: 100%;
  background: ${blueDark};
  opacity: 1;
  visibility: visible;
  z-index: 1;
`;

export const Content = styled.div`
  padding: 15px 60px 30px 60px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  @media (max-width: 480px) {
    align-items: center;
    flex-direction: column-reverse;
  }
`;

export const Copy = styled.div`
  font-size: 11px;
  float: left;
  color: ${whiteDark};
`;

export const Social = styled.div`
  color: ${whiteDark};
  float: right;

  & > a {
    padding-left: 1rem;
    color: ${whiteDark};
  }
  
  @media (max-width: 480px) {
    padding-bottom: 0.5rem;

    & > a {
      padding-left: 0.5rem;
      padding-right: 0.5rem;
    }
  }
`;