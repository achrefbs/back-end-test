import convertData from "./convert.js";

function filter(value, data) {
    let convertedData = convertData(data);
    let result = [];
    convertedData.forEach(function (country) {
        let filtered = country.filter(value);
        if (filtered.length > 0) {
            result.push({
                name: country.name,
                people: filtered,
            });
        } });
    return result;
}

export default filter;