import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Awards = () => {
    const awardsData = [
        {
            title: "Academic Excellence Award",
            description: "Awarded to students with outstanding academic performance.",
            achievements: 5,
        },
        {
            title: "Leadership Award",
            description: "Recognizing exceptional leadership skills and contributions.",
            achievements: 3,
        },
        {
            title: "Sports Achievement Award",
            description: "Honoring outstanding performance in sports.",
            achievements: 7,
        },
    ];

    const controls = useAnimation();
    const { ref, inView } = useInView();

    useEffect(() => {
        if (inView) {
            controls.start((i) => ({
                opacity: 1,
                x: 0,
                transition: { duration: 1, delay: i * 0.3 },
            }));
        } else {
            controls.start({ opacity: 0, x: -100 });
        }
    }, [controls, inView]);

    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        handleResize();

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return (
        <div ref={ref} className="min-h-screen flex flex-col items-center justify-center bg-gray-100 relative">
            <h1 className="text-4xl font-bold text-[#2F3233] py-8">Top Awards</h1>
            <div className={`grid grid-cols-1 sm:grid-cols-${isMobile ? '1' : '2'} md:grid-cols-3 lg:grid-cols-3 gap-4 mx-12`}>
                {awardsData.map((award, index) => (
                    <motion.div
                        key={index}
                        className="relative bg-white shadow-md rounded-md p-4 cursor-pointer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        transition={{ duration: 0.3 }}
                        initial={{ opacity: 0, x: -100 }}
                        animate={controls}
                    >
                        <CardHeader>
                            <CardTitle className="text-4xl lg:text-2xl text-orange-500 font-semibold">{award.title}</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <CardDescription className="text-lg lg:text-md text-gray-700">{award.description}</CardDescription>
                            <p className="text-2xl lg:text-lg text-gray-500 mt-2">
                                <span className="font-bold text-5xl text-yellow-500">{award.achievements}</span> Achievements
                            </p>
                        </CardContent>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default Awards;
