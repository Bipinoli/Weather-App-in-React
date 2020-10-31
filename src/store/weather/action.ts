import { FETCH_WEATHER_DATA, FETCH_WEATHER_IMAGE } from "../constants/actions";
import { weatherActionType, weatherImageActionType } from "../constants/types";

const WeatherActions = {
  fetchWeather: (city: string, unit: string): weatherActionType => {
    return {
      type: FETCH_WEATHER_DATA,
      payload: {
        city: city,
        unit: unit,
      },
    };
  },
  fetchWeatherImage: (image_tag: string): weatherImageActionType => {
    return {
      type: FETCH_WEATHER_IMAGE,
      payload: {
        image_tag: image_tag,
        size: "big",
      },
    };
  },
};

Object.freeze(WeatherActions);
export default WeatherActions;
