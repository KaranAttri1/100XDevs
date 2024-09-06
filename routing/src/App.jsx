import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Route, Routes} from 'react-router-dom'
import Dashboard from '../components/Dashboard'
import Landing from '../components/Landing'
function App() {

  return (
    <BrowserRouter>
        <div style={{background:'black'}}>
          This is topbar
        </div>
        <Routes>
            <Route path="/dashboard" element={<Dashboard/>}></Route>
            <Route path="/" element={<Landing/>}></Route>
        </Routes>
    </BrowserRouter>
  )
}

export default App
