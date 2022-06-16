import BottomNavigation from '@components/BottomNavigation';
import Footer from '@components/Footer';
import Navbar from '@components/Navbar';
import { useGlobalContext } from '@contexts/Global.context';
import { FC } from 'react';
import styled from 'styled-components';

const DefaultLayoutWrapper = styled.div`
  position: relative;
`;

const DefaultLayout: FC = ({ children }) => {
  const {
    state: { width },
  } = useGlobalContext();

  return (
    <DefaultLayoutWrapper>
      <Navbar />
      {children}
      <Footer />
      {width < 1200 && <BottomNavigation />}
    </DefaultLayoutWrapper>
  );
};

export default DefaultLayout;
