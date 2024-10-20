import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useEffect } from 'react'

function App() {
  const[flag,setFlag] = useState(true)
  useEffect(()=>{
    setInterval(()=>{
      setFlag(f=>!f)
    },3000)
  },[])
  return (
    <>
    {flag ? <MyComponent/> : <div>Bro</div> }
    </>
    
  )
}

function MyComponent() {
  useEffect(()=>{
    console.log("Mounted")
   
    return ()=>{
      console.log("Unmounted")
    }
  },[])
  return(<div>Inside my component</div>)
}

export default App
