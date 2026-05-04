import * as React from "react";
import Layout from "../components/layout";
import { Icon } from "@iconify/react";

const solutions = [
  {
    title: "Tu Negocio en Internet",
    description: "Una página web profesional diseñada para que tus clientes te encuentren y confíen en vos.",
    benefits: [
      "Diseño moderno que se ve bien en cualquier celular",
      "Contenido optimizado para que Google te muestre primero",
      "Secciones claras para mostrar tus servicios y precios",
      "Botón directo a tu WhatsApp para consultas rápidas",
      "Mapa de ubicación y formularios de contacto",
      "Fácil de mantener y actualizar"
    ],
    icon: "mdi:monitor-cellphone",
    result: "Ideal para captar nuevos clientes y dar una imagen profesional."
  },
  {
    title: "Sistema de Gestión a Medida",
    description: "Software creado para organizar tu trabajo y automatizar tareas repetitivas.",
    benefits: [
      "Control de turnos, stock o afiliados",
      "Acceso seguro desde cualquier lugar",
      "Reportes automáticos de tus movimientos",
      "Base de datos propia con tu información segura",
      "Eliminación de planillas de papel o Excel complicados"
    ],
    icon: "mdi:briefcase-check-outline",
    result: "Ideal para ahorrar horas de trabajo administrativo y evitar errores."
  },
  {
    title: "Soporte y Puesta a Punto",
    description: "Servicio técnico integral para que tus herramientas de trabajo nunca fallen.",
    benefits: [
      "Reparación y armado de equipos de alto rendimiento",
      "Limpieza y mantenimiento para evitar roturas",
      "Instalación de programas y sistemas operativos",
      "Mejora de velocidad en computadoras lentas",
      "Asesoramiento técnico para compras inteligentes"
    ],
    icon: "mdi:hammer-screwdriver",
    result: "Ideal para oficinas o profesionales que no pueden dejar de producir."
  }
];

const PresupuestosPage = ({ location }) => {
  return (
    <Layout 
      location={location} 
      title="Propuesta de Trabajo" 
      description="Soluciones tecnológicas para potenciar tu actividad profesional."
    >
      <section className="flex flex-col items-center w-full max-w-6xl mx-auto px-4 py-12 gap-16">
        
        <header className="text-center max-w-2xl">
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-base-content">
            ¿Cómo puedo ayudarte?
          </h1>
          <p className="mt-6 text-xl text-base-content/70 leading-relaxed">
            Me especializo en crear herramientas digitales que simplifican tu día a día. 
            Sin vueltas técnicas: <strong>soluciones que funcionan.</strong>
          </p>
        </header>

        {/* Tarjetas de Beneficios */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
          {solutions.map((item, idx) => (
            <div key={idx} className="card bg-base-100 border-2 border-base-300 shadow-xl hover:border-primary transition-all duration-300">
              <div className="card-body p-8 gap-6">
                <div className="bg-primary text-white w-14 h-14 rounded-2xl flex items-center justify-center shadow-lg shadow-primary/30">
                  <Icon icon={item.icon} width="32" height="32" />
                </div>

                <div>
                  <h2 className="card-title text-2xl font-bold">{item.title}</h2>
                  <p className="text-base opacity-70 mt-2">{item.description}</p>
                </div>

                <div className="divider my-0"></div>

                <ul className="space-y-4">
                  {item.benefits.map((benefit, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm font-medium">
                      <Icon icon="mdi:check-circle" className="text-success mt-1 flex-shrink-0" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-auto pt-6">
                  <div className="bg-base-200 p-4 rounded-xl mb-6">
                    <p className="text-xs font-bold uppercase tracking-widest opacity-50 mb-1">Resultado esperado</p>
                    <p className="text-sm italic">"{item.result}"</p>
                  </div>
                  
                  <a 
                    href={`https://wa.me/549299XXXXXXX?text=Hola Manuel, me interesa la solución: ${item.title}`}
                    className="btn btn-primary btn-block text-lg shadow-md"
                  >
                    Consultar por este plan
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Cierre de confianza */}
        <div className="max-w-4xl w-full grid grid-cols-1 sm:grid-cols-2 gap-8 items-center bg-base-200 p-8 sm:p-12 rounded-[2.5rem] border border-base-300">
          <div>
            <h3 className="text-3xl font-bold mb-4">Trabajemos juntos</h3>
            <p className="text-base-content/70">
              Mi objetivo es que te olvides de los problemas tecnológicos y te enfoques en lo que mejor sabés hacer. 
              Entrego proyectos terminados, listos para usar y con soporte garantizado.
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-4 bg-base-100 p-4 rounded-2xl border border-base-300">
              <Icon icon="mdi:shield-check" className="text-primary" width="30" />
              <span className="font-semibold text-sm">Garantía de funcionamiento</span>
            </div>
            <div className="flex items-center gap-4 bg-base-100 p-4 rounded-2xl border border-base-300">
              <Icon icon="mdi:clock-fast" className="text-primary" width="30" />
              <span className="font-semibold text-sm">Entregas en tiempo y forma</span>
            </div>
          </div>
        </div>

      </section>
    </Layout>
  );
};

export default PresupuestosPage;

export const Head = () => (
  <>
    <title>Presupuesto y Servicios | Manuel Caporaso</title>
    <meta name="robots" content="noindex, nofollow" />
  </>
);