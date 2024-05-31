"use client";
import { useEffect } from "react";
import { motion } from "framer-motion";
import MembershipCard from "../../components/Shop/MembershipCard";
import MerchandiseList from "../../components/Shop/MerchandiseList";
import merchandiseData from "@/config/merchandiseData";
import { Toaster } from "@/components/ui/toaster";
import { useToast } from "@/components/ui/use-toast";
import PurchaseOption from "@/components/Shop/PurchaseOption";
import MerchandiseContainer from "@/components/Shop/MerchandiseContainer";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const Shop = () => {
    const { toast } = useToast();

    useEffect(() => {
        toast({
            title: "Membership Benefits",
            description:
                "Join now to get access to exclusive events, newsletters, discounts, and more!",
        });
    }, [toast]);

    return (
        <div className="max-w-7xl mx-auto p-4">
            <Toaster />
            <motion.h3
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-3xl md:text-5xl text-orange-500 font-extrabold text-center mt-10 md:mt-20"
            >
                Membership <span className="text-black">Plans</span>
            </motion.h3>
            <motion.h4
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-lg md:text-2xl text-gray-500 font-base mt-2 mb-4 md:mb-8 text-center"
            >
                choose a plan that suits your needs
            </motion.h4>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mx-4 md:mx-10">
                <MembershipCard
                    className="h-[400px] md:h-[500px]"
                    membershipType="Free Membership"
                    perks={["Monthly newsletters"]}
                    price="Free"
                    accessToResources={["Basic online courses"]}
                />
                <MembershipCard
                    className="h-[400px] md:h-[500px]"
                    membershipType="Silver Membership"
                    perks={[
                        "Access to select events",
                        "Quarterly newsletters",
                    ]}
                    price="$49/year"
                    accessToResources={[
                        "Basic online courses",
                        "Access to forums",
                    ]}
                    headerBackgroundColor="bg-gray-500"
                    headerTextColor="text-gray-500"
                />
                <MembershipCard
                    className="h-[400px] md:h-[500px]"
                    membershipType="Gold Membership"
                    price="$99/year"
                    priceDescription="for the first year"
                    perks={[
                        "Exclusive access to events",
                        "Monthly newsletters",
                        "Discounts at partner stores",
                    ]}
                    accessToResources={[
                        "Online courses",
                        "Member-only forums",
                        "Networking events",
                    ]}
                    headerBackgroundColor="bg-yellow-500"
                    headerTextColor="text-yellow-500"
                />
            </div>

            <motion.h3
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-3xl md:text-5xl text-orange-500 font-extrabold mt-10 md:mt-20"
            >
                Trending <span className="text-black">Merchandise</span>
            </motion.h3>

            <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-6">
                <div className="flex gap-2 flex-wrap justify-center">
                    <button
                        className="relative bg-transparent hover:bg-orange-500 border border-solid border-orange-500 rounded-full text-black font-semibold py-2 px-4 transition duration-300 mt-6"
                        onClick={() =>
                            alert("See more merchandise clicked")
                        }
                    >
                        Shirts
                    </button>
                    <button
                        className="relative bg-transparent hover:bg-orange-500 border border-solid border-orange-500 rounded-full text-black font-semibold py-2 px-4 transition duration-300 mt-6"
                        onClick={() =>
                            alert("See more merchandise clicked")
                        }
                    >
                        Jackets
                    </button>
                    <button
                        className="relative bg-transparent hover:bg-orange-500 border border-solid border-orange-500 rounded-full text-black font-semibold py-2 px-4 transition duration-300 mt-6"
                        onClick={() =>
                            alert("See more merchandise clicked")
                        }
                    >
                        ID Lace
                    </button>
                </div>
                <div className="flex items-center gap-2">
                    <p className="text-sm text-gray-700">Sort by</p>
                    <Select>
                        <SelectTrigger className="w-[150px] bg-white border border-gray-300 text-gray-600 rounded-full py-2 px-3 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500 shadow-md">
                            <SelectValue placeholder="Default" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="default">Default</SelectItem>
                            <SelectItem value="name">Name</SelectItem>
                            <SelectItem value="date_posted">Date posted</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
            </div>

            <MerchandiseContainer>
                <div className="flex justify-center">
                    <MerchandiseList items={merchandiseData} />
                </div>

                <div className="flex justify-center">
                    <button
                        className="relative bg-transparent hover:bg-orange-500 border border-solid border-orange-500 rounded-full text-black font-semibold py-2 px-4 transition duration-300 mt-6"
                        onClick={() =>
                            alert("See more merchandise clicked")
                        }
                    >
                        See more merchandise {"->"}
                    </button>
                </div>
            </MerchandiseContainer>

            <motion.h3
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-3xl md:text-5xl text-orange-500 font-extrabold mt-10 md:mt-20 mb-4"
            >
                Purchase Options
            </motion.h3>
            <PurchaseOption />
        </div>
    );
};

export default Shop;
