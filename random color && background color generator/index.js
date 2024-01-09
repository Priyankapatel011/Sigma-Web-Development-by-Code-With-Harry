Bgcolors = [
    "pink",
    "orange",
    "black",
    "purple",
    "gray",
    "seagreen"
]

colors = [
    "white",
    "blue",
    "cyan",
    "yellow",
    "green"
]

let boxes = document.getElementsByClassName("box");
let randomBgColor = Math.floor(Math.random() * Bgcolors.size()); 
let randomColor = Math.floor(Math.random() * colors.size()); 

boxes.forEach(element => {
    element.style.backgroundColor = Bgcolors[randomBgColor];
    element.style.color = color[randomColor];
});
