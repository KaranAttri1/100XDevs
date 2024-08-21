import React, { useState } from 'react'



function App() {
  return (
    <>
      <CardWrapper innerComponent={<TextComponent/>}> 
        {//Anything inside component are passed as children prop
        }
        <Hello/> 
      </CardWrapper>
    </>
  )
}

function CardWrapper ({innerComponent,children}) {
  return (
    <>
      <div style={{border : '2px solid black'}}>
      {innerComponent}
      </div>
      <div style={{border : '2px solid red'}}>
        {children}
      </div>
    </>
  )
}

function TextComponent () {
  return (
    <div>Text</div>
  )
}

function Hello () {
  return (
    <div>Hello</div>
  )
}
export default App;
