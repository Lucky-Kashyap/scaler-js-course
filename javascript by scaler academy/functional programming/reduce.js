// sum of all elements

// let n=0;

let num = [1, 4, 2, 12, 3, 2, 3, 7];

// for(let i=0;i<num.length;i++){
//     n +=num[i];
// }

// console.log(n);

let res = num.reduce((el, curr) => {
  return (el += curr);
}, 8);

console.log(res);

let prod = num.reduce((el, curr) => {
  return (el *= curr);
});

console.log(prod);
