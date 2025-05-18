import React, { use } from 'react'
import { Routes, Route } from 'react-router-dom'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Home from './pages/Home'

import { ProtectedRoutes } from './services/ProtectedRoutes'
import useAuthStore from './stores/authStore'
import { useEffect, useState } from 'react'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify'

const App = () => {
  const { checkAuth } = useAuthStore();
  const [checking, setChecking] = useState(true);

  useEffect(() => {
    const verify = async () => {
      await checkAuth();  // wait until it's done
      setChecking(false);
    };
    verify();
  }, [checkAuth]);


  if (checking) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-gray-900"></div>
      </div>
    )
  }
  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        <Route path="/" element={<ProtectedRoutes><Home /></ProtectedRoutes>} />
        <Route path="/home" element={<ProtectedRoutes><Home /></ProtectedRoutes>} />

      </Routes>
      <ToastContainer />
    </>

  )
}

export default App