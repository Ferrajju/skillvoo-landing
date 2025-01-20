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
  