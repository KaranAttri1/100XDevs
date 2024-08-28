// basic express boilerplate code,
// with express.json() middleware

const express =  require('express');
const { createTodo, updateTodo } = require('./types');
const { todo } = require('./db');
const cors = require('cors')
const app = express();

// to parse a json body
app.use(express.json())
app.use(cors())
// body {
//     title: String
//     description: String
// }

app.get('/todos',async function(req,res){
    const todos = await todo.find({})
    console.log("all todos", todos) // if await is not used then this is a promise
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:5173')
    res.json({
        todos
    })
})

app.post('/todo',async function(req,res){
    const createPayload = req.body;
    const parsedPayload = createTodo.safeParse(createPayload)

    if(!parsedPayload.success){
        res.status(411).json({
            message:"Wrong inputs"
        })
        return;
    }
    // put in mongoDb if everything is fine

    await todo.create({
        title: createPayload.title,
        description:createPayload.description,
        completed: false
    })

    res.json({
        message: "Todo created"
    })
})

app.put('/completed',async function(req,res){
    const updatePayload = req.body;
    const parsedPayload = updateTodo.safeParse(updatePayload);
    if(!parsedPayload.success){
        res.status(414).json({
            message:"Wrong Input"
        })
        return;
    }
    // mongodb

    await todo.update({
        _id:updatePayload.id,
        completed: true
    })

    res.json({
        msg: "Todo marked as complete"
    })

})


app.listen(3000);