import { CertificatesListProps } from "../Types/Types";
import Certificates from "./Certificates";

export default function CertificatesList({data} : CertificatesListProps) {
    return (
        <div className="py-6">
            {data.map((certificates) => (
                <Certificates key={certificates.title} certificates={certificates}/>
            ))}
        </div>
    )
}