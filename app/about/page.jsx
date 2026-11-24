import { Icon } from "@iconify/react";

export const metadata = {
  title: "Sobre mí",
  description:
    "Portfolio de Manuel Caporaso — Técnico Superior en Desarrollo de Software Full Stack, especialista en integración de IA y soporte de infraestructura IT.",
};

const skills = [
  { icon: "simple-icons:typescript", name: "TypeScript" },
  { icon: "simple-icons:javascript", name: "JavaScript" },
  { icon: "simple-icons:nextdotjs", name: "Next.js" },
  { icon: "simple-icons:react", name: "React" },
  { icon: "simple-icons:react", name: "React Native" },
  { icon: "simple-icons:nodedotjs", name: "Node.js" },
  { icon: "simple-icons:nestjs", name: "NestJS" },
  { icon: "simple-icons:express", name: "Express" },
  { icon: "simple-icons:prisma", name: "Prisma ORM" },
  { icon: "simple-icons:angular", name: "Angular" },
  { icon: "simple-icons:vuedotjs", name: "Vue.js" },
  { icon: "simple-icons:tailwindcss", name: "Tailwind CSS" },
  { icon: "simple-icons:html5", name: "HTML5" },
  { icon: "simple-icons:css3", name: "CSS3" },
  { icon: "simple-icons:figma", name: "Figma" },
  { icon: "simple-icons:docker", name: "Docker" },
  { icon: "simple-icons:amazonaws", name: "AWS" },
  { icon: "simple-icons:postgresql", name: "PostgreSQL" },
  { icon: "simple-icons:mariadb", name: "MariaDB / MySQL" },
  { icon: "simple-icons:mongodb", name: "MongoDB" },
  { icon: "mdi:database", name: "SQL" },
  { icon: "simple-icons:linux", name: "Linux" },
  { icon: "mdi:server", name: "Servers" },
  { icon: "simple-icons:swagger", name: "Swagger" },
  { icon: "simple-icons:postman", name: "Postman" },
  { icon: "simple-icons:github", name: "Git" },
  { icon: "simple-icons:visualstudiocode", name: "VS Code" },
  { icon: "simple-icons:python", name: "Python" },
];

const aiSkills = [
  { icon: "mdi:robot-outline", name: "Agentes de IA" },
  { icon: "mdi:brain", name: "LLMs & Modelos" },
  { icon: "mdi:console-line", name: "IA por Terminal / CLI" },
  {
    icon: "mdi:application-cog-outline",
    name: "Prompt Engineering & Automatización",
  },
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

const sortedSkills = [...skills].sort((a, b) =>
  a.name.localeCompare(b.name, undefined, { sensitivity: "base" })
);

function SectionHeader({ icon, title, subtitle }) {
  return (
    <div>
      <h2 className="card-title text-xl sm:text-2xl font-bold text-primary flex items-center gap-2.5">
        <span className="p-2 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
          <Icon icon={icon} width="22" height="22" />
        </span>
        <span>{title}</span>
      </h2>
      {subtitle && (
        <p className="text-sm sm:text-base text-base-content/70 mt-1.5">
          {subtitle}
        </p>
      )}
    </div>
  );
}

function SkillTile({ icon, name }) {
  return (
    <div className="flex items-center gap-3 p-3.5 rounded-xl border border-base-300 bg-base-200/50 hover:bg-base-200 hover:border-primary/40 transition-all group">
      <div className="text-primary group-hover:scale-110 transition-transform flex-shrink-0">
        <Icon icon={icon} width="24" height="24" />
      </div>
      <span className="text-sm font-medium leading-tight text-base-content/90">
        {name}
      </span>
    </div>
  );
}

export default function AboutPage() {
  return (
    <section className="flex flex-col items-center w-full max-w-6xl mx-auto px-4 pt-4 pb-16 gap-10">
      <header className="text-center max-w-2xl">
        <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight bg-gradient-to-r from-blue-500 via-indigo-400 to-cyan-400 bg-clip-text text-transparent">
          Sobre mí
        </h1>
        <p className="mt-3 text-base sm:text-lg text-base-content/70">
          Desarrollo de software full-stack, flujos potenciados con IA e infraestructura informática.
        </p>
      </header>

      {/* Perfil Profesional + Stack Tecnológico */}
      <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-8 text-left">
        <article className="card bg-base-100 border border-base-300 hover:border-primary/40 transition-colors rounded-2xl shadow-sm">
          <div className="card-body gap-4">
            <SectionHeader
              icon="mdi:account-tie-outline"
              title="Perfil profesional"
            />
            <div className="space-y-4 text-base leading-relaxed text-base-content/75">
              <p>
                Soy{" "}
                <strong className="text-base-content">
                  Técnico Superior en Desarrollo de Software Full Stack
                </strong>
                . Me formé para diseñar, desarrollar e implementar aplicaciones web y
                móviles completas, cuidando tanto la arquitectura backend como la
                experiencia de usuario (UX/UI) en el frontend.
              </p>
              <p>
                Integro{" "}
                <strong className="text-base-content">
                  Inteligencia Artificial
                </strong>{" "}
                de forma activa en mi flujo de ingeniería mediante herramientas por
                terminal/CLI, orquestación de modelos de lenguaje (LLMs) y agentes
                autónomos para automatizar tareas y acelerar entregas. A esto sumo más de 15 años de 
                experiencia práctica en soporte técnico y hardware, logrando una visión integral que 
                abarca desde la infraestructura física hasta el desarrollo en la nube.
              </p>
            </div>
          </div>
        </article>

        <article className="card bg-base-100 border border-base-300 hover:border-primary/40 transition-colors rounded-2xl shadow-sm">
          <div className="card-body gap-4">
            <SectionHeader
              icon="mdi:code-tags"
              title="Stack de desarrollo"
              subtitle="Lenguajes, frameworks, bases de datos y herramientas."
            />
            <div className="flex flex-wrap gap-2 pt-1">
              {sortedSkills.map(({ icon, name }, idx) => (
                <span
                  key={idx}
                  className="badge badge-lg h-auto py-2 px-3 border-base-300 bg-base-200/70 hover:bg-base-200 hover:border-primary/40 transition-colors flex items-center gap-2"
                >
                  <Icon icon={icon} width="17" height="17" className="text-primary" />
                  <span className="text-xs font-semibold tracking-wide">
                    {name}
                  </span>
                </span>
              ))}
            </div>
          </div>
        </article>
      </div>

      {/* Inteligencia Artificial */}
      <article className="card bg-base-100 border border-base-300 hover:border-primary/40 transition-colors rounded-2xl shadow-sm w-full text-left">
        <div className="card-body gap-6">
          <SectionHeader
            icon="mdi:robot-happy-outline"
            title="Inteligencia Artificial"
            subtitle="Integración de IA en el ciclo de desarrollo: CLI, modelos de lenguaje y flujos con agentes."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {aiSkills.map((skill, idx) => (
              <SkillTile key={idx} {...skill} />
            ))}
          </div>
        </div>
      </article>

      {/* Hardware y Soporte Técnico */}
      <article className="card bg-base-100 border border-base-300 hover:border-primary/40 transition-colors rounded-2xl shadow-sm w-full text-left">
        <div className="card-body gap-6">
          <SectionHeader
            icon="mdi:desktop-classic"
            title="Hardware y soporte técnico"
            subtitle="Diagnóstico, reparación, armado y mantenimiento de infraestructura informática."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {hardwareSkills.map((skill, idx) => (
              <SkillTile key={idx} {...skill} />
            ))}
          </div>
        </div>
      </article>

      {/* Habilidades Blandas */}
      <article className="card bg-base-100 border border-base-300 hover:border-primary/40 transition-colors rounded-2xl shadow-sm w-full text-left">
        <div className="card-body gap-6">
          <SectionHeader
            icon="mdi:account-heart-outline"
            title="Habilidades blandas"
            subtitle="Comunicación clara, colaboración y resolución analítica de problemas."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {softSkills.map((skill, idx) => (
              <SkillTile key={idx} {...skill} />
            ))}
          </div>
        </div>
      </article>
    </section>
  );
}