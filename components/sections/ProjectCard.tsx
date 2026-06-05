import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Github } from "lucide-react";
import RevealCard from "./RevealCard";
import TechBadge from "./TechBadge";

export interface Project {
    id: string;
    title: string;
    category: string;
    description: string;
    stack: string[];
    image: string;
    liveUrl: string;
    githubUrl: string;
}

interface Props {
    project: Project;
    index?: number;
}

const linkClass =
    "flex items-center justify-center w-9 h-9 rounded-lg bg-white/5 border border-white/10 text-white/80 hover:text-accentOrange hover:border-accentOrange/40 transition-colors";

/**
 * Tarjeta de proyecto: miniatura + categoría + descripción + stack + enlaces.
 * Se apoya en RevealCard (glass + animación) y TechBadge para no duplicar estilo.
 * La columna flex empuja los enlaces al fondo para alinear filas de la grilla.
 */
const ProjectCard = ({ project, index = 0 }: Props) => {
    return (
        <RevealCard index={index} className="flex flex-col p-4">
            <div className="relative aspect-video rounded-lg overflow-hidden mb-3.5 bg-white/[0.04]">
                <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover"
                    loading="lazy"
                />
            </div>
            <p className="text-[11px] font-semibold uppercase tracking-wider text-accentOrange mb-1.5">
                {project.category}
            </p>
            <h3 className="text-base font-semibold text-white mb-2">
                {project.title}
            </h3>
            <p className="text-sm leading-relaxed text-white/65 mb-3.5 flex-1">
                {project.description}
            </p>
            <div className="flex flex-wrap gap-2 mb-3.5">
                {project.stack.map((tech) => (
                    <TechBadge key={tech}>{tech}</TechBadge>
                ))}
            </div>
            <div className="flex gap-2.5 mt-auto">
                {project.liveUrl && (
                    <Link
                        href={project.liveUrl}
                        target="_blank"
                        aria-label="Ver sitio en vivo"
                        className={linkClass}
                    >
                        <ArrowUpRight className="w-[18px] h-[18px]" />
                    </Link>
                )}
                <Link
                    href={project.githubUrl}
                    target="_blank"
                    aria-label="Repositorio GitHub"
                    className={linkClass}
                >
                    <Github className="w-[18px] h-[18px]" />
                </Link>
            </div>
        </RevealCard>
    );
};

export default ProjectCard;
