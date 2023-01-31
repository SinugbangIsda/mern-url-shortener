import React from 'react';

const NavBar = () => {
  return (
    <nav className = 'flex justify-between items-center p-2'>
      <a className = "text-3xl text-white font-semibold" href="#">
        short.ly
      </a>
      <button 
        className = "bg-transparent border-2 border-[white] text-white py-2 px-5 text-sm rounded-md font-semibold "
      >
        Get App
      </button>
    </nav>
  )
}

export default NavBar;