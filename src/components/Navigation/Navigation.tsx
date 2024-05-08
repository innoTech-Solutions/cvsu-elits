"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Code2 } from "lucide-react";


function Navigation() {
    const [isMobile, setIsMobile] = useState(false);
    const [showDropdown, setShowDropdown] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };

        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
    };

    const closeDropdown = () => {
        setShowDropdown(false);
    };

    return (
        <div className="relative">
            <nav className="bg-[#2F3233] bg-opacity-60 backdrop-blur-md flex items-center justify-between px-8 py-2 w-full drop-shadow-xl relative z-20">
                <div className="flex items-center cursor-pointer">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src="logo.svg" alt="Logo" className="h-auto w-12 mr-2" />
                    <Link href='/'>
                        <span className="text-white font-black text-2xl">ELITS</span>
                    </Link>
                </div>

                {isMobile ? (
                    <div className="mr-4 md:mr-10">
                        <svg
                            onClick={toggleDropdown}
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            className={`text-white w-8 h-8 cursor-pointer transition-transform duration-300 transform ${showDropdown ? "rotate-180" : ""}`}
                        >
                            <path
                                fill="none"
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d={showDropdown ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
                            />
                        </svg>
                        
                        <div className={`absolute right-0 top-full bg-[#2F3233] bg-opacity-60 py-2 w-full h-screen transition-all duration-500 ${showDropdown ? "opacity-100" : "opacity-0"}`}>
                            <div className="absolute inset-0 bg-black bg-opacity-70 backdrop-blur-md flex justify-center items-center">
                                <div className="flex flex-col justify-center items-center z-10">
                                    <div
                                    className="bg-orange-500 h-5 w-32 mb-4"
                                    />
                                    <div
                                    className="bg-orange-500 h-5 w-full mb-4"
                                    />  
                                    <div
                                    className="bg-orange-500 h-5 w-32 mb-4"
                                    />
                                    <Link href="/" onClick={closeDropdown}>
                                        <span className="block text-white text-xl font-semibold cursor-pointer hover:text-orange-500 transition-colors duration-300 px-4 py-2">
                                            Home
                                        </span>
                                    </Link>
                                    <Link href="/shop" onClick={closeDropdown}>
                                        <span className="block text-white text-xl font-semibold cursor-pointer hover:text-orange-500 transition-colors duration-300 px-4 py-2">
                                            Shop
                                        </span>
                                    </Link>
                                    <Link href="/aboutus" onClick={closeDropdown}>
                                        <span className="block text-white text-xl font-semibold cursor-pointer hover:text-orange-500 transition-colors duration-300 px-4 py-2">
                                            About us
                                        </span>
                                    </Link>
                                    <Link href="/aboutdev" onClick={closeDropdown}>
                                        <span className="block text-white text-xl font-semibold cursor-pointer hover:text-orange-500 transition-colors duration-300 px-4 py-2">
                                            About Dev
                                        </span>
                                    </Link>
                                    <div
                                    className="bg-orange-500 h-5 w-32 mb-4"
                                    />
                                    <div
                                    className="bg-orange-500 h-5 w-80 mb-4"
                                    />  
                                    <div
                                    className="bg-orange-500 h-5 w-32 mb-4"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                ) : (
                    <>
                        <div className="gap-4 flex items-center">
                            <Link href="/">
                                <span className="text-white text-md font-semibold cursor-pointer hover:text-orange-500 transition-colors duration-300">
                                    Home
                                </span>
                            </Link>
                            <Link href="/shop">
                                <span className="text-white text-md font-semibold cursor-pointer hover:text-orange-500 transition-colors duration-300">
                                    Shop
                                </span>
                            </Link>
                        </div>
                        <div className="flex flex-row gap-4 items-center">
                            <Link href="/aboutus">
                                <span className="text-white text-md font-semibold cursor-pointer hover:text-orange-500 transition-colors duration-300">
                                    About us
                                </span>
                            </Link>

                            <Link href="/aboutdev">
                                <span className="text-white text-xl font-semibold cursor-pointer hover:text-orange-500 transition-colors duration-300">
                                    <Code2 />
                                </span>
                            </Link>
                        </div>
                    </>
                )}
            </nav>
        </div>
    );
    }

    const NavigationWithSidebar = () => {
        return (
            <div className="flex flex-col fixed w-full z-50">
                <Navigation />
            </div>
        );
    };

    export default NavigationWithSidebar;
