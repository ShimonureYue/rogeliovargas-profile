'use client';
import StyledComponentsRegistry from '@/lib/registry';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
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
