import styled from 'styled-components';
import { blueLight } from '@/app/colors';

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
  background:  ${blueLight};
  z-index: 2;
`;

export const LineLeft = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 30px;
  height: 100%;
  background:  ${blueLight};
  z-index: 2;
`;

export const LineRight = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  width: 30px;
  height: 100%;
  background:  ${blueLight};
  z-index: 2;
`;

export const LineBottom = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 30px;
  background:  ${blueLight};
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
  height: calc( 100vh - 60px);
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
  transition: all 0.5s ease 0s;
`;

