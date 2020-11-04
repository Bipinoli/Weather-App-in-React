import { combineReducers } from "redux";
import { createSelector } from "reselect";
import { reduceUnit } from "./units/reducer";
import { reduceViewType } from "./viewTypes/reducer";
import {
  reduceWeather,
  selectIsWeatherLoading,
  selectNthWeatherFromToday,
  selectCityDetails,
} from "./weather/reducer";

const reducers = combineReducers({
  unit: reduceUnit,
  viewType: reduceViewType,
  weatherData: reduceWeather,
});

export const selectors = {
  isWeatherLoading: createSelector(
    (state: any) => selectIsWeatherLoading(state.weatherData),
    (isLoading) => isLoading
  ),
  weatherToday: createSelector(
    (state: any) => selectNthWeatherFromToday(0, state.weatherData),
    (weather) => weather
  ),
  futureWeather: (n: number, state: any) => {
    return createSelector(
      (state: any) => selectNthWeatherFromToday(n, state.weatherData),
      (weather) => weather
    )(state);
  },
  cityDetails: createSelector(
    (state: any) => selectCityDetails(state.weatherData),
    (details) => details
  ),
};

Object.freeze(reducers);
export default reducers;
