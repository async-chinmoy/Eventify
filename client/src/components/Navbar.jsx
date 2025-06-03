import logo from "../assets/logo.svg"
import { Link } from "react-router-dom"
import { MdAccountCircle } from "react-icons/md";

import ProfileMini from "./ProfileMini";
import { useState,useEffect, useRef } from "react";
const Navbar = () => {
    const [showProfile, setShowProfile] = useState(false);

    
    const modalRef = useRef(null);

    useEffect(() => {
        function handleClickOutside(event) {
            if (modalRef.current && !modalRef.current.contains(event.target)) {
                setShowProfile(false);
            }
        }

        if (showProfile) {
            document.addEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [showProfile]);


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
                    className=" bg-[#dd3dff] py-2 px-5 rounded-xl cursor-pointer  ">
                    <Link to='/createEvent'>Create Event</Link>
                </button>

                <button>
                    <MdAccountCircle className="text-3xl cursor-pointer" onClick={() => {
                        setShowProfile(!showProfile)
                    }} />
                    {showProfile && (
                        <div ref={modalRef} className="absolute right-12 mt-2 w-48 bg-indigo-300 border rounded-xl shadow-lg z-50">
                            <ProfileMini />
                        </div>
                    )}

                </button>

                
            </div>
        </nav>
    )
}

export default Navbar   