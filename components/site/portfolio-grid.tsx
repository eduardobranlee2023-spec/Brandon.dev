"use client";

import { ArrowUpRight } from "@phosphor-icons/react";
import { motion, useReducedMotion } from "motion/react";
import { ScrollReveal } from "@/components/site/landing-interactions";

const PRESS_SPRING = {
  type: "spring",
  stiffness: 520,
  damping: 34,
  mass: 0.45,
} as const;

const projects = [
  {
    name: "Personal Trader",
    url: "https://personaltrader.vercel.app/",
    type: "Aplicación web",
    detail: "Plataforma de trading conectada a una base de datos.",
    accent: "#b9d6c8",
    mark: "PT",
  },
  {
    name: "MorShop",
    url: "https://morshop.vercel.app/",
    type: "E-commerce",
    detail: "Una app para crear tu propia tienda online, con base de datos.",
    accent: "#e9c398",
    mark: "M",
  },
  {
    name: "Patricia & Fabián",
    url: "https://invitacion-patricia-fabian.vercel.app/",
    type: "Invitación de boda",
    detail: "Una invitación digital para celebrar una historia juntos.",
    accent: "#d7c3bc",
    mark: "P&F",
  },
  {
    name: "XV de Tatiana",
    url: "https://invitacion-xv-tatiana.vercel.app/",
    type: "Invitación de XV",
    detail: "Una invitación web para compartir todos los detalles del festejo.",
    accent: "#d8c9e8",
    mark: "XV",
  },
  {
    name: "SR Eventos",
    url: "https://sr-eventos.vercel.app/",
    type: "Sitio para eventos",
    detail: "La presencia digital de una empresa organizadora de eventos.",
    accent: "#e4c69e",
    mark: "SR",
  },
  {
    name: "XV de Madelaine",
    url: "https://mis-xv-madelaine.vercel.app/",
    type: "Invitación de XV",
    detail: "Una invitación digital pensada para una noche especial.",
    accent: "#c9d8cb",
    mark: "XV",
  },
  {
    name: "My Librería",
    url: "https://my-libreria.vercel.app/",
    type: "Landing page",
    detail: "Una página de contacto para un kiosco y librería.",
    accent: "#e1d59b",
    mark: "ML",
  },
  {
    name: "Nexar Agency",
    url: "https://nexaragency.vercel.app/",
    type: "Landing page",
    detail: "La landing de una agencia digital.",
    accent: "#b8cbde",
    mark: "N",
  },
  {
    name: "Las memorias son historia",
    url: "https://las-memorias-son-historia.vercel.app/",
    type: "Proyecto educativo",
    detail: "Un proyecto escolar sobre la democracia argentina.",
    accent: "#d7b9aa",
    mark: "MH",
  },
] as const;

export function PortfolioGrid() {
  const reduced = useReducedMotion() === true;

  return (
    <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
      {projects.map((project, index) => (
        <ScrollReveal
          key={project.url}
          delay={index % 3 * 0.045}
          className="h-full"
        >
          <motion.a
            href={project.url}
            target="_blank"
            rel="noreferrer"
            aria-label={`Abrir ${project.name}, ${project.type} (se abre en una pestaña nueva)`}
            className="group mat-panel flex h-full flex-col overflow-hidden rounded-[14px] transition-shadow duration-300 hover:shadow-[var(--shadow-float)]"
            initial="rest"
            variants={{
              rest: { y: 0, scale: 1 },
              hover: { y: -5, scale: 1.01 },
            }}
            whileHover={reduced ? undefined : "hover"}
            whileFocus={reduced ? undefined : "hover"}
            whileTap={reduced ? undefined : { y: 0, scale: 0.985 }}
            transition={reduced ? { duration: 0 } : PRESS_SPRING}
          >
            <div
              className="relative flex aspect-[1.7] items-end justify-between overflow-hidden p-5 sm:p-6"
              style={{ backgroundColor: project.accent }}
            >
              <motion.span
                aria-hidden="true"
                className="pointer-events-none absolute -right-5 -top-14 select-none text-[190px] font-medium leading-none tracking-[-0.11em] text-black/[0.07]"
                variants={{
                  rest: { scale: 1, x: 0 },
                  hover: { scale: 1.06, x: -5 },
                }}
                transition={reduced ? { duration: 0 } : PRESS_SPRING}
              >
                {project.mark}
              </motion.span>
              <span className="relative rounded-full border border-black/15 bg-white/55 px-3 py-1.5 text-[10px] font-medium text-black/65 backdrop-blur-sm">
                {project.type}
              </span>
              <motion.span
                className="relative grid size-10 place-items-center rounded-full bg-black/10 text-black"
                variants={{
                  rest: { rotate: 0, scale: 1 },
                  hover: { rotate: 45, scale: 1.08 },
                }}
                transition={reduced ? { duration: 0 } : PRESS_SPRING}
              >
                <ArrowUpRight size={19} weight="regular" aria-hidden="true" />
              </motion.span>
            </div>

            <div className="flex flex-1 flex-col p-5 sm:p-6">
              <p className="meta break-all text-ink-3">
                {new URL(project.url).hostname}
              </p>
              <h3 className="mt-3 text-[20px] font-medium leading-tight tracking-[-0.045em] text-ink">
                {project.name}
              </h3>
              <p className="mt-2 flex-1 text-[13px] leading-[1.7] text-ink-2">
                {project.detail}
              </p>
              <span className="mt-5 inline-flex min-h-11 items-center gap-2 text-[12px] font-medium text-ink">
                Ver proyecto
                <motion.span
                  aria-hidden="true"
                  className="inline-flex"
                  variants={{
                    rest: { x: 0, y: 0 },
                    hover: { x: 2, y: -2 },
                  }}
                  transition={reduced ? { duration: 0 } : PRESS_SPRING}
                >
                  <ArrowUpRight size={15} />
                </motion.span>
              </span>
            </div>
          </motion.a>
        </ScrollReveal>
      ))}
    </div>
  );
}
