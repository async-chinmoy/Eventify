import { create } from "zustand";
import { axiosInstance } from "../services/Axios";
import Cookie from "js-cookie";
import { toast } from "react-toastify";

const useAuthStore = create((set) => ({
  isAuth: false,
  error: null,
  user: null,
  loading: false,
  events: [],

  login: async (userData) => {
    try {
      set({ loading: true, error: null });
      const res = await axiosInstance.post("/auth/login", userData);
      const user = res.data.user;
      set({
        loading: false,
        user,
        isAuth: true,
        error: null,
      });
      return { success: true };
    } catch (error) {
      set({ loading: false });
      toast.error(error?.response?.data?.error || "Login failed");
      return { success: false };
    }
  },

  signup: async (userData) => {
    try {
      set({ loading: true, error: null });
      const res = await axiosInstance.post("/auth/signup", userData);
      const user = res.data.user;
      set({
        loading: false,
        user,
        isAuth: true,
        error: null,
      });
      return { success: true };
    } catch (error) {
      set({ loading: false });
      toast.error(error?.response?.data?.error || "Signup failed");
      return { success: false };
    }
  },

  logout: async () => {
    try {
      await axiosInstance.post('/auth/logout');
      set({
        loading: false,
        user: null,
        isAuth: false,
        error: null,
      });
    } catch (error) {
      toast.error(error?.response?.data?.error || "Logout failed");
    }
  },

  checkAuth: async () => {
    const token = Cookie.get("token");
    try {
      if (token) {
        const res = await axiosInstance.get("/auth/verify");
        const user = res.data.user;
        set({
          user,
          isAuth: true,
          error: null,
          loading: false,
        });
      } else {
        set({
          user: null,
          isAuth: false,
          error: null,
          loading: false,
        });
      }
    } catch (error) {
      toast.error(error?.response?.data?.error || "Authentication failed");
      set({
        loading: false,
        user: null,
        isAuth: false,
        error: null,
      });
    }
  },

  registerEvent: async (id) => {
    try {
      const res = await axiosInstance.post(`/user/register/${id}`);
      
      if (res.data.user) {
        set({ user: res.data.user });
      } else if (res.data.event) {
        set(state => ({
          user: {
            ...state.user,
            enrolledEvents: [...(state.user?.enrolledEvents || []), res.data.event],
          }
        }));
      }
      
      toast.success("You have registered for the event successfully!");
      return { success: true };
    } catch (error) {
      toast.error(error?.response?.data?.error || "Failed to register event");
      return { success: false };
    }
  },
}));

export default useAuthStore;