import Image from "next/image";
import { Menu, ArrowUpRight } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { Techs } from "./components/Techs";
import ProjectsList from "./components/ProjectsList";
import CertificatesList from "./components/CertificatesList";

import projects from "@/app/Data/projects.json";
import certificates from "@/app/Data/certificates.json"

export default function Home() {
  return (
    <>
      <main className="gap-2 bg-(--surface) mx-auto w-full max-w-7xl">
        <header className="grid grid-cols-7 w-full px-2 py-4 border-b border-(--muted)/10 bg-(--background)/40 backdrop-blur-md">
          <div className="col-span-6 flex gap-2 w-auto">
            <Image
              src="/ld-logo-compact-d.svg"
              alt="LD"
              width={80}
              height={60}
              className="w-20 h-auto"
            />
            <div className="flex flex-col gap-1">
              <h2 className="font-display font-bold text-(length:--font-md)">Lucas Dutra</h2>
              <p className="font-sans text-(--muted) text-(length:--font-md)">Full Stack Developer</p>
            </div>
          </div>

          <div className="col-span-1 flex justify-center">
            <div className="border-2 border-(--muted)/10 rounded-lg flex flex-col justify-center w-12 items-center">
              <Menu></Menu>
            </div>
          </div>
        </header>

        <section className="min-w-0 border-b-2 border-(--muted)/10 bg-linear-to-br from-(--surface) via-(--background)/80 to-(--surface-light)/90 min-h-svh">
          <div className="px-8 min-w-0">
            <div className="grid gap-4 py-4">
              <h3 className="font-sans text-(length:--font-md) text-(--accent)">
                Código com propósito <br />
                Design com intenção.
              </h3>

              <h1 className="font-display font-bold text-(length:--font-6xl)">
                Desenvolvo soluções digitais com{" "}
                <span className="text-(--primary)"> foco em resultado.</span>
              </h1>

              <p className="font-sans text-(length:--font-md) text-(--muted)">
                Desenvolvo sites, landing pages e sistemas sob medida que
                combinam tecnologia, design e estratégia para transformar ideias
                em experiências digitais.
              </p>
            </div>

            <div className="flex flex-col gap-5 py-4 items-center">
              <a
                className="flex justify-center gap-1 rounded-2xl w-10/10 py-6 bg-(--primary) text-(length:--font-md) transition-all
                hover:bg-(--primary-dark)  hover:scale-105 hover:shadow-(--accent)"
              >
                Vamos conversar
                <FaWhatsapp size={24} className="-translate-y-0.5"></FaWhatsapp>
              
              </a>
            </div>

            <div className="mt-4">
              <p className="font-sans font-medium text-(length:--font-md) text-(--accent)">Tecnologias que utilizo</p>
              <div
                className="relative w-full overflow-hidden my-4"
                style={{
                  maskImage:
                    "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
                  WebkitMaskImage:
                    "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
                }}
              >
                <div className="tech-track flex w-max gap-[clamp(1.25rem,5vw,2rem)] py-4 transition-all">
                  <Techs />
                  <Techs />
                </div>
              </div>
            </div>

            <div>{/* Espaço para imagem do código em desktop e tablet */}</div>
          </div>
        </section>

        <section className="bg-linear-to-b from-(--background) to-(--surface)">
          <div className="flex flex-col px-6 py-6 gap-4">
            <div className="flex flex-col gap-6">
              <h2 className="font-display font-bold text-(--primary) text-(length:--font-2xl)">SOBRE MIM</h2>
              <p className="font-sans font-bold text-(length:--font-5xl)">Mais que código, entendo <span className="text-(--primary)"> pessoas e negócios.</span></p>
            </div>

            <div>{/*Foto minha olhando pro lado ou coisa parecida*/}</div>

            <div>
              <ul className="font-sans text-(length:--font-md) text-(--muted) py-2 flex flex-col gap-2">
                <li>Atuação em projetos completos (front e back-end)</li>
                <li>Interfaces modernas, responsivas e acessíveis</li>
                <li>Código limpo, organizado e escalável</li>
                <li>Comunicação clara e foco no cliente</li>
              </ul>
            </div>
          </div>
        </section>

        <section>
          <div className="flex flex-col px-6">
            <div className="flex justify-between items-center gap-2">
              <h2 className="font-display font-bold text-(--primary) text-(length:--font-lg) py-2">PROJETOS EM DESTAQUE</h2>
              <a className="border-2 rounded-lg min-w-22 max-h-12 px-2 py-2 text-(--primary) text-(length:--font-sm) flex items-center justify-center bg-(--surface-light)/80 transition-transform hover:scale-105 hover:bg-(--accent)/30 hover:text-(--accent)">Ver todos</a>
            </div>
            <div className="py-4">
              <ProjectsList data={projects}/>
          </div>
            </div>
        </section>

        <section>
          <div className="flex flex-col px-6 py-6">
            <div className="flex justify-between items-center gap-2">
              <h2 className="font-display font-bold text-(--primary) text-(length:--font-lg) py-2">CERTIFICAÇÕES</h2>
              <a className="border-2 rounded-lg min-w-22 max-h-12 px-2 py-2 text-(--primary) text-(length:--font-sm) flex items-center justify-center bg-(--surface-light)/80 transition-transform hover:scale-105 hover:bg-(--accent)/30 hover:text-(--accent)">Ver todas</a>
            </div>
            <CertificatesList data={certificates}/>
          </div>
        </section>

        <section>
          <div className="flex flex-col px-6 py-6">
            <div className="border border-(--muted)/20 rounded-2xl bg-linear-to-bl from-(--background) via-(--surface-light) to-(--background) flex flex-col px-8 py-6">
                <div className="w-full flex justify-around">
                  <div className="bg-linear-to-b from-(--surface-light) via-(--primary)/20 to-(--surface-light) rounded-2xl border border-(--muted)/10">
                  <Image
                    src="/ld-logo-compact-d.svg"
                    alt="LD"
                    width={80}
                    height={60}
                    className="w-25 h-auto"
                  />
                  </div>
                </div>
                <div>
                  <h2 className="font-display font-bold text-(length:--font-lg) text-center py-3">Vamos construir<br /> algo <span className="text-(--primary)">incrível</span> juntos?</h2>
                  <p className="text-(length:--font-sm) text-(--muted) text-center">Estou disponível para projetos freelances e oportunidades de trabalho</p>
                </div>
                <div className="flex w-full justify-around py-6">
                <a
                className="flex justify-center gap-1 rounded-2xl py-4 bg-(--primary) w-full text-(length:--font-md) transition-all
                hover:bg-(--primary-dark)  hover:scale-105 hover:shadow-(--accent)">Vamos conversar<FaWhatsapp size={24} className="-translate-y-0.5"></FaWhatsapp></a>
                </div>

            </div>
          </div>
        </section>
      </main>
      <footer>
        <div>
          <div>{/*Conteúdo supper mega foda*/}</div>
        </div>
      </footer>
    </>
  );
}
