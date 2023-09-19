// immutable

let firstName = {
    name:'Adam',
    age:23
}

let secondName = {...firstName};
secondName.name = 'second name';

console.log('first name');
console.log(firstName);
console.log('second name');

console.log(secondName);


