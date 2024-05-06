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

type JobPosition = {
    position: string;
    isOpen: boolean;
    requirements: string[];
};



export const jobPositions: JobPosition[] = [
    {
        position: "Web Developer",
        isOpen: true,
        requirements: ["JavaScript", "Knowledge of React"],
    },
    {
        position: "Graphic Designer",
        isOpen: true,
        requirements: [
            "Proficiency in Adobe Creative Suite",
            "Understanding of design principles",
        ],
    },
    {
        position: "Project Manager",
        isOpen: false,
        requirements: [
            "Experience in project management",
            "Excellent organizational skills",
        ],
    },
    {
        position: "Marketing Specialist",
        isOpen: false,
        requirements: [
            "Experience in marketing",
            "Knowledge of marketing strategies",
        ],
    },
    {
        position: "Event Coordinator",
        isOpen: true,
        requirements: [
            "Experience in event planning",
            "Excellent communication skills",
        ],
    },

    {
        position: "Data Analyst",
        isOpen: true,
        requirements: [
            "Experience with data analysis tools",
            "Knowledge of SQL",
        ],
    },
    {
        position: "Network Administrator",
        isOpen: false,
        requirements: [
            "Experience with network infrastructure",
            "Knowledge of network protocols",
        ],
    },
    {
        position: "Database Manager",
        isOpen: true,
        requirements: [
            "Experience with database management",
            "Knowledge of SQL",
        ],
    },
    {
        position: "Security Analyst",
        isOpen: false,
        requirements: [
            "Experience with cybersecurity",
            "Knowledge of security protocols",
        ],
    },
    {
        position: "Systems Analyst",
        isOpen: true,
        requirements: [
            "Experience with system analysis",
            "Knowledge of system architectures",
        ],
    },
    {
        position: "IT Coordinator",
        isOpen: true,
        requirements: [
            "Experience in IT coordination",
            "Excellent organizational skills",
        ],
    },
    {
        position: "Software Engineer",
        isOpen: false,
        requirements: [
            "Experience with software development",
            "Knowledge of programming languages",
        ],
    },
    {
        position: "Hardware Engineer",
        isOpen: true,
        requirements: [
            "Experience with hardware engineering",
            "Knowledge of hardware components",
        ],
    },
    {
        position: "Cloud Architect",
        isOpen: false,
        requirements: [
            "Experience with cloud services",
            "Knowledge of cloud architectures",
        ],
    },
    {
        position: "IT Support Specialist",
        isOpen: true,
        requirements: [
            "Experience in IT support",
            "Excellent communication skills",
        ],
    },
];

type UpcomingEvents = {
    title: string;
    description: string;
    img: string[];
    when: string;
    where: string;
    category: string;
};

export const upcomingEvents: UpcomingEvents[] = [
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