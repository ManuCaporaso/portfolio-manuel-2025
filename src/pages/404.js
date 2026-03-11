import * as React from "react";
import { Link } from "gatsby";
import Layout from "../components/layout";

// 1. Recibimos 'location' como prop
const NotFoundPage = ({ location }) => {
  return (
    <Layout 
      location={location} // 2. Se la pasamos al Layout
      title="Not Found"
    >
      <section className="flex flex-col items-center justify-center text-center min-h-[70vh] gap-6 px-6">

        {/* Status Code */}
        <span className="text-sm font-semibold tracking-wide text-base-content/60">
          404
        </span>

        {/* Title */}
        <h1
          className="
            mt-4                     
            text-5xl sm:text-7xl font-extrabold tracking-tight
            text-base-content
          "
        >
          Página no encontrada
        </h1>

        {/* Message */}
        <p className="text-base sm:text-xl text-base-content/70 max-w-[550px]">
          Lo sentimos, no pudimos encontrar la página que estás buscando.  
          Puede que se haya movido o que nunca haya existido.
        </p>

        {/* CTA Button */}
        <Link
          to="/"
          className="
            btn btn-primary btn-md mt-6
            transition-transform duration-300 hover:-translate-y-0.5
          "
        >
          Volver al inicio
        </Link>

      </section>
    </Layout>
  );
};

export default NotFoundPage;

// Gatsby 5 recomienda usar el componente Head para el SEO
export const Head = () => <title>404: Not Found | Manuel Caporaso</title>;