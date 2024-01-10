let prom1 = new Promise((resolve, reject) => {
    let a = Math.random();
    if(a < 0.5){
        reject("Not valid");
    }
    setTimeout(() => {
        console.log("Yes I am done");
        resolve("coder");
    }, 2000);
})

prom1.then((a) => {
    console.log(a);
})