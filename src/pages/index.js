import * as React from "react";
import Layout from "../components/layout";

const IndexPage = () => {
  return (
    <Layout
      title="Home"
      description="Portfolio of Manuel Caporaso, Full Stack Developer."
    >
      {/* Fondo decorativo (no interfiere con clicks) */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
      >
        {/* Radial suave */}
        <div className="absolute inset-0 bg-[radial-gradient(45rem_30rem_at_50%_-10%,hsl(var(--p)/0.10),transparent_60%)] dark:bg-[radial-gradient(45rem_30rem_at_50%_-10%,#7dd3fc20,transparent_60%)]" />
        {/* Grid punteado */}
        <div className="absolute inset-0 mask-[radial-gradient(ellipse_at_center,black_40%,transparent_70%)]">
          <div className="h-full w-full bg-[linear-gradient(to_right,transparent_0_23px,rgba(0,0,0,0.08)_24px),linear-gradient(to_bottom,transparent_0_23px,rgba(0,0,0,0.08)_24px)] dark:bg-[linear-gradient(to_right,transparent_0_23px,rgba(255,255,255,0.08)_24px),linear-gradient(to_bottom,transparent_0_23px,rgba(255,255,255,0.08)_24px)] bg-size-[24px_24px]" />
        </div>
      </div>

      <section
        className="
          flex flex-col items-center text-center gap-4
          animate-[fadeInUp_0.8s_ease-out]
        "
      >
        {/* Título superior */}
        <h2
          className="
            text-lg sm:text-xl font-semibold uppercase tracking-widest
            text-primary dark:text-sky-400
          "
        >
          Portfolio
        </h2>

        {/* Foto (más grande) */}
        <div
          className="
            w-48 h-48 sm:w-60 sm:h-60 md:w-72 md:h-72
            relative 
            bg-gradient-to-br from-primary to-secondary
            dark:from-indigo-200 dark:to-sky-200 
            rounded-full overflow-hidden
            border border-base-300 shadow-lg
            transition duration-300
            hover:scale-105 hover:shadow-2xl hover:shadow-primary/25
            dark:hover:shadow-indigo-400/25
          "
        >
          <img
            src="/images/manu1.jpg"
            alt="Manuel Caporaso"
            className="w-full h-full object-contain" 
            loading="eager"
          />
        </div>

        {/* Nombre estilo marca */}
        <h1
          className="
            mt-4
            text-4xl sm:text-6xl font-extrabold tracking-tight
            bg-linear-to-r from-primary to-secondary
            dark:from-indigo-300 dark:to-sky-400
            bg-clip-text text-transparent
          "
        >
          MANUEL CAPORASO
        </h1>

        {/* Subtítulo */}
        <p className="mt-1 text-base sm:text-xl font-medium text-base-content/70">
          Full-Stack Software Developer
        </p>
      </section>

      <style>{`
        @keyframes fadeInUp {
          0% { opacity: 0; transform: translateY(10px); }
          100% { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </Layout>
  );
};

export default IndexPage;
