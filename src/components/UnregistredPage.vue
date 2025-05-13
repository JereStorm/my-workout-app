<template>
    <div class="vh-100 w-100 d-flex align-items-center justify-content-center title-container">
        <h2>
            my workout app
            <span>my workout app</span>
            <span>my workout app</span>
            <span>Train Smart</span>
        </h2>



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

// const titles = [
//     'My Workout App',
//     'Construi tu fuerza',
//     'Registra tu progreso',
//     'Entrena inteligente'
// ];

</script>



<style>
.title-container h2 {
    margin: 0;
    padding: 0;
    position: absolute;
    font-family: consolas;
    top: 40%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 5em;
    color: transparent;
    text-transform: uppercase;
}

.title-container h2 span:nth-child(1) {
    position: absolute;
    top: 0;
    left: 0;
    color: #000;
    transition: 0.5s ease;
    clip-path: polygon(0 0, 100% 0, 100% 50%, 0 50%);
    overflow: hidden;
}

.title-container h2:hover span:nth-child(1) {
    transform: translateY(-18px);
}

.title-container h2 span:nth-child(2) {
    position: absolute;
    top: 0;
    left: 0;
    color: #000;
    transition: 0.5s;
    clip-path: polygon(0 50%, 100% 50%, 100% 100%, 0 100%);
    overflow: hidden;
}

.title-container h2:hover span:nth-child(2) {
    transform: translateY(18px);
}

.title-container h2 span:nth-child(3) {
    position: absolute;
    top: 50%;
    left: 0;
    transform: translateY(-50%) scaleY(0);
    width: 91%;
    color: #000;
    background: aqua;
    font-size: 0.25em;
    font-weight: 500;
    letter-spacing: 0.7em;
    text-align: center;
    padding-left: 20px;
    margin-left: 5px;
    transition: 0.5s;
}

.title-container h2:hover span:nth-child(3) {
    transform: translateY(-50%) scaleY(1);
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
