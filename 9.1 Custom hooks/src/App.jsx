import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useEffect } from 'react'
import axios from 'axios'
import {useIsOnline} from './hooks/useIsOnline'
import { useMousePointer } from './hooks/useMousePointer'
import { useInterval } from './hooks/useInterval'
import { useDebounce } from './hooks/useDebounce'
//Custom Hook


function App() {
  const[input,setInput] = useState("");

  const debouncedValue = useDebounce(input,200)


  // API call whenever debounced value changes
  useEffect(()=>{
    axios.get("http://localhost:8080/todos").then((res)=> console.log(res.data))
  },[debouncedValue])

  return(<>
      Debounced Value is {debouncedValue}
      <input
      onChange={(e)=>setInput(e.target.value)}
      value={input}
      ></input>
  </>)
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

// function Track ({todo}) {
//   return(
//     <div>
//       {todo.title}
//       <br/>
//       {todo.describrtion}
//     </div>
//   )
// }

export default App
