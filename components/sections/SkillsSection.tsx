import { skillsData } from "@/constants";
import Section from "./Section";
import SectionHeading from "./SectionHeading";
import RevealCard from "./RevealCard";
import TechBadge from "./TechBadge";

const SkillsSection = () => {
    return (
        <Section id="habilidades" className="scroll-m-[25vh]">
            <SectionHeading index="04" title="Habilidades" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {skillsData.map((category, index) => (
                    <RevealCard key={category.name} index={index}>
                        <h3 className="text-base font-semibold text-accentOrange mb-3">
                            {category.name}
                        </h3>
                        <div className="flex flex-wrap gap-2">
                            {category.skills.map((skill) => (
                                <TechBadge key={skill}>{skill}</TechBadge>
                            ))}
                        </div>
                    </RevealCard>
                ))}
            </div>
        </Section>
    );
};

export default SkillsSection;
