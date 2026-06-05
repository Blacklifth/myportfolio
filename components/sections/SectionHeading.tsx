interface Props {
    index: string;
    title: string;
}

/**
 * Encabezado de sección: índice + título + línea divisoria.
 * Reemplaza a las pestañas del antiguo Resume marcando cada bloque del scroll.
 */
const SectionHeading = ({ index, title }: Props) => {
    return (
        <div className="flex items-baseline gap-3.5 mb-8">
            <span className="text-sm font-semibold tracking-widest text-accentOrange/60">
                {index}
            </span>
            <h2 className="text-2xl md:text-3xl font-bold text-accentOrange">
                {title}
            </h2>
            <span className="flex-1 h-px bg-white/10" />
        </div>
    );
};

export default SectionHeading;
