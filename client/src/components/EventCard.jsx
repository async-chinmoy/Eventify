import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
const EventCard = ({ image, title, description, id, date }) => {


  const navigate = useNavigate();

  return (
    <div
      onClick={() =>{ navigate(`/event/${id}`)}}
      className="flex justify-center items-center rounded-2xl bg-gradient-to-r from-purple-100 via-30% to-[#e9d4ff] w-full mt-1 shadow-xl/10 ">
      <motion.div
        whileInView={{
          opacity: [0, 1],
          y: [-100, 0]
        }}
        whileTap={{ scale: 0.9 }}
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.5 }} className="flex gap-4 justify-center items-center w-full sm:w-4/5 h-60 cursor-pointer  ">
        <div className="relative w-1/2 h-full px-8 py-4">
          <img
            src={image}
            className="object-cover w-full h-full rounded-2xl"
            alt={title}
          />
        </div>
        <div className="text-center p-4 flex flex-col justify-center items-start">
          <div className='flex justify-between items-center'>
            <h1 className="text-2xl font-semibold">{title}</h1>
            <span className='ml-4 bg-white px-4 py-2 rounded-full'>{date}</span>
          </div>
          <p className="text-sm mt-2">{description}</p>
        </div>
      </motion.div>
    </div>
  );
};

export default EventCard;
