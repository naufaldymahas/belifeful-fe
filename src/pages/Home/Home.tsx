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
import useWindowDimension from '@hooks/useWindowDimension';

const Home = () => {
  const navigate = useNavigate();
  const { width } = useWindowDimension();

  return (
    <DefaultLayout>
      <BodyContainer1
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
            className="mb-5"
          >
            Edukasi <Span variant={ColorThemeEnum.coral}>terbaik</Span> untuk
            keluarga kecil mu
          </Heading2>
          <Paragraph
            variant={ColorThemeEnum.lincolnGreen}
            weight={FontWeightEnum.bold}
            fs="5"
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
            Mulai Sekarang
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
      </BodyContainer1>
    </DefaultLayout>
  );
};

export default Home;
