let promise = new Promise((res, rej) => {
  let a = 1;

  if (a == 1) {
    res("Promise resolved");
  } else {
    rej("Promise failed");
  }
});
