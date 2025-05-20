import useEventStore from '../stores/eventStore';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import enroll from '../assets/enroll.svg'

const EventDetails = () => {
  const { event, fetchEventById } = useEventStore();
  const { id } = useParams();

  useEffect(() => {
    const fetchEvent = async () => {
      await fetchEventById(id);
    }
    fetchEvent();
  }, [id, fetchEventById]);

  if (!event) {
    return <div>Loading...</div>;
  }
  return (
    <section className='h-screen mx-10 mt-4'>
      <div className='flex justify-between min-w-120 h-120 items-center px-20 rounded-2xl bg-gradient-to-r from-[#e9d4ff]  via-fuchsia-300 to-[#c27aff] shadow-xl/30'>
        <div className='w-1/2 aspect-5/2 px-10 py-5'>
          <img src={event.image} alt="image" />
        </div>
        <div className='flex flex-col gap-2 w-1/2 justify-center items-start h-full px-10 py-5'>
          <span className='text-3xl font-bold bg-white px-6 py-4 rounded-3xl' >
            {event.title}
          </span>
          <p className='bg-gradient-to-r from-[#e9d4ff]  via-fuchsia-300 to-[#c27aff] px-8 py-4 h-40 w-full font-semibold   rounded-tr-3xl rounded-bl-3xl'>{event.description}</p>
          <button className='flex justify-center items-center rounded-md gap-6 bg-white px-8 py-3 font-semibold shadow-xl/50'>
            Enroll
            <img className='text-black' src={enroll} alt="enroll" />
          </button>
        </div>
      </div>
    </section>
  )
}

export default EventDetails