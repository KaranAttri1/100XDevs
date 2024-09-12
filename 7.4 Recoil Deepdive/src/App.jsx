import { useState } from 'react'
import {useRecoilState,useRecoilValue,RecoilRoot} from 'recoil'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { jobsAtom, meSum, messagesAtom, networkAtom, notificationsAtom } from './store/atoms/navbar'

function App() {
  return(
    <RecoilRoot>
      <MainApp/>
    </RecoilRoot>
  )
}


function MainApp() {
  const network = useRecoilValue(networkAtom);
  const jobs = useRecoilValue(jobsAtom);
  const [messaging,setMessaging] = useRecoilState(messagesAtom);
  const notifications = useRecoilValue(notificationsAtom);
  const meSelector = useRecoilValue(meSum)
  return (
    <>
      <button>Home</button>

      <button>My network ({network > 99 ? '99+' : network})</button>
      <button>Jobs ({jobs})</button>
      <button>Messaging ({messaging})</button>
      <button>Notifications ({notifications})</button>

      <button onClick={()=>{
        setMessaging(messaging + 1)
      }}>Me ({meSelector})</button>
    </>
  )
}

export default App
