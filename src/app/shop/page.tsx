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
        <div className="max-w-7xl mx-auto">
            <Toaster />
            <div className="p-4">
                <motion.h3
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-5xl text-orange-500 font-extrabold text-center mt-20"
                >
                    Membership <span className="text-black">Plans</span>
                </motion.h3>
                <motion.h4
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-2xl text-gray-500 font-base mt-2 mb-8 text-center"
                >
                    choose a plan that suits your needs
                </motion.h4>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mx-10">
                    <MembershipCard
                        className="h-[500px]"
                        membershipType="Free Membership"
                        perks={["Monthly newsletters"]}
                        price="Free"
                        accessToResources={["Basic online courses"]}
                        //
                    />
                    <MembershipCard
                        className="h-[500px]"
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
                        className="h-[500px]"
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

                {/* Merchandise Section */}
                <motion.h3
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-5xl text-orange-500 font-extrabold mt-20"
                >
                    Trending <span className="text-black">Merchandise</span>
                </motion.h3>

                <div className="flex justify-between">
                    <div className="flex gap-2">
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
                    <div className="flex items-center">
                        <p className="text-sm">Sort by</p>
                        {/* TODO: to implement sorting on merchandise */}
                        <Select>
                            <SelectTrigger className="w-[90px] bg-transparent border-none text-gray-600">
                                <SelectValue className=" text-sm" placeholder="Default" />
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
                    <MerchandiseList items={merchandiseData} />

                    <div className="flex justify-end">
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
                    className="text-5xl text-orange-500 font-extrabold mt-12 mb-4"
                >
                    Purchase Options
                </motion.h3>
                <PurchaseOption />
            </div>
        </div>
    );
};

export default Shop;
