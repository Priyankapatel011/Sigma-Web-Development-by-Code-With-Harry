//map --> to make new array

// let array = [11, 33, 34, 55, 6];

// let newArr = [];
// for (let index = 0; index < array.length; index++) {
//     const element = array[index];
//     console.log(element ** 2);
// }

// let newArr = array.map((e) => {
//     console.log(e ** 2);
// });



// let newArr = array.map((e, index, array) => {
//     console.log(e ** 2);
//     console.log(e, index, array);
// });


//filter

let array = [11, 36, 4, 5, 61];
// const greaterThanSeven = (e) => {
//     if(e > 7){
//         return true;
//     }
//     return false;
// }

// console.log(array.filter(greaterThanSeven));


//more short
// console.log(array.filter((e) => {
//     if(e > 7){
//         return true;
//     }
//     return false;
// }));


//reduce
// let a = [1,2,3,4,5,6];
// function redu(a, b) {
//     return a * b;
// }
// console.log(a.reduce(redu));

// let a = [1,2,3,4,5,6];
// const redu = (a, b) => {
//     return a * b;
// }
// console.log(a.reduce(redu));

//array.from  --> kese bhi obj ka array bn jaega
console.log(Array.from("Priyanka"));