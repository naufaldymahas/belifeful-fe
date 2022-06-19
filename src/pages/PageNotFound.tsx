import DefaultLayout from '@layouts/Default.layout';
import PageNotFoundImage from '@assets/images/page_not_found.png';
import BodyContainer from '@components/atoms/BodyContainer';
import { FontWeightEnum } from '@styles/Theme';
import { Paragraph } from '@components/atoms/Paragraph';
import { FlexItem } from '@components/atoms/Flex';
import { useGlobalContext } from '@contexts/Global.context';
import Container from '@components/atoms/Container';

const PageNotFound = () => {
  const {
    state: { width },
  } = useGlobalContext();

  return (
    <DefaultLayout>
      <Container>
        <BodyContainer
          justifyContent="center"
          flexDirection="column"
          className="text-center"
        >
          <FlexItem>
            <img
              src={PageNotFoundImage}
              className={`${width < 992 ? 'w-100' : 'w-75'} h-auto`}
            />
          </FlexItem>
          <Paragraph fs="5" weight={FontWeightEnum.bold}>
            Halaman tidak ada :(
          </Paragraph>
        </BodyContainer>
      </Container>
    </DefaultLayout>
  );
};

export default PageNotFound;
