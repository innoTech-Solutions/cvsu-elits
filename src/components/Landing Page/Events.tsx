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

type UpcomingEvents = {
    title: string;
    description: string;
    img: string[];
    when: Date;
    where: string;
};

const upcomingEvents: UpcomingEvents[] = [
    {
        title: "UGames upcoming in CvSU!",
        description: "It is going to be the largest event ever!",
        img: ["http://unsplash.it/800/600?random&gravity=center"],
        when: new Date(),
        where: "CvSU Main Campus",
    },
    {
        title: "Tech Conference",
        description: "Join us for a day of tech talks and networking.",
        img: ["http://unsplash.it/800/600?random&gravity=center"],
        when: new Date(),
        where: "Tech Center",
    },
    {
        title: "Art Exhibition",
        description: "Experience the stunning artwork of local artists.",
        img: ["http://unsplash.it/800/600?random&gravity=center"],
        when: new Date(),
        where: "Art Gallery",
    },
    {
        title: "Music Festival",
        description: "Enjoy performances from your favorite artists.",
        img: ["http://unsplash.it/800/600?random&gravity=center"],
        when: new Date(),
        where: "Music Park",
    },
    {
        title: "Food Fair",
        description: "Taste delicious food from around the world.",
        img: ["http://unsplash.it/800/600?random&gravity=center"],
        when: new Date(),
        where: "Food Court",
    },
    {
        title: "Book Fair",
        description: "Discover new books and meet your favorite authors.",
        img: ["http://unsplash.it/800/600?random&gravity=center"],
        when: new Date(),
        where: "Library",
    },
    {
        title: "Charity Run",
        description: "Run for a good cause.",
        img: ["http://unsplash.it/800/600?random&gravity=center"],
        when: new Date(),
        where: "City Park",
    },
    {
        title: "Film Festival",
        description: "Watch the premieres of new films.",
        img: ["http://unsplash.it/800/600?random&gravity=center"],
        when: new Date(),
        where: "Cinema",
    },
    {
        title: "Fashion Show",
        description: "See the latest fashion trends.",
        img: ["http://unsplash.it/800/600?random&gravity=center"],
        when: new Date(),
        where: "Fashion Center",
    },
    {
        title: "Science Fair",
        description: "Explore exciting new scientific discoveries.",
        img: ["http://unsplash.it/800/600?random&gravity=center"],
        when: new Date(),
        where: "Science Museum",
    },
    {
        title: "Business Expo",
        description: "Learn about new business opportunities.",
        img: ["http://unsplash.it/800/600?random&gravity=center"],
        when: new Date(),
        where: "Expo Center",
    },
    {
        title: "Health and Wellness Fair",
        description: "Discover ways to improve your health and wellness.",
        img: ["http://unsplash.it/800/600?random&gravity=center"],
        when: new Date(),
        where: "Health Center",
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
                                    <img
                                        className="w-full h-64 object-cover rounded-t-xl"
                                        src={event.img[0]}
                                        alt={"Carousel Image" + i}
                                    />
                                    <div className="rounded-t-2xl translate -translate-y-4 bg-white p-2">
                                        <h2 className="text-lg font-bold">
                                            {event.title}
                                        </h2>

                                        <p className="flex flex-row">
                                            <Calendar
                                                className="mr-2"
                                                size={16}
                                            />
                                            {event.when.toLocaleDateString()} at{" "}
                                            {event.when.toLocaleTimeString()}
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
