import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useEffect } from 'react'
import axios from 'axios'

function App() {
  const[todos,setTodos] = useState([])
  useEffect(()=>{
   axios.get("http://localhost:8080/todos").
   then(res=>{
    console.log(res)
    setTodos(res.data.todos)
    })
  },[])
  return (
    <>
    {todos.length}
    {todos.map((todo)=>{return <Track todo={todo} />}) }
    </>
    
  )
}

// function MyComponent() {
//   useEffect(()=>{
//     console.log("Mounted")
   
//     return ()=>{
//       console.log("Unmounted")
//     }
//   },[])
//   return(<div>Inside my component</div>)
// }

function Track ({todo}) {
  return(
    <div>
      {todo.title}
      <br/>
      {todo.describrtion}
    </div>
  )
}

export default App
