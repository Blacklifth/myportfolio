"use client";

import { useTypeWriter } from "@/hooks/use-type-writer";
import { useEffect, useState } from "react";
import { motion } from "motion/react";

const HomeDescription = () => {
    const [hasLoaded, setHasLoaded] = useState(false);
    const description =
        "  Experiencia en desarrollo full-stack(Node.js, Next.js, React, Python, MySQL, Firebase). Perfil orientado al diseño de arquitecturas escalables, comprensión algorítmica y desarrollo asistido por IA(AI - augmented engineering).Experiencia en integración de LLMs, visualización de datos con D3.js, despliegue con Docker y trato directo con clientes en equiposágiles.";

    const { displayedText, isComplete } = useTypeWriter(description, 30);

    useEffect(() => {
        setHasLoaded(true);
    }, []);
    return (
        <motion.p
            className="w-full font-normal leading-7 mb-6 min-h-30 text-justify"
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
