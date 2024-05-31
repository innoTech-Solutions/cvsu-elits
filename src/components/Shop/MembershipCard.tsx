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
 * @param {string} [backgroundColor] - The optional custom background color needs to be a hex.
 * @param {string} [textColor] - The optional custom text color needs to be a hex.
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
} from "../ui/card";
import { Button } from "../ui/button";
import { FaCheck } from "react-icons/fa";

interface MembershipCardProps {
    className?: string;
    membershipType: string;
    backgroundColor?: string;
    textColor?: string;
    headerTextColor?: string;
    headerBackgroundColor?: string;
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
    accessToResources = [""],
    backgroundColor = "white",
    textColor = "text-black",
    headerTextColor = "text-black",
    headerBackgroundColor = "bg-orange-500",
}: MembershipCardProps) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <Card
                className={`${className} ${backgroundColor} ${textColor} px-4 py-2 shadow-lg rounded-lg overflow-hidden flex flex-col justify-between m-0 p-0`}
            >
                <CardContent className={`${backgroundColor} ${textColor}`}>
                    <CardHeader className={`${backgroundColor} mx-0 px-0`}>
                        <CardTitle
                            className={`${textColor} ${headerTextColor} text-lg font-bold`}
                        >
                            {membershipType}
                        </CardTitle>
                    </CardHeader>

                    <CardDescription className={`flex flex-col ${backgroundColor} ${textColor}`}>
                        <div className={`flex flex-row gap-2`}>
                            <p className={`font-bold text-3xl ${textColor}`}>{price}</p>
                            <div className="flex items-center flex-col">
                                <p className="text-sm">per member</p>
                                <p className="text-sm">{priceDescription}</p>
                            </div>
                        </div>

                        <div className="flex flex-col gap-1 mt-2">
                            <Button className={`${headerTextColor} ${headerBackgroundColor} hover:${headerBackgroundColor} hover:${headerTextColor} ${textColor} py-1`}>
                                Join Now
                            </Button>
                            <Button className={`${headerTextColor} ${headerBackgroundColor} hover:${headerBackgroundColor}-darker hover:${headerTextColor} ${textColor} py-1`}>
                                Chat representative
                            </Button>
                        </div>
                    </CardDescription>

                    <div className="w-full h-0.5 bg-gray-500 mt-2 mb-3" />

                    <CardFooter className={`flex flex-col items-start ${backgroundColor}`}>
                        <div className="flex flex-row gap-4 w-full">
                            <div className="w-1/2">
                                <h2 className={`text-md ${textColor} font-bold`}>Perks</h2>
                                <ul className="list-none">
                                    {perks.map((perk, index) => (
                                        <li key={index} className={`text-sm flex items-center gap-2 ${textColor}`}>
                                            <FaCheck size={12} className={`${headerTextColor}`} />
                                            {perk}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="w-1/2">
                                <h2 className={`text-md ${textColor} font-bold`}>Resources</h2>
                                <ul className="list-none">
                                    {accessToResources.map((resource, index) => (
                                        <li key={index} className={`text-sm flex items-center gap-2 ${textColor}`}>
                                            <FaCheck size={12} className={`${headerTextColor}`} />
                                            {resource}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </CardFooter>
                </CardContent>
            </Card>
        </motion.div>
    );
};

export default MembershipCard;
