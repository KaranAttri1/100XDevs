/*
    Mongoose Schema

  * Todo {
    title: string,
    description: string,
    completed: bolean
    }

*/

const mongoose = require('mongoose')

mongoose.connect("mongodb://localhost:27017/100xdevs")

const todoSchema = mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean
});

const todo = mongoose.model('Week 5.2 Todo',todoSchema);

module.exports = { 
    todo 
}