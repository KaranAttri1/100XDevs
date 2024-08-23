import React, { useState, useEffect, useMemo } from 'react'



function App() {

  const[count,setCount] = useState(1)
  const[inputValue, setInputValue] = useState(1)

// useMemo
  let total = useMemo(()=>{
    return (parseInt(inputValue) * ( parseInt(inputValue) + 1) ) / 2;
  },[inputValue])

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
