// basic express boilerplate code,
// with express.json() middleware

const express =  require('express');

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
    
})

app.put('/completed',function(req,res){
    
})