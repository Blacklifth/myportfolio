import Hero from "@/components/sections/Hero";
import ExperienceSection from "@/components/sections/ExperienceSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import ServicesSection from "@/components/sections/ServicesSection";
import SkillsSection from "@/components/sections/SkillsSection";
import EducationSection from "@/components/sections/EducationSection";
import ContactSection from "@/components/sections/ContactSection";

export default function Home() {
    return (
        <div className="text-white/80">
            <Hero />
            <ExperienceSection />
            <ProjectsSection />
            <ServicesSection />
            <SkillsSection />
            <EducationSection />
            <ContactSection />
        </div>
    );
}
