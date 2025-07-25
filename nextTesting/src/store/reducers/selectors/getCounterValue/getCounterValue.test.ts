import { getCounterValue } from "./getCounterValue";

describe("getCounterValue", () => {
  test("test witch empty value", () => {
    expect(getCounterValue({} as any)).toBe(0);
  });

  test("test with field value", () => {
    expect(getCounterValue({ counter: { value: 100 } })).toBe(100);
  });
});
