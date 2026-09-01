import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import LavaBackground from "./components/common/LavaBackground";
import Header from "./components/common/Header";
import "./App.css";

function App() {
    const { t, i18n } = useTranslation();

    useEffect(() => {
        // Met à jour l'attribut lang de la page (ex: <html lang="en">)
        document.documentElement.setAttribute("lang", i18n.language.substring(0, 2));
    }, [i18n.language]);

    return (
        <LavaBackground>
            <Header />
            <div className="p-10 flex flex-col gap-4 items-center">
                <h1 className="text-3xl font-bold underline">{t("welcome.title")}</h1>
                <p>{t("welcome.text")}</p>
                <a
                    href="https://github.com/alcapitan/portfolio"
                    target="_blank"
                    className="btn btn-accent text-white"
                >
                    {t("welcome.button_text")}
                </a>
            </div>
        </LavaBackground>
    );
}

export default App;
