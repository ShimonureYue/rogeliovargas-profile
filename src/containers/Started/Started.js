'use client'
import { useFullHeight } from '@/hooks';
import { Content, VerticalCenter, HorizontalCenter, Section } from '@/app/styled';
import { StartedContent, MainTitle, Subtitle, GlitchTitle } from './styled';

const Started = () => {
  const styleHeight = useFullHeight();
  
  return (
    <Content>
      <Section style={styleHeight}>
      <HorizontalCenter>
        <VerticalCenter >
          <StartedContent>
            <GlitchTitle data-text="I&apos;m Rogelio Vargas">I&apos;m Rogelio Vargas</GlitchTitle>
            <Subtitle>Software enginner</Subtitle>
          </StartedContent>
        </VerticalCenter>
      </HorizontalCenter>
      </Section>
    </Content> 
  );
};
  
  export default Started;