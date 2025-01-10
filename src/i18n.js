// src/i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import enTranslation from './locales/en.json';
import esTranslation from './locales/es.json';

i18n
  .use(initReactI18next) // Initialize i18next for React
  .init({
    resources: {
      en: { translation: enTranslation }, // English translations
      es: { translation: esTranslation }, // Spanish translations
    },
    lng: 'en', // Default language
    fallbackLng: 'en', // Fallback language if translation is missing
    interpolation: {
      escapeValue: false, // React automatically escapes values
    },
  });

export default i18n;
