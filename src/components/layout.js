import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "./navbar";
import Footer from "./footer";
import { ThemeProvider } from "../context/ThemeContext";

// Variantes para un slide lateral suave
const slideVariants = {
  initial: { opacity: 0, x: 20 }, // Entra desde la derecha
  animate: { opacity: 1, x: 0 },  // Se queda en el centro
  exit: { opacity: 0, x: -20 },   // Se va hacia la izquierda
};

export default function Layout({ children, location, title, description }) {
  return (
    <ThemeProvider>
      <div className="flex flex-col min-h-screen overflow-hidden relative bg-base-100">
        <Navbar />

        <AnimatePresence mode="wait">
          <motion.main
            key={location?.pathname}
            initial="initial"
            animate="animate"
            exit="exit"
            variants={slideVariants}
            transition={{ 
              duration: 0.3, 
              ease: [0.43, 0.13, 0.23, 0.96] // Una curva tipo "spring" pero más profesional
            }}
            className="flex flex-col items-center justify-start grow pt-20 pb-16 px-4"
          >
            {children}
          </motion.main>
        </AnimatePresence>

        <Footer />
      </div>
    </ThemeProvider>
  );
}