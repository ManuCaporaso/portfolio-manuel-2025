import React from "react";
import { Icon } from "@iconify/react";
import { useTheme } from "../context/ThemeContext";

const icons = [
  {
    icon: "mdi:github",
    url: "https://github.com/ManuCaporaso",
    label: "GitHub",
  },
  {
    icon: "mdi:linkedin",
    url: "https://linkedin.com/in/manu-caporaso",
    label: "LinkedIn",
  },
  {
    icon: "mdi:email",
    url: "mailto:manuelcaporaso20@gmail.com",
    label: "Email",
  },
];

export default function Footer() {
  const { theme } = useTheme();

  const darkThemes = ["dark", "night", "black", "dracula"];
  const isDark = darkThemes.includes(theme);

  const logoLight = "/images/logo-dev.png";
  const logoDark = "/images/logo-dev2.png";

  const logoSrc = isDark ? logoLight : logoDark;

  return (
    <footer className="border-t border-base-300 bg-base-100/80 backdrop-blur supports-backdrop-filter:bg-base-100/60">
      <div className="max-w-6xl mx-auto px-6 py-6 flex flex-col items-center gap-4 text-center">
        <div className="flex items-center gap-6">
          {icons.map(({ icon, url, label }, index) => (
            <a
              key={index}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors duration-300 hover:text-primary"
              aria-label={label}
            >
              <Icon icon={icon} width="26" height="26" />
            </a>
          ))}
        </div>

        <div className="w-full border-t border-base-300 opacity-50" />

        <div className="flex flex-col items-center gap-2">
          <img
            src={logoSrc}
            alt="Caporaso Dev"
            className="h-10 w-auto object-contain opacity-90 transition duration-300"
            onError={(e) => {
              console.error("No se pudo cargar:", logoSrc);
              e.currentTarget.src = logoDark;
            }}
          />

          <p className="text-xs opacity-60">© {new Date().getFullYear()}</p>
        </div>
      </div>
    </footer>
  );
}