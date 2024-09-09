import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Count count={count}></Count>
    </>
  )
}

function Count({count,setCount}) {
return (
  <div>
    Count:{count}
    {/* Example of PropDrilling here is passing setCount to Count, 
        Count doesnt require setCount but we passed it bcz its child Buttons needed it  */}
    <Buttons count={count} setCount={setCount}></Buttons>  
    </div>
)
}

function Buttons({count,setCount}){
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

export default App
