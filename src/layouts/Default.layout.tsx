import BottomNavigation from '@components/BottomNavigation';
import Footer from '@components/Footer';
import Navbar from '@components/Navbar';
import { useGlobalContext } from '@contexts/Global.context';
import { FC } from 'react';

const DefaultLayout: FC = ({ children }) => {
  const {
    state: { width },
  } = useGlobalContext();

  return (
    <div className="position-relative">
      <Navbar />
      {children}
      <Footer />
      {width < 992 && <BottomNavigation />}
    </div>
  );
};

export default DefaultLayout;
