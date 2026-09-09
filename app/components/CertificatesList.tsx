import { CertificatesListProps } from "../Types/Types";
import Certificates from "./Certificates";

export default function CertificatesList({data} : CertificatesListProps) {
    return (
        <div className="flex flex-col h-full gap-4 py-6 md:grid md:grid-cols-2 lg:grid-cols-3">
            {data.map((certificates) => (
                <Certificates key={certificates.title} certificates={certificates}/>
            ))}
        </div>
    )
}