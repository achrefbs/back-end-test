import data from "../../data.js";
import convertData from "../../src/functions/convert.js";
import Country from "../../src/classes/country.js";
describe("testing convert function", function () {
  it("should have the same length as data and contain Country objects", function () {
    const output = convertData(data);
    expect(output.length).toEqual(data.length);
    expect(output[0]).toEqual(jasmine.any(Country));
  });
});