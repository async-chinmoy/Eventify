import useEventStore from '../stores/eventStore';
import { useEffect, useState, useRef } from 'react';
import { useParams } from 'react-router-dom';
import enroll from '../assets/enroll.svg'
import { motion } from 'framer-motion'
import { IoIosTime } from 'react-icons/io';
import Confirm from '../components/Confirm';


const EventDetails = () => {

  const { fetchEventById } = useEventStore();
  const { id } = useParams();

  const [event, setEvent] = useState(null)
  const [enrolEvent, setEnrolEvent] = useState(false)

  useEffect(() => {
    const fetchEvent = async () => {
      const res = await fetchEventById(id);
      setEvent(res);
    }
    fetchEvent();
  }, [id, fetchEventById]);


  const modalRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setEnrolEvent(false); 
      }
    }

    if (enrolEvent) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [enrolEvent]);



  if (!event) {
    return (<div className='flex h-screen justify-center items-center '>
      <div className='animate-spin rounded-full h-22 w-22 border-b-4 border-t-2 border-gray-900'></div>
    </div>)
  }
  return (
    <section className='h-screen mx-10 mt-4 '>
      <div className='flex justify-between min-w-120 h-120 items-center px-20 rounded-2xl w-full bg-gradient-to-r from-[#e9d4ff]  to-[##e9d4ff] shadow-xl/15'>
        <div className='w-1/2 aspect-16/9 px-10 py-5 '>
          <motion.img
            whileInView={{
              opacity: [0, 1],
              x: [-200, 0],
            }}
            transition={{
              duration: 1.02
            }}
            className='rounded-xl w-full h-full object-cover shadow-xl/30'
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


          className='flex flex-col gap-2 w-1/2 justify-center items-start h-full px-10 py-5 bg-gradient-to-r from-white  via-[##c27aff] to-[#e9d4ff]'>
          <span className='text-3xl font-bold bg-white px-6 py-4 rounded-xl shadow-2xl' >
            {event.title}
          </span>
          <p className='bg-gradient-to-r shadow-2xl from-[#e9d4ff]  via-[##c27aff] to-fuchsia-300 to- px-8 py-4 h-40 w-full font-semibold   rounded-tr-3xl rounded-bl-3xl'>{event.description}</p>
          <span className='flex justify-center items-center gap-2 mt-3 text-sm font-semibold'>
            <IoIosTime className='text-lg' />
            {event.time || 'No Time Specified'}</span>
          <p className="text-sm mt-6 bg-white px-6 py-3 rounded-full text-start font-semibold shadow-xl/10 ">Organized By <span className='italic text-md text-pink-700'>{event.createdBy?.name || 'Anonymous'}</span></p>
          <button
            onClick={() => { setEnrolEvent(!enrolEvent) }}
            className='flex justify-center items-center rounded-md gap-6 mt-10 bg-white px-8 py-3 font-semibold shadow-xl/20 cursor-pointer'>
            Enroll
            <img className='text-black' src={enroll} alt="enroll" />
          </button>
        </motion.div>
        {enrolEvent && (
          <motion.div
            whileInView={{
              opacity: [0, 1],
              y: [-100, 0],
            }}
            transition={{
              duration: 0.4,
              ease: 'easeInOut',
              type: 'spring'
            }}
            className='fixed inset-0 flex justify-center items-center bg-black/40 z-50'
          >
            <div ref={modalRef} className="bg-white rounded-xl shadow-2xl h-4/5 ">
              <Confirm
               id={event._id}
                title={event.title}
                description={event.description}
                time={event.time}
                date={event.date?.slice(0, 10)}
                closeModal={() => { setEnrolEvent(false) }}
              />
            </div>
          </motion.div>
        )}

      </div>
    </section>
  )
}

export default EventDetails