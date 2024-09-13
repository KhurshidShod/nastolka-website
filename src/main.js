import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import router from "./routes";
import Button from "./components/Reusables/Button.vue";
import VueLazyload from "vue-lazyload";
const app = createApp(App);

app.component("MainButton", Button);
app.use(router, VueLazyload);
app.use(VueLazyload, {
  preLoad: 1.3,
  loading: "./assets/gifs/image_processing20210904-17661-1in8afj.gif",
  attempt: 1,
});
app.mount("#app");
