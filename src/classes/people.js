class People {
  constructor(name, animals) {
    this.name = name;
    this.animals = animals;
  }
  count() {
    return[{
        name: `${this.name} [${this.animals.length}]`,
        animals: this.animals
    }, this.animals.length];
  }

  filter(value) {
    let result = [];
    this.animals.forEach(function (animal) {
      if (animal.name.includes(value)) {
        result.push(animal);
      }});
    return result;
  }
}

export default People;