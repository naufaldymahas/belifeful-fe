import AuthForm from '@components/organisms/Auth/AuthForm';
import { RegisterActionType, useRegisterContext } from '@contexts/Register';

export const RegisterYellowStep1 = () => {
  return (
    <>
      <div className="px-5 ps-lg-0 text-lincoln-green">
        <h2 className="fw-bolder mb-4">Membangun keluarga yang lebih baik</h2>
        <span className="fw-bold fs-5">
          Yuk kita mulai dengan membuat profil log in kamu
        </span>
      </div>
      <span className="px-5 ps-lg-0 text-lincoln-green d-lg-block d-none">
        Pahami <span className="text-persian-green">Kebijakan Privacy</span>{' '}
        kami sebelum mendaftar
      </span>
    </>
  );
};

export const RegisterWhiteStep1 = () => {
  const { dispatch } = useRegisterContext();
  return (
    <>
      <AuthForm
        authType="register"
        onSubmit={(e: any) => {
          e.preventDefault();
          dispatch({
            type: RegisterActionType.SET_EMAIL,
            payload: {
              email: e.target[0].value,
            },
          });

          dispatch({
            type: RegisterActionType.SET_STEP,
            payload: {
              step: '2a',
            },
          });
        }}
      />
    </>
  );
};
