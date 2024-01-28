// const http = require('node:http');
// const hostname = '127.0.0.1';
// const port = 3000;
// const server = http.createServer((req, res) => {
//     res.statusCode = 200;
//     res.setHeader('Content-Type', 'text/plain');
//     res.end('Hello Worldyyyyyyyyyyyyy!!\n');
// });

// server.listen(port, hostname, () => {
//     console.log(`Server running at http://${hostname}:${port}/`);
// });





const { log } = require('console');
const express = require('express')    //commonjs

const blog = require('./routes/blog')
const shop = require('./routes/shop')

const app = express()
const port = 3000

app.use(express.static("public"));
app.use('/blog', blog);           // if there is any "/blog" endpoint then it will be handled by blog.js  

app.use('/shop', shop);

//GET
// app.get('/', (req, res) => {
//     console.log("It's a get request")
//     res.send('Hello Wordle2223');
// })

// //POST
// app.post('/', (req, res) => {
//     console.log('hey its a post request');
//     res.send('Hello Wordle post');
// })

// //PUT
// app.put('/', (req, res) => {
//     console.log('hey its a put request');
//     res.send('Hello Wordle put!!!!');
// })

// //DELETE
// app.delete('/', (req, res) => {
//     console.log('hey its a delete request');
//     res.send('Hello Wordle delete!!!!');
// })



// Chaining of requests


app.get('/', (req, res) => {            // 127.0.0.1:3000
    console.log("It's a get request")
    res.send('Hello Wordle2223####');
}).post('/', (req, res) => {
    console.log('hey its a post request');
    res.send('Hello Wordle post');
}).put('/', (req, res) => {
    console.log('hey its a put request');
    res.send('Hello Wordle put!!!!');
}).delete('/', (req, res) => {
    console.log('hey its a delete request');
    res.send('Hello Wordle delete!!!!');
})


// render templates --> index.html
app.get('/index', (req, res) => {
    console.log('It is an Index');
    // res.sendFile('templates/index.html');   // error
    res.sendFile('templates/index.html', {root : __dirname});
})



// render json (API)
app.get('/api', (req, res) => {
    res.json( { a: 1, b: 2, c: 3, d: 4, name: ["harry", "berry"] });
})


app.listen(port, () => {
    console.log(`App listening on port ${port}`)  
})


