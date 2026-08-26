import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { i18nResources } from './languages';

i18n
    .use(LanguageDetector) // Détecte la langue du navigateur
    .use(initReactI18next) // Transmet i18n à react-i18next
    .init({
        resources: i18nResources,
        fallbackLng: 'fr', // Langue par défaut si la langue de l'utilisateur n'est pas disponible
        interpolation: {
            escapeValue: false // React protège déjà déjà contre les attaques XSS
        }
    });

export default i18n;