"use client";

import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";

const slideVariants = {
  initial: { opacity: 0, x: 20 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -20 },
};

export default function PageTransition({ children }) {
  const pathname = usePathname();

  return (
    <AnimatePresence mode="wait">
      <motion.main
        key={pathname}
        initial="initial"
        animate="animate"
        exit="exit"
        variants={slideVariants}
        transition={{ duration: 0.3, ease: [0.43, 0.13, 0.23, 0.96] }}
        className="flex flex-col items-center justify-start grow pt-20 pb-16 px-4"
      >
        {children}
      </motion.main>
    </AnimatePresence>
  );
}