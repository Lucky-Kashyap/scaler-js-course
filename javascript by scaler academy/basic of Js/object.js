// var obj = {
//   name: "adam",
//   age: 23,
//   work: "developer",
// };

// console.log(obj);

// dot notation

// console.log(obj.name);

// square notation

// console.log(obj["name"]);

var cap = {
  firstName: "Steve",
  lastName: "Rogers",
  age: 102,
  friends: ["Bucky Barnes", "Bruce BAnner", "Tony Stark"],
  address: {
    state: "Ney York",
    city: {
      name: "Brooklyn",
      pincode: 123456,
    },
  },
};

delete cap.age;
cap.movies = ["age of ultron", "civil war", "avenger"];

// console.log(cap.friends);
// console.log(cap.friends[2]);

console.log(cap);
