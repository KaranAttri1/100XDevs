import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {useRecoilValue,useSetRecoilState,useRecoilState} from 'recoil'
import { filteredTodosSelector, filterInputAtom, todosAtom } from './store/atoms/todos'
function App() {
  const[title,setTitle] = useState("");
  const[description,setDescription] = useState("")

  const [todos,setTodos] = useRecoilState(todosAtom)
  const setFilterValue = useSetRecoilState(filterInputAtom)
  return (
    <>
      <input type="text" placeholder='Title' onChange={(e)=>setTitle(e.target.value)}/>
      <input type="text" placeholder='Description' onChange={(e)=>setDescription(e.target.value)}/>
      <button onClick={()=>setTodos([...todos,{title:title,description:description}])}>Submit</button>
      <br></br>
      <div> SEARCH: 
      <input type="text" placeholder='SEARCH' onChange={(e)=>setFilterValue(e.target.value)}/>
      </div>
      <Todos/>
    </>
  )
}

function Todos(){
  const filteredTodos = useRecoilValue(filteredTodosSelector);

  return (
    filteredTodos.map((todo)=>{
      return (
        <div>
          <b>{todo.title}</b>
          <p>{todo.description}</p>
        </div>
      )
    })
  )
}
export default App
