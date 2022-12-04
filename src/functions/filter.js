function filter(value, data) {
    let result = [];
    data.forEach(function (country) {
        let filtered = country.filter(value);
        if (filtered.length > 0) {
            result.push({
                name: country.name,
                people: filtered,
            });
        }
    });
    return result;
}

export default filter;