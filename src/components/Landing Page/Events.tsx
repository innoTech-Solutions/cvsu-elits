import React from "react";
import { Card, CardContent, CardDescription, CardHeader } from "../ui/card";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "../ui/carousel";
import { Calendar, MapPin } from "lucide-react";
import { Badge } from "../ui/badge";

type UpcomingEvents = {
    title: string;
    description: string;
    img: string[];
    when: string;
    where: string;
    category: string;
};

const upcomingEvents: UpcomingEvents[] = [
    {
        title: "UGames upcoming in CvSU!",
        description: "It is going to be the largest event ever!",
        img: ["http://unsplash.it/800/600?random&gravity=center"],
        when: new Date(Date.now()).toLocaleDateString("en-US", {
            year: "numeric",
            month: "2-digit",
            day: "2-digit",
        }),
        where: "CvSU Main Campus",
        category: "Sports",
    },
    {
        title: "Tech Conference",
        description: "Join us for a day of tech talks and networking.",
        img: ["http://unsplash.it/800/600?random&gravity=center"],

        when: new Date(Date.now()).toLocaleDateString("en-US", {
            year: "numeric",
            month: "2-digit",
            day: "2-digit",
        }),

        where: "Tech Center",
        category: "Technology",
    },
    {
        title: "Art Exhibition",
        description: "Experience the stunning artwork of local artists.",
        img: ["http://unsplash.it/800/600?random&gravity=center"],

        when: new Date(Date.now()).toLocaleDateString("en-US", {
            year: "numeric",
            month: "2-digit",
            day: "2-digit",
        }),

        where: "Art Gallery",
        category: "Arts & Music",
    },
    {
        title: "Music Festival",
        description: "Enjoy performances from your favorite artists.",
        img: ["http://unsplash.it/800/600?random&gravity=center"],

        when: new Date(Date.now()).toLocaleDateString("en-US", {
            year: "numeric",
            month: "2-digit",
            day: "2-digit",
        }),

        where: "Music Park",
        category: "Arts & Music",
    },
    {
        title: "Food Fair",
        description: "Taste delicious food from around the world.",
        img: ["http://unsplash.it/800/600?random&gravity=center"],

        when: new Date(Date.now()).toLocaleDateString("en-US", {
            year: "numeric",
            month: "2-digit",
            day: "2-digit",
        }),

        where: "Food Court",
        category: "Food",
    },
    {
        title: "Book Fair",
        description: "Discover new books and meet your favorite authors.",
        img: ["http://unsplash.it/800/600?random&gravity=center"],

        when: new Date(Date.now()).toLocaleDateString("en-US", {
            year: "numeric",
            month: "2-digit",
            day: "2-digit",
        }),

        where: "Library",
        category: "Arts & Music",
    },
    {
        title: "Charity Run",
        description: "Run for a good cause.",
        img: ["http://unsplash.it/800/600?random&gravity=center"],

        when: new Date(Date.now()).toLocaleDateString("en-US", {
            year: "numeric",
            month: "2-digit",
            day: "2-digit",
        }),

        where: "City Park",
        category: "Arts & Music",
    },
    {
        title: "Film Festival",
        description: "Watch the premieres of new films.",
        img: ["http://unsplash.it/800/600?random&gravity=center"],

        when: new Date(Date.now()).toLocaleDateString("en-US", {
            year: "numeric",
            month: "2-digit",
            day: "2-digit",
        }),

        where: "Cinema",
        category: "Arts & Music",
    },
    {
        title: "Fashion Show",
        description: "See the latest fashion trends.",
        img: ["http://unsplash.it/800/600?random&gravity=center"],

        when: new Date(Date.now()).toLocaleDateString("en-US", {
            year: "numeric",
            month: "2-digit",
            day: "2-digit",
        }),

        where: "Fashion Center",
        category: "Arts & Music",
    },
    {
        title: "Science Fair",
        description: "Explore exciting new scientific discoveries.",
        img: ["http://unsplash.it/800/600?random&gravity=center"],

        when: new Date(Date.now()).toLocaleDateString("en-US", {
            year: "numeric",
            month: "2-digit",
            day: "2-digit",
        }),

        where: "Science Museum",
        category: "Technology",
    },
    {
        title: "Business Expo",
        description: "Learn about new business opportunities.",
        img: ["http://unsplash.it/800/600?random&gravity=center"],

        when: new Date(Date.now()).toLocaleDateString("en-US", {
            year: "numeric",
            month: "2-digit",
            day: "2-digit",
        }),

        where: "Expo Center",
        category: "Technology",
    },
    {
        title: "Health and Wellness Fair",
        description: "Discover ways to improve your health and wellness.",
        img: ["http://unsplash.it/800/600?random&gravity=center"],

        when: new Date(Date.now()).toLocaleDateString("en-US", {
            year: "numeric",
            month: "2-digit",
            day: "2-digit",
        }),

        where: "Health Center",
        category: "Technology",
    },
];

const Events = ({ className }: { className: string }) => {
    return (
        <div className={`${className}`}>
            <div>
                <h1 className="text-4xl font-bold py-8">Upcoming Events</h1>
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
                                    className="pl-4 basis-1/2 lg:basis-1/3 xl:basis-1/4"
                                    key={i}
                                >
                                    <div className="relative">
                                        <Badge
                                            variant={"secondary"}
                                            className="absolute top-2 right-2"
                                        >
                                            {event.category}
                                        </Badge>
                                        <img
                                            className="w-full h-64 object-cover rounded-t-xl"
                                            src={event.img[0]}
                                            alt={"Carousel Image" + i}
                                        />
                                    </div>

                                    <div className="rounded-t-2xl translate -translate-y-4 bg-white px-4 py-2">
                                        <h2 className="text-lg font-bold">
                                            {event.title}
                                        </h2>

                                        <p className="flex flex-row">
                                            <Calendar
                                                className="mr-2"
                                                size={16}
                                            />
                                            {event.when}
                                        </p>

                                        <p className="flex flex-row">
                                            <MapPin
                                                className="mr-2"
                                                size={16}
                                            />
                                            {event.where}
                                        </p>
                                    </div>
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
            </div>
        </div>
    );
};

export default Events;
