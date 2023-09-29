//Action Type
const BUY_CAKE = "BUY_CAKE";

const initialState = {
  noOfCakes: 10,
};

// Action Creator
const buyCakeForMe = () => {
  let info = "Yes I will buy this for you";
  return {
    type: BUY_CAKE,
    payload: info,
  };
};

//Reducer

const buyCakeReducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_CAKE:
      return { ...state, noOfCakes: state.noOfCakes - 1 };
    default:
      return state;
  }
};

// Store
const redux = require("redux");
const createStore = redux.createStore;

const store = createStore(buyCakeReducer);
console.log("Initial State", store.getState());
const unsubscribe = store.subscribe(() =>
  console.log("Updated State:", store.getState())
);

//Calling the reducer functionby passing the action object by using dispatch function
store.dispatch(buyCakeForMe());
store.dispatch(buyCakeForMe());
store.dispatch(buyCakeForMe());
store.dispatch(buyCakeForMe());
unsubscribe();
