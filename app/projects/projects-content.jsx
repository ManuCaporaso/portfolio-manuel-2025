"use client";

import * as React from "react";
import Card from "../../src/components/card";

const cards = [
  {
    title: "STP - Sindicato de Trabajadores de la Prevención",
    alt: "Sitio web oficial del sindicato STP",
    src: "/images/proyectos/stp-sindicato.png",
    description:
      "Sitio web institucional para el Sindicato de Trabajadores de la Prevención de Riesgos Laborales, Salud Ocupacional y Protección Ambiental de Neuquén y Río Negro. Enfoque en accesibilidad y comunicación gremial.",
    badges: ["React", "Vite", "Tailwind CSS", "Formspree", "SEO"],
    buttons: [
      {
        label: "Live Demo",
        href: "https://stp-sindicato.netlify.app/",
        className: "btn btn-sm btn-primary",
      },
    ],
  },
  {
    title: "Le Render - Arquitectura & Visualización",
    alt: "Portfolio profesional de arquitectura Le Render",
    src: "/images/proyectos/le-render.png",
    description:
      "Portfolio digital para estudio de arquitectura especializado en renders 3D. Optimización avanzada de carga de imágenes (WebP) y diseño responsivo de alta gama.",
    badges: ["React", "Vite", "Tailwind CSS", "Framer Motion", "Formspree"],
    buttons: [
      {
        label: "Pagina Web",
        href: "https://le-render.com/",
        className: "btn btn-sm btn-primary",
      },
    ],
  },
  {
    title: "Info-Tracker - Capturadora de novedades & OCR IA",
    alt: "Info-Tracker aplicación de gestión de novedades",
    src: "/images/proyectos/info-tracker.png",
    description:
      "Plataforma integral para gestión de lotes agrícolas y captura rápida de novedades en campo. Incluye módulo móvil offline-friendly para operarios, ingesta de planillas por pares (frente/dorso) y pipeline de OCR automatizado con IA para extracción de datos.",
    badges: ["Next.js","NestJS","TypeScript","Prisma ORM","PostgreSQL","Tailwind CSS","IA / OCR","Docker"],
    buttons: [
      {
        label: "Solicitar acceso al Repo",
        href: "https://github.com/orgs/NovAR-Development-Group/repositories",
        className: "btn btn-sm btn-outline btn-primary",
      },
    ],
  },
  {
    title: "Gestión Interna SITRAMUCI",
    alt: "Sistema de administración sindical interno",
    src: "/images/proyectos/sindicato.png",
    description:
      "Sistema de gestión administrativa para el sindicato municipal: manejo de afiliados, reportes de cuotas y paneles internos de control administrativo.",
    badges: ["Node.js", "Express", "PostgreSQL", "JWT", "REST API"],
    buttons: [
      {
        label: "Repo",
        href: "https://github.com/ManuCaporaso/sitramuci-sindicato",
        className: "btn btn-sm btn-outline btn-primary",
      },
    ],
  },
  {
    title: "Ecommerce de Indumentaria",
    alt: "Tienda online de ropa full-stack",
    src: "/images/proyectos/tienda.png",
    description:
      "E-commerce full-stack con arquitectura desacoplada. Incluye catálogo dinámico con variantes (talle/color), reservas de stock temporales, integración real con Mercado Pago (Checkout Pro), gestión de perfil de cliente con direcciones y tablero de administración para despacho y seguimiento de pedidos.",
    badges: ["Next.js (App Router)","NestJS","Prisma ORM","MariaDB","TypeScript","Mercado Pago API","Tailwind CSS"],
    buttons: [
      {
        label: "Repo",
        href: "https://github.com/ManuCaporaso/tienda-online-fullstack",
        className: "btn btn-sm btn-outline btn-primary",
      },
    ],
  },
{
  title: "Sistema de Gestión de Turnos en Tiempo Real",
  alt: "Ticketera multicliente con Next.js y WebSockets",
  src: "/images/proyectos/socket.png",
  description:
    "Evolución de un proyecto académico a una arquitectura fullstack moderna. Plataforma sincronizada en tiempo real entre emisor de tickets (tablet), operadores de atención (escritorios) y pantalla pública (TV). (Nota: Al estar alojado en la versión gratuita de Render, la demo puede tardar unos 30 segundos en despertar en el primer acceso).",
  badges: ["Next.js (App Router)", "TypeScript", "Tailwind CSS", "Socket.io", "Express", "Sonner"],
  buttons: [
    {
      label: "Demo",
      href: "https://tp-integracion-de-aplicaciones-its.onrender.com/",
      className: "btn btn-sm btn-primary",
    },
    {
      label: "Repo",
      href: "https://github.com/ManuCaporaso/tp_integracion_de_aplicaciones_ITS_ticketera",
      className: "btn btn-sm btn-outline btn-primary",
    },
  ],
}
];

export default function ProjectsContent() {
  const [lightbox, setLightbox] = React.useState({ open: false, src: "", alt: "" });
  const dialogRef = React.useRef(null);

  React.useEffect(() => {
    const dlg = dialogRef.current;
    if (!dlg) return;
    lightbox.open ? dlg.showModal() : dlg.close();
  }, [lightbox.open]);

  return (
    <section className="flex flex-col items-center text-center w-full max-w-6xl mx-auto px-4 pt-4 pb-16 gap-10">
      <header>
        <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight bg-gradient-to-r from-blue-500 via-indigo-400 to-cyan-400 bg-clip-text text-transparent">
          Proyectos
        </h1>
        <p className="mt-2 text-base sm:text-lg text-base-content/70">
          Soluciones digitales a medida para organizaciones y estudios
          profesionales.
        </p>
      </header>

      <ul className="grid gap-8 w-full grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {cards.map((card, index) => (
          <li key={index} className="flex">
            <Card
              {...card}
              onImageClick={(src, alt) => setLightbox({ open: true, src, alt })}
              className="w-full"
            />
          </li>
        ))}
      </ul>

      <dialog ref={dialogRef} className="modal">
        <div className="modal-box max-w-5xl p-2 sm:p-4 bg-base-100 relative">
          <button
            type="button"
            className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 z-10"
            onClick={() => setLightbox({ open: false, src: "", alt: "" })}
          >
            ✕
          </button>
          <img
            src={lightbox.src}
            alt={lightbox.alt}
            className="w-full h-auto object-contain rounded-lg"
          />
        </div>

        <form method="dialog" className="modal-backdrop">
          <button
            type="submit"
            className="cursor-default outline-none"
            onClick={(e) => {
              e.preventDefault();
              setLightbox({ open: false, src: "", alt: "" });
            }}
          >
            close
          </button>
        </form>
      </dialog>
    </section>
  );
}