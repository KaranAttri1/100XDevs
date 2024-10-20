import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useEffect } from 'react'
import axios from 'axios'

//Custom Hook
function useTodos(){ 
  const[todos,setTodos] = useState([])
  const[loading,setLoading] = useState(true)

  useEffect(()=>{
   axios.get("http://localhost:8080/todos").
   then(res=>{
    // console.log(res)
    setTodos(res.data.todos)
    setLoading(false)
    })
  },[])

  return {todos,loading};
}


function App() {
  const {todos,loading} = useTodos()
  
  if(loading) return <div>Loading..</div>
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
