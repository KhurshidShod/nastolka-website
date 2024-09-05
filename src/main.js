import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './routes';
import Button from './components/Reusables/Button.vue';

const app = createApp(App);

app.component('MainButton', Button)
app.use(router)
app.mount("#app")