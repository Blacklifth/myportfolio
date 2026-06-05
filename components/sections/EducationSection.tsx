import { educationData } from "@/constants";
import { Calendar } from "lucide-react";
import Section from "./Section";
import SectionHeading from "./SectionHeading";
import RevealCard from "./RevealCard";
import TechBadge from "./TechBadge";

const EducationSection = () => {
    return (
        <Section id="educacion" className="scroll-m-[25vh]">
            <SectionHeading index="05" title="Educación" />
            <div className="flex flex-col gap-5">
                {educationData.map((item, index) => (
                    <RevealCard key={item.degree} index={index}>
                        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 sm:gap-4 mb-4">
                            <div>
                                <h3 className="text-lg font-semibold text-white">
                                    {item.degree}
                                </h3>
                                <p className="text-white/55 text-sm mt-0.5">
                                    {item.institution}
                                </p>
                            </div>
                            <span className="flex items-center gap-1.5 text-white/55 text-sm shrink-0">
                                <Calendar className="w-4 h-4" />
                                {item.period}
                            </span>
                        </div>
                        <p className="text-white/90 text-sm leading-relaxed mb-4">
                            {item.description}
                        </p>
                        <div className="flex flex-wrap gap-2">
                            {item.achievements.map((achievement) => (
                                <TechBadge key={achievement}>
                                    {achievement}
                                </TechBadge>
                            ))}
                        </div>
                    </RevealCard>
                ))}
            </div>
        </Section>
    );
};

export default EducationSection;
