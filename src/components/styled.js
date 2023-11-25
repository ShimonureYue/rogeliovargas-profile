import styled from 'styled-components';
import { dark } from '@/app/colors';

export const Container = styled.div`
  position: relative;
  margin: 30px;
`;

export const LineTop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 30px;
  background:  ${dark};
`;

export const LineLeft = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 30px;
  height: 100%;
  background:  ${dark};
`;

export const LineRight = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  width: 30px;
  height: 100%;
  background:  ${dark};
`;

export const LineBottom = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 30px;
  background:  ${dark};
`;

