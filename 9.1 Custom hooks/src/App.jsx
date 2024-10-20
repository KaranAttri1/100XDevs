import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useEffect } from 'react'
import axios from 'axios'

//Custom Hook
function useTodos(n){ 
  const[todos,setTodos] = useState([])
  const[loading,setLoading] = useState(true)

  useEffect(()=>{
  let interval = setInterval(()=>{
   axios.get("http://localhost:8080/todos").
   then(res=>{
    // console.log(res)
    setTodos(res.data.todos)
    setLoading(false)
    })
  },n*1000)

  // for the first call only since interval will start after n seconds
  axios.get("http://localhost:8080/todos").
   then(res=>{
    // console.log(res)
    setTodos(res.data.todos)
    setLoading(false)
    })

  // v.imp to clear last interval else two intervals will function

  return ()=>{
    clearInterval(interval)
  }
  },[n]) // n is a dependency

  return {todos,loading};
}

function useIsOnline() {
  const[isOnline,setIsOnline] = useState(window.navigator.onLine)
  useEffect(()=>{
    window.addEventListener('online',()=>setIsOnline(true))
    window.addEventListener('offline',()=>setIsOnline(false))
  },[])
  return isOnline
}
function App() {
  // const {todos,loading} = useTodos(5)
  
  const isOnline = useIsOnline();

  if(isOnline) return "Online"
  else return "Offline"
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
