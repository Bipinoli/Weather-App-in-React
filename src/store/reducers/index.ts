import { DEG_C, DEG_F, unitActionType } from "../actions/units";
import { WEEK, DAY, viewTypeActionType } from "../actions/viewType";

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
