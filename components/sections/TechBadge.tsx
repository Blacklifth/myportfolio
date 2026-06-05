import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface Props {
    children: React.ReactNode;
    className?: string;
}

/**
 * Chip de tecnología/skill. Fuente única del estilo de los badges grises
 * usados en Experiencia, Habilidades y Educación.
 */
const TechBadge = ({ children, className }: Props) => {
    return (
        <Badge
            variant="outline"
            className={cn(
                "bg-white/[0.06] border-white/10 text-white/85 font-normal hover:border-accentOrange/40 hover:bg-white/[0.1] transition-colors",
                className
            )}
        >
            {children}
        </Badge>
    );
};

export default TechBadge;
