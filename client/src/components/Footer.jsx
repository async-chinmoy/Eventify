import { Github, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    // <footer className="px-6 md:px-16 lg:px-24 xl:px-32 pt-8 w-full text-gray-500 bg-white">
    //   <div className="flex flex-col md:flex-row justify-between w-full gap-10 border-b border-gray-500/30 pb-6">
    //     <div className="md:max-w-96">
    //       <div className='flex gap-2 items-center justify-start text-2xl font-bold'>
    //         <img
    //         className="h-9"
    //         src={image}
    //         alt="Eventify Logo"
    //       />
    //       <span>Eventify</span>
    //       </div>
    //       <p className="mt-6 text-sm">
    //         Eventify simplifies event management by streamlining registrations, tracking attendees, and coordinating logistics—all in one place.
    //       </p>
    //     </div>
    //     <div className="flex-1 flex items-start md:justify-end gap-20">
    //       <div>
    //         <h2 className="font-semibold mb-5 text-gray-800">Company</h2>
    //         <ul className="text-sm space-y-2">
    //           <li><Link to="/">Home</Link></li>
    //           <li><Link to="/about">About Us</Link></li>
    //           <li><Link to="/contact">Contact Us</Link></li>
    //           <li><Link to="/privacy-policy">Privacy Policy</Link></li>
    //         </ul>
    //       </div>
    //       <div>
    //         <h2 className="font-semibold mb-5 text-gray-800">Get in touch</h2>
    //         <div className="text-sm space-y-2">
    //           <p>+91-76379-60529</p>
    //           <p>support@eventify.com</p>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    //   <p className="pt-4 text-center text-xs md:text-sm pb-5">
    //     © 2025 Eventify. All Rights Reserved.
    //   </p>
    // </footer>
    <footer className="bg-gray-900 text-gray-300 py-8 md:py-12">
      <div className="mx-auto max-w-6xl px-4">
        <div className="text-center space-y-6">
          <h3 className="text-2xl md:text-3xl font-bold text-white">
            Event<span className="text-yellow-300">ify</span>
          </h3>
          <p className="text-sm md:text-base max-w-md mx-auto">
            Making college event management simple, efficient, and enjoyable for everyone.
          </p>
          <div className="flex justify-center space-x-6 pt-4">
            <Link to="https://github.com/async-chinmoy/Eventify/">
              <button className="text-gray-400 hover:text-white transition-colors">
                <Github className="h-6 w-6" />
              </button></Link>
            <Link>
              <button className="text-gray-400 hover:text-white transition-colors">
                <ExternalLink className="h-6 w-6" />
              </button></Link>
          </div>
          <div className="border-t border-gray-800 pt-6 mt-8">
            <p className="text-xs text-gray-500">
              © 2025 Eventify. Built with React and Tailwind CSS.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
