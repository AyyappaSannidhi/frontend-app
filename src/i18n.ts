import i18n, { InitOptions } from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import Backend from 'i18next-http-backend';

// Define the i18n configuration options type
const i18nConfig: InitOptions = {
    debug: false,
    returnObjects: true,
    lng: 'en', // Default language
    fallbackLng: 'en', // Default language if translation not available
    backend: {
        loadPath: '/locales/{{lng}}.json', // Update the path if needed
    },
    interpolation: {
        escapeValue: false, // React already escapes values
    },
};

i18n
    .use(Backend) // Use http-backend for loading translations
    .use(LanguageDetector) // Detect user’s language
    .use(initReactI18next) // Initializes i18next for React
    .init(i18nConfig);

export default i18n;