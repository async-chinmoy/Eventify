import { useNavigate } from "react-router-dom";
import useAuthStore from "../stores/authStore";
import { useEffect } from "react";

export const ProtectedRoutes = ({ children }) => {
    const { isAuth } = useAuthStore();
    const navigate = useNavigate();

    useEffect(() => {
        if (!isAuth) {
            navigate('/login');
        }
    }, [isAuth, navigate]);

    return isAuth ? children : null;
}    