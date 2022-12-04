function count(data) {
    let result = [];
    data.forEach(function (country) {
        result.push(country.count());
    });
    return result;
}

export default count;