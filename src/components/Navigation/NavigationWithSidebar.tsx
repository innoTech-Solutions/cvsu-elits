"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Code, Code2 } from "lucide-react";

function Navigation() {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };

        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <nav className="bg-[#2F3233] flex items-center justify-between px-8 py-2 w-full drop-shadow-xl">
            <div className="flex items-center cursor-pointer">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="logo.svg" alt="Logo" className="h-auto w-12 mr-2" />
                <span className="text-white font-black text-2xl">ELITS</span>
            </div>

            {!isMobile && (
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

            <div className="mr-4 md:mr-10 md:hidden">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    className="text-white w-8 h-8 cursor-pointer"
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
        </nav>
    );
}

const NavigationWithSidebar: React.FC = () => {
    return (
        <div className="flex flex-col fixed w-full z-50">
            <Navigation />
        </div>
    );
};

export default NavigationWithSidebar;
