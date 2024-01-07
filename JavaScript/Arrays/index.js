// let arr =[1,2,4,5,7]; // arrays are mutable
// console.log(arr, typeof(arr));

// console.log(arr.length);

// console.log(arr[0]);
// console.log(arr[1]);
// console.log(arr[2]);
// console.log(arr[3]);
// console.log(arr[4]);

// arr[0] = 999;
// console.log(arr);


// //Array methods

// console.log(arr.toString());

// console.log(arr.join(" # "));


let brr = [1,2,3,4,5,6];
// console.log(brr);
// let b = brr.pop();
// console.log(b);
// console.log(brr);


// brr.push(1000);        //return curr length
// console.log(brr);

// brr.push("Pinku");
// console.log(brr);


// let q = brr.shift();    // remove ele store and return that removed element
// console.log(q, brr);

// let r = brr.unshift(121);   //current len store and return len
// console.log(r , brr);

// let x = delete brr[6];  //return true / false;
// let w = delete brr[16];
// let y = delete brr[5];
// let z = delete brr[4];

// console.log(x, w, y);
// console.log(brr);

// console.log(brr.length);
// console.log(brr[4]);


// let a1 = [9,8,7];
// let b1 = [6,4,77];
// let c1 = [90, 70, 60];
// let r = a1.concat(b1, c1);
// let q = b1.concat(c1, a1);

// console.log(r);
// console.log(q);

// console.log(c1.sort());
// console.log(c1);

// let numbers = [10,20,30,40,50];
// let c = numbers.splice(1, 3);
// console.log(c);
// console.log(numbers);

// let num = [1,2,3,4,5,6];
// num.splice(1,3, 22, 33, 44); //add
// num.splice(1,3, 10);    //add

// console.log(num);



// let numbers = [10,20,30,40,50];
// console.log(numbers.slice(1));

// console.log(numbers.slice(1,4));


// let n = [10,20,30,40,50];
// console.log(n.reverse());
// console.log(n);


let a = [1, 93, 5, 6, 88];

// a.forEach((value, index, array) => {
//     console.log(value, index, array);
// });

////////////////////////
// let object = {
//     a : 1,
//     b : 2,
//     c : 3
// };

// for (const key in object) {
//     if (Object.hasOwnProperty.call(object, key)) {
//         const element = object[key];
//         console.log(key, element);
//     }
// }


for (const iterator of a) {
    console.log(iterator);
}