<template>
    <div class="workout-detail">

        <h1 class="titulo mb-3 mb-md-5 h5 text-uppercase my-md-5">
            Detalle de Entreno
        </h1>

        <div v-if="isLoading" class="loader"></div>

        <section v-if="workout" class="w-[90%] px-2">

            <!-- HEADER -->
            <header class="px-1 pt-4 pb-3">

                <h2 class="fw-bold mb-1">
                    {{ workout.dataRoutine.nombre }}
                </h2>

                <div class="d-flex justify-content-between align-items-start mt-4">

                    <div class="text-secondary small d-flex align-items-center gap-2">
                        <i class="bi bi-calendar"></i>
                        {{ formatDate(workout.date) }}
                    </div>

                    <DifficultyBadge :dificultad="workout.dataRoutine.dificultad" />

                </div>
            </header>

            <!-- ESTADÍSTICAS -->
            <div class="container-fluid px-1 px-md-3 pb-3 mt-4">

                <div class="row g-2">

                    <div class="col-4">
                        <div class="card-info rounded-3 px-2 py-2 text-center h-100">

                            <div class="text-secondary text-uppercase small">
                                Bloques
                            </div>

                            <div class="fs-5 fw-bold mt-1">
                                {{ workout.dataRoutine.bloques.length }}
                            </div>

                        </div>
                    </div>

                    <div class="col-4">
                        <div class="card-info rounded-3 px-2 py-2 text-center h-100">

                            <div class="text-secondary text-uppercase small">
                                Series
                            </div>

                            <div class="fs-5 fw-bold mt-1">
                                {{ workout.logs.length }}
                            </div>

                        </div>
                    </div>

                    <div class="col-4">
                        <div class="card-info rounded-3 px-2 py-2 text-center h-100">

                            <div class="text-secondary text-uppercase small">
                                Volumen
                            </div>

                            <div class="fs-5 fw-bold mt-1">
                                {{ statsVolume }}
                                <small class="fs-6 fw-normal text-secondary">
                                    reps
                                </small>
                            </div>

                        </div>
                    </div>
                </div>


                <!-- EVALUACIÓN GLOBAL -->
                <div class="card-info rounded-3 p-3 mt-3">

                    <div class="d-flex justify-content-between align-items-center mb-2">

                        <div>
                            <div class="small text-secondary text-uppercase fw-semibold">
                                Cumplimiento
                            </div>

                            <div class="fw-bold fs-4">
                                {{ statsCompliance }}%
                            </div>
                        </div>

                        <i class="bi bi-bullseye text-info fs-4"></i>

                    </div>


                    <div class="progress" role="progressbar" :aria-valuenow="statsCompliance" aria-valuemin="0"
                        aria-valuemax="100" style="height: 7px;">
                        <div class="progress-bar bg-info" :style="{ width: `${statsCompliance}%` }"></div>
                    </div>

                    <div class="small text-secondary mt-2">
                        {{ statsComplianceMessage }}
                    </div>
                    <hr>
                    <!-- NOTA -->
                    <div v-if="workout.notes">
                        <div class="small text-secondary mt-2">
                            " {{ workout.notes }} "
                        </div>
                    </div>
                </div>

            </div>

            <!-- DETALLE -->
            <main class="px-3 px-md-4 pb-5 mt-5">

                <section v-for="(bloque, bi) in workout.dataRoutine.bloques" :key="bi" class="mb-4">

                    <!-- TÍTULO BLOQUE -->
                    <div class="border-start border-3 border-info ps-3 mb-3">

                        <div class="d-flex align-items-center gap-2">

                            <span class="text-uppercase small text-secondary fw-semibold">
                                Bloque {{ bi + 1 }}
                            </span>

                            <span class="text-secondary small">
                                · {{ bloque.series }} sets
                            </span>
                        </div>
                    </div>

                    <!-- EJERCICIOS -->
                    <div class="d-flex flex-column gap-3">

                        <div v-for="(ej, ei) in bloque.ejercicios" :key="ei" class="exercise-card p-3">

                            <!-- HEADER EJERCICIO -->
                            <div class="text-center mb-3">

                                <div class="fw-semibold text-info fs-6">
                                    {{ ej.nombre }}
                                </div>

                                <div v-if="ej?.notas" class="small text-notas mt-1">
                                    <i class="bi bi-info-circle me-1"></i>
                                    {{ ej.notas }}
                                </div>
                            </div>

                            <!-- META -->
                            <div class="text-center mb-3">

                                <span class="chip-meta">
                                    <i class="bi bi-bullseye me-1"></i>
                                    Meta:
                                    {{ formatStimulusTarget(ej.repeticiones, ej.tiempo) }}
                                </span>
                            </div>

                            <!-- CUMPLIMIENTO DEL EJERCICIO -->
                            <div class="mb-3">

                                <div class="d-flex justify-content-between align-items-center mb-1">

                                    <small class="text-secondary">
                                        Cumplimiento
                                    </small>

                                    <small class="fw-semibold text-info">
                                        {{ getExerciseCompliance(bi, ei) }}%
                                    </small>

                                </div>

                                <div class="progress" role="progressbar" :aria-valuenow="getExerciseCompliance(bi, ei)"
                                    aria-valuemin="0" aria-valuemax="100" style="height: 5px;">
                                    <div class="progress-bar bg-info" :style="{
                                        width: `${getExerciseCompliance(bi, ei)}%`
                                    }"></div>
                                </div>

                            </div>

                            <!-- SETS -->
                            <div class="d-flex justify-content-center flex-wrap gap-2">

                                <div v-for="si in bloque.series" :key="si" class="set-pill text-center">

                                    <small class="text-secondary text-uppercase d-block">
                                        Set {{ si }}
                                    </small>

                                    <!-- REAL / META -->
                                    <span class="chip-real mt-1 d-inline-block">
                                        {{
                                            formatActual(
                                                workout.logs[getLogIndex(bi, si - 1)],
                                                ei
                                            )
                                        }}
                                        /
                                        {{ formatExpected(ej) }}
                                    </span>

                                    <!-- PORCENTAJE -->
                                    <small class="d-block mt-1" :class="getSetComplianceClass(
                                        ej,
                                        workout.logs[getLogIndex(bi, si - 1)],
                                        ei
                                    )">
                                        {{
                                            getSetCompliance(
                                                ej,
                                                workout.logs[getLogIndex(bi, si - 1)],
                                                ei
                                            )
                                        }}%
                                    </small>

                                </div>

                            </div>

                        </div>

                    </div>

                    <hr class="text-secondary opacity-25 mt-4">

                </section>


                <!-- ELIMINAR -->
                <ul class="mini-menu pb-3">

                    <li @click.stop="deleteWorkout()">

                        <span>
                            <i class="bi bi-trash3"></i>
                            Eliminar
                        </span>

                    </li>

                </ul>

            </main>

        </section>

    </div>
</template>

<script setup>
import { ref, onMounted, watch, computed } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { useWorkoutStore } from '@/stores/workoutStore';
import { storeToRefs } from 'pinia';
import { confirmAction } from '@/utils/confirm';
import { getCurrentInstance } from 'vue';

import {
    formatStimulusTarget,
    formatStimulusActual,
} from '@/domain/stimulus'

import { formatDate } from '@/utils/routineStats';
import { sumWorkoutVolume } from '@/utils/workoutStats';
import DifficultyBadge from '@/components/workout/DifficultyBadge.vue';

const { proxy } = getCurrentInstance();

// router + store
const route = useRoute();
const router = useRouter();
const workoutStore = useWorkoutStore();
const workoutId = route.query.id;

// estado
const workout = ref(null);
const { isLoading } = storeToRefs(workoutStore);

/**
 * Volumen total realizado.
 */
const statsVolume = computed(() => {
    if (!workout.value) return 0;
    return sumWorkoutVolume(workout.value);
});

/**
 * Obtiene el índice correspondiente al log de una serie.
 */
const getLogIndex = (bloqueIndex, serieIndex) => {
    let idx = 0;
    const bloques = workout.value.dataRoutine.bloques;

    for (let b = 0; b < bloqueIndex; b++) {
        idx += bloques[b].series;
    }

    return idx + serieIndex;
};

/**
 * Formatea el resultado realizado.
 */
function formatActual(log, ei) {
    return formatStimulusActual(
        log?.actualReps?.[ei] ?? 0,
        log?.actualSegs?.[ei] ?? 0
    );
}

/**
 * Valor esperado del ejercicio.
 *
 * Si el ejercicio trabaja por tiempo se utilizan segundos.
 * De lo contrario se utilizan repeticiones.
 */
function getExpectedValue(ej) {
    if (Number(ej?.tiempo) > 0) {
        return Number(ej.tiempo);
    }
    return Number(ej?.repeticiones) || 0;
}

/**
 * Valor realmente realizado en un set.
 */
function getActualValue(log, ei, ej) {
    if (Number(ej?.tiempo) > 0) {
        return Number(log?.actualSegs?.[ei]) || 0;
    }
    return Number(log?.actualReps?.[ei]) || 0;
}

/**
 * Meta formateada para mostrar junto al resultado.
 */
function formatExpected(ej) {
    const expected = getExpectedValue(ej);

    if (Number(ej?.tiempo) > 0) {
        return `${expected}s`;
    }

    return `${expected}`;
}

/**
 * Cumplimiento de un set individual.
 */
function getSetCompliance(ej, log, ei) {
    const expected = getExpectedValue(ej);
    if (expected <= 0) return 0;

    const actual = getActualValue(log, ei, ej);

    return Math.min(
        100,
        Math.round((actual / expected) * 100)
    );
}

/**
 * Cumplimiento promedio del ejercicio.
 */
function getExerciseCompliance(bi, ei) {
    const bloque = workout.value?.dataRoutine?.bloques?.[bi];
    if (!bloque) return 0;

    const ej = bloque.ejercicios?.[ei];
    if (!ej) return 0;

    let totalExpected = 0;
    let totalActual = 0;

    for (let si = 0; si < bloque.series; si++) {
        const log = workout.value.logs?.[
            getLogIndex(bi, si)
        ];

        const expected = getExpectedValue(ej);
        const actual = getActualValue(log, ei, ej);

        if (expected > 0) {
            totalExpected += expected;
            totalActual += actual;
        }
    }

    if (totalExpected <= 0) return 0;

    return Math.min(
        100,
        Math.round((totalActual / totalExpected) * 100)
    );
}

/**
 * Cumplimiento global de toda la rutina.
 */
const statsCompliance = computed(() => {
    if (!workout.value) return 0;

    let totalExpected = 0;
    let totalActual = 0;

    workout.value.dataRoutine.bloques.forEach((bloque, bi) => {
        bloque.ejercicios.forEach((ej, ei) => {
            for (let si = 0; si < bloque.series; si++) {
                const log = workout.value.logs?.[
                    getLogIndex(bi, si)
                ];

                const expected = getExpectedValue(ej);
                const actual = getActualValue(log, ei, ej);

                if (expected > 0) {
                    totalExpected += expected;
                    totalActual += actual;
                }
            }
        });
    });

    if (totalExpected <= 0) return 0;

    return Math.min(
        100,
        Math.round((totalActual / totalExpected) * 100)
    );
});

/**
 * Mensaje descriptivo del cumplimiento global.
 */
const statsComplianceMessage = computed(() => {
    const percentage = statsCompliance.value;

    if (percentage >= 100) {
        return 'Completaste todos los objetivos de la rutina.';
    }
    if (percentage >= 90) {
        return 'Excelente cumplimiento de los objetivos.';
    }
    if (percentage >= 80) {
        return 'Muy buen cumplimiento. Estuviste cerca de completar todos los objetivos.';
    }
    if (percentage >= 70) {
        return 'Buen trabajo. Todavía hay margen para completar más del objetivo.';
    }
    return 'Quedaron varios objetivos por debajo de lo esperado.';
});

/**
 * Clase Bootstrap según el cumplimiento del set.
 */
function getSetComplianceClass(ej, log, ei) {
    const percentage = getSetCompliance(ej, log, ei);

    if (percentage >= 100) {
        return 'text-success';
    }
    if (percentage >= 80) {
        return 'text-warning';
    }
    return 'text-danger';
}

/**
 * Elimina el entrenamiento.
 */
const deleteWorkout = async () => {
    const ok = await confirmAction(proxy.$swal, {
        title: '¿Seguro quieres eliminar este entrenamiento?',
        text: 'Se perderán los datos para siempre'
    });

    if (!ok) return;

    try {
        await workoutStore.deleteWorkout(workoutId);
    } catch (err) {
        console.error('Error al eliminar workout:', err);
    } finally {
        router.push({ name: 'DoneWorkouts' });
    }
};

onMounted(async () => {
    if (!workoutId) {
        router.push({ name: 'DoneWorkouts' });
        return;
    }

    try {
        // Intentamos obtener el entrenamiento localmente desde el store
        let w = workoutStore.getWorkoutLocal ? workoutStore.getWorkoutLocal(workoutId) : null;

        if (!w && typeof workoutStore.getDoneWorkout === 'function') {
            w = await workoutStore.getDoneWorkout(workoutId);
        }

        workout.value = w;
    } catch (err) {
        console.error('Detalle workout:', err);
        router.push({ name: 'DoneWorkouts' });
    }
});

watch(isLoading, (nuevoValor) => {
    if (!nuevoValor && !workout.value) {
        workout.value = workoutStore.getWorkoutLocal ? workoutStore.getWorkoutLocal(route.query.id) : null;
    }
});
</script>


<style scoped>
.card-info {
    border: 1px solid rgba(255, 255, 255, .05);
}

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