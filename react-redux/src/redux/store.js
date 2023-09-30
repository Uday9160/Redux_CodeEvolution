import { createStore } from "redux";
import { buyCakeReducer } from "./cakes/CakeReducer";

export const store = createStore(buyCakeReducer);
