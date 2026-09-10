"use client";

import Image from "next/image";
import {
  Menu,
  ArrowUpRight,
  CircleCheckBig,
  X,
  Clock,
  Calendar,
  Mail,
  Phone,
  MapPin,
  ArrowDown,
} from "lucide-react";
import { FaGithub, FaInstagram, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { Techs } from "./components/Techs";
import ProjectsList from "./components/ProjectsList";
import CertificatesList from "./components/CertificatesList";
import { useState, useEffect } from "react";

import projects from "@/app/Data/projects.json";
import certificates from "@/app/Data/certificates.json";
import CodeCard from "./components/CodeCard";
import NavMenu from "./components/NavMenu";

export default function Home() {

  const [isOpen, setIsOpen] = useState(false);
  const [showHeader, setShowHeader] = useState(true);
  const [IsClosed, setIsClosed] = useState(true);

  /* Cancela scrool com a nav aberta*/

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  /* Efeito de scroll do header */

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY <= 0) {
        setShowHeader(true);
      } else if (currentScrollY > lastScrollY) {
        setShowHeader(false);
      } else {
        setShowHeader(true);
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <main className="gap-2 bg-(--surface) mx-auto w-full pt-22 md:pt-23">
        <header
          className={`fixed top-0 left-0 right-0 z-30 grid grid-cols-7 w-full mx-auto px-2 py-4 border-b border-(--muted)/10 bg-(--background)/40 backdrop-blur-md transition-transform duration-300 lg:px-20
            ${showHeader || isOpen ? "translate-y-0" : "-translate-y-full"}
          `}
        >
          <div className="col-span-6 flex gap-2 w-auto">
            <Image
              src="/ld-logo-compact-d.svg"
              alt="logo LD"
              width={80}
              height={60}
              className="w-20 h-auto"
            />
            <div className="flex flex-col gap-1">
              <h2 className="font-display font-bold text-(length:--font-md)">
                Lucas Dutra
              </h2>
              <p className="font-sans text-(--muted) text-(length:--font-md)">
                Full Stack Developer
              </p>
            </div>
          </div>

          <div className="col-span-1 flex justify-center">
            <button
              className="relative flex h-12 w-12 items-center justify-center rounded-lg border-2 border-(--muted)/10"
              aria-label={isOpen ? "Fechar menu de navegação" : "Abrir menu de navegação"}
              aria-expanded={isOpen}
              onClick={() => setIsOpen(!isOpen)}
            >
              <Menu
                className={`absolute transition-all duration-300 ${
                  isOpen
                    ? "rotate-90 scale-0 opacity-0"
                    : "rotate-0 scale-100 opacity-100"
                }`}
              />

              <X
                className={`absolute transition-all duration-300 ${
                  isOpen
                    ? "rotate-0 scale-100 opacity-100"
                    : "-rotate-90 scale-0 opacity-0"
                }`}
              />
            </button>
          </div>
        </header>

        <NavMenu isOpen={isOpen} onClose={() => setIsOpen(false)} />

        <section
          id="hero"
          className="min-w-0 border-b-2 border-(--muted)/10 bg-linear-to-br from-(--surface) via-(--background)/80 to-(--surface-light)/90 lg:px-20"
        >
          <div className="px-8 min-w-0">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <div className="grid gap-4 py-4 max-w-97.5 md:max-w-120">
                  <h3 className="font-sans text-(length:--font-md) text-(--accent)">
                    Olá, eu sou o Lucas
                  </h3>

                  <h1 className="font-display font-bold text-(length:--font-6xl) md:text-(length:--font-4xl)">
                    Desenvolvo soluções digitais com{" "}
                    <span className="text-(--primary)">
                      {" "}
                      foco em resultado.
                    </span>
                  </h1>

                  <p className="font-sans text-(length:--font-md) text-(--muted)">
                    Desenvolvo sites, landing pages e sistemas sob medida que
                    combinam tecnologia, design e estratégia para transformar
                    ideias em experiências digitais.
                  </p>
                </div>
                <div className="flex flex-col gap-5 py-4 items-center max-w-98">
                  <a
                    className="flex justify-center gap-1 rounded-2xl w-10/10 py-6 bg-(--primary) text-(length:--font-md) transition-all
                  hover:bg-(--primary-dark)  hover:scale-105 hover:shadow-(--accent)"
                  href="https://wa.me/5548999483625?text=Olá%2C%20vim%20pelo%20seu%20portfólio"
                  target="_blank"
                  >
                    Vamos conversar
                    <FaWhatsapp
                      size={24}
                      className="translate-y-0.5"
                    ></FaWhatsapp>
                  </a>
                </div>
              </div>
              <div className="hidden py-6 md:flex md:flex-col md:justify-around">
                <div className="flex flex-col gap-6">
                  <div className="hidden md:flex md:w-full md:overflow-hidden md:rounded-2xl md:justify-around md:border md:border-(--border) animate-border-glow">
                    <CodeCard />
                  </div>
                  <div className="hidden px-4 py-4 bg-linear-to-bl from-(--background) via-(--surface-light) to-(--primary)/60 border border-(--border) w-full md:rounded-2xl animate-border-glow md:grid md:grid-cols-2 ">
                    <div className="flex items-center gap-3">
                      <Clock className="text-(--primary)" />
                      <div>
                        <p className="text-(--primary-light) text-(length:--font-md)">
                          2+
                        </p>
                        <p className="text-(--muted) text-(length:--font-xs)">
                          Anos de experiência
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <Calendar className="text-(--primary)" />
                      <div>
                        <p className="text-(--primary-light) text-(length:--font-md)">
                          10+
                        </p>
                        <p className="text-(--muted) text-(length:--font-xs)">
                          Projetos
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-4">
              <p className="font-sans font-medium text-(length:--font-md) text-(--accent)">
                Tecnologias que utilizo
              </p>
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
          </div>
        </section>

        <section
          id="sobre"
          className="border-b border-(--border) bg-linear-to-b from-(--surface) via-(--surface-light) to-(--surface) py-10 lg:px-20"
        >
          <div className="flex flex-col px-6 py-6 gap-4">
            <div className="flex flex-col gap-6">
              <h2 className="font-display font-bold text-(--primary) text-(length:--font-2xl)">
                SOBRE MIM
              </h2>
              <div className="md:flex md:gap-4 md:justify-between">
                <div className="md:flex md:flex-col md:max-w-90 min-[1300px]:min-w-160 md:gap-2">
                  <p className="font-sans font-bold text-(length:--font-5xl) md:text-(length:--font-2xl) md:pt-2">
                    Mais que código, entendo{" "}
                    <span className="text-(--primary)">
                      {" "}
                      pessoas e negócios.
                    </span>
                  </p>
                  <p className="hidden font-display text-(--muted) text-(length:--font-md) md:flex">
                    Sou desenvolvedor Full Stack com mais de 2 anos de
                    experiência criando soluções digitais. Trabalho do
                    planejamento à entrega, sempre com foco em resolver
                    problemas reais.
                  </p>
                </div>
                <div className="flex w-full overflow-hidden rounded-2xl border border-(--border) justify-around animate-border-glow mt-4 md:hidden">
                  <CodeCard />
                </div>

                <div className="py-6 flex flex-col justify-around">
                  <ul className="font-sans text-(length:--font-md) text-(--muted) py-2 flex flex-col gap-5">
                    <li className="flex gap-2">
                      <span className="text-(--primary)">
                        <CircleCheckBig />
                      </span>{" "}
                      Atuação em projetos completos (front e back-end)
                    </li>
                    <li className="flex gap-2">
                      <span className="text-(--primary)">
                        <CircleCheckBig />
                      </span>
                      Interfaces modernas, responsivas e acessíveis
                    </li>
                    <li className="flex gap-2">
                      <span className="text-(--primary)">
                        <CircleCheckBig />
                      </span>
                      Código limpo, organizado e escalável
                    </li>
                    <li className="flex gap-2">
                      <span className="text-(--primary)">
                        <CircleCheckBig />
                      </span>
                      Comunicação clara e foco no cliente
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="projetos" className="lg:px-20">
          <div className="flex flex-col px-6">
            <div className="flex justify-between items-center gap-2 py-4">
              <h2 className="font-display font-bold text-(--primary) text-(length:--font-lg) py-2">
                PROJETOS EM DESTAQUE
              </h2>
              <a className="hidden border-2 rounded-lg min-w-22 max-h-12 px-2 py-2 text-(--primary) text-(length:--font-sm) flex items-center justify-center bg-(--surface-light)/80 transition-transform hover:scale-105 hover:bg-(--accent)/30 hover:text-(--accent)">
                Ver todos
              </a>
            </div>
            <div className="py-4">
              <ProjectsList data={projects} />
            </div>
          </div>
        </section>

        <section id="certificados" className="lg:px-20">
          <div className= {`flex flex-col px-6 py-6 md:py-12 overflow-hidden relative transition-[max-height] duration-700 ease-in-out ${
            IsClosed 
            ? "max-h-90 md:max-h-120"
            : "max-h-600"
          }`}
          style={IsClosed ? {
                  maskImage: "linear-gradient(to bottom, black 90%, transparent 100%)",
                  WebkitMaskImage: "linear-gradient(to bottom, black 90%, transparent 100%)",
              } : undefined}>
            <div className="flex justify-between items-center gap-2">
              <h2 className="font-display font-bold text-(--primary) text-(length:--font-lg) py-2">
                CERTIFICAÇÕES
              </h2>
              <a className="hidden border-2 rounded-lg min-w-22 max-h-12 px-2 py-2 text-(--primary) text-(length:--font-sm) flex items-center justify-center bg-(--surface-light)/80 transition-transform hover:scale-105 hover:bg-(--accent)/30 hover:text-(--accent)">
                Ver todas
              </a>
            </div>
            <CertificatesList data={certificates} />
            <button className={`rounded-2xl border border-(--muted)/10 absolute right-6/12 flex gap-0.5 z bg-(--primary)/10 px-4 py-2 translate-x-6/12 backdrop-blur-2xl ${IsClosed ? "bottom-6" : "bottom-0"}`}
            onClick={() => setIsClosed(!IsClosed)}>
              {IsClosed ? `Ver Mais` : `Ver menos`}
            </button>
          </div>
        </section>

        <section id="contato" className="lg:px-20 pt-8">
          <div className="flex flex-col px-6 py-6">
            <div className="border border-(--muted)/20 rounded-2xl bg-linear-to-bl from-(--background) via-(--surface-light) to-(--background) flex flex-col gap-6 px-8 py-6 md:flex-row md:justify-around">
              <div className="flex flex-col gap-6 md:flex-row md:items-center md:pb-6">
                <div className="flex flex-col gap-6 items-center md:flex-row">
                  <div className="bg-linear-to-b from-(--surface-light) via-(--primary)/20 to-(--surface-light) rounded-2xl border border-(--muted)/10 max-h-20">
                    <Image
                      src="/ld-logo-compact-d.svg"
                      alt="logo LD"
                      width={80}
                      height={60}
                      className="w-25 h-auto"
                    />
                  </div>

                  <div>
                    <h2 className="font-display font-bold text-(length:--font-lg) text-center py-3 md:text-(length:--font-xl)">
                      Vamos construir
                      <br /> algo{" "}
                      <span className="text-(--primary)">incrível</span> juntos?
                    </h2>
                  </div>
                </div>
              </div>
              <div className="py-4 flex flex-col gap-4 md:max-w-90">
                <p className="text-(length:--font-sm) text-(--muted) text-center">
                  Estou disponível para projetos freelances e oportunidades de
                  trabalho
                </p>
                <div className="flex w-full">
                  <a
                    className="flex justify-center gap-1 rounded-2xl py-4 bg-(--primary) w-full text-(length:--font-md) transition-all
                    hover:bg-(--primary-dark)  hover:scale-105 hover:shadow-(--accent)"
                    href="https://wa.me/5548999483625?text=Olá%2C%20vim%20pelo%20seu%20portfólio"
                    target="_blank"
                  >
                    Vamos conversar
                    <FaWhatsapp
                      size={24}
                      className="-translate-y-0.5"
                    ></FaWhatsapp>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="bg-(--background) h-60 lg:px-20 border-t border-(--border) px-8">
        <div className="py-6 flex flex-col md:grid md:grid-cols-3 text-(--muted)">
          <div className="flex flex-col items-center text-center gap-2 mt-3">
            <div className="flex items-center">
              <Image
                src="/ld-logo-compact-d.svg"
                alt="logo LD"
                height={80}
                width={80}
              ></Image>
              <h3 className="font-display text-(length:--font-2xl) min-[1020px]:text-(length:--font-lg) text-(--accent)">
                Lucas Dutra
              </h3>
            </div>
            <div>
              <p className="font-display mt-2">Desenvolvedor Full Stack</p>
              <p className="font-display">Transformando ideias em soluções</p>
            </div>
            <div className="flex gap-4 py-2">
              <a className="border border-(--border) rounded-2xl h-12 w-12 flex flex-col justify-around items-center cursor-pointer transition-colors duration-200 hover:text-(--primary)" href="https://github.com/Lucasddr/" target="_blank" aria-label="GitHub">
                <FaGithub className="h-8 w-8"/>
              </a>
              <a className="border border-(--border) rounded-2xl h-12 w-12 flex flex-col justify-around items-center cursor-pointer transition-colors duration-200 hover:text-(--primary)" href="https://www.linkedin.com/in/lucasdutradev" target="_blank" aria-label="Linkedin">
                <FaLinkedin className="h-8 w-8"/>
              </a>
              <a className="border border-(--border) rounded-2xl h-12 w-12 flex flex-col justify-around items-center cursor-pointer transition-colors duration-200 hover:text-(--primary)" href="https://www.instagram.com/l.u_ddr" target="_blank" aria-label="Instagram">
                <FaInstagram className="h-8 w-8"/>
              </a>
          </div>
          </div>
          <div className="flex flex-col items-center py-6 gap-2 md:justify-around">
            <h3 className="text-(--primary) text-(length:--font-2xl) min-[1020px]:text-(length:--font-lg)">Navegação</h3>
            <a className="text-(--muted) text-(length:--font-md) transition-colors duration-200 hover:text-(--primary)" href="#hero">Início</a>
            <a className="text-(--muted) text-(length:--font-md) transition-colors duration-200 hover:text-(--primary)" href="#sobre">Sobre</a>
            <a className="text-(--muted) text-(length:--font-md) transition-colors duration-200 hover:text-(--primary)" href="#projetos">Projetos</a>
            <a className="text-(--muted) text-(length:--font-md) transition-colors duration-200 hover:text-(--primary)" href="#certificados">Certificações</a>
            <a className="text-(--muted) text-(length:--font-md) transition-colors duration-200 hover:text-(--primary)" href="#contato">Contato</a>
          </div>
          <div className="flex flex-col gap-4 py-6 text-center items-center text-(length:--font-md)">
            <h3 className="text-(--primary) text-(length:--font-2xl) min-[1020px]:text-(length:--font-lg)">Contato</h3>
            <p className="flex gap-3"><Mail/>lucas.word.dutra@gmail.com</p>
            <p className="flex gap-3"><Phone/>(48) 99948-3625</p>
            <p className="flex gap-3"><MapPin/>Santa Catarina - Brasil</p>
          </div>
        </div>
      </footer>
    </>
  );
}
