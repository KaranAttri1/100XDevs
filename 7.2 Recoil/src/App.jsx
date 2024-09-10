import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { RecoilRoot, useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil'
import { countAtom, evenSelector } from './store/atoms/count'
import { useMemo } from 'react'
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
  return(
    <div>
     <b>
      Count:{count}
    </b>
    <EvenCountRenderer/>
    </div>
 
  )
}
function EvenCountRenderer() {

  // const isEven = (count % 2 == 0);              1st way

  // const isEven = useMemo(()=> {                 2nd Way - useMemo is a way in case of derived state 
  //   return (count % 2 == 0)                     i.e. value derived afetr state value is 
  // }, [count]);                                  passed thru a function

  const isEven = useRecoilValue(evenSelector);  // 3rd way
  return (<div>
            {isEven ? "It is even" : null}
          </div>)
}
function Buttons(){

  // useRecoilState, 
  // const [count,setCount] = useRecoilState(countAtom);

  // useSetRecoilState - NO RE-RENDER of this component 
  //                     since no value of state is used in useSetRecoilState
  const setCount = useSetRecoilState(countAtom);  
  
  // 3 ways to setState

  // setCount(count + 1)           ==> here we need value of state in order to setState

  // setCount(currentVal => currentVal + 1)  ==> with this we dont need value of state

  // setCount(function(currentVal) {
  //   return currentVal + 1;
  // })
    return(
      <>
      <button onClick={()=>setCount(count => count + 1)}>
          Increase
      </button> 
      <button onClick={()=>setCount(count => count - 1)}>
          Decrease
      </button>
      </>
    )
}

export default App;
