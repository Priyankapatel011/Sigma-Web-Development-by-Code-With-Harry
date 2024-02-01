// Generate a dummy data in this format in a collection called employees in a db called company

// {
//     name: "Priyanka",
//     salary: 20000000,
//     language: "Python",
//     city: "New York",
//     isManager: true,
// }


// generate 10 such records when a button called generate data is clicked!!
// create an express app with mongoose to achieve itt.

// every time the btn is clciked, you should clear the collection



import express from "express";
// import fs from "fs";
import { Employee } from "./models/Employee.js";
import mongoose from "mongoose"

mongoose.connect("mongodb://localhost:27017/company")

// let fsn = fs.readFile("index.html");

const app = express()
const port = 3000

app.set('view engine', 'ejs');

app.get('/', (req,res) => {
    res.render('index', {foo: 'FOO'})
})


const getRandom = (arr) => {
    let random = Math.floor(Math.random() * arr.length);
    return arr[random];
}

app.get('/generate', async(req,res) => {

    // Clear the collection employee
    await Employee.deleteMany({});

    // gen random data

    let randomNames = ["Priyanka", "Rohan", "Sohan", "Mohan"];
    let randomLang = ["JavaScript", "C++", "Java", "Python"];
    let randomCities = ["Katni", "Jabalpur","Hyderabad", "Pune"];

    for (let index = 0; index < 10; index++) {
        let e = await Employee.create({
            name: getRandom(randomNames),
            salary: Math.floor(Math.random() * 100000000),
            language: getRandom(randomLang),
            city: getRandom(randomCities),
            isManager: Math.random() > 0.5 ? true : false
        })

        // await e.save();
        console.log(e);
        
    }

    res.render('index', {foo: 'FOO'});
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

