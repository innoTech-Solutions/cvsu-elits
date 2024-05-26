type Position = {
    id: number;
    position: string;
    isOpen: boolean;
    requirements: string[];
};

export const positions: Position[] = [
    {
        id: 1,
        position: "Tech Club President",
        isOpen: true,
        requirements: [
            "Leadership skills",
            "Experience in organizing tech-related activities",
        ],
    },
    {
        id: 2,
        position: "Tech Club Vice President",
        isOpen: false,
        requirements: [
            "Assist the President in organizing activities",
            "Coordinate with members and advisors",
        ],
    },
    {
        id: 3,
        position: "Tech Club Treasurer",
        isOpen: true,
        requirements: [
            "Financial management skills",
            "Experience in budgeting for related events",
        ],
    },
    {
        id: 4,
        position: "Tech Club Secretary",
        isOpen: false,
        requirements: [
            "Record-keeping and organizational skills",
            "Assist in communication with members",
        ],
    },
    {
        id: 5,
        position: "Tech Event Coordinator",
        isOpen: true,
        requirements: [
            "Experience in organizing tech events",
            "Ability to collaborate with other organizations",
        ],
    },
    {
        id: 6,
        position: "Tech Workshop Facilitator",
        isOpen: true,
        requirements: [
            "Experience in conducting tech workshops",
            "Ability to teach and engage with students",
        ],
    },
    {
        id: 7,
        position: "Tech Mentor",
        isOpen: false,
        requirements: [
            "Experience in mentoring students in tech",
            "Ability to provide guidance and support",
        ],
    },
    {
        id: 8,
        position: "Tech Content Creator",
        isOpen: true,
        requirements: [
            "Ability to create engaging tech-related content",
            "Experience in online platforms",
        ],
    },
    {
        id: 9,
        position: "Tech Support Specialist",
        isOpen: false,
        requirements: [
            "Experience in providing tech support",
            "Ability to troubleshoot tech issues",
        ],
    },
    {
        id: 10,
        position: "Tech Club Member",
        isOpen: true,
        requirements: [
            "Interest in technology",
            "Willingness to participate in club activities",
        ],
    },
];
