import React from "react";

const team = [
    {
        position: "Core",
        name: "John Doe",
        img: "https://randomuser.me/api/portraits/men/1.jpg",
    },
    {
        position: "Human Resources Development Committee",
        name: "Jane Smith",
        img: "https://randomuser.me/api/portraits/women/1.jpg",
    },
    {
        position: "Research and Development Committee",
        name: "Bob Johnson",
        img: "https://randomuser.me/api/portraits/men/2.jpg",
    },
    {
        position: "Core",
        name: "Team Member 15",
        img: "https://randomuser.me/api/portraits/men/15.jpg",
    },
];

const AboutUs = ({ className }: { className: string }) => {
    const Member = ({
        position,
        name,
        img,
    }: {
        position: string;
        name: string;
        img: string;
    }) => {
        return (
            <div className="">
                <img
                    className="w-48 h-48 rounded-full my-4"
                    alt="person_image"
                    src={img}
                />
                <h1 className="text-xl">{name}</h1>
                <h2 className="text-base">{position}</h2>
            </div>
        );
    };

    const Team = ({ committee }: { committee: string }) => {
        return (
            <>
                <h3 className="text-gray-800 text-xs my-4">{committee}</h3>
                <div className="p-8 grid grid-cols-2 lg:grid-cols-3">
                    {team.map(
                        (member, index) =>
                            member.position === committee && (
                                <Member
                                    key={index}
                                    position={member.position}
                                    name={member.name}
                                    img={member.img}
                                />
                            )
                    )}
                </div>
            </>
        );
    };

    return (
        <div className={`${className} flex flex-row`}>
            <div>
                <h1 className={`text-4xl`}>People</h1>
                <h2 className={`text-2xl text-gray-800`}>
                    The great minds behind our work
                </h2>
            </div>

            <div>
                <h3 className="text-gray-800 text-xs my-4">
                    Academics Committee
                </h3>
                <div className="p-8 grid grid-cols-2 lg:grid-cols-3">
                    {/* <Person /> */}
                </div>
            </div>
        </div>
    );
};

export default AboutUs;
