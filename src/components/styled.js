import styled from 'styled-components';
import { dark } from '@/app/colors';

export const Container = styled.main`
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
  z-index: 2;
`;

export const LineLeft = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 30px;
  height: 100%;
  background:  ${dark};
  z-index: 2;
`;

export const LineRight = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  width: 30px;
  height: 100%;
  background:  ${dark};
  z-index: 2;
`;

export const LineBottom = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 30px;
  background:  ${dark};
  z-index: 2;
`;

export const Content = styled.div`
  margin: 0 auto;
  max-width: 1060px;
  overflow: hidden;
`;

export const VerticalCenter = styled.div`
  display: table-cell;
  vertical-align: middle;
`;

export const HorizontalCenter =  styled.div`
  display: table;
  table-layout: fixed;
  width: 100%;
  height: 100%;
`;

export const Section = styled.div`
  position: relative;
  text-align: center;
`;

