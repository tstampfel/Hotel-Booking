import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { I18N_DEBUG, VERSION } from "./utils/config";
import { translations } from "./utils/translations";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init(
    {
      lng: "en-US",
      fallbackLng: "en-US",
      ns: ["common", "navigation", "home", "booking"],
      defaultNS: "common",

      debug: !!I18N_DEBUG, // !! for casting to boolean
      interpolation: {
        escapeValue: false, // not needed for react!!
      },
      resources: translations,
      cache: {
        enabled: true,
      },
      detection: {
        order: ["cookie", "localStorage", "navigator"],
        lookupLocalStorage: "i18nextLng",
        lookupCookie: "i18next",
        caches: ["localStorage", "cookie"],
      },
      react: {
        wait: true,
        useSuspense: false,
      },
    },
    function () {}
  );
export default i18n;
