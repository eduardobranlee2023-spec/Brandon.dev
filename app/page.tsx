import { ThemeToggle } from "@/components/site/theme-toggle";
import { BrandMark } from "@/components/site/brand-mark";
import { TextReveal } from "@/components/interior/text-reveal";
import {
  CapabilitiesMarquee,
  PortfolioPreview,
  ProjectQuestions,
  ScrollReveal,
} from "@/components/site/landing-interactions";

const whatsappUrl = "https://wa.me/5491151382047?text=Hola%20Brandon%2C%20quiero%20hablar%20sobre%20un%20proyecto%20web.";

const services = [
  {
    title: "Desarrollo web",
    copy: "Sitios y landing pages rápidos, adaptables y hechos a medida para presentar tu negocio con claridad.",
  },
  {
    title: "Diseño UX",
    copy: "Una estructura intuitiva y una identidad visual coherente para que cada visita encuentre su camino.",
  },
  {
    title: "Tiendas online",
    copy: "Experiencias de compra claras, pensadas para que tus productos se vean bien en cualquier pantalla.",
  },
  {
    title: "Mejoras y soporte",
    copy: "Optimización, nuevas funciones y mantenimiento para que tu web siga creciendo con tu proyecto.",
  },
];

const steps = [
  { number: "01", title: "Me cuentas", copy: "Hablamos de tu idea, tus objetivos y qué necesitas resolver con tu web." },
  { number: "02", title: "La pensamos", copy: "Definimos juntos el alcance, la estructura y el estilo visual del proyecto." },
  { number: "03", title: "La construyo", copy: "Desarrollo el sitio y te comparto avances para ajustar los detalles a tiempo." },
  { number: "04", title: "La publicamos", copy: "Revisamos todo y dejo tu web lista para compartir con el mundo." },
];

export default function Home() {
  return (
    <div className="flex min-h-screen flex-1 p-3 sm:p-5">
      <div className="landing-panel mat-panel flex min-h-0 flex-1 flex-col overflow-hidden rounded-[20px]">
        <header className="flex h-12 shrink-0 items-center gap-4 border-b border-hairline px-5">
          <div className="flex items-center gap-2">
            <div className="w-fit origin-left scale-[1.1]">
              <BrandMark />
            </div>
            <span className="text-[13px] font-medium tracking-[-0.04em] text-ink">Brandon.dev</span>
          </div>
          <span className="flex-1" />
          <nav aria-label="Navegación principal" className="mr-2 hidden items-center gap-5 text-[12.5px] text-ink-3 sm:flex">
            <a href="#servicios" className="inline-flex min-h-11 items-center hover:text-ink">Servicios</a>
            <a href="#proceso" className="inline-flex min-h-11 items-center hover:text-ink">Proceso</a>
            <a href="#preguntas" className="inline-flex min-h-11 items-center hover:text-ink">Preguntas</a>
            <a href="#contacto" className="inline-flex min-h-11 items-center hover:text-ink">Contacto</a>
          </nav>
          <ThemeToggle />
        </header>

        <main className="flex-1 px-6 sm:px-12">
          <div className="mx-auto w-full max-w-[1100px]">
            <section aria-label="Intro" className="py-10 sm:py-20">
              <div className="grid items-center gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:gap-10">
                <ScrollReveal>
                  <div className="inline-flex items-center gap-2 rounded-full border border-hairline bg-white/60 px-2.5 py-1.5 text-[10.5px] uppercase tracking-[0.14em] text-ink-3 dark:bg-white/5">
                    <span className="h-1.5 w-1.5 rounded-full bg-[var(--moss)]" />
                    Desarrollador web · Buenos Aires
                  </div>

                  <h1 className="mt-6 max-w-[12ch] text-balance text-[40px] font-medium leading-[0.92] tracking-[-0.06em] text-ink sm:text-[58px] lg:text-[72px]">
                    <TextReveal text="Tu próxima web empieza con una buena charla." maxDuration={1.2} className="text-[var(--ink)] dark:text-[var(--ink)]" />
                  </h1>

                  <p className="mt-6 max-w-[52ch] text-[15px] leading-[1.8] text-ink-2 sm:text-[17px]">
                    Soy Brandon. Diseño y desarrollo sitios web para personas y negocios que quieren contar mejor lo que hacen y conectar con más clientes.
                  </p>

                  <div className="mt-8 flex flex-wrap items-center gap-3">
                    <a
                      href={whatsappUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="press inline-flex h-10 items-center rounded-[10px] px-4 text-[12.5px] font-medium sm:h-11 sm:px-5 sm:text-[13px]"
                      style={{ background: "var(--ink)", color: "var(--panel)" }}
                    >
                      Escribime por WhatsApp
                    </a>
                    <a
                      href="#contacto"
                      className="mat-cap press inline-flex h-10 items-center rounded-[10px] border border-hairline px-4 text-[12.5px] font-medium text-ink-2 hover:text-ink sm:h-11 sm:px-5 sm:text-[13px]"
                    >
                      Hablemos
                    </a>
                  </div>

                  <div className="mt-8 flex flex-wrap items-center gap-4 text-[12px] text-ink-3 sm:text-[13px]">
                    <span>Trato directo</span>
                    <span className="text-hairline">•</span>
                    <span>Diseño premium</span>
                    <span className="text-hairline">•</span>
                    <span>Entrega clara</span>
                  </div>
                </ScrollReveal>

                <PortfolioPreview />
              </div>
            </section>

            <div className="pb-10 sm:pb-14">
              <CapabilitiesMarquee />
            </div>

            <section id="servicios" aria-labelledby="servicios-title" className="landing-divider py-14 sm:py-20">
              <ScrollReveal className="mb-8 flex flex-wrap items-end justify-between gap-5">
                <div>
                  <p className="meta text-ink-3">SERVICIOS</p>
                  <h2 id="servicios-title" className="mt-2 text-[28px] font-medium leading-[1.1] tracking-[-0.05em] text-ink sm:text-[36px]">
                    Soluciones para marcas que quieren verse grandes.
                  </h2>
                </div>
              </ScrollReveal>

              <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
                {services.map((service, index) => (
                  <ScrollReveal key={service.title} delay={index * 0.07} className="h-full">
                  <article className="mat-panel h-full rounded-[12px] p-4 transition-transform duration-300 hover:-translate-y-1 sm:p-5">
                    <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-[10px] border border-hairline bg-[var(--sub)] text-[15px] text-ink">
                      {service.title.split(" ")[0].slice(0, 1)}
                    </div>
                    <h3 className="text-[19px] font-medium tracking-[-0.04em] text-ink">{service.title}</h3>
                    <p className="mt-3 text-[13.5px] leading-[1.8] text-ink-2">{service.copy}</p>
                  </article>
                  </ScrollReveal>
                ))}
              </div>
            </section>

            <section id="proceso" aria-labelledby="proceso-title" className="landing-divider py-14 sm:py-20">
              <ScrollReveal className="mb-8">
                <p className="meta text-ink-3">PROCESO</p>
                <h2 id="proceso-title" className="mt-2 text-[28px] font-medium leading-[1.1] tracking-[-0.05em] text-ink sm:text-[36px]">
                  Un proceso claro para que no haya dudas y sí resultados.
                </h2>
              </ScrollReveal>

              <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
                {steps.map((step, index) => (
                  <ScrollReveal key={step.number} delay={index * 0.07} className="h-full">
                  <article className="mat-well h-full rounded-[12px] p-4 transition-transform duration-300 hover:-translate-y-1 sm:p-5">
                    <p className="meta text-ink-3">{step.number}</p>
                    <h3 className="mt-4 text-[20px] font-medium tracking-[-0.04em] text-ink">{step.title}</h3>
                    <p className="mt-3 text-[13.5px] leading-[1.8] text-ink-2">{step.copy}</p>
                  </article>
                  </ScrollReveal>
                ))}
              </div>
            </section>

            <section id="preguntas" aria-labelledby="preguntas-title" className="landing-divider py-14 sm:py-20">
              <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-12">
                <ScrollReveal>
                <div>
                  <p className="meta text-ink-3">ANTES DE EMPEZAR</p>
                  <h2 id="preguntas-title" className="mt-2 text-[28px] font-medium leading-[1.1] tracking-[-0.05em] text-ink sm:text-[36px]">
                    Una buena idea no necesita venir resuelta.
                  </h2>
                  <p className="mt-4 max-w-[38ch] text-[14px] leading-[1.8] text-ink-2">
                    Si todavía estás ordenando el proyecto, estas respuestas pueden ayudarte a dar el primer paso.
                  </p>
                </div>
                </ScrollReveal>
                <ScrollReveal delay={0.1}>
                  <ProjectQuestions />
                </ScrollReveal>
              </div>
            </section>

            <section id="contacto" aria-labelledby="contacto-title" className="landing-divider py-14 sm:py-20">
              <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
                <ScrollReveal>
                  <div>
                  <p className="meta text-ink-3">CONTACTO</p>
                  <h2 id="contacto-title" className="mt-2 text-[28px] font-medium leading-[1.1] tracking-[-0.05em] text-ink sm:text-[36px]">
                    Listo para que tu proyecto se vea más serio, más claro y más rentable.
                  </h2>
                  <p className="mt-4 max-w-[38ch] text-[14px] leading-[1.8] text-ink-2">
                    Contame qué tenés en mente y vemos juntos cómo convertirlo en una web clara, atractiva y fácil de usar.
                  </p>

                  <div className="mt-6 space-y-3">
                    <a href={whatsappUrl} target="_blank" rel="noreferrer" className="mat-row flex min-h-12 items-center justify-between gap-3 rounded-[12px] px-4 py-3 text-[13px] text-ink hover:text-ink">
                      <span>WhatsApp</span>
                      <span className="tnum text-ink-2">+54 9 11 5138-2047</span>
                      <span aria-hidden="true">↗</span>
                    </a>
                  </div>
                  </div>
                </ScrollReveal>

                <ScrollReveal delay={0.12}>
                <div className="mat-float rounded-[14px] p-4 sm:p-6">
                  <div className="mb-4 flex items-center justify-between gap-3 border-b border-hairline pb-4">
                    <div>
                      <p className="meta text-ink-3">HABLEMOS DE TU PROYECTO</p>
                      <p className="mt-2 text-[22px] font-medium tracking-[-0.04em] text-ink">Un mensaje es suficiente</p>
                    </div>
                    <div className="flex shrink-0 items-center gap-2 rounded-full border border-hairline px-2.5 py-1 text-[10.5px] text-ink-3">
                      <span className="size-1.5 rounded-full bg-[var(--moss)]" />
                      Disponible
                    </div>
                  </div>

                  <p className="max-w-[42ch] text-[14px] leading-[1.8] text-ink-2">
                    No hace falta tener todo definido. Escribime qué querés crear, mejorar o resolver, y te respondo para dar el primer paso.
                  </p>
                  <a href={whatsappUrl} target="_blank" rel="noreferrer" className="press mt-6 inline-flex min-h-11 items-center gap-3 rounded-[10px] px-4 text-[12.5px] font-medium sm:px-5 sm:text-[13px]" style={{ background: "var(--ink)", color: "var(--panel)" }}>
                    Iniciar conversación
                    <span aria-hidden="true">↗</span>
                  </a>
                </div>
                </ScrollReveal>
              </div>
            </section>
          </div>
        </main>

        <footer className="flex flex-wrap items-center justify-between gap-x-6 gap-y-2 border-t border-hairline px-6 py-5 text-[11.5px] leading-relaxed text-ink-3 sm:px-12">
          <div className="flex items-center gap-2">
            <span className="text-[13px] font-medium tracking-[-0.04em] text-ink">Brandon.dev</span>
          </div>
          <div className="flex items-center gap-5">
            <a href={whatsappUrl} target="_blank" rel="noreferrer" className="inline-flex min-h-11 items-center hover:text-ink">WhatsApp</a>
          </div>
        </footer>
      </div>
    </div>
  );
}
