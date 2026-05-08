import getColors from "../src/getColors";

describe("getColors", () => {
  const input = {"result":[[72,27,19],[172,158,77],[106,110,95],[52,55,40],[73,20,14]]};
  const output = getColors(input);

  test("should correctly return an object", () => {
    expect(typeof output).toEqual("object");
  });

  test("should correctly return a group of rgb values", () => {
    expect(output).toEqual([
      'rgb(72, 27, 19)',
      'rgb(172, 158, 77)',
      'rgb(106, 110, 95)',
      'rgb(52, 55, 40)',
      'rgb(73, 20, 14)'
    ]);
  });
});