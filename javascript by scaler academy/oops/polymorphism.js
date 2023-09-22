class Animal {
  sound() {
    console.log("Animals make different sounds");
  }
}
class Dog {
  sound() {
    console.log("Dog sounds");
  }
}

class Bird {
  sound() {
    console.log("Bird sounds");
  }
}

let animal = new Animal();

let bird = new Bird();
let tommy = new Dog();

tommy.sound();

bird.sound();

// console.log(animal);

animal.sound();
