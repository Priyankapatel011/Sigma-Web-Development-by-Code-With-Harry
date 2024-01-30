const express = require('express');
const app = express();
const port = 3000;
const fs = require("fs");

// app.use(express.static("public"));     // after printing p.txt (req, res) cycle will be ended here only and will not preceed further.

// Middleware 1 --> logger for our application
app.use((req, res, next) => {
    // console.log('m1');

    console.log(req.headers);
    req.harry = "I am a good Programmer";
    
    fs.appendFileSync("logs.txt", `${Date.now()} is a ${req.method}\n`);
    // console.log(`${Date.now()} is a ${req.method}`);
    console.log(`${new Date(Date.now()).toLocaleString()} is a ${req.method}`);

    // next();    // if not write next() --> then the further requests will be hanging as there is not response browser gets

    // res.send('Hacked by  Middleware 1');    // once res.send() is done and response get then by doing next() for another res.send is not correct and give error. 
    next(); 
})

//Middleware 2
app.use((req, res, next) => {
    console.log('m2');
    next();
})


app.get('/', (req,res) => {
    res.send('Hello World')
})

app.get('/about', (req,res) => {
    res.send('Hello About')
})

app.get('/contact', (req,res) => {
    res.send('Hello Contact ' + req.harry);
})
app.listen(port, () => {
    console.log(`App listening on port ${port}`);
})