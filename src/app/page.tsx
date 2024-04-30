"use client";

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
                        <p className="text-md text-sm capitalize">{text}</p>
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
                        <LinkComponent href={"#hero"} text={"home"}>
                            <div className="w-4 -translate-x-full" />
                        </LinkComponent>
                        <LinkComponent
                            href={"#historical_background"}
                            text={"history"}
                        >
                            <div className="w-4 border-t border-black -translate-x-full" />
                        </LinkComponent>
                        <LinkComponent href={"#awards"} text={"awards"}>
                            <div className="w-4 border-t border-black -translate-x-full" />
                        </LinkComponent>
                        <LinkComponent href={"#news"} text={"news"}>
                            <div className="w-4 border-t border-black -translate-x-full" />
                        </LinkComponent>
                        <LinkComponent href={"#events"} text={"events"}>
                            <div className="w-4 border-t border-black -translate-x-full" />
                        </LinkComponent>
                        <LinkComponent href={"#joinus"} text={"join us"}>
                            <div className="w-4 -translate-x-full" />
                        </LinkComponent>
                    </div>
                </div>
            </div>
        );
    };

    return (
        <div>
            <Sidebar />
            {/* LANDING PAGE */}
            <div>
                <div className={"hero h-screen bg-blue-500"} id={"hero"}>
                    <p className="text-md">home</p>
                </div>

                <div
                    className={"h-screen bg-red-500"}
                    id={"historical_background"}
                >
                    <p className="text-md">history</p>
                </div>

                <div className={"awards h-screen bg-green-500"} id={"awards"}>
                    <p className="text-md">awards</p>
                </div>

                <div className={"h-screen bg-blue-500"} id={"news"}>
                    <p className="text-md">news</p>
                </div>

                <div className={"h-screen bg-pink-500"} id={"joinus"}>
                    <p className="text-md">joinus</p>
                </div>
                <div className=""></div>
            </div>
        </div>
    );
}