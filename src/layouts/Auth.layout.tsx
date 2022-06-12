import { Flex } from '@components/atoms/Flex';
import { FC, ReactNode } from 'react';
import styled from 'styled-components';
import Logo from '@assets/images/logo_text.png';
import { useNavigate } from 'react-router';

export const AuthLayoutContainer = styled(Flex)`
  min-height: 100vh;
  flex-direction: column;

  @media only screen and (min-width: 992px) {
    flex-direction: row;
    position: relative;
  }
`;

export const AuthLayoutYellow = styled.div`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.gold};
  display: flex;
  text-align: left;
  flex-direction: column;
  justify-content: center;
  padding: 2.625rem 10.5% 2.625rem 2rem;

  @media only screen and (min-width: 1024px) {
    justify-content: space-between;
    width: 45%;
  }
`;

const AuthLayoutWhite = styled.div`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.lotion};
  min-height: 100vh;
  right: 0;
  border-radius: 3rem 0 0 3rem;

  @media only screen and (min-width: 992px) {
    position: absolute;
  }

  @media only screen and (min-width: 992px) {
    width: 65.5%;
  }
`;

const AuthLayoutWhiteBody = styled(Flex)`
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: inherit;
  padding-top: 2.625rem;
  padding-bottom: 2.625rem;
`;

type AuthProps = {
  yellowComponent: ReactNode;
  whiteComponent: ReactNode;
};

export const AuthLayout: FC<AuthProps> = ({
  whiteComponent,
  yellowComponent,
}) => {
  const navigate = useNavigate();

  return (
    <AuthLayoutContainer>
      <AuthLayoutYellow>{yellowComponent}</AuthLayoutYellow>
      <AuthLayoutWhite>
        <AuthLayoutWhiteBody>
          <div
            onClick={() => {
              navigate('/');
            }}
            style={{ width: '20%', marginBottom: '3.25rem', cursor: 'pointer' }}
          >
            <img src={Logo} style={{ width: '100%' }} />
          </div>
          {whiteComponent}
        </AuthLayoutWhiteBody>
      </AuthLayoutWhite>
    </AuthLayoutContainer>
  );
};
