import data from "../../data.js";
import convertData from "../../src/functions/convert.js";
import Country from "../../src/classes/country.js";

const convertedData = convertData(data);

describe("testing convert function", function () {
    it("should contain Country objects", function () {
        expect(convertedData[0]).toEqual(jasmine.any(Country));
    });
    it("should have the same length as data ", function () {
        expect(convertedData.length).toEqual(data.length);
    });
});