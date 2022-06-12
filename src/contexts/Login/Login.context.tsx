import { createContext, Dispatch, FC, useContext, useReducer } from 'react';
import {
  initialLoginState,
  ILoginAction,
  ILoginState,
  LoginReducer,
} from './Login.reducer';

export const LoginContext = createContext<{
  state: ILoginState;
  dispatch: Dispatch<ILoginAction>;
}>({
  state: initialLoginState,
  dispatch: () => LoginReducer,
});

export const LoginContextWrapper: FC = ({ children }) => {
  const [state, dispatch] = useReducer(LoginReducer, initialLoginState);

  return (
    <LoginContext.Provider value={{ state, dispatch }}>
      {children}
    </LoginContext.Provider>
  );
};

export const useLoginContext = () => useContext(LoginContext);
