import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useEffect } from 'react'
import axios from 'axios'
import {useIsOnline} from './hooks/useIsOnline'
//Custom Hook


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
