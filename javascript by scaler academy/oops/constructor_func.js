function Car(name, model, color) {
  this.name = name;
  this.model = model;
  this.color = color;
  this.drive = function () {
    console.log(`I am driving ${this.name} and color is ${this.color}`);
  };
}

let car1 = new Car("maruti", "2015", "white");
let car2 = new Car("mahindra", "2018", "black");
let car3 = new Car("tavera", "2013", "navy_blue");

// console.log(car1);

// console.log(car2.name);
// console.log(car3);
// console.log(car2);
// console.log(car1);

// console.log(car3.model);

car3.drive();
