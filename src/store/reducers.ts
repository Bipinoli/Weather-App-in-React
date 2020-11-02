import { combineReducers } from "redux";
import { createSelector } from "reselect";
import { reduceUnit } from "./units/reducer";
import { reduceViewType } from "./viewTypes/reducer";
import {
  reduceWeather,
  reduceWeatherImage,
  selectIsWeatherLoading,
} from "./weather/reducer";

const reducers = combineReducers({
  unit: reduceUnit,
  viewType: reduceViewType,
  weatherData: reduceWeather,
  weatherImage: reduceWeatherImage,
});

export const selectors = {
  isWeatherLoading: createSelector(
    (state: any) => selectIsWeatherLoading(state.weatherData),
    (isLoading) => isLoading
  ),
};

Object.freeze(reducers);
export default reducers;
