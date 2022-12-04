import Country from "../classes/country.js";
import People from "../classes/people.js";
import Animal from "../classes/animals.js";


function convertData(data) {
    let result = [];
    data.forEach(function (country) {
        let countryObj = new Country(country.name, []);
        country.people.forEach(function (person) {
            let personObj = new People(person.name, []);
            person.animals.forEach(function (animal) {
                let animalObj = new Animal(animal.name);
                personObj.animals.push(animalObj);
            });
            countryObj.people.push(personObj);
        });
        result.push(countryObj);
    }, this);
    return result;
}

export default convertData;