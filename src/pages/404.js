import * as React from "react";
import { Link } from "gatsby";
import Layout from "../components/layout";

const NotFoundPage = () => {
  return (
    <Layout title="Not Found">
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
          Page not found
        </h1>

        {/* Message */}
        <p className="text-base sm:text-xl text-base-content/70 max-w-[550px]">
          Sorry, we couldn’t find the page you were looking for.  
          It may have moved — or never existed.
        </p>

        {/* CTA Button */}
        <Link
          to="/"
          className="
            btn btn-primary btn-md mt-6
            transition-transform duration-300 hover:-translate-y-0.5
          "
        >
          Take me home
        </Link>

      </section>
    </Layout>
  );
};

export default NotFoundPage;

export const Head = () => <title>Not Found</title>;
