import { WEEK, DAY } from "../constants/actions";
import { viewTypeActionType } from "../constants/types";

export const week = (): viewTypeActionType => {
  return {
    type: WEEK,
  };
};

export const today = (): viewTypeActionType => {
  return {
    type: DAY,
  };
};
