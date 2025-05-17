import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import useAuthStore from '../stores/authStore'; // Adjust the path

const Signup = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });
  const { email, password, name } = formData;
  const { isAuth, signup } = useAuthStore();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await signup(formData)
    if (res) {
      navigate('/home');
    }
    setFormData({
      email: '',
      password: '',
      name: ''
    })
  };

  useEffect(() => {
    if (isAuth) {
      navigate('/home');
    }
  }, [isAuth, navigate]);

  return (
    <div className='flex items-center justify-center h-screen w-100vw bg-gray-800 '>
      <div className="w-full max-w-sm  mx-auto mt-16 bg-gray-900 text-gray-100 p-6 rounded-lg shadow-lg">
        <p className="text-center text-2xl font-bold">SignUp</p>
        <form onSubmit={handleSubmit} className="mt-6 space-y-4">


          <div>
            <label htmlFor="Name" className="block text-sm text-gray-400">Name</label>
            <input
              type="text"
              className="w-full mt-1 px-4 py-2 bg-gray-800 border border-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-violet-500"
              value={name}
              name='name'
              onChange={handleChange}
              placeholder="Enter your username  "
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm text-gray-400">Email</label>
            <input
              type="text"
              className="w-full mt-1 px-4 py-2 bg-gray-800 border border-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-violet-500"
              value={email}
              name='email'
              onChange={handleChange}
              placeholder="Enter your email address"
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm text-gray-400">Password</label>
            <input
              type="password"
              className="w-full mt-1 px-4 py-2 bg-gray-800 border border-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-violet-500"
              value={password}
              name='password'
              onChange={handleChange}
              placeholder="Enter your password"
            />
            <div className="text-right text-xs text-gray-400 mt-1">
              <Link to={'/forgot-password'} className="hover:underline">Forgot Password?</Link>
            </div>
          </div>

          <button
            type="submit"
            className="w-full py-2 mt-2 bg-violet-500 hover:bg-violet-600 text-white font-semibold rounded transition"
          >
            Log In
          </button>
        </form>

        <div className="mt-6 text-center text-sm text-gray-400">
          Already have an account? <Link to={'/login'} className="text-violet-400 hover:underline">Login</Link>
        </div>
      </div>
    </div>
  );
};

export default Signup;
