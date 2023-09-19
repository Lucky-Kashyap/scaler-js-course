

// let sum = function(x,y){
//     console.log(x+y);
// }


// sum(2,3);

let sumCurried = function(x){
    return function(y){
        console.log(x+y);
    }
}

// sumCurried(2)(4);

// let sumTwo = sumCurried(10);

// sumTwo(90);

sumCurried(90)(18);


