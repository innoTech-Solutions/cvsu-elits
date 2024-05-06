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
import { jobPositions } from "@/config/data";

const JoinUs = ({ className }: { className: string }) => {
    const rowsPerPage = 3;
    const [startIndex, setStartIndex] = useState(0);
    const [endIndex, setEndIndex] = useState(rowsPerPage);
    const [data, setData] = useState(jobPositions);

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
                    <h1 className="text-4xl font-black mb-2">
                        Be a part of the team!
                    </h1>
                    <p className="text-sm text-gray-800 text-center">
                        Whether you&apos;re interested in coding, AI, or just want
                        to learn more about how technology is shaping our world,
                        we&apos;d love to have you on board.{" "}
                    </p>
                </div>

                <div>
                    <div
                        id="positions"
                        className="flex flex-wrap justify-center items-center gap-4"
                    >
                        {data.slice(startIndex, endIndex).map((job, index) => (
                            <div key={index} className="w-96 h-60 overflow-hidden bg-[#f18700] p-8 rounded-lg [&>*]:my-2 flex flex-row justify-between items-end border-2 border-black shadow-lg">
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
        </div>
    );
};

export default JoinUs;