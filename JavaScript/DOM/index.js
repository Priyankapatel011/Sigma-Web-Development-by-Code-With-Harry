// document.title = "Hello Everyone!!!!";
// console.log(document.title);
// console.log(document.body);
// document.body.style.backgroundColor = "pink";    //inline css


// console.log("Hello");
// console.log(document.body);
// console.log(document.body.childNodes);
// console.log(document.body.childNodes[1].childNodes);
// console.log(document.body.childNodes);


// 1 --> text nodes
// 2 --> comments nodes
// 3 --> elements nodes

let cont = document.body.childNodes[1];

// console.log(cont.firstChild);
// console.log(cont.childNodes[1]);
// console.log(cont.childNodes[3]);
// console.log(cont.childNodes[5]);
// console.log(cont.lastChild);


// //directly get the element
// console.log(cont.firstElementChild);
// console.log(cont.lastElementChild);


// cont.lastElementChild.style.color = "white";
// cont.lastElementChild.style.backgroundColor = "black";


// console.log(cont.firstElementChild.parentElement);

//to get all the elements only
// console.log(document.body.firstElementChild);

// console.log(document.body.firstElementChild.childNodes);
// console.log(document.body.firstElementChild.children);  //only elements


// console.log(document.body.firstElementChild.children[0]);


// console.log(document.body.firstElementChild.children[3].nextElementSibling);
// console.log(document.body.firstElementChild.children[3].previousElementSibling);
// console.log(document.body.firstElementChild.children[3].parentElement);


///////////

// console.log(document.body.children);
// console.log(document.body.children[1]);
console.log(document.getElementsByTagName("div"));
let e = document.getElementsByTagName("div");
console.log(e[4].matches("#red.box"));

console.log(e[3].closest("#red.box"));   //--> element --> parent --> parent-->parent and so on.......

console.log(e[3].closest(".container"));



// console.log(document.body.children[1].rows);

// console.log(document.body.children[1].tHead);  

// let boxes = document.getElementsByClassName("box");
// boxes[2].style.backgroundColor = "red";
// console.log(a);

// let box = document.getElementById("red");
// box.style.backgroundColor = "red";

// document.querySelector(".box").style.backgroundColor = "pink";

// console.log(document.querySelectorAll(".box"));  //html collection
// document.querySelectorAll(".box").forEach(e => {
//     console.log(e);
//     e.style.backgroundColor = "pink";
// })

console.log(document.querySelector(".container").contains(e[6]));
console.log(document.querySelector(".container").contains(e[0]));
console.log(document.querySelector(".container").contains(e[7]));
console.log(document.querySelector(".container").contains(document.querySelector("body")));

console.log(document.querySelector("body").contains(document.querySelector(".container")));