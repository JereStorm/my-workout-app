<!-- @/views/HomePage.vue -->
<template>
    <div class="home-page">
        <div class="d-flex flex-column w-full gap-4">

            <!-- ==================== 1. HEADER & GREETING HERO ==================== -->
            <div class="card bg-cards border-0 rounded-4 p-4 p-lg-5 shadow-sm">
                <div class="d-flex flex-column flex-md-row align-items-md-center justify-content-between gap-4">
                    <div class="d-flex flex-column gap-1">
                        <h1 class="h1 text-light mb-1">
                            ¡Buen día <p class="text-info">{{ userName }}!</p>
                        </h1>
                        <p class="text-muted mb-0">
                            ¿Listo para entrenar?
                        <p class="text-info fw-semibold">Atrevete a superar tus
                            limites</p>
                        </p>
                    </div>
                    <div class="d-flex align-items-center gap-3">
                        <router-link :to="{ name: 'SelectRoutine' }"
                            class="btn btn-info px-3 py-2 fw-semibold text-dark d-flex align-items-center gap-2 shadow-sm">
                            <i class="bi bi-play-fill fs-5"></i>
                            <span>Empezar Sesión</span>
                        </router-link>
                        <router-link to="/calendario"
                            class="btn btn-outline-secondary px-3 py-3 text-light d-flex align-items-center gap-2">
                            <i class="bi bi-calendar-event"></i>
                            <span class="d-none d-sm-inline">Calendario</span>
                        </router-link>
                    </div>
                </div>
            </div>

            <!-- ==================== 2. KEY METRICS (3 TOP CARDS) ==================== -->
            <div class="row g-3">
                <!-- Volumen Semanal -->
                <div class="col-12 col-sm-4">
                    <div class="card bg-cards border-0 rounded-4 p-4 shadow-sm h-100">
                        <div class="d-flex align-items-center justify-content-between text-muted mb-2">
                            <span class="small text-uppercase fw-semibold tracking-wider">Volumen Semanal</span>
                            <i class="bi bi-weight text-info fs-5"></i>
                        </div>
                        <div class="d-flex align-baseline gap-2">
                            <span class="fs-2 fw-bold text-light">{{ weeklyVolume }}</span>
                            <span class="text-muted small">ton</span>
                        </div>
                    </div>
                </div>

                <!-- Racha Actual -->
                <div class="col-12 col-sm-4">
                    <div class="card bg-cards border-0 rounded-4 p-4 shadow-sm h-100">
                        <div class="d-flex align-items-center justify-content-between text-muted mb-2">
                            <span class="small text-uppercase fw-semibold tracking-wider">Racha Actual</span>
                            <i class="bi bi-fire text-info fs-5"></i>
                        </div>
                        <div class="d-flex align-baseline gap-2">
                            <span class="fs-2 fw-bold text-info">{{ currentStreak }}</span>
                            <span class="text-muted small">días</span>
                        </div>
                    </div>
                </div>

                <!-- Bajo Tensión (TUT) -->
                <div class="col-12 col-sm-4">
                    <div class="card bg-cards border-0 rounded-4 p-4 shadow-sm h-100">
                        <div class="d-flex align-items-center justify-content-between text-muted mb-2">
                            <span class="small text-uppercase fw-semibold tracking-wider">Bajo Tensión (TUT)</span>
                            <i class="bi bi-stopwatch text-info fs-5"></i>
                        </div>
                        <div class="d-flex align-baseline gap-2">
                            <span class="fs-2 fw-bold text-light">{{ totalTUT }}</span>
                            <span class="text-muted small">/ 4h</span>
                        </div>
                    </div>
                </div>
            </div>

            <!-- ==================== MAIN CONTENT 2-COLUMN LAYOUT ==================== -->
            <div class="row g-4 align-items-start">

                <!-- LEFT COLUMN (Rutina Reciente / Última Creada) -->
                <div class="col-12 col-lg-8 d-flex flex-column gap-4">

                    <!-- ==================== 3. RESUMEN DE LA ÚLTIMA RUTINA CREADA ==================== -->
                    <div class="card bg-cards border-0 rounded-4 p-4 shadow-sm">
                        <div v-if="lastCreatedRoutine">
                            <div class="d-flex flex-wrap align-items-center justify-content-between gap-3 mb-3">
                                <div class="d-flex align-items-center gap-3">
                                    <div class="p-2 rounded-3 bg-dark bg-opacity-10 text-info">
                                        <i class="bi bi-fitness fs-4"></i>
                                    </div>
                                    <div>
                                        <span class="small text-uppercase text-muted d-block">Última Rutina
                                            Creada</span>
                                        <h2 class="h5 fw-bold text-light mb-0">{{ lastCreatedRoutine.nombre }}</h2>
                                    </div>
                                </div>
                                <span class="badge bg-info bg-opacity-10 text-info px-3 py-2">
                                    {{ lastCreatedRoutine.nivel || 'Personalizada' }}
                                </span>
                            </div>

                            <!-- Detalles rápidos -->
                            <div
                                class="d-flex align-items-center gap-4 p-3 rounded-3 bg-dark bg-opacity-50 mb-3 text-muted small">
                                <div class="d-flex align-items-center gap-2">
                                    <i class="bi bi-clock text-info"></i>
                                    <span class="fw-semibold text-light">~60 min</span>
                                </div>
                                <div class="vr text-secondary"></div>
                                <div class="d-flex align-items-center gap-2">
                                    <i class="bi bi-arrow-repeat text-info"></i>
                                    <span class="fw-semibold text-light">{{ lastCreatedRoutine.ejercicios?.length || 0
                                        }} Ejercicios</span>
                                </div>
                            </div>

                            <!-- Lista de ejercicios de la rutina -->
                            <div class="d-flex flex-column gap-2 mb-3">
                                <div v-for="(ex, index) in lastCreatedRoutine.bloques.ejercicios" :key="ex.id || index"
                                    class="d-flex align-items-center justify-content-between p-3 rounded-3 bg-dark bg-opacity-25">
                                    <div class="d-flex align-items-center gap-3">
                                        <span class="badge bg-dark bg-opacity-25 text-info rounded-circle p-2"
                                            style="width: 28px; height: 28px; display: flex; align-items: center; justify-content: center;">
                                            {{ index + 1 }}
                                        </span>
                                        <span class="fw-semibold text-light">{{ ex.nombre || 'Ejercicio sin nombre'
                                            }}</span>
                                    </div>
                                    <span class="text-muted font-monospace small">
                                        {{ ex.series || 3 }} × {{ ex.repeticiones || '10' }}
                                    </span>
                                </div>
                            </div>

                            <div class="d-flex justify-content-end">
                                <router-link :to="{ name: 'SelectRoutine' }"
                                    class="btn btn-info btn-sm px-4 py-2 text-dark fw-semibold">
                                    Entrenar esta rutina
                                </router-link>
                            </div>
                        </div>

                        <!-- Estado vacío si no hay rutinas -->
                        <div v-else class="text-center py-4 text-muted">
                            <i class="bi bi-journal-plus fs-2 text-info mb-2 d-block"></i>
                            <p class="mb-2">Aún no has creado ninguna rutina.</p>
                            <router-link to="/rutinas" class="btn btn-outline-info btn-sm">Crear mi primera
                                rutina</router-link>
                        </div>
                    </div>

                </div>

                <!-- RIGHT COLUMN (Consistencia Semanal & Accesos Directos) -->
                <div class="col-12 col-lg-4 d-flex flex-column gap-4">

                    <!-- ==================== 4. SECCIÓN DE CONSISTENCIA SEMANAL ==================== -->
                    <div class="card bg-cards border-0 rounded-4 p-4 shadow-sm">
                        <div class="d-flex align-items-center justify-content-between mb-3">
                            <div class="d-flex align-items-center gap-2">
                                <i class="bi bi-calendar-week text-info"></i>
                                <h3 class="h6 fw-semibold text-light mb-0">Consistencia Semanal</h3>
                            </div>
                            <span class="text-info fw-bold small">2/5 Días</span>
                        </div>

                        <!-- Grilla de días (L a D) -->
                        <div class="row g-1 text-center">
                            <template v-for="(day, index) in weekDays" :key="index">
                                <div class="col">
                                    <div
                                        class="p-2 px-1 rounded-3 bg-dark bg-opacity-50 d-flex flex-column align-items-center gap-2">
                                        <span class="text-muted small fw-bold">{{ day.label }}</span>
                                        <div :class="[
                                            'rounded-circle d-flex align-items-center justify-content-center',
                                            day.completed ? 'bg-info text-dark fw-bold' : 'bg-dark bg-opacity-25 text-muted'
                                        ]" style="width: 28px; height: 28px; font-size: 12px;">
                                            <i :class="day.completed ? 'bi bi-check' : 'bi bi-dash'"></i>
                                        </div>
                                    </div>
                                </div>
                            </template>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { computed } from 'vue';
import { useProfileStore } from '@/stores/profile';
import { useRoutineStore } from '@/stores/routineStore';
import { useWorkoutStore } from '@/stores/workoutStore';

const profileStore = useProfileStore();
const routineStore = useRoutineStore();
const workoutStore = useWorkoutStore();

// Datos del usuario
const userName = computed(() => profileStore.profile?.nickname || 'Atleta');

// Estadísticas simuladas o conectadas a tus stores (puedes adaptarlas a tus utils de stats si ya los tienes)
const weeklyVolume = computed(() => '18.5');
const currentStreak = computed(() => '18');
const totalTUT = computed(() => '3h 45m');

// Obtener la última rutina creada del routineStore
const lastCreatedRoutine = computed(() => {
    const routines = routineStore.routines || [];
    if (routines.length === 0) return null;
    // Retorna la última (asumiendo que están ordenadas o tomamos la última del array)
    return routines[routines.length - 1];
});

const lastRoutineName = null;

// Consistencia semanal de ejemplo (Lunes a Domingo)
const weekDays = [
    { label: 'L', completed: true },
    { label: 'M', completed: true },
    { label: 'X', completed: false },
    { label: 'J', completed: false },
    { label: 'V', completed: false },
    { label: 'S', completed: false },
    { label: 'D', completed: false },
];
</script>

<style scoped>
.home-page {
    padding-top: 100px;
    display: flex;
    justify-content: center;
}

.hover-bg:hover {
    background-color: rgba(255, 255, 255, 0.05) !important;
    transition: background-color 0.2s ease;
}

.bg-cards {
    background-color: #101010;
}

@media (min-width: 768px) {
    .home-page {
        padding-top: 20px;
        padding-left: 240px;
        min-height: 100vh;
    }
}
</style>