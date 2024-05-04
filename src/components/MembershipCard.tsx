"use client";

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
import { CheckCircle } from "lucide-react";

interface MembershipCardProps {
    className: string;
    membershipType: string;
    perks: string[];
    price: string;
    priceDescription: string;

    accessToResources: string[];

    backgroundColor?: string; // Optional prop for custom background color
    textColor?: string; // Optional prop for custom text color
    headerColor?: string; // Optional prop for custom text color
}

const MembershipCard = ({
    className,
    membershipType,
    perks,
    price,
    priceDescription,
    accessToResources,
    backgroundColor = "white", // Default to empty string
    textColor = "black", // Optional prop for custom text color
    headerColor = "",
}: MembershipCardProps) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
        >
            {/* <Card
                        className={`shadow-lg rounded-lg overflow-hidden flex flex-col justify-between h-full ${
                            backgroundColor ||
                            (type.toLowerCase() === "gold membership"
                                ? "bg-[#FFEE51]"
                                : type.toLowerCase() === "silver membership"
                                ? "bg-[#ACACAB]"
                                : "bg-[#F6F6F4]")
                        }`}
                    > */}

            <Card
                className={`${className} bg-${backgroundColor} text-${textColor} px-2 py-4 shadow-lg rounded-lg overflow-hidden flex flex-col justify-between flex-shrink-0 `}
            >
                <CardContent
                    className={`bg-${backgroundColor} text-${textColor}`}
                >
                    <CardHeader
                        className={`text-[${textColor}] text-[${headerColor}] text-xl font-bold mx-0 px-0`}
                    >
                        <CardTitle>{membershipType}</CardTitle>
                    </CardHeader>

                    <CardDescription
                        className={`flex flex-col [&>*]:my-2 bg-[${backgroundColor}] text-[${textColor}]`}
                    >
                        <div className={` flex flex-row gap-2`}>
                            <p className="font-bold text-4xl">{price}</p>
                            <div>
                                <p>per member</p>
                                <p>{priceDescription}</p>
                            </div>
                        </div>

                        <div className="flex !flex-col [&>*]:my-0.5">
                            <Button
                                className={`bg-[${headerColor}] hover:bg-[${headerColor}dd]`}
                            >
                                Join Now
                            </Button>
                            <Button
                                className={`text-[${textColor}] hover:bg-orange-500 transition duration-200`}
                                variant={"secondary"}
                            >
                                Chat representative
                            </Button>
                        </div>
                    </CardDescription>

                    <div className="w-full h-0.5 bg-gray-500 px-0 my-4" />

                    <CardFooter
                        className={`flex flex-col items-start bg-[${backgroundColor}]`}
                    >
                        <div className="flex flex-row gap-2">
                            <div>
                                <h2
                                    className={`text-md  text-[${textColor}] font-bold `}
                                >
                                    Perks
                                </h2>
                                <p className={`text-sm text-[${textColor}]`}>
                                    resources access for <br />
                                    {membershipType}
                                </p>
                                <ul className="list-none mb-4">
                                    {perks.map((perk, index) => (
                                        <li
                                            key={index}
                                            className={`text-sm flex flex-row gap-2 my-2 items-center text-[${textColor}]`}
                                        >
                                            <CheckCircle
                                                size={16}
                                                color={`${headerColor}`}
                                            />
                                            {perk}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div>
                                <br/>
                                <br/>
                                <ul className="list-none mb-4">
                                    {accessToResources.map(
                                        (resource, index) => (
                                            <li
                                                key={index}
                                                className={`text-sm flex flex-row gap-2 my-2 items-center text-${textColor}`}
                                            >
                                                <CheckCircle
                                                    size={16}
                                                    color={`${headerColor}`}
                                                />
                                                {resource}
                                            </li>
                                        )
                                    )}
                                </ul>
                            </div>
                        </div>
                    </CardFooter>
                </CardContent>
            </Card>
        </motion.div>
    );
};

// <div className="flex justify-center w-full">
//     <div className="w-80 flex-shrink-0">
//     </div>
// </div>
export default MembershipCard;
