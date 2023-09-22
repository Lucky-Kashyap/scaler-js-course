const fs = require("fs");

console.log("first line");

// let data = fs.readFileSync('f1.txt');
// let data2 = fs.readFileSync('f2.txt');

// console.log(data2);
// console.log(data);

fs.readFile("f1.txt", cb);

function cb(err, data) {
  if (err) {
    console.log(err);
  }

  console.log("File 1 data -> " + data);
}

fs.readFile("f2.txt", cb1);

function cb1(err, data) {
  if (err) {
    console.log(err);
  }

  console.log("File 1 data -> " + data);
}

console.log("last line");
