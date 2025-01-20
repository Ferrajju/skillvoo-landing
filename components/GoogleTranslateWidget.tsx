"use client";

import { useEffect } from "react";

export default function GoogleTranslateWidget() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
    script.async = true;
    document.body.appendChild(script);

    // Define googleTranslateElementInit en la ventana
    (window as any).googleTranslateElementInit = () => {
      const container = document.getElementById("google_translate_element");
      if (!container) {
        console.error("El contenedor para Google Translate no existe.");
        return;
      }

      if (window.google?.translate?.TranslateElement) {
        new window.google.translate.TranslateElement(
          {
            pageLanguage: "en",
            includedLanguages: "en,es,fr,de,it",
            layout: 1, // Cambia esto si deseas otro tipo de layout
          },
          "google_translate_element"
        );
      } else {
        console.error("Google Translate no se pudo inicializar.");
      }
    };
  }, []);

  return <div id="google_translate_element" />;
}
