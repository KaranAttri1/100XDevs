import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil'
import { countAtom } from './store/atoms/count'
function App() {

  return (
    <>
        <Count></Count>
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
  // useRecoilValue
  const count = useRecoilValue(countAtom);

  return (
    <div>
      Count:{count}
    </div>
  )
}
function Buttons(){

  // useRecoilState, useSetRecoilState
  const [count,setCount] = useRecoilState(countAtom);
  const countSetState = useSetRecoilState(countAtom);

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
