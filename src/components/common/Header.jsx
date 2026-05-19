import LanguageSelector from "./LanguageSelector.jsx";
import ThemeControllerDropdown from "./ThemeControllerDropdown.jsx";
import ThemeControllerSwap from "./ThemeControllerSwap.jsx";
import { useTranslation } from "react-i18next";

function Header() {
    const { t } = useTranslation();

    return (
        <div className="navbar bg-base-100 shadow-md px-8">
            <div className="flex-1 gap-2">
                <a href="/" className="flex items-center gap-4 group">
                    <img 
                        src="/favicon.png" 
                        alt="Logo" 
                        className="w-10 h-10"
                    />
                <span className="text-xl font-bold">
                    alcapitan.me
                </span>
                </a>
            </div>
            <div className="flex-none gap-4">
                <ul className="menu menu-horizontal px-1 mr-2">
                    <li><a href="#about">{t('nav.about')}</a></li>
                    <li><a href="#projects">{t('nav.my_projects')}</a></li>
                    <li><a href="#contact">{t('nav.contact')}</a></li>
                </ul>
                <LanguageSelector />
                {/* <ThemeControllerDropdown /> */}
                <ThemeControllerSwap />
            </div>
        </div>
    );
}

export default Header;