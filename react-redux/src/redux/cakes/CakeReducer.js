import { BUY_CAKE } from "./CakeActionTypes";
const initialState = {
  numOfCakes: 10,
};

export const buyCakeReducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_CAKE:
      return { ...state, numOfCakes: state.numOfCakes - 1 };
    default:
      return state;
  }
};
