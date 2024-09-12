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
  //https://sum-server.100xdevs.com/notifications 

  // returns {  'network':6
  //            'jobs':3
  //            'messaging':7
  //            'notifications':9    
  //           }

  const [navbar,setNavbar] = useRecoilState(navbarAtom)

  // const setNetwork = useSetRecoilState(networkAtom);
  // const setJobs = useSetRecoilState(jobsAtom);
  // const setMessaging = useSetRecoilState(messagesAtom);
  // const setNotifications = useSetRecoilState(notificationsAtom);

  useEffect(()=>{
    // *** USING FETCH
    // fetch('http://localhost:8080/notifications').then(
    //   async(res)=>{
    //     var data = await res.json();
    //     setNavbar(data)
    //     // setNetwork(data.network);
    //     // setJobs(data.jobs);
    //     // setMessaging(data.messaging);
    //     // setNotifications(data.notifications);
    //   })


    // USING AXIOS
    axios.get('http://localhost:8080/notifications').then(
      (res)=>{
        setNavbar(res.data);
      }
    )
  },[])
  // const network = useRecoilValue(networkAtom);
  // const jobs = useRecoilValue(jobsAtom);
  // const [messaging,setMessaging] = useRecoilState(messagesAtom);
  // const notifications = useRecoilValue(notificationsAtom);
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
