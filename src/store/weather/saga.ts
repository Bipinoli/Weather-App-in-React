import { takeLatest, call, put, all } from "redux-saga/effects";
import { fetchWeatherApi, fetchWeatherImageApi } from "./api";
import {
  FETCH_WEATHER_DATA,
  FETCH_WEATHER_IMAGE,
  WEATHER_DATA_RECEIVED,
  WEATHER_FETCH_FAILED,
  WEATHER_IMAGE_RECEIVED,
  WEATHER_IMAGE_FETCH_FAILED,
} from "../constants/actions";
import { weatherActionType, weatherImageActionType } from "../constants/types";

function* getWeather(action: weatherActionType) {
  const { city, unit } = action.payload;
  const { response, error } = yield call(fetchWeatherApi, city, unit);
  if (!!response) yield put({ type: WEATHER_DATA_RECEIVED, weather: response });
  else yield put({ type: WEATHER_FETCH_FAILED, error });
}

function* getWeatherImage(action: weatherImageActionType) {
  const { image_tag, size } = action.payload;
  const { response, error } = yield call(fetchWeatherImageApi, image_tag, size);
  if (!!response) yield put({ type: WEATHER_IMAGE_RECEIVED, image: response });
  else yield put({ type: WEATHER_IMAGE_FETCH_FAILED, error });
}

// use in parallel
export default function* weatherSaga() {
  yield all([
    takeLatest(FETCH_WEATHER_DATA, getWeather),
    takeLatest(FETCH_WEATHER_IMAGE, getWeatherImage),
  ]);
}
