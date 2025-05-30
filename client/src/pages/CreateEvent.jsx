import { useNavigate } from 'react-router-dom'
import useEventStore from "../stores/eventStore";
import { toast } from "react-toastify";
import { useState } from "react";
const CreateEvent = () => {
    const { createEvent } = useEventStore();
    const [formData, setFormData] = useState({
        title: '',
        description: '',
        date: '',
        image: '',
        type: '',
    })
    const { title, description, date, image, type } = formData;
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.id]: e.target.value
        })
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await createEvent(formData)
            if (res.success) {
                toast.success("Event created successfully")
                navigate('/events');
            }
            setFormData({
                title: '',
                description: '',
                date: '',
                image: '',
                type: '',
            })
            toast.success("Event created successfully")
        } catch (error) {
            toast.error(error?.response?.data?.error)
            console.log(error)
        }
    }

    return (
        <div className="flex justify-center items-center h-90vh w-full">
            <form
                onSubmit={handleSubmit}
                className="bg-[#e7ceff] text-gray-900 mt-10 w-full max-w-[400px] mx-4 md:p-6 p-4 py-8 text-left text-sm rounded-lg shadow-[0px_0px_10px_0px] shadow-black/10">
                <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Please fill the form...</h2>

                <input
                    id="title"
                    value={title}
                    onChange={handleChange}
                    className="w-full border mt-1 bg-indigo-500/5 mb-2 border-gray-500/10 outline-none rounded py-2.5 px-3"
                    type="text"
                    placeholder="Enter your Event Title"
                    required
                />

                <input
                    id="description"
                    value={description}
                    onChange={handleChange}
                    className="w-full border mt-1 bg-indigo-500/5 mb-2 border-gray-500/10 outline-none rounded py-2.5 px-3"
                    type="text"
                    placeholder="Enter your Event Description"
                    required
                />

                <input
                    id="date"
                    value={date}
                    onChange={handleChange}
                    className="w-full border mt-1 bg-indigo-500/5 mb-2 border-gray-500/10 outline-none rounded py-2.5 px-3"
                    type="date"
                    placeholder="Enter your Event Date"
                    required
                />

                <input
                    id="image"
                    value={image}
                    placeholder='Enter the image url for the event'
                    onChange={handleChange}
                    className="w-full border mt-1 bg-indigo-500/5 mb-2 border-gray-500/10 outline-none rounded py-2.5 px-3"
                    type="text"
                    required
                />
                <select
                    id="type"
                    value={type}
                    onChange={handleChange}
                    required
                    className=" px-2 py-1 border-1 border-[#df98ef] rounded-lg mb-3 outline-none"
                >
                    <option value="">Select Event Type</option>
                    <option value="Technical">Technical</option>
                    <option value="Cultural">Cultural</option>
                    <option value="Sports">Sports</option>
                    <option value="Workshops & Seminars">Workshops & Seminars</option>
                    <option value="Literary">Literary</option>
                    <option value="Management">Management</option>
                    <option value="Social Initiatives">Social Initiatives</option>
                    <option value="Other">Other</option>
                </select>


                <button type="submit" className="w-full mb-3 bg-indigo-500 hover:bg-indigo-600 transition-all active:scale-95 py-2.5 rounded text-white font-medium">
                    Submit Event
                </button>
            </form>


        </div>
    )
}

export default CreateEvent