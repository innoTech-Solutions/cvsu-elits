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