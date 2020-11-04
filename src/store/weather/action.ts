import { FETCH_WEATHER_DATA } from "../constants/actions";
import { weatherActionType } from "../constants/types";

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
};

Object.freeze(WeatherActions);
export default WeatherActions;
