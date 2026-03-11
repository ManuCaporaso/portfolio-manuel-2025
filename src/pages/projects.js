import * as React from "react";
import Card from "../components/card";
import Layout from "../components/layout";

const cards = [
  {
    title: "Info-Tracker -Capturadora de novedades full-stack",
    alt: "Info-Tracker aplicación de escritorio",
    src: "/images/proyectos/info-tracker.png",
    description:
      "Aplicacion de escritorio y movil para capturar novedades de clientes, con reconocimiento de imagenes para diferentes areas.",
    // CORRECCIÓN: Se eliminó la coma extra después de "Nestjs"
    badges: ["React", "Nestjs", "mariadb", "REST API", "python", "tesseract OCR", "OpenCV"],
    buttons: [
      {
        label: "Solicitar acceso al Repo",
        href: "https://github.com/orgs/NovAR-Development-Group/repositories",
        className: "btn btn-sm btn-outline btn-primary",
      },
    ],
  },
  {
    title: "Administración para Sindicato",
    alt: "Carga de datos sindicato",
    src: "/images/proyectos/sindicato.png",
    description:
      "Sistema web full-stack para gestión de afiliados, reportes y administración interna.",
    badges: ["Node.js", "React.js", "Express", "PostgreSQL", "JWT", "REST API"],
    buttons: [
      {
        label: "Repo",
        href: "https://github.com/ManuCaporaso/sitramuci-sindicato",
        className: "btn btn-sm btn-outline btn-primary",
      },
      {
        label: "Live Demo",
        href: "https://sitramuci-sindicato.netlify.app/",
        className: "btn btn-sm btn-primary",
      },
    ],
  },
  {
    title: "Tienda online de Ropa Full-Stack",
    alt: "Tienda de ropa online",
    src: "/images/proyectos/tienda.png",
    description:
      "Tienda online de ropa desarrollada con arquitectura full-stack, permitiendo a los usuarios navegar productos, agregar al carrito y realizar compras seguras.",
    badges: ["Node.js", "React.js", "Express", "MySQL", "JWT", "REST API"],
    buttons: [
      {
        label: "Repo",
        href: "https://github.com/ManuCaporaso/tp-final-icaro-caporaso-fullstack",
        className: "btn btn-sm btn-outline btn-primary",
      },
    ],
  },
  {
    title: "Sistema de turnos con WebSockets",
    alt: "Sistema de turnos para comercio",
    src: "/images/proyectos/socket.png",
    description:
      "Aplicación web para gestión de turnos , con notificaciones en tiempo real usando WebSockets.",
    badges: ["Node.js", "Express", "Socket.io", "HTML", "CSS", "JavaScript"],
    buttons: [
      {
        label: "Repo",
        href: "https://github.com/ManuCaporaso/tp_integracion_de_aplicaciones_ITS_ticketera",
        className: "btn btn-sm btn-outline btn-primary",
      },
    ],
  },
];

// Recibimos 'location' para las transiciones
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
      location={location} // <--- Fundamental para Framer Motion
      title="Proyectos" 
      description="Proyectos desarrollados por Manuel Caporaso."
    >
      <section className="flex flex-col items-center text-center w-full max-w-7xl mx-auto px-4 pt-4 pb-16 gap-10">

        <header>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight bg-gradient-to-r from-primary to-secondary dark:from-indigo-300 dark:to-sky-400 bg-clip-text text-transparent">
            Proyectos
          </h1>
          <p className="mt-2 text-base sm:text-lg text-base-content/70">
            Selección de trabajos personales y académicos.
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

      {/* Lightbox - Accesibilidad mejorada con un botón de cierre */}
      <dialog 
        ref={dialogRef} 
        className="modal" 
        onClick={() => setLightbox({ open: false })}
        onKeyDown={(e) => e.key === 'Escape' && setLightbox({ open: false })}
      >
        <div className="modal-box max-w-5xl p-2 sm:p-4 bg-base-100 relative">
          <form method="dialog">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
          </form>
          <img src={lightbox.src} alt={lightbox.alt} className="w-full h-auto object-contain rounded-lg" />
        </div>
      </dialog>
    </Layout>
  );
}