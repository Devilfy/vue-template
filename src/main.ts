import { createApp } from "vue";
import { VueQueryPlugin } from "@tanstack/vue-query";
import { router } from "./app/router";
import "./app/style.css";
import App from "./app/app.vue";

const app = createApp(App);

app.use(VueQueryPlugin);
app.use(router);

app.mount("#app");
