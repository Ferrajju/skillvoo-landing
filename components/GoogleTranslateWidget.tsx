"use client";
import { useState, useEffect } from "react";

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
  const [isWidgetVisible, setIsWidgetVisible] = useState(false);

  useEffect(() => {
    if (isWidgetVisible) {
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
    }
  }, [isWidgetVisible]);

  return (
    <div>
      <button
        onClick={() => setIsWidgetVisible(!isWidgetVisible)}
        style={{
          position: "fixed",
          bottom: "20px",
          right: "20px",
          backgroundColor: "#4CAF50",
          color: "white",
          border: "none",
          padding: "15px",
          borderRadius: "50%",
          fontSize: "20px",
          cursor: "pointer",
        }}
      >
        🌐
      </button>

      {/* Google Translate widget */}
      {isWidgetVisible && (
        <div
          id="google_translate_element"
          style={{
            position: "absolute",
            top: "10px",
            right: "10px",
            zIndex: 1000,
            background: "#fff",
            padding: "10px",
            borderRadius: "5px",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
          }}
        ></div>
      )}
    </div>
  );
}
