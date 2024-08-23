import React, { useState,useEffect } from 'react'



function App() {

  const[id,setId] = useState(1)

  // const[todos, setTodos] = useState([])
  // useEffect(()=> {
  //  fetch("https://sum-server.100xdevs.com/todos").then(
  //   async function(res) {
  //     let json = await res.json();
  //     setTodos(json.todos);
  //   })
  // },[])
  function changeId(id) {
    setId(id);
  }
  return (
    <div>
        <button onClick={function () {setId(1)}}>1</button>
        <button onClick={function () {setId(2)}}>2</button>
        <button onClick={function () {setId(3)}}>3</button>
        <button onClick={function () {setId(4)}}>4</button>
        <Todo id={id}/>
    </div>
  )
}

function Todo ({id}) {
  const[ todo, setTodos ] = useState({})
  useEffect(()=>{
    fetch(`https://sum-server.100xdevs.com/todo?id=${id}`).then(
      async function(response) {
        const json = await response.json();
        setTodos(json.todo)
        // setTodos({...todos,json.todo})
      }
    )
  },[id])
  return (
    <div>
      <h1>{todo.title}</h1>
      <h5>{todo.desciption}</h5>
    </div>
  )
}

export default App;
