"use client";
import Awards from "@/components/Landing Page/Awards";
import Events from "@/components/Landing Page/Events";
import HeroSection from "@/components/Landing Page/HeroSection";
import History from "@/components/Landing Page/History";
import JoinUs from "@/components/Landing Page/JoinUs";
import Updates from "@/components/Landing Page/Updates";
import MembershipCard from "@/components/MembershipCard";
import { motion, useScroll, useSpring } from "framer-motion";
import Link from "next/link";

export default function Home() {
    const { scrollYProgress } = useScroll();
    const scaleY = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001,
    });

    const Sidebar = () => {
        const LinkComponent = ({
            href,
            text,
            children,
        }: {
            href: string;
            text: string;
            children: React.ReactNode;
        }) => {
            return (
                <Link href={href}>
                    <div className={`flex flex-row items-center`}>
                        {children}
                        <p className="text-xs md:text-lg font-bold hover:text-orange-500 transition duration-150 lowercase">
                            {text}
                        </p>
                    </div>
                </Link>
            );
        };

        return (
            <div className=" h-[100vh] flex items-center mx-4">
                <div className="flex flex-row fixed ">
                    <div className="border-black border-b border-l border-t rounded-tl-[80px] rounded-bl-[80px] w-[16px] " />

                    <motion.div
                        className="border-[#f18700] border-b border-l border-t absolute h-[calc(100%-40px)] origin-top top-[20px]"
                        style={{ scaleY: scaleY }}
                    />

                    <div className="flex-col gap-10 -my-2 h-full flex">
                        <LinkComponent href={"#hero"} text={"Home"}>
                            <div className="w-4 -translate-x-full font-semibold" />
                        </LinkComponent>
                        <LinkComponent
                            href={"#historical_background"}
                            text={"History"}
                        >
                            <div className="w-4 border-t border-black -translate-x-full" />
                        </LinkComponent>
                        <LinkComponent href={"#awards"} text={"Awards"}>
                            <div className="w-4 border-t border-black -translate-x-full" />
                        </LinkComponent>
                        <LinkComponent href={"#news"} text={"News"}>
                            <div className="w-4 border-t border-black -translate-x-full" />
                        </LinkComponent>
                        <LinkComponent href={"#events"} text={"Events"}>
                            <div className="w-4 border-t border-black -translate-x-full" />
                        </LinkComponent>
                        <LinkComponent href={"#joinus"} text={"Join us"}>
                            <div className="w-4 -translate-x-full" />
                        </LinkComponent>
                    </div>
                </div>
            </div>
        );
    };

    return (
        <div className="">
            <Sidebar />
            {/* LANDING PAGE */}
            <div className="px-12 md:px-32">
                <div id="hero">
                    <HeroSection />
                </div>

                <div id="history">
                    <History />
                </div>

                <div id="awards">
                    <Awards />
                </div>

                {/* JULIAN: working on updates */}
                <div id="updates">
                    <Updates />
                </div>

                {/* JULIAN: working on events */}
                <div id="events">
                    <Events />
                </div>

                <div id="joinus">
                    <JoinUs />
                </div>
            </div>
        </div>
    );
}
