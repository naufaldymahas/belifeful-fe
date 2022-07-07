import { FC, ReactNode, useEffect, useState } from 'react';
import styled from 'styled-components';
import Logo from '@assets/images/logo_text.png';
import { useLocation, useNavigate } from 'react-router';
import { useGlobalContext } from '@contexts/Global.context';

const AuthLayoutWhite = styled.div<{ location: string; height: number }>`
  position: absolute;
  background-color: ${({ theme }) => theme.colors.lotion};
  padding: 3rem;
  width: 100%;
  border-top-right-radius: 3rem;
  border-top-left-radius: 3rem;
  height: ${({ location, height }) =>
    location === '/login' ? '50' : height > 700 ? '65' : '40'}%;
  bottom: 0;

  @media only screen and (min-width: 768px) {
  }

  @media only screen and (min-width: 992px) {
    height: 100%;
    width: 65.5%;
    top: unset;
    right: 0;
    border-top-right-radius: unset;
    border-top-left-radius: 3rem;
    border-bottom-left-radius: 3rem;
  }
`;

type AuthProps = {
  yellowComponent: ReactNode;
  whiteComponent: ReactNode;
  whiteFooterComponent?: ReactNode;
};

export const AuthLayout: FC<AuthProps> = ({
  whiteComponent,
  yellowComponent,
  whiteFooterComponent,
}) => {
  const navigate = useNavigate();
  const location = useLocation();
  const {
    state: { width, height },
  } = useGlobalContext();

  return (
    <div
      className='d-flex flex-column flex-lg-row position-relative'
      style={{
        minHeight: '100vh',
      }}
    >
      <div
        style={{
          width: width >= 992 ? '40%' : '100%',
          paddingRight: width >= 992 ? '5.5%' : '0',
          height: '115vh',
        }}
        className='bg-gold pt-5 py-lg-5 ps-lg-4'
      >
        {yellowComponent}
      </div>
      <AuthLayoutWhite height={height} location={location.pathname}>
        <div
          className={`d-flex w-100 flex-column justify-content-center align-items-center h-${
            width >= 992 ? '100' : 'auto'
          }`}
        >
          <div
            onClick={() => {
              navigate('/');
            }}
            style={{
              width: width <= 600 ? '35%' : '20%',
              cursor: 'pointer',
            }}
            className='mb-5 d-none d-lg-block'
          >
            <img className='w-100' src={Logo} />
          </div>
          <div
            className={`col-12 col-md-8 p-0 py-lg-5 px-lg-4 rounded-5${
              width >= 992 ? ' shadow' : ''
            }`}
          >
            {whiteComponent}
          </div>
          {whiteFooterComponent && whiteFooterComponent}
        </div>
      </AuthLayoutWhite>
    </div>
  );
};
