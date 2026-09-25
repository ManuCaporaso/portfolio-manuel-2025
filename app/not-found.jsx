import Link from "next/link";

export const metadata = {
  title: "404: Not Found",
};

export default function NotFound() {
  return (
    <section className="flex flex-col items-center justify-center text-center min-h-[70vh] gap-6 px-6">
      <span className="text-sm font-semibold tracking-wide text-base-content/60">
        404
      </span>

      <h1 className="mt-4 text-5xl sm:text-7xl font-extrabold tracking-tight bg-gradient-to-r from-blue-500 via-indigo-400 to-cyan-400 bg-clip-text text-transparent">
        Página no encontrada
      </h1>

      <p className="text-base sm:text-xl text-base-content/70 max-w-[550px]">
        Lo sentimos, no pudimos encontrar la página que estás buscando. Puede
        que se haya movido o que nunca haya existido.
      </p>

      <Link
        href="/"
        className="btn btn-primary btn-md mt-6 transition-transform duration-300 hover:-translate-y-0.5"
      >
        Volver al inicio
      </Link>
    </section>
  );
}