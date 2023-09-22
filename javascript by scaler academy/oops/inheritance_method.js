class Person {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
    welcome(){
        console.log(`welcome ${this.name} and age ${this.age}`);
    }
  }
  
  class Teacher extends Person {
    constructor(name, age, classStrength) {
      super(name, age);
      this.classStrength = classStrength;
    }

    test(){
        super.welcome();
    }
  }
  
  class Student extends Person {
    constructor(name, age, cgpa) {
      super(name, age);
      this.cgpa = cgpa;
    }
  }
  
  // let person1 = new Person("Adam", 23);
  
  let teacher1 = new Teacher("Leave", 28, 48);
  
//   console.log(teacher1);
teacher1.test();
  
  // console.log(person1);
  
//   let st1 = new Student("Dina", 27, 7.6);
  
//   console.log(st1);
  