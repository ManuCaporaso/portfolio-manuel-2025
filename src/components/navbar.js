import React from "react";
import { Link } from "gatsby";
import { Icon } from "@iconify/react";
import ThemeToggle from "./ThemeToggle";

const links = [
  { title: "Home", url: "/" },
  { title: "Sobre Mi", url: "/about" },
  { title: "Formacion", url: "/education" },
  { title: "Proyectos", url: "/projects" },
  { title: "Contacto", url: "/contact" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-base-100/70 backdrop-blur-md border-b border-base-300/40">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">

        {/* Logo / Nombre */}
        <div className="flex items-center gap-2">
          <Link to="/" className="text-xs font-semibold tracking-tight hover:opacity-80 transition-opacity">
            Portfolio de Manuel Caporaso
          </Link>
        </div>

        {/* Desktop Navigation */}
        <ul className="hidden lg:flex items-center gap-6 text-sm font-medium">
          {links.map((item, i) => (
            <li key={i}>
              <Link
                to={item.url}
                activeClassName="text-primary font-semibold"
                className="hover:text-primary transition-colors"
              >
                {item.title}
              </Link>
            </li>
          ))}
        </ul>

        {/* Right side items */}
        <div className="flex items-center gap-3">
          {/* CV DESKTOP: Ahora se abre en ventana aparte */}
          <a
            href="/resume.pdf"
            target="_blank" 
            rel="noopener noreferrer"
            className="hidden sm:inline-flex text-sm hover:text-primary transition-colors"
          >
            Resume CV
          </a>

          <ThemeToggle className="scale-95" />

          {/* Mobile Menu */}
          <div className="dropdown dropdown-end lg:hidden">
            <button 
              type="button"
              className="btn btn-ghost btn-sm px-2" 
              aria-label="Open menu"
            >
              <Icon icon="material-symbols:menu-rounded" width="22" height="22" />
            </button>

            <ul className="menu menu-sm dropdown-content mt-3 z-[1] w-48 p-3 bg-base-100 border border-base-300 rounded-lg shadow-md">
              {links.map((item, i) => (
                <li key={i}>
                  <Link to={item.url} activeClassName="text-primary font-semibold">
                    {item.title}
                  </Link>
                </li>
              ))}
              <li className="mt-1 border-t border-base-300 pt-1">
                {/* CV MOBILE: Ahora se abre en ventana aparte */}
                <a
                  href="/cv_manuel_caporaso.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm hover:text-primary transition-colors"
                >
                  Resume
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}