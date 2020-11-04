import { takeLatest, call, put, all } from "redux-saga/effects";
import { fetchWeatherApi } from "./api";
import {
  FETCH_WEATHER_DATA,
  WEATHER_DATA_RECEIVED,
  WEATHER_FETCH_FAILED,
} from "../constants/actions";
import { weatherActionType } from "../constants/types";

function* getWeather(action: weatherActionType) {
  const { city, unit } = action.payload;
  const { response, error } = yield call(fetchWeatherApi, city, unit);
  if (!!response) yield put({ type: WEATHER_DATA_RECEIVED, payload: response });
  else yield put({ type: WEATHER_FETCH_FAILED, error });
}

// use in parallel
export default function* weatherSaga() {
  yield all([takeLatest(FETCH_WEATHER_DATA, getWeather)]);
}
