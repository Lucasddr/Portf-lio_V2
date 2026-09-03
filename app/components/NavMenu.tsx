type NavProps = {
    isOpen : boolean;
    onClose: () => void;
}

export default function NavMenu({isOpen, onClose} : NavProps) {
    return (
        <div onClick={onClose} className={`flex flex-col justify-center items-center fixed inset-0 
            w-svw h-svh transition-all duration-300 font-display 
            text-(length:--font-2xl) z-10 bg-(--surface)/80 backdrop-blur-xs ${
            isOpen 
            ? "opacity-100 visible"
            : "opacity-0 invisible pointer-events-none translate-x-20"
            }`}
        >
            <div className="flex flex-col justify-center gap-8 items-center text-(--primary)">
                <a href="#hero" onClick={onClose} className="transition-all duration-150 hover:text-(--primary-light) hover:-translate-y-1">Início</a>
                <a href="#sobre" onClick={onClose} className="transition-all duration-150 hover:text-(--primary-light) hover:-translate-y-1">Sobre</a>
                <a href="#projetos" onClick={onClose} className="transition-all duration-150 hover:text-(--primary-light) hover:-translate-y-1">Projetos</a>
                <a href="#certificados" onClick={onClose} className="transition-all duration-150 hover:text-(--primary-light) hover:-translate-y-1">Certificados</a>
                <a href="#contato" onClick={onClose} className="transition-all duration-150 hover:text-(--primary-light) hover:-translate-y-1">Contato</a>
            </div>
        </div>
    )
}