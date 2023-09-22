// we will be given a number and we have to check that if the square of that number
// is even or not

// const a =12;
// const a = 11;

// function square(a) {
//   // console.log(a*a);
//   if ((a * a) & 1) {
//     console.log("odd");
//   } else {
//     console.log("even");
//   }
// }

// square(a);

const checkForSquare = (x) => ((x * x) % 2 === 0 ? true : false);

console.log(checkForSquare(9));

// if(checkForSquare(1)){
//     console.log('even');
// }
// else{
//     console.log('odd');
// }
