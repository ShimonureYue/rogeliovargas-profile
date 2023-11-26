'use client';
import StyledComponentsRegistry from '@/lib/registry';
import { Header } from '@/containers/Header';
import GlobalStyles from './GlobalStyle';
import { Container, LineTop, LineLeft, LineRight, LineBottom } from './styled';

const LayoutClient = ({ children }) => {
  return (
    <StyledComponentsRegistry>
      <GlobalStyles />
      <Header />
      <Container>{children}</Container>
      <LineTop />
      <LineLeft />
      <LineRight />
      <LineBottom />
    </StyledComponentsRegistry>
  );
};

export default LayoutClient;
