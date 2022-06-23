import styled from 'styled-components';
import Input from './atoms/Input';

type NavbarItemProp = {
  size: string;
};

interface NavbarContainerProps {
  padding: string;
}

export const NavbarContainer = styled.div<NavbarContainerProps>`
  padding-left: ${({ padding }) => padding}rem;
  padding-right: ${({ padding }) => padding}rem;
  width: 100%;
  position: fixed;
  top: 1.5rem;
  z-index: 10;
`;

export const NavbarBody = styled.nav`
  background-color: ${({ theme }) => theme.colors.lotion};
  width: 100%;
  height: 4.5rem;
  padding: 0.75rem 1.5rem;
  border-radius: 1rem;
  box-shadow: 0rem 0.375rem 0.75rem rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const NavbarItem = styled.div<NavbarItemProp>`
  width: ${({ size }) => size};
`;

export const NavbarLogo = styled.img`
  width: 100%;
  margin-top: 0.5rem;

  @media only screen and (min-width: 1080px) {
    width: 75%;
  }

  @media only screen and (min-width: 1400px) {
    width: 50%;
  }
`;

export const NavbarSearchInput = styled(Input)`
  border: none;
  background-color: ${({ theme }) => theme.colors.antiFlashWhite};
  color: ${({ theme }) => theme.colors.gray};

  &:focus {
    color: ${({ theme }) => theme.colors.darkCharcoal};
  }
`;
