import hexToRgb from "../src/hexToRgb";

describe("hexToRgb", () => {
  const output = hexToRgb("#D00018");
  
  test("should correctly return an array", () => {
    expect(Array.isArray(output)).toEqual(true);
  });

  test.each(output)("should correctly return an array of numbers", (elem) => {
    expect(typeof elem).toEqual("number");
  });
});