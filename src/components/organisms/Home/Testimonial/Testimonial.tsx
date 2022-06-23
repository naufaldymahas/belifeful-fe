import BodyContainer from '@components/atoms/BodyContainer';
import Container from '@components/atoms/Container';
import { Flex, FlexItem } from '@components/atoms/Flex';
import { Paragraph } from '@components/atoms/Paragraph';
import { Span } from '@components/atoms/Span';
import { ColorThemeEnum, FontWeightEnum } from '@styles/Theme';
import { FC, useMemo } from 'react';
import { TestimonialCard, TestimonialBackground } from './Testimonial.style';

const Testimonial: FC<{ width: number }> = ({ width }) => {
  const testimonialContents = useMemo(
    () => [
      'Ilmu nya benar-benar bermanfaat buat new parents yang masih clueless soal mengurus newborn',
      'Pemaparan dari bidan Laily sangatlah jelas dibarengi dengan prakteknya langsung',
      'Pemaparan dari bidan Laily sangatlah jelas dibarengi dengan prakteknya langsung',
      'Pemaparan dari bidan Laily sangatlah jelas dibarengi dengan prakteknya langsung',
      'Pemaparan dari bidan Laily sangatlah jelas dibarengi dengan prakteknya langsung',
      'Pemaparan dari bidan Laily sangatlah jelas dibarengi dengan prakteknya langsung',
      'Pemaparan dari bidan Laily sangatlah jelas dibarengi dengan prakteknya langsung',
      'Pemaparan dari bidan Laily sangatlah jelas dibarengi dengan prakteknya langsung',
      'Pemaparan dari bidan Laily sangatlah jelas dibarengi dengan prakteknya langsung',
      'Pemaparan dari bidan Laily sangatlah jelas dibarengi dengan prakteknya langsung',
      'Pemaparan dari bidan Laily sangatlah jelas dibarengi dengan prakteknya langsung',
      'Pemaparan dari bidan Laily sangatlah jelas dibarengi dengan prakteknya langsung',
    ],
    []
  );
  return (
    <div className="p-relative overflow-hidden" style={{ zIndex: '2' }}>
      <TestimonialBackground />
      <Container className="mb-6">
        <BodyContainer
          flexDirection="column"
          style={{ backgroundColor: 'transparent' }}
        >
          <Paragraph
            weight={FontWeightEnum.bolder}
            variant={ColorThemeEnum.lincolnGreen}
            className="mx-auto text-center"
            style={{ marginBottom: '4rem' }}
            fs={width < 1200 ? '4' : '3'}
          >
            Testimonial
          </Paragraph>
          <div className="px-5 white-space-no-wrap">
            <Flex className="w-100 overflow-auto pb-6">
              {testimonialContents.map((content, i) => (
                <FlexItem key={i} className="mx-5">
                  <TestimonialCard
                    alignItems="center"
                    style={{
                      backgroundColor: i % 2 === 0 ? '#FFFCDE' : '#EDF8EE',
                    }}
                  >
                    <Span weight={FontWeightEnum.bold}>{content}</Span>
                  </TestimonialCard>
                </FlexItem>
              ))}
            </Flex>
          </div>
        </BodyContainer>
      </Container>
    </div>
  );
};

export default Testimonial;
