type NewsUpdate = {
    title: string;
    description: string;
    img: string[];
    views: number;
    authorName: string;
    datePosted: string;
};

export const newsAndUpdates: NewsUpdate[] = [
    {
        title: "New website just launched in 2024! Something new is going to be released in the wild!",
        description:
            "We are excited to announce the launch of our new website. We hope you enjoy the new look and feel of the site. We are excited to announce the launch of our new website. We hope you enjoy the new look and feel of the site. We are excited to announce the launch of our new website. We hope you enjoy the new look and feel of the site.",
        img: ["http://unsplash.it/800/600?random&gravity=center"],

        views: 100,
        authorName: "John Doe",
        datePosted: new Date().toISOString(),
    },
    {
        title: "There is something going on with the problem of the CvSU, there is some thigns that needs to be addressed.",
        description:
            "We have updated our membership plans to include more benefits and perks. Check out our Membership page for more information.",
        img: ["http://unsplash.it/800/600?random&gravity=center"],
        views: 200,
        authorName: "John Doe",
        datePosted: new Date().toISOString(),
    },
    {
        title: "Upcoming Events in CvSU there is something going to be happening!",
        description:
            "We have several events planned for the upcoming months. Stay tuned for more information.",
        img: ["http://unsplash.it/g/1920/1080?random&gravity=center"],
        views: 300,
        authorName: "John Doe",
        datePosted: new Date().toISOString(),
    },
    {
        title: "New Product Launch this website is going to be used for the Elits 2024 and is largely used in the tech commmunity!",
        description:
            "We are thrilled to announce the launch of our new product. Check it out in our store.",
        img: ["http://unsplash.it/g/1920/1080?random&gravity=center"],
        views: 400,
        authorName: "John Doe",
        datePosted: new Date().toISOString(),
    },
    {
        title: "Holiday Sale",
        description:
            "Our holiday sale is now live! Enjoy discounts on all items in our store.",
        img: ["http://unsplash.it/800/600?random&gravity=center"],
        views: 500,
        authorName: "John Doe",
        datePosted: new Date().toISOString(),
    },
    {
        title: "New Blog Post",
        description:
            "Check out our latest blog post where we discuss the latest trends in our industry.",
        img: ["http://unsplash.it/800/600?random&gravity=center"],
        views: 600,
        authorName: "John Doe",
        datePosted: new Date().toISOString(),
    },
    {
        title: "New Partnership",
        description:
            "We are excited to announce a new partnership with a leading company in our industry.",
        img: ["http://unsplash.it/800/600?random&gravity=center"],
        views: 700,
        authorName: "John Doe",
        datePosted: new Date().toISOString(),
    },
    {
        title: "Event Recap",
        description: "Read our recap of the recent industry event we attended.",
        img: ["http://unsplash.it/300/300?random&gravity=center"],
        views: 800,
        authorName: "John Doe",
        datePosted: new Date().toISOString(),
    },
    {
        title: "Interview with CEO",
        description:
            "Read our new interview with our CEO where they discuss the future of our company.",
        img: ["http://unsplash.it/300/300?random&gravity=center"],
        views: 900,
        authorName: "John Doe",
        datePosted: new Date().toISOString(),
    },
    {
        title: "New Office Opening",
        description:
            "We are excited to announce the opening of our new office.",
        img: ["https://images.unsplash.com/photo-1632213666824-4b3b3b3b3b3b"],
        views: 1000,
        authorName: "John Doe",
        datePosted: new Date().toISOString(),
    },
    {
        title: "Community Event",
        description:
            "Join us for our upcoming community event. We hope to see you there!",
        img: ["https://images.unsplash.com/photo-1632213666824-4b3b3b3b3b3b"],
        views: 1100,
        authorName: "John Doe",
        datePosted: new Date().toISOString(),
    },
    {
        title: "Year in Review",
        description:
            "Read our year in review where we reflect on our accomplishments over the past year.",
        img: ["https://images.unsplash.com/photo-1632213666824-4b3b3b3b3b3b"],
        views: 1200,
        authorName: "John Doe",
        datePosted: new Date().toISOString(),
    },
];
