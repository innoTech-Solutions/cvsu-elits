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

const MembershipCard = ({
    type,
    perks,
    eventDiscounts,
    price,
    accessToResources,
}: {
    type: string;
    perks: string[];
    eventDiscounts: string;
    price: string;
    accessToResources: string[];
}) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="w-full"
        >
            <Card className="bg-white shadow-lg rounded-lg overflow-hidden">
                <CardHeader className="bg-gray-800 text-white py-4 px-6">
                    <CardTitle>{type}</CardTitle>
                </CardHeader>
                <CardContent className="py-4 px-6">
                    <CardDescription>
                        <ul>
                            {perks.map((perk, index) => (
                                <li key={index}>{perk}</li>
                            ))}
                        </ul>
                        <p>Event Discounts: {eventDiscounts}</p>
                        <p>Price: {price}</p>
                        <ul>
                            {accessToResources.map((resource, index) => (
                                <li key={index}>{resource}</li>
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
        </motion.div>
    );
};

export default MembershipCard;
