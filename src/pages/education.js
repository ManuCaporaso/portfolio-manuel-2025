import * as React from "react";
import Layout from "../components/layout";
import { Icon } from "@iconify/react";

/* =====================
    DATOS DE EDUCACIÓN
   ===================== */
const education = [
  {
    school: "Instituto Técnico Superior de Cipolletti (ITS)",
    program: "Tecnicatura • Desarrollo de Software Full Stack",
    period: "2025",
    details: "3er año de formación orientado a desarrollo web/móvil, prácticas profesionales y proyectos integradores.",
    badges: ["Inglés técnico III", "Ética y Responsabilidad Social", "Desarrollo Móvil", "Innovación y Desarrollo Emprendedor", "Desarrollo Web", "Gestión de Proyectos de Software", "Programación Backend", "Desarrollo de Software", "Prácticas Profesionales III"],
    certificates: [
      { title: "Certificado · Programación Web (ITS)", image: "/images/certificados/web.jpeg" },
      { title: "Certificado · Programación Móvil (ITS)", image: "/images/certificados/movil.jpeg" },
    ],
  },
  {
    school: "Instituto Técnico Superior de Cipolletti (ITS)",
    program: "Tecnicatura • Desarrollo de Software Full Stack",
    period: "2024",
    details: "2do año orientado a programación front-back, integración de aplicaciones y proyectos reales.",
    badges: ["Inglés técnico II", "Laboratorio Full-Stack II", "Integración de Aplicaciones", "Programación Backend", "Programación Frontend", "Desarrollo de Software", "Prácticas Profesionales II"],
    certificates: [
      { title: "Certificado · Programación Backend (ITS)", image: "/images/certificados/backend.jpeg" },
      { title: "Certificado · Integración de Aplicaciones (ITS)", image: "/images/certificados/aplicaciones.jpeg" },
      { title: "Certificado · Programación Frontend (ITS)", image: "/images/certificados/frontend.jpeg" },
    ],
  },
  {
    school: "Instituto Técnico Superior de Cipolletti (ITS)",
    program: "Tecnicatura • Desarrollo de Software Full Stack",
    period: "2023",
    details: "1er año orientado a fundamentos, lógica, bases de datos y diseño de interfaces.",
    badges: ["Inglés técnico I", "Matemáticas", "Laboratorio Full-Stack I", "Arquitectura de Computadoras", "Programación", "Base de Datos", "Diseño UX/UI", "Prácticas Profesionales I"],
  },
];

/* =====================
    DATOS DE CURSOS
   ===================== */
const courses = [
  {
    title: "Diplomatura en Desarrollo Web Full Stack",
    provider: "ICARO - Universidad de Córdoba",
    year: 2024,
    tags: ["Frontend", "React", "Backend", "Node.js", "DB", "SQL"],
    description: "Frontend y Backend con frameworks modernos, bases de datos y arquitectura web.",
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

export default function EducationPage({ location }) {
  const [lightbox, setLightbox] = React.useState({ open: false, src: "", alt: "" });
  const dialogRef = React.useRef(null);

  React.useEffect(() => {
    const dlg = dialogRef.current;
    if (!dlg) return;
    if (lightbox.open) {
      dlg.showModal();
    } else {
      dlg.close();
    }
  }, [lightbox.open]);

  // FIX: Eliminamos las funciones declaradas que no se usaban para limpiar el warning 'no-unused-vars'

  return (
    <Layout 
      location={location} 
      title="Estudios & Cursos" 
      description="Formación académica de Manuel Caporaso."
    >
      <section className="flex flex-col items-center text-center w-full max-w-6xl mx-auto px-4 pt-4 pb-16 gap-10">
        
        <header>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Formación Académica
          </h1>
          <p className="mt-2 text-base sm:text-lg text-base-content/70">
            Educación formal y certificaciones profesionales.
          </p>
        </header>

        {/* --- SECCIÓN EDUCACIÓN --- */}
        <div className="w-full">
          <ul className="timeline timeline-vertical timeline-compact md:timeline-normal">
            {education.map((e, i) => (
              <li key={i}>
                <div className="timeline-start timeline-box bg-base-100 border border-base-300 p-5 text-left shadow-sm">
                  <h3 className="font-bold text-lg">{e.school}</h3>
                  <p className="text-sm text-primary font-medium">{e.program} ({e.period})</p>
                  {e.details && <p className="mt-2 text-sm opacity-80">{e.details}</p>}
                  
                  {e.certificates?.length > 0 && (
                    <div className="mt-4 flex flex-wrap gap-3">
                      {e.certificates.map((c, ci) => (
                        <button
                          key={ci}
                          type="button"
                          className="rounded-lg overflow-hidden border border-base-300 hover:scale-105 transition-transform focus:ring-2 focus:ring-primary focus:outline-none"
                          onClick={() => setLightbox({ open: true, src: c.image, alt: c.title })}
                          aria-label={`Ver certificado: ${c.title}`}
                        >
                          <img src={c.image} alt={c.title} className="w-32 h-20 object-cover" />
                        </button>
                      ))}
                    </div>
                  )}

                  <div className="mt-3 flex flex-wrap gap-1">
                    {e.badges.map((tag, ti) => (
                      <span key={ti} className="badge badge-ghost badge-sm opacity-70">{tag}</span>
                    ))}
                  </div>
                </div>
                <div className="timeline-middle text-primary">
                  <Icon icon="mdi:school" width="24" />
                </div>
                {i < education.length - 1 && <hr className="bg-base-300" />}
              </li>
            ))}
          </ul>
        </div>

        {/* --- SECCIÓN CURSOS --- */}
        <div className="w-full mt-10">
          <h2 className="text-2xl font-bold mb-8 text-left border-b border-base-300 pb-2">Cursos Realizados</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
            {courses.map((c, i) => (
              <article key={i} className="card bg-base-100 border border-base-300 shadow-sm hover:shadow-md transition-shadow">
                <button
                  type="button"
                  className="w-full h-44 bg-white flex items-center justify-center p-4 rounded-t-xl cursor-pointer hover:bg-base-200 transition-colors"
                  onClick={() => setLightbox({ open: true, src: c.image, alt: c.title })}
                  aria-label={`Ampliar imagen de ${c.title}`}
                >
                  <img src={c.image} alt={c.title} className="max-h-full max-w-full object-contain" />
                </button>
                <div className="card-body p-5 text-left gap-1">
                  <h3 className="font-bold text-base leading-tight">{c.title}</h3>
                  <p className="text-xs font-semibold opacity-60 uppercase">{c.provider} • {c.year}</p>
                  <p className="text-sm opacity-80 line-clamp-2 mt-1">{c.description}</p>
                  <div className="flex flex-wrap gap-1 mt-2">
                    {c.tags.map((t, ti) => (
                      <span key={ti} className="badge badge-outline badge-xs opacity-50">{t}</span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* --- LIGHTBOX (Versión Final 0 Warnings) --- */}
      <dialog 
        ref={dialogRef} 
        className="modal modal-bottom sm:modal-middle"
      >
        <div className="modal-box max-w-5xl p-2 bg-base-100 relative">
          <button 
            type="button"
            className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 z-10" 
            onClick={() => setLightbox({ ...lightbox, open: false })}
          >✕</button>
          <img src={lightbox.src} alt={lightbox.alt} className="w-full h-auto rounded-lg shadow-2xl" />
        </div>

        <form method="dialog" className="modal-backdrop">
          <button 
            type="submit" 
            className="cursor-default outline-none"
            onClick={(e) => {
              e.preventDefault();
              setLightbox({ ...lightbox, open: false });
            }}
          >
            close
          </button>
        </form>
      </dialog>
    </Layout>
  );
}

export const Head = () => <title>Educación | Manuel Caporaso</title>;