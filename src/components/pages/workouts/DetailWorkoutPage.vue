<template>
    <div class="workout-detail">

        <h1 class="title my-md-5">Detalle de Entreno</h1>

        <div v-if="isLoading" class="loader"></div>

        <section v-if="workout" class="detail-container">

            <!-- Info general -->
            <header class="workout-meta">
                <div class="meta-row">
                    <span class="label">Fecha:</span>
                    <span class="value">{{ formatDate(workout.date) }}</span>
                </div>

                <div class="meta-row">
                    <span class="label">Rutina:</span>
                    <span class="value">{{ workout.dataRoutine.nombre }}</span>
                </div>

                <div class="meta-row">
                    <span class="label">Comentarios:</span>
                    <span class="value muted" v-if="!workout.notes">-</span>
                    <span class="value" v-else>{{ workout.notes }}</span>
                </div>
            </header>

            <hr />

            <!-- Bloques -->
            <section v-for="(bloque, bi) in workout.dataRoutine.bloques" :key="bi" class="block">
                <header class="block-header">
                    <span class="block-title">Bloque {{ bi + 1 }}</span>
                    <span class="block-meta">{{ bloque.series }} series</span>
                </header>

                <!-- Series -->
                <section v-for="si in bloque.series" :key="si" class="series">
                    <div class="series-title">Serie {{ si }}</div>

                    <!-- Ejercicios -->
                    <article v-for="(ej, ei) in bloque.ejercicios" :key="ei" class="exercise">
                        <div class="exercise-info">
                            <span class="exercise-index">{{ ei + 1 }}</span>
                            <div class="exercise-text">
                                <span class="exercise-name">{{ ej.nombre }}</span>
                                <span v-if="ej.notas" class="exercise-notes">
                                    {{ ej.notas }}
                                </span>
                            </div>
                        </div>

                        <div class="exercise-compare">
                            <div class="compare-column">
                                <span class="compare-label">Meta</span>
                                <span>
                                    {{ ej.repeticiones }} reps
                                    <span v-if="ej.tiempo">· {{ ej.tiempo }}s</span>
                                </span>
                            </div>

                            <div class="compare-column">
                                <span class="compare-label">Hecho</span>
                                <span>
                                    {{ workout.logs[getLogIndex(bi, si - 1)].actualReps[ei] }} reps
                                    <span v-if="ej.tiempo">
                                        · {{ workout.logs[getLogIndex(bi, si - 1)].actualSegs[ei] }}s
                                    </span>
                                </span>
                            </div>

                            <div class="compare-column result" :class="getComparisonClass(
                                ej,
                                workout.logs[getLogIndex(bi, si - 1)].actualReps[ei],
                                workout.logs[getLogIndex(bi, si - 1)].actualSegs[ei]
                            )">
                                {{ getComparisonText(
                                    ej,
                                    workout.logs[getLogIndex(bi, si - 1)].actualReps[ei],
                                    workout.logs[getLogIndex(bi, si - 1)].actualSegs[ei]
                                ) }}
                            </div>
                        </div>
                    </article>
                </section>
                <hr />

            </section>
            <button class="btn btn-danger" @click.stop="deleteWorkout()">
                <i class="bi bi-trash3"></i>
            </button>
        </section>
    </div>
</template>


<script setup>
import { ref, onMounted, watch } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { useProfileStore } from '@/stores/profile';
import { storeToRefs } from 'pinia'

// router + store
const route = useRoute();
const router = useRouter();
const profileStore = useProfileStore();
const workoutId = route.query.id;


// estado
const workout = ref(null);
const { isLoading } = storeToRefs(profileStore);

const deleteWorkout = async () => {
    if (!confirm('¿Confirma que desea eliminar este entrenamiento?')) return;

    try {
        await profileStore.deleteWorkout(workoutId);
    } catch (err) {
        console.error('Error al eliminar workout:', err);
    } finally {
        router.push({ name: 'DoneWorkouts' });
    }
}

const formatDate = (iso) => {
    const d = new Date(iso);
    return `${String(d.getDate()).padStart(2, '0')}/` +
        `${String(d.getMonth() + 1).padStart(2, '0')}/` +
        d.getFullYear();
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
        workout.value = profileStore.getDoneWorkoutLocal(route.query.id);
    }
});

const getComparisonText = (ej, actualReps, actualSegs) => {
    const repsDiff = actualReps - ej.repeticiones;
    const segsDiff = (ej.tiempo ? actualSegs - ej.tiempo : 0);
    let result = '';

    if (repsDiff !== 0) result += `${repsDiff > 0 ? '+' : ''}${repsDiff} reps `;
    if (ej.tiempo && segsDiff !== 0) result += `${segsDiff > 0 ? '+' : ''}${segsDiff} segs`;

    return result.trim() || 'Logrado';
}

const getComparisonClass = (ej, actualReps, actualSegs) => {
    const repsOk = actualReps >= ej.repeticiones;
    const segsOk = ej.tiempo ? actualSegs >= ej.tiempo : true;
    return (repsOk && segsOk) ? 'text-didit' : 'text-danger';
}

</script>

<style scoped>
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

.title {
    margin-bottom: 2rem;
}

.card {
    width: 100%;
    max-width: 800px;
}

.workout-meta {
    display: flex;
    flex-direction: column;
    text-align: left;
    gap: 0.75rem;
}

.meta-row {
    display: flex;
    gap: 0.5rem;
}

.label {
    color: #9ca3af;
    min-width: 90px;
}

.value {
    font-weight: 500;
}

.muted {
    color: #9ca3af;
}

.block {
    margin-top: 2rem;
}

.block-header {
    display: flex;
    justify-content: space-between;
    margin-bottom: 1rem;
}

.block-title {
    font-weight: 600;
}

.block-meta {
    color: #9ca3af;
}

.series {
    margin-bottom: 1.5rem;
}

.series-title {
    text-align: center;
    color: #6b7280;
    margin-bottom: 1rem;
}

.exercise {
    padding: 1rem;
    border-radius: 12px;
    border: 1px solid rgba(255, 255, 255, 0.05);
    margin-bottom: 1rem;
}

.exercise-info {
    display: flex;
    gap: 0.75rem;
    margin-bottom: 0.75rem;
}

.exercise-index {
    color: #60a5fa;
}

.exercise-name {
    font-weight: 500;
}

.exercise-notes {
    font-size: 0.85rem;
    color: #9ca3af;
}

.exercise-compare {
    display: flex;
    justify-content: space-between;
    text-align: center;
}

.compare-column {
    flex: 1;
}

.compare-label {
    display: block;
    font-size: 0.75rem;
    color: #9ca3af;
    margin-bottom: 0.25rem;
}

.result {
    font-weight: 500;
}

.text-didit {
    color: rgb(52, 228, 52);
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