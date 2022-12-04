class Country {
  constructor(name, people) {
    this.name = name;
    this.people = people;
  }

  count() {
    let total = 0;
    let result = [];
    this.people.forEach(function (person) {
      total++;
      let [peopleCount, numberOfAnimals] = person.count();
      result.push(peopleCount);
      total += numberOfAnimals;
    });
    return { name: `${this.name} [${total}]`, people: result };
  }
}

export default Country;