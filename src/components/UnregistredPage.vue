<template>
    <div class="w-100 d-flex align-items-center justify-content-center title-container">
        <div class="split-text-container mb-md-5 me-2">
            <!-- Versión escritorio -->
            <div class="desktop-title-container d-none d-md-block">
                <span class="text-part left desktop-title aurora-title" data-text="MY">MY</span>
                <span class="text-part right desktop-title aurora-title" data-text="Workout">Workout</span>
                <span class="text-part right desktop-title aurora-title" data-text="App">App</span>

            </div>

            <!-- Versión mobile -->
            <div
                class="mobile-title d-md-none d-flex flex-column align-items-center justify-content-center text-center">
                <div class="mobile-part from-left">
                    <span v-for="(char, index) in myLetters" :key="'my' + index" class="aurora-title"
                        :data-text="char">{{ char }}</span>
                </div>
                <div class="mobile-part from-right">
                    <span v-for="(char, index) in workoutLetters" :key="'workout' + index" class="aurora-title"
                        :data-text="char">{{ char }}</span>
                </div>
                <div class="mobile-part from-bottom">
                    <span v-for="(char, index) in appLetters" :key="'app' + index" class="aurora-title"
                        :data-text="char">{{ char }}</span>
                </div>
            </div>
        </div>

        <transition name="fade-slide-nav" appear>
            <nav class="auth-links">
                <router-link to="/login" class="btn px-4">Login</router-link>
                <router-link to="/register" class="btn px-4 ">Register</router-link>
            </nav>
        </transition>
    </div>
</template>

<script setup>
const myLetters = "MY".split("");
const workoutLetters = "WORKOUT".split("");
const appLetters = "APP".split("");
</script>

<style scoped>
/* ---------------- BASE (Mobile First) ---------------- */
.title-container {
    margin-top: 100px;
}

.split-text-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
}

/* Mobile Title (base por defecto) */
.mobile-title {
    display: flex;
    width: 300px;
    font-size: 2.5rem;
    font-weight: bolder;
    color: #fff;
    justify-content: center;
}

.mobile-part {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.from-left {
    animation: slideInLeft 1s ease-out;
}

.from-right {
    animation: slideInRight 1s ease-out;
}

.from-bottom {
    animation: slideInBottom 1s ease-out;
}

/* Animaciones */
@keyframes slideInLeft {
    0% {
        transform: translateX(-300px);
        opacity: 0;
    }

    100% {
        transform: translateX(0);
        opacity: 1;
    }
}

@keyframes slideInRight {
    0% {
        transform: translateX(300px);
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

/* Ocultar desktop title en mobile */
.desktop-title-container {
    display: none !important;
}

/* Navbar & botones */
.auth-links {
    position: absolute;
    top: 50%;
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-top: 5px;
}

.auth-links .btn {
    backdrop-filter: blur(12px);
    color: azure;
    animation: float 2s ease-in-out infinite alternate, borderAuroraPulse 8s ease infinite;

    transition: all 1s ease;
}

.auth-links .btn:hover {
    border: 1px solid rgb(104, 104, 104);
    background-color: rgb(90, 243, 235);
    color: #101010;
}

/* Transición entrada nav */
.fade-slide-nav-enter-active {
    transition: opacity 0.8s ease-out, transform 0.8s ease-out;
}

.fade-slide-nav-enter-from {
    opacity: 0;
    transform: translateY(-40vh);
}

.fade-slide-nav-enter-to {
    opacity: 1;
    transform: translateY(0);
}

/* Animaciones continuas */
@keyframes float {
    0% {
        transform: translateY(0);
    }

    100% {
        transform: translateY(8px);
    }
}

@keyframes borderAuroraPulse {
    0% {
        border-color: #00ff94;
    }

    25% {
        border-color: #00f0ff;
    }

    50% {
        border-color: #8a2be2;
    }

    75% {
        border-color: #ca1a1a;
    }

    100% {
        border-color: #00f0ff;
    }
}

/* ---------------- DESKTOP OVERRIDES ---------------- */
@media (min-width: 768px) {

    /* Mostrar título de escritorio y ocultar mobile */
    .desktop-title-container {
        display: flex !important;
        font-size: 5.5rem;
        font-weight: bold;
        text-transform: uppercase;
        color: #fff;
        overflow: hidden;
    }

    .mobile-title {
        display: none !important;
    }

    /* Partes del texto animadas (desktop) */
    .text-part {
        display: inline-block;
        position: relative;
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

    .auth-links {
        width: 50%;
    }

    @keyframes slide-in-left {
        0% {
            transform: translateX(-200%);
            opacity: 0;
        }

        100% {
            transform: translateX(0);
            opacity: 1;
        }
    }

    @keyframes slide-in-right {
        0% {
            transform: translateX(200%);
            opacity: 0;
        }

        100% {
            transform: translateX(0);
            opacity: 1;
        }
    }
}

/* ———————————————— */
/* Efecto Aurora Boreal */
/* ———————————————— */

.aurora-title {
    position: relative;
    display: inline-block;
    color: transparent;
    z-index: 0;
}

/* Capa de degradado animado que se recorta al texto */
.aurora-title::after {
    content: attr(data-text);
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(-45deg,
            #00ff94,
            #00f0ff,
            #8a2be2,
            #ca1a1a,
            #00f0ff);
    background-size: 400% 400%;
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    animation: aurora 8s ease infinite;
    z-index: -1;
    pointer-events: none;
}

@keyframes aurora {
    0% {
        background-position: 0% 50%;
    }

    25% {
        background-position: 50% 100%;
    }

    50% {
        background-position: 100% 50%;
    }

    75% {
        background-position: 50% 0%;
    }

    100% {
        background-position: 0% 50%;
    }
}
</style>