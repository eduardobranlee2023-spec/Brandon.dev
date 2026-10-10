"use client";

import { useEffect, useRef, useState } from "react";
import { Accordion, type AccordionItem } from "@/components/interior/accordion";
import { SplineScene } from "@/components/ui/splite";
import {
  LogoMarquee,
  type LogoMarqueeItem,
} from "@/components/interior/logo-marquee";
import { motion, useReducedMotion } from "motion/react";
import type { ReactNode } from "react";

const EASE = [0.23, 1, 0.32, 1] as const;
const SPLINE_SCENE =
  "https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode";

const capabilities: LogoMarqueeItem[] = [
  { id: "design", label: "Diseño con intención" },
  { id: "web", label: "Desarrollo web" },
  { id: "responsive", label: "Hecho para móvil" },
  { id: "motion", label: "Movimiento con propósito" },
  { id: "custom", label: "A medida, de principio a fin" },
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
  const [loaded, setLoaded] = useState(false);
  const sceneRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!loaded) return;

    const canvas = sceneRef.current?.querySelector("canvas");
    if (!canvas) return;

    const forwardPointerMove = (event: PointerEvent) => {
      if (event.target instanceof Node && canvas.contains(event.target)) {
        return;
      }

      canvas.dispatchEvent(
        new PointerEvent("pointermove", {
          bubbles: true,
          clientX: event.clientX,
          clientY: event.clientY,
          pointerId: event.pointerId,
          pointerType: event.pointerType,
          isPrimary: event.isPrimary,
          buttons: event.buttons,
        }),
      );
    };

    window.addEventListener("pointermove", forwardPointerMove);
    return () => window.removeEventListener("pointermove", forwardPointerMove);
  }, [loaded]);

  return (
    <motion.div
      initial={reduced ? false : { opacity: 0, y: 20, rotate: 1.5 }}
      animate={{ opacity: 1, y: 0, rotate: 0 }}
      transition={reduced ? { duration: 0 } : { duration: 0.8, ease: EASE, delay: 0.16 }}
      className="w-full"
    >
      <div className="mb-3 flex items-center justify-between gap-3 px-1">
        <span className="meta text-ink-3">UNA IDEA, DISTINTAS FORMAS</span>
        <span className="meta text-[var(--moss)]">ESCENA 3D · SPLINE</span>
      </div>
      <div
        className="group relative isolate min-h-[320px] overflow-hidden rounded-[14px] border border-hairline bg-[#111613] shadow-[var(--shadow-float)] sm:min-h-[390px] lg:min-h-[440px]"
        onPointerMove={(event) => {
          const bounds = event.currentTarget.getBoundingClientRect();
          event.currentTarget.style.setProperty(
            "--spot-x",
            `${event.clientX - bounds.left}px`,
          );
          event.currentTarget.style.setProperty(
            "--spot-y",
            `${event.clientY - bounds.top}px`,
          );
        }}
        style={{
          backgroundImage:
            "radial-gradient(260px circle at var(--spot-x, 50%) var(--spot-y, 35%), rgba(91, 215, 156, 0.12), transparent 78%), linear-gradient(145deg, #15221c 0%, #111613 60%, #1b1a16 100%)",
        }}
      >
        <div
          ref={sceneRef}
          className="absolute inset-0"
          aria-label="Escena 3D interactiva de Spline"
        >
          <SplineScene
            scene={SPLINE_SCENE}
            className="h-full w-full"
            onLoad={() => setLoaded(true)}
            renderOnDemand
          />
        </div>

        {!loaded ? (
          <div className="pointer-events-none absolute inset-0 z-10 grid place-items-center">
            <span
              aria-label="Cargando escena 3D"
              className="size-7 animate-spin rounded-full border-2 border-white/15 border-t-emerald-200/80"
              role="status"
            />
          </div>
        ) : null}

        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 z-[1] bg-gradient-to-t from-black/45 via-transparent to-black/25"
        />
        <div className="pointer-events-none absolute inset-x-0 top-0 z-20 flex items-start justify-between gap-4 p-4 sm:p-5">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-black/25 px-3 py-2 text-[10px] text-white/85 backdrop-blur-md">
            <span className="size-1.5 rounded-full bg-emerald-300 shadow-[0_0_10px_rgba(110,231,183,0.8)]" />
            EXPERIENCIA INTERACTIVA
          </span>
          <span className="meta rounded-full border border-white/10 bg-black/25 px-3 py-2 text-white/55 backdrop-blur-md">
            MUEVE PARA EXPLORAR
          </span>
        </div>
        <div className="pointer-events-none absolute inset-x-0 bottom-0 z-20 flex items-end justify-between gap-4 p-4 sm:p-5">
          <div>
            <p className="meta text-emerald-100/70">DISEÑO · CÓDIGO · MOVIMIENTO</p>
            <p className="mt-2 text-[18px] font-medium tracking-[-0.04em] text-white sm:text-[22px]">
              Ideas que cobran vida.
            </p>
          </div>
          <a
            href="#portfolio"
            className="pointer-events-auto inline-flex min-h-11 shrink-0 items-center gap-2 rounded-full border border-white/20 bg-black/25 px-4 text-[11px] font-medium text-white backdrop-blur-md transition-colors hover:bg-white/10"
          >
            Ver proyectos <span aria-hidden="true">↗</span>
          </a>
        </div>
      </div>
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