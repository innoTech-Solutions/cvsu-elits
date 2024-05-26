"use client"
import { motion, AnimatePresence } from "framer-motion";
import Team from "@/components/AboutUs/Team";
import React from "react";

const AboutUs = () => {
    return (
        <div className="flex flex-col items-center max-w-4xl mx-auto py-24 px-4 gap-4">
            <div className="flex flex-col items-center gap-4 mt-4 text-center">
                <motion.h1 
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-4xl sm:text-6xl font-medium"
                >
                    <span className="text-orange-500">Elite League of Information Technology Students</span> Stakeholders
                </motion.h1>
                <motion.h2
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="text-xl sm:text-3xl text-gray-800 font-light"
                >
                    We are a group of students who are passionate about technology and its applications in the real world.
                </motion.h2>
            </div>

            <AnimatePresence>
                <motion.div
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                    className="flex flex-col gap-8 mt-10 w-full cursor-pointer"
                >
                    <Team committee="Officer" key="officer" />
                    <Team committee="Member" key="member" />
                </motion.div>
            </AnimatePresence>
        </div>
    );
};

export default AboutUs;
