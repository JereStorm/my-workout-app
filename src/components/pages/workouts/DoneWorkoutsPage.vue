<template>
    <div class="done-page">

        <!-- HEADER -->
        <div
            class="page-header px-3 py-2 gap-5 mt-5 mt-md-1 mb-3 mb-md-5 d-flex justify-content-between align-items-center">
            <h1 class="h5 mb-0 text-uppercase titulo">Linea de tiempo</h1>

            <RouterLink to="/dashboard/select-routine" class="btn btn-outline-info rounded-circle add-btn">
                <i class="bi bi-plus-lg text-light"></i>
            </RouterLink>
        </div>


        <!-- LOADER -->
        <div v-if="isLoading" class="loader"></div>


        <!-- TIMELINE -->
        <div v-else class="timeline-wrapper">

            <template v-for="[month, monthWorkouts] in workoutsByMonth" :key="month">

                <!-- MONTH HEADER -->
                <div class="month-separator">
                    <span>{{ month }}</span>
                    <div class="line"></div>
                </div>

                <!-- ITEMS -->
                <div v-for="workout in monthWorkouts" :key="workout.id" class="timeline-item-modern ps-1">

                    <!-- DOT -->
                    <div class="timeline-dot-modern"></div>

                    <!-- CARD -->
                    <div class="timeline-card">

                        <div class="d-flex justify-content-between align-items-start">

                            <h5 class="fw-bold mb-1">
                                {{ workout.dataRoutine.nombre }}
                            </h5>

                            <span class="badge difficulty-badge text-uppercase pt-1"
                                :title="getDifficultyIcons(workout.dataRoutine.dificultad)">
                                {{ workout.dataRoutine.dificultad }}
                            </span>
                        </div>

                        <div class="timeline-date">
                            {{ formatDate(workout.date) }}
                        </div>

                        <div class="timeline-stats">

                            <span>
                                <i class="bi bi-layers"></i>
                                {{ workout.dataRoutine.bloques.length }} bloques
                            </span>

                            <span>
                                <i class="bi bi-bar-chart"></i>
                                {{ countSets(workout.dataRoutine) }} series
                            </span>

                            <span class="ms-auto text-info fw-bold">
                                <i class="bi bi-clock"></i>
                                {{ estimateDuration(workout.dataRoutine) }}
                            </span>

                        </div>

                        <p class="timeline-summary">
                            {{ getSummary(workout.dataRoutine) }}
                        </p>

                        <button class="btn btn-sm btn-outline-info mt-2" @click="redirect(workout)">
                            <small><i class="bi bi-chevron-double-down text-light px-2"></i></small>
                        </button>

                    </div>
                </div>

            </template>

            <!-- EMPTY -->
            <div v-if="!workouts.length" class="empty-state">
                <i class="bi bi-clock-history"></i>
                <p>Tu progreso empieza con la primera repetición.</p>
            </div>
        </div>
    </div>
</template>


<script setup>

import { computed, ref, watch } from 'vue';
import { useProfileStore } from '@/stores/profile';
import { storeToRefs } from 'pinia';
import { useRoute, useRouter } from 'vue-router';
import { countSets, estimateDuration, formatDate, getDifficultyIcons, getSummary } from '@/utils/routineStats';

/** Acceso al enrutador y a la ruta actual */
const route = useRoute();
const router = useRouter();

// instancia el store
const profileStore = useProfileStore();

const { isLoading } = storeToRefs(profileStore);

// lista de workouts
const workouts = computed(() => profileStore.profile.workouts || []);

function redirect(workout) {
    console.log(workout)
    router.push({ name: 'DetailWorkout', query: { id: workout.id } });
}

const workoutsByMonth = computed(() => {
    const groups = {}

    workouts.value.forEach(w => {
        const d = new Date(w.date)
        const key = d.toLocaleDateString('es-AR', {
            month: 'long',
            year: 'numeric'
        })

        if (!groups[key]) groups[key] = []
        groups[key].push(w)
    })

    return Object.entries(groups)
})

</script>

<style scoped>
.done-page {
    display: flex;
    flex-direction: column;
    padding: 1.5rem;
    max-width: 700px;
    width: 100%;
    margin: auto;
}

/* HEADER */
.page-header {
    position: sticky;
    top: 0;
    padding: 10px 0 20px;
    backdrop-filter: blur(12px);
    z-index: 5;
}

.add-btn {
    width: 44px;
    height: 44px;
    display: flex;
    align-items: center;
    justify-content: center;
}

/* TIMELINE BASE */
.timeline-wrapper {
    position: relative;
    padding-left: 30px;
}

.timeline-wrapper::before {
    content: "";
    position: absolute;
    left: 10px;
    top: 0;
    bottom: 0;
    width: 2px;
    background: rgba(0, 255, 255, .15);
}

/* MONTH */
.month-separator {
    display: flex;
    align-items: center;
    gap: 12px;
    margin: 30px 0 20px;
    font-size: .7rem;
    letter-spacing: .2em;
    text-transform: uppercase;
    color: cyan;
    font-weight: 700;
}

.month-separator .line {
    flex: 1;
    height: 1px;
    background: rgba(255, 255, 255, .08);
}

/* ITEM */
.timeline-item-modern {
    position: relative;
    margin-bottom: 28px;
}

/* DOT */
.timeline-dot-modern {
    position: absolute;
    left: -23px;
    top: 8px;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: cyan;
    box-shadow: 0 0 12px cyan;
}

/* CARD */
.timeline-card {
    border-radius: 12px;
    padding: 14px 16px;
}

/* DATE */
.timeline-date {
    font-size: .85rem;
    opacity: .6;
}

/* STATS */
.timeline-stats {
    display: flex;
    gap: 16px;
    margin-top: 10px;
    font-size: .8rem;
    opacity: .8;
}

/* SUMMARY */
.timeline-summary {
    margin-top: 8px;
    font-size: .85rem;
    opacity: .7;
}

/* BADGE */
.difficulty-badge {
    background: rgba(0, 255, 255, .15);
    color: cyan;
    font-weight: 400;
    border: 1px solid rgba(0, 255, 255, .2);
}

/* EMPTY */
.empty-state {
    text-align: center;
    margin-top: 60px;
    opacity: .5;
}

.empty-state i {
    font-size: 2rem;
    display: block;
    margin-bottom: 10px;
}

@media (min-width: 768px) {
    .done-page {
        padding-left: 220px;
    }

    .timeline-wrapper {
        padding-left: 19px;
    }

    .timeline-wrapper::before {
        left: 5px;
    }

    .timeline-dot-modern {
        left: -18px;
        top: 6px;
    }
}
</style>
