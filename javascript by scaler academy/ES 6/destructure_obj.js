let obj = {
  name: "adam",
  age: 23,
  work: "developer",
  city: "delhi",
  pincode: 282006,
  address: {
    country: "England",
    city: "London",
  },
};

// let{n,a,w,c,p,e} = obj;

// // console.log(n,a,w,c,p,e);
// console.log(obj.n);

// let { name, age, work, city, pincode } = obj;

// let { name :n, age, work, city, pincode } = obj;

// let { name :n, age, work, city, pincode,address } = obj;

let {
  name: n,
  age,
  work,
  city,
  pincode,
  address: { country: c },
} = obj;

// console.log(name, age, work, city, pincode);
// console.log(n);
// console.log(address);

// for(key in address){
//     // console.log(key);
//     console.log(address[key]);
// }

// console.log(country);
console.log(c);
