"use client";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

interface Props {
    index?: number;
    className?: string;
    children: React.ReactNode;
}

/**
 * Tarjeta glass con animación de aparición al hacer scroll.
 * Concentra el estilo y la animación para que las secciones sean declarativas.
 */
const RevealCard = ({ index = 0, className, children }: Props) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ delay: index * 0.1, duration: 0.4 }}
            className={cn("glass glass-hover rounded-xl p-6", className)}
        >
            {children}
        </motion.div>
    );
};

export default RevealCard;
