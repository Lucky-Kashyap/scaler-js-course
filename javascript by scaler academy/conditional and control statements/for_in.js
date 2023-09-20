// In JS, the for-in loop allows you to loop through the properties of an object.
// the statements of code found within the loop body will be excuted once for each property of the object

// var obj = {
//   name: "Adam",
//   age: 23,
//   work: "developer",
//   city: "Delhi",
//   pincode: 282006,
// };

// for (let key in obj) {
//   // console.log(key);
//   //   console.log(obj.key);  // undefined

//   console.log(obj[key]);
// }

var arr = [1, 2, 3, 4, 5];

for (key in arr) {
  // console.log(key);
  // console.log(arr.key);
  console.log(arr[key]);
}
