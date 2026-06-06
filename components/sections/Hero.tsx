import HomeDescription from "@/components/HomeDescription";
import Photo from "@/components/Photo";
import SocialLinks from "@/components/SocialLinks";
import TopSkills from "./TopSkills";
import { Button } from "@/components/ui/button";
import { Download, Mail } from "lucide-react";
import Link from "next/link";

/**
 * Sección de inicio (hero). Reutiliza Photo, HomeDescription y SocialLinks;
 * añade la fila de Top habilidades. Usa la misma columna (max-w-4xl + px-4)
 * que el resto de la landing para mantener la alineación.
 */
const Hero = () => {
    return (
        <section id="inicio" className="flex flex-col justify-center min-h-[calc(100vh-100px)] scroll-m-[25vh]">
            <div className="max-w-4xl mx-auto px-4 w-full py-2">
                <div className="flex flex-col gap-3 md:gap-4 text-left w-full">
                    {/* Foto + nombre en una fila (a la izquierda, también en móvil) */}
                    <div className="flex flex-row items-center gap-4 md:gap-8">
                        <div className="shrink-0">
                            <Photo />
                        </div>
                        <div>
                            <h1 className="text-accentOrange text-3xl md:text-5xl tracking-normal">
                                Marcelo Loyola
                            </h1>
                            <h3 className="font-semibold tracking-wider mb-3 text-xs md:text-base">
                                Ingeniero civil informático.
                            </h3>
                            <TopSkills />
                        </div>
                    </div>

                    <div className="w-full min-h-[100px] md:min-h-[80px] flex items-center">
                        <HomeDescription />
                    </div>

                    <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto mt-1">
                        <Button
                            asChild
                            className="bg-accentOrange rounded-full text-white hover:bg-hoverOrange hoverEffect h-12 px-8 text-base font-semibold w-full sm:w-auto"
                        >
                            <Link href="#contacto">
                                Contáctame <Mail className="w-5 h-5 ml-2" />
                            </Link>
                        </Button>
                        <Button
                            asChild
                            className="bg-transparent rounded-full border border-accentOrange/50 text-accentOrange hover:bg-hoverOrange hover:text-white hoverEffect h-12 px-8 text-base font-semibold w-full sm:w-auto"
                        >
                            <a
                                href="/Marcelo_Loyola_CVesp.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Descargar CV <Download className="w-5 h-5 ml-2" />
                            </a>
                        </Button>
                    </div>

                    <div className="mt-2 w-full flex flex-row items-center justify-center md:justify-start">
                        <SocialLinks />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
