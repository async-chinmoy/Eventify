import { useEffect } from 'react'
import EventCard from '../components/EventCard'
import useEventStore from '../stores/eventStore'
import { IoSearch } from 'react-icons/io5'
const Events = () => {

    const { events, fetchEvents } = useEventStore();

    useEffect(() => {
        const fetchEvent = async () => {
            await fetchEvents();
        }
        fetchEvent();

    }, [events])

    return (
        <div className='flex flex-col justify-center items-center w-full shadow-xl/10 '    >
            <div className='flex gap-4 items-center justify-center border rounded-full px-4 cursor-pointer  mt-5 '>
                <input type="text"
                    className='outline-none px-4 py-2 rounded-full w-96'
                    placeholder='Search nearby Events...' />
                <button>
                    <IoSearch className='text-2xl ' />
                </button>
            </div>
            <div className='flex flex-col justify-center items-start mt-2'>
                {events.map((event) => (
                    <EventCard
                        key={event._id} image={event.image} title={event.title} description={event.description} />
                ))}
            </div>
        </div>

    )
}

export default Events