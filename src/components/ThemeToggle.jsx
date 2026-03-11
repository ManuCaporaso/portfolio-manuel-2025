import React from "react";
import { useTheme } from "../context/ThemeContext";
import { Icon } from "@iconify/react";
import { motion, AnimatePresence } from "framer-motion"; // Añadimos esto

export default function ThemeToggle({ className = "" }) {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <button
      aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
      className={`btn btn-ghost btn-circle ${className}`}
      onClick={toggleTheme}
      type="button"
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={theme} // Importante para que Framer detecte el cambio
          initial={{ y: -10, opacity: 0, rotate: -45 }}
          animate={{ y: 0, opacity: 1, rotate: 0 }}
          exit={{ y: 10, opacity: 0, rotate: 45 }}
          transition={{ duration: 0.2 }}
          className="flex items-center justify-center"
        >
          {isDark ? (
            <Icon icon="mdi:weather-sunny" width="22" height="22" />
          ) : (
            <Icon icon="mdi:weather-night" width="22" height="22" />
          )}
        </motion.div>
      </AnimatePresence>
    </button>
  );
}