import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import HttpApi from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";
//import { VERSION, I18N_DEBUG } from '../../Utils/config';

i18n
  .use(HttpApi)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init(
    {
      lng: "en-US",
      fallbackLng: "en-US",
      ns: ["common", "navigation", "home", "booking"],
      defaultNS: "common",
      //debug: !!I18N_DEBUG, // !! for casting to boolean
      interpolation: {
        escapeValue: false, // not needed for react!!
      },
      backend: {
        loadPath: "locales/{{lng}}/{{ns}}.json",
        //queryStringParams: { v: VERSION }
      },
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
