export const DEG_C = "CELSIUS";
export const DEG_F = "FAHRENHEIT";

export type unitActionType = {
  type: "CELSIUS" | "FAHRENHEIT";
};

export const celsius = (): unitActionType => {
  return {
    type: DEG_C,
  };
};

export const fahrenheit = (): unitActionType => {
  return {
    type: DEG_F,
  };
};
