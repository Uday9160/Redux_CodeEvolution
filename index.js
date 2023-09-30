//Action Type
const BUY_CAKE = "BUY_CAKE";
const BUY_ICECREAM = "BUY_ICECREAM";

/*const initialState = {
  noOfCakes: 10,
  noOfIceCreams: 20,
}; */

const cakeInitialState = {
  noOfCakes: 10,
};
const iceCreamInitialState = {
  noOfIceCreams: 20,
};

// Action Creator
const buyCakeForMe = () => {
  let info = "Yes I will buy this Cake for you";
  return {
    type: BUY_CAKE,
    payload: info,
  };
};
const buyIceCreamForMe = () => {
  let info = "Yes I will buy this Ice Cream for you";
  return {
    type: BUY_ICECREAM,
    payload: info,
  };
};

//Reducer to Buy Cake or Ice cream

const buyCakeReducer = (state = cakeInitialState, action) => {
  switch (action.type) {
    case BUY_CAKE:
      return { ...state, noOfCakes: state.noOfCakes - 1 };
    default:
      return state;
  }
};

const buyIceCreamReducer = (state = iceCreamInitialState, action) => {
  switch (action.type) {
    case BUY_ICECREAM:
      return { ...state, noOfIceCreams: state.noOfIceCreams - 1 };
    default:
      return state;
  }
};

// Store
const redux = require("redux");
const createStore = redux.createStore;
const combineReducers = redux.combineReducers;
//middleware
const reduxLogger = require("redux-logger");
const logger = reduxLogger.createLogger();
const applyMiddleware = redux.applyMiddleware;

const rootReducer = combineReducers({
  cakeReducer: buyCakeReducer,
  iceReducer: buyIceCreamReducer,
});

const store = createStore(rootReducer, applyMiddleware(logger));
console.log("Initial State", store.getState());
const unsubscribe = store.subscribe(() => {
  // console.log("Updated State of IceCream and Cake :", store.getState());
  // console.log("Updated State of IceCream :", store.getState().iceReducer);
  // console.log("Updated State of Cake :", store.getState().cakeReducer);
});

//Calling the reducer functionby passing the action object by using dispatch function
store.dispatch(buyCakeForMe());
store.dispatch(buyCakeForMe());
store.dispatch(buyIceCreamForMe());
store.dispatch(buyIceCreamForMe());
unsubscribe();
