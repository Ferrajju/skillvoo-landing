"use client";

import { useEffect } from "react";

// Declaración global única
declare global {
  interface Window {
    googleTranslateElementInit?: () => void; // Permitir undefined
    google?: any; // Esto también puede ser opcional si no existe al inicio
  }
}

export default function GoogleTranslateWidget() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
    script.async = true;
    document.body.appendChild(script);

    window.googleTranslateElementInit = () => {
      const container = document.getElementById("google_translate_element");
      if (container) {
        new window.google.translate.TranslateElement(
          {
            pageLanguage: "en",
            includedLanguages: "en,es,fr,de,it",
            layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
          },
          "google_translate_element"
        );
      }
    };

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div
      id="google_translate_element"
      style={{
        position: "absolute",
        top: "10px",
        right: "10px",
        zIndex: 1000,
      }}
    ></div>
  );
}
