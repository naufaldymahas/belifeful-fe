export type IGlobalState = {
  width: number;
  height: number;
};

export type IGlobalAction = {
  type: GlobalActionType;
  payload: {
    width?: number;
    height?: number;
  };
};

export enum GlobalActionType {
  SET_DIMENSION,
}

export const initialGlobalState: IGlobalState = {
  width: 0,
  height: 0,
};

export const GlobalReducer = (
  state: IGlobalState,
  action: IGlobalAction
): IGlobalState => {
  const { type, payload } = action;
  switch (type) {
    case GlobalActionType.SET_DIMENSION:
      return {
        ...state,
        width: payload.width ?? 0,
        height: payload.height ?? 0,
      };
    default:
      return state;
  }
};
