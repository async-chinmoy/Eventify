import Navbar from '../components/Navbar';
import { IoSearch } from 'react-icons/io5';
import image from '../assets/image.svg';
import { useEffect } from 'react';
import useAuthStore from '../stores/authStore';
import { motion } from 'framer-motion';

import EventsCarousel from '../components/EventsCarousel';
import { redirect } from 'react-router-dom';
import Footer from '../components/Footer';
import Categories from '../components/Categories';

const Home = () => {
  const user = useAuthStore((state) => state.user);

  useEffect(() => {
    redirect('/home');
  }, [user]);

  return (
    <div className="min-h-screen overflow-y-scroll scroll-smooth snap-y snap-mandatory">
    
      <section className="flex relative flex-col justify-center items-center mx-auto snap-start">
        <div className="w-11/12 md:w-4/5 h-auto md:h-96 mt-5 rounded-3xl flex flex-col md:flex-row justify-between items-center bg-purple-200">
          <motion.div
            whileInView={{ opacity: [0, 1], x: [-200, 0] }}
            transition={{ duration: 1.5 }}
            className="w-full md:w-1/2 flex flex-col justify-center items-start gap-4 p-6 md:p-10"
          >
            <span className="text-3xl md:text-4xl font-bold bg-purple-400 px-4 py-2 rounded-xl">
              {user?.name ? `Welcome Back ${user.name}` : 'Welcome to Eventify'}
            </span>

            <p className="text-sm text-gray-700 font-semibold">
              We’ve got fresh events, exclusive experiences, and everything in between waiting for you. Dive back in and make the most of what’s coming up....
            </p>
          </motion.div>
          <img className="w-3/4 md:w-1/2 mt-4 md:mt-0" src={image} alt="illustration" />
        </div>
      </section>

      <section className="snap-start w-full">
        <div className="flex flex-col md:flex-row justify-between items-center mx-6 md:mx-16">
          <h1 className="text-2xl md:text-3xl font-bold mt-10 pb-4 md:pb-6">
            Upcoming Events
            <div className="h-0.5 w-full bg-gray-800 mt-3 rounded-2xl" />
          </h1>
        </div>
        <EventsCarousel />
      </section>

      <section className="flex flex-col justify-center items-center mx-6 md:mx-16 mt-16 md:mt-20 snap-start">
        <h2 className="text-3xl md:text-4xl font-bold pb-3 text-center">
          Events Categories
          <div className="h-0.5 w-full bg-gray-800 mt-3 rounded-2xl" />
        </h2>

        <p className="text-sm md:text-base w-full md:w-4/5 mt-5 text-gray-600 font-semibold text-center">
          Eventify lets users discover events by category, making it easy to browse tech, cultural, sports, or workshop events. Just select a category to view relevant listings instantly....
        </p>

        <Categories />
      </section>

      <Footer />
    </div>
  );
};

export default Home;
