"use client";
import { motion, useScroll, useSpring } from "framer-motion";
import Link from "next/link";


const Sidebar = () => {

        const { scrollYProgress } = useScroll();
        const scaleY = useSpring(scrollYProgress, {
            stiffness: 100,
            damping: 30,
            restDelta: 0.001,
        });

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
                            <p className="text-xs md:text-lg font-bold hover:text-orange-500 transition duration-150">
                                {text}
                            </p>
                        </div>
                    </Link>
            );
        };

        return (
            <div className="flex items-center mx-4">
                <div className="flex flex-row fixed ">
                    <div className="border-black border-b border-l border-t rounded-tl-[80px] rounded-bl-[80px] w-[16px] " />

                    <motion.div
                        className="border-[#f18700] border-b border-l border-t absolute h-[calc(100%-40px)] origin-top top-[20px]"
                        style={{ scaleY: scaleY }}
                    />

                    <div className="flex-col gap-10 -my-2 h-full flex bg-[#2F3233] text-white bg-opacity-60 backdrop-blur-md p-3 rounded-lg">
                        <LinkComponent href={"#hero"} text={"Home"}>
                            <div className="w-4 -translate-x-full font-semibold" />
                        </LinkComponent>
                        <LinkComponent
                            href={"#history"}
                            text={"History"}
                        >
                            <div className="w-4 -translate-x-full" />
                        </LinkComponent>
                        <LinkComponent href={"#awards"} text={"Awards"}>
                            <div className="w-4 -translate-x-full" />
                        </LinkComponent>
                        <LinkComponent href={"#updates"} text={"News"}>
                            <div className="w-4 -translate-x-full" />
                        </LinkComponent>
                        <LinkComponent href={"#events"} text={"Events"}>
                            <div className="w-4 -translate-x-full" />
                        </LinkComponent>
                        <LinkComponent href={"#joinus"} text={"Join us"}>
                            <div className="w-4 -translate-x-full" />
                        </LinkComponent>
                    </div>
                </div>
            </div>
        );
    };


export default Sidebar;