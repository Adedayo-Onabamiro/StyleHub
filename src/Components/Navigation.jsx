import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faShoppingBag, faHeart, faUser , faBars } from '@fortawesome/free-solid-svg-icons';


export const Navigation = () => {
  const [showMenu, setShowMenu] = useState(false);

  const handleMenuToggle = () => {
    setShowMenu(!showMenu);
  };

  return (
    <nav className="bg-[#FBF6F4] w-full md:px-8 z-20 border border-b-black ">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">

        {/* Logo on the left */}
        <div className="flex items-center">  <span className="text-xl font-bold font-custom">StyleHUB</span> </div>

        <div className="flex md:order-2">
        <div className="flex items-center space-x-4 mx-4">
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
          
          <button
            data-collapse-toggle="navbar-sticky"
            type="button"
            className={`inline-flex items-center p-2 w-10 h-10 justify-center text-sm rounded-lg md:hidden focus:outline-none focus:ring-2 focus:ring-gray-200`}
            aria-controls="navbar-sticky"
            aria-expanded="false"
            onClick={handleMenuToggle}
          >
            <span className="sr-only">Open main menu</span>
            <FontAwesomeIcon icon={faBars} className="w-5 h-5" aria-hidden="true" />
          </button>
        </div>
        <div
          className={`items-center justify-between w-full md:flex md:w-auto md:order-1 ${showMenu ? '' : 'hidden'}`}
          id="navbar-sticky"
        >
          <ul
            className={`flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-transparent md:flex-row md:space-x-8 md:mt-0 md:border-0 ${showMenu ? '' : 'hidden'} md:flex`}
          >
            <li>
              <a
                href="#"
                className={`block py-2 pl-3 pr-4 rounded ${
                  showMenu ? 'text-black' : 'text-gray-900 '
                } ${showMenu ? 'md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:text-blue-500' : 'hover:bg-gray-100 '
                }`}
                aria-current="page"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#"
                className={`block py-2 pl-3 pr-4 rounded ${
                  showMenu ? 'text-gray-900' : 'hover:bg-gray-100 dark:hover:bg-gray-700'
                } ${showMenu ? 'md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:text-blue-500' : 'md:hover:text-blue-700 dark:text-white dark:hover:text-white md:dark:hover:text-blue-500'
                }`}
              >
                Shop
              </a>
            </li>
            <li>
              <a
                href="#"
                className={`block py-2 pl-3 pr-4 rounded ${
                  showMenu ? 'text-gray-900' : 'hover:bg-gray-100 dark:hover:bg-gray-700'
                } ${showMenu ? 'md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:text-blue-500' : 'md:hover:text-blue-700 dark:text-white dark:hover:text-white md:dark:hover:text-blue-500'
                }`}
              >
                Blog
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

