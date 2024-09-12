import { useState } from 'react'
import {useRecoilState,useRecoilValue,RecoilRoot,useSetRecoilState} from 'recoil'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { meSum, navbarAtom } from './store/atoms/navbar'
import { useEffect } from 'react'
import axios from 'axios';

function App() {
  return(
    <RecoilRoot>
      <MainApp/>
    </RecoilRoot>
  )
}


function MainApp() {
  const [navbar,setNavbar] = useRecoilState(navbarAtom)
  useEffect(()=>{
    axios.get('http://localhost:8080/notifications').then(
      (res)=>{
        setNavbar(res.data);
      }
    )
  },[]);
  const meSelector = useRecoilValue(meSum)
  return (
    <>
      <button>Home</button>

      <button>My network ({navbar.network > 99 ? '99+' : navbar.network})</button>
      <button>Jobs ({navbar.jobs})</button>
      <button>Messaging ({navbar.messaging})</button>
      <button>Notifications ({navbar.notifications})</button>

      <button onClick={()=>{
        setNavbar({...navbar,messaging: navbar.messaging + 1})
      }}>Me ({meSelector})</button>
    </>
  )
}

export default App
