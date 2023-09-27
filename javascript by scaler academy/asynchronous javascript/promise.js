let promise = new Promise((res, rej) => {
  let a = 1;

  if (a == 1) {
    // res("Promise resolved");
    setTimeout(()=>{
        res('promise resolved after 1s ')
    },1000);
  } else {
    rej("Promise failed");
  }
});

promise.then((res) => console.log(res)).catch((r) => console.log(r));
