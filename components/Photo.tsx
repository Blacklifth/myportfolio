"use client";
import React from "react";
import Hero from "@/public/images/Hero.png";
import Image from "next/image";
import { motion } from "motion/react";

const Photo = () => {
    const circleColors = ["#FF7A00", "#FF7A0050"];

    const circleVariants = {
        initial: {
            strokeDasharray: "24 10 0 0",
            rotate: 0,
            opacity: 0,
        },
        animate: (index: number) => ({
            strokeDasharray: ["15 120 25 25", "16 25 92 72", "4 250 22 22"],
            rotate: [120, 360],
            opacity: 1,
            transition: {
                strokeDashArray: {
                    duration: 20,
                    repeat: Infinity,
                    repeatType: "reverse",
                },
                rotate: {
                    duration: 20,
                    repeat: Infinity,
                    repeatType: "reverse",
                },
                opacity: {
                    duration: 0.4,
                    delay: 2 + index * 0.4,
                    ease: "easeIn",
                },
            },
        }),
    };

    return (
        <div className="relative flex items-center justify-center">
            <motion.div
                initial={{ opacity: 0 }}
                animate={{
                    opacity: 1,
                    transition: { delay: 0.1, duration: 0.4, ease: "easeIn" },
                }}
                className="relative"
            >
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{
                        opacity: 1,
                        transition: {
                            delay: 0.5,
                            duration: 0.4,
                            ease: "easeInOut",
                        },
                    }}
                    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10"
                >
                    <div className="w-[120px] h-[120px] lg:w-[160px] lg:h-[160px] mix-blend-lighten overflow-hidden rounded-full ">
                        <Image
                            src={Hero}
                            alt="hero Image"
                            width={400}
                            height={400}
                            quality={100}
                            priority
                            className="object-cover w-full h-full"
                        />
                    </div>
                </motion.div>
                <svg
                    className="w-[150px] lg:w-[195px] h-[150px] lg:h-[195px] "
                    viewBox="0 0 506 506"
                    fill="none"
                    xmlns="http://www.w3.org/200/svg"
                >
                    {circleColors.map((color, index) => (
                        <motion.circle
                            key={index}
                            cx="253"
                            cy="253"
                            r={240 - index * 15}
                            stroke={color}
                            strokeWidth={4}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            variants={circleVariants}
                            initial="initial"
                            animate="animate"
                            custom={index}
                        />
                    ))}
                </svg>
            </motion.div>
        </div>
    );
};

export default Photo;
