import React from 'react';
import { Link } from 'react-scroll';

const Footer = () => {
  return (
    <div className="gradientBg rounded-xl md:px-14 p-4 max-w-screen-2xl mx-auto text-[#7b4045]">
      <div className="flex flex-col md:flex-row justify-between items-center my-12 gap-10">
        {/* Address Section */}
        {/* Navigation Links Section */}
        <div className="flex justify-center items-center text-center">
          <ul className="space-y-2 md:space-y-0 md:space-x-8 flex flex-col md:flex-row">
            <li className='nav-item'>
              <Link activeClass='active' spy={true} smooth={true} offset={-100} to="about" className='cursor-pointer hover:text-[#e0878c]'>
                About
              </Link>
            </li>
            <li className='nav-item'>
              <Link activeClass='active' spy={true} smooth={true} offset={-100} to="work" className='cursor-pointer hover:text-[#e0878c]'>
                Experience
              </Link>
            </li>
            <li className='nav-item'>
              <Link activeClass='active' spy={true} smooth={true} offset={-100} to="education" className='cursor-pointer hover:text-[#e0878c]'>
                Education
              </Link>
            </li>
            <li className='nav-item'>
              <Link activeClass='active' spy={true} smooth={true} offset={-100} to="contact" className='cursor-pointer hover:text-[#e0878c]'>
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div className="flex flex-col space-y-3 text-left">
          <ul className="space-y-2">
            <li><a href="/" className='block hover:text-[#e0878c]'>(857)-832-1888</a></li>
            <li><a href="/" className='block hover:text-[#e0878c]'>divya_shr@outlook.com</a></li>
            <li>
                <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d94410.31888173753!2d-71.05268398724627!3d42.31432045417155!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e3652d0d3d311b%3A0x787cbf240162e8a0!2sBoston%2C%20MA!5e0!3m2!1sen!2sus!4v1727126207096!5m2!1sen!2sus" 
                    width="300" 
                    height="200" 
                    allowfullscreen="" 
                    loading="lazy" 
                    referrerpolicy="no-referrer-when-downgrade">
                </iframe>
            </li>
          </ul>
        </div>
      </div>

      <hr />
    </div>
  )
}

export default Footer;
