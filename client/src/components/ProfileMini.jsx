import { Link } from "react-router-dom";
import useAuthStore from "../stores/authStore";
import { IoLogOut } from "react-icons/io5";
const ProfileMini = () => {
    const { user, logout } = useAuthStore();

    const handleLogout = () => {
            logout();
        }
    

    return (
        <div className="p-4 flex flex-col  items-center text-sm text-gray-800">

            <div className="mb-2 border-b pb-2">
                <p className="font-semibold text-xl ">Hello, {user?.name || "John Doe"}</p>
                <p className="text-gray-500 overflow-hidden">{user?.email || "john@dummy.com"}</p>
            </div>

            
            <ul className="space-y-2">
                <li>
                    <Link to="/profile" className="block hover:text-purple-600 transition">
                        View Profile
                    </Link>
                </li>
                <li>
                    <Link to="/settings" className="block hover:text-purple-600 transition">
                        Settings
                    </Link>
                </li>
                <li>
                    <Link to="/my-events" className="block hover:text-purple-600 transition">
                        My Events
                    </Link>
                </li>
            </ul>
            <button className="mt-4 cursor-pointer hover:text-purple-600 transition flex items-center gap-2 justify-center" onClick={handleLogout}>
                 <span>LogOut</span> 
                   <IoLogOut className="text-2xl cursor-pointer" />
                </button>
        </div>
    );
};

export default ProfileMini;
