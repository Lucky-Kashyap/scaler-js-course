// immutable

let firstName = {
    name:'Adam',
    age:23,
    address:{
        locality:'80 feet road',
        colony:'gokul',
        city:'Delhi'
    }
}



firstName.address.city='Bijnor';



let secondName = {...firstName};
secondName.name = 'second name';

secondName.address.colony='Badarpur';

console.log('first name');
console.log(firstName);
console.log('second name');

console.log(secondName);


