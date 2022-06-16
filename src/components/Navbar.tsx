import logo from '@assets/images/logo_text.png';
import { useGlobalContext } from '@contexts/Global.context';
import { ColorThemeEnum } from '@styles/Theme';
import { FC } from 'react';
import { Link } from 'react-router-dom';
import Button from './atoms/Button';
import {
  NavbarBody,
  NavbarContainer,
  NavbarItem,
  NavbarLogo,
  NavbarSearchInput,
} from './Navbar.style';

const Navbar: FC = () => {
  const {
    state: { width },
  } = useGlobalContext();

  return (
    <NavbarContainer padding={width >= 1200 ? '6.5' : '1.5'}>
      <NavbarBody>
        <NavbarItem size='15%' style={{ height: '60%' }}>
          <NavbarLogo src={logo} />
        </NavbarItem>
        <NavbarItem size={width >= 1200 ? '50%' : '55%'}>
          <NavbarSearchInput placeholder='Cari kelas kamu disini' />
        </NavbarItem>
        <NavbarItem
          style={{
            display: width < 1200 ? 'none' : 'flex',
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
