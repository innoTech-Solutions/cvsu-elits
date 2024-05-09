"use client";
import React, { useEffect } from "react";
import { useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Events from "@/components/Landing Page/Events";

const EventsPage = () => {
    const controls = useAnimation();
    const { ref, inView } = useInView();

    useEffect(() => {
        if (inView) {
            controls.start({ opacity: 1, x: 0 });
        } else {
            controls.start({ opacity: 0, x: -100 });
        }
    }, [controls, inView]);

    return (
        <div ref={ref}>
            <div className="bg-[#2f3233] py-12 px-16 pd:px-24 lg:px-40">
                <h1 className="text-4xl font-black text-white pt-32 pb-12 ml-5">
                    Upcoming Events
                </h1>
            </div>

            <Events className="py-12 px-16 pd:px-24 lg:px-40" />
        </div>
    );
};

export default EventsPage;
