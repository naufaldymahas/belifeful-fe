export type IRegisterState = {
  step: '1' | '2a' | '2b' | '3' | '4a' | '4b';
  email: string;
  otp: string[];
  firstName: string;
  lastName: string;
  handphone: string;
  password: string;
};

export type IRegisterAction = {
  type: RegisterActionType;
  payload: {
    step?: '1' | '2a' | '2b' | '3' | '4a' | '4b';
    email?: string;
    otp?: string[];
    firstName?: string;
    lastName?: string;
    handphone?: string;
    password?: string;
  };
};

export enum RegisterActionType {
  SET_STEP,
  SET_EMAIL,
  SET_OTP,
  SET_BIODATA,
  SET_PASSWORD,
}

export const initialRegisterState: IRegisterState = {
  step: '1',
  email: '',
  otp: ['', '', '', '', '', ''], // 6 length
  firstName: '',
  lastName: '',
  handphone: '',
  password: '',
};

export const RegisterReducer = (
  state: IRegisterState,
  action: IRegisterAction
): IRegisterState => {
  const { type, payload } = action;
  switch (type) {
    case RegisterActionType.SET_STEP:
      return { ...state, step: payload.step ?? '1' };
    case RegisterActionType.SET_EMAIL:
      return { ...state, email: payload.email ?? '' };
    case RegisterActionType.SET_OTP:
      return { ...state, otp: payload.otp! };
    case RegisterActionType.SET_BIODATA:
      return {
        ...state,
        firstName: payload.firstName ?? '',
        lastName: payload.lastName ?? '',
        handphone: payload.handphone ?? '',
      };
    case RegisterActionType.SET_PASSWORD:
      return { ...state, password: payload.password ?? '' };
    default:
      return state;
  }
};
