import { useOutsideClick } from "@/hooks/use-outside-click";
import { X } from "lucide-react";
import React from "react";
import Logo from "./Logo";
import { navbarData } from "@/constants";
import Link from "next/link";
import SocialLinks from "./SocialLinks";

interface Props {
    isOpen: boolean;
    onClose: () => void;
    pathname: string;
}

const Sidebar: React.FC<Props> = ({ isOpen, onClose, pathname }) => {
    const sidebarRef = useOutsideClick<HTMLDivElement>(onClose);
    return (
        <>
            {/* Backdrop overlay */}
            <div
                className={`fixed inset-0 z-40 bg-black/60 backdrop-blur-sm transition-all duration-300 ${
                    isOpen ? "opacity-100 visible" : "opacity-0 invisible"
                }`}
                onClick={onClose}
            />
            
            <div
                ref={sidebarRef}
                className={`fixed inset-y-0 right-0 z-[60] min-w-72 max-w-96 glass border-l border-l-white/10 shadow-xl transform  ${
                    isOpen ? "translate-x-0" : "translate-x-full"
                } transition-transform duration-300 ease-in-out flex flex-col`}
            >
                <div className="flex justify-end p-4">
                    <button
                        onClick={onClose}
                        className="hover:text-hoverOrange hoverEffect text-white"
                        aria-label="Close Sidebar"
                    >
                        <X />
                    </button>
                </div>
                <nav className="flex flex-col px-5 gap-7 text-sm uppercase tracking-wide font-medium mt-2 ">
                    <Logo title="Marcelo" subtitle="." />
                    {navbarData?.map((item) => (
                        <Link
                            key={item?.title}
                            href={item?.href}
                            className={`hover:text-hoverOrange hoverEffect ${
                                pathname === item?.href && "text-hoverOrange"
                            }`}
                            onClick={onClose}
                        >
                            {item?.title}
                        </Link>
                    ))}
                    <Link
                        href={"/Marcelo_Loyola_CVesp.pdf"}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm bg-accentOrange/10 px-4 py-2 rounded-md border border-hoverOrange/10 hover:border-hoverOrange hover:bg-hoverOrange hover:text-white hoverEffect mt-4"
                    >
                        Descargar CV
                    </Link>
                    <SocialLinks />
                </nav>
            </div>
        </>
    );
};

export default Sidebar;
