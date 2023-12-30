'use client';
import { useTranslations } from 'next-intl';

import { TypeAnimation } from 'react-type-animation';
import { PageLayout } from '@/components/PageLayout';
import {
  Content,
  Section,
  HorizontalCenter,
  VerticalCenter,
} from '@/components/styled';
import { useFullHeight } from '@/hooks';
import { StartedContent, GlitchTitle, Subtitle } from './styled';

const Page = () => {
  const styleHeight = useFullHeight();
  const t = useTranslations('LocalePage');
  return (
    <PageLayout>
      <Content>
        <Section style={styleHeight}>
          <HorizontalCenter>
            <VerticalCenter>
              <StartedContent>
                <GlitchTitle aria-label={t('title')} data-text={t('title')}>
                  {t('title')}
                </GlitchTitle>
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
    </PageLayout>
  );
};

export default Page;
