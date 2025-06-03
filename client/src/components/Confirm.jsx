import { toast } from 'react-toastify'
import { IoIosCalendar, IoIosTime } from 'react-icons/io'
import {MdCancel} from 'react-icons/md'
import useAuthStore from '../stores/authStore'

const Confirm = ({ title, description, time, date, closeModal }) => {

    const { registerEvent} = useAuthStore();
    const handleEnrollment =async  ({id}) => {
        
        await registerEvent(id);
        toast.success('Event registered successfully');
        closeModal();
    }
    return (
        <div className="flex justify-center items-center min-h-full  px-30 bg-gradient-to-br from-purple-600 via-pink-500 to-red-500">
            <div className="bg-white/80 backdrop-blur-md shadow-xl rounded-xl p-8 max-w-md w-full text-center border border-white/30">
               <MdCancel onClick={closeModal} className='absolute top-4 right-4 text-2xl text-red-400 cursor-pointer' />
                <h1 className="text-3xl font-bold text-gray-900 mb-2">Are you sure?</h1>
                <span className="block text-lg font-medium text-gray-800 mb-1">{title}</span>
                <p className="text-gray-600 text-sm mb-5">{description}</p>

                <div className="flex justify-center items-center gap-2 text-sm font-medium text-gray-700">
                    <IoIosTime className="text-xl text-purple-700" />
                    {time || 'No Time Specified'}
                </div>

                <div className="flex justify-center items-center gap-2 mt-2 text-sm font-medium text-gray-700">
                    <IoIosCalendar className="text-xl text-purple-700" />
                    {date || 'No Date Specified'}
                </div>

                <div className="mt-8 flex justify-center gap-4">
                    <button 
                    onClick={handleEnrollment}
                    className="bg-gradient-to-r from-green-400 to-green-600 hover:from-green-500 hover:to-green-700 text-white px-5 py-2 rounded-full font-semibold shadow-lg transition-all duration-200">
                        Yes 🙌
                    </button>
                    <button  
                    onClick={closeModal}
                    className="bg-gradient-to-r from-red-400 to-red-600 hover:from-red-500 hover:to-red-700 text-white px-5 py-2 rounded-full font-semibold shadow-lg transition-all duration-200">
                        No 👎
                    </button>
                </div>
            </div>
        </div>


    )
}

export default Confirm