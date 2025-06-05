
import { axiosInstance } from "../services/Axios";
import { create } from "zustand";
import { toast } from "react-toastify";

const useEventStore = create((set) => ({
    events: [],
    event: null,
    isLoading: false,
    error: null,

    fetchEvents: async () => {
        try {
            const res = await axiosInstance.get('/events/getEvents')
            const data = res.data.events;
            const sortedEvents = data.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
            set({
                events: sortedEvents,
                isLoading: false
            })
        } catch (error) {
            toast.error(error?.response?.data?.error)
        }
    },
    fetchEventById: async (id) => {
        try {
            const res = await axiosInstance.get(`/events/getEvents/${id}`);
            const data = res.data.event;
           
            set({
                event: data,
                isLoading: false
            })
            return data
        } catch (error) {
            toast.error(error?.response?.data?.error)
        }
    },
    createEvent: async (eventData) =>{
        try {
            const res = await axiosInstance.post('/events/createEvent', eventData)
            const data = res.data.event;
            set({
                event: data,
                isLoading: false
            })
            return { success: true, event: data };
        } catch (error) {
            toast.error(error?.response?.data?.error)
            return { success: false, error: error?.response?.data?.error || "Server error" };
        }
    },

    
}))

export default useEventStore