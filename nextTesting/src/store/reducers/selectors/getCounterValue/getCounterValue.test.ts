import { RootState } from "@/store/store";
import { getCounterValue } from "./getCounterValue";

describe("getCounterValue", () => {
  test("test witch empty value", () => {
    expect(getCounterValue({} as RootState)).toBe(0);
  });

  test("test with field value", () => {
    expect(getCounterValue({ counter: { value: 100 } })).toBe(100);
  });
});
