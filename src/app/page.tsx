"use client"
import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MouseEventHandler } from "react";
import Awards from "@/components/Landing Page/Awards";
import Events from "@/components/Landing Page/Events";
import HeroSection from "@/components/Landing Page/HeroSection";
import History from "@/components/Landing Page/History";
import JoinUs from "@/components/Landing Page/JoinUs";
import Updates from "@/components/Landing Page/Updates";
import Sidebar from "@/components/Sidebar";

export default function Home() {
    const [showSidebar, setShowSidebar] = useState(false);
    const sidebarRef = useRef(null);
    const timeoutRef = useRef<NodeJS.Timeout | null>(null);

    const handleMouseMove: MouseEventHandler<HTMLDivElement> = (e) => {
        if (e.clientX <= 20) {
            setShowSidebar(true);
            if (timeoutRef.current) {
                clearTimeout(timeoutRef.current);
            }
            timeoutRef.current = setTimeout(() => {
                setShowSidebar(false);
            }, 5000); 
        }
    };

    useEffect(() => {
        return () => {
            if (timeoutRef.current) {
                clearTimeout(timeoutRef.current);
            }
        };
    }, []);

    return (
        <div onMouseMove={handleMouseMove}>
            <AnimatePresence>
                {showSidebar && (
                    <motion.div
                        ref={sidebarRef}
                        className="fixed left-0 z-50 top-1/2 transform -translate-y-1/2"
                        initial={{ opacity: 0, x: "-100%" }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: "-100%" }}
                        transition={{ duration: 0.2 }}
                    >
                        <Sidebar />
                    </motion.div>
                )}
            </AnimatePresence>

            <div id="hero">
                <HeroSection />
            </div>

            <div id="history">
                <History />
            </div>

            <div id="awards">
                <Awards />
            </div>

            <div id="updates">
                <Updates className="min-h-screen my-4" />
            </div>

            <div id="events">
                <Events className="my-4" />
            </div>

            <div id="joinus">
                <JoinUs className="min-h-screen my-4"/>
            </div>
        </div>
    );
}
