import { counterReducer } from "./counter";
import { combineReducers } from "redux";

export const allReducers = combineReducers({
  // a function with an object in it
  counter: counterReducer,
});
