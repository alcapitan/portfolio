import translationFR from './locales/fr.json';
import translationEN from './locales/en.json';
import translationES from './locales/es.json';

export const SUPPORTED_LANGUAGES = {
    fr: {
        code: 'fr',
        label: 'Français',
        flag: '🇫🇷',
        translation: translationFR
    },
    en: {
        code: 'en',
        label: 'English',
        flag: '🇬🇧', // Ou 🇺🇸 selon ta préférence
        translation: translationEN
    },
    es: {
        code: 'es', 
        label: 'Español', 
        flag: '🇪🇸', 
        translation: translationES 
    }
};

// formatage des ressources pour i18next
export const i18nResources = Object.keys(SUPPORTED_LANGUAGES).reduce((acc, langKey) => {
    acc[langKey] = {
        translation: SUPPORTED_LANGUAGES[langKey].translation
    };
    return acc;
}, {});