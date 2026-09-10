import { ProjectsProps } from "../Types/Types";
import { ArrowUpRight } from "lucide-react";

export default function ProjectsCard({ projects }: ProjectsProps) {
return (
    <div className="border border-(--muted)/20 rounded-2xl bg-linear-to-br from-(--background) via-(--surface-light) to-(--background) flex flex-col items-end min-h-114">
        <div className="w-full px-2 py-2">
            <img className="rounded-2xl" src={projects.img} alt={`Mockup ${projects.title}`}></img>
        </div>
        <div className="px-6 py-4 flex flex-col flex-1">
            <div className="flex justify-between gap-4 min-h-10 items-center">
                <h3 className="text-(--accent) text-(length:--font-2xl) font-bold leading-tight line-clamp-1">{projects.title}</h3>
                <p className="shrink-0 border-2 border-(--primary) rounded-xl py-1 px-2 text-(length:--font-sm) text-(--accent) bg-(--primary-dark)/15 flex items-center">{projects.projectType}</p>
            </div>

            <p className="pt-4 line-clamp-2 text-(length:--font-sm) text-(--muted)">{projects.description}</p>

            <div className="flex flex-col flex-wrap">
                <ul className="flex gap-4 pb-4 pt-2">
                    {projects.bullets.map((bullet: string) => (
                        <li className="text-(--muted) border border-(--muted)/60 rounded-lg text-(length:--font-xs) bg-(--muted)/10 px-2 py-1" key={bullet}>{bullet}</li>
                    ))}
                </ul>
            </div>
            <a href={projects.link} className="flex text-(length:--font-md) text-(--primary) gap-1 mt-auto"> Ver Projeto <ArrowUpRight className="translate-y-0.5"/></a>
        </div>
    </div>
);
}
