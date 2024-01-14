const addItem = async (item) => {
    await randomDelay();
    let div = document.createElement("div");
    div.innerText = item;
    document.body.append(div);
}
const randomDelay = () => {
    return new Promise((resolve, reject) => {
        // timeout = floor(Math.random() * 7) + 1;  // 1- 7
        timeout = Math.ceil(1 + 6 * Math.random()); // 1- 7
        console.log(timeout);
        setTimeout(() => {
            resolve();
        }, timeout * 1000);
    });
}

async function main() {
    let text = ["Initializing Hacking",
                "Reading your Files",
                "Password files Detected",
                "Sending all passwords and personal files to server",
                "Cleaning up"
    ]

    let updateDots = () => {
        let last = document.body.getElementsByTagName("div");
        last = last[last.length - 1];
        if (last.innerHTML.endsWith("...")) {
            last.innerHTML = last.innerHTML.slice(0, last.innerText.length - 3);
        } else {
            last.innerHTML = last.innerHTML + ".";
        }
    };

    let t = setInterval(updateDots, 200);

    
    for (const item of text) {    
        await addItem(item);
        clearInterval(t);
        t = setInterval(updateDots, 200);
    }

    await randomDelay();
    clearInterval(t);
}

main();

////////////////////////---------------------------------////////////////



// async function getData1() {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             let green = document.querySelector(".green");
//             let ele = document.createElement("h1");
//             ele.innerText = "Initializing Hacking🦹‍♂️🕵️";
//             green.append(ele);
            
//             let dots = [".", ".", "."];
//             let idx = 0;

//             function showDots() {
//                 if(idx < dots.length) {
//                     let dot = document.createElement("span");
//                     dot.innerText = dots[idx];
//                     ele.append(dot);
//                     idx++;
//                     // setTimeout((showDots), 400);
//                     setTimeout(showDots, 400);
//                 }
//                 else{
//                     //hide all three dots
//                     setTimeout(() => {
//                         ele.innerText = "Initializing Hacking🦹‍♂️🕵️";
//                         resolve();
//                         //repeat the same process
//                         // setTimeout(() => {
//                         //     getData1().then(resolve);
//                         // }, 1000);

//                     }, 200);
//                 }
//             }
//             showDots();
            
//         }, (Math.floor(Math.random() * 7) + 1) * 1000);
//     });


//     // return new Promise((resolve) => {
//     //     setTimeout(() => {
//     //         let green = document.querySelector(".green");
//     //         let ele = document.createElement("h1");
//     //         ele.innerText = "Initializing Hacking...";
//     //         green.append(ele);
//     //         resolve(); // Resolve the promise once the operation is done
//     //     }, (Math.floor(Math.random() * 7) + 1) * 1000);
//     // });
// }

// async function getData2() {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             let green = document.querySelector(".green");
//             let ele = document.createElement("h1");
//             ele.innerText = "Reading your Files";
//             green.append(ele);
//             let dots = [".", ".", "."];
//             let idx = 0;

//             function showDots() {
//                 if(idx < dots.length) {
//                     let dot = document.createElement("span");
//                     dot.innerText = dots[idx];
//                     ele.append(dot);
//                     idx++;
//                     // setTimeout((showDots), 400);
//                     setTimeout(showDots, 400);
//                 }
//                 else{
//                     //hide all three dots
//                     setTimeout(() => {
//                         ele.innerText = "Reading your Files";
//                         resolve();
//                         //repeat the same process
//                         // setTimeout(() => {
//                         //     getData1().then(resolve);
//                         // }, 1000);

//                     }, 200);
//                 }
//             }
//             showDots();

//         }, (Math.floor(Math.random() * 7) + 1) * 1000);
//     });
// }

// async function getData3() {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             let green = document.querySelector(".green");
//             let ele = document.createElement("h1");
//             ele.innerText = "Password files Detected";
//             green.append(ele);
//             let dots = [".", ".", "."];
//             let idx = 0;

//             function showDots() {
//                 if(idx < dots.length) {
//                     let dot = document.createElement("span");
//                     dot.innerText = dots[idx];
//                     ele.append(dot);
//                     idx++;
//                     // setTimeout((showDots), 400);
//                     setTimeout(showDots, 400);
//                 }
//                 else{
//                     //hide all three dots
//                     setTimeout(() => {
//                         ele.innerText = "Password files Detected";
//                         resolve();
//                         //repeat the same process
//                         // setTimeout(() => {
//                         //     getData1().then(resolve);
//                         // }, 1000);

//                     }, 200);
//                 }
//             }
//             showDots();

//         }, (Math.floor(Math.random() * 7) + 1) * 1000);
//     });
    
// }

// async function getData4() {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             let green = document.querySelector(".green");
//             let ele = document.createElement("h1");
//             ele.innerText = "Sending all passwords and personal files to server";
//             green.append(ele);
//             let dots = [".", ".", "."];
//             let idx = 0;

//             function showDots() {
//                 if(idx < dots.length) {
//                     let dot = document.createElement("span");
//                     dot.innerText = dots[idx];
//                     ele.append(dot);
//                     idx++;
//                     // setTimeout((showDots), 400);
//                     setTimeout(showDots, 400);
//                 }
//                 else{
//                     //hide all three dots
//                     setTimeout(() => {
//                         ele.innerText = "Sending all passwords and personal files to server";
//                         resolve();
//                         //repeat the same process
//                         // setTimeout(() => {
//                         //     getData1().then(resolve);
//                         // }, 1000);

//                     }, 200);
//                 }
//             }
//             showDots();

//         }, (Math.floor(Math.random() * 7) + 1) * 1000);
//     });
// }

// async function getData5() {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             let green = document.querySelector(".green");
//             let ele = document.createElement("h1");
//             ele.innerText = "Cleaning up";
//             green.append(ele);
//             let dots = [".", ".", "."];
//             let idx = 0;

//             function showDots() {
//                 if(idx < dots.length) {
//                     let dot = document.createElement("span");
//                     dot.innerText = dots[idx];
//                     ele.append(dot);
//                     idx++;
//                     // setTimeout((showDots), 400);
//                     setTimeout(showDots, 400);
//                 }
//                 else{
//                     //hide all three dots
//                     setTimeout(() => {
//                         ele.innerText = "Cleaning up";
//                         resolve();
//                         //repeat the same process
//                         // setTimeout(() => {
//                         //     getData1().then(resolve);
//                         // }, 1000);

//                     }, 200);
//                 }
//             }
//             showDots();

//         }, (Math.floor(Math.random() * 7) + 1) * 1000);
//     });
// }

// async function main(){
    // <h1>Initializing Hacking...</h1>
    // <h1>Reading your Files...</h2>
    // <h1>Password files Detected...</h1>
    // <h1>Sending all passwords and personal files to server...</h1>
    // <h1>Cleaning up...</h1>

//     let data1 = await getData1();
//     let data2 = await getData2();
//     let data3 = await getData3();
//     let data4 = await getData4();
//     let data5 = await getData5();
// }

// main();

