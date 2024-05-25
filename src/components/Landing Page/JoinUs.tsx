import React, { useState } from "react";
import { Pagination, PaginationContent, PaginationItem, PaginationNext, PaginationPrevious } from "../ui/pagination";
import { positions } from "@/config/jobPositionData";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";

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
                
                    {positions.slice(startIndex, endIndex).map((job, index) => (
                        <motion.div 
                        key={job.id} 
                        className="w-96 h-72 overflow-hidden bg-[#2F3233] p-4 lg:p-8 flex flex-col justify-between items-start rounded-lg shadow-lg my-2 text-white"
                        initial={{ opacity : 0, y: -50}}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 50 }}
                        transition={{ duration: 0.5 }}>
                            <AnimatePresence>
                            <div className="flex items-center gap-x-2 mb-4">
                                <Image
                                    className="w-16 h-16 object-cover"
                                    src="logo.svg" alt="Logo"
                                />
                                <div>
                                    <h3 className="text-xl font-bold">{job.position}</h3>
                                </div>
                            </div>

                            <div className="my-4 w-full">
                                <ul className="text-sm font-medium list-disc list-inside">
                                    {job.requirements.map((requirement, index) => (
                                        <li key={index} className="text-[#f18700]">{requirement}</li>
                                    ))}
                                </ul>
                            </div>
                            <div className="flex justify-end w-full items-center mt-4">
                                <button
                                    className="font-medium text-white bg-orange-500 transition-all duration-300 hover:bg-orange-500/80 px-4 py-2 rounded"
                                >
                                    Apply Now
                                </button>
                            </div>
                            </AnimatePresence>
                        </motion.div>
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
                                    endIndex >= positions.length
                                        ? "pointer-events-none opacity-50"
                                        : "cursor-pointer"
                                }
                                onClick={() => {
                                    setStartIndex(Math.min(positions.length - rowsPerPage, startIndex + rowsPerPage));
                                    setEndIndex(Math.min(positions.length, endIndex + rowsPerPage));
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
