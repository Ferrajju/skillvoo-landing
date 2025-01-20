// globals.d.ts

declare global {
    interface Window {
      googleTranslateElementInit?: () => void;
      google?: {
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
    }
  }
  
  export {};
  