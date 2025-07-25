import counterSlice, { decrement, increment, incrementByAmount } from "./counterReducer";

describe("counterReducer", () => {
  test("increment", () => {
    expect(counterSlice({ value: 0 }, increment())).toEqual({ value: 1 });
  });
  test("decrement", () => {
    expect(counterSlice({ value: 0 }, decrement())).toEqual({ value: -1 });
  });
  test("byAmount", () => {
    expect(counterSlice({ value: 0 }, incrementByAmount(5))).toEqual({ value: 5 });
  });
  test("empty", () => {
    expect(counterSlice(undefined, increment())).toEqual({ value: 1 });
    expect(counterSlice(undefined, decrement())).toEqual({ value: -1 });
    expect(counterSlice(undefined, incrementByAmount(5))).toEqual({ value: 5 });
  });
});
