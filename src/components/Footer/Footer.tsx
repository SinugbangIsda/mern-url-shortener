import React from 'react';
import { FaFacebookSquare, FaInstagram, FaTwitter, FaDiscord} from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className = "flex justify-between items-center w-full p-4 text-white space-x-4">
      <span className = "text-gray-400">
        Created By <></>
        <a 
          className = "hover:cursor-pointer hover:text-blue-600 transition duration-150 ease-out hover:ease-in font-bold"
          href = "https://mpoperario.vercel.app/"
        >
          Marcu Operario
        </a>
      </span>
      <span className = "text-gray-400">
        short.ly © { currentYear }
      </span>
      <div className = "flex flex-row justify-center items-center space-x-5">
        <FaInstagram
          className = "text-gray-400 text-2xl hover:text-[#CB2770] transition duration-150 ease-out hover:ease-in hover:cursor-pointer hover:-translate-y-1 hover:scale-110"
        />
        <FaTwitter 
          className = "text-gray-400 text-2xl hover:text-[#1C99E6] transition duration-150 ease-out hover:ease-in hover:cursor-pointer hover:-translate-y-1 hover:scale-110"
        />
        <FaDiscord
          className = "text-gray-400 text-2xl hover:text-[#5460E6] transition duration-150 ease-out hover:ease-in hover:cursor-pointer hover:-translate-y-1 hover:scale-110"
        />
      </div>
    </footer>
  )
}

export default Footer;