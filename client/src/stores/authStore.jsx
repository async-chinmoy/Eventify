import { create } from "zustand";
import { axiosInstance } from "../services/Axios";

const useAuthStore = create((set) => ({
  isAuth: false,
  error: null,
  user: null,
  loading: false,

  login: async (userData) => {
    try {
      const res = await axiosInstance.post("/auth/login", userData)
      const user = res.data.newUser
      set({
        loading: true,
        user: user,
        isAuth: true,
        error: null,
      })
    } catch (error) {
      alert(error.response.data.message)
    }
  },

  logout: () =>
    set({
      loading: false,
      user: null,
      isAuth: false,
      error: null,
    }),

  signup: async (userData) =>{
    try {
      const res = await axiosInstance.post("/auth/signup", userData)
      const user = res.data.user
      set({
        loading: true,
        user: user,
        isAuth: true,
        error: null
      })      
    } catch (error) {
      alert(error.response.data.message)
      console.log(error)
    }
  }
   ,

  checkAuth: async () => {
    try {
      const res = await axiosInstance.get("/auth/verify");
      set({
        loading: false,
        user: res.data.user,
        isAuth: true,
        error: null,
      });
    } catch (error) {
      set({
        loading: false,
        user: null,
        isAuth: false,
        error: null,
      });
    }
  },
}));

export default useAuthStore;
