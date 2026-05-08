import getColors from "../src/getColors";

describe("getColors", () => {
  const input = {"result":[[72,27,19],[172,158,77],[106,110,95],[52,55,40],[73,20,14]]};
  const output = getColors(input);

  test("should correctly return an object", () => {
    expect(typeof output).toEqual("object");
  });
});