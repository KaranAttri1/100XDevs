import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useContext } from 'react'
import { createContext } from 'react'

const countData =  createContext();

function App() {
  const [count, setCount] = useState(0)
  return (
    <>
      <countData.Provider value={{count,setCount}}>
        <Count></Count>
      </countData.Provider>
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
  const {count} = useContext(countData)

  return (
    <div>
      Count:{count}
    </div>
  )
}
function Buttons(){
    const {setCount} = useContext(countData)
    const {count} = useContext(countData)

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
