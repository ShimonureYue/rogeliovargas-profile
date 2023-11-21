'use client';
import { Main } from '@/containers/Main';
import { Header } from '@/containers/Header';
import { Container, LineTop, LineLeft, LineRight, LineBottom } from './styled';

export default function Home() {
  return (
    <Container>
      <Header />
      <main>
        <Main />
      </main>
      <LineTop />
      <LineLeft />
      <LineRight />
      <LineBottom />
    </Container>
  );
}
