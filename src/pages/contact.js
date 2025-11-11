import * as React from "react";
import Layout from "../components/layout";

export default function ContactPage() {
  const [status, setStatus] = React.useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // HONEYPOT check
    if (e.target.honey.value.trim() !== "") {
      // Bot detected - no envio
      return;
    }

    const formData = new FormData(e.target);

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
  };

  return (
    <Layout
      title="Contacto"
      description="Ponte en contacto conmigo."
    >
      <section className="flex flex-col items-center text-center max-w-4xl mx-auto px-6 pb-24 pt-8 gap-10">

        {/* Título */}
        <h1
          className="
            text-3xl sm:text-5xl font-extrabold tracking-tight
            bg-linear-to-r from-primary to-secondary
            dark:from-indigo-300 dark:to-sky-400
            bg-clip-text text-transparent
          "
        >
          Contacto
        </h1>

        <p className="text-lg text-base-content/70">
          ¿Tenés una consulta o propuesta? Escribime directamente aquí.
        </p>

        {/* Formulario */}
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-xl bg-base-100 border border-base-300 shadow-md rounded-xl p-6 flex flex-col gap-4"
        >
          
          {/* Honeypot (oculto) */}
          <input type="text" name="honey" className="hidden" tabIndex="-1" autoComplete="off" />

          <div className="form-control text-left">
            <label className="label">
              <span className="label-text">Nombre</span>
            </label>
            <input
              type="text"
              name="name"
              required
              className="input input-bordered w-full"
              placeholder="Tu nombre"
            />
          </div>

          <div className="form-control text-left">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              name="email"
              required
              className="input input-bordered w-full"
              placeholder="tucorreo@gmail.com"
            />
          </div>

          <div className="form-control text-left">
            <label className="label">
              <span className="label-text">Mensaje</span>
            </label>
            <textarea
              name="message"
              required
              rows="5"
              className="textarea textarea-bordered w-full"
              placeholder="Contame en qué te puedo ayudar"
            />
          </div>

          <button type="submit" className="btn btn-primary w-full">
            Enviar mensaje
          </button>

          {/* Alertas */}
          {status === "success" && (
            <div className="alert alert-success mt-3">
              Mensaje enviado correctamente. Gracias por contactarte!
            </div>
          )}
          {status === "error" && (
            <div className="alert alert-error mt-3">
              Ocurrió un error. Por favor intentá nuevamente.
            </div>
          )}
        </form>

      </section>
    </Layout>
  );
}
