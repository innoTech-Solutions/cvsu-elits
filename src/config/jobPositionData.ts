type JobPosition = {
    id: number;
    position: string;
    isOpen: boolean;
    requirements: string[];
};

export const jobPositions: JobPosition[] = [
    {
        id: 1,
        position: "Web Developer",
        isOpen: true,
        requirements: ["JavaScript", "Knowledge of React"],
    },
    {
        id: 2,
        position: "Graphic Designer",
        isOpen: true,
        requirements: [
            "Proficiency in Adobe Creative Suite",
            "Understanding of design principles",
        ],
    },
    {
        id: 3,
        position: "Project Manager",
        isOpen: false,
        requirements: [
            "Experience in project management",
            "Excellent organizational skills",
        ],
    },
    {
        id: 4,
        position: "Marketing Specialist",
        isOpen: false,
        requirements: [
            "Experience in marketing",
            "Knowledge of marketing strategies",
        ],
    },
    {
        id: 5,
        position: "Event Coordinator",
        isOpen: true,
        requirements: [
            "Experience in event planning",
            "Excellent communication skills",
        ],
    },

    {
        id: 6,
        position: "Data Analyst",
        isOpen: true,
        requirements: [
            "Experience with data analysis tools",
            "Knowledge of SQL",
        ],
    },
    {
        id: 7,
        position: "Network Administrator",
        isOpen: false,
        requirements: [
            "Experience with network infrastructure",
            "Knowledge of network protocols",
        ],
    },
    {
        id: 8,
        position: "Database Manager",
        isOpen: true,
        requirements: [
            "Experience with database management",
            "Knowledge of SQL",
        ],
    },
    {
        id: 9,
        position: "Security Analyst",
        isOpen: false,
        requirements: [
            "Experience with cybersecurity",
            "Knowledge of security protocols",
        ],
    },
    {
        id: 10,
        position: "Systems Analyst",
        isOpen: true,
        requirements: [
            "Experience with system analysis",
            "Knowledge of system architectures",
        ],
    },
    {
        id: 11,
        position: "IT Coordinator",
        isOpen: true,
        requirements: [
            "Experience in IT coordination",
            "Excellent organizational skills",
        ],
    },
    {
        id: 12,
        position: "Software Engineer",
        isOpen: false,
        requirements: [
            "Experience with software development",
            "Knowledge of programming languages",
        ],
    },
    {
        id: 13,
        position: "Hardware Engineer",
        isOpen: true,
        requirements: [
            "Experience with hardware engineering",
            "Knowledge of hardware components",
        ],
    },
    {
        id: 14,
        position: "Cloud Architect",
        isOpen: false,
        requirements: [
            "Experience with cloud services",
            "Knowledge of cloud architectures",
        ],
    },
    {
        id: 15,
        position: "IT Support Specialist",
        isOpen: true,
        requirements: [
            "Experience in IT support",
            "Excellent communication skills",
        ],
    },
];