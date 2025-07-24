import { square } from "./square";

describe("square", () => {
  beforeAll(() => {
    //один раз в начале
  });
  beforeEach(() => {
    // перед каждым
  });
  test("Корректное значение", () => {
    // expect(square(2)).toBe(4);
    // expect(square(2)).toBeLessThan(5);
    // expect(square(2)).toBeGreaterThan(3);
    // expect(square(2)).not.toBeUndefined();

    const spyMathPow = jest.spyOn(Math, "pow");
    square(2);
    expect(spyMathPow).toHaveBeenCalledTimes(1);
  });

  test("Корректное значение", () => {
    const spyMathPow = jest.spyOn(Math, "pow");
    square(1);
    expect(spyMathPow).toHaveBeenCalledTimes(0);
  });
  afterEach(() => {
    jest.clearAllMocks(); // очистка моков, вызовы накапливаются от теста к тесту
    // после каждого
  });
  afterAll(() => {
    //один раз в конце
  });
});
