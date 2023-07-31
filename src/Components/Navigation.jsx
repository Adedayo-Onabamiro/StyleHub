import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faShoppingBag, faHeart, faUser } from '@fortawesome/free-solid-svg-icons';


export const Navigation = () => {
  return (
    <>
      <nav className="flex items-center justify-between bg-[#FBF6F4] py-4 px-20 border-b border-black">
        {/* Logo on the left */}
        <div className="flex items-center">
          <span className="text-xl font-bold font-custom">StyleHUB</span>
        </div>

        {/* Nav content in the center */}
        <div className="hidden md:flex items-center space-x-4">
          <a href="#" className="nav-link">Home</a>
          <a href="#" className="nav-link">About</a>
          <a href="#" className="nav-link">Services</a>
        </div>

        {/* Icons on the right */}
        <div className="flex items-center space-x-4">
          <a href="#" className="text-black hover:text-gray-300">
            <FontAwesomeIcon icon={faSearch} className="text-xl" />
          </a>
          <a href="#" className="text-black hover:text-gray-300">
            <FontAwesomeIcon icon={faShoppingBag} className="text-xl" />
          </a>
          <a href="#" className="text-black hover:text-gray-300">
            <FontAwesomeIcon icon={faHeart} className="text-xl" />
          </a>
          <a href="#" className="text-black hover:text-gray-300">
            <FontAwesomeIcon icon={faUser} className="text-xl" />
          </a>
        </div>
      </nav>
    </>
  )
}
