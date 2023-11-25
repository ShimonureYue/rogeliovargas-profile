'use client';
import { Started } from '@/containers/Started';
import { Header } from '@/containers/Header';
import { Container, LineTop, LineLeft, LineRight, LineBottom } from './styled';

export default function Home() {
  return (
    <Container>
      <Header />
      <main>
        <Started />
      </main>
      <LineTop />
      <LineLeft />
      <LineRight />
      <LineBottom />
    </Container>
  );
}
