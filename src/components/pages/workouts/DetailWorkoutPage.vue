<template>
    <div class="workout-detail">

        <h1 class="titulo mb-3 mb-md-5 h5 text-uppercase my-md-5">Detalle de Entreno</h1>

        <div v-if="isLoading" class="loader"></div>

        <section v-if="workout" class="w-[80%] px-5">


            <header class="px-3 px-md-4 pt-4 pb-3 ">

                <div class="d-flex justify-content-between align-items-start mb-2">

                    <div>
                        <h2 class="fw-bold mb-1">
                            {{ workout.dataRoutine.nombre }}
                        </h2>

                        <div class="text-secondary small d-flex align-items-center gap-2">
                            <i class="bi bi-calendar"></i>
                            {{ formatDate(workout.date) }}
                        </div>
                    </div>

                    <!-- nivel del usuario o dificultad -->
                    <span
                        class="badge rounded-pill text-bg-info bg-opacity-10 text-info border border-info border-opacity-25">
                        {{ workout.dataRoutine.dificultad }}
                    </span>

                </div>

            </header>

            <div class="container-fluid px-3 px-md-4 mt-4">

                <div class="row g-2">

                    <div class="col-4">
                        <div class="stat-box">
                            <small class="text-secondary text-uppercase">Bloques</small>
                            <div class="fs-5 fw-bold">
                                {{ workout.dataRoutine.bloques.length }}
                            </div>
                        </div>
                    </div>

                    <div class="col-4">
                        <div class="stat-box">
                            <small class="text-secondary text-uppercase">Series</small>
                            <div class="fs-5 fw-bold">
                                {{ workout.logs.length }}
                            </div>
                        </div>
                    </div>

                    <div class="col-4">
                        <div class="stat-box">
                            <small class="text-secondary text-uppercase">Volumen</small>
                            <div class="fs-5 fw-bold">
                                {{ statsVolume }} reps
                            </div>
                        </div>
                    </div>

                </div>

            </div>
            <main class="px-3 px-md-4 pb-5 mt-5">

                <section v-for="(bloque, bi) in workout.dataRoutine.bloques" :key="bi" class="mb-2">

                    <!-- título bloque -->
                    <div class="border-start border-3 border-info ps-3 mb-3">
                        <div class="text-uppercase small text-secondary fw-semibold">
                            Bloque {{ bi + 1 }}
                            <span class="text-secondary">
                                ({{ bloque.series }} sets)
                            </span>
                        </div>
                    </div>

                    <!-- ejercicios -->
                    <div class="d-flex flex-column gap-3">

                        <div v-for="(ej, ei) in bloque.ejercicios" :key="ei" class="exercise-card p-3">

                            <!-- header ejercicio -->
                            <div class="text-center mb-2">

                                <div class="fw-semibold text-info">
                                    {{ ej.nombre }}
                                </div>

                                <div v-if="ej?.notas" class="small text-notas">
                                    {{ ej.notas }}
                                </div>

                            </div>

                            <!-- meta global del ejercicio -->
                            <div class="text-center mb-3">
                                <span class="chip-meta">
                                    Meta: {{ formatStimulusTarget(ej.repeticiones, ej.tiempo) }}
                                </span>
                            </div>

                            <!-- sets -->
                            <div class="d-flex justify-content-center flex-wrap gap-2">

                                <div v-for="si in bloque.series" :key="si" class="set-pill text-center">

                                    <small class="text-secondary text-uppercase d-block">
                                        Set {{ si }}
                                    </small>

                                    <span class="chip-real mt-1 d-inline-block">
                                        Hecho:
                                        {{
                                            formatActual(
                                                workout.logs[getLogIndex(bi, si - 1)],
                                                ei
                                            )
                                        }}
                                    </span>

                                </div>

                            </div>

                        </div>

                    </div>

                    <hr class="text-secondary">
                </section>
                <ul class="mini-menu pb-3">
                    <li @click.stop="deleteWorkout()">
                        <span><i class="bi bi-trash3"></i>Eliminar</span>
                    </li>
                </ul>
            </main>
        </section>



    </div>
</template>


<script setup>
import { ref, onMounted, watch, computed } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { useProfileStore } from '@/stores/profile';
import { storeToRefs } from 'pinia';
import { confirmAction } from '@/utils/confirm';
import { getCurrentInstance } from 'vue';
import {
    formatStimulusTarget,
    formatStimulusActual,
    getStimulusVolume
} from '@/domain/stimulus'
import { formatDate } from '../../../utils/routineStats';
import { sumWorkoutVolume } from '../../../utils/workoutStats';


const { proxy } = getCurrentInstance();

// router + store
const route = useRoute();
const router = useRouter();
const profileStore = useProfileStore();
const workoutId = route.query.id;

// estado
const workout = ref(null);
const { isLoading } = storeToRefs(profileStore);

/**
 * Calcula el volumen total del workout sumando las reps de cada set.
 */
const statsVolume = computed(() => {

    if (!workout.value) return 0

    let total = sumWorkoutVolume(workout.value)

    return total
})


function formatActual(log, ei) {
    return formatStimulusActual(
        log?.actualReps?.[ei] ?? 0,
        log?.actualSegs?.[ei] ?? 0
    )
}


const deleteWorkout = async () => {
    const ok = await confirmAction(proxy.$swal, {
        title: '¿Seguro queires eliminar este entrenamiento?',
        text: 'Se perderán los datos para siempre'
    })

    if (!ok) return
    try {
        await profileStore.deleteWorkout(workoutId);
    } catch (err) {
        console.error('Error al eliminar workout:', err);
    } finally {
        router.push({ name: 'DoneWorkouts' });
    }
}

/**
 * Dado bloqueIndex y serieIndex, devuelve la posición en
 * workout.logs (que está aplanado por bloque × series).
 */
const getLogIndex = (bloqueIndex, serieIndex) => {
    let idx = 0;
    const bloques = workout.value.dataRoutine.bloques;
    // sumar todas las series de los bloques anteriores
    for (let b = 0; b < bloqueIndex; b++) {
        idx += bloques[b].series;
    }
    // a esa posición le sumamos la serie dentro del bloque actual
    return idx + serieIndex;
}

onMounted(async () => {
    //barrera para controlar la ruta
    if (!workoutId) {
        router.push({ name: 'DoneWorkouts' });
        return;
    }

    //barrera para controlar que el usuario este stetado
    if (!profileStore.profile.id) {
        console.log("OM : No hay usuario")
        return;
    }

    try {
        // Primero intento local
        let w = profileStore.getWorkoutLocal(workoutId);
        // Si no estaba en cache, lo traigo de Firestore
        if (!w) {
            w = await profileStore.getDoneWorkout(workoutId);
            // // y lo guardo en el store para futuras lecturas
            // profileStore.profile.workouts.push(w);
        }
        workout.value = w;
    } catch (err) {
        console.error('Detalle workout:', err);
        router.push({ name: 'DoneWorkouts' });
    }
});

watch(isLoading, (nuevoValor) => {
    if (!nuevoValor && !workout.value) {
        workout.value = profileStore.getWorkoutLocal(route.query.id);
    }
});


</script>

<style scoped>
.stat-box {
    padding: 1rem;
    border-radius: 14px;
    border: 1px solid rgba(255, 255, 255, .05);
    background: rgba(255, 255, 255, .03);
}

.set-pill {
    min-width: 65px;
    padding: .55rem .7rem;
    border-radius: 10px;
    border: 1px solid rgba(255, 255, 255, .05);
    background: rgba(255, 255, 255, .02);
    display: flex;
    flex-direction: column;
    align-items: center;
}

.chip-meta {
    font-size: 0.9rem;
    padding: 2px 8px;
    border-radius: 8px;
    background: rgba(255, 255, 255, .05);
    border: 1px solid rgba(255, 255, 255, .08);
    color: #aaa;
}

.chip-real {
    font-size: 0.9rem;
    padding: 2px 8px;
    border-radius: 8px;
    background: rgba(0, 255, 255, .12);
    border: 1px solid rgba(0, 255, 255, .35);
    color: #00ffff;
    font-weight: 600;
}

.workout-detail {
    padding-left: 0px;
    padding-right: 0px;
    padding-top: 100px;
    display: flex;
    background-color: transparent;
    flex-direction: column;
    width: 100%;
    margin-bottom: 3rem;
}

.mini-menu {
    display: flex;
    list-style: none;
    gap: 10px;
    justify-content: center;
    padding-left: 0;
}

.mini-menu li span {
    display: flex;
    flex-direction: column;
    justify-content: center;
    color: #ffffff;
    cursor: pointer;
    padding: 5px 1rem;
    border-radius: 8px;
    transition: all 0.3s ease;
    font-weight: 500;
}

.mini-menu li span:hover {
    background-color: rgba(0, 255, 255, 0.1);
    color: #00ffff;
    text-shadow: 0 0 5px #00ffff;
    transform: translateY(-2px);
}



.text-notas {
    color: #e6e6e6;
    opacity: 0.8;
}



@media only screen and (min-width: 768px) {
    .workout-detail {
        padding-left: 240px;
        padding-top: 0px;
    }

    .detail-container {
        width: 90%;
        max-width: 800px;
    }
}
</style>