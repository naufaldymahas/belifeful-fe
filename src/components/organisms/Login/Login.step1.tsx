import Button from '@components/atoms/Button';
import Input from '@components/atoms/Input';
import { Paragraph } from '@components/atoms/Paragraph';
import { LoginActionType, useLoginContext } from '@contexts/Login';
import { ColorThemeEnum, FontWeightEnum } from '@styles/Theme';
import AuthForm from '../Auth/AuthForm';

export const LoginWhiteStep1 = () => {
  const { dispatch } = useLoginContext();

  return (
    <AuthForm authType='login'>
      <Paragraph
        fs='4'
        weight={FontWeightEnum.bolder}
        style={{ marginBottom: '1.375rem' }}
      >
        Masuk
      </Paragraph>
      <form
        style={{ width: '100%' }}
        onSubmit={(e) => {
          e.preventDefault();
          dispatch({
            type: LoginActionType.SET_STEP,
            payload: {
              step: '2',
            },
          });
        }}
      >
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
