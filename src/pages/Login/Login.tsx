import { LoginWhiteStep1 } from '@components/organisms/Login/Login.step1';
import { LoginWhiteStep2 } from '@components/organisms/Login/Login.step2';
import { LoginContextWrapper, useLoginContext } from '@contexts/Login';
import { AuthLayout } from '@layouts/Auth.layout';
import LoginImage from '@assets/images/login.png';
import Logo from '@assets/images/logo_text.png';
import { useGlobalContext } from '@contexts/Global.context';
import { Link } from 'react-router-dom';

const Login = () => {
  const {
    state: { width },
  } = useGlobalContext();

  return (
    <LoginContextWrapper>
      <AuthLayout
        yellowComponent={
          <div
            className="d-flex flex-column justify-content-center align-items-center pe-0 pe-lg-4"
            style={{
              height: width >= 992 ? '100%' : 'unset',
            }}
          >
            <div className="col-4 col-md-3 d-lg-none d-block">
              <img className="img-fluid" src={Logo} alt="" />
            </div>
            <div className="col-12 col-md-10 col-lg-12">
              <img className="img-fluid" src={LoginImage} alt="" />
            </div>
            <h2 className="fw-bolder text-lincoln-green text-center col-10 col-md-12">
              Teman kamu dalam membangun keluarga
            </h2>
          </div>
        }
        whiteComponent={<LoginWhite />}
        whiteFooterComponent={
          <p className="text-gray text-center mb-0 fw-bold mt-5">
            Belum punya akun?{' '}
            <Link
              to="/register"
              className="link-persian-green text-decoration-none"
            >
              Daftar
            </Link>
          </p>
        }
      />
    </LoginContextWrapper>
  );
};

const LoginWhite = () => {
  const { state } = useLoginContext();

  switch (state.step) {
    case '1':
      return <LoginWhiteStep1 />;
    case '2':
      return <LoginWhiteStep2 />;
    default:
      return null;
  }
};

export default Login;
