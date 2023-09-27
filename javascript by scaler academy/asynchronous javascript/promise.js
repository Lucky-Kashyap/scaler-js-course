let promise = new Promise((res, rej) => {
  let a = 2;

  if (a == 1) {
    res("Promise resolved");
  } else {
    rej("Promise failed");
  }
});

promise.then((res) => console.log(res)).catch((r) => console.log(r));
