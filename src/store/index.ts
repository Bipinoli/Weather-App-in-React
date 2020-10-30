import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { unitsReducer, viewTypeReducer } from "./reducers";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./sagas/sagas";

export function configureStore() {
  const sagaMiddleware = createSagaMiddleware();

  const composeEnhancers = composeWithDevTools({
    // Specify name here, actionsBlacklist, actionsCreators and other options if needed
  });

  const store = createStore(
    combineReducers({
      unit: unitsReducer,
      viewType: viewTypeReducer,
    }),
    composeEnhancers(applyMiddleware(sagaMiddleware))
  );
  sagaMiddleware.run(rootSaga);
  return store;
}
