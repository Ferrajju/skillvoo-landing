"use client"

import Link from "next/link"
import { motion } from "framer-motion"

export default function TermsAndConditions() {
  const currentDate = new Date().toLocaleDateString("es-ES", { year: "numeric", month: "long", day: "numeric" })

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-purple-900 to-slate-900">
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto bg-white/10 backdrop-blur-lg rounded-2xl p-8 shadow-xl border border-white/20"
        >
          <h1 className="text-4xl font-bold text-white mb-6">Términos y Condiciones</h1>
          <p className="text-purple-200 mb-8">Última actualización: {currentDate}</p>

          <div className="space-y-6 text-purple-100">
            <p>
              Bienvenido/a a Skilvoo. Al utilizar nuestro sitio web y unirte a nuestra waitlist, aceptas cumplir con los
              siguientes términos y condiciones. Si no estás de acuerdo con alguno de estos términos, te recomendamos no
              utilizar nuestro servicio.
            </p>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-2">1. Información General</h2>
              <p>
                Este sitio web es operado por Skilvoo. Nuestra misión es proporcionar contenido de valor a través de
                nuestra newsletter y servicios relacionados.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-2">2. Uso del Sitio</h2>
              <p>
                Los usuarios deben proporcionar información precisa y actualizada al registrarse en nuestra waitlist.
                Está prohibido utilizar este sitio para actividades ilegales o no autorizadas. Nos reservamos el derecho
                de suspender o cancelar el acceso al sitio si se detecta un mal uso.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-2">3. Recopilación de Datos</h2>
              <p>Al registrarte en la waitlist, recopilamos tu:</p>
              <ul className="list-disc list-inside ml-4 mt-2">
                <li>Nombre</li>
                <li>Dirección de correo electrónico</li>
              </ul>
              <p className="mt-2">
                <strong>Uso de los datos:</strong>
              </p>
              <ul className="list-disc list-inside ml-4">
                <li>Para enviarte nuestra newsletter.</li>
                <li>Para comunicarte actualizaciones y ofertas relacionadas con nuestros servicios.</li>
              </ul>
              <p className="mt-2">
                Tus datos no serán vendidos ni compartidos con terceros sin tu consentimiento, salvo en los casos
                requeridos por ley.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-2">4. Propiedad Intelectual</h2>
              <p>
                Todo el contenido del sitio, incluyendo textos, gráficos y diseño, es propiedad de Skilvoo y está
                protegido por leyes de derechos de autor. No está permitido reproducir, distribuir o usar el contenido
                sin autorización previa.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-2">5. Limitación de Responsabilidad</h2>
              <p>
                Skilvoo no se responsabiliza por errores en el contenido ni por el uso que los usuarios hagan de la
                información proporcionada. Aunque tomamos medidas razonables para proteger la información personal, no
                podemos garantizar la seguridad total de los datos en línea.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-2">6. Cancelación de Suscripción</h2>
              <p>
                Puedes darte de baja de nuestra waitlist o newsletter en cualquier momento a través del enlace que
                encontrarás en nuestros correos.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-2">7. Cambios en los Términos</h2>
              <p>
                Nos reservamos el derecho de actualizar estos términos y condiciones en cualquier momento. Notificaremos
                a los usuarios sobre cambios significativos.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-2">8. Contacto</h2>
              <p>
                Si tienes dudas sobre estos términos, puedes escribirnos a:{" "}
                <a href="mailto:info@skilvoo.com" className="text-purple-300 hover:text-purple-100 transition-colors">
                  info@skilvoo.com
                </a>
                .
              </p>
            </section>
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/"
              className="inline-block px-6 py-3 bg-gradient-to-r from-purple-500 to-fuchsia-500 rounded-full text-white font-semibold hover:opacity-90 transition-all duration-300 hover:scale-105 shadow-lg"
            >
              Volver a la página principal
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

