"use client";

import { useEffect } from "react";

// Extender el tipo global de Window
declare global {
  interface Window {
    google: {
      translate: {
        TranslateElement: new (options: object, containerId: string) => void;
        TranslateElementOptions: {
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
    // Crear el script para Google Translate
    const script = document.createElement("script");
    script.src =
      "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
    script.async = true;
    document.body.appendChild(script);

    // Inicializar Google Translate
    window.googleTranslateElementInit = () => {
      const translateOptions = {
        pageLanguage: "en",
        includedLanguages: "en,es,fr,de,it",
        layout:
          window.google?.translate?.TranslateElementOptions?.layout?.SIMPLE ||
          undefined, // Manejo seguro de undefined
      };

      new window.google.translate.TranslateElement(
        translateOptions,
        "google_translate_element"
      );
    };
  }, []);

  return (
    <div>
      {/* Widget de Google Translate */}
      <div
        id="google_translate_element"
        style={{ position: "absolute", top: "10px", right: "10px" }}
      ></div>
      {/* Resto de la página */}
      <h1>Bienvenido a SkillVoo</h1>
    </div>
  );
}
