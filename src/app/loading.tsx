"use client"
import { motion } from 'framer-motion';
import React from 'react';

const Loading = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <motion.img
        src="logo.svg"
        alt="Loading"
        className="w-20 h-20"
        animate={{
          scale: [1, 1.5, 1],
        }}
        transition={{
          duration: 1.5,
          ease: "easeInOut",
          repeat: Infinity,
        }}
      />
    </div>
  );
};

export default Loading;
