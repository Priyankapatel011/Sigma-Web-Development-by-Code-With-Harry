import mongoose from "mongoose"
import { Todo } from "./models/Todo.js"
import express from "express"

let conn = await mongoose.connect("mongodb://localhost:27017/todo") // connection string


const app = express()
const port = 3000

app.get('/', (req,res) => {
    const todo = new Todo({title: 1, desc: "Description of this code", isDone : false, days: 3})

    // const todo = new Todo({desc: "Description of this code", isDone : false, days: 3})4
    // const todo = new Todo({title: 1, desc: "Description of this code", isDone : false, days: "Pinku"})
    todo.save();

    res.send("Hello World");
})

app.get('/about', async(req,res) => {
    let todo = await Todo.findOne({})
    console.log(todo)
    // res.json(todo);
    res.json({title: todo.title, desc: todo.desc});
})



app.listen(port, () => {
    console.log(`Express running on port ${port}`)
})

