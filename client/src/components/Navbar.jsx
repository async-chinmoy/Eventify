import logo from "../assets/logo.svg"
import { Link } from "react-router-dom"
import { MdOutlineAccountCircle } from "react-icons/md";

const Navbar = () => {
    return (

        <nav className="h-20 w-full flex items-center justify-between px-12 bg-white  drop-shadow-xl/25 ">
            <span className="flex items-center gap-6">
                <img className="w-20" src={logo} alt="logo" />
                <h1 className="text-3xl font-bold  tracking-widest">Evently</h1>
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
                <MdOutlineAccountCircle className="text-2xl" />
            </div>
        </nav>
    )
}

export default Navbar   