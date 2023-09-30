import { combineReducers } from "redux";
import { buyCakeReducer } from "./cakes/CakeReducer";
import { buyIceCreamReducer } from "./icecreams/iceCreamReducer";

export const rootReducer = combineReducers({
  cakeRed: buyCakeReducer,
  iceCreamRed: buyIceCreamReducer,
});
