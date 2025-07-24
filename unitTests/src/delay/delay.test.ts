import { delay } from "./delay";

describe("delay", () => {
  test("Корректное значение", async () => {
    const summ = await delay(() => 5 + 5, 1000);
    expect(summ).toBe(10);
  });
});
