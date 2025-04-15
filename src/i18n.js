import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Import JSON files directly
import enTranslation from '../public/locales/en/enTranslation.json';
import bnTranslation from '../public/locales/bn/bnTranslation.json';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'en',
    debug: true,
    resources: {
      en: {
        translation: enTranslation,
      },
      bn: {
        translation: bnTranslation,
      },
    },
    interpolation: {
      escapeValue: false, // React already escapes output
    },
  });

export default i18n;
