/* Create a business name generator by combining list of adjectives and shop name and another word


Adjectives:
Crazy 
Amazing
Fire 

Shop Name:
Engine
Foods
Garments

Another Word:
Bros
Limited
Hub

*/

//without using arrays

let first, second, third;

//generate 1st word
let random = Math.random();

if(random < 0.33){
    first = "Crazy";
}
else if(random >= 0.33 && random <= 0.66){
    first = "Amazing";
}
else{
    first = "Fire";
}

//generate 2nd word
random = Math.random();

if(random < 0.33){
    second = "Engine";
}
else if(random >= 0.33 && random <= 0.66){
    second = "Foods";
}
else{
    second = "Garments";
}

//generate 3rd word
random = Math.random();

if(random < 0.33){
    third = "Bros";
}
else if(random >= 0.33 && random <= 0.66){
    third = "Limited";
}
else{
    third = "Hub";
}

console.log(`${first} ${second} ${third}`);







//......................................//.................................

// let adj = [
//     "Crazy",
//     "Amazing",
//     "Fire"
// ]

// let shopName = [
//     "Engine",
//     "Foods",
//     "Garments"    
// ]

// let anotherWord = [
//     "Bros",
//     "Limited",
//     "Hub"
// ]

// let ad = adj[Math.floor(Math.random() * adj.length)];
// let sh = shopName[Math.floor(Math.random() * shopName.length)];
// let an = anotherWord[Math.floor(Math.random() * anotherWord.length )];


// function generator(ad, sh, an) {
//     console.log(ad + sh + an);
// }

// generator(ad, sh, an);