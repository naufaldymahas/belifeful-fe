import Button from '@components/atoms/Button';
import { FlexItem } from '@components/atoms/Flex';
import { Heading2 } from '@components/atoms/Heading';
import { Paragraph } from '@components/atoms/Paragraph';
import { Span } from '@components/atoms/Span';
import { ColorThemeEnum, FontWeightEnum } from '@styles/Theme';
import { useNavigate } from 'react-router';
import { BodyContainer1 } from './Home.style';
import ParentingImage from '@assets/images/parenting.png';
import DefaultLayout from '@layouts/Default.layout';

const Home = () => {
  const navigate = useNavigate();

  return (
    <DefaultLayout>
      <BodyContainer1>
        <FlexItem size='50'>
          <Heading2
            variant={ColorThemeEnum.lincolnGreen}
            weight={FontWeightEnum.bolder}
            style={{ marginBottom: '1.5rem' }}
          >
            Edukasi <Span variant={ColorThemeEnum.coral}>terbaik</Span> untuk
            keluarga kecil mu
          </Heading2>
          <Paragraph
            variant={ColorThemeEnum.lincolnGreen}
            weight={FontWeightEnum.bold}
            fs='5'
            style={{ marginBottom: '1.5rem' }}
          >
            Apapun permasalahan kamu temukan jawabannya disini
          </Paragraph>
          <Button
            variant={ColorThemeEnum.gold}
            weight='800'
            size='md'
            onClick={() => navigate('/register')}
          >
            Mulai Sekarang
          </Button>
        </FlexItem>
        <FlexItem size='50'>
          <img style={{ width: '100%', height: 'auto' }} src={ParentingImage} />
        </FlexItem>
      </BodyContainer1>
    </DefaultLayout>
  );
};

export default Home;
