import { IRegisterAction, RegisterActionType } from '@contexts/Register';
import { Dispatch, FormEvent } from 'react';

export const RegisterCheckEmail = async (
  e: any,
  dispatch: Dispatch<IRegisterAction>
) => {
  e.preventDefault();
  try {
    const email: string = e.target[0].value;
    if (email) {
      dispatch({ type: RegisterActionType.SET_EMAIL, payload: { email } });
      dispatch({ type: RegisterActionType.SET_STEP, payload: { step: '2a' } });
    }
  } catch (error) {
    console.log({ error });
  }
};
