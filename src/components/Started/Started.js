'use client';
import { useTranslations } from 'next-intl';
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
  const t = useTranslations('Started');
  const styleHeight = useFullHeight();
  return (
    <Content>
      <Section style={styleHeight}>
        <HorizontalCenter>
          <VerticalCenter>
            <StartedContent>
              <GlitchTitle aria-label={t('title')} data-text={t('title')}>{t('title')}</GlitchTitle>
              <Subtitle>
                <TypeAnimation
                  aria-label={`${t('subtitle')}, ${t('location')}`}
                  sequence={[t('subtitle'), 500, t('location'), 500]}
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
