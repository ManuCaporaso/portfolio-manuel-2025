import React from "react";
import { Icon } from "@iconify/react";

const icons = [
  { icon: "mdi:github", url: "https://github.com/ManuCaporaso", label: "GitHub" },
  { icon: "mdi:linkedin", url: "https://linkedin.com/in/manu-caporaso", label: "LinkedIn" },
  { icon: "mdi:email", url: "mailto:manuelcaporaso20@gmail.com", label: "Email" },
];

export default function Footer() {
  return (
    <footer className="border-t border-base-300 bg-base-100/80 backdrop-blur supports-backdrop-filter:bg-base-100/60">
      <div className="max-w-6xl mx-auto px-6 py-6 flex flex-col items-center gap-4 text-center">

        {/* Icons */}
        <div className="flex gap-6">
          {icons.map(({ icon, url, label }, index) => (
            <a
              key={index}
              href={url}
              target="_blank" // Ajuste: Abre en pestaña nueva
              rel="noopener noreferrer"
              className="transition-colors hover:text-primary"
              aria-label={label}
            >
              <Icon icon={icon} width="26" height="26" />
            </a>
          ))}
        </div>

        {/* Divider Line */}
        <div className="w-full border-t border-base-300 opacity-50" />

        {/* Text */}
        <p className="text-sm opacity-70">
          © {new Date().getFullYear()} Manuel Caporaso — Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
}