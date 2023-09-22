let id = setInterval(greet, 1000);

function greet() {
  console.log("Hello set interval runs");
}

// setTimeout(clearInterval(id),5000);

// clearInterval(id);

setTimeout(() => clearInterval(id), 5000);
