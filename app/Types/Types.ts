export type Projects = {
    img : string;
    title : string;
    projectType : string;
    description : string;
    bullets : string[];
    link : string;
}

export type ProjectsListProps = {
    data : Projects[];
}

export type ProjectsProps = {
    projects : Projects;
}

export type Certificates = {
    img : string;
    title: string;
    description : string;
    year : string;
    link : string;
}

export type CertificatesListProps = {
    data : Certificates[];
}

export type CertificatesProps = {
    certificates : Certificates;
}