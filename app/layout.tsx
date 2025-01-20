"use client";

import { useEffect } from "react";

// Extender el tipo global de Window
declare global {
  interface Window {
    google: {
      translate: {
        TranslateElement: new (options: object, containerId: string) => void;
        TranslateElementOptions?: {
          pageLanguage: string;
          includedLanguages?: string;
          layout?: {
            SIMPLE: string;
            HORIZONTAL: string;
          };
        };
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

    // Agrega el script al DOM
    script.onload = () => {
      if (typeof window.google !== "undefined" && window.google.translate) {
        window.googleTranslateElementInit = () => {
          new window.google.translate.TranslateElement(
            {
              pageLanguage: "en",
              includedLanguages: "en,es,fr,de,it",
              layout:
                window.google.translate.TranslateElementOptions?.layout
                  ?.SIMPLE || 1, // Valor predeterminado
            },
            "google_translate_element"
          );
        };
      }
    };

    script.onerror = () => {
      console.error("Error al cargar el script de Google Translate");
    };

    document.body.appendChild(script);
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
