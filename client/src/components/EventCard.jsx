import { useNavigate } from 'react-router-dom'
const EventCard = ({ image, title, description, _id }) => {


  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/event/${_id}`)}
      className="flex justify-center items-center rounded-2xl bg-gradient-to-r from-purple-100 via-30% to-[#e9d4ff] w-full mt-1 shadow-xl/10 ">
      <div className="flex gap-4 justify-center items-center w-full sm:w-4/5 h-60 cursor-pointer  ">
        <div className="relative w-1/2 h-full px-8 py-4">
          <img
            src={image}
            className="object-cover w-full h-full rounded-2xl"
            alt={title}
          />
        </div>
        <div className="text-center p-4 flex flex-col justify-center items-start">
          <h1 className="text-2xl font-semibold">{title}</h1>
          <p className="text-sm mt-2">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
