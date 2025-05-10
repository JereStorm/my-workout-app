<template>
    <main class="w-100 m-auto d-flex justify-content-center align-items-center">
        <transition name="fade-slide-register" mode="out-in">
            <form v-show="showForm" class="form-register p-4 rounded shadow" @submit.prevent="register">
                <div class="d-flex justify-content-between">
                    <h2 class="text-center ms-3 mb-4 fw-bold text-light">Register <i class="bi bi-person-add"></i></h2>
                    <router-link class="text-decoration-none" to="/">
                        <button type="button" class="btn-exit btn btn-outline-light"><i class="bi bi-x"></i></button>
                    </router-link>
                </div>
                <div class="mb-3 text-start">
                    <label for="inputEmail" class="form-label text-light">Email</label>
                    <input required v-model="email" type="email" class="form-control" id="inputEmail"
                        placeholder="Enter your email">
                </div>
                <div class="mb-3 text-start">
                    <label for="inputPassword" class="form-label text-light">Password</label>
                    <input required v-model="password" type="password" class="form-control" id="inputPassword"
                        placeholder="Enter your password">
                </div>

                <button class="btn-register btn w-100 py-2 text-light" type="submit">
                    Register <i class="bi bi-send-fill"></i>
                </button>

                <!-- Notificador de éxito/error -->
                <Notifier v-show="showNotifier" :message="notification.message" :type="notification.type"
                    @after-leave="clearNotification" />
                <p class="text-start mt-3 text-light">
                    Already have an account?
                    <router-link to="/login" class="login">Login</router-link>
                </p>
            </form>
        </transition>
    </main>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useUserStore } from "@/stores/user";
import Notifier from "@/components/NotifierComponent.vue"; // Importamos el notificador

const email = ref("");
const password = ref("");
const showForm = ref(false);
const showNotifier = ref(false); // Controla la visibilidad del Notifier
const notification = ref({ message: "", type: "" });

const userStore = useUserStore();

const register = async () => {
    notification.value = { message: "", type: "" }; // Limpiar notificación anterior
    showNotifier.value = false; // Asegurar que la animación se reinicie

    try {
        const response = await userStore.register(email.value, password.value); // Esperamos respuesta

        if (response.ok) {
            notification.value = { message: response.message, type: "success" };
        } else {
            notification.value = { message: response.message, type: "error" };
        }

    } catch (error) {
        console.error("Unexpected error:", error);
        notification.value = { message: "Something went wrong. Please try again.", type: "error" };
    }

    showNotifier.value = true; // Mostrar el notificador


    // Hacer que el mensaje desaparezca después de 3 segundos
    setTimeout(() => {
        showNotifier.value = false; // Oculta con animación
        userStore.$router.push('/dashboard');
    }, 1500);
};

// Se ejecuta cuando la animación de salida termina
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
}

.btn-exit i {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 16px;
    width: 16px;
}

.form-register label {
    margin-bottom: 5px;
}

.form-register input {
    width: 300px;
    height: 30px;
    border-radius: 3px;
    font-size: small;
}

/* Animación de entrada */
.fade-slide-register-enter-active {
    transition: opacity 1s ease, transform 1s ease-in-out;
}

.fade-slide-register-enter-from {
    opacity: 0;
    transform: translateX(60vh);
}

/* Estilos del formulario */
.form-register {
    max-width: 400px;
    width: 92%;
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(12px);
    border: 1px solid rgba(255, 255, 255, 0.2);
    padding: 20px;
    border-radius: 12px;
}

.form-register .btn-register {
    border: 1px solid #484848;
    background-color: #282828;
}

.form-register .btn-register:hover {
    background-color: #800020;
}

@media only screen and (min-width: 768px) {
    .form-register {
        width: 100%;
    }

    main {
        margin-top: 100px;
    }
}
</style>
