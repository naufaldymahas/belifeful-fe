import Button from '@components/atoms/Button';
import { Flex, FlexItem } from '@components/atoms/Flex';
import { Heading2, Heading3 } from '@components/atoms/Heading';
import { Paragraph } from '@components/atoms/Paragraph';
import { Span } from '@components/atoms/Span';
import { ColorThemeEnum, FontWeightEnum } from '@styles/Theme';
import { useNavigate } from 'react-router';
import { BodyContainer } from './Home.style';
import ParentingImage from '@assets/images/parenting.png';
import DefaultLayout from '@layouts/Default.layout';
import { useGlobalContext } from '@contexts/Global.context';
import Card from '@components/atoms/Card';
import Input from '@components/atoms/Input';
import { Link } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();
  const {
    state: { width },
  } = useGlobalContext();

  return (
    <DefaultLayout>
      <BodyContainer
        paddingTop={width <= 600 ? '4.5' : ''}
        paddingX={width <= 600 ? '0' : ''}
        flexDirection={width <= 600 ? 'column' : 'row'}
      >
        <FlexItem
          size={width <= 600 ? '100' : '50'}
          style={{
            order: width <= 600 ? '2' : '1',
            paddingLeft: width <= 600 ? '2rem' : '0',
            paddingRight: width <= 600 ? '2rem' : '0',
          }}
        >
          <Heading2
            variant={ColorThemeEnum.lincolnGreen}
            weight={FontWeightEnum.bolder}
            className='mb-5'
          >
            Edukasi <Span variant={ColorThemeEnum.coral}>terbaik</Span> untuk
            keluarga kecil mu
          </Heading2>
          <Paragraph
            variant={ColorThemeEnum.lincolnGreen}
            weight={FontWeightEnum.bold}
            fs='5'
            className='mb-5'
          >
            Apapun permasalahan kamu temukan jawabannya disini
          </Paragraph>
          <Button
            variant={ColorThemeEnum.gold}
            weight='800'
            size='md'
            onClick={() => navigate('/register')}
            className={width <= 600 ? 'mb-5' : 'mb-0'}
          >
            Mulai Sekarang
          </Button>
        </FlexItem>
        <FlexItem
          size={width <= 600 ? '100' : '50'}
          style={{
            order: width <= 600 ? '1' : '2',
          }}
        >
          <img className='w-100 h-auto' src={ParentingImage} />
        </FlexItem>
      </BodyContainer>
      <BodyContainer
        paddingTop={width <= 600 ? '4.5' : ''}
        paddingX={width <= 600 ? '0' : ''}
        flexDirection={'column'}
        backgroundColor={ColorThemeEnum.lotion}
      >
        <Paragraph
          weight={FontWeightEnum.bolder}
          variant={ColorThemeEnum.lincolnGreen}
          className='mx-auto text-center mb-0'
          fs={width < 1200 ? '4' : '3'}
        >
          Edukasi Terbaik mulai dari
        </Paragraph>
        <Paragraph
          weight={FontWeightEnum.bolder}
          variant={ColorThemeEnum.coral}
          className='mx-auto mb-0'
          fs={width < 1200 ? '4' : '3'}
        >
          80rb saja!
        </Paragraph>
      </BodyContainer>
      <BodyContainer
        paddingTop={width <= 600 ? '4.5' : ''}
        paddingX={width <= 600 ? '0' : ''}
        backgroundColor={ColorThemeEnum.lotion}
        justifyContent={width < 1200 ? 'center' : 'end'}
      >
        <FlexItem size='80'>
          <Card className='w-100'>
            <Flex
              flexDirection={width < 1200 ? 'column' : 'row'}
              justifyContent='space-between'
            >
              <FlexItem
                size={width < 1200 ? '100' : '38'}
                className={width < 1200 ? 'mb-5' : ''}
              >
                <Heading3
                  weight={FontWeightEnum.bold}
                  variant={ColorThemeEnum.lincolnGreen}
                  className='mb-5'
                >
                  Membangun keluarga yang{' '}
                  <Span variant={ColorThemeEnum.coral}>lebih baik</Span>
                </Heading3>
                <Span
                  weight={FontWeightEnum.bold}
                  variant={ColorThemeEnum.lincolnGreen}
                  fs='6'
                >
                  Yuk kita mulai dengan membuat profil log in kamu
                </Span>
              </FlexItem>
              <FlexItem size={width < 1200 ? '100' : '48'}>
                <Paragraph
                  className='text-center'
                  fs='4'
                  weight={FontWeightEnum.bold}
                >
                  Daftar
                </Paragraph>
                <form>
                  <Input className='mb-5' placeholder='Email Address' />
                  <Button
                    weight='800'
                    block
                    variant={ColorThemeEnum.gold}
                    className='mb-5'
                  >
                    Lanjutkan
                  </Button>
                </form>
                <Paragraph
                  variant={ColorThemeEnum.gray}
                  className='text-center'
                  weight={FontWeightEnum.bolder}
                >
                  Sudah punya akun?{' '}
                  <Link to='/login' style={{ textDecoration: 'none' }}>
                    <Span variant={ColorThemeEnum.persianGreen}>Masuk</Span>
                  </Link>
                </Paragraph>
              </FlexItem>
            </Flex>
          </Card>
        </FlexItem>
      </BodyContainer>
    </DefaultLayout>
  );
};

export default Home;
