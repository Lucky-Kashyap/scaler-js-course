let arr = [
  { name: "A", age: 24, gender: "M" },
  { name: "B", age: 41, gender: "M" },
  { name: "C", age: 34, gender: "F" },
  { name: "D", age: 27, gender: "M" },
  { name: "E", age: 23, gender: "F" },
  { name: "F", age: 33, gender: "F" },
  { name: "G", age: 54, gender: "M" },
  { name: "H", age: 24, gender: "F" },
  { name: "I", age: 48, gender: "M" },
  { name: "J", age: 44, gender: "M" },
];

// age of all males

// let res = arr.reduce((el,cur,arr,b)=>{
//     // console.log(el,cur,arr,b);
//     // console.log(el);
//     // console.log(cur);
//     if(cur.gender=="M"){
//         cur.age +=cur.age;
//     }
// });

// let res=arr.filter((el)=>{
//     return el.gender=="M";
// }).reduce(e=>e.age +=e.age);

// let males = arr.filter(fl=>fl.gender == "M");

// let ageOfMales = males.map(m=>m.age);

// let res = ageOfMales.reduce((el,cur)=> {
//     return el +=cur
// });

// method chaining

let res = arr
  .filter((fl) => fl.gender == "M")
  .map((m) => m.age)
  .reduce((el, cur) => (el += cur));

console.log(res);
// console.log(males);

// console.log(ageOfMales);
