import { LoginActionType, useLoginContext } from '@contexts/Login';
import AuthForm from '../Auth/AuthForm';

export const LoginWhiteStep2 = () => {
  const { dispatch } = useLoginContext();

  return (
    <AuthForm
      authType="login_password"
      onSubmit={(e) => {
        e.preventDefault();
      }}
    />
  );
};
