// truthy falsy

// false
// 0
// -0
// "" '' ``
// null
// NaN
// undefined
// 0n


// truthy

// true

// Infinity
// -Infinity

// if(0){
//     console.log(true);
// }
// else{
//     console.log(false);
// }

// if(Infinity){
//     console.log(true);
// }
// else{
//     console.log(false);
// }


(function(){
    if((-100 && 100 && "0") || [] == true || 0){
        console.log(1);

        if([] || (0 && false)){
            console.log(2);
        }

        if(Infinity &&  NaN && "false"){
            console.log(3);
            if(""){
                console.log(4);
            }

        }
        else{
            console.log(5);
            if(({} || false === "") && !(null && undefined)){
                console.log(6);
            }
        }
    }
})

if(1n){
    console.log(true);
}



