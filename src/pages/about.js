import * as React from "react";
import Layout from "../components/layout";
import { Icon } from "@iconify/react";

const skills = [
  { icon: "simple-icons:typescript", name: "TypeScript" },
  { icon: "simple-icons:javascript", name: "JavaScript" },
  { icon: "simple-icons:nodedotjs", name: "Node.js" },
  { icon: "simple-icons:react", name: "React" },
  { icon: "simple-icons:react", name: "React Native" },
  { icon: "simple-icons:nestjs", name: "NestJS" },
  { icon: "simple-icons:angular", name: "Angular" },
  { icon: "simple-icons:vuedotjs", name: "Vue.js" },
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

const AboutPage = ({ location }) => {
  const sortedSkills = React.useMemo(
    () =>
      [...skills].sort((a, b) =>
        a.name.localeCompare(b.name, undefined, { sensitivity: "base" })
      ),
    []
  );

  // Componente interno para las tarjetas de habilidades con texto largo
  const SkillTile = ({ icon, name }) => (
    <div className="flex items-center gap-3 p-3 rounded-xl border border-base-300 bg-base-200/50 hover:bg-base-300 transition-all group">
      <div className="text-primary group-hover:scale-110 transition-transform flex-shrink-0">
        <Icon icon={icon} width="24" height="24" />
      </div>
      <span className="text-sm font-medium leading-tight text-base-content/90">{name}</span>
    </div>
  );

  return (
    <Layout
      location={location}
      title="Sobre mí"
      description="Portfolio de Manuel Caporaso — Full Stack Developer y técnico en mantenimiento informático."
    >
      <section className="flex flex-col items-center w-full max-w-6xl mx-auto px-4 pt-6 pb-16 gap-10">
        
        <header className="text-center">
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight bg-gradient-to-r from-primary to-secondary dark:from-indigo-300 dark:to-sky-400 bg-clip-text text-transparent">
            Sobre mí
          </h1>
        </header>

        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-8 text-left">
          {/* Perfil Profesional */}
          <article className="card bg-base-100 border border-base-300 shadow-sm">
            <div className="card-body gap-4">
              <h2 className="card-title text-2xl font-bold text-primary">Perfil profesional</h2>
              <p className="text-base lg:text-lg leading-relaxed text-base-content/70 text-justify">
                Soy <strong>Técnico Superior en Desarrollo de Software Full Stack</strong>. 
                Me formé para diseñar, desarrollar e implementar aplicaciones web y móviles completas, 
                trabajando tanto en el frontend como en el backend. Además, cuento con una sólida 
                experiencia técnica en mantenimiento informático y optimización de equipos. 
                Mi enfoque combina la lógica del desarrollo con la precisión del hardware, 
                buscando siempre soluciones efectivas y sostenibles.
              </p>
            </div>
          </article>

          {/* Habilidades en Desarrollo */}
          <article className="card bg-base-100 border border-base-300 shadow-sm">
            <div className="card-body gap-4">
              <h2 className="card-title text-2xl font-bold text-primary">Habilidades en desarrollo</h2>
              <div className="flex flex-wrap gap-2">
                {sortedSkills.map(({ icon, name }, idx) => (
                  <span
                    key={idx}
                    className="badge badge-lg h-auto py-2 border-base-300 bg-base-200 hover:bg-base-300 transition-colors flex items-center gap-2"
                  >
                    <Icon icon={icon} width="18" height="18" />
                    <span className="text-xs font-bold uppercase tracking-wide">{name}</span>
                  </span>
                ))}
              </div>
            </div>
          </article>
        </div>

        {/* HARDWARE Y SOPORTE - FIX PARA MOBILE */}
        <article className="card bg-base-100 border border-base-300 shadow-sm w-full text-left">
          <div className="card-body gap-6">
            <div>
              <h2 className="card-title text-2xl font-bold text-primary">Hardware y soporte técnico</h2>
              <p className="text-base text-base-content/60 mt-1">
                Conocimientos prácticos en reparación, diagnóstico y mantenimiento de infraestructura informática.
              </p>
            </div>
            
            {/* Grilla responsiva: 1 col en mobile, 2 en tablets, 3 en desktop */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {hardwareSkills.map((skill, idx) => (
                <SkillTile key={idx} {...skill} />
              ))}
            </div>
          </div>
        </article>

        {/* HABILIDADES BLANDAS - FIX PARA MOBILE */}
        <article className="card bg-base-100 border border-base-300 shadow-sm w-full text-left">
          <div className="card-body gap-6">
            <div>
              <h2 className="card-title text-2xl font-bold text-primary">Habilidades blandas</h2>
              <p className="text-base text-base-content/60 mt-1">
                Comunicación clara, colaboración y enfoque en resolución de problemas complejos.
              </p>
            </div>

            {/* Grilla responsiva: 1 col en mobile, 2 en tablets, 4 en desktop */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {softSkills.map((skill, idx) => (
                <SkillTile key={idx} {...skill} />
              ))}
            </div>
          </div>
        </article>

      </section>
    </Layout>
  );
};

export default AboutPage;