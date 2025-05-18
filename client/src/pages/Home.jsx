
import Navbar from '../components/Navbar'
import { IoSearch } from 'react-icons/io5'
import image from '../assets/image.svg'
import Card from '../components/Card'
import { use, useEffect } from 'react'
import useAuthStore from '../stores/authStore'

import Events from '../components/Events'
import { redirect } from 'react-router-dom'

const Home = () => {

  const user = useAuthStore((state) => state.user);

  useEffect(() => {
    redirect('/home')
  }, [user])

  return (
    <div className='min-h-screen '>
      <Navbar />

      <section className='flex relative flex-col  justify-center items-center mx-auto '>
        <div className='flex gap-4 items-center justify-center border rounded-full px-4 cursor-pointer  mt-5 '>
          <input type="text"
            className='outline-none px-4 py-2 rounded-full w-96'
            placeholder='Search nearby Events...' />
          <button>
            <IoSearch className='text-2xl ' />
          </button>
        </div>

        <div className='w-4/5 h-96 mt-2 rounded-3xl flex justify-between  items-center bg-purple-200'>
          <div className='w-1/2 flex flex-col justify-center items-start gap-4 p-10 '>

            <span className='text-4xl font-bold bg-purple-400 px-5 py-2 rounded-xl'>
              {user?.name ? `Welcome Back ${user.name}` : 'Welcome to Eventify'}
            </span>

            <p className='text-sm text-grey-600 font-semibold'>We’ve got fresh events, exclusive experiences, and everything in between waiting for you. Dive back in and make the most of what’s coming up....</p>
          </div>
          <img className='w-1/2' src={image} alt="image" />

        </div>

      </section>

      <span className='flex  justify-start items-center mx-16'>
        <h1 className='text-3xl font-bold text-center mt-10 pb-6'>Upcoming Events
          <div className='h-0.5 w-full bg-gray-800 mt-3 rounded-2xl '></div>
        </h1>

      </span>
      <div className='relative '>
        <Events />
      </div>






      <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]"><div className="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_800px_at_100%_200px,#d5c5ff,transparent)]"></div></div>
    </div>
  )
}

export default Home