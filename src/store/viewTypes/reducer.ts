import { WEEK, DAY } from "../constants/actions";
import { viewTypeActionType } from "../constants/types";

export const reduceViewType = (
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
