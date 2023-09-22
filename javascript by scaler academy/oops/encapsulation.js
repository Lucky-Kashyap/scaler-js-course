// function Person(name, age) {
//   // this.name = name;
//   // this.age = age;
//   var name = name;
//   var age = age;

//   this.getName = function () {
//     return name;
//   };
// }

// let person1 = new Person("Mark", 23);

// // person1.age = 25;  // change

// // console.log(person1);

// person1.name = "Lukcy";

// let res = person1.getName();
// console.log(res);

class Person {
  constructor(_name, _age) {
    var name1 = _name;
    var age = _age;
  }
  getName(){
    return this.name1;
  }
}

let person1 = new Person("Lucky", 23);

person1.name = "Steve";

console.log(person1);

console.log(person1.getName());
