import React, { useState, useEffect } from 'react';
import logo from "../assets/divya.png";
import { Link } from 'react-scroll';

const Navbar = () => {
  const [navbarBg, setNavbarBg] = useState(false);

  const changeNavbarBg = () => {
    if (window.scrollY >= 80) { // Adjust this value as needed
      setNavbarBg(true);
    } else {
      setNavbarBg(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', changeNavbarBg);
    return () => {
      window.removeEventListener('scroll', changeNavbarBg);
    };
  }, []);

  return (
    <>
      <nav className={`md:px-14 p-4 max-w-screen-2xl border-b border-[#442916] mx-auto fixed top-0 left-1/2 transform -translate-x-1/2 transition-all duration-300 ${
        navbarBg ? 'bg-[#e3878d] shadow-lg' : 'bg-transparent'
      }`}>
        <div className='text-lg container mx-auto flex justify-between items-center font-medium'>
          {/* Left Section */}
          <div className='flex items-center space-x-14'>
            {/* Left Navigation Links */}
            <ul className='hidden md:flex space-x-12'>
              <li className='nav-item'>
                <Link to="about" smooth={true} duration={500} className='cursor-pointer text-[#442916] hover:text-[#e0878c]'>
                  About
                </Link>
              </li>
              <li className='nav-item'>
                <Link to="work" smooth={true} duration={500} className='cursor-pointer text-[#442916] hover:text-[#e0878c]'>
                  Experience
                </Link>
              </li>
            </ul>
            {/* Logo */}
            <a href="/" className='text-2xl font-semibold flex items-center space-x-3'>
              <img src={logo} alt="React Logo" className='w-12 inline-block' />
            </a>
            {/* Right Navigation Links */}
            <ul className='hidden md:flex space-x-12'>
              <li className='nav-item'>
                <Link to="education" smooth={true} duration={500} className='cursor-pointer text-[#442916] hover:text-[#e0878c]'>
                  Education
                </Link>
              </li>
              <li className='nav-item'>
                <Link to="contact" smooth={true} duration={500} className='cursor-pointer text-[#442916] hover:text-[#e0878c]'>
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
