import count from "../../src/functions/count.js";
import data from "../../data.js";
import convertData from "../../src/functions/convert.js";


const convertedData = convertData(data);
describe("testing count function", function () {
    it("should output the same result", function () {
        expect(count(convertedData)[2].name).toEqual("Dillauti [16]");
    });
    it("should have the same length", function () {
        expect(count(convertedData).length).toEqual(data.length);
    });
});