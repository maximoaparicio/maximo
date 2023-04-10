import { useTranslation } from "react-i18next";

export default function Lenguage() {
  const [t, i18n] = useTranslation("global");

  function handleClick() {
    i18n.changeLanguage(i18n.language === "en" ? "es" : "en");
  }

  return <button onClick={handleClick}>{t("navbar.lngBtn")}</button>;
}
