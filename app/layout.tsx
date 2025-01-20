import './globals.css';
import { Inter, Poppins } from 'next/font/google';
import { useEffect } from 'react';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const poppins = Poppins({ weight: ['400', '600', '700'], subsets: ['latin'], variable: '--font-poppins' });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    // Cargar el script de Google Translate
    const script = document.createElement('script');
    script.src = 'https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
    script.async = true;
    document.body.appendChild(script);

    // Inicializar el widget
    window.googleTranslateElementInit = () => {
      new window.google.translate.TranslateElement(
        {
          pageLanguage: 'en', // Idioma por defecto
          includedLanguages: 'en,es,fr,de,it', // Idiomas permitidos
          layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
        },
        'google_translate_element'
      );
    };
  }, []);

  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <body>
        {/* Widget de Google Translate */}
        <div id="google_translate_element" style={{ position: 'absolute', top: '10px', right: '10px' }}></div>
        {children}
      </body>
    </html>
  );
}
