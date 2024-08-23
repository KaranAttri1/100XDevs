import React, { useState, useEffect, useMemo } from 'react'



function App() {

  const[count,setCount] = useState(1)
  const[inputValue, setInputValue] = useState(1)
  const[sigma, setSigma] = useState(1)

// useMemo => computing total on the fly, so no state variabloe needed, so no extra re-render after inputValue changes
  let total = useMemo(()=>{
    return (parseInt(inputValue) * ( parseInt(inputValue) + 1) ) / 2;
  },[inputValue])

// useEffect => setting the state variable, so one extra re-render after inputValue changes

//   useEffect(()=> {
//     setCount((parseInt(inputValue) * ( parseInt(inputValue) + 1) ) / 2);
//   },[inputValue]);

  return (
    <div>
      <input onChange={(e)=> setInputValue(e.target.value || 0)}></input>
      <br></br>
      <div>{total}</div>
      <button onClick={()=>setCount(count+1)}>Counter: {count}</button>
    </div>
  )
}


export default App;
