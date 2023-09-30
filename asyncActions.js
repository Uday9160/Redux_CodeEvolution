// initilaization of state
const initialState = {
  loading: false,
  users: [],
  error: "",
};

//Action types
const FETCH_USER_REQUEST = "FETCH_USER_REQUEST";
const FETCH_USER_SUCCESS = "FETCH_USER_SUCCESS";
const FETCH_USER_FAILURE = "FETCH_USER_FAILURE";

//Action Creators
const fetchUsersRequest = () => {
  return {
    type: FETCH_USER_REQUEST,
    payload: { loading: true },
  };
};

const fetchUsersSuccess = (data) => {
  const id = data.map((user) => user.id);
  return {
    type: FETCH_USER_SUCCESS,
    payload: { loading: false, users: id },
  };
};

const fetchUsersFailure = (error) => {
  return {
    type: FETCH_USER_FAILURE,
    payload: { loading: false, error: error, users: [] },
  };
};

// Async Action Creator
const fetchUsers = () => {
  return (dispatch) => {
    dispatch(fetchUsersRequest());
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        const usersData = response.data;
        dispatch(fetchUsersSuccess(usersData));
      })
      .catch((error) => {
        const err = error.message;
        dispatch(fetchUsersFailure(err));
      });
  };
};

//Reducer
const FetchingDataReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USER_REQUEST:
      return { ...state, loading: action.payload.loading };
    case FETCH_USER_SUCCESS:
      return {
        ...state,
        loading: action.payload.loading,
        users: action.payload.users,
      };
    case FETCH_USER_FAILURE:
      return {
        ...state,
        loading: action.payload.loading,
        error: action.payload.error,
        users: action.payload.users,
      };
    default:
      return state;
  }
};

//store
const redux = require("redux");
const createStore = redux.createStore;

// Middleware
const reduxLogger = require("redux-logger");
const logger = reduxLogger.createLogger();
const applyMiddleware = redux.applyMiddleware;
const axios = require("axios");
const thunkMiddleware = require("redux-thunk").default;

const store = createStore(
  FetchingDataReducer,
  applyMiddleware(thunkMiddleware, logger)
);

store.subscribe(() => {});
// console.log("Initial State", store.getState());
store.dispatch(fetchUsers());
