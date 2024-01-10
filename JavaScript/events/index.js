// let btn = document.getElementById("btn");
// btn.addEventListener('click', () => {
//     // alert("I was clicked 😊😊")
//     document.querySelector(".box").innerHTML = "<b>I am happy</b>";
//     btn.removeEventListener('click', () => {
//         // alert("I was clicked 😊😊")
//         document.querySelector(".box").innerHTML = "<b>I am happy</b>", false;
//     });
// });



// let btn = document.getElementById("btn");

// // Define the function to be added as an event listener
// const handleClick = () => {
//     document.querySelector(".box").innerHTML = "<b>I am happy</b>";
// };

// // Add the first event listener
// btn.addEventListener('click', handleClick);

// // Add the second event listener to remove the first one
// btn.addEventListener('click', () => {
//     btn.removeEventListener('click', handleClick);
//     // alert("Content was removed 😊😊");
// });




// btn.addEventListener('click', () => {
//     // alert("I was clicked 😊😊")
//     document.querySelector(".box").innerHTML = "<b>I am happy</b>";
//     btn.removeEventListener('click', () => {
//         alert(" content was removed 😊😊");
//     });
// });


// btn.addEventListener('keydown', (e) => {
//     // alert("I was clicked 😊😊")
//     // console.log(e);
//     console.log(e.key);
//     document.querySelector(".box").innerHTML = "<b>I am happy</b>"
// });


// btn.addEventListener('focusout', (event) => {  //click in then click out
    // alert("I was clicked 😊😊")
    // console.log(e);
//     console.log(event);
//     document.querySelector(".box").innerHTML = "<b>I am happy</b>"
// });



// MOUSE EVENTS --> click, dblclick, mousedown, mouseup, mouseout, mousemove, mouseleave, mouseenter, mouseover 

//KEYBOARD EVENTS --> keydown, keyup

//form  submit event --> focus, focusin, focusout

// btn.addEventListener('contextmenu', () => {
//     alert("helloo I was clicked 😊😊")
    
// });


//EVENT BUBBLING

// document.querySelector(".child").addEventListener('click', (e) => {
//     e.stopPropagation();
//     alert("child was clicked 😊😊")
// })

// document.querySelector(".childContainer").addEventListener('click', (e) => {
//     e.stopPropagation();
//     alert("childcontainer was clicked 😊😊")
// })


// document.querySelector(".container").addEventListener('click', (e) => {
//     e.stopPropagation();
//     alert("container was clicked 😊😊")
// })


function getRandomColor() {
    let val1 = Math.ceil(0 + Math.random() * 255);
    let val2 = Math.ceil(0 + Math.random() * 255);
    let val3 = Math.ceil(0 + Math.random() * 255);
    return `rgb(${val1}, ${val2}, ${val3})`;
}

// let a = setInterval(() => {
//     document.querySelector(".childContainer").style.backgroundColor = getRandomColor();
// }, 1000);

// clearInterval(a);


// let a = setTimeout(() => {
//     document.querySelector(".childContainer").style.backgroundColor = getRandomColor();
// }, 3000);

// clearTimeout(a);

