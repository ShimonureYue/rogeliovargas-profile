import styled from 'styled-components';

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