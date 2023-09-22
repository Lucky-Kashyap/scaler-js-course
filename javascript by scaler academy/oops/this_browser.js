// console.log(this);

// function sum(){
//     console.log(this);
// }

// sum();

// let obj ={
//     name:'Adam',
//     age:23,
//     myFn:function(){
//         console.log(this);
//     }
// }

// console.log(obj);
// obj.myFn();

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
