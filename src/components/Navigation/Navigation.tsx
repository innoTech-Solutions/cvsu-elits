"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Home, ShoppingCart, Info, Code2 } from "lucide-react";

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
        <>
            {!isMobile && (
                <>
                <nav className="bg-[#2F3233] bg-opacity-60 backdrop-blur-md flex items-center justify-between px-8 py-2 w-full drop-shadow-xl relative">
                    <div className="flex items-center cursor-pointer">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img src="logo.svg" alt="Logo" className="h-auto w-12 mr-2" />
                        <Link href="/">
                            <span className="text-white font-black text-2xl">
                                ELITS
                            </span>
                        </Link>
                    </div>
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
                </nav>
                </>
            )}

            {isMobile && (
                <nav className="fixed bottom-0 left-0 right-0 z-50 bg-[#2F3233] bg-opacity-60 backdrop-blur-md flex justify-around items-center py-2 w-full drop-shadow-xl">
                    <Link href="/" className="flex flex-col items-center">
                        <Home className="text-white w-6 h-6 cursor-pointer hover:text-orange-500 transition-colors duration-300" />
                        <span className="text-white text-xs">Home</span>
                    </Link>
                    <Link href="/shop" className="flex flex-col items-center">
                        <ShoppingCart className="text-white w-6 h-6 cursor-pointer hover:text-orange-500 transition-colors duration-300" />
                        <span className="text-white text-xs">Shop</span>
                    </Link>
                    <Link href="/aboutus" className="flex flex-col items-center">
                        <Info className="text-white w-6 h-6 cursor-pointer hover:text-orange-500 transition-colors duration-300" />
                        <span className="text-white text-xs">About us</span>
                    </Link>
                    <Link href="/aboutdev" className="flex flex-col items-center">
                        <Code2 className="text-white w-6 h-6 cursor-pointer hover:text-orange-500 transition-colors duration-300" />
                        <span className="text-white text-xs">About Dev</span>
                    </Link>
                </nav>
            )}
        </>
    );
}

export default Navigation;
