import { useState } from 'react'
import {useRecoilStateLoadable,useRecoilValue,RecoilRoot,useSetRecoilState} from 'recoil'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { meSum, navbarAtom } from './store/atoms/navbar'
import { useEffect } from 'react'
import axios from 'axios';
import { todosAtomFamily } from './store/atoms/todos'

function App() {
  return(
    <RecoilRoot>
      <Todo id={1}/>
      <Todo id={2}/>
      <Todo id={2}/>
      <Todo id={2}/>
      <Todo id={2}/>
    </RecoilRoot>
  )
}function Todo({id}) {
    const [todo,setTodo] = useRecoilStateLoadable(todosAtomFamily(id))

    // todo above is no longer a set of todos, it is a set of objects
    // {
    //    contents:
    //    state:  => contains status of whether todo has been resolved or not
    //               its values are => loading, hasValue, hasError
    //  }
    if(todo.state == 'loading') {
      return <div>Loading...</div>
    } else if (todo.state == 'hasValue' ) {
    return(
      <div>
        <h1>{todo.contents.title}</h1>
        <p>{todo.contents.description}</p>
      </div>
    )} else if(todo.state == 'hasError') {
      return <div>Error</div>
    }
}

export default App
