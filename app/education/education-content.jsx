"use client";

import * as React from "react";
import { Icon } from "@iconify/react";

const education = [
  {
    school: "Instituto Técnico Superior de Cipolletti (ITS)",
    program: "Tecnicatura Superior • Desarrollo de Software Full Stack",
    period: "2025",
    status: "Egresado",
    details:
      "3er año de formación orientado a arquitectura web/móvil, gestión de proyectos, prácticas profesionales y sistemas integradores.",
    badges: [
      "Inglés técnico III",
      "Ética y Responsabilidad Social",
      "Desarrollo Móvil",
      "Innovación y Desarrollo Emprendedor",
      "Desarrollo Web",
      "Gestión de Proyectos de Software",
      "Programación Backend",
      "Desarrollo de Software",
      "Prácticas Profesionales III",
    ],
    certificates: [
      { title: "Certificado · Programación Web (ITS)", image: "/images/certificados/web.jpeg" },
      { title: "Certificado · Programación Móvil (ITS)", image: "/images/certificados/movil.jpeg" },
    ],
  },
  {
    school: "Instituto Técnico Superior de Cipolletti (ITS)",
    program: "Tecnicatura Superior • Desarrollo de Software Full Stack",
    period: "2024",
    details:
      "2do año orientado a programación frontend/backend, integración de aplicaciones y desarrollo sobre proyectos reales.",
    badges: [
      "Inglés técnico II",
      "Laboratorio Full-Stack II",
      "Integración de Aplicaciones",
      "Programación Backend",
      "Programación Frontend",
      "Desarrollo de Software",
      "Prácticas Profesionales II",
    ],
    certificates: [
      { title: "Certificado · Programación Backend (ITS)", image: "/images/certificados/backend.jpeg" },
      { title: "Certificado · Integración de Aplicaciones (ITS)", image: "/images/certificados/aplicaciones.jpeg" },
      { title: "Certificado · Programación Frontend (ITS)", image: "/images/certificados/frontend.jpeg" },
    ],
  },
  {
    school: "Instituto Técnico Superior de Cipolletti (ITS)",
    program: "Tecnicatura Superior • Desarrollo de Software Full Stack",
    period: "2023",
    details:
      "1er año orientado a fundamentos de programación, lógica, arquitectura de computadoras, bases de datos y diseño de interfaces.",
    badges: [
      "Inglés técnico I",
      "Matemáticas",
      "Laboratorio Full-Stack I",
      "Arquitectura de Computadoras",
      "Programación",
      "Base de Datos",
      "Diseño UX/UI",
      "Prácticas Profesionales I",
    ],
  },
];

const courses = [
  {
    title: "Diseño UX/UI",
    provider: "Digitalers (Personal - Educación IT)",
    year: 2026,
    category: "UX/UI & Diseño",
    tags: ["UX Research", "UI Design", "Figma", "Prototipado", "Design Systems", "Usabilidad"],
    description:
      "Formación intensiva de 100 horas en investigación de usuarios, arquitectura de la información, diseño de interfaces responsivas, sistemas de diseño y prototipado interactivo.",
    image: "/images/courses/ux-ui.png",
  },
  {
    title: "IA para Todos",
    provider: "Agencia de Habilidades para el Futuro - Ministerio de Educación (GCBA)",
    year: 2026,
    category: "IA & Data",
    tags: [
      "Inteligencia Artificial",
      "Prompt Engineering",
      "IA Generativa",
      "Seguridad & Ética en IA",
      "Entornos Digitales",
    ],
    description:
      "Fundamentos de inteligencia artificial, estructuración efectiva de prompts, generación de contenido y buenas prácticas de seguridad y verificación de datos.",
    image: "/images/courses/IA.png",
  },
  {
    title: "Diplomatura en Desarrollo Web Full Stack",
    provider: "ICARO - Universidad de Córdoba",
    year: 2024,
    category: "Desarrollo Web",
    tags: ["Frontend", "React", "Backend", "Node.js", "DB", "SQL"],
    description:
      "Desarrollo Frontend y Backend con frameworks modernos, bases de datos relacionales y arquitectura web escalable.",
    image: "/images/courses/icaro.png",
  },
  {
    title: "Diplomatura Full Stack con JavaScript / Node.js",
    provider: "Codo a Codo",
    year: 2024,
    category: "Desarrollo Web",
    tags: ["Frontend", "Backend", "Node.js", "SQL"],
    description:
      "Stack completo con Node.js, Express, bases de datos SQL y desarrollo de proyecto final integrador.",
    image: "/images/courses/node.png",
  },
  {
    title: "Diplomatura Full Stack con Python / Django",
    provider: "Codo a Codo",
    year: 2023,
    category: "Desarrollo Web",
    tags: ["Backend", "Python", "Django"],
    description:
      "Desarrollo backend con Python, framework Django y modelado de bases de datos relacionales.",
    image: "/images/courses/python.png",
  },
  {
    title: "Desarrollador Web con React.js",
    provider: "Argentina Programa 4.0 - UTN",
    year: 2023,
    category: "Desarrollo Web",
    tags: ["Frontend", "React"],
    description:
      "Arquitectura basada en componentes reutilizables, manejo de estado y consumo de APIs REST.",
    image: "/images/courses/react-utn.png",
  },
  {
    title: "Procesamiento de Datos con Python",
    provider: "TICMAS Academy",
    year: 2023,
    category: "IA & Data",
    tags: ["Data", "Python", "Pandas", "NumPy"],
    description:
      "Manipulación, limpieza y análisis exploratorio de datos utilizando Pandas y NumPy.",
    image: "/images/courses/datos.png",
  },
  {
    title: "Primeros Pasos en Desarrollo Frontend",
    provider: "TICMAS Academy",
    year: 2023,
    category: "Desarrollo Web",
    tags: ["Frontend", "HTML", "CSS", "JavaScript"],
    description:
      "Fundamentos de maquetación semántica en HTML5, estilos responsivos con CSS3 y lógica en JavaScript.",
    image: "/images/courses/primeros.png",
  },
  {
    title: "Fundamentos de Marketing Digital",
    provider: "Google Actívate",
    year: 2023,
    category: "UX/UI & Diseño",
    tags: ["SEO", "SEM", "Estrategia Digital"],
    description:
      "Optimización para motores de búsqueda (SEO), posicionamiento SEM y analítica web.",
    image: "/images/courses/marketing.png",
  },
  {
    title: "Introducción a Git y GitHub",
    provider: "Todo Code",
    year: 2023,
    category: "Desarrollo Web",
    tags: ["Git", "GitHub"],
    description:
      "Control de versiones distribuido, manejo de ramas, resolución de conflictos y flujo colaborativo.",
    image: "/images/courses/git.png",
  },
];

const CATEGORIES = ["Todos", "IA & Data", "UX/UI & Diseño", "Desarrollo Web"];

export default function EducationContent() {
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

  const filteredCourses =
    activeCategory === "Todos"
      ? courses
      : courses.filter((c) => c.category === activeCategory);

  return (
    <section className="flex flex-col items-center text-center w-full max-w-6xl mx-auto px-4 pt-4 pb-16 gap-12">
      <header className="max-w-2xl">
        <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight bg-gradient-to-r from-blue-500 via-indigo-400 to-cyan-400 bg-clip-text text-transparent">
          Formación Académica
        </h1>
        <p className="mt-3 text-base sm:text-lg text-base-content/70">
          Educación superior, especializaciones técnicas y certificaciones profesionales.
        </p>
      </header>

      {/* Timeline Educación Formal */}
      <div className="w-full">
        <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
          {education.map((e, i) => {
            const isEven = i % 2 === 0;
            return (
              <li key={i}>
                {i > 0 && <hr className="bg-primary/40" />}
                <div className="timeline-middle">
                  <div className="w-9 h-9 rounded-full bg-primary/15 border border-primary/40 text-primary flex items-center justify-center shadow-sm">
                    <Icon icon="mdi:school" width="20" />
                  </div>
                </div>

                <div
                  className={`${
                    isEven ? "timeline-start md:text-right" : "timeline-end text-left"
                  } mb-8 w-full`}
                >
                  <div className="bg-base-100 border border-base-300 hover:border-primary/40 transition-colors p-5 sm:p-6 rounded-2xl shadow-sm text-left">
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-1">
                      <span className="badge badge-primary badge-outline font-semibold text-xs">
                        {e.period}
                      </span>
                      {e.status && (
                        <span className="badge badge-success badge-sm font-semibold">
                          {e.status}
                        </span>
                      )}
                    </div>

                    <h3 className="font-bold text-lg sm:text-xl mt-1">{e.school}</h3>
                    <p className="text-sm text-primary font-medium">{e.program}</p>

                    {e.details && (
                      <p className="mt-2 text-sm text-base-content/75 leading-relaxed">
                        {e.details}
                      </p>
                    )}

                    {e.certificates?.length > 0 && (
                      <div className="mt-4 pt-3 border-t border-base-300/60">
                        <p className="text-xs font-semibold uppercase tracking-wider text-base-content/50 mb-2">
                          Certificados obtenidos
                        </p>
                        <div className="flex flex-wrap gap-3">
                          {e.certificates.map((c, ci) => (
                            <button
                              key={ci}
                              type="button"
                              className="group relative rounded-xl overflow-hidden border border-base-300 hover:border-primary transition-all focus:ring-2 focus:ring-primary focus:outline-none cursor-pointer"
                              onClick={() => openLightbox(c.image, c.title)}
                              aria-label={`Ver certificado: ${c.title}`}
                            >
                              <img
                                src={c.image}
                                alt={c.title}
                                className="w-32 h-20 object-cover group-hover:scale-105 transition-transform duration-300"
                              />
                              <span className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white">
                                <Icon icon="mdi:magnify-plus-outline" width="22" />
                              </span>
                            </button>
                          ))}
                        </div>
                      </div>
                    )}

                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {e.badges.map((tag, ti) => (
                        <span
                          key={ti}
                          className="badge badge-ghost badge-sm text-base-content/70"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {i < education.length - 1 && <hr className="bg-primary/40" />}
              </li>
            );
          })}
        </ul>
      </div>

      {/* Grilla de Cursos y Certificaciones */}
      <div className="w-full mt-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 border-b border-base-300 pb-4">
          <div className="text-left">
            <h2 className="text-2xl font-bold">Cursos y Certificaciones</h2>
            <p className="text-sm text-base-content/60">
              Mostrando {filteredCourses.length} de {courses.length} certificaciones
            </p>
          </div>

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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
          {filteredCourses.map((c, i) => (
            <article
              key={`${c.title}-${i}`}
              className="card bg-base-100 border border-base-300 hover:border-primary/40 rounded-2xl shadow-sm hover:shadow-md transition-all flex flex-col overflow-hidden group"
            >
              <button
                type="button"
                className="relative w-full h-44 bg-base-200/70 border-b border-base-300/60 flex items-center justify-center p-4 cursor-pointer overflow-hidden focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary"
                onClick={() => openLightbox(c.image, c.title)}
                aria-label={`Ampliar certificado de ${c.title}`}
              >
                <img
                  src={c.image}
                  alt={c.title}
                  className="max-h-full max-w-full object-contain rounded-md group-hover:scale-105 transition-transform duration-300"
                />
                <span className="absolute bottom-2 right-2 bg-base-100/90 backdrop-blur-sm border border-base-300 text-base-content/80 rounded-lg p-1.5 opacity-0 group-hover:opacity-100 transition-opacity shadow-sm">
                  <Icon icon="mdi:fullscreen" width="16" />
                </span>
              </button>

              <div className="card-body p-5 text-left flex-1 flex flex-col justify-between gap-3">
                <div>
                  <div className="flex items-start justify-between gap-2">
                    <span className="text-[11px] font-bold text-primary uppercase tracking-wider">
                      {c.provider}
                    </span>
                    <span className="badge badge-sm badge-ghost font-mono text-xs flex-shrink-0">
                      {c.year}
                    </span>
                  </div>

                  <h3 className="font-bold text-base leading-snug mt-1">{c.title}</h3>
                  <p className="text-sm text-base-content/70 mt-2 leading-relaxed">
                    {c.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-1.5 pt-2 border-t border-base-300/50">
                  {c.tags.map((t, ti) => (
                    <span
                      key={ti}
                      className="badge badge-outline border-base-300 badge-xs py-2 text-base-content/70"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

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