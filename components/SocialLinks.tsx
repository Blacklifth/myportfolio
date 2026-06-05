import { Github, Linkedin } from "lucide-react";
import Link from "next/link";
import React from "react";
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "./ui/tooltip";

const socialData = [
    {
        title: "Github",
        icon: <Github />,
        href: "https://github.com/Blacklifth",
    },
    {
        title: "Linkedin",
        icon: <Linkedin />,
        href: "https://www.linkedin.com/in/marcelo-loyola-464575186/",
    },
];

const SocialLinks = () => {
    return (
        <TooltipProvider>
            <div className="flex items-center gap-3">
                {socialData?.map((item) => (
                    <Tooltip key={item?.title}>
                        <TooltipTrigger asChild>
                            <div className="text-accentOrange/80 border border-accentOrange/30 p-2.5 rounded-full hover:bg-accentOrange/10 hover:border-accentOrange hoverEffect">
                                <Link href={item?.href} target="_blank">
                                    <span>{item?.icon}</span>
                                </Link>
                            </div>
                        </TooltipTrigger>
                        <TooltipContent className="bg-hoverOrange text-black font-semibold">
                            {item?.title}
                        </TooltipContent>
                    </Tooltip>
                ))}
            </div>
        </TooltipProvider>
    );
};

export default SocialLinks;
