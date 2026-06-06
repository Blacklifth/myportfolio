"use client";
import { navbarData } from "@/constants";
import Logo from "./Logo";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";
import Sidebar from "./Sidebar";
import { useState } from "react";

const Header = () => {
    const [isSidebarOpen, setIsSidebaropen] = useState(false);
    const pathname = usePathname();

    return (
        <>
            <header
                className="w-full border-b border-b-white/10 glass rounded-none text-white/80 sticky top-0 z-50"
            >
                <div className="max-w-4xl mx-auto px-4 py-5 flex items-center justify-between">
                    <Logo title="Marcelo" subtitle="."></Logo>
                    <div className="hidden md:inline-flex items-center gap-7 text-sm uppercase tracking-wide font-medium">
                        {navbarData?.map((item) => (
                            <Link
                                key={item?.title}
                                href={item?.href}
                                className={`hover:text-hoverOrange hoverEffect relative group overflow-x-hidden ${
                                    pathname == item?.href && "text-hoverOrange"
                                } `}
                            >
                                {item?.title}
                                <span
                                    className={`w-full h-px bg-hoverOrange inline-block absolute left-0 bottom-0 group-hover:translate-x-0 hoverEffect  ${
                                        pathname === item?.href
                                            ? "translate-x-0"
                                            : "-translate-x-[105%]"
                                    } `}
                                />
                            </Link>
                        ))}

                        <a
                            href={"/Marcelo_Loyola_CVesp.pdf"}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm bg-accentOrange/10 px-4 py-2 rounded-md border border-hoverOrange/10 hover:border-hoverOrange hover:bg-hoverOrange hover:text-black hoverEffect"
                        >
                            Descargar CV
                        </a>
                    </div>
                    <button
                        aria-label="Toggle menu"
                        onClick={() => {
                            setIsSidebaropen(!isSidebarOpen);
                        }}
                        className="inline-flex md:hidden relative hover:text-hoverOrange hoverEffect"
                    >
                        <Menu />
                    </button>
                </div>
            </header>

            <div className="md:hidden ">
                <Sidebar
                    isOpen={isSidebarOpen}
                    onClose={() => setIsSidebaropen(false)}
                    pathname={pathname}
                />
            </div>
        </>
    );
};

export default Header;
