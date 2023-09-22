class Car {
  constructor(name, model, color) {
    this.name = name;
    this.model = model;
    this.color = color;
  }

  drive() {
    console.log(
      `I am driving ${this.name} model ${this.model} and color is ${this.color}`
    );
  }
}

let car1 = new Car("Tavera", "2020", "white");

car1.drive();
