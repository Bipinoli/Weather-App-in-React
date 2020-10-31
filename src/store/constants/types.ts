export type unitActionType = {
  type: "CELSIUS" | "FAHRENHEIT";
};

export type viewTypeActionType = {
  type: "WEEK" | "DAY";
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
