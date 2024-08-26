// basic express boilerplate code,
// with express.json() middleware

const express =  require('express');
const { createTodo, updateTodo } = require('./types');

const app = express();

// to parse a json body
app.use(express.json())

// body {
//     title: String
//     description: String
// }

app.get('/todos',function(req,res){

})

app.post('/todo',function(req,res){
    const createPayload = req.body;
    const parsedPayload = createTodo.safeParse(createPayload)

    if(!parsedPayload.success){
        res.status(411).json({
            message:"Wrong inputs"
        })
        return;
    }

    // put in mongoDb if everything is fine
})

app.put('/completed',function(req,res){
    const updatePayload = req.body;
    const parsedPayload = updateTodo.safeParse(updatePayload);
    if(!parsedPayload.success){
        res.status(414).json({
            message:"Wrong Input"
        })
        return;
    }
    // mongodb

})