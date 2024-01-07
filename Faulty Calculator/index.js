/* Create a faulty calculator using JavaScript

This faulty calculator does following:
1. It takes two numbers as input from the user
2. It perfoms wrong operations as follows:

+ ---> -
* ---> +
- ---> /
/ ---> **


It performs wrong operation 10% of the times

*/


// let a = +prompt("Enter first number: ");
// let b = Number(prompt("Enter second number"));

// let op = prompt("What operation you want to perform: Choose among these --> +, -, *, /, ** ");

// let sum, sub, multi, div, exp;

// // let c = Math.random();   // [0, 1)
// let c = Math.floor(Math.random() * 100) + 1; // [0, 99] --> [1, 100]

// if(c <= 10){
//     //falty op
//     if(op == '+'){
//         console.log(c);
//         console.log(`Sum = ${a - b}`);
//     }
//     else if(op == '-'){
//         console.log(c);
//         console.log(`Subtract = ${a / b}`);
//     }
//     else if(op == '*'){
//         console.log(c);
//         console.log(`Multiply = ${a + b}`);
//     }
//     else if(op == '/'){
//         console.log(c);
//         console.log(`Division = ${a ** b}`);
//     }
//     else if(op == '**'){
//         console.log(c);
//         console.log(`Exponential = ${a * b}`);
//     }
// }

// else{
//     //correct op
//     if(op == '+'){
//         console.log(c);
//         console.log(`Sum = ${a + b}`);
//     }
//     else if(op == '-'){
//         console.log(c);
//         console.log(`Subtract = ${a - b}`);
//     }
//     else if(op == '*'){
//         console.log(c);
//         console.log(`Multiply = ${a * b}`);
//     }
//     else if(op == '/'){
//         console.log(c);
//         console.log(`Division = ${a / b}`);
//     }
//     else if(op == '**'){
//         console.log(c);
//         console.log(`Exponential = ${a ** b}`);
//     }
// }


let random = Math.random();
let a = prompt("Enter 1st number");
let b = prompt("Enter 2nd number");
let c = prompt("Enter operation");

let obj = {
    "+" : "-",
    "*" : "+",
    "-" : "/",
    "/" : "**"
}

if(random > 0.1){
    //perform correct calc
    console.log(`The result = ${a} ${c} ${b}`);
    alert(`The result = ${eval(`${a} ${c} ${b}`)}`);
    console.log(typeof(a), typeof(b), typeof(c));
}

else{
    //faulty op.
    c = obj[c];
    console.log(`The result = ${a} ${c} ${b}`);
    alert(`The result = ${eval(`${a} ${c} ${b}`)}`);
    console.log(typeof(a), typeof(b), typeof(c));

}
