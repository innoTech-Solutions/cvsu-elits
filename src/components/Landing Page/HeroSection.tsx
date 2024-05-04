"use client"
import React, { useState, useEffect } from 'react';

interface HeroSectionProps {}

const HeroSection: React.FC<HeroSectionProps> = () => {
  const [lineWidth, setLineWidth] = useState<number | string>(0);
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth <= 768); 
    };

    checkScreenSize();

    window.addEventListener('resize', checkScreenSize);

    return () => {
      window.removeEventListener('resize', checkScreenSize);
    };
  }, []);

  const handleMouseEnter = () => {
    setLineWidth('100%');
  };

  const handleMouseLeave = () => {
    setLineWidth(0);
  };

  return (
    <div className="flex flex-col md:flex-row relative">
      <div className="flex-1 md:hidden bg-[#1e1e1e]"></div>
      <div className="flex-1 h-screen bg-cover bg-center relative" style={{backgroundImage: "linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('images/cvsu.jpg')"}}>
        <div className="absolute top-0 right-10 bg-[#2F3233] w-36 h-48 flex items-center justify-center">
          <img src="logo.svg" alt="Logo" className="w-20 mt-10" />
        </div>
        {!isMobile && (
          <div className="absolute bottom-0 left-0 bg-orange-500 h-1" style={{ width: lineWidth, transition: 'width 0.3s' }}></div>
        )}
      </div>
      <div className={`absolute ${isMobile ? 'top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2' : 'top-0 left-0 bg-gray-100 shadow-2xl backdrop-blur-sm p-20 rounded-md z-20 w-1/2'}`}>
        <h1 className="text-4xl font-bold mb-4">Welcome Tigreans!</h1>
        <p className="text-lg mb-4">Welcome to our school organization's online platform! 
                                    Here, you can stay updated with our latest events, 
                                    connect with fellow members, and explore opportunities for growth and development. 
                                    Let's embark on this exciting journey together!</p>
        <button className="bg-orange-500 hover:bg-orange-700 transition duration-100 text-white font-bold py-2 px-6 rounded relative" 
          onMouseEnter={handleMouseEnter} 
          onMouseLeave={handleMouseLeave}
          style={{ borderBottom: `2px solid orange`, marginBottom: `-2px` }}>
          Make Account
        </button>
      </div>
    </div>
  );
};

export default HeroSection;
