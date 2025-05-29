<template>
    <div class="contenedor">
        <h1 class="mt-md-5">Detalle de Entreno</h1>

        <div v-if="isLoadingInfo" class="loader"></div>
        <div v-if="workout" class="detail-container">

            <!-- Datos generales -->
            <p class="h5 text-start py-3">
                Fecha: <strong>{{ formatDate(workout.createdAt) }}</strong><br>
                Rutina: <strong>{{ workout.dataRoutine.nombre }}</strong><br>
                Notas: <em v-if="workout.notes">{{ workout.notes }}</em>
                <em v-else class="text-muted">Sin notas</em>
            </p>

            <!-- Recorrido por bloques y series -->
            <div v-for="(bloque, bi) in workout.dataRoutine.bloques" :key="bi" class="mb-3">
                <h5>Bloque {{ bi + 1 }} ({{ bloque.series }} series)</h5>
                <div v-for="si in bloque.series" :key="si" class="px-3 mb-2">
                    <p class="text-start"><strong>Serie {{ si }}</strong></p>
                    <ul class="text-start ps-0">
                        <li v-for="(ej, ei) in bloque.ejercicios" :key="ei" class="mt-3 d-flex justify-content-between">
                            <span class="w-50">{{ ei + 1 }}° {{ ej.nombre }}</span>
                            <div class="vr mx-1"></div>
                            <span class="w-50 text-end fs-justify info-serie">Meta: {{ ej.repeticiones }} reps,
                                Hecho: {{ workout.logs[getLogIndex(bi, si - 1)].actualReps[ei] }} reps</span>

                        </li>
                    </ul>
                    <hr>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { useProfileStore } from '@/stores/profile';

// router + store
const route = useRoute();
const router = useRouter();
const profileStore = useProfileStore();

// estado
const workout = ref(null);
const isLoadingInfo = ref(true);

function formatDate(iso) {
    const d = new Date(iso);
    return `${String(d.getDate()).padStart(2, '0')}/` +
        `${String(d.getMonth() + 1).padStart(2, '0')}/` +
        d.getFullYear();
}

/**
 * Dado bloqueIndex y serieIndex, devuelve la posición en
 * workout.logs (que está aplanado por bloque × series).
 */
function getLogIndex(bloqueIndex, serieIndex) {
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
    const id = route.query.id;
    if (!id) {
        router.push({ name: 'DoneWorkouts' });
        return;
    }

    try {
        // Primero intento local
        let w = profileStore.getDoneWorkoutLocal(id);
        // Si no estaba en cache, lo traigo de Firestore
        if (!w) {
            w = await profileStore.getDoneWorkout(id);
            // // y lo guardo en el store para futuras lecturas
            // profileStore.profile.workouts.push(w);
        }
        workout.value = w;
    } catch (err) {
        console.error('Detalle workout:', err);
        router.push({ name: 'DoneWorkouts' });
    } finally {
        isLoadingInfo.value = false;
    }
});
</script>

<style scoped>
.contenedor {
    padding-left: 0px;
    padding-right: 0px;
    padding-top: 100px;
    display: flex;
    flex-direction: column;
    width: 100%;
}

.detail-container {
    width: 100%;
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