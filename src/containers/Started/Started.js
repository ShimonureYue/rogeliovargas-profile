'use client'
import { useFullHeight } from '@/hooks';
import { Content, VerticalCenter, HorizontalCenter, Section } from '@/app/styled';
import { StartedContent } from './styled';

const Started = () => {
  const styleHeight = useFullHeight();
  
  return (
    <Content>
      <Section style={styleHeight}>
      <HorizontalCenter>
        <VerticalCenter >
          <StartedContent>
            <h1>I&apos;m Rogelio Vargas</h1>
            <p>Software enginner</p>
          </StartedContent>
        </VerticalCenter>
      </HorizontalCenter>
      </Section>
    </Content> 
  );
};
  
  export default Started;