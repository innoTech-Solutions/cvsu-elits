"use client";
import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import Link from "next/link";
import { useInView } from "react-intersection-observer";
import { newsAndUpdates } from "@/config/data";
import { Badge } from "@/components/ui/badge";

const News = () => {
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
        <div ref={ref} className="">
            <div className="bg-[#2f3233] py-12 px-16 pd:px-24 lg:px-40">
                <h1 className="text-4xl font-black text-white pt-32 pb-12 ml-5">
                    News and Updates
                </h1>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8  py-12 px-16 pd:px-24 lg:px-40">
                {newsAndUpdates.map((news, index) => (
                    <Link
                        key={index}
                        href={""}
                        className=" w-80 rounded-xl shadow-md py-4"
                    >
                        <motion.img
                            initial={{ opacity: 0, x: -100 }}
                            animate={controls}
                            transition={{
                                duration: 1,
                                delay: 0.5,
                                ease: "easeOut",
                            }}
                            className="rounded-t-xl w-80 h-52"
                            src={news.img[0]}
                            alt={`${news.title}.img`}
                        />

                        <div className="flex flex-row gap-2 py-2 px-4 ">
                            <motion.p
                                initial={{ opacity: 0, x: -100 }}
                                animate={controls}
                                transition={{
                                    duration: 1,
                                    delay: 0.7,
                                    ease: "easeOut",
                                }}
                                className="text-sm font-bold text-gray-500 gap-2 flex flex-row items-center "
                            >
                                <Badge>
                                    {new Date(
                                        news.datePosted
                                    ).toLocaleDateString("en-US", {
                                        year: "numeric",
                                        month: "2-digit",
                                        day: "2-digit",
                                    })}
                                </Badge>
                                {news.authorName}
                            </motion.p>
                        </div>

                        <div className=" px-4 ">
                            <motion.h2
                                initial={{ opacity: 0, x: -100 }}
                                animate={controls}
                                transition={{
                                    duration: 1,
                                    delay: 0.9,
                                    ease: "easeOut",
                                }}
                                className="text-lg font-bold"
                            >
                                {news.title}
                            </motion.h2>

                            <motion.p
                                initial={{ opacity: 0, x: -100 }}
                                animate={controls}
                                transition={{
                                    duration: 1,
                                    delay: 1.1,
                                    ease: "easeOut",
                                }}
                            >
                                {news.description.slice(0, 100) + "..."}
                            </motion.p>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default News;
