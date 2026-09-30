<!-- @/views/HomePage.vue -->
<template>
    <div class="home-page mx-auto">
        <div class="d-flex flex-column w-100 gap-4 mx-auto pb-5">

            <!-- ==================== 1. HEADER & GREETING HERO ==================== -->
            <div class="card bg-cards border-0 rounded-4 px-2 px-md-4 py-4 shadow-sm">
                <div
                    class="d-flex flex-column flex-md-row flex-wrap align-items-md-center justify-content-between gap-4">
                    <div class="d-flex w-100 flex-column gap-1">
                        <h1 class="h2 h1-md text-md-start text-light mb-1 ">
                            ¡Buen día <span class="text-info">{{ userName }}</span>!
                        </h1>
                        <p class="text-muted text-center mb-0">
                            ¿Listo para entrenar?
                            <span class="text-info fw-semibold d-block d-sm-inline">Atrevete a superar tus
                                limites</span>
                        </p>
                    </div>
                    <div
                        class="d-flex align-items-center justify-content-center justify-content-md-end w-100 gap-2 flex-wrap">
                        <router-link :to="{ name: 'SelectRoutine' }"
                            class="btn btn-info px-2 d-flex align-items-center gap-1 py-1 add-btn">
                            <i class="bi bi-play-fill fs-5"></i>
                            <span class="mb-1">Empezar Sesión</span>
                        </router-link>
                        <router-link :to="{ name: 'FormRoutine' }"
                            class="btn btn-outline-info px-2 d-flex align-items-center gap-2 py-1 add-btn">
                            <i class="bi bi-plus-circle fs-5"></i>
                            <span class="mb-1">Crear Rutina</span>
                        </router-link>
                    </div>
                </div>
            </div>

            <!-- ==================== 2. KEY METRICS (3 TOP CARDS) ==================== -->
            <div class="row justify-content-between g-3">
                <!-- Volumen Semanal -->
                <div class="col-12 col-sm-4">
                    <div class="card bg-cards border rounded-4 p-3 p-lg-4 tron-metric-card">
                        <div class="d-flex align-items-center justify-content-between text-muted mb-2">
                            <span class="small text-uppercase fw-semibold tracking-wider tron-label">Volumen
                                Semanal</span>
                            <i class="bi bi-graph-up-arrow text-info fs-5 tron-icon"></i>
                        </div>
                        <div class="d-flex align-baseline gap-2">
                            <span class="fs-2 fw-bold text-info tron-number">+{{ displayWeeklyVolume }}</span>
                            <span class="text-muted small">Reps</span>
                        </div>
                    </div>
                </div>

                <!-- Volumen Total -->
                <div class="col-12 col-sm-4">
                    <div class="card bg-cards border rounded-4 p-3 p-lg-4 tron-metric-card">
                        <div class="d-flex align-items-center justify-content-between text-muted mb-2">
                            <span class="small text-uppercase fw-semibold tracking-wider tron-label">Volumen
                                Total</span>
                            <i class="bi bi-sort-up-alt text-info fs-5 tron-icon"></i>
                        </div>
                        <div class="d-flex align-baseline gap-2">
                            <span class="fs-2 fw-bold text-info tron-number">{{ displayTotalVolume }}</span>
                            <span class="text-muted small">Reps</span>
                        </div>
                    </div>
                </div>

                <!-- Racha Actual -->
                <div class="col-12 col-sm-4">
                    <div class="card bg-cards border rounded-4 p-3 p-lg-4 tron-metric-card">
                        <div class="d-flex align-items-center justify-content-between text-muted mb-2">
                            <span class="small text-uppercase fw-semibold tracking-wider tron-label">Racha Actual</span>
                            <i class="bi bi-fire text-info fs-5 tron-icon"></i>
                        </div>
                        <div class="d-flex align-baseline gap-2">
                            <span class="fs-2 fw-bold text-info tron-number">{{ displayStreak }}</span>
                            <span class="text-muted small">días</span>
                        </div>
                    </div>
                </div>
            </div>

            <!-- ==================== MAIN CONTENT 2-COLUMN LAYOUT ==================== -->
            <div class="row align-items-start w-100">

                <!-- LEFT COLUMN (Rutina Reciente / Última Creada) -->
                <div class="col-12 col-lg-8 d-flex flex-column align-items-center gap-4 w-100 mx-3">

                    <!-- ==================== 3. RESUMEN DE LA ÚLTIMA RUTINA CREADA ==================== -->
                    <div
                        class="card bg-cards border-0 rounded-4 p-3 p-lg-4 shadow-sm position-relative overflow-hidden">

                        <!-- Loader estilo Tron mientras carga -->
                        <div v-if="isRoutineLoading"
                            class="loader-container py-5 text-center d-flex flex-column align-items-center justify-content-center gap-3">
                            <div class="tron-scanner-bar"></div>
                            <span class="text-info small tracking-wider text-uppercase animate-pulse">Sincronizando base
                                de datos...</span>
                        </div>

                        <!-- Contenido cuando ya cargó -->
                        <div v-else-if="lastCreatedRoutine">
                            <div class="d-flex flex-wrap align-items-center justify-content-between gap-3 mb-3">
                                <div class="mx-auto d-flex flex-column justify-content-center align-items-center gap-3">
                                    <span class="small text-uppercase text-muted d-block">Última Rutina Creada</span>
                                    <h2 class="h5 text-light mb-0">{{ lastCreatedRoutine.nombre }}</h2>
                                </div>
                                <DifficultyBadge :dificultad="lastCreatedRoutine.dificultad" />
                            </div>

                            <!-- Detalles rápidos -->
                            <div
                                class="d-flex flex-wrap align-items-center justify-content-around gap-2 p-3 rounded-3 bg-dark bg-opacity-50 mb-3 text-muted small">
                                <div class="d-flex flex-column flex-md-row align-items-center gap-1">
                                    <i class="bi bi-clock text-info"></i>
                                    <span class="text-light">{{ estimateDuration(lastCreatedRoutine) }} Min.</span>
                                </div>
                                <div class="d-none d-sm-block vr text-secondary"></div>
                                <div class="d-flex flex-column flex-md-row align-items-center gap-1">
                                    <i class="bi bi-arrow-repeat text-info"></i>
                                    <span class="text-light">{{ countEjercicios(lastCreatedRoutine) }} Ej.</span>
                                </div>
                                <div class="d-none d-sm-block vr text-secondary"></div>
                                <div class="d-flex flex-column flex-md-row align-items-center gap-1">
                                    <i class="bi bi-arrow-up text-info"></i>
                                    <span class="text-light">{{ countBloques(lastCreatedRoutine) }} Bloques</span>
                                </div>
                                <div class="d-none d-sm-block vr text-secondary"></div>
                                <div class="d-flex flex-column flex-md-row align-items-center gap-1">
                                    <i class="bi bi-arrow-up-right text-info"></i>
                                    <span class="text-light">{{ countSets(lastCreatedRoutine) }} Series</span>
                                </div>
                            </div>

                            <div class="d-flex py-1 text-center mb-3">
                                <p class="text-secondary text-align-center px-5">
                                    ({{ getSummary(lastCreatedRoutine, 5) }})
                                </p>
                            </div>

                            <div class="d-flex justify-content-center">
                                <div @click="entrenarRutina(lastCreatedRoutine.id)"
                                    class="btn btn-outline-info text-white btn-sm px-4 py-2 w-100 w-sm-auto text-center add-btn">
                                    Entrenar esta rutina
                                </div>
                            </div>
                        </div>

                        <!-- Estado vacío si no hay rutinas y ya terminó de cargar -->
                        <div v-else class="text-center py-4 text-muted">
                            <i class="bi bi-journal-plus fs-2 text-info mb-2 d-block"></i>
                            <p class="mb-2">Aún no has creado ninguna rutina.</p>
                            <router-link to="/rutinas" class="btn btn-outline-info btn-sm">Crear mi primera
                                rutina</router-link>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, computed, onMounted, watch } from 'vue';
import { useProfileStore } from '@/stores/profile';
import { useRoutineStore } from '@/stores/routineStore';
import { useWorkoutStore } from '@/stores/workoutStore';
import { getWeeklyProgress } from '@/utils/profileStats.js';
import { countEjercicios, countBloques, countSets, getSummary, estimateDuration } from '@/utils/routineStats';
import { sumWorkoutVolumePerWeek } from '@/utils/workoutStats';
import DifficultyBadge from '@/components/workout/DifficultyBadge.vue';
import { useRouter } from 'vue-router';

const profileStore = useProfileStore();
const routineStore = useRoutineStore();
const workoutStore = useWorkoutStore();
const router = useRouter();

const stats = computed(() => workoutStore.userStats);

// Detectar si está cargando la rutina desde el store
const isRoutineLoading = computed(() => routineStore.isLoading || false);

// 1. PRIMERO: Declaramos las funciones auxiliares de fecha y cálculos
const getCurrentISOWeekKey = () => {
    const targetDate = new Date();
    const utcDate = new Date(Date.UTC(targetDate.getFullYear(), targetDate.getMonth(), targetDate.getDate()));
    const dayNum = utcDate.getUTCDay() || 7;
    utcDate.setUTCDate(utcDate.getUTCDate() + 4 - dayNum);
    const yearStart = new Date(Date.UTC(utcDate.getUTCFullYear(), 0, 1));
    const weekNo = Math.ceil(((utcDate - yearStart) / 86400000 + 1) / 7);
    return `${utcDate.getUTCFullYear()}-W${String(weekNo).padStart(2, '0')}`;
};

// 2. SEGUNDO: Las propiedades computadas de datos
const weeklyVolume = computed(() => {
    const volumesByWeek = sumWorkoutVolumePerWeek(workoutStore.workouts);
    const currentWeekKey = getCurrentISOWeekKey();
    return volumesByWeek[currentWeekKey] || 0;
});

const getCurrentWeekDaysStatus = () => {
    const now = new Date();
    const currentDayOfWeek = now.getDay();
    const distanceToMonday = currentDayOfWeek === 0 ? -6 : 1 - currentDayOfWeek;

    const monday = new Date(now);
    monday.setHours(0, 0, 0, 0);
    monday.setDate(now.getDate() + distanceToMonday);

    const daysLabels = [
        { label: 'L', offset: 0 },
        { label: 'M', offset: 1 },
        { label: 'X', offset: 2 },
        { label: 'J', offset: 3 },
        { label: 'V', offset: 4 },
        { label: 'S', offset: 5 },
        { label: 'D', offset: 6 },
    ];

    const workouts = workoutStore.workouts || [];

    return daysLabels.map(d => {
        const targetDate = new Date(monday);
        targetDate.setDate(monday.getDate() + d.offset);
        const targetString = targetDate.toISOString().split('T')[0];

        const hasWorkout = workouts.some(w => {
            if (!w.date) return false;
            const workoutDateString = new Date(w.date).toISOString().split('T')[0];
            return workoutDateString === targetString;
        });

        return {
            label: d.label,
            completed: hasWorkout,
            date: targetString
        };
    });
};

const weekDays = computed(() => getCurrentWeekDaysStatus());
const completedDaysCount = computed(() => weekDays.value.filter(d => d.completed).length);

// 3. TERCERO: Variables reactivas de la animación y función de animación
const displayWeeklyVolume = ref(0);
const displayTotalVolume = ref(0);
const displayStreak = ref(0);

const animateValue = (targetRef, finalValue, duration = 1000) => {
    const numericTarget = Number(finalValue);
    if (isNaN(numericTarget) || numericTarget === 0) {
        targetRef.value = 0;
        return;
    }

    let startTimestamp = null;
    const startValue = targetRef.value || 0; // Arranca desde donde esté para evitar saltos bruscos

    const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);

        const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);

        targetRef.value = Math.floor(easeProgress * (numericTarget - startValue) + startValue);

        if (progress < 1) {
            window.requestAnimationFrame(step);
        } else {
            targetRef.value = numericTarget;
        }
    };

    window.requestAnimationFrame(step);
};

// 4. CUARTO: Watchers inteligentes para cuando los datos asíncronos terminan de cargar de la Store
watch(weeklyVolume, (newVal) => {
    animateValue(displayWeeklyVolume, newVal, 1000);
}, { immediate: true });

watch(() => stats.value?.totalVolume, (newVal) => {
    animateValue(displayTotalVolume, newVal || 0, 1200);
}, { immediate: true });

watch(completedDaysCount, (newVal) => {
    animateValue(displayStreak, newVal, 800);
}, { immediate: true });

// Datos generales restantes
const userName = computed(() => profileStore.profile?.nickname || 'Atleta');
const lastCreatedRoutine = computed(() => {
    const routines = routineStore.routines || [];
    if (routines.length === 0) return null;
    return routines[routines.length - 1];
});

function entrenarRutina(id) {
    router.push({
        name: 'RegisterWorkout',
        query: { id }
    });
}

onMounted(() => {
    // Forzamos un chequeo por si los datos ya estaban listos al montar
    animateValue(displayWeeklyVolume, weeklyVolume.value, 1000);
    animateValue(displayTotalVolume, stats.value?.totalVolume || 0, 1200);
    animateValue(displayStreak, completedDaysCount.value, 800);
});
</script>
<style scoped>
.home-page {
    padding-top: 50px;
    padding-left: 0px;
    display: flex;
    justify-content: center;
    min-height: 100vh;
    width: 100%;
    max-width: 1000px;
}

.hover-bg:hover {
    background-color: rgba(255, 255, 255, 0.05) !important;
    transition: background-color 0.2s ease;
}

.bg-cards {
    background-color: rgba(26, 26, 26, 0.447)
}

/* Estilo Tron / Delicado & Neón */
.tron-metric-card {
    background-color: rgba(16, 20, 24, 0.7);
    border-color: rgba(0, 240, 255, 0.15) !important;
    box-shadow: inset 0 0 10px rgba(0, 240, 255, 0.02), 0 4px 20px rgba(0, 0, 0, 0.2);
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    position: relative;
    overflow: hidden;
}

/* Línea de energía superior muy fina (estilo circuito) */
.tron-metric-card::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(90deg, transparent, rgba(0, 240, 255, 0.6), transparent);
    opacity: 0.5;
    transition: opacity 0.3s ease;
}

/* Efecto hover limpio tipo interfaz cibernética */
.tron-metric-card:hover {
    border-color: rgba(0, 240, 255, 0.6) !important;
    box-shadow: inset 0 0 15px rgba(0, 240, 255, 0.08), 0 0 25px rgba(0, 240, 255, 0.2);
    background-color: rgba(22, 28, 35, 0.85);
}

.tron-metric-card:hover::before {
    opacity: 1;
}

/* Brillo sutil en los números y el icono al hacer hover */
.tron-metric-card:hover .tron-number {
    text-shadow: 0 0 12px rgba(0, 240, 255, 0.4);
}

.tron-metric-card:hover .tron-icon {
    filter: drop-shadow(0 0 6px rgba(0, 240, 255, 0.6));
}

.tron-number,
.tron-icon {
    transition: all 0.3s ease;
}

/* Contenedor del Loader con estética Tron */
.loader-container {
    min-height: 180px;
    position: relative;
}

/* Barra de escaneo láser horizontal */
.tron-scanner-bar {
    width: 60px;
    height: 3px;
    background: #00f0ff;
    box-shadow: 0 0 12px #00f0ff, 0 0 20px rgba(0, 240, 255, 0.6);
    border-radius: 2px;
    animation: scanPulse 1.5s ease-in-out infinite alternate;
}

@keyframes scanPulse {
    0% {
        width: 20px;
        opacity: 0.3;
        box-shadow: 0 0 4px rgba(0, 240, 255, 0.2);
    }

    100% {
        width: 120px;
        opacity: 1;
        box-shadow: 0 0 15px #00f0ff, 0 0 30px rgba(0, 240, 255, 0.8);
    }
}

/* Animación sutil de parpadeo para el texto de carga */
.animate-pulse {
    animation: textFade 1s ease-in-out infinite alternate;
}

@keyframes textFade {
    0% {
        opacity: 0.4;
    }

    100% {
        opacity: 1;
    }
}

@media (min-width: 768px) {
    .home-page {
        padding-top: 40px;
        padding-left: 240px;
        /* Margen para sidebar en escritorio */
    }
}
</style>