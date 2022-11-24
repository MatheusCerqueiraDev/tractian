import format from "format-number";

export const toNumber = format({
  prefix: "",
  integerSeparator: ".",
  decimal: ",",
  padRight: 2,
  round: 2,
});

export const cleanNumber = (document?: string) => {
  return document?.toString()?.replace?.(/\D/g, "").trim();
};
