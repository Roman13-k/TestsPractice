import { validateValue } from "./validateValue";

describe("validateValue", () => {
  test("Некорректное значение", () => {
    expect(validateValue(50)).toBe(false);
  });
  test("Не целое", () => {
    expect(validateValue(50.43)).toBe(false);
  });
  test("Не целое, в диапазоне", () => {
    expect(validateValue(101.12)).toBe(false);
  });
  test("Пограничное сверху", () => {
    expect(validateValue(100)).toBe(false);
  });
  test("Пограничное снизу", () => {
    expect(validateValue(0)).toBe(false);
  });
  test("Корректное снизу", () => {
    expect(validateValue(-1)).toBe(true);
  });
  test("Корректное сверху", () => {
    expect(validateValue(101)).toBe(true);
  });
});
