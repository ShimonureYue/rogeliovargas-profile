'use client';
import StyledComponentsRegistry from '@/lib/registry';
import { Header } from '@/containers/Header';
import { Footer } from '@/containers/Footer';
import GlobalStyles from './GlobalStyle';
import { Container, LineTop, LineLeft, LineRight, LineBottom } from '@/app/styled';

const LayoutClient = ({ children }) => {
  return (
    <StyledComponentsRegistry>
      <GlobalStyles />
      <Header />
      <Container>{children}</Container>
      <Footer />
      <LineTop />
      <LineLeft />
      <LineRight />
      <LineBottom />
    </StyledComponentsRegistry>
  );
};

export default LayoutClient;
