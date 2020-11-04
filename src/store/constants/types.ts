export type unitActionType = {
  type: "unit/celsius" | "unit/fahrenheit";
};

export type viewTypeActionType = {
  type: "viewType/week" | "viewType/day";
};

type weatherActionPayloadType = {
  city: string;
  unit: string;
};

export type weatherActionType = {
  type: string;
  payload: weatherActionPayloadType;
};

export type weatherStateType = {
  weather?: object;
  isLoading: boolean;
  error?: Error;
};

export type fetchResponseActionType = {
  type: string;
  payload?: object;
  error?: Error;
};
