import { createStore, combineReducers } from "redux";
import { unitsReducer, viewTypeReducer } from "./reducers";

const store = createStore(
  combineReducers({
    unit: unitsReducer,
    viewType: viewTypeReducer,
  }),
  // @ts-ignore
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
