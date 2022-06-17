import Button from '@components/atoms/Button';
import { Flex, FlexItem } from '@components/atoms/Flex';
import { Paragraph } from '@components/atoms/Paragraph';
import { ColorThemeEnum, FontWeightEnum } from '@styles/Theme';
import { ECourseCardContainer, ECourseCardImage } from './ECourseCard.style';

const ECourseCard = () => {
  return (
    <ECourseCardContainer size="30" className="mx-4 mb-6">
      <ECourseCardImage>
        <img
          className="p-absolute w-100"
          src="https://images.unsplash.com/photo-1609220136736-443140cffec6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
        />
      </ECourseCardImage>
      <div className="mx-3 mt-3">
        <div
          style={{
            height: '3.75rem',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
          }}
          className="mb-3"
        >
          <Paragraph fs="6" weight={FontWeightEnum.bold}>
            Belajar Menjadi Ayah yang Baik Pada Masa Pandemi
          </Paragraph>
        </div>
        <Flex className="mb-3" alignItems="center">
          <FlexItem size="20">
            <div
              style={{
                width: '3rem',
                height: '3rem',
                backgroundImage: `url('https://images.unsplash.com/photo-1548449112-96a38a643324?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80')`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                borderRadius: '50%',
              }}
            />
          </FlexItem>
          <FlexItem size="80">
            <Paragraph className="mb-0">Rahman Syaidan</Paragraph>
            <Paragraph className="mb-0">Psikolog Keluarga</Paragraph>
          </FlexItem>
        </Flex>
        <Flex className="mb-3" justifyContent="space-between">
          <FlexItem>
            <Paragraph weight={FontWeightEnum.bold} className="mb-0">
              4.7/5
            </Paragraph>
          </FlexItem>
          <FlexItem className="text-end">
            <Paragraph
              variant={ColorThemeEnum.coral}
              fs="6"
              weight={FontWeightEnum.bolder}
              className="mb-0"
            >
              Rp75.000
            </Paragraph>
            <Paragraph
              variant={ColorThemeEnum.gray}
              style={{ textDecoration: 'line-through' }}
              weight={FontWeightEnum.bold}
              className="mb-0"
            >
              Rp150.000
            </Paragraph>
          </FlexItem>
        </Flex>
        <Button
          block
          variant={ColorThemeEnum.gold}
          weight={FontWeightEnum.bold}
          className="mb-3"
        >
          Mulai Belajar
        </Button>
        <Paragraph
          className="mb-3 text-center pointer"
          variant={ColorThemeEnum.gray}
          style={{ textDecoration: 'underline' }}
        >
          Tambahkan ke Keranjang
        </Paragraph>
      </div>
    </ECourseCardContainer>
  );
};

export default ECourseCard;
