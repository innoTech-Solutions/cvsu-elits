/**
 * Represents a membership card component.
 *
 * @component
 * @param {string} className - The class name for the component.
 * @param {string} membershipType - The type of membership.
 * @param {string[]} perks - The list of perks included in the membership.
 * @param {string} price - The price of the membership.
 * @param {string} priceDescription - The description of the price.
 * @param {string[]} accessToResources - The list of resources accessible with the membership.
 * @param {str${backgroundColor} - The optional custom background color needs to be a hex.
 * @param {s${textColor}- The optional custom text color needs to be a hex
 * @param {string} [headerTextColor] - The optional custom header color needs to be a hex.
 * @returns {JSX.Element} The rendered membership card component.
 */
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
    className?: string;
    membershipType: string;
    backgroundColor?: string; // Optional prop for custom background${textColor} string; // Optional prop for custom text color
    textColor?: string; // Optional prop for custom text color
    headerTextColor?: string; // Optional prop for custom text color
    headerBackgroundColor?: string; // Optional prop for custom text color
    perks: string[];
    price: string;
    priceDescription?: string;
    accessToResources: string[];
}

const MembershipCard = ({
    className,
    membershipType,
    price,
    priceDescription,
    perks = [""],
    accessToResources = [""], // Default to empty string
    backgroundColor = "white", // Optional prop for custom background${textColor} "black", // Optional prop for custom text color
    textColor = "text-black", // Optional prop for custom text color
    headerTextColor = "text-black",
    headerBackgroundColor = "bg-orange-500", // Optional prop for custom text color
}: MembershipCardProps) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
        >
            {/* <Card
                        className={`shadow-lg rounded-lg overflow-hidden flex flex-col justify-between h-full ${
    ${backgroundColor}||
                            (type.toLowerCase() === "gold membership"
                                ? "bg-[#FFEE51]"
                                : type.toLowerCase() === "silver membership"
                                ? "bg-[#ACACAB]"
                                : "bg-[#F6F6F4]")
                        }`}
                    > */}

            <Card
                className={`${className} ${backgroundColor} ${textColor} px-2 py-4 shadow-lg rounded-lg overflow-hidden flex flex-col justify-between flex-shrink-0 m-0 p-0`}
            >
                <CardContent className={`${backgroundColor} ${textColor}`}>
                    <CardHeader className={`${backgroundColor} mx-0 px-0`}>
                        <CardTitle
                            className={`${textColor} ${headerTextColor} text-xl font-bold`}
                        >
                            {membershipType}
                        </CardTitle>
                    </CardHeader>

                    <CardDescription
                        className={`flex flex-col [&>*]:my-2 ${backgroundColor} ${textColor}`}
                    >
                        <div className={`flex flex-row gap-2`}>
                            <p className={`font-bold text-4xl ${textColor}`}>{price}</p>
                            <div className="flex items-center flex-col">
                                <p>per member</p>
                                <p>{priceDescription}</p>
                            </div>
                        </div>

                        <div className="flex !flex-col [&>*]:my-0.5">
                            <Button
                                className={`${headerTextColor} ${headerBackgroundColor} hover:${headerBackgroundColor} hover:${headerTextColor} ${textColor}`}
                            >
                                Join Now
                            </Button>
                            <Button
                                className={`${headerTextColor} ${headerBackgroundColor} hover:${headerBackgroundColor}-darker hover:${headerTextColor} ${textColor}`}
                            >
                                Chat representative
                            </Button>
                        </div>
                    </CardDescription>

                    <div className="w-full h-0.5 bg-gray-500 px-0 my-4" />

                    <CardFooter
                        className={`flex flex-col items-start ${backgroundColor}`}
                    >
                        <div className="flex flex-row gap-2">
                            <div>
                                <h2
                                    className={`text-md  ${textColor} font-bold `}
                                >
                                    Perks
                                </h2>
                                <ul className="list-none mb-4">
                                    {perks.map((perk, index) => (
                                        <li
                                            key={index}
                                            className={`text-sm flex flex-row gap-2 my-2 items-center ${textColor}`}
                                        >
                                            <CheckCircle
                                                size={16}
                                                color={`${headerTextColor}`}
                                            />
                                            {perk}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div>
                                <h2
                                    className={`text-md  ${textColor} font-bold `}
                                >
                                    Resources
                                </h2>
                                <ul className="list-none mb-4">
                                    {accessToResources.map(
                                        (resource, index) => (
                                            <li
                                                key={index}
                                                className={`text-sm flex flex-row gap-2 my-2 items-center ${textColor}`}
                                            >
                                                <CheckCircle
                                                    size={16}
                                                    className={`${headerTextColor}`}
                                                    color={`${headerTextColor}`}
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
