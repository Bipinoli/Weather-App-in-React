import { all } from "redux-saga/effects";
import weatherSaga from "./weather/saga";

// use in parallel
export default function* rootSaga() {
  yield all([weatherSaga()]);
}
