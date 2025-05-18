import { useEffect } from "react";
import { axiosInstance } from "../services/Axios";
import {create } from "zustand";

const useEventStore = create((set) =>({
    events : [],
    isLoading : false,
    error : null,

    fetchEvents : async () =>{
        try {
            const res = await axiosInstance.get('/events/getEvents')
            const data=res.data.events;
            set({
                events : data,
                isLoading : false
            })
        } catch (error) {
            toast.error(error?.response?.data?.error)
        }
    }
}))

export default useEventStore