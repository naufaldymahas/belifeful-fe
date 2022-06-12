export type ILoginState = {
  step: '1' | '2';
  email: string;
  password: string;
};

export type ILoginAction = {
  type: LoginActionType;
  payload: {
    step?: '1' | '2';
    email?: string;
    password?: string;
  };
};

export enum LoginActionType {
  SET_STEP,
  SET_EMAIL,
  SET_PASSWORD,
}

export const initialLoginState: ILoginState = {
  step: '1',
  email: '',
  password: '',
};

export const LoginReducer = (
  state: ILoginState,
  action: ILoginAction
): ILoginState => {
  const { type, payload } = action;
  switch (type) {
    case LoginActionType.SET_STEP:
      return { ...state, step: payload.step ?? '1' };
    case LoginActionType.SET_EMAIL:
      return { ...state, email: payload.email ?? '' };
    case LoginActionType.SET_PASSWORD:
      return { ...state, password: payload.password ?? '' };
    default:
      return state;
  }
};
