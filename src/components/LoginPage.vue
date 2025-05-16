<template>
    <main class="w-100 m-auto d-flex justify-content-center align-items-center">
        <transition name="fade-slide-login" mode="out-in">
            <form v-show="showForm" class="form-login p-4 rounded shadow " @submit.prevent="login">
                <div class="d-flex justify-content-between">
                    <h2 class="text-center ms-3 mb-4 fw-bold text-light">Login <i class="bi bi-person-check"></i></h2>
                    <router-link class="text-decoration-none" to="/">
                        <button type="button" class="btn-exit btn btn-outline-light"><i class="bi bi-x"></i></button>
                    </router-link>
                </div>
                <div class="mb-3 text-start">
                    <label for="inputEmail" class="form-label text-light">Email</label>
                    <input required v-model="email" type="email" class="form-control" id="inputEmail"
                        placeholder="leomessi@gmail.com">
                </div>
                <div class="mb-3 text-start">
                    <label for="inputPassword" class="form-label text-light">Contraseña</label>
                    <input required v-model="password" type="password" class="form-control" id="inputPassword"
                        placeholder="*********">
                </div>
                <button class="btn-login btn w-100 py-2 text-light" type="submit">Inciar Sesion <i
                        class="bi bi-send-fill"></i></button>
                <!-- Notificador de éxito/error -->
                <Notifier v-show="showNotifier" :message="notification.message" :type="notification.type"
                    @after-leave="clearNotification" />
                <p class="text-start mt-3 text-light">
                    ¿Todavia no tenes una cuenta?
                    <router-link to="/register">Registrate</router-link>
                </p>
            </form>
        </transition>
    </main>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useUserStore } from "../stores/user";
import Notifier from "@/components/NotifierComponent.vue";

const email = ref("");
const password = ref("");
const showForm = ref(false);
const showNotifier = ref(false);
const notification = ref({ message: "", type: "" });

const userStore = useUserStore();

const login = async () => {
    notification.value = { message: "", type: "" };
    showNotifier.value = false;

    try {
        const response = await userStore.login(email.value, password.value);

        if (response.ok) {
            notification.value = { message: "¡Inicio de sesión exitoso!", type: "success" };
            showNotifier.value = true;

            setTimeout(() => {
                showNotifier.value = false;
                userStore.$router.push('/dashboard');
            }, 1500);
        } else {
            // Traducción de errores comunes de Firebase
            const translatedMessage = translateFirebaseError(response.code || response.message);
            notification.value = { message: translatedMessage, type: "error" };
            showNotifier.value = true;
        }

    } catch (error) {
        console.error("Unexpected error:", error);
        notification.value = { message: "Error inesperado. Intentá de nuevo.", type: "error" };
        showNotifier.value = true;
    }
};

const translateFirebaseError = (code) => {
    if (!code) return "Error desconocido.";
    const map = {
        "auth/invalid-credential": "Credenciales inválidas. Chequeá tu email y contraseña.",
        "auth/user-not-found": "No existe una cuenta con ese correo.",
        "auth/wrong-password": "Contraseña incorrecta.",
        "auth/too-many-requests": "Demasiados intentos fallidos. Intentalo más tarde.",
        "auth/network-request-failed": "Problema de conexión. Verificá tu red.",
        "auth/invalid-email": "El formato del email no es válido.",
    };

    return map[code] || "Error de autenticación. Intentá nuevamente.";
};

const clearNotification = () => {
    notification.value = { message: "", type: "" };
};

onMounted(() => {
    showForm.value = true;
});
</script>


<style>
main {
    margin-top: 50px;
}

.btn-exit {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0px;
    height: 22px;
    width: 22px;
    color: #800020;
    border: 1px solid red;
}

.btn-exit i {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 16px;
    width: 16px;
}

.btn-exit:hover {
    background-color: #c70000;
    border-color: transparent;
    box-shadow: 0 0 10px rgba(207, 4, 21, 0.842);
    /* sombra rojiza suave */
}

.form-login {
    max-width: 400px;
    width: 92%;
    /* background: rgba(255, 255, 255, 0.1); */
    /* Fondo semi-transparente */
    backdrop-filter: blur(12px);
    /* Efecto blur */
    border: 1px solid rgba(255, 255, 255, 0.2);
    padding: 20px;
}

.form-login label {
    margin-bottom: 5px;
}

.form-login input {
    width: 300px;
    height: 30px;
    border-radius: 3px;
    font-size: small;
    background-image: none !important;
    background-color: #151515 !important;
    color: fieldtext !important;
}

.form-login input::placeholder {
    color: #919191 !important;
}

/* Animación de entrada */
.fade-slide-login-enter-active {
    transition: opacity 1s ease, transform 1s ease-in-out;
}

.fade-slide-login-enter-from {
    opacity: 0;
    transform: translateX(-60vh);
}

.form-login .btn-login {
    border: 1px solid #484848;
    background-color: #282828;
}

.form-login .btn-login:hover {
    background-color: #800020;
}


@media only screen and (min-width: 768px) {

    .form-login {
        width: 100%;
    }

    main {
        margin-top: 100px;
    }
}
</style>
