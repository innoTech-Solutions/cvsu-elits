"use client"
import React, { useState } from "react";
import { Pagination, PaginationContent, PaginationItem, PaginationNext, PaginationPrevious } from "../ui/pagination";
import { jobPositions } from "@/config/data";

const JoinUs = ({ className }: { className: string }) => {
    const rowsPerPage = 3;
    const [startIndex, setStartIndex] = useState(0);
    const [endIndex, setEndIndex] = useState(rowsPerPage);

    return (
        <div
            className={`${className} relative`}
            style={{
                background: 'linear-gradient(to right, #80808012 1px, transparent 1px), linear-gradient(to bottom, #80808012 1px, transparent 1px)',
                backgroundSize: '24px 24px',
            }}
        >
            <div className="flex-col justify-center gap-12 mt-40 my-12">
                <div className="flex max-w-lg flex-col items-center mx-auto pb-12 space-y-2">
                    <h1 className="text-4xl font-black text-[#2F3233] mt-5 mb-2">
                        Be a part of the team!
                    </h1>
                    <p className="text-sm text-gray-800 text-center">
                        Whether you&apos;re interested in coding, AI, or just want
                        to learn more about how technology is shaping our world,
                        we&apos;d love to have you on board.
                    </p>
                </div>

                <div id="positions" className="flex flex-wrap justify-center items-center gap-4">
                    {jobPositions.slice(startIndex, endIndex).map((job, index) => (
                        <div key={index} className="w-96 h-60 overflow-hidden bg-[#2F3233] p-4 lg:p-8 flex flex-col justify-between items-center rounded-lg shadow-lg my-2">
                            <div className="flex items-end mb-3 w-full">
                            </div>
                            <div className="flex items-center gap-x-2">
                                <img
                                    className="w-16 h-16 object-cover"
                                    src="logo.svg" alt="Logo"
                                />
                                <div>
                                    <h3 className="text-xl font-bold text-gray-50">{job.position}</h3>
                                </div>
                            </div>
                            <div className="my-4 w-full">
                                <div className="text-sm font-medium">
                                    <ul className="list-disc list-inside">
                                        {job.requirements.map((requirement, index) => (
                                            <li key={index} className="text-gray-500">{requirement}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                            <div className="flex justify-end w-full items-center">
                                <button
                                    className="font-medium text-orange-500 transition-all duration-300 hover:text-orange-500/80"
                                >
                                    Join
                                </button>
                            </div>
                        </div>
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
                                    setStartIndex(Math.max(0, startIndex - rowsPerPage));
                                    setEndIndex(Math.max(rowsPerPage, endIndex - rowsPerPage));
                                }}
                            />
                        </PaginationItem>

                        <PaginationItem>
                            <PaginationNext
                                className={
                                    endIndex >= jobPositions.length
                                        ? "pointer-events-none opacity-50"
                                        : "cursor-pointer"
                                }
                                onClick={() => {
                                    setStartIndex(Math.min(jobPositions.length - rowsPerPage, startIndex + rowsPerPage));
                                    setEndIndex(Math.min(jobPositions.length, endIndex + rowsPerPage));
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

