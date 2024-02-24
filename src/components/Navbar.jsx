import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import Contact from "../models/Contact";

const Navbar = () => {
  const [menu, setMenu] = useState(false);
  const [showForm, setShowForm] = useState(false);

  const handleScroll = (id) => {
    const item = document.getElementById(id);
    if (item) {
      window.scrollTo({
        top: item.offsetTop - 60,
        behavior: "auto"
      })
    }
  }

  const handleChange = () => {
    setMenu(!menu);
  };

  const closeMenu = () => {
    setMenu(false);
  };

  const openForm = () => {
    setShowForm(true);
    setMenu(false);
  };

  const closeForm = () => {
    setShowForm(false);
  };

  return (
    <div className="fixed w-full z-10 text-white">
      <div>
        <div className="flex flex-row justify-between p-5 md:px-32 px-5 bg-backgroundColor shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]">
          <div className="flex flex-row items-center cursor-pointer">
            <Link to="/" onClick={() => handleScroll('home')} className="text-2xl font-bold">CoCoLy.</Link>
          </div>

          <nav className="hidden lg:flex flex-row items-center text-lg font-medium gap-8">
            <Link to="/" className="hover:text-hoverColor transition-all cursor-pointer" onClick={() => handleScroll('home')}>Home</Link>
            <Link to="/" className="hover:text-hoverColor transition-all cursor-pointer" onClick={() => handleScroll('about')}>About Us</Link>
            <Link to="/" className="hover:text-hoverColor transition-all cursor-pointer" onClick={() => handleScroll('services')}>Services</Link>
            <Link to="/" className="hover:text-hoverColor transition-all cursor-pointer" onClick={() => handleScroll('doctors')}>Doctors</Link>
            <Link to="/" className="hover:text-hoverColor transition-all cursor-pointer" onClick={() => handleScroll('blog')}>Blog</Link>
          </nav>

          <div className="hidden lg:flex">
            <Link className="bg-brightColor text-white px-4 py-2 rounded-md hover:bg-hoverColor transition duration-300 ease-in-out" to="/book">Contact Us</Link>
          </div>  

          {showForm && <Contact closeForm={closeForm} />}

          <div className="lg:hidden flex items-center">
            {menu ? (
              <AiOutlineClose size={28} onClick={handleChange} />
            ) : (
              <AiOutlineMenu size={28} onClick={handleChange} />
            )}
          </div>
        </div>
        <div className={`${menu ? "translate-x-0" : "-translate-x-full"} lg:hidden flex flex-col absolute bg-backgroundColor text-white left-0 top-16 font-semibold text-2xl text-center pt-8 pb-4 gap-8 w-full h-fit transition-transform duration-300`}>
          <Link to="/" className="hover:text-hoverColor transition-all cursor-pointer" onClick={() => { handleScroll('home'); closeMenu() }}>Home</Link>
          <Link to="/" className="hover:text-hoverColor transition-all cursor-pointer" onClick={() => { handleScroll('about'); closeMenu() }}>About Us</Link>
          <Link to="/" className="hover:text-hoverColor transition-all cursor-pointer" onClick={() => { handleScroll('services'); closeMenu() }}>Services</Link>
          <Link to="/" className="hover:text-hoverColor transition-all cursor-pointer" onClick={() => { handleScroll('doctors'); closeMenu() }}>Doctors</Link>
          <Link to="/" className="hover:text-hoverColor transition-all cursor-pointer" onClick={() => { handleScroll('blog'); closeMenu() }}>Blog</Link>
          <div className="lg:hidden">
            <Link className="bg-brightColor text-white px-4 py-2 rounded-md hover:bg-hoverColor transition duration-300 ease-in-out" to="/book">Contact Us</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
