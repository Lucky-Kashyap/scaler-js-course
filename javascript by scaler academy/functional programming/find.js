// let arr = [1,2,3,4,5,6,7];

// arr.find(el=> console.log(el));

let transactions = [1000, 3000, 4000, 2000, 3800, 2400, -2345];

let firstWithDraw = transactions.find((n) => n < 0);

console.log(firstWithDraw);

// findIndex

let firstWithDrawIndex = transactions.findIndex((n) => n < 0);

console.log(firstWithDrawIndex);
