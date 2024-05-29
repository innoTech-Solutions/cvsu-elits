"use client";
import { motion } from "framer-motion";
import { ParallaxTilt } from "../decorations/tilt";
import Image from "next/image";
import Link from "next/link";

const HeroSection = () => {
    let isMobile = false;

    if (typeof window !== "undefined") {
        isMobile = window.innerWidth < 768;
    }

    return (
        <div className="relative">
            <div className="absolute inset-0 h-full w-full bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_60%,transparent_100%)]" />
            <div className="relative z-10 flex flex-col md:flex-row items-center justify-center min-h-screen py-12 text-gray-900">
                <div className="md:w-1/2">
                    <div className="container mx-auto">
                        <motion.h1
                            initial={{ x: -100, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{
                                delay: 0.5,
                                duration: 1,
                                type: "spring",
                                stiffness: 120,
                            }}
                            className={`mb-4 text-2xl font-bold leading-tight text-center md:text-left md:text-6xl text-[#2F3233] ${
                                isMobile ? "text-4xl" : ""
                            }`}
                        >
                            Welcome{" "}
                            <span className="text-orange-500">Tigreans!</span>
                        </motion.h1>
                        <motion.p
                            initial={{ x: -100, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{
                                delay: 1,
                                duration: 1,
                                type: "spring",
                                stiffness: 120,
                            }}
                            className={`mb-8 text-lg text-center md:text-left md:text-xl font-mono ${
                                isMobile ? "text-md leading-normal" : ""
                            }`}
                        >
                            Welcome to our{" "}
                            <b>school organization&apos;s online platform!</b>
                            <br />
                            Here, you can stay updated with our{" "}
                            <span className="text-orange-500">
                                latest events
                            </span>
                            ,{!isMobile && <br />}
                            <span className="text-orange-500">
                                connect with fellow members
                            </span>
                            ,{!isMobile && <br />}
                            and{" "}
                            <span className="text-orange-500">
                                explore opportunities
                            </span>{" "}
                            for growth and development. Let&apos;s embark on
                            this exciting journey together!
                        </motion.p>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 1.5, duration: 0.5 }}
                            className="flex justify-center md:justify-end"
                        >
                            <Link href="/form">
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="px-8 py-3 text-lg font-semibold text-white transition-all duration-300 bg-orange-500 rounded-md shadow-lg hover:bg-orange-600 focus:outline-none focus:ring focus:ring-blue-300"
                                >
                                    Make Account
                                </motion.button>
                            </Link>
                        </motion.div>
                    </div>
                </div>
                <div className="hidden md:block mx-8">
                    <ParallaxTilt className="cursor-pointer">
                        <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{
                                delay: 1,
                                duration: 0.5,
                                type: "spring",
                                stiffness: 120,
                            }}
                        >
                            <Image
                                src="logo.svg"
                                alt="Logo"
                                className="mx-auto"
                                width={300}
                                height={300}
                            />
                        </motion.div>
                    </ParallaxTilt>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;
