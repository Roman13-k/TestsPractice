import { mapArrToUppercase } from "./mapArrToUppercase";

// toBe не подойдёт т.к. как сравниваются объекты

describe("mapArrToUppercase", () => {
  test("массив строк", () => {
    expect(mapArrToUppercase(["qqwwe", "qwecf", "ggg"])).toEqual(["Qqwwe", "Qwecf", "Ggg"]);
  });
  test("отрицание", () => {
    expect(mapArrToUppercase(["qqwwe", "qwecf", "ggg"])).not.toEqual(["qqwwe", "qwecf", "qgg"]);
  });
  test("пустой массив", () => {
    expect(mapArrToUppercase([])).toEqual([]);
  });
  test("пустой массив строк", () => {
    expect(mapArrToUppercase(["", "", ""])).toEqual([]);
  });
  test("белеберда", () => {
    expect(mapArrToUppercase([null, undefined, 12321, {}])).toEqual([]);
  });
});
