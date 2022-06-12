import { FontWeightEnum } from '@styles/Theme';
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

const BottomNavigation = () => {
  const bottomNavItems = useMemo(
    () => [
      {
        title: 'Home',
        icon: HomeIcon,
      },
      {
        title: 'E-Course',
        icon: ECourseIcon,
      },
      {
        title: 'Keranjang',
        icon: CartIcon,
      },
      {
        title: 'Profile',
        icon: ProfileIcon,
      },
    ],
    []
  );

  return (
    <BottomNavigationContainer>
      <BottomNavigationBody>
        {bottomNavItems.map((item, i) => (
          <FlexItem
            style={{ textAlign: 'center', cursor: 'pointer' }}
            size={(100 / bottomNavItems.length).toString()}
            key={i}
          >
            <Flex style={{ flexDirection: 'column', alignItems: 'center' }}>
              <FlexItem size='25'>
                <img
                  style={{ width: '100%', height: 'auto' }}
                  src={item.icon}
                />
              </FlexItem>
              <Span weight={FontWeightEnum.bold}>{item.title}</Span>
            </Flex>
          </FlexItem>
        ))}
      </BottomNavigationBody>
    </BottomNavigationContainer>
  );
};

export default BottomNavigation;
