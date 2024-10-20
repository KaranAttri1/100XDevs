import { useEffect } from "react"
import { useState } from "react"

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