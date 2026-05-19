import { vi } from 'vitest';

// On simule le comportement de react-i18next
vi.mock('react-i18next', () => ({
    // On mock le hook useTranslation
    useTranslation: () => {
        return {
            t: (str) => str, // La fonction t() renvoie juste la clé en brut (ex: t('welcome') renvoie 'welcome')
            i18n: {
                changeLanguage: () => new Promise(() => { }),
                language: 'fr', // On force une langue par défaut pour éviter le undefined !
            },
        };
    }
}));