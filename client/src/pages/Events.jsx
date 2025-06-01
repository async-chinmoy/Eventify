import { useState, useEffect } from 'react'
import EventCard from '../components/EventCard'
import useEventStore from '../stores/eventStore'
import { IoSearch } from 'react-icons/io5'
const Events = () => {
    const [eventSearch, setEventSearch] = useState('')
    const { events, fetchEvents } = useEventStore();

    useEffect(() => {
        const fetchEvent = async () => {
            await fetchEvents();
        }
        fetchEvent();

    }, [])

    return (
        <div className='flex flex-col justify-center items-center w-full shadow-xl/10 '    >
            <div className='flex gap-4 items-center justify-center border rounded-full px-4 cursor-pointer  mt-5 '>
                <input type="text"
                    value={eventSearch}
                    onChange={(e) => setEventSearch(e.target.value)}
                    className='outline-none px-4 py-2 rounded-full w-96'
                    placeholder='Search nearby Events...' />
                <button>
                    <IoSearch className='text-2xl ' />
                </button>
            </div>

            <div className='flex flex-col justify-center items-start mt-2'>

                {
                    eventSearch ? (
                        events.filter((event) => event.title.toLowerCase().includes(eventSearch.toLowerCase()))
                            .map((event) => (
                                <EventCard
                                    id={event._id} image={event.image} date={event.date.slice(0, 10)} title={event.title} description={event.description}
                                />
                            ))
                    ) : (
                        events.map((event) => (
                            <EventCard
                                id={event._id} image={event.image} date={event.date.slice(0, 10)} title={event.title} description={event.description}
                            />
                        ))
                    )
                }

            </div>
        </div>

    )
}

export default Events