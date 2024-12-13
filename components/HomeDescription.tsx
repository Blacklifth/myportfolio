"use client";

import { useTypeWriter } from "@/hooks/use-type-writer";
import { useEffect, useState } from "react";
import { motion } from "motion/react";

const HomeDescription = () => {
    const [hasLoaded, setHasLoaded] = useState(false);
    const description =
        " Civil Engineer in computer Science with experience in technical support,web development, and digital platform management. Known for proactivity, analytical skills, and a continuous improvement mindset. I aim to join as a trainee, Junior or join in a related role that allows me to apply my knowledge and grow professionally in a collaborative and challenging environment.";

    const { displayedText, isComplete } = useTypeWriter(description, 30);

    useEffect(() => {
        setHasLoaded(true);
    }, []);
    return (
        <motion.p
            className="w-auto font-normal leading-7 mb-6 min-h-30"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.5 }}
        >
            {hasLoaded ? (
                displayedText.split("").map((char, index) => (
                    <motion.span
                        key={index}
                        initial={{ color: "rgb(156 163 175)" }}
                        animate={{
                            color: isComplete
                                ? "rgb(255 255 255)"
                                : "rgb(156 163 175)",
                        }}
                        transition={{ duration: 0.5, delay: index * 0.03 }}
                    >
                        {char}
                    </motion.span>
                ))
            ) : (
                <span>{description}</span>
            )}
        </motion.p>
    );
};
export default HomeDescription;
