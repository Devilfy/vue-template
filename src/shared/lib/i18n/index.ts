import { createI18n } from "vue-i18n";
import { ru } from "./locales/ru";
import { en } from "./locales/en";

export const i18n = createI18n({
    locale: "en",
    messages: {
        en: en,
        ru: ru,
    },
});
