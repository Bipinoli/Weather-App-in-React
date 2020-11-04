import {
  WEATHER_DATA_RECEIVED,
  WEATHER_FETCH_FAILED,
} from "../constants/actions";

import { weatherStateType, fetchResponseActionType } from "../constants/types";

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
      return { ...state, weather: action.payload, isLoading: false };
    case WEATHER_FETCH_FAILED:
      return { ...state, error: action.error, isLoading: true };
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
