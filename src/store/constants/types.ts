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

type weatherImageActionPayloadType = {
  image_tag: string;
  size: "small" | "big";
};

export type weatherImageActionType = {
  type: string;
  payload: weatherImageActionPayloadType;
};

export type weatherStateType = {
  weather?: object;
  isLoading: boolean;
  error?: Error;
};

export type weatherImageStateType = {
  isLoading: boolean;
};

export type fetchResponseActionType = {
  type: string;
  payload?: object;
  error?: Error;
};
