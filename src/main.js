import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { createVuestic } from "vuestic-ui";

const app = createApp(App);
app.use(createVuestic());
app.use(router);
app.mount("#app");
