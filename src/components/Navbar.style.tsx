import styled from 'styled-components';

type NavbarItemProp = {
  size: string;
};

export const NavbarContainer = styled.div`
  padding-left: 6.5rem;
  padding-right: 6.5rem;
  width: 100%;
  position: absolute;
  top: 1.5rem;
`;

export const NavbarBody = styled.nav`
  background-color: ${({ theme }) => theme.colors.lotion};
  width: 100%;
  height: 4.5rem;
  padding: 0.75rem 1.5rem;
  display: flex;
  justify-content: space-between;
  border-radius: 1rem;
  box-shadow: 0rem 0.375rem 0.75rem rgba(0, 0, 0, 0.1);
  align-items: center;
`;

export const NavbarItem = styled.div<NavbarItemProp>`
  width: ${({ size }) => size};
`;

export const NavbarLogo = styled.img`
  width: auto;
  height: 100%;
`;
