import { DEG_C, DEG_F } from "../constants/actions";
import { unitActionType } from "../constants/types";

export const reduceUnit = (state: string = "C", action: unitActionType) => {
  switch (action.type) {
    case DEG_C:
      return "C";
    case DEG_F:
      return "F";
    default:
      return state;
  }
};
