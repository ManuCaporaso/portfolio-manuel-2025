import React from "react"
import { ThemeProvider } from "./src/context/ThemeContext"
import "./src/styles/global.css"

// Envolvemos la raíz para que el ThemeContext esté disponible en todos lados
export const wrapRootElement = ({ element }) => {
  return <ThemeProvider>{element}</ThemeProvider>
}

// OPCIONAL: Forzar el scroll al inicio en cada cambio de página
export const onRouteUpdate = () => {
  window.scrollTo(0, 0)
}