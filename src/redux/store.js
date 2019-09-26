import { createStore, combineReducers } from "redux";
import results from "./reducers/results";
import currentItem from "./reducers/currentItem";
import suggestion from "./reducers/suggestions";

const reducer = combineReducers({
  results,
  currentItem,
  suggestion
});

const store = createStore(reducer);

export default store;
