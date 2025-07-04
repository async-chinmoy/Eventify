import React, { useEffect, useRef } from "react";
import useEventStore from "../stores/eventStore";
import { useNavigate } from 'react-router-dom'
import { motion } from "framer-motion"
const EventCarousel = () => {
  const { events, isLoading, fetchEvents } = useEventStore();
  const carouselRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetchEvents();
  }, [fetchEvents]);


  const scrollCarousel = (direction) => {
    const container = carouselRef.current;
    if (container) {
      const scrollAmount = container.clientWidth * direction;
      container.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };


  useEffect(() => {
    const interval = setInterval(() => {
      scrollCarousel(1);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  if (isLoading) return <div className="text-center py-10">Loading events...</div>;
  if (!Array.isArray(events) || events.length === 0)
    return <div className="text-center py-10">No events found.</div>;

  return (
    <div className="mx-12 ">
      <motion.div whileInView={{
        opacity: [0, 1],
        y: [100, 0]
      }}
      transition={{
        duration: 0.3
      }}
        className="relative w-full h-100 py-4">
        <div
          ref={carouselRef}
          className="flex  overflow-x-auto scrollbar-hide scroll-smooth gap-5 snap-x snap-mandatory px-4 "
        >
          {events.map((event) => (
            <motion.div
              onClick={() => { navigate(`/event/${event._id}`) }}
              whileHover={{ scale: 1.1 }}
              transition={{
                duration:0.2
              }}
              key={event._id}
              className="w-80 border border-gray-100 cursor-pointer flex-shrink-0 snap-start bg-gradient-to-t from-[#e9d4ff]  to-[#c27aff] p-6 rounded-xl shadow-md   transition-all"
            >
              <div>
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-40 object-cover rounded-lg mb-4"
                />
                <h3 className="text-xl font-semibold mb-2">{event.title}</h3>
                <p className="text-sm">{event.description}</p>
              </div>
            </motion.div>
          ))}
        </div>


        <button
          onClick={() => scrollCarousel(-1)}
          className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-purple-800 text-white p-2 rounded-full shadow hover:bg-purple-600"
        >
          &lt;
        </button>
        <button
          onClick={() => scrollCarousel(1)}
          className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-purple-800 text-white p-2 rounded-full shadow hover:bg-purple-600"
        >
          &gt;
        </button>
      </motion.div>
    </div>
  );
};

export default EventCarousel;
