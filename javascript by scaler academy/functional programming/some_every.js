// some method

// Condition check : to get true or false based on a condition
// it will return true if even 1  element satisfies the condition.

// let transactions = [-1000, -3000, -4000, -2000, -3800, 2400, -2345];

let transactions = [1000, 3000, 4000, 2000, 3800, 2400, 2345];

let result = transactions.some((el) => el > 0);

console.log(result);

let res = transactions.every((el) => el > 0);

console.log(res);
