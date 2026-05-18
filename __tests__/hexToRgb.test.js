import hexToRgb from "../src/hexToRgb";

describe("hexToRgb", () => {
  const output = hexToRgb("#D00018");
  
  test("should correctly return an array", () => {
    expect(Array.isArray(output)).toEqual(true);
  });

  test.each(output)("should correctly return an array of numbers", (elem) => {
    expect(typeof elem).toEqual("number");
  });

  test("should correctly return array of 3 numbers equal to an rgb value", () => {
    expect(output).toEqual([208,0,24]);
  });
});