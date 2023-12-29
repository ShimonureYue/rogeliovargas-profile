'use client';
import { Started } from '@/components/Started';
import { Header } from '@/components/Header';
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
