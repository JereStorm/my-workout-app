<template>
    <div class="vh-100 w-100 d-flex align-items-center justify-content-center title-container">
        <div class="split-text-container mb-md-5">
            <!-- Versión escritorio -->
            <span class="text-part left desktop-title">MY</span>
            <span class="text-part right desktop-title">Workout</span>
            <span class="text-part right desktop-title ">App</span>

            <!-- Versión mobile -->
            <div class="mobile-title d-md-none d-flex flex-column text-center">
                <div class="mobile-part from-left">
                    <span v-for="(char, index) in myLetters" :key="'my' + index">{{ char }}</span>
                </div>
                <div class="mobile-part from-right">
                    <span v-for="(char, index) in workoutLetters" :key="'workout' + index">{{ char }}</span>
                </div>
                <div class="mobile-part from-left">
                    <span v-for="(char, index) in appLetters" :key="'app' + index">{{ char }}</span>
                </div>
            </div>
        </div>

        <transition name="fade-slide-nav" appear>
            <nav class="auth-links">
                <router-link to="/login" class="btn px-4">Login</router-link>
                <router-link to="/register" class="btn px-4">Register</router-link>
            </nav>
        </transition>
    </div>
</template>


<script setup>
const myLetters = "MY".split("");
const workoutLetters = "WORKOUT".split("");
const appLetters = "APP".split("");
</script>

<style>
/* Estilos base */
.mobile-title {
    display: none;
    font-size: 2.0rem;
    font-weight: bold;
    color: #fff;
    gap: 0.2rem;
}

.mobile-part {
    display: flex;
    flex-direction: column;
    align-items: center;
}

/* Animaciones específicas */
.from-left {
    animation: slideInLeft 1s ease-out;
}

.from-right {
    animation: slideInRight 1s ease-out;
}

.from-bottom {
    animation: slideInBottom 1s ease-out;
}

@keyframes slideInLeft {
    0% {
        transform: translateX(-100%);
        opacity: 0;
    }

    100% {
        transform: translateX(0);
        opacity: 1;
    }
}

@keyframes slideInRight {
    0% {
        transform: translateX(100%);
        opacity: 0;
    }

    100% {
        transform: translateX(0);
        opacity: 1;
    }
}

@keyframes slideInBottom {
    0% {
        transform: translateY(100%);
        opacity: 0;
    }

    100% {
        transform: translateY(0);
        opacity: 1;
    }
}

/* Mostrar solo en desktop */
@media (min-width: 768px) {
    .desktop-title {
        display: inline-block;
    }

    .mobile-title {
        display: none !important;
    }
}

/* Mostrar solo en mobile */
@media (max-width: 767px) {
    .split-text-container {
        flex-direction: column;
        align-items: center;
        font-size: 2rem;
    }

    .desktop-title {
        display: none !important;
    }

    .mobile-title {
        display: flex;
    }
}

.split-text-container {
    display: flex;
    font-size: 5rem;
    font-weight: bold;
    text-transform: uppercase;
    color: #fff;
    overflow: hidden;
}

.text-part {
    display: inline-block;
    position: relative;
    transform: translateX(0);
    animation-duration: 2s;
    animation-timing-function: ease-out;
    animation-fill-mode: forwards;
}

.text-part.left {
    transform: translateX(-200%);
    animation-name: slide-in-left;
}

.text-part.right {
    transform: translateX(200%);
    animation-name: slide-in-right;
}

@keyframes slide-in-left {
    0% {
        transform: translateX(-200%);
    }

    100% {
        transform: translateX(0);
    }
}

@keyframes slide-in-right {
    0% {
        transform: translateX(200%);
    }

    100% {
        transform: translateX(0);
    }
}


.auth-links .btn {
    backdrop-filter: blur(12px);
    color: azure;
    animation: float 2s ease-in-out infinite alternate, borderColorChange 3.2s infinite linear;
    transition: all 1s ease;
}

/* Estilos de la barra de navegación */
.auth-links {
    position: absolute;
    top: 50%;
    width: 80%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin: auto 30px;
    margin-top: 5px;
}


/* Animación de entrada */
.fade-slide-nav-enter-active {
    transition: opacity 0.8s ease-out, transform 0.8s ease-out
}

.fade-slide-nav-enter-from {
    opacity: 0;
    transform: translateY(-40vh);
}

.fade-slide-nav-enter-to {
    opacity: 1;
    transform: translateY(0);
}

.auth-links .btn:hover {
    border: 1px solid rgb(104, 104, 104);
    background-color: rgb(90, 243, 235);
    color: #101010;
}

.title-wrapper {
    transform: translateY(-10%);
}

.title-word {
    display: block;
    line-height: 1.2;
}


/* Animación de flotación continua */
@keyframes float {
    0% {
        transform: translateY(0);
    }

    100% {
        transform: translateY(8px);
    }
}

@keyframes borderColorChange {
    0% {
        border-color: #101010;
    }

    50% {
        border-color: #909090;

    }

    100% {
        border-color: #101010;

    }
}

@keyframes pulse-glow {

    0%,
    100% {
        text-shadow:
            0 0 5px rgba(0, 255, 255, 0.3),
            0 0 10px rgba(0, 255, 255, 0.4),
            0 0 20px rgba(0, 255, 255, 0.5);
    }

    50% {
        text-shadow:
            0 0 10px rgba(0, 255, 255, 0.6),
            0 0 20px rgba(0, 255, 255, 0.7),
            0 0 30px rgba(0, 255, 255, 0.8);
    }
}

@keyframes blink {

    0%,
    100% {
        opacity: 1;
    }

    50% {
        opacity: 0;
    }
}

@media only screen and (min-width: 768px) {
    .title-container h2 {
        font-size: 8em;
    }
}
</style>
