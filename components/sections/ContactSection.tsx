import { Mail, MapPin, Phone } from "lucide-react";
import Section from "./Section";
import SectionHeading from "./SectionHeading";
import ContactForm from "@/components/ContactForm";

const infoData = [
    { title: "Email", value: "marcelo@moccadev.cl", icon: Mail },
    { title: "Teléfono", value: "(+56) 9 689 931 82", icon: Phone },
    { title: "Ubicación", value: "Viña del Mar, Chile", icon: MapPin },
];

const ContactSection = () => {
    return (
        <Section id="contacto" className="scroll-m-[25vh]">
            <SectionHeading index="06" title="Contacto" />
            <div className="flex flex-col md:flex-row gap-8 md:gap-12">
                <div className="w-full md:w-3/5">
                    <p className="text-white/70 text-sm leading-relaxed mb-6">
                        ¿Tienes un proyecto en mente o una oportunidad laboral?
                        Escríbeme y te respondo a la brevedad.
                    </p>
                    <ContactForm />
                </div>
                <div className="w-full md:w-2/5 flex flex-col gap-5 md:pt-1">
                    {infoData.map(({ title, value, icon: Icon }) => (
                        <div key={title} className="flex items-center gap-4">
                            <span className="bg-accentOrange/10 text-accentOrange p-3 rounded-lg shrink-0">
                                <Icon className="w-5 h-5" />
                            </span>
                            <div>
                                <p className="text-white/50 text-xs font-semibold uppercase tracking-wider">
                                    {title}
                                </p>
                                <p className="text-white/85 text-sm break-all">
                                    {value}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </Section>
    );
};

export default ContactSection;
