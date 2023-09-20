// problems with var

// console.log(a);
// var a = 10;

// console.log(a);
// var a = 30;

// console.log(a);

// console.log(num);

// var num = 10;

// console.log(num);

// var a = 35;

// console.log(a);

// if (a === 35) {
//   var b = 40;

//   console.log(b);
// }
// variables declaerd with var keyword
// they are not block scoped they are fucntion scope
// scoping issue
// console.log(b);

function add(a, b) {
  var num = 20;
  console.log(a + b);
  console.log(num);
}

// console.log(num);
add(90, 10);
