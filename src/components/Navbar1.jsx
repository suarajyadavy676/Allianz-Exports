import React, { useEffect, useState } from "react";
import logo from "/logo.png";
import Hamburger from "./Hamburger";
import { Link } from "react-router-dom";

function Navbar1() {
  const [isFixed, setIsFixed] = useState(false);

  // Function to check the scroll position
  const handleScroll = () => {
    const position = window.scrollY;
    setIsFixed(position > 0); // Fixed when not at the top
  };

  // Set up event listener for scrolling
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <div className={`${isFixed ? 'fixed w-full top-0 left-0' : 'relative'} bg-white shadow-lg`}>
    {/* for large screen */}
    <div className="hidden md:block">
      <div className=" flex justify-between flex-wrap items-center w-[90%] mx-auto h-20">
      <Link to='/'><img src={logo} alt="logo" className="w-52" /></Link>
        <div className="grid grid-cols-5 gap-4">
          <p><Link to='/'>Home</Link></p>
          <p>About Us</p>
          <p>Careers</p>
          <p>Contact</p>
          <button className="bg-blue-600 text-white py-1 px-2 rounded-md">Log In</button>
        </div>
      </div>
    </div>
    {/* for small sreen */}
    <div className="md:hidden">
      <div className="flex justify-between items-center w-[90%] mx-auto h-20">
      <Link to='/'> <img src={logo} alt="logo" className="w-52" /></Link>
      <Hamburger/>
      </div>
    </div>
    </div>
  );
}

export default Navbar1;
