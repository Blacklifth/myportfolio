import { cn } from "@/lib/utils";

interface Props {
    id?: string;
    className?: string;
    children: React.ReactNode;
}

/**
 * Contenedor de sección de la landing.
 * Fuente única de alineación: replica el ancho/padding de la columna del home
 * (max-w-4xl centrado + px-4) para que todo el sitio comparta el mismo eje.
 */
const Section = ({ id, className, children }: Props) => {
    return (
        <section id={id} className={cn("py-16", className)}>
            <div className="max-w-4xl mx-auto px-4">{children}</div>
        </section>
    );
};

export default Section;
