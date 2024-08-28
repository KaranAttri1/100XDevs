import { useState,useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { CreateTodo } from './components/CreateTodo'
import { ListTodos } from './components/ListTodos'
import axios from 'axios'

function App() {
  const [todos, setTodos] = useState({})
  useEffect(()=>{
    axios.get("http://localhost:3000/todos",{
      headers: {
        'Access-Control-Allow-Origin': '*',
        "Content-Type":"application/json"
      },
    }).then(
      function(res){
         console.log("res",res)
         setTodos(res.data.todos)
      }
    )
  },[])
  return (
    <>
      <div>Hi there</div>
      <CreateTodo/>
      <ListTodos todos={todos}/>
    </>
  )
}

export default App
