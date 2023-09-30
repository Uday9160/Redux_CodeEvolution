import { createStore } from "redux";
import { rootReducer } from "./rootReducer";
// import { buyCakeReducer } from "./cakes/CakeReducer";

export const store = createStore(rootReducer);
