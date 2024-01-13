//IIFE
async function sleep() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(45);
        }, 1000);
    })
}

let a = sleep();
let b = sleep();


//SPREAD




//DESTRUCTURING



//