import { useNavigate } from 'react-router-dom'
import { IoIosTime } from "react-icons/io";
import { motion } from 'framer-motion'
const EventCard = ({ image, title, description, id, date,time,createdBy }) => {


  const navigate = useNavigate();

  return (
    <div
      onClick={() => { navigate(`/event/${id}`) }}
      className="flex justify-center items-center rounded-2xl bg-gradient-to-r from-purple-100 via-30% to-[#e9d4ff] w-full mt-1 shadow-xl/10 ">

      <motion.div
        whileInView={{
          opacity: [0, 1],
          y: [-100, 0]
        }}
        whileTap={{ scale: 0.9 }}
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.5 }} className="flex gap-4 justify-center items-center w-full sm:w-4/5 h-64 cursor-pointer  ">

        <div className="w-1/2 h-full px-8 py-4">
          <img
            src={image}
            className="object-cover w-full h-full rounded-2xl"
            alt={title}
          />
        </div>
        <div className="text-center p-4 w-1/2 flex flex-col justify-center items-start">
          <div className='flex justify-between items-center'>
            <h1 className="text-2xl font-semibold">{title}</h1>
            <span className='ml-4 bg-white px-4 py-2 rounded-full'>{date}</span>
          </div>
          <p className="text-sm mt-2 text-start">{description}</p>
          <span className='flex justify-center items-center gap-2 mt-3 text-xs font-semibold'>
            <IoIosTime className='text-lg' />
            {time|| 'No Time Specified'}</span>
          <p className="text-sm mt-6 bg-white shadow-xl/10 px-6 py-3 rounded-full text-start font-semibold ">Organized By <span className='italic text-md text-pink-700'>{createdBy || 'Anonymous'}</span></p>
        </div>
      </motion.div>
    </div>
  );
};

export default EventCard;
