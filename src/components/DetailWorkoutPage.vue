<template>
    <div class="contenedor">
        <h1 class="mt-md-5">Detalle de Entreno</h1>

        <div v-if="isLoading" class="loader"></div>
        <div v-if="workout" class="detail-container">

            <!-- Datos generales -->
            <p class="h5 text-start py-3 px-3">
                Fecha: <strong class="ms-2">{{ formatDate(workout.createdAt) }}</strong><br>
                Rutina: <strong class="ms-2">{{ workout.dataRoutine.nombre }}</strong><br>
                Notas: <em class="ms-2" v-if="workout.notes">{{ workout.notes }}</em>
                <em v-else class="text-muted ms-2">Sin notas</em>
            </p>

            <!-- Recorrido por bloques y series -->
            <div v-for="(bloque, bi) in workout.dataRoutine.bloques" :key="bi" class="mb-3">
                <h5 class="d-flex justify-content-between text-info px-3">
                    <strong>Bloque {{ bi + 1 }}</strong> <small><strong>({{ bloque.series }} series)</strong></small>
                </h5>
                <div v-for="si in bloque.series" :key="si" class="px-3 mb-2">
                    <h5 class="text-center text-info mb-0"><strong>Serie {{ si }}</strong></h5>
                    <ul class="text-start px-1">
                        <li v-for="(ej, ei) in bloque.ejercicios" :key="ei" class="mt-3 d-flex justify-content-between">
                            <span class="w-50 pe-3">
                                <strong class="text-info">{{ ei + 1 }}°</strong>
                                {{ ej.nombre }}
                            </span>
                            <div class="vr mx-1"></div>
                            <table class=" table-sm w-100 text-center">
                                <thead>
                                    <tr class="text-light">
                                        <th class="text-start">Meta</th>
                                        <th>Hecho</th>
                                        <th class="text-end">Resto</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td class="text-info text-start">
                                            {{ ej.repeticiones }} reps
                                            <span v-if="ej.tiempo"> + {{ ej.tiempo }} segs</span>
                                        </td>
                                        <td class="text-info">
                                            {{ workout.logs[getLogIndex(bi, si - 1)].actualReps[ei] }} reps
                                            <span v-if="ej.tiempo">
                                                + {{ workout.logs[getLogIndex(bi, si - 1)].actualSegs[ei] }} segs
                                            </span>
                                        </td>
                                        <td class="text-end" :class="getComparisonClass(
                                            ej,
                                            workout.logs[getLogIndex(bi, si - 1)].actualReps[ei],
                                            workout.logs[getLogIndex(bi, si - 1)].actualSegs[ei]
                                        )">
                                            {{
                                                getComparisonText(
                                                    ej,
                                                    workout.logs[getLogIndex(bi, si - 1)].actualReps[ei],
                                                    workout.logs[getLogIndex(bi, si - 1)].actualSegs[ei]
                                                )
                                            }}
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </li>
                    </ul>
                    <hr>
                </div>
            </div>
        </div>
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
        let w = profileStore.getDoneWorkoutLocal(workoutId);
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

    return result.trim() || 'Igual';
}

const getComparisonClass = (ej, actualReps, actualSegs) => {
    const repsOk = actualReps >= ej.repeticiones;
    const segsOk = ej.tiempo ? actualSegs >= ej.tiempo : true;
    return (repsOk && segsOk) ? 'text-didit' : 'text-danger';
}

</script>

<style scoped>
.contenedor {
    padding-left: 0px;
    padding-right: 0px;
    padding-top: 100px;
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-bottom: 3rem;
}

.detail-container {
    width: 100%;
}

.text-didit {
    color: rgb(52, 228, 52);
}

tbody td {
    width: 28%;
}

@media only screen and (min-width: 768px) {
    .contenedor {
        padding-left: 160px;
        padding-top: 0px;
    }

    .detail-container {
        width: 90%;
        max-width: 700px;
    }
}
</style>