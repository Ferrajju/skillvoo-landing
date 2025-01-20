"use client";

import { useEffect } from "react";

declare global {
  interface Window {
    google: any;
    googleTranslateElementInit: () => void;
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
      new window.google.translate.TranslateElement(
        {
          pageLanguage: "en",
          includedLanguages: "en,es,fr,de,it", // Cambia los idiomas según tus necesidades
          layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
          autoDisplay: false, // No mostrará el widget automáticamente
        },
        "google_translate_element"
      );
    };
  }, []);

  return (
    <div
      id="google_translate_element"
      style={{
        position: "fixed",
        top: "10px",
        right: "10px",
        zIndex: 9999,
        borderRadius: "5px",
        background: "#fff",
        boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
        padding: "5px",
      }}
    ></div>
  );
}
