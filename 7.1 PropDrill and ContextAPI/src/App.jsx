import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useContext } from 'react'
import { createContext } from 'react'
import { CountContext } from './context'

function App() {
  const [count, setCount] = useState(0)
  return (
    <>
      <CountContext.Provider value={{count,setCount}}>
        <Count></Count>
      </CountContext.Provider>
    </>
  )
}

function Count() {
return (
  <div>
    <CountRenderer ></CountRenderer>
    <Buttons></Buttons>  
    </div>
)
}
function CountRenderer() {
  const {count} = useContext(CountContext)

  return (
    <div>
      Count:{count}
    </div>
  )
}
function Buttons(){
    const {setCount} = useContext(CountContext)
    const {count} = useContext(CountContext)

    return(
      <>
      <button onClick={()=>setCount(count + 1)}>
          Increase
      </button> 
      <button onClick={()=>setCount(count - 1)}>
          Decrease
      </button>
      </>
    )
}

export default App;
