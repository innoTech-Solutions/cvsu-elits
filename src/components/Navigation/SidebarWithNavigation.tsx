"use client"
import React, { useState, useEffect } from 'react';

function Sidebar() {
  return (
    <div className="bg-[#E97000] h-screen w-20 flex flex-col items-center justify-center hidden md:flex">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="1em"
        height="1em"
        viewBox="0 0 24 24"
        className="text-black w-8 h-8 absolute top-8 cursor-pointer"
      >
        <path
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M12 6.826A.913.913 0 1 0 12 5a.913.913 0 0 0 0 1.826m6.088 0a.913.913 0 1 0 0-1.826a.913.913 0 0 0 0 1.826m-12.176 0a.913.913 0 1 0 0-1.826a.913.913 0 0 0 0 1.826M12 12.913a.913.913 0 1 0 0-1.826a.913.913 0 0 0 0 1.826m6.088 0a.913.913 0 1 0 0-1.826a.913.913 0 0 0 0 1.826m-12.176 0a.913.913 0 1 0 0-1.826a.913.913 0 0 0 0 1.826M12 19a.913.913 0 1 0 0-1.826A.913.913 0 0 0 12 19m6.088 0a.913.913 0 1 0 0-1.826a.913.913 0 0 0 0 1.826M5.912 19a.913.913 0 1 0 0-1.826a.913.913 0 0 0 0 1.826"
        />
      </svg>
    </div>
  );
};

function Navigation() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768); // Adjust the breakpoint as needed
    };

    handleResize(); // Initial check
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <nav className="bg-[#2F3233] flex items-center justify-between p-4 w-full">
      <div className="flex items-center cursor-pointer ml-4 md:ml-10">
        <img
          src="images/logo.png"
          alt="Logo"
          className="h-8 w-auto mr-2"
        />
        {isMobile ? null : (
          <span className="text-white font-semibold text-2xl">Elite League of Information<br/>Technology Students</span>
        )}
      </div>
      <div className="mr-4 md:mr-10 md:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          className="text-white w-8 h-8"
        >
          <path
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16m-7 6h7"
          />
        </svg>
      </div>
      {!isMobile && (
        <div className="mr-4 md:mr-10">
          <span className="text-white text-xl font-semibold cursor-pointer hover:text-orange-500 transition-colors duration-300">
            Who we are
          </span>
        </div>
      )}
    </nav>
  );
};


const SidebarWithNavigation: React.FC = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1">
        <Navigation />
      </div>
    </div>
  );
};

export default SidebarWithNavigation;
