import { useTranslation } from "react-i18next";
import { SUPPORTED_LANGUAGES } from "../../i18n/languages";

function LanguageSelector() {
    const { i18n } = useTranslation();

    const currentLangCode = i18n.language?.substring(0, 2) || "fr";
    const currentLanguage = SUPPORTED_LANGUAGES[currentLangCode] || SUPPORTED_LANGUAGES.fr;

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    };

    return (
        <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="btn btn-ghost">
                {currentLanguage.flag} <span className="uppercase ml-1">{currentLanguage.code}</span>
            </div>
            <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-39">
                {Object.values(SUPPORTED_LANGUAGES).map((lang) => (
                    <li key={lang.code}>
                        <button
                            onClick={() => changeLanguage(lang.code)}
                        >
                            <span className="text-xl">{lang.flag}</span> {lang.label}
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default LanguageSelector;
