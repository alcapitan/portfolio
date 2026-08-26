import { useTranslation } from "react-i18next";

function NavLinks() {
    const { t } = useTranslation();

    return (
        <>
            <li>
                <a href="#about">{t("nav.about")}</a>
            </li>
            <li>
                <a href="#projects">{t("nav.my_projects")}</a>
            </li>
            <li>
                <a href="#contact">{t("nav.contact")}</a>
            </li>
        </>
    );
}

export default NavLinks;
