// closures

// function test(){
//     let a = 2;

//     function test1(){
//         console.log(a);
//     }

//     // test1();

//     return test1;
// }

// let fun = test();

// fun();

function greet() {
  let name = "Steve";

  function displayName() {
    let age = 23;

    console.log(`Hi ${name}`);

    function displayAge() {
      console.log(`Age : ${age} Name ${name} `);
    }
    return displayAge;
  }
  return displayName;
}

let greetFun = greet();

let greetAge = greetFun();

greetAge();
