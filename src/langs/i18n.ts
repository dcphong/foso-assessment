import vi from "@/langs/messages/vi";
import { createI18n } from "vue-i18n";

const messages = {
  vi
};

const i18n = createI18n({
  legacy: false,
  locale: "vi",
  fallbackLocale: "vi",
  messages
});

export default i18n;
