import * as React from "react";
import Card from "../components/card";
import Layout from "../components/layout";

const cards = [
  {
    title: "STP - Sindicato de Trabajadores de la Prevención",
    alt: "Sitio web oficial del sindicato STP",
    src: "/images/proyectos/stp-sindicato.png",
    description: "Sitio web institucional para el Sindicato de Trabajadores de la Prevención de Riesgos Laborales, Salud Ocupacional y Protección Ambiental de Neuquén y Río Negro. Enfoque en accesibilidad y comunicación gremial.",
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
    description: "Portfolio digital para estudio de arquitectura especializado en renders 3D. Optimización avanzada de carga de imágenes (WebP) y diseño responsivo de alta gama.",
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
    title: "Info-Tracker - Capturadora Full-Stack",
    alt: "Info-Tracker aplicación de gestión de novedades",
    src: "/images/proyectos/info-tracker.png",
    description: "Aplicación multiplataforma para capturar novedades de clientes en tiempo real. Incluye reconocimiento de imágenes para automatización de datos.",
    badges: ["React", "NodeJs", "Express", "MongoDB", "JWT", "Python", "Tesseract OCR"],
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
    description: "Sistema de gestión administrativa para el sindicato municipal: manejo de afiliados, reportes de cuotas y paneles internos de control.",
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
    description: "Tienda online con flujo completo de compra: navegación por categorías, carrito de compras persistente y panel de administración.",
    badges: ["Node.js", "Express", "MySQL", "React", "JWT"],
    buttons: [
      {
        label: "Repo",
        href: "https://github.com/ManuCaporaso/tp-final-icaro-caporaso-fullstack",
        className: "btn btn-sm btn-outline btn-primary",
      },
    ],
  },
  {
    title: "Gestión de Turnos en Tiempo Real",
    alt: "Aplicación de ticketera con WebSockets",
    src: "/images/proyectos/socket.png",
    description: "Sistema dinámico de turnos para comercios, utilizando comunicación bidireccional para actualizaciones instantáneas en pantalla.",
    badges: ["Node.js", "Socket.io", "Express", "JavaScript"],
    buttons: [
      {
        label: "Repo",
        href: "https://github.com/ManuCaporaso/tp_integracion_de_aplicaciones_ITS_ticketera",
        className: "btn btn-sm btn-outline btn-primary",
      },
    ],
  },
];

export default function ProjectsPage({ location }) {
  const [lightbox, setLightbox] = React.useState({ open: false, src: "", alt: "" });
  const dialogRef = React.useRef(null);

  React.useEffect(() => {
    const dlg = dialogRef.current;
    if (!dlg) return;
    lightbox.open ? dlg.showModal() : dlg.close();
  }, [lightbox.open]);

  return (
    <Layout 
      location={location} 
      title="Proyectos" 
      description="Proyectos desarrollados por Manuel Caporaso."
    >
      <section className="flex flex-col items-center text-center w-full max-w-7xl mx-auto px-4 pt-4 pb-16 gap-10">
        <header>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight bg-gradient-to-r from-primary to-secondary dark:from-indigo-300 dark:to-sky-400 bg-clip-text text-transparent">
            Proyectos
          </h1>
          <p className="mt-2 text-base sm:text-lg text-base-content/70">
            Soluciones digitales a medida para organizaciones y estudios profesionales.
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
      </section>

      {/* Lightbox - DaisyUI Accessiblity Pattern */}
<dialog 
  ref={dialogRef} 
  className="modal"
>
  <div className="modal-box max-w-5xl p-2 sm:p-4 bg-base-100 relative">
    <button 
      type="button"
      className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 z-10"
      onClick={() => setLightbox({ open: false, src: "", alt: "" })}
    >✕</button>
    <img src={lightbox.src} alt={lightbox.alt} className="w-full h-auto object-contain rounded-lg" />
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
    </Layout>
  );
}