import { useState } from 'react'
import {useRecoilState,useRecoilValue,RecoilRoot,useSetRecoilState} from 'recoil'
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
  // atomFamily => it returns an atom with the id
  // Also it creates atom for todo (id=2) only once, for subsequent todo (id = 2) it does not create new atom
    const todo = useRecoilValue(todosAtomFamily(id))

  // Selector Family
  
    return(
      <div>
        <h1>{todo.title}</h1>
        <p>{todo.description}</p>
      </div>
    )
}

export default App
