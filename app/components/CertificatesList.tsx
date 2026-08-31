import { CertificatesListProps } from "../Types/Types";
import Certificates from "./Certificates";

export default function CertificatesList({data} : CertificatesListProps) {
    return (
        <div className="flex flex-col gap-4 py-6">
            {data.map((certificates) => (
                <Certificates key={certificates.title} certificates={certificates}/>
            ))}
        </div>
    )
}