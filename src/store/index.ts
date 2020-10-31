import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import createSagaMiddleware from "redux-saga";
import { reduceUnit } from "./units/reducer";
import { reduceViewType } from "./viewTypes/reducer";
import rootSaga from "./weather/saga";

export function configureStore() {
  const sagaMiddleware = createSagaMiddleware();

  const composeEnhancers = composeWithDevTools({
    // Specify name here, actionsBlacklist, actionsCreators and other options if needed
  });

  const store = createStore(
    combineReducers({
      unit: reduceUnit,
      viewType: reduceViewType,
    }),
    composeEnhancers(applyMiddleware(sagaMiddleware))
  );
  sagaMiddleware.run(rootSaga);
  return store;
}
