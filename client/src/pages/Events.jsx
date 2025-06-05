import { useState, useEffect, useMemo } from 'react';
import EventCard from '../components/EventCard';
import useEventStore from '../stores/eventStore';
import { IoSearch } from 'react-icons/io5';

const Events = () => {
  const [eventSearch, setEventSearch] = useState('');
  const { events, fetchEvents } = useEventStore();

  useEffect(() => {
    fetchEvents();
  }, [fetchEvents]);

  const filteredEvents = useMemo(() => {
    return eventSearch
      ? events.filter((event) =>
          event.title.toLowerCase().includes(eventSearch.toLowerCase())
        )
      : events;
  }, [eventSearch, events]);

  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 py-6 px-4 md:px-10">
      
      <div className="flex justify-center mb-8">
        <div className="flex items-center w-full max-w-xl border border-gray-300 rounded-full shadow-sm px-4 bg-white">
          <input
            type="text"
            value={eventSearch}
            onChange={(e) => setEventSearch(e.target.value)}
            className="w-full px-4 py-2 rounded-full outline-none"
            placeholder="Search events by title..."
          />
          <IoSearch className="text-xl text-gray-600" />
        </div>
      </div>

      
      <div className="gap-8">
        {filteredEvents.length > 0 ? (
          filteredEvents.map((event) => (
            <EventCard
              key={event._id}
              id={event._id}
              image={event.image}
              title={event.title}
              description={event.description}
              date={event.date.slice(0, 10)}
              time={event.time}
              createdBy={event.createdBy?.name}
            />
          ))
        ) : (
          <div className="col-span-full text-center text-gray-500 text-lg">
            No events found.
          </div>
        )}
      </div>
    </div>
  );
};

export default Events;
