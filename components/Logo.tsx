import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";

interface Props {
    className?: string;
    title: string;
    subtitle: string;
}

const Logo = ({ className, title, subtitle }: Props) => {
    return (
        <div className="text-2xl group">
            <Link href={"/"}>
                <h2
                    className={cn(
                        "font-semibold tracking-wide hover:text-hoverOrange hoverEffect ",
                        className
                    )}
                >
                    {title}{" "}
                    <span className="text-accentOrange group-hover:text-white hoverEffect ">
                        {" "}
                        {subtitle}
                    </span>
                </h2>
            </Link>
        </div>
    );
};

export default Logo;
