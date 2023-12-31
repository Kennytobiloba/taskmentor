import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-[#00113b] p-2 relative">
      <div className="container mx-auto flex justify-between items-center">
        <div>
          <img src="./image/julieth2.jpg" alt="" width={80} />
        </div>

        {/* Mobile view */}
        <div className="lg:hidden">
          <FontAwesomeIcon
            icon={isMobileMenuOpen ? faTimes : faBars}
            className="text-white text-[28px] mt-12 cursor-pointer"
            onClick={toggleMobileMenu}
          />
        </div>

        <ul
          className={`navbar space-x-4 lg:hidden absolute top-[100%] left-0 right-0 w-[100%] bg-[#FC00B5] h-[40vh] text-left ${
            isMobileMenuOpen ? 'block' : 'hidden'
          }`}
        >
          <div className="mt-16 ml-16">
            <li className="mb-2">
              <a href="#" className="text-white hover:text-[#ffa2e5] lg:hidden text-[18px] mb-12 font-semibold">
                Home
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="text-white lg:text-[#FC00B5] hover:text-[#ffa2e5] text-[18px] mb-12 font-[600px] ">
                Meet Julieth
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="text-white hover:text-[#ffa2e5] text-[18px] mb-12 font-semibold">
                Become a mentor
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="text-white hover:text-[#ffa2e5] lg:hidden text-[18px] mb-12 font-semibold">
                Login
              </a>
            </li>
          </div>
        </ul>

        {/* Mobile view end */}

        <ul className="space-x-4 lg:flex hidden">
          <li>
            <a href="#" className="text-white hover:text-[#ffa2e5] lg:hidden text-[18px]">
              Home
            </a>
          </li>
          <li>
            <a href="#" className="text-white lg:text-[#FC00B5] hover:text-[#ffa2e5] text-[18px]">
              Meet Julieth
            </a>
          </li>
          <li>
            <a href="#" className="text-white hover:text-[#ffa2e5] text-[18px]">
              Become a mentor
            </a>
          </li>
          <li>
            <a href="#" className="text-white hover:text-[#ffa2e5] lg:hidden text-[18px]">
              Login
            </a>
          </li>
        </ul>

       <div className='hidden lg:flex'>
       <button className="  text-white text-[20px] bg-[#FC00B5] font-700 md:flex py-3 w-[#3rem] px-7 rounded-l-3xl font-extrabold mt-8">
          Login
        </button>
       </div>
      </div>
    </nav>
  );
}

export default Navbar;
