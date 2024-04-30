"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";

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
        <nav className="bg-[#2F3233] flex items-center justify-between p-4 w-full drop-shadow-xl">
            <div className="flex items-center cursor-pointer ml-4 md:ml-10">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                    src="logo.svg"
                    alt="Logo"
                    className="h-auto w-16 mr-2"
                />
                {isMobile ? null : (
                    <span className="text-white font-semibold text-2xl">
                        Elite League of Information
                        <br />
                        Technology Students
                    </span>
                )}
            </div>

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

            {!isMobile && (
                <div className="mr-4 md:mr-10">
                    <Link href="./WhoWeAre">
                        <span className="text-white text-xl font-semibold cursor-pointer hover:text-orange-500 transition-colors duration-300">
                            Who we are
                        </span>
                    </Link>
                </div>
            )}
        </nav>
    );
}

const NavigationWithSidebar: React.FC = () => {
    return (
        <div className="flex flex-col">
            <div className="flex-1">
                <Navigation />
            </div>
        </div>
    );
};

export default NavigationWithSidebar;
