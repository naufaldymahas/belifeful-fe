import { AuthLayout } from '@layouts/Auth.layout';
import Logo from '@assets/images/logo_text.png';
import {
  RegisterWhiteStep1,
  RegisterYellowStep1,
} from '@components/organisms/Register/Register.step1';
import {
  RegisterWhiteStep2a,
  RegisterYellowStep2,
  RegisterWhiteStep2b,
} from '@components/organisms/Register/Register.step2';
import {
  RegisterWhiteStep3,
  RegisterYellowStep3,
} from '@components/organisms/Register/Register.step3';
import {
  RegisterWhiteStep4a,
  RegisterWhiteStep4b,
  RegisterYellowStep4,
} from '@components/organisms/Register/Register.step4';
import {
  RegisterActionType,
  RegisterContextWrapper,
  useRegisterContext,
} from '@contexts/Register';
import { Paragraph } from '@components/atoms/Paragraph';
import { ColorThemeEnum, FontWeightEnum } from '@styles/Theme';
import { useGlobalContext } from '@contexts/Global.context';
import { Link } from 'react-router-dom';
import { FC } from 'react';

const Register = () => {
  return (
    <RegisterContextWrapper>
      <AuthLayout
        yellowComponent={<RegisterYellow />}
        whiteComponent={<RegisterWhite />}
        whiteFooterComponent={<RegisterWhiteFooter />}
      />
    </RegisterContextWrapper>
  );
};

const RegisterYellow = () => {
  const {
    state: { width },
  } = useGlobalContext();
  const {
    state: { step },
  } = useRegisterContext();

  let Component: JSX.Element;

  switch (step) {
    case '1':
      Component = <RegisterYellowStep1 />;
      break;
    case '2a':
    case '2b':
      Component = <RegisterYellowStep2 />;
      break;
    case '3':
      Component = <RegisterYellowStep3 />;
      break;
    case '4a':
    case '4b':
      Component = <RegisterYellowStep4 />;
      break;
    default:
      Component = <RegisterYellowStep1 />;
  }

  return (
    <div
      className={`h-${
        width >= 992 ? '100' : 'auto'
      } d-flex flex-column justify-content-between align-items-center align-items-lg-start text-${
        width >= 992 ? 'start' : 'center'
      }`}
    >
      <div className='w-100 px-5 px-lg-0 mb-5 d-flex align-items-center justify-content-between'>
        <span className='text-lincoln-green fw-bold fst-italic'>
          Langkah{' '}
          {step === '2a' || step === '2b'
            ? '2'
            : step === '4a' || step === '4b'
            ? '4'
            : step}{' '}
          dari 4
        </span>
        <div className='col-3 col-md-2 d-block d-lg-none'>
          <img src={Logo} alt='' className='img-fluid' />
        </div>
      </div>
      {Component}
    </div>
  );
};

const RegisterWhite = () => {
  const {
    state: { step },
  } = useRegisterContext();

  switch (step) {
    case '1':
      return <RegisterWhiteStep1 />;
    case '2a':
      return <RegisterWhiteStep2a />;
    case '2b':
      return <RegisterWhiteStep2b />;
    case '3':
      return <RegisterWhiteStep3 />;
    case '4a':
      return <RegisterWhiteStep4a />;
    case '4b':
      return <RegisterWhiteStep4b />;
    default:
      return null;
  }
};

const RegisterWhiteFooter = () => {
  const {
    state: { step },
    dispatch,
  } = useRegisterContext();

  switch (step) {
    case '1':
      return (
        <>
          <p className='text-gray text-center mb-0 fw-bold mt-5'>
            Sudah punya akun?{' '}
            <Link
              to='/login'
              className='link-persian-green text-decoration-none'
            >
              Masuk
            </Link>
          </p>
          <span
            className='text-center text-lincoln-green d-lg-none d-block fw-semibold w-75 mt-5'
            style={{ bottom: '3rem' }}
          >
            Pahami <span className='text-persian-green'>Kebijakan Privacy</span>{' '}
            kami sebelum mendaftar
          </span>
        </>
      );
    case '2a':
      return (
        <>
          <span
            className='link-persian-green text-center mb-0 fw-bold mt-5'
            style={{ cursor: 'pointer' }}
            onClick={() =>
              dispatch({
                type: RegisterActionType.SET_STEP,
                payload: {
                  step: '1',
                },
              })
            }
          >
            Ubah E-mail saya
          </span>
          <span
            className='text-center text-lincoln-green d-lg-none d-block fw-semibold w-75 mt-5'
            style={{ bottom: '3rem' }}
          >
            Pahami <span className='text-persian-green'>Kebijakan Privacy</span>{' '}
            kami sebelum mendaftar
          </span>
        </>
      );
    case '2b':
      return (
        <>
          <span
            className='text-center text-lincoln-green d-lg-none d-block fw-semibold w-75 mt-5'
            style={{ bottom: '3rem' }}
          >
            Pahami <span className='text-persian-green'>Kebijakan Privacy</span>{' '}
            kami sebelum mendaftar
          </span>
        </>
      );
    case '3':
      return (
        <>
          <span
            className='text-center text-lincoln-green d-lg-none d-block fw-semibold w-75 mt-5'
            style={{ bottom: '3rem' }}
          >
            Pahami <span className='text-persian-green'>Kebijakan Privacy</span>{' '}
            kami sebelum mendaftar
          </span>
        </>
      );
    case '4a':
      return (
        <>
          <span
            className='text-center text-lincoln-green d-lg-none d-block fw-semibold w-75 mt-5'
            style={{ bottom: '3rem' }}
          >
            Dengan mendaftar, saya setuju bahwa Belifeful akan menggunakan data
            saya seperti dinyatakan pada{' '}
            <span className='text-persian-green'>Kebijakan Privacy</span>{' '}
          </span>
        </>
      );
    case '4b':
      return (
        <>
          <span
            className='text-green text-center mb-0 fw-bold mt-5'
            style={{ cursor: 'pointer' }}
            onClick={() =>
              dispatch({
                type: RegisterActionType.SET_STEP,
                payload: {
                  step: '1',
                },
              })
            }
          >
            Kamu akan dialihkan ke halaman Homepage Jika halaman tidak berubah
            klik{' '}
            <Link to='/' className='link-persian-green'>
              redirect
            </Link>
          </span>
          <span
            className='text-center text-lincoln-green d-lg-none d-block position-absolute fw-semibold w-50'
            style={{ bottom: '3rem' }}
          >
            Dengan mendaftar, saya setuju bahwa Belifeful akan menggunakan data
            saya seperti dinyatakan pada{' '}
            <span className='text-persian-green'>Kebijakan Privacy</span>{' '}
          </span>
        </>
      );
    default:
      return (
        <>
          <p className='text-gray text-center mb-0 fw-bold mt-5'>
            Sudah punya akun?{' '}
            <Link
              to='/login'
              className='link-persian-green text-decoration-none'
            >
              Masuk
            </Link>
          </p>
          <span
            className='text-center text-lincoln-green d-lg-none d-block position-absolute fw-semibold w-50'
            style={{ bottom: '3rem' }}
          >
            Pahami <span className='text-persian-green'>Kebijakan Privacy</span>{' '}
            kami sebelum mendaftar
          </span>
        </>
      );
  }
};

export default Register;
