import { createApp, markRaw } from "vue";
import './style.css'
import 'sweetalert2/dist/sweetalert2.min.css'
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

app.use(VueSweetalert2, {
    theme: 'bootstrap-4',
    background: '#0a0f1b',
    color: '#e2e8f0',
    confirmButtonColor: '#22c55e',
    cancelButtonColor: '#64748b',
    buttonsStyling: true
})

app.use(pinia);
app.use(router); // Si usas Vue Router

// Iniciar la escucha de autenticación
const userStore = useUserStore();
userStore.initAuthListener();

app.mount("#app");
