import { useNavigate } from 'react-router-dom';
import { IoIosTime } from "react-icons/io";
import { motion } from 'framer-motion';

const EventCard = ({ image, title, description, id, date, time, createdBy }) => {
  const navigate = useNavigate();

  return (
    <motion.div
      whileInView={{ opacity: [0, 1], y: [-40, 0] }}
      whileTap={{ scale: 0.95 }}
      whileHover={{ scale: 1.03 }}
      transition={{ duration: 0.4 }}
      onClick={() => navigate(`/event/${id}`)}
      className="cursor-pointer w-full rounded-2xl bg-gradient-to-tr from-purple-100 to-[#f3eaff] shadow-md hover:shadow-lg transition-shadow duration-300"
    >
      <div className="flex flex-col md:flex-row items-center w-full overflow-hidden">
        
        <div className="md:w-1/2 w-full h-56 md:h-64 overflow-hidden">
          <img
            src={image}
            alt={title}
            className="object-cover w-full h-full rounded-t-2xl md:rounded-l-2xl md:rounded-tr-none"
          />
        </div>

        
        <div className="md:w-1/2 w-full p-6 flex flex-col justify-between space-y-3 text-left">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
            <h2 className="text-xl font-semibold text-gray-800">{title}</h2>
            <span className="text-xs bg-white text-purple-700 font-medium px-3 py-1 rounded-full shadow-sm">{date}</span>
          </div>

          <p className="text-gray-600 text-sm line-clamp-3">{description}</p>

          <div className="flex items-center text-xs text-gray-700 font-semibold gap-2">
            <IoIosTime className="text-lg text-purple-600" />
            {time || "No Time Specified"}
          </div>

          <p className="text-sm bg-white px-4 py-2 rounded-full shadow font-medium text-gray-800">
            Organized by <span className="italic text-purple-700">{createdBy || "Anonymous"}</span>
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default EventCard;
