import { Eye } from "lucide-react";
import React from "react";
import { Button } from "../ui/button";

type NewsUpdate = {
    title: string;
    description: string;
    img: string[];
    views: number;
};

const Updates = () => {
    // can implement MDX for news viewing
    const newsAndUpdates: NewsUpdate[] = [
        {
            title: "New website just launched in 2024! Something new is going to be released in the wild!",
            description:
                "We are excited to announce the launch of our new website. We hope you enjoy the new look and feel of the site.",
            img: ["http://unsplash.it/800/600?random&gravity=center"],

            views: 100,
        },
        {
            title: "There is something going on with the problem of the CvSU, there is some thigns that needs to be addressed.",
            description:
                "We have updated our membership plans to include more benefits and perks. Check out our Membership page for more information.",
            img: ["http://unsplash.it/800/600?random&gravity=center"],
            views: 200,
        },
        {
            title: "Upcoming Events in CvSU there is something going to be happening!",
            description:
                "We have several events planned for the upcoming months. Stay tuned for more information.",
            img: ["http://unsplash.it/g/1920/1080?random&gravity=center"],
            views: 300,
        },
        {
            title: "New Product Launch this website is going to be used for the Elits 2024 and is largely used in the tech commmunity!",
            description:
                "We are thrilled to announce the launch of our new product. Check it out in our store.",
            img: ["http://unsplash.it/g/1920/1080?random&gravity=center"],
            views: 400,
        },
        {
            title: "Holiday Sale",
            description:
                "Our holiday sale is now live! Enjoy discounts on all items in our store.",
            img: ["http://unsplash.it/800/600?random&gravity=center"],
            views: 500,
        },
        {
            title: "New Blog Post",
            description:
                "Check out our latest blog post where we discuss the latest trends in our industry.",
            img: ["http://unsplash.it/800/600?random&gravity=center"],
            views: 600,
        },
        {
            title: "New Partnership",
            description:
                "We are excited to announce a new partnership with a leading company in our industry.",
            img: ["http://unsplash.it/800/600?random&gravity=center"],
            views: 700,
        },
        {
            title: "Event Recap",
            description:
                "Read our recap of the recent industry event we attended.",
            img: ["http://unsplash.it/300/300?random&gravity=center"],
            views: 800,
        },
        {
            title: "Interview with CEO",
            description:
                "Read our new interview with our CEO where they discuss the future of our company.",
            img: ["http://unsplash.it/300/300?random&gravity=center"],
            views: 900,
        },
        {
            title: "New Office Opening",
            description:
                "We are excited to announce the opening of our new office.",
            img: [
                "https://images.unsplash.com/photo-1632213666824-4b3b3b3b3b3b",
            ],
            views: 1000,
        },
        {
            title: "Community Event",
            description:
                "Join us for our upcoming community event. We hope to see you there!",
            img: [
                "https://images.unsplash.com/photo-1632213666824-4b3b3b3b3b3b",
            ],
            views: 1100,
        },
        {
            title: "Year in Review",
            description:
                "Read our year in review where we reflect on our accomplishments over the past year.",
            img: [
                "https://images.unsplash.com/photo-1632213666824-4b3b3b3b3b3b",
            ],
            views: 1200,
        },
    ];

    return (
        <div className="h-screen">
            <h1 className="text-2xl font-bold py-4">Updates & News</h1>

            <div className="flex flex-col lg:flex-row gap-4">
                {/* LARGE NEWS (1) */}
                <div className="w-full lg:w-1/2 flex flex-col">
                    <img
                        className="rounded-xl bg-pink-500"
                        src={newsAndUpdates[0].img[0]}
                        alt={`${newsAndUpdates[0].title}.img`}
                    />
                    <h2 className="text-lg font-bold">
                        {newsAndUpdates[0].title}
                    </h2>
                    <p className="flex flex-row items-center  gap-2">
                        <Eye size={16} /> {newsAndUpdates[0].views}
                    </p>
                </div>

                {/* SMALL NEWS (3) */}

                <div className="flex w-full flex-row lg:w-1/2 lg:flex-col gap-4">
                    {newsAndUpdates.slice(1, 4).map((news, index) => (
                        <div
                            key={index}
                            className="w-full flex flex-col lg:flex-row"
                        >
                            <img
                                className="rounded-xl bg-blue-500 w-52 h-52 object-cover"
                                src={news.img[0]}
                                alt={`${news.title}.img`}
                            />
                            <div className="lg:mx-4">
                                <h2 className="text-lg font-bold">
                                    {news.title}
                                </h2>
                                <p className="flex flex-row items-center  gap-2">
                                    <Eye size={16} /> {news.views}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            {/* THE REST (6) */}

            <div className="flex justify-end cursor-pointer">
                <Button variant={"ghost"} className="border-black border">
                    View all
                </Button>
            </div>
        </div>
    );
};

export default Updates;
