import {
  WEATHER_DATA_RECEIVED,
  WEATHER_FETCH_FAILED,
  WEATHER_IMAGE_RECEIVED,
  WEATHER_IMAGE_FETCH_FAILED,
} from "../constants/actions";

import {
  weatherStateType,
  weatherImageStateType,
  fetchResponseActionType,
} from "../constants/types";

const initialWeatherState: weatherStateType = {
  weather: {},
  isLoading: true,
  error: undefined,
};

export const reduceWeather = (
  state: weatherStateType = initialWeatherState,
  action: fetchResponseActionType
): weatherStateType => {
  switch (action.type) {
    case WEATHER_DATA_RECEIVED:
      return { ...state, weather: action.payload };
    case WEATHER_FETCH_FAILED:
      return { ...state, error: action.error };
    default:
      return state;
  }
};

const initialWeatherImageState: weatherImageStateType = {
  isLoading: true,
};

export const reduceWeatherImage = (
  state: weatherImageStateType = initialWeatherImageState,
  action: fetchResponseActionType
): weatherImageStateType => {
  switch (action.type) {
    case WEATHER_IMAGE_RECEIVED:
      return { isLoading: false };
    case WEATHER_IMAGE_FETCH_FAILED:
      return { isLoading: true };
    default:
      return state;
  }
};

export const selectIsWeatherLoading = (state: any) => {
  return state.isLoading;
};

export const selectNthWeatherFromToday = (n: number, state: any) => {
  return { ...state?.weather?.data?.list[n] };
};

export const selectCityDetails = (state: any) => {
  return { ...state?.weather?.data?.city };
};
