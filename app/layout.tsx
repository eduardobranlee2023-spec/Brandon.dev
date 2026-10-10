import type { Metadata, Viewport } from "next";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/next";
import { Geist, Geist_Mono } from "next/font/google";
import { SITE, SOCIAL_IMAGE } from "@/lib/site";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#141312" },
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE),
  title: {
    default: "Brandon.dev | Diseño web premium",
    template: "%s — Brandon.dev",
  },
  description:
    "Diseño y desarrollo web premium para marcas, startups y negocios que quieren presentarse mejor, vender más y cerrar clientes desde la primera visita.",
  applicationName: "Brandon.dev",
  keywords: [
    "diseño web",
    "desarrollo web",
    "landing page",
    "sitio para negocio",
    "portafolio profesional",
    "páginas web premium",
    "Brandon dev",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: SITE,
    siteName: "Brandon.dev",
    title: "Brandon.dev | Diseño web premium",
    description:
      "Diseño y desarrollo web premium para marcas, startups y negocios que quieren presentarse mejor, vender más y cerrar clientes desde la primera visita.",
    locale: "es_MX",
    images: [SOCIAL_IMAGE],
  },
  twitter: {
    card: "summary_large_image",
    images: [SOCIAL_IMAGE.url],
    title: "Brandon.dev | Diseño web premium",
    description:
      "Diseño y desarrollo web premium para marcas, startups y negocios que quieren presentarse mejor, vender más y cerrar clientes desde la primera visita.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
};

/** Sets the theme class before first paint so there is no flash. */
const themeScript = `(function(){try{var s=localStorage.getItem("brandon-theme");var d=s?s==="dark":matchMedia("(prefers-color-scheme:dark)").matches;if(d)document.documentElement.classList.add("dark")}catch(e){}})()`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <Script id="interior-theme" strategy="beforeInteractive" dangerouslySetInnerHTML={{ __html: themeScript }} />
        <link rel="alternate" type="text/plain" href={`${SITE}/llms.txt`} title="LLM reference" />
        <noscript>
          <style>{`.docs-enter { opacity: 1 !important; transform: none !important; filter: none !important; }`}</style>
        </noscript>
      </head>
      <body className="min-h-full flex flex-col">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
