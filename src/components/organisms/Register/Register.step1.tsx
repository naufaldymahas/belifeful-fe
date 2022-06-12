import Button from '@components/atoms/Button';
import Input from '@components/atoms/Input';
import { Paragraph } from '@components/atoms/Paragraph';
import { Span } from '@components/atoms/Span';
import AuthForm from '@components/organisms/Auth/AuthForm';
import { useRegisterContext } from '@contexts/Register';
import { ColorThemeEnum, FontWeightEnum } from '@styles/Theme';
import { RegisterCheckEmail } from './Register.service';

export const RegisterYellowStep1 = () => {
  return (
    <>
      <div style={{ paddingRight: '4.125rem' }}>
        <Paragraph
          fs='4'
          weight={FontWeightEnum.bolder}
          variant={ColorThemeEnum.lincolnGreen}
        >
          Membangun keluarga yang lebih baik
        </Paragraph>
        <Paragraph
          fs='6'
          weight={FontWeightEnum.bold}
          variant={ColorThemeEnum.lincolnGreen}
        >
          Yuk kita mulai dengan membuat profil log in kamu
        </Paragraph>
      </div>
      <Span weight={FontWeightEnum.semi} variant={ColorThemeEnum.lincolnGreen}>
        Pahami{' '}
        <Span
          weight={FontWeightEnum.semi}
          variant={ColorThemeEnum.persianGreen}
        >
          Kebijakan Privasi
        </Span>{' '}
        kami sebelum mendaftar
      </Span>
    </>
  );
};

export const RegisterWhiteStep1 = () => {
  const { dispatch } = useRegisterContext();

  return (
    <AuthForm authType='register'>
      <Paragraph
        fs='4'
        weight={FontWeightEnum.bolder}
        style={{ marginBottom: '1.375rem' }}
      >
        Daftar
      </Paragraph>
      <form style={{width: '100%'}} onSubmit={(e) => RegisterCheckEmail(e, dispatch)}>
        <Input placeholder='Email Address' type='email' />
        <Button
          variant={ColorThemeEnum.gold}
          weight='800'
          block
          style={{ marginTop: '1.875rem' }}
        >
          Lanjutkan
        </Button>
      </form>
    </AuthForm>
  );
};
