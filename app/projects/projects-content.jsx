"use client";

import * as React from "react";
import Card from "../../src/components/card";

const cards = [
  {
    title: "STP - Sindicato de Trabajadores de la Prevención",
    alt: "Sitio web oficial del sindicato STP",
    src: "/images/proyectos/stp-sindicato.png",
    category: "Web & Landing",
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
    category: "Web & Landing",
    description:
      "Portfolio digital para estudio de arquitectura especializado en renders 3D. Optimización avanzada de carga de imágenes (WebP) y diseño responsivo de alta gama.",
    badges: ["React", "Vite", "Tailwind CSS", "Framer Motion", "Formspree"],
    buttons: [
      {
        label: "Sitio Web",
        href: "https://le-render.com/",
        className: "btn btn-sm btn-primary",
      },
    ],
  },
  {
    title: "Info-Tracker - Capturadora de novedades & OCR IA",
    alt: "Info-Tracker aplicación de gestión de novedades",
    src: "/images/proyectos/info-tracker.png",
    category: "Tiempo Real & IA",
    description:
      "Plataforma integral para gestión de lotes agrícolas y captura rápida de novedades en campo. Incluye módulo móvil offline-friendly para operarios, ingesta de planillas por pares (frente/dorso) y pipeline de OCR automatizado con IA para extracción de datos.",
    badges: [
      "Next.js",
      "NestJS",
      "TypeScript",
      "Prisma ORM",
      "PostgreSQL",
      "Tailwind CSS",
      "IA / OCR",
      "Docker",
    ],
    buttons: [
      {
        label: "Solicitar acceso al Repo",
        href: "https://github.com/orgs/NovAR-Development-Group/repositories",
        className: "btn btn-sm btn-outline btn-primary",
      },
    ],
  },
  {
    title: "Sistema Integral de Administración Sindical Full-Stack",
    alt: "Sistema de administración sindical interno",
    src: "/images/proyectos/sindicato.png",
    category: "Full-Stack",
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
    title: "Ecommerce Full-Stack con Next.js y NestJS",
    alt: "Tienda online de ropa full-stack",
    src: "/images/proyectos/tienda.png",
    category: "Full-Stack",
    description:
      "E-commerce full-stack con arquitectura desacoplada. Incluye catálogo dinámico con variantes (talle/color), reservas de stock temporales, integración real con Mercado Pago (Checkout Pro), gestión de perfil de cliente con direcciones y tablero de administración para despacho y seguimiento de pedidos.",
    badges: [
      "Next.js (App Router)",
      "NestJS",
      "Prisma ORM",
      "MariaDB",
      "TypeScript",
      "Mercado Pago API",
      "Tailwind CSS",
    ],
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
    category: "Tiempo Real & IA",
    description:
      "Evolución de un proyecto académico a una arquitectura full-stack moderna. Plataforma sincronizada en tiempo real entre emisor de tickets (tablet), operadores de atención (escritorios) y pantalla pública (TV). Demo alojada en Render (puede demorar ~30s en iniciar tras inactividad).",
    badges: [
      "Next.js (App Router)",
      "TypeScript",
      "Tailwind CSS",
      "Socket.io",
      "Express",
      "Sonner",
    ],
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
  },
];

const CATEGORIES = ["Todos", "Full-Stack", "Tiempo Real & IA", "Web & Landing"];

export default function ProjectsContent() {
  const [lightbox, setLightbox] = React.useState({ open: false, src: "", alt: "" });
  const [activeCategory, setActiveCategory] = React.useState("Todos");
  const dialogRef = React.useRef(null);

  const openLightbox = (src, alt) => setLightbox({ open: true, src, alt });
  const closeLightbox = () => setLightbox((prev) => ({ ...prev, open: false }));

  React.useEffect(() => {
    const dlg = dialogRef.current;
    if (!dlg) return;
    if (lightbox.open && !dlg.open) {
      dlg.showModal();
    } else if (!lightbox.open && dlg.open) {
      dlg.close();
    }
  }, [lightbox.open]);

  const filteredCards =
    activeCategory === "Todos"
      ? cards
      : cards.filter((card) => card.category === activeCategory);

  return (
    <section className="flex flex-col items-center text-center w-full max-w-6xl mx-auto px-4 pt-4 pb-16 gap-10">
      <header className="max-w-2xl">
        <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight bg-gradient-to-r from-blue-500 via-indigo-400 to-cyan-400 bg-clip-text text-transparent">
          Proyectos
        </h1>
        <p className="mt-3 text-base sm:text-lg text-base-content/70">
          Soluciones digitales a medida, plataformas full-stack y sistemas en tiempo real.
        </p>
      </header>

      {/* Barra de filtrado */}
      <div className="w-full flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-base-300 pb-4">
        <p className="text-sm text-base-content/60 text-left">
          Mostrando {filteredCards.length} de {cards.length} proyectos
        </p>

        <div className="flex flex-wrap gap-2">
          {CATEGORIES.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => setActiveCategory(category)}
              className={`btn btn-sm rounded-full transition-all ${
                activeCategory === category
                  ? "btn-primary shadow-sm"
                  : "btn-ghost border border-base-300 hover:border-primary/50"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Grilla de proyectos */}
      <ul className="grid gap-8 w-full grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {filteredCards.map((card, index) => (
          <li key={`${card.title}-${index}`} className="flex">
            <Card
              {...card}
              onImageClick={openLightbox}
              className="w-full"
            />
          </li>
        ))}
      </ul>

      {/* Lightbox Modal */}
      <dialog
        ref={dialogRef}
        onClose={closeLightbox}
        className="modal modal-bottom sm:modal-middle"
      >
        <div className="modal-box max-w-5xl p-3 sm:p-4 bg-base-100 border border-base-300 relative">
          <div className="flex items-center justify-between gap-4 pb-3 mb-3 border-b border-base-300">
            <p className="text-sm font-semibold text-base-content/80 truncate">
              {lightbox.alt}
            </p>
            <button
              type="button"
              className="btn btn-sm btn-circle btn-ghost flex-shrink-0"
              onClick={closeLightbox}
              aria-label="Cerrar vista previa"
            >
              ✕
            </button>
          </div>
          {lightbox.src && (
            <img
              src={lightbox.src}
              alt={lightbox.alt}
              className="w-full h-auto max-h-[78vh] object-contain rounded-lg mx-auto"
            />
          )}
        </div>

        <form method="dialog" className="modal-backdrop">
          <button
            type="submit"
            className="cursor-default outline-none"
            onClick={(e) => {
              e.preventDefault();
              closeLightbox();
            }}
          >
            close
          </button>
        </form>
      </dialog>
    </section>
  );
}