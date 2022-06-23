import styled from 'styled-components';

export const BottomNavigationContainer = styled.div`
  padding-left: 1.5rem;
  padding-right: 1.5rem;
  width: 100%;
  position: fixed;
  bottom: 1.5rem;
  z-index: 99;
`;

export const BottomNavigationBody = styled.nav`
  background-color: ${({ theme }) => theme.colors.lotion};
  width: 100%;
  height: 4.5rem;
  padding: 0.75rem 0;
  display: flex;
  justify-content: space-between;
  border-radius: 1rem;
  box-shadow: 0rem 0.375rem 0.75rem rgba(0, 0, 0, 0.1);
  align-items: center;
`;
