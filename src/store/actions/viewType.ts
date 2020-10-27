export const WEEK = "WEEK";
export const DAY = "DAY";

export type viewTypeActionType = {
  type: "WEEK" | "DAY";
};

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
