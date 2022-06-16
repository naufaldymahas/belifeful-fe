import Loader from '@components/molecules/Loader';
import {
  createContext,
  Dispatch,
  FC,
  useContext,
  useEffect,
  useMemo,
  useReducer,
} from 'react';
import {
  initialGlobalState,
  IGlobalAction,
  IGlobalState,
  GlobalReducer,
  GlobalActionType,
} from './Global.reducer';

export const GlobalContext = createContext<{
  state: IGlobalState;
  dispatch: Dispatch<IGlobalAction>;
}>({
  state: initialGlobalState,
  dispatch: () => GlobalReducer,
});

const getWindowDimension = () => {
  const { innerWidth: width, innerHeight: height } = window;

  return {
    width,
    height,
  };
};

export const GlobalContextWrapper: FC = ({ children }) => {
  const [state, dispatch] = useReducer(GlobalReducer, initialGlobalState);
  const handleResize = useMemo(
    () => () => {
      dispatch({
        type: GlobalActionType.SET_DIMENSION,
        payload: {
          ...getWindowDimension(),
        },
      });
    },
    []
  );

  useEffect(() => {
    if (!state.width) {
      handleResize();
    }

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <GlobalContext.Provider value={{ state, dispatch }}>
      {!state.width ? <Loader /> : children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => useContext(GlobalContext);
