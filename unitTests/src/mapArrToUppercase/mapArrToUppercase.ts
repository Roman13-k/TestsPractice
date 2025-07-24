export const mapArrToUppercase = (arr: Array<unknown>) => {
  return arr
    .filter((item): item is string => typeof item === "string" && item.length > 0)
    .map((str) => str.charAt(0).toUpperCase() + str.slice(1));
};
