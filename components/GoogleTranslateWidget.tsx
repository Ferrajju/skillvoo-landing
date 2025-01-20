"use client";

import { useEffect } from "react";

// Extiende el tipo global de `window` para incluir `googleTranslateElementInit` y `google`
declare global {
  interface Window {
    googleTranslateElementInit?: () => void;
    google?: {
      translate: {
        TranslateElement: new (options: object, containerId: string) => void;
        TranslateElementOptions?: {
          layout: {
            SIMPLE: string;
            HORIZONTAL: string;
          };
        };
      };
    };
  }
}

export default function GoogleTranslateWidget() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
    script.async = true;
    document.body.appendChild(script);

    // Definimos el callback de Google Translate
    window.googleTranslateElementInit = () => {
      const container = document.getElementById("google_translate_element");
      if (!container) {
        console.error("El contenedor para Google Translate no existe.");
        return;
      }

      // Asegúrate de que `window.google` esté definido antes de usarlo
      if (window.google && window.google.translate) {
        new window.google.translate.TranslateElement(
          {
            pageLanguage: "en",
            includedLanguages: "en,es,fr,de,it",
            layout: window.google.translate.TranslateElementOptions?.layout?.SIMPLE ?? 1,
          },
          "google_translate_element"
        );
      } else {
        console.error("La API de Google Translate no está disponible.");
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
