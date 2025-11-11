import React, { createContext, useContext, useEffect, useMemo, useState } from "react";

const ThemeContext = createContext({
  theme: "corporate",
  setTheme: () => {},
  toggleTheme: () => {},
});

export function ThemeProvider({ children, defaultTheme = "corporate" }) {
  // Evitar mismatch en SSR: inicializamos con el default y luego resolvemos en efecto.
  const [theme, setTheme] = useState(defaultTheme);

  // Resolver tema guardado o preferencia del SO en el primer render del cliente
  useEffect(() => {
    if (typeof window === "undefined") return;

    const saved = window.localStorage.getItem("theme");
    if (saved) {
      setTheme(saved);
      return;
    }

    // Si no hay guardado, respetar prefers-color-scheme
    const prefersDark = window.matchMedia?.("(prefers-color-scheme: dark)")?.matches;
    setTheme(prefersDark ? "night" : "corporate");
  }, []);

  // Aplicar al <html data-theme="..."> y persistir
  useEffect(() => {
    if (typeof document === "undefined") return;

    const html = document.documentElement;
    html.setAttribute("data-theme", theme);
    // Opcional: ayuda a algunos navegadores con formularios nativos
    html.style.colorScheme = theme === "night" ? "dark" : "light";

    if (typeof window !== "undefined") {
      window.localStorage.setItem("theme", theme);
    }
  }, [theme]);

  const value = useMemo(
    () => ({
      theme,
      setTheme,
      toggleTheme: () => setTheme((t) => (t === "night" ? "corporate" : "night")),
    }),
    [theme]
  );

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

export const useTheme = () => useContext(ThemeContext);
