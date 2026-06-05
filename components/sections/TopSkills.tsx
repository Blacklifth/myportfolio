import { topSkillsData } from "@/constants";

/**
 * Fila de "Top habilidades" del hero: stack principal curado en chips naranjas.
 * Da match inmediato a un reclutador en la primera pantalla, sin scroll.
 */
const TopSkills = () => {
    return (
        <div className="w-full">
            <p className="text-[11px] font-semibold tracking-[0.14em] uppercase text-white/45 mb-2.5">
                Top habilidades
            </p>
            <div className="flex flex-wrap gap-2">
                {topSkillsData.map((skill) => (
                    <span
                        key={skill}
                        className="text-xs px-3 py-1 rounded-full bg-accentOrange/[0.08] border border-accentOrange/35 text-accentOrange"
                    >
                        {skill}
                    </span>
                ))}
            </div>
        </div>
    );
};

export default TopSkills;
