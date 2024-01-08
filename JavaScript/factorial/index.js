//factorial

// let n = 5;

// function fact(num) {
    // let arr = [];
    // for(let i = 1; i <= num; i++){
    //     arr.push(i);
    // }
    // console.log(arr)

    // let a = Array.from(Array(num).keys());  // arr = [0, 1, 2, 3, 4];

    // let arr = Array.from(Array(num + 1).keys());  // array from 0 to 5
    // let brr = arr.slice(1);  // brr from 1 to 5
    // console.log(brr);

    // let c = brr.reduce((a,b) => {
    //     return a * b;
    // });

    // console.log(c);
    // return c;

    // let c = brr.reduce((a,b) => a * b);

    // console.log(c);
    //return c;


// }

// let z = fact(5);
// console.log(z);


/////////////////
function fact(n) {
    if(n == 0){
        return 1;
    }
    if(n < 0){
        return -1;
    }

    let fact = 1;
    for(let i = 1; i <= n; i++){
        fact = fact * i;
    }

    return fact;
}

let s = fact(4);
console.log(s);


