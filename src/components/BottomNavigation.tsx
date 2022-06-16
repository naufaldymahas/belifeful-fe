import { ColorThemeEnum, FontWeightEnum } from '@styles/Theme';
import { useMemo } from 'react';
import { Flex, FlexItem } from './atoms/Flex';
import { Span } from './atoms/Span';
import {
  BottomNavigationContainer,
  BottomNavigationBody,
} from './BottomNavigation.style';
import HomeIcon from '@assets/images/home.png';
import ECourseIcon from '@assets/images/e-course.png';
import CartIcon from '@assets/images/cart.png';
import ProfileIcon from '@assets/images/profile.png';
import { Link } from 'react-router-dom';

const BottomNavigation = () => {
  const bottomNavItems = useMemo(
    () => [
      {
        title: 'Home',
        icon: HomeIcon,
        url: '/',
      },
      {
        title: 'E-Course',
        icon: ECourseIcon,
        url: '/',
      },
      {
        title: 'Keranjang',
        icon: CartIcon,
        url: '/',
      },
      {
        title: 'Profile',
        icon: ProfileIcon,
        url: '/login',
      },
    ],
    []
  );

  return (
    <BottomNavigationContainer>
      <BottomNavigationBody>
        {bottomNavItems.map((item, i) => (
          <FlexItem
            className='text-center pointer'
            size={(100 / bottomNavItems.length).toString()}
            key={i}
          >
            <Link to={item.url} style={{ textDecoration: 'none' }}>
              <Flex flexDirection='column' alignItems='center'>
                <FlexItem size='25'>
                  <img className='w-100 h-auto' src={item.icon} />
                </FlexItem>
                <Span
                  variant={ColorThemeEnum.darkCharcoal}
                  weight={FontWeightEnum.bold}
                >
                  {item.title}
                </Span>
              </Flex>
            </Link>
          </FlexItem>
        ))}
      </BottomNavigationBody>
    </BottomNavigationContainer>
  );
};

export default BottomNavigation;
