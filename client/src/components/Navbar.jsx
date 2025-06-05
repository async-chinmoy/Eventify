import logo from "../assets/logo.svg";
import { Link } from "react-router-dom";
import { MdAccountCircle } from "react-icons/md";
import { HiMenu, HiX } from "react-icons/hi";
import ProfileMini from "./ProfileMini";
import { useState, useEffect, useRef } from "react";

const Navbar = () => {
  const [showProfile, setShowProfile] = useState(false);

  const [mobileMenu, setMobileMenu] = useState(false);

  const modalRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setShowProfile(false);
      }
    }
    if (showProfile) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showProfile]);

  return (

    <nav className="h-20 w-full flex items-center justify-between px-6 md:px-12 bg-white sticky top-0 z-10 shadow-md">
      
      <span className="flex items-center gap-4">
        <img className="w-16 md:w-20" src={logo} alt="logo" />
        <h1 className="text-xl md:text-3xl font-bold tracking-widest">Eventify</h1>
      </span>

      
      <div className="hidden md:flex text-md font-semibold gap-10 items-center">
        <ul className="flex items-center gap-8">
          <li>
            <Link className="group" to="/home">
              Home
              <div className="h-0.5 w-0 bg-gray-950 group-hover:w-full transition-all duration-300"></div>
            </Link>
          </li>
          <li>
            <Link className="group" to="/about">
              About
              <div className="h-0.5 w-0 bg-gray-950 group-hover:w-full transition-all duration-300"></div>
            </Link>
          </li>
          <li>
            <Link className="group" to="/events">
              Events
              <div className="h-0.5 w-0 bg-gray-950 group-hover:w-full transition-all duration-300"></div>
            </Link>
          </li>
        </ul>

        <button className="bg-[#dd3dff] text-white py-2 px-5 rounded-xl">
          <Link to="/createEvent">Create Event</Link>
        </button>

        <MdAccountCircle
          className="text-3xl cursor-pointer text-[#5497ff]"
          onClick={() => setShowProfile(!showProfile)}
        />
        {showProfile && (
          <div
            ref={modalRef}
            className="absolute top-16 right-12 mt-2 w-48 bg-indigo-300 border rounded-xl shadow-lg z-50"
          >
            <ProfileMini />
          </div>
        )}
      </div>

     
      <div className="md:hidden">
        <button onClick={() => setMobileMenu(!mobileMenu)}>
          {mobileMenu ? <HiX className="text-3xl" /> : <HiMenu className="text-3xl" />}
        </button>
      </div>

      
      {mobileMenu && (
        <div className="absolute top-20 left-0 w-full bg-white shadow-md border-t z-40 md:hidden">
          <ul className="flex flex-col text-center gap-4 py-6 font-medium text-lg">
            <li>
              <Link to="/home" onClick={() => setMobileMenu(false)}>Home</Link>
            </li>
            <li>
              <Link to="/about" onClick={() => setMobileMenu(false)}>About</Link>
            </li>
            <li>
              <Link to="/events" onClick={() => setMobileMenu(false)}>Events</Link>
            </li>
            <li>
              <Link to="/createEvent" onClick={() => setMobileMenu(false)}>
                <button className="bg-[#dd3dff] text-white py-2 px-5 rounded-xl">
                  Create Event
                </button>
              </Link>
            </li>
            <li>
              <MdAccountCircle
                className="text-3xl mx-auto cursor-pointer text-[#5497ff]"
                onClick={() => setShowProfile(!showProfile)}
              />
              {showProfile && (
                <div
                  ref={modalRef}
                  className="mx-auto mt-2 w-48 bg-indigo-300 border rounded-xl shadow-lg z-50"
                >
                  <ProfileMini />
                </div>
              )}
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
