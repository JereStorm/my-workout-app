<template>
    <div class="landing">

        <!-- NAVBAR -->
        <header class="navbar fixed-top text-light">
            <div class="container d-flex justify-content-between align-items-center">
                <h2 class="logo">CaliStorm</h2>

                <div class="nav-links d-none d-md-flex">
                    <a href="#" @click.prevent="scrollTo('inicio')">Inicio</a>
                    <a href="#" @click.prevent="scrollTo('clases')">Clases</a>
                    <a href="#" @click.prevent="scrollTo('proceso')">Proceso</a>
                    <a href="#" @click.prevent="scrollTo('precio')">Precio</a>
                    <a href="#" @click.prevent="scrollTo('ubicacion')">Ubicación</a>
                </div>

                <button class="btn btn-outline-success btn-sm">Probar clase <i
                        class="bi bi-arrow-up-right-square"></i></button>
            </div>
        </header>

        <!-- HERO -->
        <section id="inicio" class="hero container">
            <div class="row align-items-center">

                <div class="col-md-6">
                    <h1 class="hero-title">
                        Dominá tu cuerpo con {{ animatedWord }}<span class="cursor">|</span>
                    </h1>


                    <p class="hero-subtitle">
                        Clases de calistenia en Tandil para todos los niveles.
                        Mejorá tu fuerza, control corporal y confianza entrenando al aire libre,
                        acompañado y con seguimiento real.
                    </p>


                    <div class="d-flex gap-3 flex-wrap">
                        <button class="btn btn-primary btn-lg">Probar una clase
                            <i class="bi bi-arrow-up-right"></i>
                        </button>
                        <button class="btn btn-outline-dark btn-lg">Ver cómo entrenamos
                            <i class="bi bi-arrow-up-right"></i>
                        </button>
                    </div>
                </div>

                <div class="col-md-6 mt-4 mt-md-0 p-0">
                    <div class="hero-img">
                        <img src="/src/assets/jere-calis1.jpg" alt="calistenia" />
                    </div>
                </div>

            </div>
        </section>

        <!-- FILOSOFIA -->
        <section id="clases" class="section bg-light text-dark">
            <div class="container text-start">
                <h3 class="section-subtitle small">Nuestra filosofía</h3>
                <h2 class="section-title">Entrenamiento con propósito</h2>

                <div class="row mt-5">
                    <div class="col-md-3" v-for="item in features" :key="item.title">
                        <div class="card-feature">
                            <i :class="item.icon + ' feature-icon'"></i>
                            <h5 class="mt-3">{{ item.title }}</h5>
                            <p>{{ item.desc }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- PROCESO -->
        <section id="proceso" class="section">
            <div class="container text-center">
                <h2 class="section-title">Tu camino al control total</h2>

                <div class="row mt-5">
                    <div class="col-md-4" v-for="(step, i) in steps" :key="i">
                        <div class="step">
                            <div class="step-number">
                                {{ i + 1 }}
                            </div>
                            <h4>{{ step.title }}</h4>
                            <p class="step-desc">{{ step.desc }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- PRECIO -->
        <section id="precio" class="section bg-light text-dark">

            <div class="price-card d-flex flex-wrap gap-3 gap-md-5 mx-auto justify-content-center">
                <div>
                    <h2 class="section-title text-start">Plan mensual CaliStorm</h2>
                    <p> Todo lo que necesitás para tranformar tu cuerpo y tus capacidades.
                    </p>
                    <div class="small text-start ">

                        <p><i class="bi bi-check-lg"></i> Clases presenciales 3 veces por semana</p>

                        <p><i class="bi bi-check-lg"></i> Seguimiento personalizado</p>

                        <p><i class="bi bi-check-lg"></i> Acceso a comunidad exclusiva</p>

                        <p><i class="bi bi-check-lg"></i> Progresiones adaptadas a tu nivel</p>
                    </div>
                </div>
                <div class="my-3 px-3 py-3 bg-light rounded text-center">
                    <p class="text-muted small text-uppercase">
                        Inversion mensual
                    </p>
                    <h3 class="h1">$45.000</h3>
                    <p class="text-muted">
                        Cupos limitados por grupo
                    </p>
                    <button class="btn btn-success btn-lg mt-3">
                        Reservar mi lugar <i class="bi bi-arrow-up-right"></i>
                    </button>
                </div>
            </div>
        </section>

        <section id="ubicacion" class="section bg-white text-dark">
            <div class="container">
                <h3 class="section-subtitle small text-dark">¿Dónde entrenamos?</h3>
                <h2 class="section-title mb-5">Puntos de encuentro en Tandil</h2>
                <p class="text-muted mb-5 mx-5 text-center">
                    Entrenamos en distintos puntos de Tandil para aprovechar lo mejor del entorno: espacios abiertos,
                    barras y aire libre.
                </p>

                <div class="row g-4">
                    <div v-for="(loc, index) in locations" :key="index" class="col-md-6">
                        <div
                            class="location-card p-4 border rounded-3 shadow-sm h-100 d-flex flex-wrap align-items-start justify-content-center gap-3">
                            <div class="d-flex align-items-start gap-5">
                                <div class="location-icon">
                                    <i class="bi bi-geo-alt-fill text-danger fs-2"></i>
                                </div>
                                <div>
                                    <h5 class="fw-bold mb-1">{{ loc.place }}</h5>
                                    <p class="text-muted small mb-2">{{ loc.address }}</p>
                                    <div class="badge bg-info text-dark px-3 py-2">
                                        <i class="bi bi-calendar3 me-2"></i>{{ loc.days }}
                                    </div>

                                </div>
                            </div>

                            <div class="w-100">
                                <iframe :src="loc.mapSrc" class="w-100 rounded" height="200" width="200"
                                    style="border:0;" loading="lazy">
                                </iframe>
                            </div>
                            <div class="mt-3">
                                <a :href="loc.mapLink" target="_blank" class="btn btn-sm text-info">
                                    Ver en Google Maps <i class="bi bi-arrow-up-right"></i>
                                </a>
                            </div>

                        </div>
                    </div>
                </div>

                <p class="text-center mt-5 text-muted italic">
                    <i class="bi bi-info-circle me-2"></i>
                    En caso de lluvia intensa, coordinamos el cambio de lugar o fecha por el grupo de WhatsApp.
                </p>
            </div>
        </section>

        <!-- CTA FINAL -->
        <section class="cta">
            <div class="container text-center">
                <h2>Sumate a entrenar calistenia en Tandil</h2>
                <p>
                    No necesitás estar en forma para empezar.
                    Solo ganas de mejorar y constancia.
                </p>


                <button class="btn btn-light btn-lg mt-3">
                    Quiero probar una clase <i class="bi bi-arrow-up-right"></i>
                </button>
            </div>
        </section>


        <!-- FOOTER -->
        <footer class="footer border-top py-5">
            <div class="container text-center d-flex flex-column align-items-center gap-3">

                <!-- Logo -->
                <h4 class="fw-bold text-dark m-0">CaliStorm</h4>

                <!-- Copy -->
                <p class="text-muted small m-0">
                    © {{ new Date().getFullYear() }} CaliStorm Tandil. Movimiento para todos.
                </p>

                <!-- Links -->
                <div class="d-flex gap-4">
                    <a target="_blank" href="https://www.instagram.com/calistorm.sw/" class="footer-link">
                        <i class="bi bi-instagram me-1"></i> Instagram
                    </a>

                    <a target="_blank" href="https://www.youtube.com/@calistorm-sw" class="footer-link">
                        <i class="bi bi-youtube me-1"></i> YouTube
                    </a>

                    <a href="#" class="footer-link">
                        <i class="bi bi-whatsapp me-1"></i> Contacto
                    </a>
                </div>

            </div>
        </footer>

    </div>
</template>

<script setup>

import { ref, onMounted, onUnmounted } from 'vue'

const words = [
    "Calistenia",
    "Calisteni",
    "Calisten",
    "Caliste",
    "Calist",
    "Calis",
    "Cali",
    "CaliS",
    "CaliSt",
    "CaliSto",
    "CaliStor",
    "CaliStorm"
]

const animatedWord = ref("calistenia")

let index = 0
let direction = -1 // empieza borrando

let interval = null

onMounted(() => {
    interval = setInterval(() => {

        index += direction

        // cuando llega al mínimo, cambia a escribir
        if (index <= 0) {
            direction = 1
        }

        // cuando llega al máximo, cambia a borrar
        if (index >= words.length - 1) {
            direction = -1
        }

        animatedWord.value = words[index]

    }, 300) // velocidad del efecto
})

onUnmounted(() => {
    clearInterval(interval)
})


const scrollTo = (id) => {
    const el = document.getElementById(id)
    if (el) {
        el.scrollIntoView({ behavior: 'smooth' })
    }
}
const locations = ref([
    {
        place: "Plaza del Tanque",
        address: "Av. Santamarina y Sarmiento",
        days: "Lunes y Miércoles - 18:30hs",
        mapLink: "https://maps.app.goo.gl/36U13yNHphqfwsDF8", // Link para el botón
        mapSrc: "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d249.84573677243543!2d-59.13127719123655!3d-37.32254344867028!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2s!5e0!3m2!1ses!2sar!4v1775090086708!5m2!1ses!2sar" // URL del iframe
    },
    {
        place: "Plaza del Calvario",
        address: "Av. España y Monseñor de Andrea",
        days: "Martes y Viernes - 10:30hs",
        mapLink: "https://maps.app.goo.gl/n9JAzYzucAua3BvRA",
        mapSrc: "https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d793.1643488788064!2d-59.14764545455211!3d-37.32694234852116!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses!2sar!4v1775090309116!5m2!1ses!2sar"
    }
])

const features = ref([
    {
        title: "Grupos reducidos",
        desc: "Máximo 6 personas por turno para poder corregirte, acompañarte y asegurarnos de que progreses de verdad.",
        icon: "bi bi-people-fill"
    },
    {
        title: "Entrenamiento al aire libre",
        desc: "Entrenamos en parques de Tandil, aprovechando el entorno para que disfrutes el proceso.",
        icon: "bi bi-tree-fill"
    },
    {
        title: "Adaptado a tu nivel",
        desc: "No importa si estás empezando o ya entrenás. Ajustamos cada ejercicio para vos.",
        icon: "bi bi-sliders"
    },
    {
        title: "Progreso real",
        desc: "Seguimiento constante para que ganes fuerza, técnica y confianza semana a semana.",
        icon: "bi bi-graph-up-arrow"
    }
])


const steps = ref([
    {
        title: "Vení a probar una clase",
        desc: "Conocés el grupo, vemos tu nivel y resolvemos todas tus dudas sin compromiso.",
        icon: "bi bi-chat-dots-fill"
    },
    {
        title: "Entrená acompañado",
        desc: "Clases guiadas donde te enseñamos técnica, progresiones y cómo mejorar sin lesionarte.",
        icon: "bi bi-person-check-fill"
    },
    {
        title: "Notá tu progreso",
        desc: "Vas a sentirte más fuerte, más ágil y con más confianza en tu cuerpo.",
        icon: "bi bi-trophy-fill"
    }
])


</script>

<style scoped>
.footer {
    background-color: #f8f9fa;
}

.footer-link {
    text-decoration: none;
    color: #6c757d;
    font-size: 0.9rem;
    font-weight: 500;
    transition: all 0.3s ease;
}

.footer-link:hover {
    color: #0dcaf0;
    /* color info de bootstrap */
}

.landing {
    padding-top: 80px;
}

/* NAV */
.navbar {
    background: rgba(0, 0, 0, 0.315);
    backdrop-filter: blur(10px);
    padding: 10px 0;
}

.logo {
    font-weight: bold;
}

.nav-links a {
    margin: 0 10px;
    text-decoration: none;
    color: rgb(248, 249, 250);
    transition: all .3s ease;
}

.nav-links a:hover {
    color: #00e1ff;
}

/* HERO */
.hero {
    min-height: 80vh;
    display: flex;
    align-items: center;
}

.hero-title {
    font-size: 3rem;
    font-weight: 800;
}

.hero-subtitle {
    margin: 20px 0;
    color: #666;
}

.hero-img img {
    width: 100%;
}

.cursor {
    animation: blink 1s infinite;
    margin-left: 2px;
}

@keyframes blink {

    0%,
    50%,
    100% {
        opacity: 1;
    }

    25%,
    75% {
        opacity: 0;
    }
}


/* SECTIONS */
.section {
    padding: 80px 0;
}

.section-title {
    font-size: 2.2rem;
    font-weight: bold;
}

.section-subtitle {
    padding-left: 2px;
    text-transform: uppercase;
}

/* FEATURES */
.card-feature {
    padding: 20px;
    border-radius: 10px;
    background: white;
    transition: 0.3s;
}

/* STEPS */
.step {
    text-align: center;
}

.step-number {
    width: 60px;
    height: 60px;
    background: black;
    color: white;
    border-radius: 50%;
    border-radius: 16px;
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 30px;
    font-size: 2rem
}

/* PRICE */
.price-card {
    background: white;
    padding: 40px;
    border-radius: 12px;
    display: inline-block;
}

/* CTA */
.cta {
    background: black;
    color: white;
    padding: 80px 0;
}

.feature-icon {
    font-size: 2rem;
    color: #061b3a;
    /* bootstrap primary */
}

/* LOCATIONS */
.location-card {
    transition: transform 0.3s ease, border-color 0.3s ease;
    background-color: #f9f9f9;
}

.location-card:hover {
    transform: translateY(-5px);
    border-color: #0dcaf0 !important;
    /* El color info de tu proyecto */
}

.location-icon {
    background: #ffe5e5;
    padding: 10px;
    border-radius: 12px;
}

.section-subtitle {
    text-transform: uppercase;
    letter-spacing: 1px;
    font-weight: bold;
}

/* RESPONSIVE */

@media only screen and (min-width: 767px) {
    .hero-img img {
        width: 100%;
        border-radius: 8px;
    }
}
</style>
