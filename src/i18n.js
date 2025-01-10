// src/i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import enTranslation from './locales/en.json';
import hiTranslation from './locales/hi.json';
import arTranslation from './locales/ar.json';
import esTranslation from './locales/es.json';
import deTranslation from './locales/de.json';
import zhTranslation from './locales/zh.json';
import ruTranslation from './locales/ru.json';
import itTranslation from './locales/it.json';
import frTranslation from './locales/fr.json';
import ptTranslation from './locales/pt.json';
import mrTranslation from './locales/mr.json';
import bnTranslation from './locales/bn.json';
import neTranslation from './locales/ne.json';
import knTranslation from './locales/kn.json';
import taTranslation from './locales/ta.json';

i18n
  .use(initReactI18next) // Initialize i18next for React
  .init({
    resources: {
      en: { translation: enTranslation },
      hi: { translation: hiTranslation },
      ar: { translation: arTranslation },
      es: { translation: esTranslation },
      de: { translation: deTranslation },
      zh: { translation: zhTranslation },
      ru: { translation: ruTranslation },
      it: { translation: itTranslation },
      fr: { translation: frTranslation },
      pt: { translation: ptTranslation },
      mr: { translation: mrTranslation },
      bn: { translation: bnTranslation },
      ne: { translation: neTranslation },
      kn: { translation: knTranslation },
      ta: { translation: taTranslation }
    },
    lng: 'en', // Default language
    fallbackLng: 'en', // Fallback language if translation is missing
    interpolation: {
      escapeValue: false, // React automatically escapes values
    },
  });

export default i18n;
