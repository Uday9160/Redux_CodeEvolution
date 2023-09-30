import { BUY_ICECREAM } from "./iceCreamActionTypes";

const initialIceCreamState = {
  numOfIceCreams: 20,
};

export const buyIceCreamReducer = (state = initialIceCreamState, action) => {
  switch (action.type) {
    case BUY_ICECREAM:
      return { ...state, numOfIceCreams: state.numOfIceCreams - 1 };
    default:
      return state;
  }
};
