import * as React from "react";
import Layout from "../components/layout";
import { Icon } from "@iconify/react";

const skills = [
  { icon: "simple-icons:typescript", name: "TypeScript" },
  { icon: "simple-icons:javascript", name: "JavaScript" },
  { icon: "simple-icons:nodejs", name: "Node.js" },
  { icon: "simple-icons:react", name: "React" },
  { icon: "simple-icons:react", name: "React Native" },
  { icon: "simple-icons:nestjs", name: "NestJS" },
  { icon: "simple-icons:angular", name: "Angular" },
  { icon: "simple-icons:vue-dot-js", name: "Vue.js" },
  { icon: "simple-icons:tailwindcss", name: "Tailwind CSS" },
  { icon: "simple-icons:html5", name: "HTML" },
  { icon: "simple-icons:css3", name: "CSS" },
  { icon: "simple-icons:docker", name: "Docker" },
  { icon: "simple-icons:amazonaws", name: "AWS" },
  { icon: "simple-icons:postgresql", name: "PostgreSQL" },
  { icon: "simple-icons:mongodb", name: "MongoDB" },
  { icon: "mdi:database", name: "SQL" },
  { icon: "simple-icons:linux", name: "Linux" },
  { icon: "mdi:server", name: "Servers" },
  { icon: "simple-icons:postman", name: "Postman" },
  { icon: "simple-icons:github", name: "Git" },
  { icon: "simple-icons:visualstudiocode", name: "VS Code" },
  { icon: "simple-icons:python", name: "Python" },
];

const hardwareSkills = [
  { icon: "mdi:desktop-tower-monitor", name: "Armado de PC" },
  { icon: "mdi:screwdriver", name: "Reparación de PC" },
  { icon: "mdi:memory", name: "Instalación de hardware" },
  { icon: "mdi:harddisk", name: "Mantenimiento preventivo" },
  { icon: "mdi:tools", name: "Diagnóstico y reemplazo de componentes" },
  { icon: "mdi:usb", name: "Instalación de periféricos" },
  { icon: "mdi:ubuntu", name: "Formateo e instalación de sistemas operativos" },
  { icon: "mdi:lan-connect", name: "Configuración de redes domésticas" },
  { icon: "mdi:monitor-shimmer", name: "Optimización de rendimiento" },
];

const softSkills = [
  { icon: "mdi:account-group-outline", name: "Trabajo en equipo" },
  { icon: "mdi:handshake-outline", name: "Colaboración" },
  { icon: "mdi:lightbulb-outline", name: "Proactividad" },
  { icon: "mdi:gesture-tap-button", name: "Resolución de problemas" },
  { icon: "mdi:chat-processing-outline", name: "Comunicación" },
  { icon: "mdi:brain", name: "Pensamiento crítico" },
  { icon: "mdi:leaf", name: "Adaptabilidad" },
  { icon: "mdi:head-heart-outline", name: "Empatía" },
  { icon: "mdi:calendar-check-outline", name: "Gestión del tiempo" },
];

const AboutPage = () => {
  const sortedSkills = React.useMemo(
    () =>
      [...skills].sort((a, b) =>
        a.name.localeCompare(b.name, undefined, { sensitivity: "base" })
      ),
    []
  );

  return (
    <Layout
      title="Sobre mí"
      description="Portfolio de Manuel Caporaso — Full Stack Developer y técnico en mantenimiento informático."
    >
      <section className="flex flex-col items-center text-center w-full max-w-6xl mx-auto px-4 pt-6 pb-16 gap-10">
        <h1
          className="
            text-3xl sm:text-5xl font-extrabold tracking-tight
            bg-linear-to-r from-primary to-secondary
            dark:from-indigo-300 dark:to-sky-400
            bg-clip-text text-transparent
          "
        >
          Sobre mí
        </h1>

        {/* GRID PRINCIPAL */}
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-8 text-left">
          {/* Perfil */}
          <article className="card bg-base-100 border border-base-300 shadow-sm">
            <div className="card-body gap-4">
              <h2 className="card-title">Perfil profesional</h2>
              <p className="text-base lg:text-lg leading-relaxed text-base-content/70 text-justify">
                Soy Técnico Superior en Desarrollo de Software Full Stack.
                Me formé para diseñar, desarrollar e implementar aplicaciones
                web y móviles completas, trabajando tanto en el frontend como en
                el backend. Además, tengo experiencia en armado, reparación e instalación de hardware, con una
                sólida base técnica en mantenimiento informático y optimización
                de equipos. Mi enfoque combina la lógica del desarrollo con la
                precisión del trabajo técnico en hardware, buscando siempre
                soluciones efectivas y sostenibles.
              </p>
            </div>
          </article>

          {/* Habilidades Técnicas */}
          <article className="card bg-base-100 border border-base-300 shadow-sm">
            <div className="card-body gap-4">
              <h2 className="card-title">Habilidades en desarrollo</h2>
              <div className="flex flex-wrap gap-2">
                {sortedSkills.map(({ icon, name }, idx) => (
                  <span
                    key={idx}
                    className="badge badge-lg border-base-300 bg-base-200 hover:bg-base-300 transition-colors flex items-center gap-2"
                  >
                    <Icon icon={icon} width="20" height="20" />
                    {name}
                  </span>
                ))}
              </div>
            </div>
          </article>
        </div>

        {/* NUEVA SECCIÓN: HARDWARE */}
        <article className="card bg-base-100 border border-base-300 shadow-sm w-full">
          <div className="card-body gap-4">
            <h2 className="card-title">Habilidades en hardware y soporte técnico</h2>
            <p className="text-base text-base-content/70">
              Conocimientos prácticos en reparación, diagnóstico y mantenimiento de equipos informáticos.
            </p>
            <div className="flex flex-wrap gap-2">
              {hardwareSkills.map(({ icon, name }, idx) => (
                <span
                  key={idx}
                  className="badge badge-lg border-base-300 bg-base-200 hover:bg-base-300 transition-colors flex items-center gap-2"
                >
                  <Icon icon={icon} width="20" height="20" />
                  {name}
                </span>
              ))}
            </div>
          </div>
        </article>

        {/* Habilidades Blandas */}
        <article className="card bg-base-100 border border-base-300 shadow-sm w-full">
          <div className="card-body gap-4">
            <h2 className="card-title">Habilidades blandas</h2>
            <p className="text-base text-base-content/70">
              Comunicación clara, colaboración y trabajo en objetivos comunes.
            </p>
            <div className="flex flex-wrap gap-2">
              {softSkills.map(({ icon, name }, idx) => (
                <span
                  key={idx}
                  className="badge badge-lg border-base-300 bg-base-200 hover:bg-base-300 transition-colors flex items-center gap-2"
                >
                  <Icon icon={icon} width="20" height="20" />
                  {name}
                </span>
              ))}
            </div>
          </div>
        </article>
      </section>
    </Layout>
  );
};

export default AboutPage;
