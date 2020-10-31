import { DEG_C, DEG_F } from "../constants/actions";
import { unitActionType } from "../constants/types";

const UnitActions = {
  celsius: (): unitActionType => {
    return {
      type: DEG_C,
    };
  },
  fahrenheit: (): unitActionType => {
    return {
      type: DEG_F,
    };
  },
};

Object.freeze(UnitActions);
export default UnitActions;
