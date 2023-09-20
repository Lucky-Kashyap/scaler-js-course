// var a = 4;
// by changing its value the result changes
// var a =10;

// function add(x){
//     console.log(x+a);
//     a++;
// }

// // same nput same result

// add(2);
// add(2);
// add(2);

function addPure(x, a) {
  // console.log(x+a);
  return x + a;
}

let res = addPure(2, 3);
let output = addPure(2, 3);

console.log(res);
console.log(output);
