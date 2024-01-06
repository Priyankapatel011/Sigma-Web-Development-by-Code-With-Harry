//let, var, const

// var a = 5;
// var b = 6;
// var c = "Pinku";

// console.log(a+b);
// console.log(typeof(a), typeof(b), typeof(c));

// //rules of naming a varible
// var _a = 1;  //right
// var a_ = 1;  //R
// var Pi = 3.14; //right
// var r$ = 33;   //R
// var $r = 33;   //R
// var 55B = 'r';  //wrong
// var B4 = 333; //right


//JS is case sensitive
// Pinku and pinku both are different

//////////////////////////////////

// var --> globally scoped variable
// let --> blocked scoped variable


// const Pi = 3.14;
// Pi = Pi + 1   // -->NOT Allowed

//global
// let a = 9
// { 
//     //local
//     let a = 6
//     console.log(a);
// }
// console.log(a);

// var a = 9;   //globally scope
// { 
//     var a = 6  //globally scope
//     console.log(a);
// }
// console.log(a);

// var a = 9;   //globally scope
// { 
//     var a = 7;
//     a = 6  
//     console.log(a);
// }
// console.log(a);



//Types of datatypes in JS
// 1)Premitive DT  --> string, number, boolean, null, undefined, symbol, BigInt
// 2) Object

//1)
// let x = "Priyanka Patel";
// let y = 21;
// let z = 2.44;
// const p = true;
// let q = undefined;
// let r = null;

// console.log(x, y, z, p, q, r);
// console.log(typeof(x), typeof(y), typeof(z), typeof(p), typeof(q), typeof(r));

//Interesting fact
// typeof(null) --> object

//2)
// let o = {
//     name: "Pinku",
//     "job role": "Software Developer",
//     "is_beautiful" : true,
// };

// console.log(o);
// o.salary = "100crores";
// console.log(o);
// o.salary = "500crores";
// console.log(o);


///////////////////////////////////////////////

