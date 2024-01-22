import { createApp } from "vue";
import "./assets/style/main.scss";
import App from "./App.vue";
import router from "./routes/router.js";

const app = createApp(App);
app.use(router);
app.mount("#app");
