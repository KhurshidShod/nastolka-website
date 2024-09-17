import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import router from "./routes";
import Button from "./components/Reusables/Button.vue";
import VueLazyload from "vue-lazyload";
const app = createApp(App);

app.component("MainButton", Button);
app.use(router);
app.use(VueLazyload, {
  preLoad: 1.3,
  error: "error-image.png",
  loading: "loading-spinner.gif",
  attempt: 1,
});
app.mount("#app");
