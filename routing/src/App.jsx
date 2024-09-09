import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Route, Routes, useNavigate} from 'react-router-dom'
import Dashboard from '../components/Dashboard'
import Landing from '../components/Landing'
function App() {

  // *** you can only declare useNavigate statement inside BrowserRouter, so here it is WRONG ***
  const navigate = useNavigate(); 

  return (
    <BrowserRouter>
        <div>
          <button onClick={()=>navigate('/')}>Go to Landing </button>
          <button onClick={()=>navigate('/dashboard')}>Go to Dashboard </button>
        </div>
        <Routes>
            <Route path="/dashboard" element={<Dashboard/>}></Route>
            <Route path="/" element={<Landing/>}></Route>
        </Routes>
    </BrowserRouter>
  )
}

export default App
