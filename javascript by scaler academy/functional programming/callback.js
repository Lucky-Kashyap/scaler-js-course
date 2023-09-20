// function PrintFirstName(firstName,cb){
//     console.log(firstName);
//     cb('Rogers');

// }

// PrintFirstName('Steve',printLastName);

// function printLastName(lastName){
//     console.log(lastName);
// }

// printLastName('Rogers');

const isEven = (num) => num % 2 == 0;

let printResult = (evenFn, num) => {
  const isNumEven = evenFn(num);

  console.log(`The number ${num} is an Even Number ${isNumEven}`);
};

printResult(isEven, 55);
