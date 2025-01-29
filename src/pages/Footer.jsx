import React from "react";
import { FaGithub, FaLinkedin, FaLink } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-8 px-6 flex flex-col md:flex-row justify-between items-center text-center md:text-left w-full">
      <div className="mb-4 md:mb-0">
        <h2 className="text-lg font-bold">The ALPHAWIZZARDZ</h2>
        <p className="text-sm">Innovating one line at a time</p>
        <p className="text-xs mt-2">&copy; 2025 The Alphawizzardz. All Rights Reserved</p>
      </div>
      
      <div className="flex space-x-4 text-2xl mb-4 md:mb-0">
        <a href="#" className="hover:text-gray-400" aria-label="GitHub">
          <FaGithub />
        </a>
        <a href="#" className="hover:text-gray-400" aria-label="LinkedIn">
          <FaLinkedin />
        </a>
        <a href="#" className="hover:text-gray-400" aria-label="Website">
          <FaLink />
        </a>
      </div>
      
      <div className="text-sm">
        <p className="font-semibold">For more inquiries if this form doesn't work:</p>
        <p className="mt-1 text-lg font-bold">076-9496250</p>
        <p className="mt-1 font-bold underline">weroshprofy@gmail.com</p>
      </div>
    </footer>
  );
};

export default Footer;
