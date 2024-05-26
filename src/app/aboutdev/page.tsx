"use client"
import { motion, AnimatePresence } from 'framer-motion';
import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

interface Developer {
  name: string;
  role: string;
  image: string;
}

const AboutDev = () => {
  const mockData: Developer[] = [
    {
      name: 'Jameson Gelarman',
      role: 'Front-end Developer',
      image: 'images/jameson.png',
    },
    {
      name: 'Julian Charles Macato',
      role: 'Front-end Developer',
      image: 'images/julian.jpg',
    },
  ];

  return (
    <div className="min-h-screen flex flex-col justify-center items-center py-16 px-4">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-5xl font-bold text-orange-500 mb-7 text-center"
      >
        Meet the Developers
      </motion.h2>
      <div className="grid grid-cols-1 gap-y-12 justify-items-center sm:grid-cols-2 gap-x-12 max-w-6xl">
        <AnimatePresence>
          {mockData.map((person, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative flex flex-col items-center text-gray-700 bg-white shadow-md rounded-xl w-full max-w-xs"
            >
              <div className="relative w-full h-80 overflow-hidden rounded-t-xl">
                <img src={person.image} alt={`${person.name}'s profile`} className="w-full h-full object-cover" />
              </div>
              <div className="p-6 text-center">
                <h4 className="block mb-2 font-sans text-2xl font-semibold text-blue-gray-900">
                  {person.name}
                </h4>
                <p className="block font-sans text-lg font-semibold text-orange-500">
                  {person.role}
                </p>
              </div>
              <div className="flex justify-center p-6 pt-2 gap-7">
                <a href="#facebook" className="text-blue-600 hover:text-blue-800">
                  <FaFacebook />
                </a>
                <a href="#twitter" className="text-blue-400 hover:text-blue-600">
                  <FaTwitter />
                </a>
                <a href="#instagram" className="text-pink-600 hover:text-pink-800">
                  <FaInstagram />
                </a>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default AboutDev;
