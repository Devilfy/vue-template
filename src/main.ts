import { createApp } from "vue";
import { VueQueryPlugin } from "@tanstack/vue-query";
import { router } from "./app/router";
import "./app/style.css";
import App from "./app/app.vue";
import { i18n } from "./shared/lib/i18n";
const app = createApp(App);

app.use(VueQueryPlugin);
app.use(router);
app.use(i18n);

app.mount("#app");
