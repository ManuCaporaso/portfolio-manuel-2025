"use client";

import * as React from "react";
import { Icon } from "@iconify/react";

export default function ContactForm() {
  const [status, setStatus] = React.useState(null); // "success" | "error" | null
  const [isSubmitting, setIsSubmitting] = React.useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isSubmitting) return;

    if (e.target.honey.value.trim() !== "") {
      return;
    }

    setIsSubmitting(true);
    setStatus(null);

    const formData = new FormData(e.target);

    try {
      const res = await fetch("https://formspree.io/f/mgvrendv", {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });

      if (res.ok) {
        setStatus("success");
        e.target.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="flex flex-col items-center text-center w-full max-w-6xl mx-auto px-4 pt-4 pb-20 gap-10">
      <header className="max-w-2xl">
        <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight bg-gradient-to-r from-blue-500 via-indigo-400 to-cyan-400 bg-clip-text text-transparent">
          Contacto
        </h1>
        <p className="mt-3 text-base sm:text-lg text-base-content/70">
          ¿Tenés un proyecto en mente, una consulta técnica o una propuesta laboral? Escribime directamente.
        </p>
      </header>

      <div className="w-full max-w-xl flex flex-col gap-6">
        <form
          onSubmit={handleSubmit}
          className="w-full bg-base-100 border border-base-300 hover:border-primary/40 transition-colors shadow-sm rounded-2xl p-6 sm:p-8 flex flex-col gap-4 text-left"
        >
          {/* Honeypot anti-spam */}
          <div className="hidden" aria-hidden="true">
            <input type="text" name="honey" tabIndex={-1} autoComplete="off" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="form-control">
              <label className="label pt-0" htmlFor="name">
                <span className="label-text font-medium">Nombre</span>
              </label>
              <input
                id="name"
                type="text"
                name="name"
                required
                disabled={isSubmitting}
                className="input input-bordered w-full focus:border-primary focus:outline-none"
                placeholder="Tu nombre"
              />
            </div>

            <div className="form-control">
              <label className="label pt-0" htmlFor="email">
                <span className="label-text font-medium">Email</span>
              </label>
              <input
                id="email"
                type="email"
                name="email"
                required
                disabled={isSubmitting}
                className="input input-bordered w-full focus:border-primary focus:outline-none"
                placeholder="tu@email.com"
              />
            </div>
          </div>

          <div className="form-control">
            <label className="label pt-0" htmlFor="subject">
              <span className="label-text font-medium">Motivo de consulta</span>
            </label>
            <select
              id="subject"
              name="subject"
              defaultValue="Desarrollo Web / Software"
              disabled={isSubmitting}
              className="select select-bordered w-full focus:border-primary focus:outline-none"
            >
              <option value="Desarrollo Web / Software">
                Desarrollo Web / Aplicación a medida
              </option>
              <option value="Propuesta Laboral / Colaboración">
                Propuesta Laboral / Colaboración IT
              </option>
              <option value="Integración IA / Automatización">
                Integración de IA / Automatización
              </option>
              <option value="Soporte Técnico / Hardware">
                Soporte Técnico / Infraestructura
              </option>
              <option value="Otra consulta">Otra consulta</option>
            </select>
          </div>

          <div className="form-control">
            <label className="label pt-0" htmlFor="message">
              <span className="label-text font-medium">Mensaje</span>
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={5}
              disabled={isSubmitting}
              className="textarea textarea-bordered w-full focus:border-primary focus:outline-none leading-relaxed"
              placeholder="Contame brevemente sobre tu proyecto, necesidad o propuesta..."
            />
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="btn btn-primary w-full mt-2 gap-2 font-semibold"
          >
            {isSubmitting ? (
              <>
                <span className="loading loading-spinner loading-sm" />
                Enviando mensaje...
              </>
            ) : (
              <>
                <Icon icon="mdi:send-outline" width="18" height="18" />
                Enviar mensaje
              </>
            )}
          </button>

          {status === "success" && (
            <div
              role="alert"
              className="alert alert-success mt-2 shadow-sm text-sm flex items-center justify-between"
            >
              <div className="flex items-center gap-2">
                <Icon icon="mdi:check-circle-outline" width="22" height="22" className="flex-shrink-0" />
                <span>¡Mensaje enviado correctamente! Te responderé a la brevedad.</span>
              </div>
              <button
                type="button"
                onClick={() => setStatus(null)}
                className="btn btn-xs btn-ghost btn-circle"
                aria-label="Cerrar notificación"
              >
                ✕
              </button>
            </div>
          )}

          {status === "error" && (
            <div
              role="alert"
              className="alert alert-error mt-2 shadow-sm text-sm flex items-center justify-between"
            >
              <div className="flex items-center gap-2">
                <Icon icon="mdi:alert-circle-outline" width="22" height="22" className="flex-shrink-0" />
                <span>No se pudo enviar el mensaje. Por favor intentá nuevamente.</span>
              </div>
              <button
                type="button"
                onClick={() => setStatus(null)}
                className="btn btn-xs btn-ghost btn-circle"
                aria-label="Cerrar notificación"
              >
                ✕
              </button>
            </div>
          )}
        </form>

        {/* Información complementaria de ubicación y respuesta */}
        <div className="flex flex-wrap items-center justify-center gap-4 text-xs sm:text-sm text-base-content/60">
          <span className="flex items-center gap-1.5">
            <Icon icon="mdi:map-marker-outline" width="17" className="text-primary" />
            Cipolletti, Río Negro (Remoto / Presencial)
          </span>
          <span className="hidden sm:inline text-base-content/30">•</span>
          <span className="flex items-center gap-1.5">
            <Icon icon="mdi:clock-fast" width="17" className="text-primary" />
            Respuesta habitual en menos de 24 hs
          </span>
        </div>
      </div>
    </section>
  );
}