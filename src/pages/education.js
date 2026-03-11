import * as React from "react";
import Layout from "../components/layout";
import { Icon } from "@iconify/react";

/* =====================
   EDUCACIÓN (TIMELINE)
   ===================== */
const education = [
  {
    school: "Instituto Técnico Superior de Cipolletti (ITS)",
    program: "Tecnicatura • Desarrollo de Software Full Stack",
    period: "2025",
    details:
      "3er año de formación orientado a desarrollo web/móvil, prácticas profesionales y proyectos integradores.",
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
  },
  {
    school: "Instituto Técnico Superior de Cipolletti (ITS)",
    program: "Tecnicatura • Desarrollo de Software Full Stack",
    period: "2024",
    details:
      "2do año orientado a programación front-back, integración de aplicaciones y proyectos reales.",
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
      {
        title: "Certificado · Programación Backend (ITS)",
        image: "/images/certificados/backend.jpeg",
      },
      {
        title: "Certificado · Integración de Aplicaciones (ITS)",
        image: "/images/certificados/aplicaciones.jpeg",
      },
      {
        title: "Certificado · Programación Frontend (ITS)",
        image: "/images/certificados/frontend.jpeg",
      },
    ],
  },
  {
    school: "Instituto Técnico Superior de Cipolletti (ITS)",
    program: "Tecnicatura • Desarrollo de Software Full Stack",
    period: "2023",
    details:
      "1er año orientado a fundamentos, lógica, bases de datos y diseño de interfaces.",
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

/* =====================
   CURSOS
   ===================== */
const courses = [
  {
    title: "Diplomatura en Desarrollo Web Full Stack",
    provider: "ICARO - Universidad de Córdoba",
    year: 2024,
    tags: ["Frontend", "React", "Backend", "Node.js", "DB", "SQL"],
    description:
      "Frontend y Backend con frameworks modernos, bases de datos y arquitectura web.",
    image: "/images/courses/icaro.png",
  },
  {
    title: "Diplomatura Full Stack con JavaScript / Node.js",
    provider: "Codo a Codo",
    year: 2024,
    tags: ["Frontend", "Backend", "Node.js", "SQL"],
    description: "Stack completo con Node.js, Express, SQL y proyecto final.",
    image: "/images/courses/node.png",
  },
  {
    title: "Diplomatura Full Stack con Python / Django",
    provider: "Codo a Codo",
    year: 2023,
    tags: ["Backend", "Python", "Django"],
    description: "Desarrollo con Django y bases de datos relacionales.",
    image: "/images/courses/python.png",
  },
  {
    title: "Desarrollador Web con React.js",
    provider: "Argentina Programa 4.0 - UTN",
    year: 2023,
    tags: ["Frontend", "React"],
    description: "React, componentes reutilizables y consumo de APIs.",
    image: "/images/courses/react-utn.png",
  },
  {
    title: "Procesamiento de Datos con Python",
    provider: "TICMAS Academy",
    year: 2023,
    tags: ["Data", "Python"],
    description: "Pandas, NumPy y análisis de datos.",
    image: "/images/courses/datos.png",
  },
  {
    title: "Primeros Pasos en Desarrollo Frontend",
    provider: "TICMAS Academy",
    year: 2023,
    tags: ["Frontend", "HTML", "CSS", "JavaScript"],
    description: "Fundamentos de HTML, CSS y JS.",
    image: "/images/courses/primeros.png",
  },
  {
    title: "Fundamentos de Marketing Digital",
    provider: "Google Actívate",
    year: 2023,
    tags: ["Marketing", "Digital"],
    description: "SEO, SEM y estrategias digitales.",
    image: "/images/courses/marketing.png",
  },
  {
    title: "Introducción a Git y GitHub",
    provider: "Todo Code",
    year: 2023,
    tags: ["Git", "GitHub"],
    description: "Control de versiones y flujo colaborativo.",
    image: "/images/courses/git.png",
  },
];

export default function EducationPage({ location }) { // AJUSTE 1: Recibimos location
  const [lightbox, setLightbox] = React.useState({ open: false, src: "", alt: "" });
  const dialogRef = React.useRef(null);

  React.useEffect(() => {
    if (lightbox.open) dialogRef.current?.showModal();
    else dialogRef.current?.close();
  }, [lightbox.open]);

  const openLightbox = (src, alt) => setLightbox({ open: true, src, alt });
  const closeLightbox = () => setLightbox({ open: false, src: "", alt: "" });

  return (
    <Layout 
        location={location} // AJUSTE 2: Pasamos location al Layout
        title="Estudios & Cursos" 
        description="Formación académica y cursos de Manuel Caporaso."
    >
      <section className="flex flex-col items-center text-center w-full max-w-6xl mx-auto px-4 pt-4 pb-16 gap-10">

        {/* Header */}
        <div>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight bg-linear-to-r from-primary to-secondary dark:from-indigo-300 dark:to-sky-400 bg-clip-text text-transparent">
            Formacion Academica
          </h1>
          <p className="mt-2 text-base sm:text-lg text-base-content/70">
            Formación formal, certificaciones y desarrollo profesional continuo.
          </p>
        </div>

        {/* Educación */}
        <div className="w-full">
          <h2 className="text-2xl font-bold mb-6 text-center sm:text-left">Educación</h2>

          {/* MOBILE: tarjetas */}
          <div className="flex flex-col gap-6 md:hidden">
            {education.map((e, i) => (
              <div key={i} className="bg-base-100 border border-base-300 rounded-lg p-4 text-left shadow-sm">
                <h3 className="font-semibold text-lg">{e.school}</h3>
                <p className="text-sm opacity-80">{e.program}</p>
                <p className="text-xs mt-1">{e.period}</p>

                {e.details && <p className="mt-2 text-sm">{e.details}</p>}

                {e.badges?.length > 0 && (
                  <div className="mt-2 flex flex-wrap gap-2 text-xs">
                    {e.badges.map((b, bi) => (
                      <span key={bi} className="badge badge-outline">{b}</span>
                    ))}
                  </div>
                )}

                {/* CERTIFICADOS EN MOBILE */}
                {e.certificates?.length > 0 && (
                  <div className="mt-4">
                    <h4 className="text-sm font-semibold mb-2">Certificados</h4>
                    <div className="flex flex-wrap gap-3">
                      {e.certificates.map((c, ci) => (
                        <button
                          key={ci}
                          type="button" // Cambiado a button para accesibilidad
                          onClick={() => openLightbox(c.image, c.title)}
                          className="rounded-lg overflow-hidden border border-base-300 hover:shadow-md transition"
                        >
                          <img src={c.image} alt={c.title} className="w-32 h-20 object-cover" />
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* DESKTOP: timeline */}
          <ul className="hidden md:timeline md:timeline-vertical md:block">
            {education.map((e, i) => (
              <li key={i}>
                <div className="timeline-start timeline-box bg-base-100 border border-base-300">
                  <h3 className="font-semibold">{e.school}</h3>
                  <p className="text-sm opacity-80">{e.program}</p>
                  <p className="text-xs mt-1">{e.period}</p>

                  {e.details && <p className="mt-2 text-sm">{e.details}</p>}

                  {e.badges?.length > 0 && (
                    <div className="mt-2 flex flex-wrap gap-2 text-xs">
                      {e.badges.map((b, bi) => (
                        <span key={bi} className="badge badge-outline">{b}</span>
                      ))}
                    </div>
                  )}

                  {e.certificates?.length > 0 && (
                    <div className="mt-3">
                      <h4 className="text-sm font-semibold mb-2">Certificados de competencias</h4>
                      <div className="flex flex-wrap gap-3">
                        {e.certificates.map((c, ci) => (
                          <button
                            key={ci}
                            type="button" // Cambiado a button para eliminar warnings
                            onClick={() => openLightbox(c.image, c.title)}
                            className="rounded-lg overflow-hidden border border-base-300 hover:shadow-md transition"
                          >
                            <img src={c.image} alt={c.title} className="w-32 h-20 object-cover" />
                          </button>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                <div className="timeline-middle">
                  <Icon icon="mdi:school-outline" width="22" height="22" />
                </div>

                {i < education.length - 1 && <hr className="bg-base-300" />}
              </li>
            ))}
          </ul>
        </div>

        {/* Cursos Realizados */}
        <div className="w-full mt-12">
          <h2 className="text-2xl font-bold mb-6 text-center sm:text-left">
            Cursos Realizados
          </h2>
        </div>

        {/* Cursos */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 w-full">
          {courses.map((c, i) => (
            <article
              key={i}
              className="card bg-base-100 border border-base-300 hover:shadow-lg transition-shadow text-left"
            >
              <button
                type="button" // Cambiado figure por button para que sea interactivo correctamente
                className="cursor-pointer flex items-center justify-center p-3 w-full"
                onClick={() => openLightbox(c.image, c.title)}
              >
                <img
                  src={c.image}
                  alt={c.title}
                  className="w-40 h-24 sm:w-48 sm:h-28 object-contain"
                />
              </button>

              <div className="card-body gap-2">
                <h3 className="card-title text-sm sm:text-base">{c.title}</h3>
                <p className="text-xs opacity-70">{c.provider} • {c.year}</p>
                <p className="text-sm opacity-80">{c.description}</p>

                <div className="flex flex-wrap gap-2 mt-2">
                  {c.tags.map((t, ti) => (
                    <span key={ti} className="badge badge-outline text-xs">{t}</span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>

      </section>

      {/* Lightbox */}
      <dialog ref={dialogRef} className="modal" onClick={closeLightbox}>
        <div className="modal-box max-w-5xl p-4" onClick={(e) => e.stopPropagation()}>
          <img src={lightbox.src} alt={lightbox.alt} className="w-full h-auto object-contain rounded-lg" />
          <div className="modal-action">
            <button type="button" className="btn btn-ghost" onClick={closeLightbox}>Cerrar</button>
          </div>
        </div>
      </dialog>
    </Layout>
  );
}

export const Head = () => <title>Estudios & Cursos</title>;