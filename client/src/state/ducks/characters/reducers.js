import { combineReducers } from "redux";
import types from "./types";

/*
  STATE SHAPE:
  {
    character: object,
    characters: array
  }
*/

const createReducer = (state = {}, action) => {
  switch (action.type) {
    case types.CREATE:
      return action.payload;
    default:
      return state;
  }
};

const getReducer = (state = [], action) => {
  switch (action.type) {
    case types.GET:
      action.payload;
    default:
      return state;
  }
};

const reducer = combineReducers({
  create: createReducer,
  get: getReducer
});

export default reducer;
