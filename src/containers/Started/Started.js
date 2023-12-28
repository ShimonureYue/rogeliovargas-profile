'use client';
import { TypeAnimation } from 'react-type-animation';
import { useFullHeight } from '@/hooks';
import {
  Content,
  VerticalCenter,
  HorizontalCenter,
  Section,
} from '@/app/styled';
import { StartedContent, Subtitle, GlitchTitle } from './styled';

const Started = () => {
  const styleHeight = useFullHeight();
  const texts = {
    title: "I'm Rogelio Vargas",
    subtitle: 'Software Enginner',
    location: 'Based in Mexico City',
  };

  return (
    <Content>
      <Section style={styleHeight}>
        <HorizontalCenter>
          <VerticalCenter>
            <StartedContent>
              <GlitchTitle aria-label={texts.title} data-text={texts.title}>{texts.title}</GlitchTitle>
              <Subtitle>
                <TypeAnimation
                  aria-label={`${texts.subtitle}, ${texts.location}`}
                  sequence={[texts.subtitle, 500, texts.location, 500]}
                  repeat={Infinity}
                />
              </Subtitle>
            </StartedContent>
          </VerticalCenter>
        </HorizontalCenter>
      </Section>
    </Content>
  );
};

export default Started;
