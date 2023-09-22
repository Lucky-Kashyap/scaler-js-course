// let arr = [1, 2, 3, 4, 5];

// let squaredArr = [];

// for (let i = 0; i < arr.length; i++) {
//   squaredArr.push(arr[i] * arr[i]);
// }

// console.log(squaredArr);

// let arr = [1, 2, 3, 4, 5];

// let squaredArr = arr.map((el) => el * el);

// console.log(squaredArr);

const transactions = [1000, 3000, 4000, 2000, 1200, 2800, 4500];

const dolor = 80;

// let transactionsInDolors = transactions.map((amt) => {
//   return amt / dolor;
// });

// console.log(transactionsInDolors);

transactions.forEach((amt) => console.log(amt / dolor));
  
//   console.log(transactionsInDolors1);
//   console.log(transactions);
