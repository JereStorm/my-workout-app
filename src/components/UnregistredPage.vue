<template>
    <div class="vh-100 w-100 d-flex align-items-center justify-content-center">
        <h1 class="title-primary">{{ displayedText }}</h1>

        <transition name="fade-slide-nav" appear>
            <nav class="auth-links">
                <router-link to="/login" class="btn px-4">Login</router-link>
                <router-link to="/register" class="btn px-4">Register</router-link>
            </nav>
        </transition>
    </div>
    <!-- Barra de navegación con animación solo al crearse -->

</template>

<script setup>
import { ref, onMounted } from 'vue';

const titles = [
    'My Workout App',
    'Build Your Strength',
    'Track Your Progress',
    'Train Smart with CaliStorm'
];

const displayedText = ref('');
let titleIndex = 0;
let charIndex = 0;
let direction = 1; // 1: escribiendo, -1: borrando

const typeEffect = () => {
    const currentTitle = titles[titleIndex];
    displayedText.value = currentTitle.slice(0, charIndex);

    if (direction === 1) {
        if (charIndex < currentTitle.length) {
            charIndex++;
        } else {
            direction = -1;
            setTimeout(typeEffect, 1200); // pausa al terminar de escribir
            return;
        }
    } else {
        if (charIndex > 0) {
            charIndex--;
        } else {
            direction = 1;
            titleIndex = (titleIndex + 1) % titles.length;
        }
    }

    setTimeout(typeEffect, 100); // velocidad de escritura/borrado
};

onMounted(() => {
    typeEffect();
});
</script>



<style>
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

.title-primary {
    font-size: 4rem;
    font-weight: 800;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    text-align: center;
    margin-bottom: 100px;
    color: #ffffff;
    text-shadow:
        0 0 5px rgba(0, 255, 255, 0.3),
        0 0 10px rgba(0, 255, 255, 0.4),
        0 0 20px rgba(0, 255, 255, 0.5);
    letter-spacing: 2px;
    transition: text-shadow 0.3s ease;
    animation: pulse-glow 4s infinite ease-in-out;
    backdrop-filter: blur(2px);
    height: 50%;
}

.title-primary::after {
    content: '|';
    animation: blink 1s infinite;
    margin-left: 5px;
    font-weight: bold;
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
</style>
