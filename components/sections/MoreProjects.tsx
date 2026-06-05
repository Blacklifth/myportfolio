"use client";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import ProjectCard, { type Project } from "./ProjectCard";

interface Props {
    projects: Project[];
}

/**
 * Toggle de "proyectos anteriores": aísla la interactividad (useState) para que
 * ProjectsSection siga siendo un server component. Al abrirse revela la grilla
 * de proyectos más antiguos, que comparten ProjectCard con los destacados.
 */
const MoreProjects = ({ projects }: Props) => {
    const [open, setOpen] = useState(false);

    return (
        <>
            <div className="flex justify-center mt-5">
                <button
                    type="button"
                    onClick={() => setOpen((prev) => !prev)}
                    aria-expanded={open}
                    aria-controls="older-projects"
                    className="inline-flex items-center gap-2 h-10 px-5 rounded-full bg-white/[0.04] border border-white/[0.12] text-white/75 text-[13px] font-semibold hover:text-accentOrange hover:border-accentOrange/40 hover:bg-accentOrange/[0.06] transition-colors"
                >
                    {open ? "Ocultar proyectos anteriores" : "Ver proyectos anteriores"}
                    <ChevronDown
                        className={cn(
                            "w-4 h-4 transition-transform duration-300",
                            open && "rotate-180"
                        )}
                    />
                </button>
            </div>
            {open && (
                <div
                    id="older-projects"
                    className="grid grid-cols-1 sm:grid-cols-2 gap-5 mt-5"
                >
                    {projects.map((project, index) => (
                        <ProjectCard
                            key={project.id}
                            project={project}
                            index={index}
                        />
                    ))}
                </div>
            )}
        </>
    );
};

export default MoreProjects;
