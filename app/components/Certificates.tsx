import { CertificatesProps } from "../Types/Types";
import { ArrowUpRight } from "lucide-react";

export default function Certificates({certificates} : CertificatesProps) {
    return (
        <div className="bg-(--surface-light) rounded-2xl px-3 py-4 border border-(--muted)/20 h-full">
            <div className="flex flex-col gap-4 h-full">
                <div className="w-26 px-2">
                    <img className="" src={certificates.img} alt={`Logo ${certificates.institution}`}/>
                </div>
                <div className="px-2 flex flex-col flex-1">
                    <h3 className="font-sans font-bold text-(length:--font-lg) pb-2">{certificates.title}</h3>
                    <p className="text-(--muted) pb-1 text-(length:--font-sm)">{certificates.institution}</p>
                    <p className="text-(--muted) pb-2 text-(length:--font-sm)">{certificates.year}</p>

                    <a className="text-(--primary) text-(length:--font-md) flex gap-1 mt-auto" href={certificates.link}>Ver Certificado <ArrowUpRight className="-translate-y-0.5"/></a>
                </div>
            </div>
        </div>
    )
}