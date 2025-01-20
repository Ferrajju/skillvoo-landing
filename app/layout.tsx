"use client";

import { useEffect } from "react";

// Extender el tipo global de Window
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
    const script = document.createElement("script");
    script.src =
      "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
    script.async = true;
    document.body.appendChild(script);

    window.googleTranslateElementInit = () => {
      const container = document.getElementById("google_translate_element");
      if (!container) {
        console.error("El contenedor para Google Translate no existe.");
        return;
      }

      try {
        new window.google.translate.TranslateElement(
          {
            pageLanguage: "en",
            includedLanguages: "en,es,fr,de,it",
            layout: 1, // Usar directamente el valor numérico para SIMPLE
          },
          "google_translate_element"
        );
      } catch (error) {
        console.error("Error al inicializar Google Translate:", error);
      }
    };
  }, []);

  return (
    <div>
      {/* Widget de Google Translate */}
      <div
        id="google_translate_element"
        style={{ position: "absolute", top: "10px", right: "10px" }}
      ></div>
      <h1>Bienvenido a SkillVoo</h1>
      <p>
        Estamos implementando la funcionalidad de traducción automática. Gracias
        por tu paciencia.
      </p>
    </div>
  );
}
