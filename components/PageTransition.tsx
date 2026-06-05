"use client";
import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { usePathname } from "next/navigation";
import { Loader2 } from "lucide-react";

interface Props {
    children: React.ReactNode;
}

const PageTransition = ({ children }: Props) => {
    const pathname = usePathname();
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setIsLoading(true);
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 600);
        return () => clearTimeout(timer);
    }, [pathname]);

    return (
        <>
            <AnimatePresence>
                {isLoading && (
                    <motion.div
                        key="loader"
                        initial={{ opacity: 1 }}
                        exit={{ opacity: 0, transition: { duration: 0.3, ease: "easeInOut" } }}
                        className="h-screen w-screen fixed bg-baseDark top-0 left-0 z-50 flex flex-col items-center justify-center pointer-events-none"
                    >
                        <Loader2 className="w-14 h-14 text-accentOrange animate-spin" />
                    </motion.div>
                )}
            </AnimatePresence>
            {children}
        </>
    );
};
export default PageTransition;
