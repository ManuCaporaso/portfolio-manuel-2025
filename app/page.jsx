export const metadata = {
  description:
    "Portfolio of Manuel Caporaso, Full Stack Developer.",
};

export default function IndexPage() {
  return (
    <>
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
      >
        <div className="absolute inset-0 bg-[radial-gradient(45rem_30rem_at_50%_-10%,color-mix(in_oklab,var(--color-primary)_10%,transparent),transparent_60%)] dark:bg-[radial-gradient(45rem_30rem_at_50%_-10%,#7dd3fc20,transparent_60%)]" />
        <div className="absolute inset-0 mask-[radial-gradient(ellipse_at_center,black_40%,transparent_70%)]">
          <div className="h-full w-full bg-[linear-gradient(to_right,transparent_0_23px,rgba(0,0,0,0.08)_24px),linear-gradient(to_bottom,transparent_0_23px,rgba(0,0,0,0.08)_24px)] dark:bg-[linear-gradient(to_right,transparent_0_23px,rgba(255,255,255,0.08)_24px),linear-gradient(to_bottom,transparent_0_23px,rgba(255,255,255,0.08)_24px)] bg-size-[24px_24px]" />
        </div>
      </div>

      <section className="flex flex-col items-center text-center gap-6 py-8">
        <div className="group relative">
          <div className="absolute -inset-2 bg-gradient-to-r from-primary to-secondary rounded-3xl blur opacity-25 group-hover:opacity-50 transition duration-500"></div>

          <div className="relative w-48 h-56 sm:w-60 sm:h-72 md:w-72 md:h-80 overflow-hidden rounded-2xl border-2 border-base-300 bg-base-100 shadow-xl transition-all duration-500 group-hover:-translate-y-2 group-hover:shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-base-200/50 z-10" />

            <img
              src="/images/manu1.jpg"
              alt="Manuel Caporaso"
              className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-110"
              loading="eager"
            />
          </div>

          <div className="absolute -bottom-3 -right-3 bg-primary text-primary-content p-2 rounded-lg shadow-lg transform rotate-12 group-hover:rotate-0 transition-transform duration-300">
            <code className="text-xs font-bold">{"<dev />"}</code>
          </div>
        </div>

        <div className="space-y-2">
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight bg-gradient-to-r from-blue-500 via-indigo-400 to-cyan-400 bg-clip-text text-transparent">
            MANUEL CAPORASO
          </h1>

          <div className="flex items-center justify-center gap-2">
            <span className="h-px w-8 bg-primary/50"></span>
            <p className="text-lg sm:text-2xl font-semibold tracking-wide text-base-content/70 uppercase">
              Full-Stack Developer
            </p>
            <span className="h-px w-8 bg-primary/50"></span>
          </div>
        </div>
      </section>
    </>
  );
}