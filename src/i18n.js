import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import HttpApi from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
const resources = {
  english: {
    translation: require('./locales/english.json')
  },
  nepali: {
    translation: require('./locales/nepali.json')
  },
  newari: {
    translation: require('./locales/newari.json')
  },
  mithila: {
    translation: require('./locales/mithila.json')
  }
};
i18n
  .use(HttpApi) // Use HttpApi to fetch translation files via HTTP
  .use(LanguageDetector) // Use LanguageDetector to automatically detect user's preferred language
  .use(initReactI18next) // Initialize i18next for React integration
  .init({
    resources,
    supportedLngs: ['english', 'nepali', 'newari', 'mithila'], // Supported languages
    fallbackLng: 'nepali', // Fallback language if a translation is missing
    detection: {
      order: ['queryString', 'cookie'], // Order of language detection methods
      cache: ['cookie'] // Cache language detection in cookies
    },
    backend: {
      loadPath: "/locales/{{lng}}.json", // Path pattern to load translation files
    },
    react: {
      useSuspense: false, // Disable React Suspense for data fetching
    },
  });

export default i18n;
