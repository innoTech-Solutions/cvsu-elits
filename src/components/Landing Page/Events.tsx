"use client"
import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "../ui/carousel";
import { Calendar, MapPin } from "lucide-react";
import { Badge } from "../ui/badge";
import { upcomingEvents } from "@/config/data";
import { useInView } from "react-intersection-observer";
import Link from "next/link";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";

const Events = ({ className }: { className: string }) => {
    const controls = useAnimation();
    const { ref, inView } = useInView();

    useEffect(() => {
        if (inView) {
            controls.start({ opacity: 1, y: 0 });
        } else {
            controls.start({ opacity: 0, y: 100 });
        }
    }, [controls, inView]);

    const cardVariants = {
        hidden: { opacity: 0, y: 100 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 1.5, 
                delay: 0.2,
            },
        },
    };

    return (
        <div ref={ref} className={`${className} flex flex-col mt-20`}>
            <motion.div
                initial={{ opacity: 0, y: 100 }}
                animate={controls}
                transition={{ duration: 1.5, ease: "easeOut" }}
                className="mx-20"
            >
                <h1 className="text-4xl font-bold text-[#2F3233] py-8">Upcoming Events</h1>
                <Carousel
                    className="rounded-t-lg z-0"
                    opts={{
                        align: "start",
                    }}
                >
                    <div className="lg:block hidden absolute right-0 transform -translate-y-12 z-10 mr-12">
                        <CarouselPrevious size={"icon"} />
                        <CarouselNext size={"icon"} />
                    </div>
                    <CarouselContent className="-ml-4">
                        {upcomingEvents ? (
                            upcomingEvents.map((event, i) => (
                                <CarouselItem
                                    className="pl-4 h-96 lg:basis-1/3 xl:basis-1/4"
                                    key={i}
                                >
                                    <motion.div
                                        variants={cardVariants}
                                        initial="hidden"
                                        animate="visible"
                                        className="relative"
                                    >
                                        <Badge
                                            variant={"secondary"}
                                            className="absolute top-2 right-2"
                                        >
                                            {event.category}
                                        </Badge>
                                        <Card>
                                            <CardHeader>
                                                <motion.img
                                                    variants={cardVariants}
                                                    initial="hidden"
                                                    animate="visible"
                                                    className="w-full object-cover rounded-t-xl"
                                                    src={event.img[0]}
                                                    alt={"Carousel Image" + i}
                                                />
                                            </CardHeader>
                                            <CardContent className="h-[100px]">
                                                <CardTitle>{event.title}</CardTitle>
                                                <CardDescription>
                                                    <p className="flex flex-row">
                                                        <Calendar className="mr-2" size={16} />
                                                        {event.when}
                                                    </p>
                                                    <p className="flex flex-row">
                                                        <MapPin className="mr-2" size={16} />
                                                        {event.where}
                                                    </p>
                                                </CardDescription>
                                            </CardContent>
                                        </Card>
                                    </motion.div>
                                </CarouselItem>
                            ))
                        ) : (
                            <div className="w-1/2 h-64 object-cover rounded-t-lg mx-auto"></div>
                        )}
                    </CarouselContent>

                    <div className="lg:hidden block transform -translate-y-56">
                        <CarouselPrevious size={"icon"} />
                        <CarouselNext size={"icon"} />
                    </div>
                </Carousel>
            </motion.div>
            <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="self-end mt-10 mr-4 mb-4 lg:mr-10 bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded-md"
            >
                <Link href="/events">View More Events</Link>
            </motion.button>
        </div>
    );
};

export default Events;




