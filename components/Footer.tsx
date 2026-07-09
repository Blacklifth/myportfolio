import Link from "next/link";
import { navbarData } from "@/constants";
import Logo from "./Logo";
import SocialLinks from "./SocialLinks";

/**
 * Footer del sitio. Reutiliza el mismo eje de alineación que las secciones
 * (max-w-4xl + px-4) y el lenguaje visual glass/accentOrange del resto del
 * portafolio. Se renderiza una sola vez al final del layout.
 */
const Footer = () => {
    const year = new Date().getFullYear();

    return (
        <footer className="w-full border-t border-white/10 glass rounded-none mt-16 text-white/80">
            <div className="max-w-4xl mx-auto px-4 py-12">
                <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
                    <div className="max-w-xs">
                        <Logo title="Marcelo" subtitle="." />
                        <p className="mt-3 text-sm leading-relaxed text-white/55">
                            Ingeniero Civil Informático. Desarrollo full-stack e
                            integración de IA / LLMs.
                        </p>
                        <div className="mt-5">
                            <SocialLinks />
                        </div>
                    </div>

                    <nav className="flex flex-col gap-2.5 text-sm">
                        <p className="mb-1 text-xs font-semibold uppercase tracking-wider text-white/40">
                            Navegación
                        </p>
                        {navbarData.map((item) => (
                            <Link
                                key={item.title}
                                href={item.href}
                                className="text-white/70 hover:text-accentOrange hoverEffect w-fit"
                            >
                                {item.title}
                            </Link>
                        ))}
                    </nav>

                    <div className="flex flex-col gap-2.5 text-sm">
                        <p className="mb-1 text-xs font-semibold uppercase tracking-wider text-white/40">
                            Contacto
                        </p>
                        <a
                            href="mailto:marcelo@moccadev.cl"
                            className="text-white/70 hover:text-accentOrange hoverEffect w-fit break-all"
                        >
                            marcelo@moccadev.cl
                        </a>
                        <span className="text-white/70">Viña del Mar, Chile</span>
                        <a
                            href="/Marcelo_Loyola_CVesp.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-white/70 hover:text-accentOrange hoverEffect w-fit"
                        >
                            Descargar CV
                        </a>
                    </div>
                </div>

                <div className="mt-10 border-t border-white/10 pt-6 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between text-xs text-white/40">
                    <p>© {year} Marcelo Loyola. Todos los derechos reservados.</p>
                    <p>
                        Construido con{" "}
                        <span className="text-accentOrange/80">Next.js</span> y{" "}
                        <span className="text-accentOrange/80">Tailwind CSS</span>.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
