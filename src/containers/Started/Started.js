'use client'
import { useFullHeight } from '@/hooks';
import { Content, VerticalCenter, HorizontalCenter, Section } from '@/app/styled';
import { StartedContent, WrappSubtitle, Subtitle, GlitchTitle } from './styled';



const Started = () => {
  const styleHeight = useFullHeight();
  const texts = {
    title: "I'm Rogelio Vargas",
    subtitle: 'Software Enginner'
  }
  
  return (
    <Content>
      <Section style={styleHeight}>
      <HorizontalCenter>
        <VerticalCenter >
          <StartedContent>
            <GlitchTitle data-text={texts.title}>{texts.title}</GlitchTitle>
            <WrappSubtitle>
              <Subtitle $characters={texts.subtitle.length}>{texts.subtitle}</Subtitle>  
            </WrappSubtitle>
          </StartedContent>
        </VerticalCenter>
      </HorizontalCenter>
      </Section>
    </Content> 
  );
};
  
  export default Started;