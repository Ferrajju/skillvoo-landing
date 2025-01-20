"use client";

import { useEffect } from "react";

// Declaración global para el traductor de Google
declare global {
  interface Window {
    google: {
      translate: {
        TranslateElement: new (options: object, containerId: string) => void;
      };
    };
    googleTranslateElementInit: () => void;
  }
}

export default function Page() {
  useEffect(() => {
    // Verifica si el script ya está cargado
    if (!document.querySelector("#google-translate-script")) {
      const script = document.createElement("script");
      script.id = "google-translate-script";
      script.src =
        "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
      script.async = true;
      document.body.appendChild(script);

      // Define la función de inicialización
      window.googleTranslateElementInit = () => {
        const container = document.getElementById("google_translate_element");
        if (!container) {
          console.error("El contenedor para Google Translate no existe.");
          return;
        }

        new window.google.translate.TranslateElement(
          {
            pageLanguage: "en",
            includedLanguages: "en,es,fr,de,it",
            layout: 1, // 1 = SIMPLE layout
          },
          "google_translate_element"
        );
      };
    }
  }, []);

  return (
    <div>
      {/* Contenedor para el widget de Google Translate */}
      <div
        id="google_translate_element"
        style={{ position: "absolute", top: "10px", right: "10px" }}
      ></div>

      {/* Contenido de la página */}
      <h1>Bienvenido a SkillVoo</h1>
      <p>
        Estamos implementando la funcionalidad de traducción automática. Gracias
        por tu paciencia.
      </p>
    </div>
  );
}
