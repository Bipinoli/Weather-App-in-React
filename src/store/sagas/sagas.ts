import { takeLatest, call, put, all } from "redux-saga/effects";
import { fetchWeatherApi, fetchWeatherImageApi } from "../api/api";

type weatherActionPayloadType = {
  city: string;
  unit: string;
};

type weatherActionType = {
  type: string;
  payload: weatherActionPayloadType;
};

function* getWeather(action: weatherActionType) {
  const { city, unit } = action.payload;
  const { response, error } = yield call(fetchWeatherApi, city, unit);
  if (!!response)
    yield put({ type: "WEATHER_DATA_RECEIVED", weather: response });
  else yield put({ type: "WEATHER_FETCH_FAILED", error });
}

type weatherImageActionPayloadType = {
  image_tag: string;
  size: "small" | "big";
};

type weatherImageActionType = {
  type: string;
  payload: weatherImageActionPayloadType;
};

function* getWeatherImage(action: weatherImageActionType) {
  const { image_tag, size } = action.payload;
  const { response, error } = yield call(fetchWeatherImageApi, image_tag, size);
  if (!!response)
    yield put({ type: "WEATHER_IMAGE_RECEIVED", image: response });
  else yield put({ type: "WEATHER_IMAGE_FETCH_FAILED", error });
}

// use in parallel
export default function* rootSaga() {
  yield all([
    takeLatest("FETCH_WEATHER_DATA", getWeather),
    takeLatest("FETCH_WEATHER_IMAGE", getWeatherImage),
  ]);
}
