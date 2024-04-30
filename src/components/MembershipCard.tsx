"use client"

import { motion } from "framer-motion";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "./ui/card";
import { Button } from "./ui/button";

interface MembershipCardProps {
    type: string;
    perks: string[];
    eventDiscounts: string;
    price: string;
    accessToResources: string[];
    backgroundColor?: string; // Optional prop for custom background color
}

const MembershipCard = ({
    type,
    perks,
    eventDiscounts,
    price,
    accessToResources,
    backgroundColor = "", // Default to empty string
}: MembershipCardProps) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center justify-center w-full"
        >
            <div className="flex justify-center w-full">
                <div className="w-80 flex-shrink-0">
                    <Card
                        className={`shadow-lg rounded-lg overflow-hidden flex flex-col justify-between h-full ${
                            backgroundColor ||
                            (type.toLowerCase() === "gold membership"
                                ? "bg-[#FFEE51]"
                                : type.toLowerCase() === "silver membership"
                                ? "bg-[#ACACAB]"
                                : "bg-[#F6F6F4]")
                        }`}
                    >
                        <CardHeader className="bg-gray-700 text-white py-4 px-6">
                            <CardTitle>{type}</CardTitle>
                        </CardHeader>
                        <CardContent className="py-4 px-6 flex-grow">
                            <CardDescription>
                                <ul className="list-disc pl-4 mb-4">
                                    {perks.map((perk, index) => (
                                        <li key={index} className="font-bold">
                                            {perk}
                                        </li>
                                    ))}
                                </ul>
                                <p className="font-bold">Event Discounts: {eventDiscounts}</p>
                                <p className="font-bold">Price: {price}</p>
                                <ul className="list-disc pl-4 mb-4">
                                    {accessToResources.map((resource, index) => (
                                        <li key={index} className="font-bold">
                                            {resource}
                                        </li>
                                    ))}
                                </ul>
                            </CardDescription>
                        </CardContent>
                        <CardFooter className="bg-gray-800 py-4 px-6">
                            <Button className="mt-4 w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded">
                                Buy
                            </Button>
                        </CardFooter>
                    </Card>
                </div>
            </div>
        </motion.div>
    );
};

export default MembershipCard;

