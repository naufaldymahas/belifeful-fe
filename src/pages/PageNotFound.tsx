import DefaultLayout from '@layouts/Default.layout';
import PageNotFoundImage from '@assets/images/page_not_found.png';
import BodyContainer from '@components/atoms/BodyContainer';
import { ColorThemeEnum, FontWeightEnum } from '@styles/Theme';
import { Paragraph } from '@components/atoms/Paragraph';
import { FlexItem } from '@components/atoms/Flex';

const PageNotFound = () => {
  return (
    <DefaultLayout>
      <BodyContainer
        backgroundColor={ColorThemeEnum.lotion}
        justifyContent="center"
        paddingTop="10"
        flexDirection="column"
        className="text-center"
      >
        <FlexItem>
          <img src={PageNotFoundImage} className="w-50 h-auto" />
        </FlexItem>
        <Paragraph fs="5" weight={FontWeightEnum.bold}>
          Halaman tidak ada :(
        </Paragraph>
      </BodyContainer>
    </DefaultLayout>
  );
};

export default PageNotFound;
