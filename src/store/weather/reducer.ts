import {
  WEATHER_DATA_RECEIVED,
  WEATHER_FETCH_FAILED,
  WEATHER_IMAGE_RECEIVED,
  WEATHER_IMAGE_FETCH_FAILED,
} from "../constants/actions";

export const reduceWeather = (state: any = {}, action: any): any => {
  // TODO:
  switch (action.type) {
    case WEATHER_DATA_RECEIVED:
      return action.payload;
    case WEATHER_FETCH_FAILED:
      return state;
    default:
      return state;
  }
};

export const reduceWeatherImage = (state: any = "", action: any): any => {
  // TODO:
  switch (action.type) {
    case WEATHER_IMAGE_RECEIVED:
      return action.payload;
    case WEATHER_IMAGE_FETCH_FAILED:
      return state;
    default:
      return state;
  }
};
