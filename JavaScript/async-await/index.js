// settle means resolve or reject
// resolve --> promise has settled successfully
// reject --> promise has rejected successfully


// function getData() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(455);
//         }, 2000);
//     })
// }

// console.log("Loading modules");

// console.log("Do something else");

// console.log("Load data");

// let data = getData();

// data.then((v) => {
//     console.log(v);
    // console.log(data);
    // console.log("process data");
// }).catch((err) => {
//     console.log(err);
// })

//other way -- better

// async function getData() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(455);
//         }, 2000);
//     })
// }

// async function main(){
//     console.log("Loading modules");
    
//     console.log("Do something else");
    
//     console.log("Load data");
    
//     let data = await getData();
    
//     console.log(data);
//     console.log("process data");
// }

// main();

//GET(BY DEFAULT)
// async function getData() {
//     let x = await fetch('https://jsonplaceholder.typicode.com/todos/1')
//     console.log(x);
//     // let data = await x.json();
//     let data = await x.text();
//     console.log(data);
//     return(455);
// }

// async function main(){
//     console.log("Loading modules");
    
//     console.log("Do something else");
    
//     console.log("Load data");
    
//     let data = await getData();
    
//     console.log(data);
//     console.log("process data");
// }

// main();


//POST
async function getData() {
    let x = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({
            title: 'foo',
            body: 'bar',
            userId: 1,
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })

    let data = await x.json();
    console.log(data);
    return(data);
}

async function main(){
    console.log("Loading modules");
    
    console.log("Do something else");
    
    console.log("Load data");
    
    let data = await getData();
    
    console.log(data);
    console.log("process data");
}

main();