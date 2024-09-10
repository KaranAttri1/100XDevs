import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { RecoilRoot, useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil'
import { countAtom } from './store/atoms/count'
function App() {

  return (
    <RecoilRoot>
        <Count></Count>
    </RecoilRoot>
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

  // useRecoilState, 
  // const [count,setCount] = useRecoilState(countAtom);

  // useSetRecoilState - NO RE-RENDER of this component 
  //                     since no value of state is used in useSetRecoilState
  const setCount = useSetRecoilState(countAtom);  

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
