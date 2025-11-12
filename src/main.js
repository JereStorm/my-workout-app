import { createApp, markRaw } from "vue";
import './style.css'
import { createPinia } from "pinia";
import App from "./App.vue";
import router from "./router"; // Si usas Vue Router
import { useUserStore } from "./stores/user";
import VueSweetalert2 from 'vue-sweetalert2';
const app = createApp(App);
const pinia = createPinia();

pinia.use(({ store }) => {
    store.$router = markRaw(router);
})

app.use(VueSweetalert2);
app.use(pinia);
app.use(router); // Si usas Vue Router

// Iniciar la escucha de autenticación
const userStore = useUserStore();
userStore.initAuthListener();

app.mount("#app");
