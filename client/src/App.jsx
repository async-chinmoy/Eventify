import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Home from './pages/Home'

import { ProtectedRoutes } from './services/ProtectedRoutes'


const App = () => {
  return (
    
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        <Route path="/" element={<ProtectedRoutes><Home /></ProtectedRoutes>} />
        <Route path="/home" element={<ProtectedRoutes><Home /></ProtectedRoutes>} />

        

      </Routes>
  
  )
}

export default App