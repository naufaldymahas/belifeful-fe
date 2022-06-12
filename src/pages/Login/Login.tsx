import { FlexItem } from '@components/atoms/Flex';
import { Span } from '@components/atoms/Span';
import { LoginWhiteStep1 } from '@components/organisms/Login/Login.step1';
import { LoginWhiteStep2 } from '@components/organisms/Login/Login.step2';
import { LoginContextWrapper, useLoginContext } from '@contexts/Login';
import { AuthLayout } from '@layouts/Auth.layout';
import { ColorThemeEnum, FontWeightEnum } from '@styles/Theme';
import { LoginYellowWrapper } from './Login.style';
import LoginImage from '@assets/images/login.png';

const Login = () => {
  return (
    <LoginContextWrapper>
      <AuthLayout
        yellowComponent={
          <LoginYellowWrapper justifyContent='center'>
            <FlexItem>
              <img
                style={{ width: '100%', height: 'auto', marginLeft: '-1rem' }}
                src={LoginImage}
              />
            </FlexItem>
            <FlexItem style={{ textAlign: 'center', marginLeft: '-1rem' }}>
              <Span
                weight={FontWeightEnum.bold}
                fs='4'
                variant={ColorThemeEnum.lincolnGreen}
              >
                Teman kamu dalam membangun keluarga
              </Span>
            </FlexItem>
          </LoginYellowWrapper>
        }
        whiteComponent={<LoginWhite />}
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
