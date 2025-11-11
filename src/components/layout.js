import React from "react";
import Navbar from "./navbar";
import Footer from "./footer";
import { Helmet } from "react-helmet";
import { useStaticQuery, graphql } from "gatsby";
import gradientFavicon from "../../static/images/icono.png";
import { ThemeProvider } from "../context/ThemeContext";

export default function Layout({ children, title, description }) {
  const { site } = useStaticQuery(graphql`
    query { site { siteMetadata { title description author } } }
  `);

  const metaTitle = title ? `${title} | ${site.siteMetadata.title}` : site.siteMetadata.title;
  const metaDescription = description || site.siteMetadata.description;

  return (
    <ThemeProvider>
      <div className="flex flex-col min-h-screen overflow-hidden">
        <Helmet link={[{ rel: "icon", type: "image/png", href: gradientFavicon }]}>
          <html lang="en" />
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <title>{metaTitle}</title>
          <meta name="description" content={metaDescription} />
          <meta name="author" content={site.siteMetadata.author} />
        </Helmet>

        <Navbar />

        <main className="flex flex-col items-center justify-start grow pt-20 pb-16 px-4">
          {children}
        </main>

        <Footer />
      </div>
    </ThemeProvider>
  );
}
