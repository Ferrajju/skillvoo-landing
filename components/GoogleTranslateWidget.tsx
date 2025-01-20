// components/GoogleTranslateWidget.tsx
"use client";

import { useEffect } from "react";

declare global {
  interface Window {
    googleTranslateElementInit?: () => void;
    google?: {
      translate: {
        TranslateElement: new (options: object, containerId: string) => void;
        TranslateElementOptions?: {
          layout: { SIMPLE: string; HORIZONTAL: string };
        };
      };
    };
  }
}

export default function GoogleTranslateWidget() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
    script.async = true;
    document.body.appendChild(script);

    window.googleTranslateElementInit = () => {
      if (!window.google) {
        console.error("Google Translate no está disponible.");
        return;
      }

      const container = document.getElementById("google_translate_element");
      if (!container) {
        console.error("El contenedor para Google Translate no existe.");
        return;
      }

      new window.google.translate.TranslateElement(
        {
          pageLanguage: "en",
          includedLanguages: "en,es,fr,de,it", // Agrega los idiomas que quieras
          layout: window.google?.translate?.TranslateElementOptions?.layout?.SIMPLE ?? 1,
        },
        "google_translate_element"
      );
    };
  }, []);

  return <div id="google_translate_element" style={{ position: "absolute", top: "10px", right: "10px" }}></div>;
}
