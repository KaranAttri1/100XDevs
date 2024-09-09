import React, { Suspense, useEffect } from 'react'
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom'

//*****  if export function, then use curly braces - import { Dashboard } from '../components/Dashboard'
//*****  if export DEFAULT fucntion, then no need to use curly braces - import Dashboard from '../components/Dashboard'

// LAZY LOADING + IMPORT 

const Landing = React.lazy(()=>import('../components/Landing')) 
const Dashboard = React.lazy(()=>import('../components/Dashboard'))

function App() {

  return (
    <BrowserRouter>
        <AppBar/>
        <Routes>
            {/* Suspense - fallback */}
            <Route path="/dashboard" element={<Suspense fallback={"Loading...."}><Dashboard/></Suspense>}></Route>
            <Route path="/" element={<Suspense fallback={"Loading...."}><Landing/></Suspense>}></Route>
        </Routes>
    </BrowserRouter>
  )
}

function AppBar() {
    // *** you can only declare useNavigate statement inside BrowserRouter, so here it is WRONG ***
    const navigate = useNavigate(); 
    return(
      <div>
        <button onClick={()=>navigate('/')}>Go to Landing </button>
        <button onClick={()=>navigate('/dashboard')}>Go to Dashboard </button>
      </div>
 )
}

export default App
