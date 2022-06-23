import Button from '@components/atoms/Button';
import { Flex, FlexItem } from '@components/atoms/Flex';
import { Paragraph } from '@components/atoms/Paragraph';
import { Span } from '@components/atoms/Span';
import { ColorThemeEnum, FontWeightEnum } from '@styles/Theme';
import { useNavigate } from 'react-router';
import ParentingImage from '@assets/images/parenting.png';
import DefaultLayout from '@layouts/Default.layout';
import { useGlobalContext } from '@contexts/Global.context';
import BodyContainer from '@components/atoms/BodyContainer';
import ECourseCard from '@components/organisms/Home/ECourse/ECourseCard';
import Container from '@components/atoms/Container';
import Testimonial from '@components/organisms/Home/Testimonial/Testimonial';
import RegisterCTA from '@components/organisms/Home/RegisterCTA/RegisterCTA';
import PlayIconImage from '@assets/images/play.png';

const Home = () => {
  const navigate = useNavigate();
  const {
    state: { width },
  } = useGlobalContext();

  return (
    <DefaultLayout>
      <div className="p-relative" style={{ zIndex: '1' }}>
        <div
          className="w-100 p-absolute"
          style={{
            backgroundColor: 'rgba(250, 215, 10, 0.1)',
            height: width <= 992 ? '35rem' : '39.375rem',
            zIndex: '-1',
          }}
        />
        <Container>
          <BodyContainer
            flexDirection={width <= 600 ? 'column' : 'row'}
            style={{ backgroundColor: 'transparent' }}
          >
            <FlexItem
              size={width <= 600 ? '100' : '50'}
              style={{
                order: width <= 600 ? '2' : '1',
                paddingLeft: width <= 600 ? '2rem' : '0',
                paddingRight: width <= 600 ? '2rem' : '0',
              }}
            >
              <Paragraph
                variant={ColorThemeEnum.lincolnGreen}
                weight={FontWeightEnum.bolder}
                className="mb-5"
                fs={width <= 992 ? '3' : '2'}
              >
                Edukasi <Span variant={ColorThemeEnum.coral}>terbaik</Span>{' '}
                untuk keluarga kecil mu
              </Paragraph>
              <Paragraph
                variant={ColorThemeEnum.lincolnGreen}
                weight={FontWeightEnum.bold}
                fs={width <= 992 ? '6' : '5'}
                className="mb-5"
              >
                Apapun permasalahan kamu temukan jawabannya disini
              </Paragraph>
              <Button
                variant={ColorThemeEnum.gold}
                weight="800"
                size="md"
                onClick={() => navigate('/register')}
                className={width <= 600 ? 'mb-5' : 'mb-0'}
              >
                <Flex alignItems="center">
                  <Span className="mr-1">Mulai Sekarang</Span>
                  <div style={{ width: '16px', height: '16px' }}>
                    <img className="w-100 h-auto" src={PlayIconImage} />
                  </div>
                </Flex>
              </Button>
            </FlexItem>
            <FlexItem
              size={width <= 600 ? '100' : '50'}
              style={{
                order: width <= 600 ? '1' : '2',
              }}
            >
              <img className="w-100 h-auto" src={ParentingImage} />
            </FlexItem>
          </BodyContainer>
        </Container>
      </div>
      <Container>
        <BodyContainer flexDirection={'column'}>
          <Paragraph
            weight={FontWeightEnum.bolder}
            variant={ColorThemeEnum.lincolnGreen}
            className="mx-auto text-center mb-0"
            fs={width < 1200 ? '4' : '3'}
          >
            Edukasi Terbaik mulai dari
          </Paragraph>
          <Paragraph
            weight={FontWeightEnum.bolder}
            variant={ColorThemeEnum.coral}
            className="mx-auto mb-5"
            fs={width < 1200 ? '4' : '3'}
          >
            80rb saja!
          </Paragraph>
          <Flex style={{ flexWrap: 'wrap' }}>
            <ECourseCard />
            <ECourseCard />
            <ECourseCard />
            <ECourseCard />
            <ECourseCard />
          </Flex>
        </BodyContainer>
      </Container>
      <Testimonial width={width} />
      <RegisterCTA width={width} />
    </DefaultLayout>
  );
};

export default Home;
