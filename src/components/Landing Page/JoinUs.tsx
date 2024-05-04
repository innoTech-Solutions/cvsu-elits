import React, { useState } from "react";
import { Button } from "../ui/button";
import Link from "next/link";
import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from "../ui/pagination";
import { Badge } from "../ui/badge";
import { Separator } from "../ui/separator";

type JobPosition = {
    position: string;
    isOpen: boolean;
    requirements: string[];
};

const jobPositions = [
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

const JoinUs = ({ className }: { className: string }) => {
    const rowsPerPage = 3;
    const [startIndex, setStartIndex] = useState(0);
    const [endIndex, setEndIndex] = useState(rowsPerPage);
    const [data, setData] = useState<JobPosition[]>(jobPositions);

    return (
        <div className={`${className} flex-col justify-center gap-12 mt-40 my-12`}>
            <div className="flex max-w-lg flex-col items-center mx-auto pb-12 space-y-2">
                <h1 className="text-4xl font-black mb-2">
                    Be a part of the team!
                </h1>
                <p className="text-sm text-gray-800 text-center">
                    Whether you&apos;re interested in coding, AI, or just want
                    to learn more about how technology is shaping our world,
                    we&apos;d love to have you on board.{" "}
                </p>

                {/* <Link href={"#positions"}>
                    <Button className="px-8 py-4 bg-[#f18700] hover:bg-[#ef941e] text-black">
                        Join Now
                    </Button>
                </Link> */}
            </div>

            <div>
                <div
                    id="positions"
                    className="flex flex-wrap justify-center items-center gap-4"
                >
                    {data.slice(startIndex, endIndex).map((job, index) => (
                        <>
                            <div className="w-96 h-60 overflow-hidden bg-[#f18700] p-8 rounded-lg [&>*]:my-2 flex flex-row justify-between items-end border-2 border-black shadow-lg">
                                <div className="flex flex-col w-full">
                                    <h1 className="font-bold text-xl">
                                        {job.position}
                                    </h1>

                                    <div className="text-md">
                                        <h1 className="text-sm font-normal">
                                            Requirements
                                        </h1>
                                        {job.requirements.map(
                                            (requirement, index) => (
                                                <Badge key={index}>
                                                    {requirement}
                                                </Badge>
                                            )
                                        )}
                                        <div className="flex justify-center mt-4">
                                            <Button
                                                className=" px-8 bg-[#2f3233] hover:bg-[#232526]"
                                                disabled={job.isOpen}
                                            >
                                                Apply now
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </>
                    ))}
                </div>

                <Pagination>
                    <PaginationContent>
                        <PaginationItem>
                            <PaginationPrevious
                                className={
                                    startIndex === 0
                                        ? "pointer-events-none opacity-50"
                                        : "cursor-pointer"
                                }
                                onClick={() => {
                                    setStartIndex(startIndex - rowsPerPage);
                                    setEndIndex(endIndex - rowsPerPage);
                                }}
                            />
                        </PaginationItem>

                        <PaginationItem>
                            <PaginationNext
                                className={
                                    endIndex === data.length
                                        ? "pointer-events-none opacity-50"
                                        : "cursor-pointer"
                                }
                                onClick={() => {
                                    setStartIndex(startIndex + rowsPerPage);
                                    setEndIndex(endIndex + rowsPerPage);
                                }}
                            />
                        </PaginationItem>
                    </PaginationContent>
                </Pagination>
            </div>
        </div>
    );
};

export default JoinUs;
