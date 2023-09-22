// settimeout always take a callback function and time

//
console.log("first line run");

setTimeout(() => {
  console.log("print set timeout");
}, 2000);

function greet() {
  console.log("Hello from settimeout");
}

setTimeout(greet, 3000);

console.log("Last code run");
