import Team from "@/components/AboutUs/Team";
import React from "react";

const AboutUs = () => {
    return (
        <div className="flex flex-col items-center max-w-4xl mx-auto py-24 gap-4">
            <div className="flex flex-col items-center gap-4 mt-4">
                <h1 className="text-6xl font-medium">Officers</h1>
                <h2 className="text-3xl text-gray-800 font-light text-center">
                    The great people <br /> behind the organization
                </h2>
            </div>

            <div className="flex flex-col gap-8 mt-8 w-full">
                <Team committee="Officer" />
                <Team committee="Member" />
            </div>
        </div>
    );
};

export default AboutUs;
