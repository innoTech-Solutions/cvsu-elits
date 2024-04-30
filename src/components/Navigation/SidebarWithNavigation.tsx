import React from 'react';

function Sidebar() {
  return (
    <div className="bg-[#E97000] h-screen w-20 flex flex-col items-center justify-center">
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
  return (
    <nav className="bg-[#2F3233] flex items-center justify-between p-4 w-full">
      <div className="flex items-center cursor-pointer ml-10">
        <img
          src="images/logo.png"
          alt="Logo"
          className="h-8 w-auto mr-2"
        />
        <span className="text-white font-semibold text-2xl">Elite League of Information<br/>Technology Students</span>
      </div>
      <div className="mr-10">
        <span className="text-white text-xl font-semibold cursor-pointer hover:text-orange-500 transition-colors duration-300">
          Who we are
        </span>
      </div>
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
