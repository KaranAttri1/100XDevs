import React, { useState, useEffect, useMemo, memo } from 'react'



function App() {

  const[count,setCount] = useState(1)
  var b = 1;

  function a () {
    return <p>Hey</p>
  }
  return (
    <div>
      <button onClick={()=>setCount(count+1)}>Counter: {count}</button>
      {/* b is not re-rendered */}
      <Demo b={b}></Demo>

      {/* a is re-rendered bcz here reference of function is passed and React doesnt know whether it is same or not 
      so it rerenders the component, so to avoid it we use useCallback */}
      <Demo a={a}></Demo>
    </div>
  )
}

const Demo = memo(function(a) {
  console.log("rerendered")
  return (
    <div>Demo</div>
  )
})
export default App;
