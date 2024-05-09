"use client"
import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { Button } from "../ui/button";
import Link from "next/link";
import { newsAndUpdates } from "@/config/data";
import { useInView } from "react-intersection-observer";

const Updates = ({ className }: { className: string }) => {
    
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
        <div ref={ref} className={`${className}`}>
            <h1 className="text-4xl font-bold text-[#2F3233] py-8 ml-5">Latest news</h1>

            <div className="flex flex-col lg:flex-row gap-4 ml-5">
                {/* LARGE NEWS (1) */}
                <Link href={""} className="w-full lg:w-1/2 flex flex-col">
                    <motion.img
                        initial={{ opacity: 0, x: -100 }}
                        animate={controls}
                        transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
                        className="rounded-xl"
                        src={newsAndUpdates[0].img[0]}
                        alt={`${newsAndUpdates[0].title}.img`}
                    />

                    <div className="flex flex-row gap-2 pt-2">
                        <motion.p
                            initial={{ opacity: 0, x: -100 }}
                            animate={controls}
                            transition={{ duration: 1, delay: 0.7, ease: "easeOut" }}
                        >
                            {newsAndUpdates[0].authorName} {" "}
                            {new Date(
                                newsAndUpdates[0].datePosted
                            ).toLocaleDateString("en-US", {
                                year: "numeric",
                                month: "2-digit",
                                day: "2-digit",
                            })}
                        </motion.p>
                    </div>

                    <motion.h2
                        initial={{ opacity: 0, x: -100 }}
                        animate={controls}
                        transition={{ duration: 1, delay: 0.9, ease: "easeOut" }}
                        className="text-lg font-bold"
                    >
                        {newsAndUpdates[0].title}
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, x: -100 }}
                        animate={controls}
                        transition={{ duration: 1, delay: 1.1, ease: "easeOut" }}
                    >
                        {newsAndUpdates[0].description.slice(0, 300) + "..."}
                    </motion.p>
                </Link>

                {/* SMALL NEWS (3) */}

                <div className="flex w-full flex-row lg:w-1/2 lg:flex-col gap-4">
                    {newsAndUpdates.slice(1, 4).map((news, index) => (
                        <Link
                            href={""}
                            key={index}
                            className="w-52 h-full lg:h-full lg:w-full flex flex-col lg:flex-row"
                        >
                            <motion.img
                                initial={{ opacity: 0, x: 100 }}
                                animate={controls}
                                transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
                                className="rounded-xl w-52 h-52 object-cover"
                                src={news.img[0]}
                                alt={`${news.title}.img`}
                            />

                            <div className="lg:mx-4 flex flex-col overflow-hidden">
                                <motion.p
                                    initial={{ opacity: 0, x: 100 }}
                                    animate={controls}
                                    transition={{ duration: 1, delay: 0.7, ease: "easeOut" }}
                                >
                                    {newsAndUpdates[0].authorName} •{" "}
                                    {new Date(
                                        newsAndUpdates[0].datePosted
                                    ).toLocaleDateString("en-US", {
                                        year: "numeric",
                                        month: "2-digit",
                                        day: "2-digit",
                                    })}
                                </motion.p>
                                <motion.h2
                                    initial={{ opacity: 0, x: 100 }}
                                    animate={controls}
                                    transition={{ duration: 1, delay: 0.9, ease: "easeOut" }}
                                    className="text-lg font-bold block md:hidden"
                                >
                                    {news.title.length > 30
                                        ? `${news.title.slice(0, 30)}...`
                                        : news.title}
                                </motion.h2>
                                <motion.h2
                                    initial={{ opacity: 0, x: 100 }}
                                    animate={controls}
                                    transition={{ duration: 1, delay: 0.9, ease: "easeOut" }}
                                    className="text-lg font-bold hidden md:block"
                                >
                                    {news.title.length > 100
                                        ? `${news.title.slice(0, 100)}...`
                                        : news.title}
                                </motion.h2>

                                <motion.p
                                    initial={{ opacity: 0, x: 100 }}
                                    animate={controls}
                                    transition={{ duration: 1, delay: 1.1, ease: "easeOut" }}
                                    className="block md:hidden"
                                >
                                    {news.description.length > 30
                                        ? `${news.description.slice(0, 30)}...`
                                        : news.description}
                                </motion.p>
                                <motion.p
                                    initial={{ opacity: 0, x: 100 }}
                                    animate={controls}
                                    transition={{ duration: 1, delay: 1.1, ease: "easeOut" }}
                                    className="hidden md:block"
                                >
                                    {news.description.length > 100
                                        ? `${news.description.slice(0, 100)}...`
                                        : news.description}
                                </motion.p>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
            {/* THE REST (6) */}

            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={controls}
                transition={{ duration: 1, delay: 1.3, ease: "easeOut" }}
                className="flex justify-end cursor-pointer"
            >
                <Link href='/news'>
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="self-end mb-10 bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded-md"
                    >
                        Read More
                    </motion.button>
                </Link>
            </motion.div>
        </div>
    );
};

export default Updates;



