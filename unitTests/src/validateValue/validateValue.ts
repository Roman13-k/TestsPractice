export const validateValue = (value: number): boolean => {
  if (Number.isInteger(value) && (value > 100 || value < 0)) return true;
  return false;
};
