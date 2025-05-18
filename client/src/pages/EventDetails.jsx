import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import useEventStore from '../stores/eventStore';

const EventDetails = () => {
  const { id } = useParams();
  const { event, loading, fetchEventById, error } = useEventStore();
  const [thumbnail, setThumbnail] = useState("");

  useEffect(() => {
    fetchEventById(id);
  }, [id]);

  useEffect(() => {
    if (event?.images?.length) {
      setThumbnail(event.images[0]);
    }
  }, [event]);

  if (loading) return <div className="p-10">Loading...</div>;
  if (error) return <div className="p-10 text-red-500">{error}</div>;
  if (!event) return null;

  return (
    <div className="max-w-6xl w-full px-6 mx-auto py-10">
      <p>
        <span>Home</span> / 
        <span> Events</span> / 
        <span className="text-indigo-500"> {event.name}</span>
      </p>

      <div className="flex flex-col md:flex-row gap-16 mt-6">
        <div className="flex gap-3">
          <div className="flex flex-col gap-3">
            {event.images.map((img, i) => (
              <div key={i} onClick={() => setThumbnail(img)} className="border max-w-24 rounded overflow-hidden cursor-pointer">
                <img src={img} alt={`Event ${i}`} />
              </div>
            ))}
          </div>
          <div className="border max-w-100 rounded overflow-hidden">
            <img src={thumbnail} alt="Selected Event" />
          </div>
        </div>

        <div className="w-full md:w-1/2">
          <h1 className="text-3xl font-semibold">{event.name}</h1>
          <div className="flex items-center gap-1 mt-2">
            {Array(5).fill('').map((_, i) => (
              <span key={i}>
                {event.rating > i ? "⭐" : "☆"}
              </span>
            ))}
            <p className="ml-2">({event.rating})</p>
          </div>

          <div className="mt-4">
            <p className="line-through text-gray-400">Fee: ₹{event.fee}</p>
            <p className="text-xl font-medium">Now: ₹{event.discountedFee}</p>
          </div>

          <p className="mt-6 font-medium text-base">Event Highlights:</p>
          <ul className="list-disc ml-5 text-gray-600">
            {event.description.map((desc, i) => (
              <li key={i}>{desc}</li>
            ))}
          </ul>

          <div className="flex gap-4 mt-8">
            <button className="w-full py-3 bg-gray-100 hover:bg-gray-200 text-gray-800 font-medium rounded">
              Register Later
            </button>
            <button className="w-full py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded">
              Register Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventDetails;
