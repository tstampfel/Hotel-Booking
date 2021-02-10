import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import booking from "./../../public/locales/en-US/booking.json";
i18n.use(initReactI18next).init({
  lng: "en",
  fallbackLng: "en",

  // have a common namespace used around the full app
  ns: ["common", "navigation", "home", "booking"],
  defaultNS: "common",

  debug: true,

  interpolation: {
    escapeValue: false, // not needed for react!!
  },

  resources: { en: { translations: {} } },
});

export default i18n;
