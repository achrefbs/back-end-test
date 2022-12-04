import convertData from "./convert.js";

function count(data) {
    let result = [];
    let convertedData = convertData(data);
    convertedData.forEach(function (country) {
        result.push(country.count());
    });
    return result;
}

export default count;