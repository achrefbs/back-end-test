import filter from "../../src/functions/filter.js";
import data from "../../data.js";
import convertData from "../../src/functions/convert.js";
describe("testing filter function", function () {
    let convertedData = convertData(data);
    it("testing with ry should output 2", function () {
        const output = filter("ry",convertedData);
        expect(output.length).toEqual(2);
    });

    it("filterByString with 'te' should output 1", function () {
        const output = filter( "te",convertedData);
        expect(output.length).toEqual(1);
    });

    it("filterByString with 'zzz' should output 0", function () {
        const output = filter( "zzz",convertedData);
        expect(output.length).toEqual(0);
    });
});