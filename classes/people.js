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
}

export default People;