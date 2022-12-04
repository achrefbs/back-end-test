import parseInput from "../../src/functions/parseInput.js";


describe("testing parseInput function", function () {
    it("should return the input", function () {
        expect(parseInput("--filter=test")).toEqual("test");
    });
});