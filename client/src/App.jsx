import { Routes, Route } from 'react-router-dom'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Home from './pages/Home'
import EventDetails from './pages/EventDetails'
import Events from './pages/Events'
import About from './pages/About'
import Navbar from './components/Navbar'
import CreateEvent from './pages/CreateEvent'

import { ProtectedRoutes } from './services/ProtectedRoutes'
import useAuthStore from './stores/authStore'
import { useEffect, useState } from 'react'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify'

const App = () => {
  const { checkAuth, isAuth } = useAuthStore();
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
        <div className="animate-spin rounded-full h-22 w-22 border-b-2 border-gray-900"></div>
      </div>
    )
  }
  return (
    <>
      {isAuth && <Navbar />}
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        <Route path="/" element={<ProtectedRoutes><Home /></ProtectedRoutes>} />
        <Route path="/home" element={<ProtectedRoutes><Home /></ProtectedRoutes>} />
        <Route path="/event/:id" element={<ProtectedRoutes><EventDetails /></ProtectedRoutes>} />
        <Route path="/events" element={<ProtectedRoutes><Events /></ProtectedRoutes>} />
        <Route path="/about" element={<ProtectedRoutes><About /></ProtectedRoutes>} />
        <Route path="/createEvent" element={<ProtectedRoutes><CreateEvent /></ProtectedRoutes>} />


      </Routes>
  
      <div className="fixed inset-0 -z-10 w-full bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]"
        style={{ minHeight: '100%' }}
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_800px_at_100%_200px,#d5c5ff,transparent)]"></div>
      </div>

      <ToastContainer />
    </>

  )
}

export default App