import vi from "@/langs/messages/vi";
import en from "@/langs/messages/en";
import { createI18n } from "vue-i18n";

const messages = {
  vi,
  en
};

export const MESSAGES_KEYS = Object.keys(messages);

const i18n = createI18n({
  legacy: false,
  locale: localStorage.getItem("fosoLocale") || "vi",
  fallbackLocale: "vi",
  messages
});

export default i18n;
