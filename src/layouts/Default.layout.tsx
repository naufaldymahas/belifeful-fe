import BottomNavigation from '@components/BottomNavigation';
import Footer from '@components/Footer';
import Navbar from '@components/Navbar';
import useWindowDimension from '@hooks/useWindowDimension';
import { FC } from 'react';
import styled from 'styled-components';

const DefaultLayoutWrapper = styled.div`
  position: relative;
`;

const DefaultLayout: FC = ({ children }) => {
  const { width } = useWindowDimension();
  return (
    <DefaultLayoutWrapper>
      <Navbar width={width} />
      {children}
      <Footer width={width} />
      {width <= 600 && <BottomNavigation />}
    </DefaultLayoutWrapper>
  );
};

export default DefaultLayout;
