import { ThemeToggle } from "@/components/site/theme-toggle";
import { BrandMark } from "@/components/site/brand-mark";
import { TextReveal } from "@/components/interior/text-reveal";
import {
  CapabilitiesMarquee,
  PortfolioPreview,
  ProjectQuestions,
  ScrollReveal,
} from "@/components/site/landing-interactions";
import { PortfolioGrid } from "@/components/site/portfolio-grid";

const instagramUrl = "https://www.instagram.com/brandon.vkc/";

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
    <div className="flex min-h-screen flex-1 p-2 sm:p-5">
      <div className="landing-panel mat-panel flex min-h-0 flex-1 flex-col overflow-hidden rounded-[20px]">
        <header className="flex h-12 shrink-0 items-center gap-3 border-b border-hairline px-3 sm:gap-4 sm:px-5">
          <div className="flex items-center gap-2">
            <BrandMark />
            <span className="text-[13px] font-medium tracking-[-0.04em] text-ink">Brandon.dev</span>
          </div>
          <span className="flex-1" />
          <nav aria-label="Navegación principal" className="mr-2 hidden items-center gap-4 text-[12.5px] text-ink-3 lg:flex">
            <a href="#portfolio" className="inline-flex min-h-11 items-center hover:text-ink">Portfolio</a>
            <a href="#servicios" className="inline-flex min-h-11 items-center hover:text-ink">Servicios</a>
            <a href="#proceso" className="inline-flex min-h-11 items-center hover:text-ink">Proceso</a>
            <a href="#preguntas" className="inline-flex min-h-11 items-center hover:text-ink">Preguntas</a>
            <a href="#contacto" className="inline-flex min-h-11 items-center hover:text-ink">Contacto</a>
          </nav>
          <ThemeToggle />
        </header>

        <nav
          aria-label="Navegación móvil"
          className="no-bar flex shrink-0 gap-1 overflow-x-auto border-b border-hairline px-2 py-1.5 text-[12px] text-ink-3 lg:hidden"
        >
          <a href="#portfolio" className="inline-flex min-h-10 shrink-0 items-center rounded-[7px] px-3 hover:bg-[var(--sub)] hover:text-ink">Portfolio</a>
          <a href="#servicios" className="inline-flex min-h-10 shrink-0 items-center rounded-[7px] px-3 hover:bg-[var(--sub)] hover:text-ink">Servicios</a>
          <a href="#proceso" className="inline-flex min-h-10 shrink-0 items-center rounded-[7px] px-3 hover:bg-[var(--sub)] hover:text-ink">Proceso</a>
          <a href="#preguntas" className="inline-flex min-h-10 shrink-0 items-center rounded-[7px] px-3 hover:bg-[var(--sub)] hover:text-ink">Preguntas</a>
          <a href="#contacto" className="inline-flex min-h-10 shrink-0 items-center rounded-[7px] px-3 hover:bg-[var(--sub)] hover:text-ink">Contacto</a>
        </nav>

        <main className="flex-1 px-4 sm:px-8 lg:px-12">
          <div className="mx-auto w-full max-w-[1100px]">
            <section aria-label="Intro" className="py-9 sm:py-16 lg:py-20">
              <div className="grid items-center gap-9 lg:grid-cols-[1.15fr_0.85fr] lg:gap-10">
                <ScrollReveal>
                  <div className="inline-flex max-w-full items-center gap-2 rounded-full border border-hairline bg-white/60 px-2.5 py-1.5 text-[10px] uppercase tracking-[0.1em] text-ink-3 dark:bg-white/5 sm:text-[10.5px] sm:tracking-[0.14em]">
                    <span className="h-1.5 w-1.5 rounded-full bg-[var(--moss)]" />
                    Diseño y desarrollo web
                  </div>

                  <h1 className="mt-6 max-w-[12ch] text-balance text-[clamp(2.65rem,10.5vw,4.5rem)] font-medium leading-[0.94] tracking-[-0.065em] text-ink">
                    <TextReveal text="Ideas que se convierten en experiencias web." maxDuration={0.95} className="text-[var(--ink)] dark:text-[var(--ink)]" />
                  </h1>

                  <p className="mt-5 max-w-[52ch] text-[14px] leading-[1.8] text-ink-2 sm:mt-6 sm:text-[17px]">
                    Soy Brandon. Diseño y desarrollo sitios, tiendas y aplicaciones web para personas y negocios que quieren llevar sus ideas más lejos.
                  </p>

                  <div className="mt-7 flex flex-wrap items-center gap-3 sm:mt-8">
                    <a
                      href={instagramUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="press inline-flex min-h-11 items-center rounded-[10px] px-4 text-[12.5px] font-medium sm:px-5 sm:text-[13px]"
                      style={{ background: "var(--ink)", color: "var(--panel)" }}
                    >
                      Hablemos por Instagram
                      <span aria-hidden="true" className="ml-2">↗</span>
                    </a>
                    <a
                      href="#portfolio"
                      className="mat-cap press inline-flex min-h-11 items-center rounded-[10px] border border-hairline px-4 text-[12.5px] font-medium text-ink-2 hover:text-ink sm:px-5 sm:text-[13px]"
                    >
                      Ver mis proyectos
                    </a>
                  </div>

                  <div className="mt-7 flex flex-wrap items-center gap-x-3 gap-y-2 text-[11px] text-ink-3 sm:mt-8 sm:gap-4 sm:text-[13px]">
                    <span>Trato directo</span>
                    <span className="text-hairline">•</span>
                    <span>Diseño a medida</span>
                    <span className="text-hairline">•</span>
                    <span>Webs responsive</span>
                  </div>
                </ScrollReveal>

                <PortfolioPreview />
              </div>
            </section>

            <div className="pb-10 sm:pb-14">
              <CapabilitiesMarquee />
            </div>

            <section id="portfolio" aria-labelledby="portfolio-title" className="landing-divider scroll-mt-6 py-12 sm:py-16 lg:py-20">
              <ScrollReveal className="mb-7 flex flex-wrap items-end justify-between gap-4 sm:mb-9">
                <div>
                  <p className="meta text-ink-3">TRABAJO REAL</p>
                  <h2 id="portfolio-title" className="mt-2 text-[30px] font-medium leading-[1.05] tracking-[-0.055em] text-ink sm:text-[36px]">
                    Proyectos que ya están en la web.
                  </h2>
                  <p className="mt-3 max-w-[52ch] text-[13.5px] leading-[1.75] text-ink-2 sm:text-[14px]">
                    Aplicaciones, tiendas, invitaciones y sitios hechos para resolver necesidades distintas.
                  </p>
                </div>
                <span className="meta text-ink-3">9 PROYECTOS · ABRIR EN VIVO ↗</span>
              </ScrollReveal>

              <PortfolioGrid />
            </section>

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
                    <a href={instagramUrl} target="_blank" rel="noreferrer" className="mat-row flex min-h-12 items-center justify-between gap-3 rounded-[12px] px-4 py-3 text-[13px] text-ink hover:text-ink">
                      <span>Instagram</span>
                      <span className="text-ink-2">@brandon.vkc</span>
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
                      <p className="mt-2 text-[22px] font-medium tracking-[-0.04em] text-ink">Hablemos de tu idea</p>
                    </div>
                  </div>

                  <p className="max-w-[42ch] text-[14px] leading-[1.8] text-ink-2">
                    No hace falta tener todo definido. Escribime por Instagram qué querés crear, mejorar o resolver, y vemos juntos cómo empezar.
                  </p>
                  <a href={instagramUrl} target="_blank" rel="noreferrer" className="press mt-6 inline-flex min-h-11 items-center gap-3 rounded-[10px] px-4 text-[12.5px] font-medium sm:px-5 sm:text-[13px]" style={{ background: "var(--ink)", color: "var(--panel)" }}>
                    Escribime en Instagram
                    <span aria-hidden="true">↗</span>
                  </a>
                </div>
                </ScrollReveal>
              </div>
            </section>
          </div>
        </main>

        <footer className="flex flex-wrap items-center justify-between gap-x-6 gap-y-2 border-t border-hairline px-4 py-4 text-[11.5px] leading-relaxed text-ink-3 sm:px-8 sm:py-5 lg:px-12">
          <div className="flex items-center gap-2">
            <BrandMark />
            <span className="text-[13px] font-medium tracking-[-0.04em] text-ink">Brandon.dev</span>
          </div>
          <div className="flex items-center gap-5">
            <a href={instagramUrl} target="_blank" rel="noreferrer" className="inline-flex min-h-11 items-center hover:text-ink">@brandon.vkc ↗</a>
          </div>
        </footer>
      </div>
    </div>
  );
}
