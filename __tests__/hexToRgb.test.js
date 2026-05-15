import hexToRgb from "../src/hexToRgb";

describe("hexToRgb", () => {
  const output = hexToRgb("#D00018");
  
  test("should correctly return an array", () => {
    expect(Array.isArray(output)).toEqual(true);
  });
});