import axios from "axios";

export const axiosInstance = axios.create({
    baseURL : "https://eventify-6rqv.onrender.com/api",
    withCredentials: true
})
