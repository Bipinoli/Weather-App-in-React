import { DEG_C, DEG_F } from "../constants/actions";
import { unitActionType } from "../constants/types";

export const reduceUnit = (state: string = DEG_C, action: unitActionType) => {
  switch (action.type) {
    case DEG_C:
      return DEG_C;
    case DEG_F:
      return DEG_F;
    default:
      return state;
  }
};
