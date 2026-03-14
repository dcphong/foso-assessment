import { createApp } from "vue";
import "./assets/main.css";
import App from "./App.vue";
import { createPinia } from "pinia";
import i18n from "@/langs/i18n";

const pinia = createPinia();

const app = createApp(App);
app.use(pinia).use(i18n);

app.mount("#app");
