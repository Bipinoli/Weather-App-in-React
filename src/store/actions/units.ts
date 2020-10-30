import { DEG_C, DEG_F } from "../constants/actions";
import { unitActionType } from "../constants/types";

export const celsius = (): unitActionType => {
  return {
    type: DEG_C,
  };
};

export const fahrenheit = (): unitActionType => {
  return {
    type: DEG_F,
  };
};
