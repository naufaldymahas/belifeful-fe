import { LoginActionType, useLoginContext } from '@contexts/Login';
import AuthForm from '../Auth/AuthForm';

export const LoginWhiteStep1 = () => {
  const { dispatch } = useLoginContext();

  return (
    <AuthForm
      authType="login"
      onSubmit={(e) => {
        e.preventDefault();
        dispatch({
          type: LoginActionType.SET_STEP,
          payload: {
            step: '2',
          },
        });
      }}
    />
  );
};
