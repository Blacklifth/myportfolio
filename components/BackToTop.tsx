"use client";
import { ArrowUp } from "lucide-react";
import { useEffect, useState } from "react";

/**
 * Botón flotante "volver arriba". Aparece tras hacer scroll y lleva la página
 * al inicio con desplazamiento suave. Sigue el lenguaje glass/accentOrange del
 * resto del sitio.
 */
const BackToTop = () => {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const onScroll = () => setVisible(window.scrollY > 400);
        onScroll();
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    const scrollToTop = () =>
        window.scrollTo({ top: 0, behavior: "smooth" });

    return (
        <button
            type="button"
            onClick={scrollToTop}
            aria-label="Volver arriba"
            className={`fixed bottom-6 right-6 z-50 flex h-11 w-11 items-center justify-center rounded-full glass text-accentOrange border border-accentOrange/30 hover:bg-accentOrange/10 hover:border-accentOrange hoverEffect ${
                visible
                    ? "opacity-100 translate-y-0"
                    : "pointer-events-none opacity-0 translate-y-4"
            }`}
        >
            <ArrowUp className="h-5 w-5" />
        </button>
    );
};

export default BackToTop;
