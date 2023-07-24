import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faLinkedin, faYoutube } from '@fortawesome/free-brands-svg-icons';
import React from 'react'
import { faFax, faHouse, faMailBulk, faPhone } from '@fortawesome/free-solid-svg-icons';

export const Footer = () => {
  return (
    <footer className=" flex items-center justify-center flex-col bg-black text-center text-white lg:text-left">

      <div className="w-4/5 py-10 text-center md:text-left">
        <div className="grid-1 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Tailwind Elements section */}
          <div> <h6 className="mb-4 flex items-center justify-center font-semibold uppercase md:justify-start"> StyleHub </h6> </div>

          {/* Products section */}
          <div>
            <h6 className="mb-4 flex justify-center font-semibold uppercase md:justify-start"> Products </h6>
            <p className="mb-4"> <a href="#!" className="text-white" > Angular </a> </p>
            <p className="mb-4">
            <a href="#!" className="text-white" > React </a> </p>
            <p className="mb-4"> <a href="#!" className="text-white"> Vue </a> </p>
            <p> <a href="#!" className="text-white"> Laravel </a> </p>
          </div>

          {/* Useful links section */}
          <div>
            <h6 className="mb-4 flex justify-center font-semibold uppercase md:justify-start"> Useful links </h6>
            <p className="mb-4"> <a href="#!" className="text-white"> Pricing </a> </p>
            <p className="mb-4"> <a href="#!" className="text-white"> Settings </a> </p>
            <p className="mb-4"> <a href="#!" className="text-white"> Orders </a> </p>
            <p> <a href="#!" className="text-white"> Help </a> </p>
          </div>

          {/* Contact section */}
          <div>
            <h6 className="mb-4 flex justify-center font-semibold uppercase md:justify-start"> Contact </h6>
            <p className="mb-4 flex items-center justify-center md:justify-start">  New York, NY 10012, US </p>
            <p className="mb-4 flex items-center justify-center md:justify-start">  info@example.com </p>
            <p className="mb-4 flex items-center justify-center md:justify-start">  + 01 234 567 88 </p>
            <p className="flex items-center justify-center md:justify-start"> + 01 234 567 89 </p>
          </div>

        </div>
      </div>

      {/* Copyright section */}

      <div className="w-4/5 flex items-center justify-center border-t border-white p-8 lg:justify-between">
        <div className="mr-12 hidden lg:block">
          <span>Copyright © 2023 • Stylehub.</span>
        </div>
        <div className="flex justify-center">
          <a href="#!" className="mr-6 text-white "> <FontAwesomeIcon icon={faFacebook} /> </a>
          <a href="#!" className="mr-6 text-white "> <FontAwesomeIcon icon={faTwitter} /> </a>
          <a href="#!" className="mr-6 text-white"> <FontAwesomeIcon icon={faInstagram} /> </a>
          <a href="#!" className="mr-6 text-white"> <FontAwesomeIcon icon={faLinkedin} /> </a>
          <a href="#!" className="text-white "> <FontAwesomeIcon icon={faYoutube} /> </a>
        </div>
      </div>

    </footer>
  );
}
