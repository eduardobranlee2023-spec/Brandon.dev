"use client";

import { Accordion, type AccordionItem } from "@/components/interior/accordion";
import {
  LogoMarquee,
  type LogoMarqueeItem,
} from "@/components/interior/logo-marquee";
import { Tabs } from "@/components/interior/tabs";
import { motion, useReducedMotion } from "motion/react";
import type { ReactNode } from "react";

const EASE = [0.23, 1, 0.32, 1] as const;

const capabilities: LogoMarqueeItem[] = [
  { id: "design", label: "Diseño con intención" },
  { id: "web", label: "Desarrollo web" },
  { id: "responsive", label: "Hecho para móvil" },
  { id: "motion", label: "Movimiento con propósito" },
  { id: "custom", label: "A medida, de principio a fin" },
];

const previews = {
  services: {
    label: "SITIO DE SERVICIOS",
    headline: "Tu trabajo merece una buena presentación.",
    detail: "Una propuesta clara. Un próximo paso sencillo.",
    action: "Conocer el estudio",
    background: "#d8ef91",
    ink: "#183b37",
    accent: "#f7f1e5",
  },
  shop: {
    label: "TIENDA ONLINE",
    headline: "Lo que hacés, listo para llegar más lejos.",
    detail: "Productos al frente y una compra sin vueltas.",
    action: "Explorar colección",
    background: "#f3c47b",
    ink: "#302514",
    accent: "#f8f6ed",
  },
  portfolio: {
    label: "PORTFOLIO PERSONAL",
    headline: "Una página que habla con tu propia voz.",
    detail: "Tu historia, tu trabajo y lo que viene después.",
    action: "Ver proyectos",
    background: "#cfe8e4",
    ink: "#1a3938",
    accent: "#f7f1e5",
  },
} as const;

const previewTabs = [
  { value: "services", label: "Servicios" },
  { value: "shop", label: "Tienda" },
  { value: "portfolio", label: "Portfolio" },
];

const questions: AccordionItem[] = [
  {
    id: "start",
    title: "¿Qué necesito para empezar?",
    content: <p>Con una idea general alcanza. En la primera charla ordenamos el objetivo y vemos qué tipo de sitio tiene sentido.</p>,
  },
  {
    id: "design",
    title: "¿Tengo que traer el diseño listo?",
    content: <p>No. Podemos definir juntos la estructura y la dirección visual antes de pasar al desarrollo.</p>,
  },
  {
    id: "quote",
    title: "¿Cómo pedimos un presupuesto?",
    content: <p>Escribime por Instagram con una descripción de tu proyecto. Con el alcance claro, te preparo una propuesta.</p>,
  },
];

export function ScrollReveal({
  children,
  delay = 0,
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  const reduced = useReducedMotion() === true;

  return (
    <motion.div
      className={`docs-enter ${className}`}
      initial={reduced ? false : { opacity: 0, y: 24, filter: "blur(7px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, amount: 0.16, margin: "0px 0px -48px 0px" }}
      transition={reduced ? { duration: 0 } : { duration: 0.68, ease: EASE, delay }}
    >
      {children}
    </motion.div>
  );
}

export function CapabilitiesMarquee() {
  return (
    <ScrollReveal>
      <LogoMarquee
        items={capabilities}
        label="Servicios y enfoque de trabajo"
        speed={32}
        gap={22}
        className="rounded-[10px]"
      />
    </ScrollReveal>
  );
}

export function PortfolioPreview() {
  const reduced = useReducedMotion() === true;

  return (
    <motion.div
      initial={reduced ? false : { opacity: 0, y: 20, rotate: 1.5 }}
      animate={{ opacity: 1, y: 0, rotate: 0 }}
      transition={reduced ? { duration: 0 } : { duration: 0.8, ease: EASE, delay: 0.16 }}
      className="w-full"
    >
      <div className="mb-3 flex items-center justify-between gap-3 px-1">
        <span className="meta text-ink-3">UNA IDEA, DISTINTAS FORMAS</span>
        <span className="meta text-[var(--moss)]">EXPLORÁ EL PREVIEW</span>
      </div>
      <Tabs
        items={previewTabs}
        defaultValue="services"
        label="Explorar tipos de sitio web"
        panelClassName="p-2 sm:p-3"
        renderPanel={(value) => {
          const preview = previews[value as keyof typeof previews];

          return (
            <div
              className="relative isolate grid min-h-[300px] overflow-hidden rounded-[8px] p-5 sm:min-h-[330px] sm:grid-cols-[1.1fr_0.9fr] sm:items-center sm:p-7"
              style={{ background: preview.background, color: preview.ink }}
            >
              <div className="relative z-10 max-w-[28ch] py-3 sm:py-0">
                <p className="meta opacity-65">{preview.label}</p>
                <p className="mt-5 text-[25px] font-medium leading-[0.98] tracking-[-0.05em] sm:text-[34px]">
                  {preview.headline}
                </p>
                <p className="mt-4 max-w-[30ch] text-[12.5px] leading-[1.65] opacity-75">
                  {preview.detail}
                </p>
                <span
                  className="mt-5 inline-flex min-h-9 items-center rounded-[7px] px-3 text-[11px] font-medium"
                  style={{ background: preview.ink, color: preview.accent }}
                >
                  {preview.action} <span aria-hidden="true" className="ml-3">↗</span>
                </span>
              </div>

              <motion.div
                aria-hidden="true"
                className="relative mx-auto mt-5 grid aspect-[0.86] w-[min(100%,190px)] grid-rows-[auto_1fr_auto] gap-3 rounded-[7px] p-3 shadow-[0_18px_40px_-22px_rgba(0,0,0,0.5)] sm:mt-0 sm:w-full"
                style={{ background: preview.accent, color: preview.ink }}
                animate={reduced ? undefined : { y: [0, -5, 0] }}
                transition={reduced ? undefined : { duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
              >
                <div className="flex items-center justify-between border-b border-current/15 pb-2">
                  <span className="meta">TU MARCA</span>
                  <span className="flex gap-1" aria-hidden="true">
                    <i className="size-1 rounded-full bg-current/30" />
                    <i className="size-1 rounded-full bg-current/30" />
                    <i className="size-1 rounded-full bg-current/30" />
                  </span>
                </div>
                <div className="flex flex-col justify-center">
                  <span className="meta opacity-55">HECHO PARA VOS</span>
                  <span className="mt-2 block h-3 w-[86%] rounded-sm bg-current/80" />
                  <span className="mt-1.5 block h-2 w-[62%] rounded-sm bg-current/25" />
                  <div className="mt-5 grid grid-cols-2 gap-2">
                    <span className="aspect-[1.25] rounded-[4px]" style={{ background: preview.background }} />
                    <span className="aspect-[1.25] rounded-[4px] bg-current/10" />
                  </div>
                </div>
                <div className="flex items-center justify-between border-t border-current/15 pt-2">
                  <span className="meta opacity-55">TU PRÓXIMA WEB</span>
                  <span className="size-4 rounded-full" style={{ background: preview.background }} />
                </div>
              </motion.div>
            </div>
          );
        }}
      />
    </motion.div>
  );
}

export function ProjectQuestions() {
  return (
    <Accordion
      items={questions}
      defaultOpen={["start"]}
      headingLevel={3}
      className="w-full"
    />
  );
}