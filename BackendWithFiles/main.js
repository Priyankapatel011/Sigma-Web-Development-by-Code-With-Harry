const { error } = require("console");
const fs = require("fs");                   // in commonjs
// const fs = require("fs/promises");

// console.log(fs);

// console.log("starting");
// fs.writeFileSync("pinku.txt", "Priyanka you will do it!!! Keep up your work👩‍🚀👍👩‍💻👩‍💻");
// // when the above line is executed i.e, when file is written --> then only the next line will execute;
// console.log("ending");

//therefore to make it asynchronous --> use writeFile
// console.log("starting");
// fs.writeFile("pinku2.txt", "Priyanka you will do it!!! Keep up your hardwork. You have to do it.", () => {
//     console.log("Done");
// });
// // when the above line is executed i.e, when file is written --> then only the next line will execute;
// console.log("ending");



// To read the file
console.log("starting");
fs.writeFile("pinku2.txt", "Priyanka you will do it!!! Keep up your hardwork. You have to do it.", () => {
    console.log("Done");
    fs.readFile("pinku2.txt", (error, data) => {
        // console.log(error, data); //buffer
        // there to read it
        console.log(error, data.toString());
    })
});

//append
// fs.appendFile("pinku.txt", "Pankhudhi", (e, d) => {
//     console.log(d);
// });
fs.appendFile("pinkuu.txt", "Pankhudhi", (e, d) => {
    console.log(d);
})



// when the above line is executed i.e, when file is written --> then only the next line will execute;
console.log("ending");