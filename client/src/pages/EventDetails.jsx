import useEventStore from '../stores/eventStore';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import enroll from '../assets/enroll.svg'
import { motion } from 'framer-motion'
import { registerEvent } from '../../../server/controllers/user.controller';

const EventDetails = () => {
  const { fetchEventById } = useEventStore();
  const { id } = useParams();

  const [event, setEvent] = useState(null)
  const [enrolEvent, setEnrolEvent] = useState(null)

  useEffect(() => {
    const fetchEvent = async () => {
      const res = await fetchEventById(id);
      setEvent(res);
    }
    fetchEvent();
  }, [id, fetchEventById]);






  if (!event) {
    return <div>Loading...</div>;
  }
  return (
    <section className='h-screen mx-10 mt-4'>
      <div className='flex justify-between min-w-120 h-120 items-center px-20 rounded-2xl bg-gradient-to-r from-[#e9d4ff]  via-fuchsia-100 to-[##e9d4ff] shadow-xl/15'>
        <div className='w-1/2 aspect-16/9 px-10 py-5'>
          <motion.img
            whileInView={{
              opacity: [0, 1],
              x: [-200, 0],
            }}
            transition={{
              duration: 1.02
            }}
            className='rounded-xl w-full h-full object-cover'
            src={event.image} alt="image" />
        </div>
        <motion.div

          whileInView={{
            opacity: [0, 1],
            x: [100, 0],
          }}
          transition={{
            duration: 1.02,
            staggerChildren: 1  
          }}
          

          className='flex flex-col gap-2 w-1/2 justify-center items-start h-full px-10 py-5'>
          <span className='text-3xl font-bold bg-white px-6 py-4 rounded-3xl' >
            {event.title}
          </span>
          <p className='bg-gradient-to-r from-[#e9d4ff]  via-[##c27aff] to-fuchsia-300 to- px-8 py-4 h-40 w-full font-semibold   rounded-tr-3xl rounded-bl-3xl'>{event.description}</p>
          <button 
         
          className='flex justify-center items-center rounded-md gap-6 bg-white px-8 py-3 font-semibold shadow-xl/50 cursor-pointer'>
            Enroll
            <img className='text-black' src={enroll} alt="enroll" />
          </button>
        </motion.div>
      </div>
    </section>
  )
}

export default EventDetails