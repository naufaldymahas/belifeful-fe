import { FC } from 'react';
import EbookImage from '@assets/images/ebook.png';
import Container from '@components/atoms/Container';
import BodyContainer from '@components/atoms/BodyContainer';
import { Flex, FlexItem } from '@components/atoms/Flex';
import Card from '@components/atoms/Card';
import { ColorThemeEnum, FontWeightEnum } from '@styles/Theme';
import { Span } from '@components/atoms/Span';
import { Paragraph } from '@components/atoms/Paragraph';
import Input from '@components/atoms/Input';
import Button from '@components/atoms/Button';
import { Link } from 'react-router-dom';

const RegisterCTA: FC<{ width: number }> = ({ width }) => {
  return (
    <div className="w-100 p-relative">
      <div className="p-absolute w-100 h-100 overflow-hidden">
        <div className="p-relative h-100">
          <div
            className={`p-absolute w-${width > 1400 ? '50' : '75'}`}
            style={{
              bottom:
                width <= 768 ? '-3rem' : width <= 992 ? '-5rem' : '-9rem',
              left:
                width <= 768 ? '-6rem' : width <= 992 ? '-13rem' : '-18rem',
            }}
          >
            <img src={EbookImage} className="w-100 h-auto" />
          </div>
        </div>
      </div>
      <Container>
        <BodyContainer
          paddingTop={width <= 600 ? '4.5' : ''}
          justifyContent={width < 1200 ? 'center' : 'end'}
          style={{ paddingBottom: '11rem' }}
        >
          <FlexItem size="80" className="p-relative" style={{ zIndex: '5' }}>
            <Card className="w-100">
              <Flex
                flexDirection={width < 1200 ? 'column' : 'row'}
                justifyContent="space-between"
              >
                <FlexItem
                  size={width < 1200 ? '100' : '38'}
                  className={width < 1200 ? 'mb-5' : ''}
                >
                  <Paragraph
                    weight={FontWeightEnum.bold}
                    variant={ColorThemeEnum.lincolnGreen}
                    className="mb-5"
                    fs={width <= 992 ? '4' : '3'}
                  >
                    Membangun keluarga yang{' '}
                    <Span variant={ColorThemeEnum.coral}>lebih baik</Span>
                  </Paragraph>
                  <Span
                    weight={FontWeightEnum.bold}
                    variant={ColorThemeEnum.lincolnGreen}
                    fs="6"
                  >
                    Yuk kita mulai dengan membuat profil log in kamu
                  </Span>
                </FlexItem>
                <FlexItem size={width < 1200 ? '100' : '48'}>
                  <Paragraph
                    className="text-center"
                    fs="4"
                    weight={FontWeightEnum.bold}
                  >
                    Daftar
                  </Paragraph>
                  <form>
                    <Input className="mb-5" placeholder="Email Address" />
                    <Button
                      weight="800"
                      block
                      variant={ColorThemeEnum.gold}
                      className="mb-5"
                    >
                      Lanjutkan
                    </Button>
                  </form>
                  <Paragraph
                    variant={ColorThemeEnum.gray}
                    className="text-center"
                    weight={FontWeightEnum.bolder}
                  >
                    Sudah punya akun?{' '}
                    <Link to="/login" style={{ textDecoration: 'none' }}>
                      <Span variant={ColorThemeEnum.persianGreen}>Masuk</Span>
                    </Link>
                  </Paragraph>
                </FlexItem>
              </Flex>
            </Card>
          </FlexItem>
        </BodyContainer>
      </Container>
    </div>
  );
};

export default RegisterCTA;
