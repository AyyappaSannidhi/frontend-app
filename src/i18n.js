import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import Backend from 'i18next-http-backend';

i18n
  .use(Backend) // Use http-backend for loading translations
  .use(LanguageDetector) // Detect user’s language
  .use(initReactI18next) // Initializes i18next for React
  .init({
    debug: true,
    returnObjects: true,
    lng: 'en', //default language
    fallbackLng: 'en', // Default language if translation not available
    backend: {
      loadPath: '/locales/{{lng}}.json', // Update the path if needed
    },
    interpolation: {
      escapeValue: false, // React already escapes values
    },
  });

export default i18n;