import "./globals.css";
import Navbar from "../src/components/navbar";
import Footer from "../src/components/footer";
import PageTransition from "../src/components/PageTransition";
import { ThemeProvider } from "../src/context/ThemeContext";

export const metadata = {
  metadataBase: new URL("https://manuelcaporaso.online"),
  title: {
    default: "Manuel Caporaso | Full Stack Developer",
    template: "%s | Manuel Caporaso",
  },
  description:
    "Portfolio profesional de Manuel Caporaso, Técnico Superior en Desarrollo de Software especializado en React, Node.js y mantenimiento de sistemas.",
  icons: {
    icon: "/images/icono.png",
  },
};

const themeInitScript = `(function () {
  try {
    var theme = localStorage.getItem('theme');
    if (!theme) theme = 'dark';
    var html = document.documentElement;
    html.setAttribute('data-theme', theme);
    if (theme === 'dark') {
      html.classList.add('dark');
    } else {
      html.classList.remove('dark');
    }
  } catch (e) {}
})();`;

export default function RootLayout({ children }) {
  return (
    <html lang="es" data-theme="dark" className="dark" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body>
        <ThemeProvider>
          <div className="flex flex-col min-h-screen overflow-hidden relative bg-base-100">
            <Navbar />
            <PageTransition>{children}</PageTransition>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}