'use client'
import { useRef, useState, useEffect } from 'react';
import { Content, VerticalCenter, HorizontalCenter, SectionStarted, StartedContent } from './styled';

const Started = () => {
  const [mainHeight, setMainHeight] = useState();
  const mainRef = useRef();
  
  useEffect(() => {
    function handleResize() {
      const mainY = window.innerHeight - 60;
      setMainHeight({ height: `${mainY}px`})
    }
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [mainRef]);
  return (
    <Content>
      <SectionStarted style={mainHeight}>
      <HorizontalCenter>
        <VerticalCenter ref={mainRef} >
          <StartedContent>
            <h1>I&apos;m Rogelio Vargas</h1>
            <p>Software enginner</p>
          </StartedContent>
        </VerticalCenter>
      </HorizontalCenter>
      </SectionStarted>
    </Content> 
  );
};
  
  export default Started;