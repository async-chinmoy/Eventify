import logo from "../assets/logo.svg"
import { Link } from "react-router-dom"
import { MdOutlineAccountCircle } from "react-icons/md";
import { IoLogOut } from "react-icons/io5";
import useAuthStore from "../stores/authStore";

const Navbar = () => {
    const { logout } = useAuthStore();

    const handleLogout = () => {
        logout();
    }


    return (

        <nav className="h-20 w-full flex items-center justify-between px-12 bg-white sticky top-0 z-10 drop-shadow-xl/25 ">
            <span className="flex items-center gap-6">
                <img className="w-20" src={logo} alt="logo" />
                <h1 className="text-3xl font-bold  tracking-widest">Eventify</h1>
            </span>
            <div className="text-md font-semibold flex w-1/2 justify-center items-center gap-14 ">
                <ul>
                    <li className="flex items-center justify-between gap-24  ">
                        <Link className="w-full group" to="/home">
                            <span>Home</span>
                            <div className="h-0.5 w-0 bg-gray-950 group-hover:w-full transition-all duration-300"></div>
                        </Link>

                        <Link className="w-full group" to="/about">
                            <span>About</span>
                            <div className="h-0.5 w-0 bg-gray-950 group-hover:w-full transition-all duration-300"></div>
                        </Link>

                        <Link className="w-full group" to="/events">
                            <span>Events</span>
                            <div className="h-0.5 w-0 bg-gray-950 group-hover:w-full transition-all duration-300"></div>
                        </Link>

                    </li>
                </ul>
                <button
                    className="flex justify-center items-center gap-2 bg-[#dd3dff] py-3 px-5 rounded-xl cursor-pointer  ">
                    <Link to='/createEvent'>Create Event</Link>
                </button>
                <button onClick={handleLogout}>
                    <IoLogOut className="text-3xl cursor-pointer" />
                </button>
            </div>
        </nav>
    )
}

export default Navbar   