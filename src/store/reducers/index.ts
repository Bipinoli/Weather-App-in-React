import { DEG_C, DEG_F, WEEK, DAY } from "../constants/actions";
import { unitActionType, viewTypeActionType } from "../constants/types";

export const unitsReducer = (state: string = DEG_C, action: unitActionType) => {
  switch (action.type) {
    case DEG_C:
      return DEG_C;
    case DEG_F:
      return DEG_F;
    default:
      return state;
  }
};

export const viewTypeReducer = (
  state: string = WEEK,
  action: viewTypeActionType
) => {
  switch (action.type) {
    case WEEK:
      return WEEK;
    case DAY:
      return DAY;
    default:
      return state;
  }
};
