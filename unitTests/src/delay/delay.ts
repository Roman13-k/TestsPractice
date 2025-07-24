export const delay = <T>(callback: () => T, ms: number) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(callback());
    }, ms);
  });
};
