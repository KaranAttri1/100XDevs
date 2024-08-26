import React, { useState, useEffect, useMemo, memo, useRef } from 'react'



function App() {

  const divRef = useRef();

  setTimeout(()=>{
    // this will change the name in divRef from "Karan" to "Attri"
    divRef.current.innerHTML = "Attri"
  },5000)

  const name = "Karan"

  return (
    <p>
        My name is 
        <div ref={divRef}>{name}</div>
    </p>
  )
}


export default App;
