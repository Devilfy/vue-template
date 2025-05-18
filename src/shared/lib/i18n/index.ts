import { createI18n } from "vue-i18n";
import { ru } from "./locales/ru";
import { en } from "./locales/en";

const defaultLang = "ru";
const savedLanguage = localStorage.getItem("language") || defaultLang;

if (!localStorage.getItem("language")) {
    localStorage.setItem("language", defaultLang);
}

export const i18n = createI18n({
    globalInjection: true,
    locale: savedLanguage,
    fallbackLocale: defaultLang,
    messages: {
        en: en,
        ru: ru,
    },
    interpolation: {
        escapeValue: false,
    },
});
