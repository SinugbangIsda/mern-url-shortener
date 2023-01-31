import React from 'react';

const NavBar = () => {
  return (
    <nav className = 'flex justify-between items-center p-2'>
      <a className = "text-3xl text-white font-semibold" href="#">
        sh<span className = "text-blue-500">o</span>rt.ly
      </a>
      <button 
        className = "bg-blue-800 border-2 border-blue-700 hover:border-transparent text-white py-2 px-5 text-sm rounded-md font-semibold hover:bg-blue-900"
      >
        Get App
      </button>
    </nav>
  )
}

export default NavBar;