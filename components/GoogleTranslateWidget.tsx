"use client";

import React, { useEffect } from "react";

const GoogleTranslateWidget: React.FC = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
    script.async = true;
    document.body.appendChild(script);

    window.googleTranslateElementInit = () => {
      if (window.google) {
        new window.google.translate.TranslateElement(
          {
            pageLanguage: "en",
            includedLanguages: "en,es,fr,de,it",
            layout: window.google.translate.TranslateElementOptions?.layout?.SIMPLE ?? 1,
          },
          "google_translate_element"
        );
      }
    };
  }, []);

  return (
    <div
      id="google_translate_element"
      style={{ position: "absolute", top: "10px", right: "10px" }}
    ></div>
  );
};

export default GoogleTranslateWidget;
