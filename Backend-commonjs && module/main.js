// const http = require('node:http');      // require --> to import http module
// const fs = require('fs');     // import using require --> called commonJS ("type" : "commonjs");

// const hostname = '127.0.0.1';
// const port = 3000;
// const server = http.createServer((req, res) => {
//     res.statusCode = 200;
//     // res.setHeader('Content-Type', 'text/plain');
//     res.setHeader('Content-Type', 'text/html');
//     res.end('<h1> Hello World with Smile 😃</h1>');
// });

// server.listen(port, hostname, () => {
//     console.log(`Server running at http://${hostname}:${port}/`);
// });


// "type" : "module";
/////////////////////////////////////
// import http from "http"     // ES6 module

// const hostname = '127.0.0.1';
// const port = 3000;
// const server = http.createServer((req, res) => {
//     res.statusCode = 200;
//     // res.setHeader('Content-Type', 'text/plain');
//     res.setHeader('Content-Type', 'text/html');
//     res.end('<h1> Hello World with a big Smile</h1>');
// });

// server.listen(port, hostname, () => {
//     console.log(`Server running at http://${hostname}:${port}/`);
// });


//named import
// import {a, b, c, d, e, f} from "./mymodule.js";
// console.log(a, b, f);


// default import
// import obj from "./mymodule.js";
// console.log(obj);
//or

// import pinku from "./mymodule.js";     // no curly brackets
// console.log(pinku);


// "type" : "commonjs"
const a = require("./mymodule2.js");
// console.log(a);
console.log(a, __dirname, __filename);


(function(exports, require, module, __filename, __dirname){
    // Module code
});