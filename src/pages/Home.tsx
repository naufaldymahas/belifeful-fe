import Button from '@components/atoms/Button';
import { FlexItem } from '@components/atoms/Flex';
import { Heading2 } from '@components/atoms/Heading';
import { Paragraph } from '@components/atoms/Paragraph';
import { Span } from '@components/atoms/Span';
import Navbar from '@components/Navbar';
import { ColorThemeEnum, FontWeightEnum } from '@styles/Theme';
import { BodyContainer1 } from './Home.style';

const Home = () => {
  return (
    <div
      style={{
        width: '100%',
        height: '35rem',
        backgroundColor: 'rgba(250, 215, 10, 0.1)',
      }}
    >
      <Navbar />
      <BodyContainer1>
        <FlexItem size='50%'>
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
          <Button variant={ColorThemeEnum.gold} weight='800' size='md'>
            Mulai Sekarang
          </Button>
        </FlexItem>
        <FlexItem size='50%'></FlexItem>
      </BodyContainer1>
    </div>
  );
};

export default Home;
