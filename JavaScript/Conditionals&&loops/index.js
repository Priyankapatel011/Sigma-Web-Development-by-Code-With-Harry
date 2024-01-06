// console.log("Helllo");

// let age = 18;
// if(age >= 18){
//     console.log("You can drive");
// }

// else{
//     console.log("You can't drive");
// }

/////////////////
// let age = 10
// if(age == 0){
//     console.log("Are you kidding");
// }
// else if(age >= 5 && age <= 10){
//     console.log("Okk");
// }
// else {
//     console.log("Nice");
// }


//ternary op
// let a = 10, b = 2;

// let c = (a>b) ? (a+b) : (b-a);

// console.log(c);

///////////////////////////////

//LOOPS --> for loop, while loop , do while loop , for-in loop , for-of loop, foreach
let a = 1;
console.log(a);
console.log(a+1);
console.log(a+2);


for(let i = 0; i < 10; i++){
    console.log(i+1);
}

let obj = {
    name: "Priyanka",
    role: "Programmer",
    company: "Microsoft",
}

// for (const key in obj) {
//     if (Object.hasOwnProperty.call(obj, key)) {
//         const element = obj[key];
//         console.log(key, element);
//     }
// }

// for (const key in obj) {
//     console.log(key);
// }

// for (const key in obj) {
//     console.log(obj[key]);
// }


// for (const iterator of "Pinku") {
//     console.log(iterator)
    
// }

// let i = 0;
// while (i < 6) {
//     console.log(i);
//     i++;
// }


//at least one time run

let i = 0;
do {
    console.log(i);
    i++;
    
} while (i < 5);
