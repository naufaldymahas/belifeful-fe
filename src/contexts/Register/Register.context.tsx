import { createContext, Dispatch, FC, useContext, useReducer } from 'react';
import {
  initialRegisterState,
  IRegisterAction,
  IRegisterState,
  RegisterReducer,
} from './Register.reducer';

export const RegisterContext = createContext<{
  state: IRegisterState;
  dispatch: Dispatch<IRegisterAction>;
}>({
  state: initialRegisterState,
  dispatch: () => RegisterReducer,
});

export const RegisterContextWrapper: FC = ({ children }) => {
  const [state, dispatch] = useReducer(RegisterReducer, initialRegisterState);

  return (
    <RegisterContext.Provider value={{ state, dispatch }}>
      {children}
    </RegisterContext.Provider>
  );
};

export const useRegisterContext = () => useContext(RegisterContext);
