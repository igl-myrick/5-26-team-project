import rgbToHex from "../src/rgbToHex";

describe("rgbToHex", () => {
  const input = [[72,27,19],[172,158,77],[106,110,95],[52,55,40],[73,20,14]];
  
  test("should correctly return an array", () => {
    expect(Array.isArray(rgbToHex(input))).toEqual(true);
  });
});