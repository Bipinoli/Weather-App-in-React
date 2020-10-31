import { WEEK, DAY } from "../constants/actions";
import { viewTypeActionType } from "../constants/types";

const ViewTypeActions = {
  week: (): viewTypeActionType => {
    return {
      type: WEEK,
    };
  },
  today: (): viewTypeActionType => {
    return {
      type: DAY,
    };
  },
};

Object.freeze(ViewTypeActions);
export default ViewTypeActions;
