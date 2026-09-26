<!-- @/views/HomePage.vue -->
<template>
    <div class="home-page mx-auto">
        <div class="d-flex flex-column w-100 gap-4 mx-auto pb-5">

            <!-- ==================== 1. HEADER & GREETING HERO ==================== -->
            <div class="card bg-cards border-0 rounded-4 p-4 p-lg-5 shadow-sm">
                <div class="d-flex flex-column flex-md-row align-items-md-center justify-content-between gap-4">
                    <div class="d-flex flex-column gap-1">
                        <h1 class="h2 h1-md text-light mb-1 ">
                            ¡Buen día <span class="text-info">{{ userName }}</span>!
                        </h1>
                        <p class="text-muted mb-0">
                            ¿Listo para entrenar?
                            <span class="text-info fw-semibold d-block d-sm-inline">Atrevete a superar tus
                                limites</span>
                        </p>
                    </div>
                    <div class="d-flex align-items-center gap-2 flex-wrap">
                        <router-link :to="{ name: 'SelectRoutine' }"
                            class="btn btn-info px-3 py-2 fw-semibold text-dark d-flex align-items-center justify-content-center gap-2 shadow-sm flex-grow-1 flex-sm-grow-0">
                            <i class="bi bi-play-fill fs-5"></i>
                            <span>Empezar Sesión</span>
                        </router-link>
                    </div>
                </div>
            </div>

            <!-- ==================== 2. KEY METRICS (3 TOP CARDS) ==================== -->
            <div class="row justify-content-between g-3">
                <!-- Volumen Semanal -->
                <div class="col-12 col-sm-4">
                    <div class="card bg-cards border-0 rounded-4 p-3 p-lg-4 shadow-sm ">
                        <div class="d-flex align-items-center justify-content-between text-muted mb-2">
                            <span class="small text-uppercase fw-semibold tracking-wider">Volumen Semanal</span>
                            <i class="bi bi-bi-graph-up-arrow text-info fs-5"></i>
                        </div>
                        <div class="d-flex align-baseline gap-2">
                            <span class="fs-2 fw-bold text-info">{{ weeklyVolume }}</span>
                            <span class="text-muted small">Reps</span>
                        </div>
                    </div>
                </div>

                <!-- Racha Actual -->
                <div class="col-12 col-sm-4">
                    <div class="card bg-cards border-0 rounded-4 p-3 p-lg-4 shadow-sm ">
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

                <!-- 3 RIGHT COLUMN (Consistencia Semanal & Accesos Directos) -->
                <div class="col-12 col-lg-4 d-flex flex-column gap-4">

                    <!-- ==================== 4. SECCIÓN DE CONSISTENCIA SEMANAL ==================== -->
                    <div class="card bg-cards border-0 rounded-4 p-3 p-lg-4 shadow-sm">
                        <div class="d-flex align-items-center justify-content-between mb-3">
                            <div class="d-flex align-items-center gap-2">
                                <i class="bi bi-calendar-week text-info"></i>
                                <h3 class="h6 fw-semibold text-light mb-0">Consistencia Semanal</h3>
                            </div>
                            <span class="text-info fw-bold small">{{ completedDaysCount }}/7 Días</span>
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
                                        ]" style="width: 26px; height: 26px; font-size: 11px;">
                                            <i :class="day.completed ? 'bi bi-check' : 'bi bi-dash'"></i>
                                        </div>
                                    </div>
                                </div>
                            </template>
                        </div>
                    </div>
                </div>
            </div>

            <!-- ==================== MAIN CONTENT 2-COLUMN LAYOUT ==================== -->
            <div class="row align-items-start w-100">

                <!-- LEFT COLUMN (Rutina Reciente / Última Creada) -->
                <div class="col-12 col-lg-8 d-flex flex-column align-items-center gap-4 w-100 mx-3">

                    <!-- ==================== 3. RESUMEN DE LA ÚLTIMA RUTINA CREADA ==================== -->
                    <div class="card bg-cards border-0 rounded-4 p-3 p-lg-4 shadow-sm">
                        <div v-if="lastCreatedRoutine">
                            <div class="d-flex flex-wrap align-items-center justify-content-between gap-3 mb-3">
                                <div class="mx-auto d-flex flex-column justify-content-center align-items-center gap-3">
                                        <span class="small text-uppercase text-muted d-block">Última Rutina
                                            Creada</span>
                                        <h2 class="h5 text-light mb-0">{{ lastCreatedRoutine.nombre }}</h2>
                                </div>
                                <DifficultyBadge :dificultad="lastCreatedRoutine.dificultad" />
                            </div>

                            <!-- Detalles rápidos (Adaptados para pantallas chicas con flex-wrap) -->
                            <div
                                class="d-flex flex-wrap align-items-center justify-content-around gap-2 p-3 rounded-3 bg-dark bg-opacity-50 mb-3 text-muted small">
                                <div class="d-flex flex-column flex-md-row align-items-center gap-1">
                                    <i class="bi bi-clock text-info"></i>
                                    <span class="text-light">{{ estimateDuration(lastCreatedRoutine)
                                        }} Min.</span>
                                </div>
                                <div class="d-none d-sm-block vr text-secondary"></div>
                                <div class="d-flex flex-column flex-md-row align-items-center gap-1">
                                    <i class="bi bi-arrow-repeat text-info"></i>
                                    <span class="text-light">{{ countEjercicios(lastCreatedRoutine) }}
                                        Ej.</span>
                                </div>
                                <div class="d-none d-sm-block vr text-secondary"></div>
                                <div class="d-flex flex-column flex-md-row align-items-center gap-1">
                                    <i class="bi bi-arrow-up text-info"></i>
                                    <span class="text-light">{{ countBloques(lastCreatedRoutine) }}
                                        Bloques</span>
                                </div>
                                <div class="d-none d-sm-block vr text-secondary"></div>
                                <div class="d-flex flex-column flex-md-row align-items-center gap-1">
                                    <i class="bi bi-arrow-up-right text-info"></i>
                                    <span class="text-light">{{ countSets(lastCreatedRoutine) }}
                                        Series</span>
                                </div>
                            </div>

                           <div class="d-flex py-1 text-center mb-3">
                                <p class="text-secondary text-align-center px-5">
                                    ({{getSummary(lastCreatedRoutine, 5)}})
                                </p>
                            </div>

                            <div class="d-flex justify-content-center">
                                <div @click="entrenarRutina(lastCreatedRoutine.id)"
                                    class="btn btn-info btn-sm px-4 py-2 text-dark fw-semibold w-100 w-sm-auto text-center"
                                    style="cursor: pointer;">
                                    Entrenar esta rutina
                                </div>
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

            </div>
        </div>
    </div>
</template>



<script setup>
import { computed } from 'vue';
import { useProfileStore } from '@/stores/profile';
import { useRoutineStore } from '@/stores/routineStore';
import { useWorkoutStore } from '@/stores/workoutStore';
import { getWeeklyProgress } from '@/utils/profileStats.js'
import { countEjercicios, countBloques, countSets, getSummary, estimateDuration } from '@/utils/routineStats';
import { sumWorkoutVolumePerWeek } from '@/utils/workoutStats';
import DifficultyBadge from '@/components/workout/DifficultyBadge.vue';
import { useRouter } from 'vue-router';

const profileStore = useProfileStore();
const routineStore = useRoutineStore();
const workoutStore = useWorkoutStore();
const router = useRouter()

const progress = computed(() => getWeeklyProgress(workoutStore.workouts, profileStore.profile.weeklyGoal))

// Datos del usuario
const userName = computed(() => profileStore.profile?.nickname || 'Atleta');

function entrenarRutina(id) {
    router.push({
        name: 'RegisterWorkout',
        query: { id }
    })
}

// Función auxiliar para obtener la clave de la semana actual en formato ISO (ej: "2026-W39")
const getCurrentISOWeekKey = () => {
    const targetDate = new Date();
    // Normalizar a UTC para coincidir con la lógica de tu helper de stats
    const utcDate = new Date(Date.UTC(targetDate.getFullYear(), targetDate.getMonth(), targetDate.getDate()));
    const dayNum = utcDate.getUTCDay() || 7;
    utcDate.setUTCDate(utcDate.getUTCDate() + 4 - dayNum);
    const yearStart = new Date(Date.UTC(utcDate.getUTCFullYear(), 0, 1));
    const weekNo = Math.ceil(((utcDate - yearStart) / 86400000 + 1) / 7);
    return `${utcDate.getUTCFullYear()}-W${String(weekNo).padStart(2, '0')}`;
};

// Volumen Semanal Actual (Computado y reactivo)
const weeklyVolume = computed(() => {
    const volumesByWeek = sumWorkoutVolumePerWeek(workoutStore.workouts);
    const currentWeekKey = getCurrentISOWeekKey();

    // Retorna el total de repeticiones de la semana actual, o 0 si no hay registros
    return volumesByWeek[currentWeekKey] || 0;
});

const currentStreak = computed(() => '4');
const totalTUT = computed(() => '45m 30s');

// Obtener la última rutina creada del routineStore
const lastCreatedRoutine = computed(() => {
    const routines = routineStore.routines || [];
    if (routines.length === 0) return null;
    return routines[routines.length - 1];
});

// Función auxiliar para obtener el inicio y fin de la semana actual (Lunes a Domingo)
const getCurrentWeekDaysStatus = () => {
    const now = new Date();
    const currentDayOfWeek = now.getDay(); // 0 (Dom) a 6 (Sáb)

    // Ajustar para que el lunes sea el primer día (Lunes = 0, Domingo = 6)
    const distanceToMonday = currentDayOfWeek === 0 ? -6 : 1 - currentDayOfWeek;

    const monday = new Date(now);
    monday.setHours(0, 0, 0, 0);
    monday.setDate(now.getDate() + distanceToMonday);

    // Array con las etiquetas de los días
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

        // Formato YYYY-MM-DD para comparar de forma segura con la fecha del entrenamiento
        const targetString = targetDate.toISOString().split('T')[0];

        // Verificar si hay algún entrenamiento en este día exacto
        const hasWorkout = workouts.some(w => {
            if (!w.date) return false;
            const workoutDateString = new Date(w.date).toISOString().split('T')[0];
            return workoutDateString === targetString;
        });

        // Opcional: considerar si el día ya pasó o es el actual para saber si cuenta como "completado"
        return {
            label: d.label,
            completed: hasWorkout,
            date: targetString
        };
    });
};

// Propiedad computada para los días de la semana
const weekDays = computed(() => getCurrentWeekDaysStatus());

// Contador dinámico de días completados en la semana
const completedDaysCount = computed(() => {
    return weekDays.value.filter(d => d.completed).length;
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
    background-color: #101010;
}

@media (min-width: 768px) {
    .home-page {
        padding-top: 40px;
        padding-left: 240px;
        /* Margen para sidebar en escritorio */
    }
}
</style>