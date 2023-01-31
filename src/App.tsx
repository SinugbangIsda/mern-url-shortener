import React from 'react';
import Footer from './components/Footer/Footer';
import NavBar from './components/NavBar/NavBar';
import UrlShortener from './components/UrlShortener/UrlShortener';

const App = () => {
  return (
    <div className = "h-screen w-screen bg-gradient-to-b from-indigo-900 via-black to-black overflow-auto">
      <div className = "mx-auto max-w-6xl px-2 sm:px-6 lg:px-8 h-full">
        <div className = "h-full flex flex-col justify-between space-y-5">
          <NavBar />
          <UrlShortener />
          <Footer />
        </div>
      </div>
    </div>
  )
}

export default App;