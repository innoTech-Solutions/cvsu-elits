import Team from "@/components/AboutUs/Team";
import React from "react";

const AboutUs = () => {
    return (
        <div className="flex flex-row max-w-4xl mx-auto py-24 gap-4">
            <div className="gap-4 flex flex-col mt-4">
                <h1 className="text-6xl font-medium">Officers</h1>
                <h2 className="text-3xl text-gray-800 font-light">
                    The great people <br /> behind the organization
                </h2>
            </div>

            <div className="flex flex-col gap-4">
                <Team committee="Core" />
                <Team committee="Academics Committee" />
                <Team committee="Research Committee" />
            </div>
        </div>
    );
};

export default AboutUs;
