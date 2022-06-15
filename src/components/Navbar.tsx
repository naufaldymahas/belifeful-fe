import logo from '@assets/images/logo_text.png';
import useWindowDimension from '@hooks/useWindowDimension';
import { ColorThemeEnum } from '@styles/Theme';
import { FC } from 'react';
import { Link } from 'react-router-dom';
import Button from './atoms/Button';
import Input from './atoms/Input';
import {
  NavbarBody,
  NavbarContainer,
  NavbarItem,
  NavbarLogo,
} from './Navbar.style';

interface NavbarProps {
  width: number;
}

const Navbar: FC<NavbarProps> = ({ width }) => {
  return (
    <NavbarContainer padding={width >= 1200 ? '6.5' : '1.5'}>
      <NavbarBody>
        <NavbarItem size='15%' style={{ height: '60%' }}>
          <NavbarLogo src={logo} />
        </NavbarItem>
        <NavbarItem
          size='50%'
          className={width < 992 ? 'd-none' : 'd-block'}
        >
          <Input />
        </NavbarItem>
        <NavbarItem
          style={{
            display: width < 992 ? 'none' : 'flex',
            justifyContent: 'end',
          }}
          size='20%'
        >
          <NavbarItem size='45%' style={{ marginRight: '0.75rem' }}>
            <Link to='/login' style={{ textDecoration: 'none' }}>
              <Button variant={ColorThemeEnum.gold} outline weight='700' block>
                Masuk
              </Button>
            </Link>
          </NavbarItem>
          <NavbarItem size='45%'>
            <Link to='/register' style={{ textDecoration: 'none' }}>
              <Button variant={ColorThemeEnum.gold} weight='700' block>
                Daftar
              </Button>
            </Link>
          </NavbarItem>
        </NavbarItem>
      </NavbarBody>
    </NavbarContainer>
  );
};

export default Navbar;
