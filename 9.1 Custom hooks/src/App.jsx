import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useEffect } from 'react'
import axios from 'axios'
import {useIsOnline} from './hooks/useIsOnline'
import { useMousePointer } from './hooks/useMousePointer'
//Custom Hook


function App() {
  // const {todos,loading} = useTodos(5)
  
  const position = useMousePointer();

  return position.x + "," + position.y
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
