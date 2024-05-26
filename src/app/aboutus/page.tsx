import Team from "@/components/AboutUs/Team";
import React from "react";

const AboutUs = () => {
    return (
        <div className="flex flex-col items-center max-w-4xl mx-auto py-24 px-4 gap-4">
            <div className="flex flex-col items-center gap-4 mt-4 text-center">
                <h1 className="text-4xl sm:text-6xl font-medium"><span className="text-orange-500">Elite League of Information Technology Students</span> Stakeholders</h1>
                <h2 className="text-xl sm:text-3xl text-gray-800 font-light">
                    We are a group of students who are passionate about technology 
                    and its applications in the real world.
                </h2>
            </div>

            <div className="flex flex-col gap-8 mt-10 w-full cursor-pointer">
                <Team committee="Officer" />
                <Team committee="Member" />
            </div>
        </div>
    );
};

export default AboutUs;
