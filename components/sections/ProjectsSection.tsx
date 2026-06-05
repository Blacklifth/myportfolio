import { projectsData } from "@/constants";
import Section from "./Section";
import SectionHeading from "./SectionHeading";
import ProjectCard from "./ProjectCard";
import MoreProjects from "./MoreProjects";

const ProjectsSection = () => {
    const featured = projectsData.filter((project) => project.featured);
    const older = projectsData.filter((project) => !project.featured);

    return (
        <Section id="proyectos" className="scroll-m-[25vh]">
            <SectionHeading index="02" title="Proyectos" />
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {featured.map((project, index) => (
                    <ProjectCard
                        key={project.id}
                        project={project}
                        index={index}
                    />
                ))}
            </div>
            {older.length > 0 && <MoreProjects projects={older} />}
        </Section>
    );
};

export default ProjectsSection;
