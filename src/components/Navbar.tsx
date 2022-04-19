import logo from '@assets/images/logo_text.png';
import { ColorThemeEnum } from '@styles/Theme';
import Button from './atoms/Button';
import Input from './atoms/Input';
import {
  NavbarBody,
  NavbarContainer,
  NavbarItem,
  NavbarLogo,
} from './Navbar.style';

const Navbar = () => {
  return (
    <NavbarContainer>
      <NavbarBody>
        <NavbarItem size='15%' style={{ height: '60%' }}>
          <NavbarLogo src={logo} />
        </NavbarItem>
        <NavbarItem size='50%'>
          <Input />
        </NavbarItem>
        <NavbarItem
          style={{ display: 'flex', justifyContent: 'end' }}
          size='20%'
        >
          <NavbarItem size='45%' style={{ marginRight: '0.75rem' }}>
            <Button variant={ColorThemeEnum.gold} outline weight='700' block>
              Masuk
            </Button>
          </NavbarItem>
          <NavbarItem size='45%'>
            <Button variant={ColorThemeEnum.gold} weight='700' block>
              Daftar
            </Button>
          </NavbarItem>
        </NavbarItem>
      </NavbarBody>
    </NavbarContainer>
  );
};

export default Navbar;
