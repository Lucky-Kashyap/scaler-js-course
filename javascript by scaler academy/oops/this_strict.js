"use strict";

// let a = 10;
// a = 20;

// console.log(a);

// this

// console.log(this);

// function sum(){
// console.log(this);  // global object
// }

// sum();

// let obj = {
//   name: this,
// };

// console.log(obj);
// console.log(obj.name);

// let moObj = {
//     name:'Adam',
//     age:23,
//     myFn:function(){
//         console.log(this);
//     }
// }

// moObj.myFn();

// let moObj = {
//     name:'Adam',
//     age:23,
//     myFn:()=>{
//         console.log(this);
//     }
// }

let moObj = {
  name: "Adam",
  age: 23,
  myFn: function () {
    function myFn2() {
      console.log(this);
      // console.log(this.name);
    }
    // console.log(this);

    // return myFn2;
    myFn2();
  },
};

moObj.myFn();
