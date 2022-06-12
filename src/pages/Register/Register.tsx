import { AuthLayout } from '@layouts/Auth.layout';
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
import { RegisterContextWrapper, useRegisterContext } from '@contexts/Register';
import { Paragraph } from '@components/atoms/Paragraph';
import { ColorThemeEnum, FontWeightEnum } from '@styles/Theme';

const Register = () => {
  return (
    <RegisterContextWrapper>
      <AuthLayout
        yellowComponent={<RegisterYellow />}
        whiteComponent={<RegisterWhite />}
      />
    </RegisterContextWrapper>
  );
};

const RegisterYellow = () => {
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
    <>
      <Paragraph
        weight={FontWeightEnum.bold}
        variant={ColorThemeEnum.lincolnGreen}
        italic
      >
        Langkah{' '}
        {step === '2a' || step === '2b'
          ? '2'
          : step === '4a' || step === '4b'
          ? '4'
          : step}{' '}
        dari 4
      </Paragraph>
      {Component}
    </>
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

export default Register;
