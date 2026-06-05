import { Code2, Sparkles, Workflow, type LucideIcon } from "lucide-react";
import { servicesData } from "@/constants";
import Section from "./Section";
import SectionHeading from "./SectionHeading";
import RevealCard from "./RevealCard";

// Mapea la clave de datos a un ícono concreto (presentación fuera de constants).
const icons: Record<string, LucideIcon> = {
    code: Code2,
    ai: Sparkles,
    data: Workflow,
};

const ServicesSection = () => {
    return (
        <Section id="servicios" className="scroll-m-[25vh]">
            <SectionHeading index="03" title="Servicios" />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {servicesData.map((service, index) => {
                    const Icon = icons[service.icon] ?? Code2;
                    return (
                        <RevealCard key={service.id} index={index}>
                            <span className="inline-flex w-11 h-11 mb-4 rounded-lg bg-accentOrange/10 text-accentOrange items-center justify-center">
                                <Icon className="w-5 h-5" />
                            </span>
                            <h3 className="text-base font-semibold text-white mb-2">
                                {service.title}
                            </h3>
                            <p className="text-sm text-white/65 leading-relaxed">
                                {service.description}
                            </p>
                        </RevealCard>
                    );
                })}
            </div>
        </Section>
    );
};

export default ServicesSection;
