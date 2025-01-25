"use client"

import Link from "next/link"
import { motion } from "framer-motion"

export default function PrivacyPolicy() {
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
          <h1 className="text-4xl font-bold text-white mb-6">Política de Privacidad</h1>
          <p className="text-purple-200 mb-8">Última actualización: {currentDate}</p>

          <div className="space-y-6 text-purple-100">
            <p>
              En Skilvoo respetamos tu privacidad y nos comprometemos a proteger tu información personal. Esta política
              describe cómo recopilamos, usamos y protegemos tus datos.
            </p>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-2">1. Información Recopilada</h2>
              <p>Recopilamos los siguientes datos:</p>
              <ul className="list-disc list-inside ml-4 mt-2">
                <li>Nombre</li>
                <li>Dirección de correo electrónico</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-2">2. Uso de los Datos</h2>
              <p>Usamos esta información para:</p>
              <ul className="list-disc list-inside ml-4 mt-2">
                <li>Enviarte nuestra newsletter y actualizaciones.</li>
                <li>Mejorar nuestros servicios.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-2">3. Protección de los Datos</h2>
              <p>
                Implementamos medidas de seguridad técnicas y organizativas para proteger tu información contra accesos
                no autorizados.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-2">4. Tus Derechos</h2>
              <p>
                Puedes solicitar acceso, corrección o eliminación de tus datos escribiéndonos a{" "}
                <a href="mailto:info@skilvoo.com" className="text-purple-300 hover:text-purple-100 transition-colors">
                  info@skilvoo.com
                </a>
                . Puedes darte de baja en cualquier momento utilizando el enlace en nuestros correos.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-2">5. Cookies</h2>
              <p>
                Si utilizamos cookies, estas son para mejorar tu experiencia. Puedes configurar tu navegador para
                rechazarlas.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-2">6. Cambios en la Política</h2>
              <p>Podemos actualizar esta política en cualquier momento. Te notificaremos sobre cambios importantes.</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-2">7. Contacto</h2>
              <p>
                Si tienes dudas sobre esta política, contáctanos en:{" "}
                <a href="mailto:info@skilvoo.com" className="text-purple-300 hover:text-purple-100 transition-colors">
                  info@skilvoo.com
                </a>
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

