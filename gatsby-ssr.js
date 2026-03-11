import React from "react";
import { ThemeProvider } from "./src/context/ThemeContext";

export const onRenderBody = ({ setHeadComponents }) => {
  setHeadComponents([
    <script
      key="dark-mode-script"
      dangerouslySetInnerHTML={{
        __html: `
          (function() {
            try {
              var theme = localStorage.getItem('theme');
              var supportDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches === true;
              if (!theme && supportDarkMode) theme = 'night';
              if (!theme) theme = 'corporate';
              document.documentElement.setAttribute('data-theme', theme);
            } catch (e) {}
          })();
        `,
      }}
    />,
  ]);
};

// Muy importante: Envolver la raíz también en el SSR
export const wrapRootElement = ({ element }) => {
  return <ThemeProvider>{element}</ThemeProvider>;
};